/* 分类与筛选维度配置 */
window.CATS = {

  games: {
    name: '游戏', icon: '🎮',
    desc: '按平台、玩法、题材、画面风格多维筛选，做一座可检索的游戏博物馆。',
    defaultSort: 'score',
    cardTags: ['platformGroup', 'genre'],
    facets: [
      { key: 'platformGroup', name: '平台大类' },
      { key: 'platform',      name: '运行平台' },
      { key: 'genre',         name: '题材 / 类型' },
      { key: 'playMode',      name: '游戏方式' },
      { key: 'artStyle',      name: '画面 / 视角' },
      { key: 'region',        name: '主要产地', sortBy: 'name' },
      { key: 'decade',        name: '发行年代', sortBy: 'year' }
    ],
    sorts: [
      { key: 'score',   name: '综合评分' },
      { key: 'year',    name: '发行年份' },
      { key: 'myscore', name: '我的评分' },
      { key: 'fav',     name: '收藏优先' },
      { key: 'title',   name: '名称' }
    ]
  },

  videos: {
    name: '故事影视', icon: '🎬',
    desc: '电影、剧集、动漫、动画电影——只收叙事类作品，不含演讲与科普。',
    defaultSort: 'score',
    cardTags: ['form', 'genre'],
    facets: [
      { key: 'form',   name: '形式' },
      { key: 'genre',  name: '题材 / 类型' },
      { key: 'region', name: '国家 / 地区', sortBy: 'name' },
      { key: 'decade', name: '年代', sortBy: 'year' }
    ],
    sorts: [
      { key: 'score',   name: '综合评分' },
      { key: 'year',    name: '上映年份' },
      { key: 'myscore', name: '我的评分' },
      { key: 'fav',     name: '收藏优先' },
      { key: 'title',   name: '名称' }
    ]
  },

  novels: {
    name: '故事小说', icon: '📖',
    desc: '网络小说、出版小说、轻小说等虚构叙事作品。',
    defaultSort: 'score',
    cardTags: ['form', 'genre'],
    facets: [
      { key: 'form',   name: '类型' },
      { key: 'genre',  name: '题材' },
      { key: 'serial', name: '连载状态' },
      { key: 'region', name: '语言 / 地区', sortBy: 'name' },
      { key: 'decade', name: '年代', sortBy: 'year' }
    ],
    sorts: [
      { key: 'score',   name: '综合评分' },
      { key: 'year',    name: '开始年份' },
      { key: 'myscore', name: '我的评分' },
      { key: 'fav',     name: '收藏优先' },
      { key: 'title',   name: '名称' }
    ]
  },

  music: {
    name: '音乐', icon: '🎵',
    desc: '专辑、单曲、原声带与歌单，按流派和地区检索。',
    defaultSort: 'score',
    cardTags: ['form', 'genre'],
    facets: [
      { key: 'form',   name: '形式' },
      { key: 'genre',  name: '流派' },
      { key: 'region', name: '地区', sortBy: 'name' },
      { key: 'decade', name: '年代', sortBy: 'year' }
    ],
    sorts: [
      { key: 'score',   name: '综合评分' },
      { key: 'year',    name: '发行年份' },
      { key: 'myscore', name: '我的评分' },
      { key: 'fav',     name: '收藏优先' },
      { key: 'title',   name: '名称' }
    ]
  },

  books: {
    name: '书籍', icon: '📚',
    desc: '非虚构类：科技、历史、科普、经济、心理、工具书与实体书。',
    defaultSort: 'score',
    cardTags: ['field', 'form'],
    facets: [
      { key: 'field',    name: '领域' },
      { key: 'form',     name: '载体' },
      { key: 'language', name: '语言' },
      { key: 'region',   name: '作者地区', sortBy: 'name' },
      { key: 'decade',   name: '年代', sortBy: 'year' }
    ],
    sorts: [
      { key: 'score',   name: '综合评分' },
      { key: 'year',    name: '出版年份' },
      { key: 'myscore', name: '我的评分' },
      { key: 'fav',     name: '收藏优先' },
      { key: 'title',   name: '名称' }
    ]
  }
};
