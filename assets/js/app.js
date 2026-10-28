/* =========================================================
   个人收藏馆 · 应用逻辑
   纯前端静态站，所有个人数据存放在浏览器 localStorage
   ========================================================= */
(function () {
'use strict';

var LS = {
  fav:      'museum.fav.v1',
  note:     'museum.note.v1',
  myscore:  'museum.myscore.v1',
  status:   'museum.status.v1',
  override: 'museum.override.v1',
  custom:   'museum.custom.v1',
  links:    'museum.links.v1',
  ui:       'museum.ui.v1'
};

/* ---------------- 存储工具 ---------------- */
function load(k, d) {
  try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d; }
  catch (e) { return d; }
}
function save(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }

var store = {
  fav:      load(LS.fav, []),
  note:     load(LS.note, {}),
  myscore:  load(LS.myscore, {}),
  status:   load(LS.status, {}),
  override: load(LS.override, {}),
  custom:   load(LS.custom, []),
  links:    load(LS.links, {}),
  ui:       load(LS.ui, { view: 'grid', perPage: 36 })
};
function persist(k) { save(LS[k], store[k]); }

/* ---------------- 数据聚合 ---------------- */
var CATS = window.CATS || {};
var RAW  = window.DB  || {};
var CAT_KEYS = ['games', 'videos', 'novels', 'music', 'books'];

var DATA = {};
CAT_KEYS.forEach(function (k) {
  DATA[k] = (RAW[k] || []).concat(store.custom.filter(function (it) { return it.cat === k; }));
});

function allItems() {
  var out = [];
  CAT_KEYS.forEach(function (k) { out = out.concat(DATA[k]); });
  return out;
}
function findItem(id) {
  var parts = String(id).split('/');
  if (parts.length === 2 && DATA[parts[0]]) {
    return DATA[parts[0]].filter(function (x) { return x.id === parts[1]; })[0] || null;
  }
  var hit = null;
  CAT_KEYS.some(function (k) {
    var f = DATA[k].filter(function (x) { return x.id === id; })[0];
    if (f) { hit = f; return true; }
    return false;
  });
  return hit;
}

/* 应用用户的本地覆盖字段 */
function ov(item) {
  var o = store.override[item.cat + '/' + item.id];
  if (!o) return item;
  var m = {};
  for (var k in item) m[k] = item[k];
  for (var j in o) m[j] = o[j];
  m._edited = true;
  return m;
}
function setOv(cat, id, patch) {
  var key = cat + '/' + id;
  store.override[key] = Object.assign({}, store.override[key] || {}, patch);
  persist('override');
}

/* ---------------- 评分 ---------------- */
function normScore(s) { // 归一化到 0-10
  if (s.val == null || !s.max) return null;
  return (s.val / s.max) * 10;
}
function aggScore(item) {
  var arr = (item.scores || []).map(normScore).filter(function (x) { return x != null && !isNaN(x); });
  if (!arr.length) return null;
  return arr.reduce(function (a, b) { return a + b; }, 0) / arr.length;
}
function scoreClass(v) { return v == null ? '' : (v >= 8 ? '' : (v >= 6.5 ? 'mid' : 'low')); }
function fmtScore(v) { return v == null ? '暂无' : v.toFixed(1); }
function pillHtml(item) {
  var v = aggScore(item);
  var extra = store.myscore[item.cat + '/' + item.id];
  var s = '<span class="score-pill ' + scoreClass(v) + '">' + fmtScore(v) + '</span>';
  if (extra) s += '<span class="tag acc" title="我的评分">我 ' + extra + '</span>';
  return s;
}

/* ---------------- 收藏 / 状态 ---------------- */
function uid(item) { return item.cat + '/' + item.id; }
function isFav(item) { return store.fav.indexOf(uid(item)) >= 0; }
function toggleFav(item) {
  var k = uid(item), i = store.fav.indexOf(k);
  if (i >= 0) { store.fav.splice(i, 1); toast('已取消收藏'); }
  else { store.fav.push(k); toast('已加入收藏 ★'); }
  persist('fav'); refreshCounts();
  return i < 0;
}
var STATUS = {
  '':      { label: '未标记', cls: '' },
  'want':  { label: '想要',   cls: '#5aa9e6' },
  'doing': { label: '进行中', cls: '#e8b04b' },
  'done':  { label: '已完成', cls: '#5ec26a' },
  'drop':  { label: '弃坑',   cls: '#e2685f' }
};
function getStatus(item) { return store.status[uid(item)] || ''; }

/* ---------------- 工具 ---------------- */
function esc(s) {
  if (s == null) return '';
  return String(s).replace(/[&<>"']/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
  });
}
function toast(msg) {
  var t = document.getElementById('toast');
  t.textContent = msg; t.hidden = false;
  clearTimeout(toast._t);
  toast._t = setTimeout(function () { t.hidden = true; }, 1900);
}
function uniq(a) { return a.filter(function (x, i) { return a.indexOf(x) === i; }); }
function decadeOf(y) { return y ? (Math.floor(y / 10) * 10) + 's' : '未知'; }
function $(sel, root) { return (root || document).querySelector(sel); }
function el(html) { var d = document.createElement('div'); d.innerHTML = html.trim(); return d.firstChild; }

/* ---------------- 路由 ---------------- */
var route = { name: 'home' };
function parseHash() {
  var h = location.hash.replace(/^#\/?/, '');
  if (!h) return { name: 'home' };
  var p = h.split('/');
  if (p[0] === 'c' && p[1]) return { name: 'cat', cat: p[1] };
  if (p[0] === 'i' && p[1] && p[2]) return { name: 'item', cat: p[1], id: decodeURIComponent(p.slice(2).join('/')) };
  if (p[0] === 's' && p[1] && p[2]) return { name: 'series', cat: p[1], series: decodeURIComponent(p.slice(2).join('/')) };
  if (p[0] === 'platforms') return { name: 'platforms' };
  if (p[0] === 'favorites') return { name: 'favorites' };
  if (p[0] === 'manage') return { name: 'manage' };
  if (p[0] === 'about') return { name: 'about' };
  return { name: 'home' };
}
function go(hash) { location.hash = hash; }
function goItem(item) { go('#/i/' + item.cat + '/' + item.id); }

/* ---------------- 筛选状态 ---------------- */
var filterState = {};
var facetExpanded = {}; /* 记录本会话内已点击“展开全部”的维度：cat|key -> true，重渲染后保持展开，不自动收缩 */
function fsFor(cat) {
  if (!filterState[cat]) {
    filterState[cat] = { facets: {}, q: '', sort: (CATS[cat] && CATS[cat].defaultSort) || 'score', dir: 'desc', favOnly: false, page: 1, status: '' };
  }
  return filterState[cat];
}

function facetValues(cat, key) {
  var m = {};
  DATA[cat].forEach(function (it) {
    var v = facetRaw(it, key);
    (Array.isArray(v) ? v : [v]).forEach(function (x) {
      if (x == null || x === '') return;
      m[x] = (m[x] || 0) + 1;
    });
  });
  return m;
}
function facetRaw(it, key) {
  if (key === 'decade') return decadeOf(it.year);
  if (key === 'year') return it.year;
  if (key === 'region') return it.region;
  if (it.f && it.f[key] != null) return it.f[key];
  if (it[key] != null) return it[key];
  return [];
}
function itemMatches(it, f) {
  var s = ov(it);
  if (f.favOnly && store.fav.indexOf(uid(it)) < 0) return false;
  if (f.status && getStatus(it) !== f.status) return false;
  if (f.q) {
    var q = f.q.toLowerCase();
    var hay = [s.title, s.alt, s.summary, s.review, s.region, s.year,
      (s.tags || []).join(' '), (s.links || []).map(function (l) { return l.label; }).join(' ')]
      .join(' ').toLowerCase();
    var facets = s.f || {};
    Object.keys(facets).forEach(function (k) {
      var v = facets[k];
      hay += ' ' + (Array.isArray(v) ? v.join(' ') : v);
    });
    if (hay.indexOf(q) < 0) return false;
  }
  var cf = CATS[it.cat];
  if (!cf) return true;
  return cf.facets.every(function (fc) {
    var sel = f.facets[fc.key];
    if (!sel || !sel.length) return true;
    var vals = facetRaw(s, fc.key);
    if (!Array.isArray(vals)) vals = [vals];
    return sel.some(function (x) { return vals.indexOf(x) >= 0; });
  });
}
function sortItems(list, f) {
  var dir = f.dir === 'asc' ? 1 : -1;
  var key = f.sort;
  return list.slice().sort(function (a, b) {
    var A, B;
    if (key === 'score') { A = aggScore(a); B = aggScore(b); if (A == null) A = -1; if (B == null) B = -1; }
    else if (key === 'year') { A = a.year || 0; B = b.year || 0; }
    else if (key === 'title') { A = a.title || ''; B = b.title || ''; return dir * A.localeCompare(B, 'zh-CN'); }
    else if (key === 'myscore') {
      A = store.myscore[uid(a)] || 0; B = store.myscore[uid(b)] || 0;
      if (A === B) { A = aggScore(a) || 0; B = aggScore(b) || 0; }
    } else if (key === 'fav') {
      A = isFav(a) ? 1 : 0; B = isFav(b) ? 1 : 0;
      if (A === B) { A = aggScore(a) || 0; B = aggScore(b) || 0; }
    } else { A = a[key] || 0; B = b[key] || 0; }
    return dir * (A - B);
  });
}

function phFallback(img) {
  var p = img.parentNode;
  p.classList.add('ph');
  var t = img.getAttribute('data-ph-t') || '?';
  var pl = img.getAttribute('data-ph-p') || '';
  p.innerHTML = '<span class="ph-t">' + esc(t.slice(0, 6)) + '</span>' + (pl ? '<span class="ph-p">' + esc(pl) + '</span>' : '');
}

/* ---------------- 书籍获取渠道（模板集中配置，域名失效改这里） ----------------
   每条 {label, kind, tpl|url, global}
   - tpl 中的 {q} 会被替换为检索词：中文站用书名，global 站用原名 alt
   - 检索词自动截断副标题（“叫魂：1768年中国妖术大恐慌” → “叫魂”），提高命中率
   - 只有 url 没有 tpl 的条目是固定入口（首页/导航页，需自己搜）
   更完整的入口清单见「平台与获取方式」页的电子书分组。 */
var BOOK_SOURCES = [
  {
    group: '综合电子书库',
    items: [
      { label: 'Z-Library', kind: '下载', tpl: 'https://zh.z-library.sk/s/{q}', global: true },
      { label: 'Z-Library 备用域名', kind: '镜像', url: 'https://z-library.ec/' },
      { label: "Anna's Archive", kind: '下载', tpl: "https://annas-archive.gl/search?q={q}", global: true },
      { label: 'Library Genesis', kind: '下载', tpl: 'https://libgen.rs/search.php?req={q}', global: true },
      { label: '鸠摩搜书', kind: '下载', tpl: 'https://www.jiumodiary.com/Search.aspx?kw={q}' },
      { label: '熊猫搜书', kind: '导航', url: 'https://xmsoushu.com/' },
      { label: '苦瓜书盘', kind: '下载', url: 'https://www.kgbook.com/' }
    ]
  },
  {
    group: '正版购买 / 在线阅读',
    items: [
      { label: '微信读书', kind: '阅读', tpl: 'https://weread.qq.com/web/search/global?keyword={q}' },
      { label: '豆瓣读书', kind: '资料', tpl: 'https://search.douban.com/book/subject_search?search_text={q}&cat=1001' },
      { label: '京东图书', kind: '购买', tpl: 'https://search.jd.com/Search?keyword={q}' },
      { label: '当当网', kind: '购买', tpl: 'https://search.dangdang.com/?key={q}' },
      { label: '中图网（特价）', kind: '购买', url: 'http://www.bookschina.com/' },
      { label: 'Amazon Books', kind: '购买', tpl: 'https://www.amazon.com/s?k={q}', global: true },
      { label: 'Google Books', kind: '资料', tpl: 'https://www.google.com/search?tbm=bks&q={q}', global: true }
    ]
  },
  {
    group: '公版 / 古籍 / 开放资源',
    items: [
      { label: '古腾堡计划', kind: '下载', tpl: 'https://www.gutenberg.org/ebooks/search/?query={q}', global: true },
      { label: '维基文库', kind: '阅读', tpl: 'https://zh.wikisource.org/w/index.php?search={q}' },
      { label: 'Internet Archive', kind: '借阅', tpl: 'https://archive.org/search?query={q}', global: true },
      { label: 'Open Library', kind: '借阅', tpl: 'https://openlibrary.org/search?q={q}', global: true },
      { label: '中国哲学书电子化计划', kind: '古籍', tpl: 'https://ctext.org/searchbooks.pl?if=gb&searchu={q}' },
      { label: '书格（高清古籍）', kind: '下载', url: 'https://www.shuge.org/' }
    ]
  },
  {
    group: '学术文献 / 馆际传递',
    items: [
      { label: 'Sci-Hub（论文）', kind: '下载', url: 'https://sci-hub.se/' },
      { label: 'Google Scholar', kind: '检索', tpl: 'https://scholar.google.com/scholar?q={q}', global: true },
      { label: '全国图书馆参考咨询联盟', kind: '传递', url: 'http://www.ucdrs.superlib.net/' },
      { label: '国家哲学社会科学文献中心', kind: '免费', url: 'https://www.ncpssd.org/' },
      { label: '中国知网', kind: '检索', url: 'https://www.cnki.net/' }
    ]
  }
];

/* 副标题截断，提高站内搜索命中率 */
function qCut(v) {
  if (!v) return '';
  var i = v.indexOf('：');
  if (i < 0) i = v.indexOf(':');
  return (i > 1 ? v.slice(0, i) : v).trim();
}
function bookQueryText(s, global) {
  return qCut(global ? (s.alt || s.title) : (s.title || s.alt));
}

/* 详情页“全网获取渠道”面板 */
function bookSourcesHTML(s) {
  var h = '<div class="panel" style="margin-top:14px"><h3><span class="ico">🌐</span>全网获取渠道（已按书名自动填好检索词）</h3>';
  h += '<div class="callout" style="margin-bottom:11px"><span>⚠️</span><div>' +
    '灰色书站的域名经常变动，链接打不开时请到 <a href="#/platforms" style="color:var(--acc)">平台与获取方式</a> 页的「图书获取」分组查看备用入口；' +
    '英文原版请用原名检索命中率更高。下载内容请自行判断版权风险，条件允许时优先购买正版。</div></div>';
  for (var i = 0; i < BOOK_SOURCES.length; i++) {
    var g = BOOK_SOURCES[i];
    h += '<div class="src-group"><div class="src-title">' + esc(g.group) + '</div><div class="src-links">';
    for (var j = 0; j < g.items.length; j++) {
      var it = g.items[j];
      var q = encodeURIComponent(bookQueryText(s, !!it.global));
      var url = it.tpl ? it.tpl.replace('{q}', q) : it.url;
      var hint = it.tpl ? ('检索词：' + decodeURIComponent(q)) : '打开后自行搜索';
      h += '<a class="src-chip" href="' + esc(url) + '" target="_blank" rel="noopener" title="' + esc(hint) + '">' +
        '<b>' + esc(it.label) + '</b><i>' + esc(it.kind || '链接') + '</i></a>';
    }
    h += '</div></div>';
  }
  return h + '</div>';
}

window.phFallback = phFallback;

/* ---------------- 卡片渲染 ---------------- */
function cardHtml(item) {
  var s = ov(item);
  var cf = CATS[item.cat] || { facets: [] };
  var tagKeys = cf.cardTags || [];
  var tags = [];
  tagKeys.forEach(function (k) {
    var v = facetRaw(s, k);
    if (!Array.isArray(v)) v = [v];
    v.slice(0, 3).forEach(function (x) { if (x && tags.indexOf(x) < 0) tags.push(x); });
  });
  (s.tags || []).slice(0, 2).forEach(function (x) { if (tags.indexOf(x) < 0) tags.push(x); });
  tags = tags.slice(0, 5);

  var st = getStatus(item);
  var dot = st ? '<i class="state-dot" style="background:' + STATUS[st].cls + '" title="' + STATUS[st].label + '"></i>' : '';
  var plat = (s.platforms && s.platforms[0]) || (s.platformGroup && s.platformGroup[0]) || '';
  var imgHtml = s.image
    ? '<div class="card-img"><img src="' + esc(s.image) + '" alt="' + esc(s.title) + '" loading="lazy" data-ph-t="' + esc(s.title || '') + '" data-ph-p="' + esc(plat) + '" onerror="phFallback(this)"></div>'
    : '<div class="card-img ph"><span class="ph-t">' + esc((s.title || '?').slice(0, 6)) + '</span>' + (plat ? '<span class="ph-p">' + esc(plat) + '</span>' : '') + '</div>';

  return '' +
    '<div class="item' + (isFav(item) ? ' faved' : '') + (item.cat === 'books' ? ' book' : (item.cat === 'music' ? ' music' : '')) + '" data-id="' + esc(uid(item)) + '">' +
      dot +
      '<span class="fav-star' + (isFav(item) ? ' on' : '') + '" data-fav="' + esc(uid(item)) + '" title="收藏">★</span>' +
      imgHtml +
      '<div class="t">' + esc(s.title) + '</div>' +
      (s.alt ? '<div class="alt">' + esc(s.alt) + '</div>' : '') +
      '<div class="meta">' +
        (s.year ? '<span>' + s.year + '</span>' : '') +
        (s.region ? '<span>· ' + esc(s.region) + '</span>' : '') +
        pillHtml(s) +
      '</div>' +
      (s.summary ? '<div class="sum">' + esc(s.summary) + '</div>' : '') +
      (tags.length ? '<div class="tags">' + tags.map(function (t) { return '<span class="tag">' + esc(t) + '</span>'; }).join('') + '</div>' : '') +
    '</div>';
}

/* ---------------- 页面：首页 ---------------- */
function renderHome() {
  var total = allItems().length;
  var cats = CAT_KEYS.map(function (k) {
    var c = CATS[k];
    return '<div class="cat-card" data-go="#/c/' + k + '">' +
      '<span class="num">' + DATA[k].length + '</span>' +
      '<div class="ic">' + c.icon + '</div>' +
      '<h3>' + c.name + '</h3>' +
      '<p>' + c.desc + '</p>' +
      '</div>';
  }).join('');

  function topList(cat, n) {
    return sortItems(DATA[cat].slice(), { sort: 'score', dir: 'desc' }).slice(0, n).map(function (it) {
      var s = ov(it);
      return '<div class="item" data-id="' + esc(uid(it)) + '" style="padding:10px 12px">' +
        '<div class="t" style="font-size:13.5px;padding-right:0">' + esc(s.title) + '</div>' +
        '<div class="meta">' + (s.year || '') + ' ' + pillHtml(s) + '</div></div>';
    }).join('');
  }

  var favItems = store.fav.map(findItem).filter(Boolean);
  var favHtml = favItems.length
    ? '<div class="row-grid">' + favItems.slice(-8).reverse().map(cardHtml).join('') + '</div>'
    : '<div class="dim" style="padding:10px 0">还没有收藏任何条目。在任意卡片右上角点 ★ 即可加入收藏，收藏数据保存在本地浏览器中。</div>';

  var platCount = ((RAW.platforms || []).groups || []).reduce(function (a, g) { return a + g.items.length; }, 0);

  return '' +
  '<div class="hero">' +
    '<h1>个人收藏馆</h1>' +
    '<p>一个属于自己的"博物馆"：把玩过的游戏、看过的影视剧、读过的小说与书籍、听过的音乐集中编目。' +
    '这里<b>不存放任何实际内容</b>，只保存简介、评分、标签和获取入口链接，方便日后随时找回、检索与筛选。</p>' +
    '<div class="stat-grid" style="margin-top:18px">' +
      '<div class="stat"><div class="v">' + total + '</div><div class="k">条目总数</div></div>' +
      '<div class="stat"><div class="v">' + store.fav.length + '</div><div class="k">已收藏</div></div>' +
      '<div class="stat"><div class="v">' + platCount + '</div><div class="k">平台/资源入口</div></div>' +
      '<div class="stat"><div class="v">' + Object.keys(store.note).length + '</div><div class="k">个人笔记</div></div>' +
    '</div>' +
  '</div>' +

  '<div class="cat-grid">' + cats +
    '<div class="cat-card" data-go="#/platforms"><span class="num">↗</span><div class="ic">🧭</div><h3>平台与获取方式</h3><p>商店、模拟器、对战平台、字幕组、阅读与音乐服务等入口汇总。</p></div>' +
  '</div>' +

  '<div class="sec-title"><h2>★ 最近收藏</h2><div class="line"></div><a href="#/favorites">查看全部 →</a></div>' +
  favHtml +

  '<div class="sec-title"><h2>各馆高分榜</h2><div class="line"></div><span class="dim" style="font-size:12px">按多来源评分均值排序</span></div>' +
  '<div class="rank-row">' +
    CAT_KEYS.map(function (k) {
      return '<div class="panel rank-panel"><h3>' + CATS[k].icon + ' ' + CATS[k].name + ' Top 6</h3>' +
        '<div class="rank-list">' + topList(k, 6) + '</div>' +
        '<div class="rank-foot"><a href="#/c/' + k + '">进入 ' + CATS[k].name + '馆 →</a></div></div>';
    }).join('') +
  '</div>';
}

/* ---------------- 页面：分类 ---------------- */
function renderCat(cat) {
  var cf = CATS[cat];
  if (!cf) return '<div class="empty">未知分类</div>';
  var f = fsFor(cat);

  var facetsHtml = cf.facets.map(function (fc, idx) {
    var counts = facetValues(cat, fc.key);
    var keys = Object.keys(counts).sort(function (a, b) {
      if (fc.sortBy === 'name') return String(a).localeCompare(String(b), 'zh-CN');
      return counts[b] - counts[a] || String(a).localeCompare(String(b), 'zh-CN');
    });
    if (fc.sortBy === 'year') keys = keys.sort(function (a, b) { return b - a; });
    var limit = (fc.showAll || facetExpanded[cat + '|' + fc.key]) ? keys.length : 8;
    var sel = f.facets[fc.key] || [];
    var body = keys.slice(0, limit).map(function (k) {
      return '<span class="chip' + (sel.indexOf(k) >= 0 ? ' on' : '') + '" data-facet="' + fc.key + '" data-val="' + esc(k) + '">' +
        esc(k) + '<span class="n">' + counts[k] + '</span></span>';
    }).join('');
    var more = keys.length > limit
      ? '<span class="facet-more" data-more="' + fc.key + '">展开全部 ' + keys.length + ' 项 ▾</span>' : '';
    return '<div class="facet-block" data-fb="' + fc.key + '">' +
      '<div class="facet-h" data-toggle="' + fc.key + '"><span>' + fc.name + '</span>' +
      (sel.length ? '<span class="clr" data-clear="' + fc.key + '">清除</span>' : '<span class="clr">·</span>') + '</div>' +
      '<div class="facet-b">' + body + more + '</div></div>';
  }).join('');

  var sorts = (cf.sorts || []).map(function (s) {
    return '<option value="' + s.key + '"' + (f.sort === s.key ? ' selected' : '') + '>' + s.name + '</option>';
  }).join('');

  return '' +
  '<div class="sec-title" style="margin-top:0">' +
    '<h2>' + cf.icon + ' ' + cf.name + '</h2><div class="line"></div>' +
    '<span class="dim" style="font-size:12px">' + cf.desc + '</span>' +
  '</div>' +
  '<div class="cat-layout">' +
    '<div class="facets" id="facets">' +
      '<div class="facet-block"><div class="facet-h"><span>状态</span>' +
        (f.status ? '<span class="clr" data-clearstatus="1">清除</span>' : '<span class="clr">·</span>') + '</div><div class="facet-b">' +
        Object.keys(STATUS).filter(Boolean).map(function (k) {
          return '<span class="chip' + (f.status === k ? ' on' : '') + '" data-status="' + k + '">' + STATUS[k].label + '</span>';
        }).join('') +
        '<span class="chip' + (f.favOnly ? ' on' : '') + '" data-favonly="1">★ 仅收藏</span>' +
      '</div></div>' +
      facetsHtml +
      '<hr class="sep">' +
      '<button class="btn tiny" id="btnResetFilter" style="width:100%">重置全部筛选</button>' +
      '<div class="callout" style="margin:12px 0 0;font-size:11.5px">提示：同一维度内多选是"或"，不同维度之间是"且"。</div>' +
    '</div>' +
    '<div>' +
      '<div class="toolbar">' +
        '<input type="text" id="catSearch" placeholder="在' + cf.name + '内搜索…" value="' + esc(f.q) + '" style="min-width:180px">' +
        '<select id="catSort">' + sorts + '</select>' +
        '<button class="btn tiny" id="btnDir" title="切换升降序">' + (f.dir === 'desc' ? '↓ 降序' : '↑ 升序') + '</button>' +
        '<button class="btn tiny" id="btnViewMode">' + (store.ui.view === 'grid' ? '▦ 网格' : '☰ 列表') + '</button>' +
        '<span class="grow"></span>' +
        '<span class="result-count" id="resultCount"></span>' +
      '</div>' +
      '<div class="items cat-' + cat + ' ' + (store.ui.view === 'list' ? 'list' : '') + '" id="itemList"></div>' +
      '<div class="pager" id="pager"></div>' +
    '</div>' +
  '</div>';
}

function paintItems(cat) {
  var cf = CATS[cat], f = fsFor(cat);
  var list = DATA[cat].filter(function (it) { return itemMatches(it, f); });
  list = sortItems(list, f);
  var units = buildUnits(list);
  var total = units.length;
  var cols = gridCols();
  var per = Math.max(cols, Math.ceil(store.ui.perPage / cols) * cols);
  var pages = Math.max(1, Math.ceil(total / per));
  if (f.page > pages) f.page = pages;
  var slice = units.slice((f.page - 1) * per, f.page * per);

  var box = document.getElementById('itemList');
  if (!box) return;
  box.innerHTML = total
    ? slice.map(function (u) { return u.type === 'series' ? seriesCardHtml(u, cat) : cardHtml(u.item); }).join('')
    : '<div class="empty" style="grid-column:1/-1"><div class="big">🔍</div>没有符合条件的条目。<br>可以放宽筛选条件，或到「数据管理」新增自定义条目。</div>';
  var rc = document.getElementById('resultCount');
  if (rc) rc.textContent = '共 ' + total + ' 条 · 第 ' + f.page + '/' + pages + ' 页';

  var pg = document.getElementById('pager');
  if (pg) {
    if (pages <= 1) { pg.innerHTML = ''; }
    else {
      var h = '';
      h += '<button class="btn tiny" data-page="' + (f.page - 1) + '"' + (f.page === 1 ? ' disabled' : '') + '>上一页</button>';
      var from = Math.max(1, f.page - 3), to = Math.min(pages, f.page + 3);
      if (from > 1) h += '<button class="btn tiny" data-page="1">1</button>' + (from > 2 ? '<span class="dim">…</span>' : '');
      for (var i = from; i <= to; i++) h += '<button class="btn tiny' + (i === f.page ? ' primary' : '') + '" data-page="' + i + '">' + i + '</button>';
      if (to < pages) h += (to < pages - 1 ? '<span class="dim">…</span>' : '') + '<button class="btn tiny" data-page="' + pages + '">' + pages + '</button>';
      h += '<button class="btn tiny" data-page="' + (f.page + 1) + '"' + (f.page === pages ? ' disabled' : '') + '>下一页</button>';
      pg.innerHTML = h;
    }
  }
}

function gridCols() {
  var box = document.getElementById('itemList');
  if (!box) return 3;
  var w = box.clientWidth || 900;
  return Math.max(1, Math.floor((w + 13) / (258 + 13)));
}
function buildUnits(list) {
  var units = [], smap = {};
  list.forEach(function (it) {
    var s = ov(it);
    if (s.series) {
      if (!smap[s.series]) {
        smap[s.series] = { type: 'series', series: s.series, items: [] };
        units.push(smap[s.series]);
      }
      smap[s.series].items.push(it);
    } else {
      units.push({ type: 'single', item: it });
    }
  });
  return units;
}
function seriesCardHtml(unit, cat) {
  var items = unit.items;
  var rep = items.filter(function (it) { return ov(it).image; })[0] || items[0];
  var s = ov(rep);
  var imgHtml = s.image
    ? '<div class="card-img"><img src="' + esc(s.image) + '" alt="' + esc(unit.series) + '" loading="lazy" data-ph-t="' + esc(unit.series) + '" data-ph-p="' + items.length + ' 部" onerror="phFallback(this)"></div>'
    : '<div class="card-img ph"><span class="ph-t">' + esc(unit.series.slice(0, 6)) + '</span><span class="ph-p">' + items.length + ' 部作品</span></div>';
  var names = items.map(function (it) { return esc(ov(it).title); }).join('、');
  return '<div class="item series" data-go="#/s/' + cat + '/' + encodeURIComponent(unit.series) + '">' +
    imgHtml +
    '<div class="t">' + esc(unit.series) + ' <span class="series-n">' + items.length + ' 部</span></div>' +
    '<div class="meta"><span>系列合集</span></div>' +
    '<div class="sum">' + names + '</div>' +
    '<div class="tags"><span class="tag acc">系列</span></div>' +
  '</div>';
}

function renderSeries(cat, series) {
  var cf = CATS[cat];
  if (!cf) return '<div class="empty">未知分类</div>';
  var items = (DATA[cat] || []).filter(function (it) { return ov(it).series === series; });
  if (!items.length) return '<div class="empty"><div class="big">📂</div>未找到该系列。</div>';
  items = sortItems(items, { sort: 'year', dir: 'asc' });
  var rep = items.filter(function (it) { return ov(it).image; })[0] || items[0];
  var s = ov(rep);
  var imgHtml = s.image
    ? '<div class="series-hero"><img src="' + esc(s.image) + '" alt="' + esc(series) + '" onerror="this.parentNode.style.display=\'none\'"></div>'
    : '';
  var years = items.map(function (it) { return it.year; }).filter(Boolean);
  return '' +
  '<div class="detail">' +
    '<span class="back" data-go="#/c/' + cat + '">← 返回 ' + cf.name + '馆</span>' +
    '<div class="d-head">' +
      '<h1>' + esc(series) + ' <span class="tag acc">系列</span></h1>' +
      '<div class="meta" style="display:flex;gap:10px;flex-wrap:wrap;align-items:center">' +
        '<span class="tag blu">' + items.length + ' 部作品</span>' +
        (years.length ? '<span class="tag">' + Math.min.apply(null, years) + ' - ' + Math.max.apply(null, years) + '</span>' : '') +
      '</div>' +
    '</div>' +
    imgHtml +
    '<div class="panel"><h3>系列作品（按年份）</h3>' +
      '<div class="items">' + items.map(cardHtml).join('') + '</div>' +
    '</div>' +
  '</div>';
}
function bindSeries(cat, series) { /* data-go 已由 bindCommon 处理 */ }

/* ---------------- 页面：详情 ---------------- */
function relatedItems(item) {
  if (item.related && item.related.length) {
    var m = item.related.map(findItem).filter(Boolean);
    if (m.length >= 4) return m.slice(0, 4);
  }
  // 标签相似度自动推荐
  var cf = CATS[item.cat];
  var myTags = [];
  cf.facets.forEach(function (fc) {
    var v = facetRaw(item, fc.key);
    myTags = myTags.concat(Array.isArray(v) ? v : [v]);
  });
  myTags = myTags.filter(Boolean);
  return DATA[item.cat].filter(function (o) { return o.id !== item.id; })
    .map(function (o) {
      var sc = 0;
      cf.facets.forEach(function (fc) {
        var v = facetRaw(o, fc.key);
        v = Array.isArray(v) ? v : [v];
        v.forEach(function (x) { if (myTags.indexOf(x) >= 0) sc++; });
      });
      return { o: o, sc: sc };
    })
    .filter(function (x) { return x.sc > 0; })
    .sort(function (a, b) { return b.sc - a.sc || (aggScore(b.o) || 0) - (aggScore(a.o) || 0); })
    .slice(0, 4).map(function (x) { return x.o; });
}

function renderItem(cat, id) {
  var base = (DATA[cat] || []).filter(function (x) { return x.id === id; })[0];
  if (!base) return '<div class="empty"><div class="big">🗂</div>未找到该条目，可能已被删除。</div>';
  var s = ov(base);
  var cf = CATS[cat];
  var sc = aggScore(s);
  var st = getStatus(base);
  var note = store.note[uid(base)] || '';
  var my = store.myscore[uid(base)] || 0;
  var userLinks = store.links[uid(base)] || [];
  var links = (s.links || []).concat(userLinks);

  var facetRows = cf.facets.filter(function (fc) { return fc.key !== 'decade'; }).map(function (fc) {
    var v = facetRaw(s, fc.key);
    v = Array.isArray(v) ? v : [v];
    v = v.filter(function (x) { return x != null && x !== ''; });
    if (!v.length) return '';
    return '<div class="k">' + fc.name + '</div><div>' +
      v.map(function (x) {
        return '<span class="chip" data-jump="' + fc.key + '|' + esc(x) + '" style="margin:1px 4px 1px 0">' + esc(x) + '</span>';
      }).join('') + '</div>';
  }).join('');

  var scoreRows = (s.scores || []).map(function (x) {
    var n = normScore(x);
    return '<tr><td>' + esc(x.src) + '</td><td>' + (x.val != null ? x.val + ' / ' + x.max : '—') + '</td>' +
      '<td>' + (n != null ? n.toFixed(1) : '—') + '</td>' +
      '<td>' + (x.url ? '<a href="' + esc(x.url) + '" target="_blank" rel="noopener">查看 ↗</a>' : '<span class="dim">—</span>') + '</td></tr>';
  }).join('') || '<tr><td colspan="4" class="dim">暂无外部评分，可在下方手动补充。</td></tr>';

  var linkRows = links.map(function (l, i) {
    var isDl = /下载|购买/.test(l.kind || '');
    return '<div class="link-row' + (isDl ? ' primary' : '') + '"><span class="kind">' + esc(l.kind || '链接') + '</span>' +
      '<a href="' + esc(l.url) + '" target="_blank" rel="noopener" title="' + esc(l.url) + '">' + esc(l.label) + (isDl ? ' ↗' : '') + '</a>' +
      (i >= (s.links || []).length ? '<span class="del" data-dellink="' + i + '" title="删除自定义链接">✕</span>' : '') +
      '</div>';
  }).join('') || '<div class="dim">暂无链接。</div>';

  var headImg = s.image ? '<div class="detail-hero' + (cat === 'books' ? ' book' : (cat === 'music' ? ' music' : '')) + '"><img src="' + esc(s.image) + '" alt="' + esc(s.title) + '" onerror="this.parentNode.style.display=\'none\'"></div>' : '';
  var rel = relatedItems(base);
  var relHtml = rel.length
    ? '<div class="items" style="grid-template-columns:repeat(auto-fill,minmax(210px,1fr))">' + rel.map(cardHtml).join('') + '</div>'
    : '<div class="dim">暂无相关条目。</div>';

  return '' +
  '<div class="detail">' +
    '<span class="back" data-go="#/c/' + cat + '">← 返回 ' + cf.name + '馆</span>' +
    headImg +
    '<div class="d-head">' +
      '<h1>' + esc(s.title) + (s._edited ? ' <span class="tag blu">已本地修改</span>' : '') + '</h1>' +
      (s.alt ? '<div class="alt">' + esc(s.alt) + '</div>' : '') +
      '<div class="meta" style="display:flex;gap:10px;flex-wrap:wrap;align-items:center">' +
        (s.year ? '<span class="tag">' + s.year + ' 年</span>' : '') +
        (s.region ? '<span class="tag">' + esc(s.region) + '</span>' : '') +
        '<span class="tag blu">' + cf.name + '</span>' +
        (s.status ? '<span class="tag grn">' + esc(s.status) + '</span>' : '') +
        pillHtml(s) +
      '</div>' +
      '<div class="d-actions">' +
        '<button class="btn ' + (isFav(base) ? 'primary' : '') + '" id="btnFav">' + (isFav(base) ? '★ 已收藏' : '☆ 收藏') + '</button>' +
        '<div class="status-sel">' +
          Object.keys(STATUS).filter(Boolean).map(function (k) {
            return '<button class="btn tiny' + (st === k ? ' on' : '') + '" data-setstatus="' + k + '">' + STATUS[k].label + '</button>';
          }).join('') +
        '</div>' +
        '<button class="btn ghost" id="btnEditItem">✎ 编辑资料</button>' +
        '<button class="btn ghost" id="btnAddLink">＋ 添加链接</button>' +
      '</div>' +
    '</div>' +

    '<div class="d-grid">' +
      '<div>' +
        '<div class="panel"><h3>简介</h3><p style="margin:0;white-space:pre-wrap">' + esc(s.summary || '暂无简介。点击右上「编辑资料」补充。') + '</p></div>' +
        (s.review ? '<div class="panel"><h3>综合评价</h3><div style="white-space:pre-wrap">' + esc(s.review) + '</div>' +
          ((s.pros || s.cons) ? '<hr class="sep"><div class="proscons">' +
            '<div><div class="pc-h p">✚ 优点</div><ul>' + (s.pros || []).map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul></div>' +
            '<div><div class="pc-h c">✖ 不足</div><ul>' + (s.cons || []).map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul></div>' +
          '</div>' : '') + '</div>' : '') +
        '<div class="panel"><h3>相关条目</h3>' + relHtml + '</div>' +
        '<div class="panel"><h3>我的笔记</h3>' +
          '<textarea id="myNote" class="editable" rows="5" placeholder="写下你自己的评价、通关进度、观感、为什么想收藏…（自动保存到本地）">' + esc(note) + '</textarea>' +
          '<div class="hint">笔记只保存在你这台设备的浏览器里，可在「数据管理」导出备份。</div>' +
        '</div>' +
      '</div>' +

      '<div>' +
        '<div class="panel"><h3>综合评分</h3>' +
          '<div class="big-score"><span class="v ' + scoreClass(sc) + '">' + fmtScore(sc) + '</span><span class="o">' +
            (sc == null ? '尚无外部评分' : '/ 10 · ' + ((s.scores || []).length) + ' 个来源均值') + '</span></div>' +
          '<div class="bar"><i style="width:' + (sc ? sc * 10 : 0) + '%"></i></div>' +
          '<table class="src"><thead><tr><th>来源</th><th>原始分</th><th>折算</th><th>链接</th></tr></thead><tbody>' + scoreRows + '</tbody></table>' +
          '<div class="hint" style="margin-top:8px">折算规则：原始分 ÷ 满分 × 10，再取算术平均。</div>' +
        '</div>' +

        '<div class="panel"><h3>我的评分</h3>' +
          '<div class="rate" id="myRate">' +
            [1,2,3,4,5,6,7,8,9,10].map(function (n) {
              return '<span data-rate="' + n + '" class="' + (n <= my ? 'on' : '') + '">★</span>';
            }).join('') +
          '</div>' +
          '<div class="hint">点击星号打分（1-10），再次点击同一分值可清除。</div>' +
        '</div>' +

        '<div class="panel"><h3>资料</h3><div class="kv">' +
          '<div class="k">条目 ID</div><div class="dim" style="font-size:12px">' + esc(uid(base)) + '</div>' +
          facetRows +
        '</div></div>' +

        '<div class="panel"><h3>获取入口 / 链接</h3><div class="link-list">' + linkRows + '</div>' +
          '<div class="hint" style="margin-top:10px">更多平台入口见 <a href="#/platforms">平台与获取方式</a>。</div></div>' +
        (cat === 'books' ? bookSourcesHTML(s) : '') +
      '</div>' +
    '</div>' +
  '</div>';
}

/* ---------------- 页面：平台与获取方式 ---------------- */
function renderPlatforms(q) {
  var P = RAW.platforms || { groups: [] };
  var kw = (q || '').toLowerCase();
  var nav = P.groups.map(function (g) {
    return '<span class="chip" data-go="#/platforms" data-scroll="' + g.id + '">' + esc(g.name) + '</span>';
  }).join('');

  var body = P.groups.map(function (g) {
    var items = g.items.filter(function (it) {
      if (!kw) return true;
      return (it.name + ' ' + (it.desc || '') + ' ' + (it.for || '') + ' ' +
        (it.links || []).map(function (l) { return l.label; }).join(' ')).toLowerCase().indexOf(kw) >= 0;
    });
    if (!items.length) return '';
    return '<div class="plat-group" id="pg-' + g.id + '">' +
      '<h2>' + esc(g.icon || '·') + ' ' + esc(g.name) + '</h2>' +
      '<p class="gdesc">' + esc(g.desc || '') + '</p>' +
      '<div class="plat-cards">' + items.map(function (it) {
        var natureMap = { official: '正版/官方', community: '社区/开源', gray: '自行判断' };
        return '<div class="plat">' +
          '<div class="ph"><b>' + esc(it.name) + '</b><span class="nature ' + (it.nature || 'community') + '">' +
            (natureMap[it.nature] || '社区') + '</span></div>' +
          '<p>' + esc(it.desc || '') + '</p>' +
          '<div class="pl">' + (it.links || []).map(function (l) {
            return '<a href="' + esc(l.url) + '" target="_blank" rel="noopener">' + esc(l.label) + '</a>';
          }).join('') + '</div>' +
          (it.for ? '<div class="for">适用：' + esc(it.for) + '</div>' : '') +
        '</div>';
      }).join('') + '</div></div>';
  }).join('');

  return '' +
  '<div class="sec-title" style="margin-top:0"><h2>🧭 平台与获取方式</h2><div class="line"></div>' +
    '<input type="text" id="platSearch" placeholder="搜索平台…" value="' + esc(q || '') + '" style="width:180px"></div>' +
  '<div class="callout">本页只汇总<b>入口</b>与<b>索引仓库</b>，不存放任何实际内容。标注为「自行判断」的条目涉及版权灰色地带，' +
    '请自行确认所在地区法律与平台条款，优先选择正版与官方渠道；开源项目请遵守其许可证。</div>' +
  '<div class="plat-nav">' + nav + '</div>' +
  (body || '<div class="empty"><div class="big">🔍</div>没有匹配的平台</div>');
}

/* ---------------- 页面：收藏夹 ---------------- */
function renderFavorites() {
  var items = store.fav.map(findItem).filter(Boolean);
  var byCat = {};
  items.forEach(function (it) { (byCat[it.cat] = byCat[it.cat] || []).push(it); });

  var body = CAT_KEYS.filter(function (k) { return byCat[k] && byCat[k].length; }).map(function (k) {
    var list = sortItems(byCat[k], { sort: 'score', dir: 'desc' });
    return '<div class="sec-title"><h2>' + CATS[k].icon + ' ' + CATS[k].name +
      '</h2><div class="line"></div><span class="dim" style="font-size:12px">' + list.length + ' 条</span></div>' +
      '<div class="items">' + list.map(cardHtml).join('') + '</div>';
  }).join('');

  return '' +
  '<div class="sec-title" style="margin-top:0"><h2>★ 我的收藏</h2><div class="line"></div>' +
    '<button class="btn tiny" id="btnExportFav">导出收藏与笔记</button>' +
    '<button class="btn tiny" id="btnClearFav">清空收藏</button></div>' +
  (items.length ? body : '<div class="empty"><div class="big">★</div>收藏夹是空的。<br>去各个馆里点卡片右上角的 ★ 收藏吧。</div>');
}

/* ---------------- 页面：数据管理 ---------------- */
function renderManage() {
  var customHtml = store.custom.length
    ? store.custom.map(function (it) {
        return '<div class="link-row"><span class="kind">' + (CATS[it.cat] ? CATS[it.cat].name : it.cat) + '</span>' +
          '<a href="#/i/' + it.cat + '/' + it.id + '">' + esc(it.title) + '</a>' +
          '<span class="del" data-delcustom="' + esc(it.id) + '">✕ 删除</span></div>';
      }).join('')
    : '<div class="dim">暂无自定义条目。</div>';

  return '' +
  '<div class="sec-title" style="margin-top:0"><h2>⚙ 数据管理</h2><div class="line"></div></div>' +

  '<div class="two-col">' +
    '<div class="panel"><h3>新增自定义条目</h3>' +
      '<p class="muted" style="margin-top:0">想收藏一个内置数据里没有的作品？在这里添加。它会保存在浏览器本地，并出现在对应分类馆中，支持同样的筛选、评分和收藏。</p>' +
      '<button class="btn primary" id="btnAddItem">＋ 新建条目</button>' +
    '</div>' +
    '<div class="panel"><h3>备份与恢复</h3>' +
      '<p class="muted" style="margin-top:0">导出你的收藏、评分、笔记、自定义条目和链接为一个 JSON 文件；换电脑或换浏览器后可以一键导入恢复。</p>' +
      '<div style="display:flex;gap:8px;flex-wrap:wrap">' +
        '<button class="btn" id="btnExport">导出全部个人数据</button>' +
        '<button class="btn" id="btnImport">导入数据</button>' +
        '<button class="btn ghost" id="btnWipe">清空全部本地数据</button>' +
      '</div>' +
      '<input type="file" id="fileImport" accept=".json" style="display:none">' +
      '<div class="hint" style="margin-top:10px">导出的文件不包含内置种子数据，只包含你个人的修改。</div>' +
    '</div>' +
  '</div>' +

  '<div class="panel"><h3>我的自定义条目（' + store.custom.length + '）</h3><div class="link-list">' + customHtml + '</div></div>' +

  '<div class="panel"><h3>扩充内置数据（进阶）</h3>' +
    '<p class="muted">内置数据是普通 JS 文件，直接用文本编辑器打开就能加条目：</p>' +
    '<pre class="code">assets/js/data/games.js   ← 游戏\nassets/js/data/videos.js  ← 影视\nassets/js/data/novels.js  ← 小说\nassets/js/data/music.js   ← 音乐\nassets/js/data/books.js   ← 书籍\nassets/js/data/platforms.js ← 平台入口</pre>' +
    '<p class="muted">条目格式（复制一份改字段即可）：</p>' +
    '<pre class="code">{\n  id: "唯一英文id", cat: "games",\n  title: "中文名", alt: "原名", year: 2020, region: "日本",\n  f: { platformGroup:["主机"], genre:["角色扮演"], playMode:["单人"] },\n  scores: [ {src:"Metacritic", val:90, max:100, url:""},\n            {src:"豆瓣",       val:9.2, max:10, url:""} ],\n  summary: "简介", review: "评价",\n  pros:["优点1"], cons:["不足1"],\n  links: [ {label:"Steam 商店页", url:"https://...", kind:"购买"} ],\n  related: ["另一个id"], tags:["自定义标签"]\n}</pre>' +
    '<p class="muted">也可以先在网页上「新建条目」，然后到「数据管理」用下面的按钮把自定义条目导出为 JS 片段，粘贴进对应数据文件即可永久固化。</p>' +
    '<button class="btn" id="btnExportJs">导出自定义条目为 JS 片段</button>' +
  '</div>';
}

/* ---------------- 页面：说明 ---------------- */
function renderAbout() {
  return '' +
  '<div class="sec-title" style="margin-top:0"><h2>ℹ 使用说明</h2><div class="line"></div></div>' +
  '<div class="two-col">' +
    '<div class="panel"><h3>这个站是什么</h3>' +
      '<p>一个<b>纯本地</b>的个人收藏馆（数字博物馆）。它只编目"元信息"——名称、年份、分类标签、评分、简介、评价和获取入口链接，' +
      '<b>不下载也不存放任何游戏、影视、小说、音乐、书籍的实际内容文件</b>。</p>' +
      '<p>双击 <code>index.html</code> 即可在浏览器打开使用，无需安装任何东西、无需联网（点击外部链接时才需要网络）、不需要服务器、不上传任何数据。</p>' +
    '</div>' +
    '<div class="panel"><h3>五个馆</h3><ul style="margin:0;padding-left:18px;color:var(--fg2)">' +
      '<li><b>游戏</b> — 按平台大类 / 运行平台 / 游戏方式 / 题材 / 画面视角 / 地区 / 年代多维筛选，评分与年份排序。</li>' +
      '<li><b>故事影视</b> — 电影、剧集、动漫、动画电影（不含演讲、科普类内容）。</li>' +
      '<li><b>故事小说</b> — 网络小说、出版小说、轻小说等虚构叙事作品。</li>' +
      '<li><b>音乐</b> — 专辑、单曲、原声带、歌单。</li>' +
      '<li><b>书籍</b> — 非虚构类：科技、历史、科普、经济、心理、工具书、实体书等。</li>' +
    '</ul></div>' +
    '<div class="panel"><h3>怎么用</h3><ol style="margin:0;padding-left:18px;color:var(--fg2)">' +
      '<li>左侧选一个馆，用左栏标签筛选、上方搜索框检索、下拉框排序。</li>' +
      '<li>点卡片右上角 ★ 收藏；点卡片进入详情页。</li>' +
      '<li>详情页可以：看多来源评分均值、给自己的评分、写笔记、标记"想要/进行中/已完成/弃坑"、编辑资料、添加自定义链接、看自动推荐的相关条目。</li>' +
      '<li>「平台与获取方式」页汇总了商店、模拟器、对战平台、字幕组、阅读与音乐服务等入口。</li>' +
      '<li>「数据管理」页可以新建条目、导出/导入个人数据。</li>' +
    '</ol></div>' +
    '<div class="panel"><h3>关于数据准确性</h3>' +
      '<p>内置条目是根据公开测评网站与社区资料整理的<b>种子数据</b>，评分为整理时的参考值，并非实时抓取，可能与最新数据存在偏差；' +
      '简介与评价为概括性描述，链接以官方站、维基百科、豆瓣、Metacritic、IGDB、GitHub 索引仓库等公开页面为主。</p>' +
      '<p>所有条目都可以在详情页直接「编辑资料」覆盖为准确内容，修改只保存在你本地，并可随时导出备份。' +
      '想要长期维护，建议按「数据管理」页的说明直接编辑 <code>assets/js/data/*.js</code>。</p>' +
      '<p>资源类链接请自行判断合法性，优先支持正版。</p>' +
    '</div>' +
  '</div>';
}

/* ---------------- 弹层表单 ---------------- */
function openModal(html) {
  document.getElementById('modalBody').innerHTML = html;
  document.getElementById('modalMask').hidden = false;
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  document.getElementById('modalMask').hidden = true;
  document.body.style.overflow = '';
}

var EDIT_FIELDS = [
  { k: 'title',  n: '名称', t: 'text', req: 1 },
  { k: 'alt',    n: '原名 / 别名', t: 'text' },
  { k: 'year',   n: '年份', t: 'number' },
  { k: 'region', n: '地区', t: 'text' },
  { k: 'status', n: '状态（如：已完结 / 连载中）', t: 'text' },
  { k: 'summary',n: '简介', t: 'area', rows: 4 },
  { k: 'review', n: '综合评价', t: 'area', rows: 4 },
  { k: 'tags',   n: '自定义标签（逗号分隔）', t: 'text', arr: 1 }
];

function editForm(item) {
  var catOpts = CAT_KEYS.map(function (k) {
    return '<option value="' + k + '"' + (item && item.cat === k ? ' selected' : '') + '>' + CATS[k].name + '</option>';
  }).join('');

  var facetFields = '';
  if (item) {
    facetFields = CATS[item.cat].facets.filter(function (f) { return f.key !== 'decade'; }).map(function (fc) {
      var cur = facetRaw(item, fc.key);
      cur = (Array.isArray(cur) ? cur : [cur]).filter(Boolean);
      var all = Object.keys(facetValues(item.cat, fc.key));
      var opts = uniq(all.concat(cur));
      return '<div class="form-row"><label>' + fc.name + '（多选：Ctrl / ⌘ 点击）</label>' +
        '<select multiple size="4" data-facetkey="' + fc.key + '">' +
        opts.map(function (o) { return '<option value="' + esc(o) + '"' + (cur.indexOf(o) >= 0 ? ' selected' : '') + '>' + esc(o) + '</option>'; }).join('') +
        '</select></div>';
    }).join('');
  }

  openModal(
    '<h2>' + (item ? '编辑资料' : '新建条目') + '</h2>' +
    (item ? '<div class="callout" style="margin-bottom:14px">修改会作为<b>本地覆盖</b>保存，不会改动原始数据文件；可随时在「数据管理」导出备份。</div>' : '') +
    (item ? '' : '<div class="form-row"><label>所属馆 *</label><select id="fCat">' + catOpts + '</select></div>') +
    (item ? '<div class="form-grid">' + facetFields + '</div>' : '') +
    EDIT_FIELDS.map(function (f) {
      var v = item ? item[f.k] : '';
      if (f.arr) v = (v || []).join(', ');
      return '<div class="form-row"><label>' + f.n + (f.req ? ' *' : '') + '</label>' +
        (f.t === 'area'
          ? '<textarea rows="' + (f.rows || 3) + '" data-k="' + f.k + '">' + esc(v) + '</textarea>'
          : '<input type="' + f.t + '" data-k="' + f.k + '" value="' + esc(v) + '">') +
        '</div>';
    }).join('') +
    (item ? '<div class="form-row"><label>外部评分（每行一条：来源,分数,满分,链接）</label>' +
      '<textarea rows="4" id="fScores">' + esc((item.scores || []).map(function (s) {
        return [s.src, s.val, s.max, s.url || ''].join(',');
      }).join('\n')) + '</textarea>' +
      '<div class="hint">例：<code>Metacritic,92,100,https://...</code>　留空则清除全部外部评分</div></div>' : '') +
    '<div style="display:flex;gap:8px;justify-content:flex-end;margin-top:16px">' +
      (item ? '<button class="btn ghost" id="btnResetOv">恢复原始数据</button>' : '') +
      '<button class="btn" id="btnCancel">取消</button>' +
      '<button class="btn primary" id="btnSave">保存</button>' +
    '</div>'
  );

  $('#btnCancel').onclick = closeModal;

  if (item) {
    $('#btnResetOv').onclick = function () {
      delete store.override[item.cat + '/' + item.id];
      persist('override'); closeModal(); routeRender(); toast('已恢复原始数据');
    };
    $('#btnSave').onclick = function () {
      var patch = {};
      document.querySelectorAll('#modalBody [data-k]').forEach(function (inp) {
        var f = EDIT_FIELDS.filter(function (x) { return x.k === inp.dataset.k; })[0];
        var v = inp.value;
        if (f && f.arr) v = v.split(/[,，]/).map(function (x) { return x.trim(); }).filter(Boolean);
        if (f && f.t === 'number') v = v ? Number(v) : null;
        patch[inp.dataset.k] = v;
      });
      patch.f = Object.assign({}, item.f);
      document.querySelectorAll('#modalBody [data-facetkey]').forEach(function (sel) {
        var vals = Array.prototype.slice.call(sel.selectedOptions).map(function (o) { return o.value; });
        patch.f[sel.dataset.facetkey] = vals;
      });
      var sc = $('#fScores').value.split('\n').map(function (l) { return l.trim(); }).filter(Boolean).map(function (l) {
        var p = l.split(',');
        return { src: p[0].trim(), val: Number(p[1]), max: Number(p[2]) || 100, url: (p[3] || '').trim() };
      }).filter(function (x) { return x.src && !isNaN(x.val); });
      patch.scores = sc;
      setOv(item.cat, item.id, patch);
      closeModal(); routeRender(); toast('已保存修改');
    };
  } else {
    $('#fCat').onchange = function () { closeModal(); newItemModal(this.value); };
    $('#btnSave').onclick = function () {
      var cat = $('#fCat').value;
      var it = { id: 'u' + Date.now().toString(36), cat: cat, f: {}, links: [], scores: [], related: [] };
      document.querySelectorAll('#modalBody [data-k]').forEach(function (inp) {
        var f = EDIT_FIELDS.filter(function (x) { return x.k === inp.dataset.k; })[0];
        var v = inp.value;
        if (f && f.arr) v = v.split(/[,，]/).map(function (x) { return x.trim(); }).filter(Boolean);
        if (f && f.t === 'number') v = v ? Number(v) : null;
        it[inp.dataset.k] = v;
      });
      if (!it.title) { toast('请填写名称'); return; }
      CATS[cat].facets.forEach(function (fc) { if (fc.key !== 'decade') it.f[fc.key] = []; });
      store.custom.push(it); persist('custom');
      DATA[cat] = (RAW[cat] || []).concat(store.custom.filter(function (x) { return x.cat === cat; }));
      refreshCounts(); closeModal(); goItem(it); toast('已新增条目');
    };
  }
}
function newItemModal() { editForm(null); }

function addLinkForm(item) {
  openModal('<h2>添加链接</h2>' +
    '<div class="form-row"><label>类型</label><select id="lkKind">' +
      ['购买','下载','观看','阅读','收听','资料','社区','官方','工具','其他'].map(function (k) {
        return '<option>' + k + '</option>';
      }).join('') + '</select></div>' +
    '<div class="form-row"><label>显示名称 *</label><input type="text" id="lkLabel" placeholder="例：Steam 商店页 / 豆瓣条目"></div>' +
    '<div class="form-row"><label>网址 *</label><input type="url" id="lkUrl" placeholder="https://"></div>' +
    '<div style="display:flex;gap:8px;justify-content:flex-end;margin-top:16px">' +
      '<button class="btn" id="btnCancel">取消</button><button class="btn primary" id="btnSave">保存</button></div>');
  $('#btnCancel').onclick = closeModal;
  $('#btnSave').onclick = function () {
    var label = $('#lkLabel').value.trim(), url = $('#lkUrl').value.trim();
    if (!label || !url) { toast('名称和网址都要填'); return; }
    var k = uid(item);
    store.links[k] = (store.links[k] || []).concat([{ label: label, url: url, kind: $('#lkKind').value }]);
    persist('links'); closeModal(); routeRender(); toast('链接已添加');
  };
}

/* ---------------- 全局事件委托 ----------------
   卡片、左栏筛选标签、翻页按钮在「搜索 / 排序 / 翻页 / 切换视图 / 窗口缩放」时
   会被 innerHTML 整体重建。旧实现是每次路由渲染后逐个挂 onclick，重建出来的新
   节点没有任何事件 —— 表现就是"卡片点了没反应，切到别的模块再切回来又好了"。
   现在统一在 document 上只绑定一次，之后无论怎么重绘都始终有效。 */
var currentCat = null;

var DELEGATE_SEL = [
  '[data-fav]', '[data-scroll]', '[data-go]', '[data-id]', '[data-page]',
  '[data-val]', '[data-more]', '[data-clear]', '[data-clearstatus]',
  '[data-toggle]', '[data-status]', '[data-favonly]', '[data-delcustom]'
].join(',');

function has(node, attr) {
  return !!(node && node.dataset && node.dataset[attr] !== undefined);
}

function expandFacetBlock(cat, key, moreEl) {
  var fb = moreEl ? moreEl.closest('.facet-block') : null;
  if (!fb) return;
  facetExpanded[cat + '|' + key] = true; /* 记住展开状态，重渲染后不再收缩 */
  var counts = facetValues(cat, key);
  var keys = Object.keys(counts).sort(function (a, b) {
    return counts[b] - counts[a] || String(a).localeCompare(String(b), 'zh-CN');
  });
  var sel = (fsFor(cat).facets[key]) || [];
  var box = fb.querySelector('.facet-b');
  if (!box) return;
  box.innerHTML = keys.map(function (k) {
    return '<span class="chip' + (sel.indexOf(k) >= 0 ? ' on' : '') + '" data-facet="' + key +
      '" data-val="' + esc(k) + '">' + esc(k) + '<span class="n">' + counts[k] + '</span></span>';
  }).join('');
}

function onGlobalClick(e) {
  var t = e.target;
  if (!t || !t.closest) return;
  /* 用一次 closest(多选择器) 命中"最近的那个可交互元素"，
     避免点到 chip 里的计数 <span>、卡片里的图片时事件落空。 */
  var n = t.closest(DELEGATE_SEL);
  if (!n) return;

  /* 1) 收藏星：优先处理，且不冒泡成"打开详情" */
  if (has(n, 'fav')) {
    e.preventDefault();
    var fit = findItem(n.dataset.fav);
    if (!fit) return;
    var on = toggleFav(fit);
    n.classList.toggle('on', on);
    var card = n.closest('.item');
    if (card) card.classList.toggle('faved', on);
    var b = document.getElementById('btnFav');
    if (b) { b.classList.toggle('primary', on); b.textContent = on ? '★ 已收藏' : '☆ 收藏'; }
    return;
  }

  /* 2) 平台页锚点（元素同时带 data-go，锚点优先） */
  if (has(n, 'scroll')) {
    var node = document.getElementById('pg-' + n.dataset.scroll);
    if (node) { node.scrollIntoView({ behavior: 'smooth', block: 'start' }); return; }
    if (has(n, 'go')) { e.preventDefault(); go(n.dataset.go); }
    return;
  }

  /* 3) 站内跳转 */
  if (has(n, 'go')) { e.preventDefault(); go(n.dataset.go); return; }

  /* 4) 卡片 → 详情页 */
  if (has(n, 'id')) {
    var parts = n.dataset.id.split('/');
    go('#/i/' + parts[0] + '/' + parts.slice(1).join('/'));
    return;
  }

  /* 5) 翻页 */
  if (has(n, 'page')) {
    if (n.disabled || !currentCat) return;
    var fp = fsFor(currentCat);
    fp.page = Number(n.dataset.page) || 1;
    paintItems(currentCat);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  /* 6) 左栏筛选 */
  var facetsBox = document.getElementById('facets');
  if (facetsBox && facetsBox.contains(n) && currentCat) {
    var f = fsFor(currentCat);
    if (has(n, 'val')) {
      var key = n.dataset.facet, val = n.dataset.val;
      if (!key) return;
      var arr = f.facets[key] || (f.facets[key] = []);
      var i = arr.indexOf(val);
      if (i >= 0) arr.splice(i, 1); else arr.push(val);
      f.page = 1; routeRender(); return;
    }
    if (has(n, 'more')) { expandFacetBlock(currentCat, n.dataset.more, n); return; }
    if (has(n, 'clear')) { delete f.facets[n.dataset.clear]; f.page = 1; routeRender(); return; }
    if (has(n, 'clearstatus')) { f.status = ''; routeRender(); return; }
    if (has(n, 'toggle')) {
      var blk = n.closest('.facet-block');
      var bb = blk && blk.querySelector('.facet-b');
      if (bb) bb.style.display = bb.style.display === 'none' ? '' : 'none';
      return;
    }
    if (has(n, 'status')) { f.status = n.dataset.status; routeRender(); return; }
    if (has(n, 'favonly')) { f.favOnly = !f.favOnly; routeRender(); return; }
    return;
  }

  /* 7) 数据管理：删除自定义条目 */
  if (has(n, 'delcustom')) {
    var cid = n.dataset.delcustom;
    if (!confirm('删除该自定义条目？')) return;
    store.custom = store.custom.filter(function (x) { return x.id !== cid; });
    persist('custom'); rebuildData(); refreshCounts(); routeRender(); toast('已删除');
    return;
  }
}

function installDelegation() {
  if (installDelegation._done) return;
  installDelegation._done = true;
  document.addEventListener('click', onGlobalClick, false);
  /* 兜底：点击指向“当前 hash”的导航/跳转链接时，浏览器不会触发 hashchange，
     这里强制重渲染一次——即使视图曾处于异常态，重点本模块即可自愈，
     无需再“切到别的模块再切回来”。 */
  document.addEventListener('click', function (e) {
    var t = e.target;
    if (!t || !t.closest) return;
    var a = t.closest('a[href^="#"], [data-go]');
    if (!a) return;
    var href = a.getAttribute('href') || a.getAttribute('data-go') || '';
    if (href && href === location.hash) { setTimeout(routeRender, 0); }
  }, false);
}

/* ---------------- 渲染调度 ---------------- */
var currentDetail = null;
function routeRender() {
  try { _routeRender(); } catch (err) { _renderError(err); }
}
function _renderError(err) {
  try { console.error('[routeRender]', err); } catch (e) {}
  var v = document.getElementById('view');
  if (v) v.innerHTML = '<div class="empty">页面渲染出错：' + esc(String((err && err.message) || err)) +
    '<br><br><button class="btn primary" onclick="routeRender()">重试</button></div>';
}
function _routeRender() {
  var r = parseHash();
  route = r;
  currentCat = (r.name === 'cat') ? r.cat : null;
  var v = document.getElementById('view');
  document.querySelectorAll('[data-nav]').forEach(function (a) { a.classList.remove('active'); });
  var navKey = r.name === 'cat' ? r.cat : (r.name === 'item' ? r.cat : r.name);
  var navEl = document.querySelector('[data-nav="' + navKey + '"]');
  if (navEl) navEl.classList.add('active');
  document.getElementById('sidebar').classList.remove('open');

  window.scrollTo(0, 0);

  if (r.name === 'cat') {
    v.innerHTML = renderCat(r.cat);
    paintItems(r.cat);
    bindCat(r.cat);
  } else if (r.name === 'item') {
    currentDetail = { cat: r.cat, id: r.id };
    v.innerHTML = renderItem(r.cat, r.id);
    bindDetail(r.cat, r.id);
  } else if (r.name === 'series') {
    v.innerHTML = renderSeries(r.cat, r.series);
    bindSeries(r.cat, r.series);
  } else if (r.name === 'platforms') {
    v.innerHTML = renderPlatforms('');
    bindPlatforms();
  } else if (r.name === 'favorites') {
    v.innerHTML = renderFavorites(); bindFavorites();
  } else if (r.name === 'manage') {
    v.innerHTML = renderManage(); bindManage();
  } else if (r.name === 'about') {
    v.innerHTML = renderAbout();
  } else {
    v.innerHTML = renderHome();
  }
  bindCommon();
}

function bindCommon() {
  /* [data-id] / [data-go] / [data-fav] 已改为 document 级委托（见 onGlobalClick），
     这里不再逐节点挂 onclick —— 否则列表重绘后新节点会丢失事件、点击无响应。 */
}

function bindCat(cat) {
  var f = fsFor(cat);
  var search = document.getElementById('catSearch');
  search.oninput = function () { f.q = search.value; f.page = 1; paintItems(cat); };

  document.getElementById('catSort').onchange = function (e) { f.sort = e.target.value; paintItems(cat); };
  document.getElementById('btnDir').onclick = function () {
    f.dir = f.dir === 'desc' ? 'asc' : 'desc';
    this.textContent = f.dir === 'desc' ? '↓ 降序' : '↑ 升序';
    paintItems(cat);
  };
  document.getElementById('btnViewMode').onclick = function () {
    store.ui.view = store.ui.view === 'grid' ? 'list' : 'grid';
    persist('ui'); routeRender();
  };
  document.getElementById('btnResetFilter').onclick = function () {
    filterState[cat] = null; fsFor(cat);
    var gs = document.getElementById('globalSearch'); if (gs) gs.value = '';
    routeRender();
  };

  /* 左栏筛选与翻页的点击统一由 document 级委托处理（onGlobalClick），
     这样搜索 / 排序 / 翻页 / 缩放导致 #itemList、#pager 重绘后依旧可点。 */
}

function bindDetail(cat, id) {
  var base = (DATA[cat] || []).filter(function (x) { return x.id === id; })[0];
  if (!base) return;

  document.getElementById('btnFav').onclick = function () {
    var on = toggleFav(base);
    this.classList.toggle('primary', on);
    this.textContent = on ? '★ 已收藏' : '☆ 收藏';
    var star = document.querySelector('.fav-star');
    if (star) star.classList.toggle('on', on);
  };
  document.getElementById('btnEditItem').onclick = function () { editForm(ov(base)); };
  document.getElementById('btnAddLink').onclick = function () { addLinkForm(base); };

  document.querySelectorAll('[data-setstatus]').forEach(function (b) {
    b.onclick = function () {
      var k = b.dataset.setstatus;
      var cur = getStatus(base);
      store.status[uid(base)] = (cur === k) ? '' : k;
      persist('status'); routeRender();
      toast(cur === k ? '已清除状态' : '已标记为「' + STATUS[k].label + '」');
    };
  });

  document.querySelectorAll('[data-rate]').forEach(function (sp) {
    sp.onclick = function () {
      var n = Number(sp.dataset.rate);
      var k = uid(base);
      if (store.myscore[k] === n) delete store.myscore[k]; else store.myscore[k] = n;
      persist('myscore'); routeRender();
    };
  });

  var ta = document.getElementById('myNote');
  if (ta) {
    ta.oninput = function () {
      store.note[uid(base)] = ta.value;
      persist('note');
      clearTimeout(ta._t);
      ta._t = setTimeout(function () { toast('笔记已保存'); }, 900);
    };
  }

  document.querySelectorAll('[data-dellink]').forEach(function (d) {
    d.onclick = function () {
      var i = Number(d.dataset.dellink) - (base.links || []).length;
      var k = uid(base);
      store.links[k].splice(i, 1); persist('links'); routeRender(); toast('链接已删除');
    };
  });

  document.querySelectorAll('[data-jump]').forEach(function (c) {
    c.onclick = function () {
      var p = c.dataset.jump.split('|');
      var f = fsFor(cat);
      f.facets = {}; f.facets[p[0]] = [p[1]]; f.q = ''; f.page = 1;
      go('#/c/' + cat);
    };
  });
}

function bindPlatforms() {
  var s = document.getElementById('platSearch');
  var t;
  s.oninput = function () {
    clearTimeout(t);
    t = setTimeout(function () {
      var v = s.value;
      document.getElementById('view').innerHTML = renderPlatforms(v);
      bindPlatforms();
      document.getElementById('platSearch').focus();
    }, 220);
  };
  /* [data-scroll] 由全局委托处理 */
}

function bindFavorites() {
  var e1 = document.getElementById('btnExportFav');
  if (e1) e1.onclick = exportData;
  var e2 = document.getElementById('btnClearFav');
  if (e2) e2.onclick = function () {
    if (!confirm('确定清空全部收藏？（笔记与评分不受影响）')) return;
    store.fav = []; persist('fav'); refreshCounts(); routeRender(); toast('收藏已清空');
  };
}

function bindManage() {
  document.getElementById('btnAddItem').onclick = newItemModal;
  document.getElementById('btnExport').onclick = exportData;
  document.getElementById('btnExportJs').onclick = exportCustomJs;
  document.getElementById('btnWipe').onclick = function () {
    if (!confirm('这会清除你在浏览器里保存的全部个人数据（收藏、评分、笔记、自定义条目、链接、本地修改），且不可恢复。建议先导出备份。确定继续？')) return;
    ['fav','note','myscore','status','override','custom','links'].forEach(function (k) {
      localStorage.removeItem(LS[k]);
    });
    location.reload();
  };
  var fi = document.getElementById('fileImport');
  document.getElementById('btnImport').onclick = function () { fi.click(); };
  fi.onchange = function () {
    var file = fi.files[0]; if (!file) return;
    var rd = new FileReader();
    rd.onload = function () {
      try {
        var d = JSON.parse(rd.result);
        ['fav','note','myscore','status','override','custom','links'].forEach(function (k) {
          if (d[k] !== undefined) store[k] = d[k];
        });
        ['fav','note','myscore','status','override','custom','links'].forEach(persist);
        rebuildData(); refreshCounts(); routeRender(); toast('导入成功');
      } catch (e) { toast('导入失败：文件格式不正确'); }
    };
    rd.readAsText(file);
  };
  /* [data-delcustom] 由全局委托处理 */
}

function rebuildData() {
  CAT_KEYS.forEach(function (k) {
    DATA[k] = (RAW[k] || []).concat(store.custom.filter(function (it) { return it.cat === k; }));
  });
}

/* ---------------- 导出 ---------------- */
function download(name, text, mime) {
  var blob = new Blob([text], { type: (mime || 'application/json') + ';charset=utf-8' });
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob); a.download = name;
  document.body.appendChild(a); a.click();
  setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 400);
}
function exportData() {
  var payload = {
    _meta: { app: '个人收藏馆', exported: new Date().toISOString(), version: 1 },
    fav: store.fav, note: store.note, myscore: store.myscore,
    status: store.status, override: store.override, custom: store.custom, links: store.links
  };
  download('收藏馆备份-' + new Date().toISOString().slice(0, 10) + '.json', JSON.stringify(payload, null, 2));
  toast('已导出备份文件');
}
function exportCustomJs() {
  if (!store.custom.length) { toast('还没有自定义条目'); return; }
  var byCat = {};
  store.custom.forEach(function (it) { (byCat[it.cat] = byCat[it.cat] || []).push(it); });
  var txt = '/* 由「数据管理」导出的自定义条目\n' +
    '   用法：把对应分类的数组内容，粘贴到 assets/js/data/<分类>.js 里 DB 数组的末尾即可固化。\n' +
    '   导出时间：' + new Date().toISOString() + ' */\n\n';
  Object.keys(byCat).forEach(function (k) {
    txt += '// ===== ' + k + ' =====\n';
    txt += byCat[k].map(function (it) { return JSON.stringify(it, null, 2) + ','; }).join('\n') + '\n\n';
  });
  download('自定义条目片段.js', txt, 'text/javascript');
}

/* ---------------- 计数 ---------------- */
function refreshCounts() {
  CAT_KEYS.forEach(function (k) {
    var n = document.querySelector('[data-cnt="' + k + '"]');
    if (n) n.textContent = DATA[k].length;
  });
  var f = document.querySelector('[data-cnt="fav"]');
  if (f) f.textContent = store.fav.length;
  var m = document.getElementById('statMini');
  if (m) m.innerHTML = '条目 ' + allItems().length + ' · 收藏 ' + store.fav.length +
    ' · 笔记 ' + Object.keys(store.note).length;
}

/* ---------------- 全局事件 ---------------- */
function init() {
  installDelegation();
  window.addEventListener('hashchange', routeRender);
  var _rz;
  window.addEventListener('resize', function () {
    clearTimeout(_rz);
    _rz = setTimeout(function () {
      var r = parseHash();
      if (r.name === 'cat') paintItems(r.cat);
    }, 150);
  });

  document.getElementById('btnMenu').onclick = function () {
    document.getElementById('sidebar').classList.toggle('open');
  };
  document.getElementById('modalClose').onclick = closeModal;
  document.getElementById('modalMask').onclick = function (e) { if (e.target === this) closeModal(); };
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
    if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
      e.preventDefault(); document.getElementById('globalSearch').focus();
    }
  });

  var gs = document.getElementById('globalSearch');
  gs.onkeydown = function (e) {
    if (e.key !== 'Enter') return;
    var q = gs.value.trim();
    if (!q) return;
    // 全站搜索：命中唯一直接跳详情，否则跳当前分类
    var hits = allItems().filter(function (it) {
      var s = ov(it);
      return [s.title, s.alt, (s.tags || []).join(' ')].join(' ').toLowerCase().indexOf(q.toLowerCase()) >= 0;
    });
    if (hits.length === 1) { goItem(hits[0]); return; }
    var r = parseHash();
    var cat = (r.name === 'cat' || r.name === 'item' || r.name === 'series') ? r.cat : 'games';
    fsFor(cat).q = q; fsFor(cat).page = 1;
    go('#/c/' + cat);
    if (r.name === 'cat' && r.cat === cat) { routeRender(); }
    toast(hits.length ? '找到 ' + hits.length + ' 个名称匹配项' : '未找到名称匹配，已在' + CATS[cat].name + '馆内搜索');
  };
  document.getElementById('btnSearchGo').onclick = function () {
    gs.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
  };
  document.getElementById('btnFavOnly').onclick = function () { go('#/favorites'); };
  document.getElementById('btnQuickAdd').onclick = newItemModal;

  var mt = (RAW.meta || {});
  document.getElementById('footBuild').textContent = mt.build ? ('数据版本 ' + mt.build) : '';

  rebuildData();
  refreshCounts();
  routeRender();
}

document.addEventListener('DOMContentLoaded', init);
})();
