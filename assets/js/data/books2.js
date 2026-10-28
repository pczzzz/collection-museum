/* 非虚构书籍 · 扩展书目（历史/哲学/政治/经济/科学/社会/传记/艺术/军事） */
window.DB = window.DB || {};
window.DB.books = (window.DB.books || []).concat([
  {
      id: 'shiji',
      cat: 'books',
      title: '史记',
      alt: 'Records of the Grand Historian',
      year: -91,
      region: '中国',
      status: '已出版',
      image: null,
      summary: '中国第一部纪传体通史，上起黄帝、下至汉武帝太初年间约三千年，以本纪、世家、列传、表、书五种体例记载政治、经济、制度与人物。',
      review: '「史家之绝唱，无韵之离骚」。司马迁以人物为中心组织历史，开创纪传体，此后两千年正史皆循此例。文字兼具史笔与文学性，《项羽本纪》《李将军列传》等篇可作散文读。中华书局点校本是通行版本，配合韩兆琦《史记选注集说》入门更顺。缺点是叙事夹杂传说与个人情绪，史料需与考古、《汉书》互证。',
      pros: ['纪传体开山之作', '文史双绝', '史料价值极高'],
      cons: ['部分记载带传说色彩', '文言门槛高'],
      tags: ['司马迁', '二十四史', '纪传体'],
      scores: [{
      src: '豆瓣',
      val: 9.6,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E5%8F%B2%E8%AE%B0'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E5%8F%B2%E8%AE%B0'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E5%8F%B2%E8%AE%B0'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/Records%20of%20the%20Grand%20Historian'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=Records%20of%20the%20Grand%20Historian'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=Records%20of%20the%20Grand%20Historian'
    }, {
      kind: '古籍',
      label: '中国哲学书电子化计划',
      url: 'https://ctext.org/searchbooks.pl?if=gb&searchu=%E5%8F%B2%E8%AE%B0'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E5%8F%B2%E8%AE%B0'
    }],
      related: ['books/zizhi-tongjian', 'books/guo-shi-da-gang', 'books/nanming-shi'],
      f: {
      field: ['中国史', '历史'],
      form: ['实体书'],
      language: ['中文']
    }
    },
  {
      id: 'zizhi-tongjian',
      cat: 'books',
      title: '资治通鉴',
      alt: 'Zizhi Tongjian',
      year: 1084,
      region: '中国',
      status: '已出版',
      image: null,
      summary: '编年体通史巨著，上起周威烈王二十三年（前403）、下至后周显德六年（959），共1362年，以「鉴于往事，有资于治道」为宗旨记述政治军事得失。',
      review: '与《史记》并称史学双峰：《史记》长于人物，《通鉴》长于因果与制度演变。司马光团队以丛目、长编、定稿三步考异，史料处理极为严谨，胡三省注本是阅读标配。全书294卷体量庞大，普通读者可从柏杨白话版或《通鉴纪事本末》选读。对理解中国古代政治运作、权谋逻辑与治乱循环几乎无可替代。',
      pros: ['编年叙事因果清晰', '考异严谨', '政治史宝库'],
      cons: ['体量庞大', '偏重政治军事，社会经济较少'],
      tags: ['司马光', '编年体', '胡三省注'],
      scores: [{
      src: '豆瓣',
      val: 9.5,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E8%B5%84%E6%B2%BB%E9%80%9A%E9%89%B4'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E8%B5%84%E6%B2%BB%E9%80%9A%E9%89%B4'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E8%B5%84%E6%B2%BB%E9%80%9A%E9%89%B4'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/Zizhi%20Tongjian'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=Zizhi%20Tongjian'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=Zizhi%20Tongjian'
    }, {
      kind: '古籍',
      label: '中国哲学书电子化计划',
      url: 'https://ctext.org/searchbooks.pl?if=gb&searchu=%E8%B5%84%E6%B2%BB%E9%80%9A%E9%89%B4'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E8%B5%84%E6%B2%BB%E9%80%9A%E9%89%B4'
    }],
      related: ['books/shiji', 'books/guo-shi-da-gang', 'books/gulag-archipelago'],
      f: {
      field: ['中国史', '历史', '政治'],
      form: ['实体书'],
      language: ['中文']
    }
    },
  {
      id: 'du-tongjian-lun',
      cat: 'books',
      title: '读通鉴论',
      alt: '',
      year: 1687,
      region: '中国',
      status: '已出版',
      image: null,
      summary: '王夫之（船山）晚年史论，逐段评议《资治通鉴》所载史事，借古论今阐发历史观、政治观与民族观。',
      review: '中国古代史论的巅峰之一。船山不停留在「谁对谁错」，而是追问制度与时势的相互作用，提出「理势合一」，反对以道德裁判代替历史分析。文字密度高、思辨性强，读前最好已通读《通鉴》相应段落。中华书局版较通行。适合希望从史料上升到史识的读者。',
      pros: ['史识卓绝', '思辨深度高', '与《通鉴》互为表里'],
      cons: ['阅读门槛高', '带有强烈的时代立场'],
      tags: ['王夫之', '史论', '明末清初'],
      scores: [{
      src: '豆瓣',
      val: 9.2,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E8%AF%BB%E9%80%9A%E9%89%B4%E8%AE%BA'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E8%AF%BB%E9%80%9A%E9%89%B4%E8%AE%BA'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E8%AF%BB%E9%80%9A%E9%89%B4%E8%AE%BA'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/%E8%AF%BB%E9%80%9A%E9%89%B4%E8%AE%BA'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=%E8%AF%BB%E9%80%9A%E9%89%B4%E8%AE%BA'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=%E8%AF%BB%E9%80%9A%E9%89%B4%E8%AE%BA'
    }, {
      kind: '古籍',
      label: '中国哲学书电子化计划',
      url: 'https://ctext.org/searchbooks.pl?if=gb&searchu=%E8%AF%BB%E9%80%9A%E9%89%B4%E8%AE%BA'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E8%AF%BB%E9%80%9A%E9%89%B4%E8%AE%BA'
    }],
      related: ['books/analects', 'books/zizhi-tongjian', 'books/tianchao-bengkui'],
      f: {
      field: ['中国史', '哲学', '政治'],
      form: ['实体书'],
      language: ['中文']
    }
    },
  {
      id: 'jiaohun',
      cat: 'books',
      title: '叫魂：1768年中国妖术大恐慌',
      alt: 'Soulstealers: The Chinese Sorcery Scare of 1768',
      year: 1990,
      region: '美国',
      status: '已出版',
      image: null,
      summary: '以乾隆三十三年「剪辫叫魂」妖术恐慌为切口，重构盛世之下皇帝、官僚与底层民众三方的恐惧与博弈。',
      review: '微观史写作的典范：一件看似荒诞的妖术案，被写成理解清代官僚体制运作、信息欺瞒与皇权焦虑的手术刀。孔飞力的叙事兼具档案功夫与小说笔法，中译本流畅易读。它揭示的「盛世下的普遍不安全感」与官僚系统的应付逻辑，至今仍有强烈的现实参照意义，因此常年位居社科畅销榜。',
      pros: ['以小见大', '档案扎实', '叙事好看'],
      cons: ['个案外推需谨慎', '结论带解读色彩'],
      tags: ['孔飞力', '清代', '微观史'],
      scores: [{
      src: '豆瓣',
      val: 9.2,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E5%8F%AB%E9%AD%82%EF%BC%9A1768%E5%B9%B4%E4%B8%AD%E5%9B%BD%E5%A6%96%E6%9C%AF%E5%A4%A7%E6%81%90%E6%85%8C'
    }, {
      src: 'Goodreads',
      val: 4.0,
      max: 5,
      url: 'https://www.goodreads.com/search?q=Soulstealers%3A%20The%20Chinese%20Sorcery%20Scare%20of%201768'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E5%8F%AB%E9%AD%82%EF%BC%9A1768%E5%B9%B4%E4%B8%AD%E5%9B%BD%E5%A6%96%E6%9C%AF%E5%A4%A7%E6%81%90%E6%85%8C'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E5%8F%AB%E9%AD%82'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/Soulstealers'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=Soulstealers'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=Soulstealers'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E5%8F%AB%E9%AD%82'
    }],
      related: ['books/zizhi-tongjian', 'books/tianchao-bengkui', 'books/chinese-political-gains-losses'],
      f: {
      field: ['中国史', '社会学', '政治'],
      form: ['实体书', '电子书'],
      language: ['中文', '英文']
    }
    },
  {
      id: 'tianchao-bengkui',
      cat: 'books',
      title: '天朝的崩溃：鸦片战争再研究',
      alt: 'The Collapse of the Heavenly Dynasty',
      year: 1995,
      region: '中国',
      status: '已出版',
      image: null,
      summary: '逐战、逐人复核鸦片战争的中方档案与英方记录，重估兵力、武器、奏折与「忠奸叙事」。',
      review: '中国近代史实证研究的标杆。茅海建用中英双方档案比对，戳破大量流传百年的神话（如「武器代差是唯一原因」「某某力战殉国」），指出清廷失败更多源于信息失真、制度惰性与认知封闭。写作冷静克制、考据细致到近乎枯燥，但结论极具冲击力，是理解近代中国为何「睁眼看世界」如此之难的必读。',
      pros: ['中英档案互证', '破除神话', '考据极精'],
      cons: ['细节繁密，读来吃力', '偏军事外交，社会层面少'],
      tags: ['茅海建', '鸦片战争', '实证史学'],
      scores: [{
      src: '豆瓣',
      val: 9.3,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E5%A4%A9%E6%9C%9D%E7%9A%84%E5%B4%A9%E6%BA%83%EF%BC%9A%E9%B8%A6%E7%89%87%E6%88%98%E4%BA%89%E5%86%8D%E7%A0%94%E7%A9%B6'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E5%A4%A9%E6%9C%9D%E7%9A%84%E5%B4%A9%E6%BA%83%EF%BC%9A%E9%B8%A6%E7%89%87%E6%88%98%E4%BA%89%E5%86%8D%E7%A0%94%E7%A9%B6'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E5%A4%A9%E6%9C%9D%E7%9A%84%E5%B4%A9%E6%BA%83'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/The%20Collapse%20of%20the%20Heavenly%20Dynasty'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=The%20Collapse%20of%20the%20Heavenly%20Dynasty'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=The%20Collapse%20of%20the%20Heavenly%20Dynasty'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E5%A4%A9%E6%9C%9D%E7%9A%84%E5%B4%A9%E6%BA%83'
    }],
      related: ['books/rape-of-nanking', 'books/zizhi-tongjian', 'books/chinese-political-gains-losses'],
      f: {
      field: ['中国史', '世界史', '政治'],
      form: ['实体书', '电子书'],
      language: ['中文']
    }
    },
  {
      id: 'nanming-shi',
      cat: 'books',
      title: '南明史',
      alt: '',
      year: 1992,
      region: '中国',
      status: '已出版',
      image: null,
      summary: '系统梳理1644年崇祯自缢至1683年台湾明郑覆亡的四十年南明抗清史，兼顾大顺、大西余部与各方势力。',
      review: '顾诚以档案与地方志爬梳，纠正了大量以讹传讹的南明叙事，对弘光、隆武、永历各政权与农民军余部的关系有独到考辨。立场鲜明地批评南明内部的内斗与阶级局限，带有其时代的史观印记，但史料功夫扎实、叙事紧凑，是南明领域绕不开的一部通史。',
      pros: ['史料考辨扎实', '叙事完整连贯', '填补断代空白'],
      cons: ['史观带时代烙印', '对部分人物评价偏严'],
      tags: ['顾诚', '明清之际', '断代史'],
      scores: [{
      src: '豆瓣',
      val: 9.2,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E5%8D%97%E6%98%8E%E5%8F%B2'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E5%8D%97%E6%98%8E%E5%8F%B2'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E5%8D%97%E6%98%8E%E5%8F%B2'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/%E5%8D%97%E6%98%8E%E5%8F%B2'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=%E5%8D%97%E6%98%8E%E5%8F%B2'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=%E5%8D%97%E6%98%8E%E5%8F%B2'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E5%8D%97%E6%98%8E%E5%8F%B2'
    }],
      related: ['books/shiji', 'books/zizhi-tongjian', 'books/guo-shi-da-gang'],
      f: {
      field: ['中国史', '历史'],
      form: ['实体书', '电子书'],
      language: ['中文']
    }
    },
  {
      id: 'modern-china-hsu',
      cat: 'books',
      title: '中国近代史',
      alt: 'China\'s Entrance into the Modern World',
      year: 1981,
      region: '美国',
      status: '已出版',
      image: null,
      summary: '从明清之际写到改革开放，兼顾中外关系、政治变革、社会转型与思想演变，长期用作北美中国近代史教材。',
      review: '徐中约以「中外互动」为主线，兼顾中西双方视角，避免了单方面的悲情叙事或革命叙事，被公认为平衡、清晰的中国近代史通论。中文繁体版（牛津）删节较少，简体版有删改，读者需留意版本差异。作为教科书结构规整、脉络清楚，适合建立近代史整体框架后再读专题研究。',
      pros: ['视角平衡', '脉络清晰', '适合入门框架'],
      cons: ['简体中文版有删节', '专题深度不及专著'],
      tags: ['徐中约', '近代史', '教材'],
      scores: [{
      src: '豆瓣',
      val: 9.0,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E4%B8%AD%E5%9B%BD%E8%BF%91%E4%BB%A3%E5%8F%B2'
    }, {
      src: 'Goodreads',
      val: 3.9,
      max: 5,
      url: 'https://www.goodreads.com/search?q=China%27s%20Entrance%20into%20the%20Modern%20World'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E4%B8%AD%E5%9B%BD%E8%BF%91%E4%BB%A3%E5%8F%B2'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E4%B8%AD%E5%9B%BD%E8%BF%91%E4%BB%A3%E5%8F%B2'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/China%27s%20Entrance%20into%20the%20Modern%20World'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=China%27s%20Entrance%20into%20the%20Modern%20World'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=China%27s%20Entrance%20into%20the%20Modern%20World'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E4%B8%AD%E5%9B%BD%E8%BF%91%E4%BB%A3%E5%8F%B2'
    }],
      related: ['books/cambridge-history-china', 'books/shiji', 'books/zizhi-tongjian'],
      f: {
      field: ['中国史', '世界史', '历史'],
      form: ['实体书', '电子书'],
      language: ['中文', '英文']
    }
    },
  {
      id: 'jinyi',
      cat: 'books',
      title: '金翼：一个中国家族的史记',
      alt: 'The Golden Wing: A Chinese Family Chronicle',
      year: 1947,
      region: '美国',
      status: '已出版',
      image: null,
      summary: '以小说体裁写福建黄村两个家族（黄家与张家）三代兴衰，背后是完整的社会人类学关系网络分析。',
      review: '中国人类学的经典，与费孝通《乡土中国》互补：《乡土中国》讲结构概念，《金翼》讲结构如何在真实人生中被经营、被消耗。林耀华把亲属关系、商业网络、宗族权力写成可读的故事，又在末尾点明「人际关系体系」的理论解释。篇幅不长，一两天可读完，理解中国传统乡村社会运作极佳的入口。',
      pros: ['小说笔法可读性强', '理论与材料结合', '篇幅精炼'],
      cons: ['样本为单一区域', '理论阐述较简略'],
      tags: ['林耀华', '人类学', '家族史'],
      scores: [{
      src: '豆瓣',
      val: 8.9,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E9%87%91%E7%BF%BC%EF%BC%9A%E4%B8%80%E4%B8%AA%E4%B8%AD%E5%9B%BD%E5%AE%B6%E6%97%8F%E7%9A%84%E5%8F%B2%E8%AE%B0'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E9%87%91%E7%BF%BC%EF%BC%9A%E4%B8%80%E4%B8%AA%E4%B8%AD%E5%9B%BD%E5%AE%B6%E6%97%8F%E7%9A%84%E5%8F%B2%E8%AE%B0'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E9%87%91%E7%BF%BC'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/The%20Golden%20Wing'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=The%20Golden%20Wing'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=The%20Golden%20Wing'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E9%87%91%E7%BF%BC'
    }],
      related: ['books/rural-china', 'books/jiaohun', 'books/peasant-life-china'],
      f: {
      field: ['中国史', '社会学', '人类学'],
      form: ['实体书', '电子书'],
      language: ['中文', '英文']
    }
    },
  {
      id: 'ancient-culture-common-sense',
      cat: 'books',
      title: '中国古代文化常识',
      alt: '',
      year: 1961,
      region: '中国',
      status: '已出版',
      image: null,
      summary: '分天文历法、乐律、地理、职官、科举、姓名、礼俗、宗法、宫室、车马、饮食、衣饰、什物等门类，解释古籍中常见的名物制度。',
      review: '读古书的「字典级」工具书。凡是古诗文里搞不懂的「三省六部」「五服」「干支」「谥号」「冠礼」，几乎都能在此找到简明准确的解释。由王力主编、多所高校学者集体撰写，条目短小但严谨，适合案头常备、按需查阅，也适合系统通读一遍打底。缺点是被当作工具书设计，缺乏连贯叙事。',
      pros: ['条目准确简明', '覆盖面广', '案头必备'],
      cons: ['工具书性质，非通读性读物', '部分条目已随研究更新'],
      tags: ['王力', '名物制度', '工具书'],
      scores: [{
      src: '豆瓣',
      val: 9.4,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E4%B8%AD%E5%9B%BD%E5%8F%A4%E4%BB%A3%E6%96%87%E5%8C%96%E5%B8%B8%E8%AF%86'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E4%B8%AD%E5%9B%BD%E5%8F%A4%E4%BB%A3%E6%96%87%E5%8C%96%E5%B8%B8%E8%AF%86'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E4%B8%AD%E5%9B%BD%E5%8F%A4%E4%BB%A3%E6%96%87%E5%8C%96%E5%B8%B8%E8%AF%86'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/%E4%B8%AD%E5%9B%BD%E5%8F%A4%E4%BB%A3%E6%96%87%E5%8C%96%E5%B8%B8%E8%AF%86'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=%E4%B8%AD%E5%9B%BD%E5%8F%A4%E4%BB%A3%E6%96%87%E5%8C%96%E5%B8%B8%E8%AF%86'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=%E4%B8%AD%E5%9B%BD%E5%8F%A4%E4%BB%A3%E6%96%87%E5%8C%96%E5%B8%B8%E8%AF%86'
    }, {
      kind: '古籍',
      label: '中国哲学书电子化计划',
      url: 'https://ctext.org/searchbooks.pl?if=gb&searchu=%E4%B8%AD%E5%9B%BD%E5%8F%A4%E4%BB%A3%E6%96%87%E5%8C%96%E5%B8%B8%E8%AF%86'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E4%B8%AD%E5%9B%BD%E5%8F%A4%E4%BB%A3%E6%96%87%E5%8C%96%E5%B8%B8%E8%AF%86'
    }],
      related: ['books/ci-hai', 'books/shiji', 'books/zizhi-tongjian'],
      f: {
      field: ['中国史', '语言', '工具书'],
      form: ['实体书', '电子书'],
      language: ['中文']
    }
    },
  {
      id: 'historical-geography-15',
      cat: 'books',
      title: '中国历史地理十五讲',
      alt: '',
      year: 1999,
      region: '中国',
      status: '已出版',
      image: null,
      summary: '从疆域政区、气候变迁、农业区、人口迁移、城市、交通、军事地理等十五个专题讲中国历史的空间维度。',
      review: '把「历史」放回「地理」坐标里，读史时最能补齐的一块拼图：为什么经济重心南移、为什么游牧与农耕以400毫米等降水线为界、为什么某些关隘决定王朝命运。韩茂莉讲义体写作，条理清楚、案例扎实，非专业读者也能顺畅读完。适合与通史类书籍搭配阅读。',
      pros: ['空间视角补足通史', '讲义体清晰', '案例丰富'],
      cons: ['偏重宏观，细节考据从简', '地图数量偏少'],
      tags: ['韩茂莉', '历史地理', '北大讲义'],
      scores: [{
      src: '豆瓣',
      val: 8.9,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E4%B8%AD%E5%9B%BD%E5%8E%86%E5%8F%B2%E5%9C%B0%E7%90%86%E5%8D%81%E4%BA%94%E8%AE%B2'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E4%B8%AD%E5%9B%BD%E5%8E%86%E5%8F%B2%E5%9C%B0%E7%90%86%E5%8D%81%E4%BA%94%E8%AE%B2'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E4%B8%AD%E5%9B%BD%E5%8E%86%E5%8F%B2%E5%9C%B0%E7%90%86%E5%8D%81%E4%BA%94%E8%AE%B2'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/%E4%B8%AD%E5%9B%BD%E5%8E%86%E5%8F%B2%E5%9C%B0%E7%90%86%E5%8D%81%E4%BA%94%E8%AE%B2'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=%E4%B8%AD%E5%9B%BD%E5%8E%86%E5%8F%B2%E5%9C%B0%E7%90%86%E5%8D%81%E4%BA%94%E8%AE%B2'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=%E4%B8%AD%E5%9B%BD%E5%8E%86%E5%8F%B2%E5%9C%B0%E7%90%86%E5%8D%81%E4%BA%94%E8%AE%B2'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E4%B8%AD%E5%9B%BD%E5%8E%86%E5%8F%B2%E5%9C%B0%E7%90%86%E5%8D%81%E4%BA%94%E8%AE%B2'
    }],
      related: ['books/shiji', 'books/zizhi-tongjian', 'books/guo-shi-da-gang'],
      f: {
      field: ['中国史', '历史', '科普'],
      form: ['实体书', '电子书'],
      language: ['中文']
    }
    },
  {
      id: 'ming-under-microscope',
      cat: 'books',
      title: '显微镜下的大明',
      alt: '',
      year: 2019,
      region: '中国',
      status: '已出版',
      image: null,
      summary: '六个明代基层案件（丝绢案、龙脉案、小吏舞弊、库粮亏空等）的档案复原，展现县一级行政、税赋与人情网络。',
      review: '以档案为骨、叙事为肉的非虚构写作，把枯燥的税粮账簿与讼案卷宗写成悬疑故事，可读性远超一般史学读物。价值在于「向下看」：不是帝王将相，而是胥吏、里甲、士绅如何在制度缝隙里博弈。缺点是文学加工较多，具体细节需以正式研究为准；作为兴趣入口极佳，作为学术依据要谨慎。',
      pros: ['叙事极佳', '基层视角独特', '档案有据'],
      cons: ['文学加工较多', '非严格学术著作'],
      tags: ['马伯庸', '明代', '微观史'],
      scores: [{
      src: '豆瓣',
      val: 8.5,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E6%98%BE%E5%BE%AE%E9%95%9C%E4%B8%8B%E7%9A%84%E5%A4%A7%E6%98%8E'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E6%98%BE%E5%BE%AE%E9%95%9C%E4%B8%8B%E7%9A%84%E5%A4%A7%E6%98%8E'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E6%98%BE%E5%BE%AE%E9%95%9C%E4%B8%8B%E7%9A%84%E5%A4%A7%E6%98%8E'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/%E6%98%BE%E5%BE%AE%E9%95%9C%E4%B8%8B%E7%9A%84%E5%A4%A7%E6%98%8E'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=%E6%98%BE%E5%BE%AE%E9%95%9C%E4%B8%8B%E7%9A%84%E5%A4%A7%E6%98%8E'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=%E6%98%BE%E5%BE%AE%E9%95%9C%E4%B8%8B%E7%9A%84%E5%A4%A7%E6%98%8E'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E6%98%BE%E5%BE%AE%E9%95%9C%E4%B8%8B%E7%9A%84%E5%A4%A7%E6%98%8E'
    }],
      related: ['books/shiji', 'books/zizhi-tongjian', 'books/guo-shi-da-gang'],
      f: {
      field: ['中国史', '历史'],
      form: ['实体书', '电子书'],
      language: ['中文']
    }
    },
  {
      id: 'cambridge-history-china',
      cat: 'books',
      title: '剑桥中国史',
      alt: 'The Cambridge History of China',
      year: 1978,
      region: '英国',
      status: '已出版',
      image: null,
      summary: '英语世界规模最庞大的中国通史工程，按断代分卷，每卷由各领域专家撰写专题章节。',
      review: '集体写作的学术标杆：每一章都是该断代、该专题的研究综述，注释与参考文献极其翔实，可视为「入口的入口」。缺点是体例不统一、叙事性弱、价格昂贵，通读体验不佳，更适合作为专题研究的检索起点。中国社科出版社中译本分卷出版，翻译质量参差，重要章节建议对照英文原版。',
      pros: ['学术权威', '专题综述全面', '文献索引极有价值'],
      cons: ['体例不统一', '中译质量参差', '价格高'],
      tags: ['剑桥史', '断代史', '学术工具'],
      scores: [{
      src: '豆瓣',
      val: 9.2,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E5%89%91%E6%A1%A5%E4%B8%AD%E5%9B%BD%E5%8F%B2'
    }, {
      src: 'Goodreads',
      val: 4.0,
      max: 5,
      url: 'https://www.goodreads.com/search?q=The%20Cambridge%20History%20of%20China'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E5%89%91%E6%A1%A5%E4%B8%AD%E5%9B%BD%E5%8F%B2'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E5%89%91%E6%A1%A5%E4%B8%AD%E5%9B%BD%E5%8F%B2'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/The%20Cambridge%20History%20of%20China'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=The%20Cambridge%20History%20of%20China'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=The%20Cambridge%20History%20of%20China'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E5%89%91%E6%A1%A5%E4%B8%AD%E5%9B%BD%E5%8F%B2'
    }],
      related: ['books/modern-china-hsu', 'books/shiji', 'books/zizhi-tongjian'],
      f: {
      field: ['中国史', '世界史', '历史'],
      form: ['实体书', '电子书'],
      language: ['中文', '英文']
    }
    },
  {
      id: 'inner-turning',
      cat: 'books',
      title: '中国转向内在：两宋之际的文化发展',
      alt: '',
      year: 1991,
      region: '美国',
      status: '已出版',
      image: null,
      summary: '解释南宋以后中国为何从外向扩张、制度创新转向内省修养与道德保守，聚焦两宋之际士大夫心态与国家权力的变化。',
      review: '提出了理解中国近世思想史的关键命题：理学兴起不只是哲学演进，更是政治挫败后的集体心理转向。刘子健兼用制度史与心态史方法，论证清晰、文字干净，篇幅不长。观点在学界有争议（对「内向化」的评价过于整齐），但作为问题意识的启发极为成功，可与余英时《朱熹的历史世界》对读。',
      pros: ['命题极具启发性', '论证清晰', '篇幅适中'],
      cons: ['概括略显整齐', '结论有学术争议'],
      tags: ['刘子健', '两宋', '思想史'],
      scores: [{
      src: '豆瓣',
      val: 8.6,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E4%B8%AD%E5%9B%BD%E8%BD%AC%E5%90%91%E5%86%85%E5%9C%A8%EF%BC%9A%E4%B8%A4%E5%AE%8B%E4%B9%8B%E9%99%85%E7%9A%84%E6%96%87%E5%8C%96%E5%8F%91%E5%B1%95'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E4%B8%AD%E5%9B%BD%E8%BD%AC%E5%90%91%E5%86%85%E5%9C%A8%EF%BC%9A%E4%B8%A4%E5%AE%8B%E4%B9%8B%E9%99%85%E7%9A%84%E6%96%87%E5%8C%96%E5%8F%91%E5%B1%95'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E4%B8%AD%E5%9B%BD%E8%BD%AC%E5%90%91%E5%86%85%E5%9C%A8'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/%E4%B8%AD%E5%9B%BD%E8%BD%AC%E5%90%91%E5%86%85%E5%9C%A8'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=%E4%B8%AD%E5%9B%BD%E8%BD%AC%E5%90%91%E5%86%85%E5%9C%A8'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=%E4%B8%AD%E5%9B%BD%E8%BD%AC%E5%90%91%E5%86%85%E5%9C%A8'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E4%B8%AD%E5%9B%BD%E8%BD%AC%E5%90%91%E5%86%85%E5%9C%A8'
    }],
      related: ['books/shiji', 'books/zizhi-tongjian', 'books/guo-shi-da-gang'],
      f: {
      field: ['中国史', '哲学', '历史'],
      form: ['实体书', '电子书'],
      language: ['中文', '英文']
    }
    },
  {
      id: 'global-history-stavrianos',
      cat: 'books',
      title: '全球通史：从史前到21世纪',
      alt: 'A Global History: From Prehistory to the 21st Century',
      year: 1970,
      region: '美国',
      status: '已出版',
      image: null,
      summary: '以「全球视角」而非西方中心叙事组织世界史，按文明与时代划分，强调各文明的互动与平行发展。',
      review: '中文世界最常被推荐的世界史入门书，长销不衰。它最大的贡献是视角转换：不把欧洲崛起当作默认终点，而是追问「为什么是西方」。新版加入 20 世纪末与全球化章节。写作通俗、结构对称，代价是细节被大量压缩、部分论断已被后续研究修正，适合先建立框架再深入专题。',
      pros: ['全球视角', '结构清晰', '适合入门'],
      cons: ['细节压缩', '部分论断已过时'],
      tags: ['斯塔夫里阿诺斯', '文明比较', '通史'],
      scores: [{
      src: '豆瓣',
      val: 9.2,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E5%85%A8%E7%90%83%E9%80%9A%E5%8F%B2%EF%BC%9A%E4%BB%8E%E5%8F%B2%E5%89%8D%E5%88%B021%E4%B8%96%E7%BA%AA'
    }, {
      src: 'Goodreads',
      val: 4.0,
      max: 5,
      url: 'https://www.goodreads.com/search?q=A%20Global%20History%3A%20From%20Prehistory%20to%20the%2021st%20Century'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E5%85%A8%E7%90%83%E9%80%9A%E5%8F%B2%EF%BC%9A%E4%BB%8E%E5%8F%B2%E5%89%8D%E5%88%B021%E4%B8%96%E7%BA%AA'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E5%85%A8%E7%90%83%E9%80%9A%E5%8F%B2'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/A%20Global%20History'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=A%20Global%20History'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=A%20Global%20History'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E5%85%A8%E7%90%83%E9%80%9A%E5%8F%B2'
    }],
      related: ['books/music-in-western-civilization', 'books/cambridge-history-china', 'books/decline-fall-rome'],
      f: {
      field: ['世界史', '历史'],
      form: ['实体书', '电子书'],
      language: ['中文', '英文']
    }
    },
  {
      id: 'history-of-the-world-mcneill',
      cat: 'books',
      title: '世界史',
      alt: 'A World History',
      year: 1967,
      region: '美国',
      status: '已出版',
      image: null,
      summary: '以文明之间的接触与传播为主线重写世界通史，突出技术、疾病、军事组织等跨文明要素。',
      review: '麦克尼尔的强项是「联结」：把各文明视为不断互相感染的网络，而非孤立演进的单元，这与《全球通史》的并列式写法形成对照。他的《瘟疫与人》《西方的兴起》进一步展开同一思路。本书文字凝练、判断大胆，读者需要对基本史实已有概念才不至于跟不上节奏。',
      pros: ['强调文明互动', '判断大胆有洞见', '与专题著作呼应'],
      cons: ['叙事压缩', '个别结论有争议'],
      tags: ['麦克尼尔', '跨文明史', '通史'],
      scores: [{
      src: '豆瓣',
      val: 8.9,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E4%B8%96%E7%95%8C%E5%8F%B2'
    }, {
      src: 'Goodreads',
      val: 3.9,
      max: 5,
      url: 'https://www.goodreads.com/search?q=A%20World%20History'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E4%B8%96%E7%95%8C%E5%8F%B2'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E4%B8%96%E7%95%8C%E5%8F%B2'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/A%20World%20History'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=A%20World%20History'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=A%20World%20History'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E4%B8%96%E7%95%8C%E5%8F%B2'
    }],
      related: ['books/music-in-western-civilization', 'books/cambridge-history-china', 'books/global-history-stavrianos'],
      f: {
      field: ['世界史', '历史'],
      form: ['实体书', '电子书'],
      language: ['中文', '英文']
    }
    },
  {
      id: 'rise-of-the-west',
      cat: 'books',
      title: '西方的兴起：人类共同体史',
      alt: 'The Rise of the West: A History of the Human Community',
      year: 1963,
      region: '美国',
      status: '已出版',
      image: null,
      summary: '追问近代西方为何在1500年后主导世界，从军事技术、组织能力、疾病生态与文明接触角度给出系统解释。',
      review: '20 世纪世界史写作最重要的作品之一，获美国国家图书奖。麦克尼尔拒绝单因解释，把「兴起」理解为多文明互动的偶然结果，同时坦承其代价。与斯宾格勒、汤因比的文明循环论形成对照，也与后来的《大分流》《国富国穷》构成持续对话。学术性强，通读需要耐心。',
      pros: ['多因素综合分析', '史学地位高', '启发性强'],
      cons: ['篇幅长、密度大', '欧洲中心议题难以完全摆脱'],
      tags: ['麦克尼尔', '文明互动', '近代兴起'],
      scores: [{
      src: '豆瓣',
      val: 8.8,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E8%A5%BF%E6%96%B9%E7%9A%84%E5%85%B4%E8%B5%B7%EF%BC%9A%E4%BA%BA%E7%B1%BB%E5%85%B1%E5%90%8C%E4%BD%93%E5%8F%B2'
    }, {
      src: 'Goodreads',
      val: 3.9,
      max: 5,
      url: 'https://www.goodreads.com/search?q=The%20Rise%20of%20the%20West%3A%20A%20History%20of%20the%20Human%20Community'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E8%A5%BF%E6%96%B9%E7%9A%84%E5%85%B4%E8%B5%B7%EF%BC%9A%E4%BA%BA%E7%B1%BB%E5%85%B1%E5%90%8C%E4%BD%93%E5%8F%B2'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E8%A5%BF%E6%96%B9%E7%9A%84%E5%85%B4%E8%B5%B7'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/The%20Rise%20of%20the%20West'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=The%20Rise%20of%20the%20West'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=The%20Rise%20of%20the%20West'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E8%A5%BF%E6%96%B9%E7%9A%84%E5%85%B4%E8%B5%B7'
    }],
      related: ['books/rise-fall-third-reich', 'books/peloponnesian-war', 'books/diplomacy-kissinger'],
      f: {
      field: ['世界史', '历史', '政治'],
      form: ['实体书', '电子书'],
      language: ['中文', '英文']
    }
    },
  {
      id: 'decline-fall-rome',
      cat: 'books',
      title: '罗马帝国衰亡史',
      alt: 'The History of the Decline and Fall of the Roman Empire',
      year: 1776,
      region: '英国',
      status: '已出版',
      image: null,
      summary: '从安东尼时代写到1453年君士坦丁堡陷落与罗马城的衰败，六卷本叙述罗马帝国一千余年的衰落过程。',
      review: '英语史学与散文的双重经典。吉本把庞大史料织成气势恢宏的叙事，讽刺笔调与警句密度极高，「基督教的胜利与野蛮人的入侵」两大解释框架影响后世两百年（也长期被批评）。中译本以席代岳译本较通行。今天读它，价值一半在史学、一半在文学与思想史；具体史实须以现代研究校订。',
      pros: ['文笔雄浑', '叙事规模空前', '思想史价值高'],
      cons: ['解释框架已被大量修正', '篇幅巨大'],
      tags: ['吉本', '罗马', '启蒙史学'],
      scores: [{
      src: '豆瓣',
      val: 9.2,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E7%BD%97%E9%A9%AC%E5%B8%9D%E5%9B%BD%E8%A1%B0%E4%BA%A1%E5%8F%B2'
    }, {
      src: 'Goodreads',
      val: 4.1,
      max: 5,
      url: 'https://www.goodreads.com/search?q=The%20History%20of%20the%20Decline%20and%20Fall%20of%20the%20Roman%20Empire'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E7%BD%97%E9%A9%AC%E5%B8%9D%E5%9B%BD%E8%A1%B0%E4%BA%A1%E5%8F%B2'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E7%BD%97%E9%A9%AC%E5%B8%9D%E5%9B%BD%E8%A1%B0%E4%BA%A1%E5%8F%B2'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/The%20History%20of%20the%20Decline%20and%20Fall%20of%20the%20Roman%20Empire'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=The%20History%20of%20the%20Decline%20and%20Fall%20of%20the%20Roman%20Empire'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=The%20History%20of%20the%20Decline%20and%20Fall%20of%20the%20Roman%20Empire'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E7%BD%97%E9%A9%AC%E5%B8%9D%E5%9B%BD%E8%A1%B0%E4%BA%A1%E5%8F%B2'
    }],
      related: ['books/music-in-western-civilization', 'books/cambridge-history-china', 'books/global-history-stavrianos'],
      f: {
      field: ['世界史', '历史'],
      form: ['实体书'],
      language: ['中文', '英文']
    }
    },
  {
      id: 'peloponnesian-war',
      cat: 'books',
      title: '伯罗奔尼撒战争史',
      alt: 'History of the Peloponnesian War',
      year: -400,
      region: '古希腊',
      status: '已出版',
      image: null,
      summary: '记述公元前431年至前404年雅典与斯巴达之间的战争，兼论政治决策、瘟疫、内乱与帝国逻辑。',
      review: '西方政治现实主义的源头。「米洛斯对话」中「强者为所欲为，弱者受所必受」至今仍是国际关系课堂的必读文本。修昔底德以亲历者身份写作，刻意排除神意解释，追求可验证的因果，被视为科学史学的开端。文字凝练、演说辞占大量篇幅，需要一定耐心；徐松岩译本较新。',
      pros: ['政治现实主义源头', '因果分析严谨', '演说辞具思想史价值'],
      cons: ['叙事未完（止于前411年）', '演说辞与史实的界限需辨析'],
      tags: ['修昔底德', '雅典', '国际关系'],
      scores: [{
      src: '豆瓣',
      val: 9.0,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E4%BC%AF%E7%BD%97%E5%A5%94%E5%B0%BC%E6%92%92%E6%88%98%E4%BA%89%E5%8F%B2'
    }, {
      src: 'Goodreads',
      val: 3.9,
      max: 5,
      url: 'https://www.goodreads.com/search?q=History%20of%20the%20Peloponnesian%20War'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E4%BC%AF%E7%BD%97%E5%A5%94%E5%B0%BC%E6%92%92%E6%88%98%E4%BA%89%E5%8F%B2'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E4%BC%AF%E7%BD%97%E5%A5%94%E5%B0%BC%E6%92%92%E6%88%98%E4%BA%89%E5%8F%B2'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/History%20of%20the%20Peloponnesian%20War'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=History%20of%20the%20Peloponnesian%20War'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=History%20of%20the%20Peloponnesian%20War'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E4%BC%AF%E7%BD%97%E5%A5%94%E5%B0%BC%E6%92%92%E6%88%98%E4%BA%89%E5%8F%B2'
    }],
      related: ['books/rise-fall-third-reich', 'books/diplomacy-kissinger', 'books/rise-of-the-west'],
      f: {
      field: ['世界史', '政治', '历史'],
      form: ['实体书'],
      language: ['中文', '英文', '古希腊文']
    }
    },
  {
      id: 'herodotus-histories',
      cat: 'books',
      title: '历史（希腊波斯战争史）',
      alt: 'The Histories',
      year: -430,
      region: '古希腊',
      status: '已出版',
      image: 'assets/img/books/herodotus-histories_it.jpg',
      summary: '以希波战争为轴心，广泛记录埃及、斯基泰、巴比伦、波斯等地的地理、风俗、宗教与传闻。',
      review: '西方第一部完整传世的历史著作，「历史之父」既是赞美也是提醒：希罗多德兼收并蓄，常把听来的奇闻照录，注明「我不相信，但有责任记录」。因此它同时是史学、民族志与文学的源头，读来趣味盎然。王以铸中译本通行。使用时须与现代考古、近东研究互证。',
      pros: ['叙事生动', '民族志先驱', '文化视野开阔'],
      cons: ['传闻与史实混杂', '年代与数字常有误差'],
      tags: ['希罗多德', '希波战争', '民族志'],
      scores: [{
      src: '豆瓣',
      val: 8.9,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E5%8E%86%E5%8F%B2%EF%BC%88%E5%B8%8C%E8%85%8A%E6%B3%A2%E6%96%AF%E6%88%98%E4%BA%89%E5%8F%B2%EF%BC%89'
    }, {
      src: 'Goodreads',
      val: 3.98,
      max: 5,
      url: 'https://www.goodreads.com/search?q=The%20Histories'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E5%8E%86%E5%8F%B2%EF%BC%88%E5%B8%8C%E8%85%8A%E6%B3%A2%E6%96%AF%E6%88%98%E4%BA%89%E5%8F%B2%EF%BC%89'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E5%8E%86%E5%8F%B2%EF%BC%88%E5%B8%8C%E8%85%8A%E6%B3%A2%E6%96%AF%E6%88%98%E4%BA%89%E5%8F%B2%EF%BC%89'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/The%20Histories'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=The%20Histories'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=The%20Histories'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E5%8E%86%E5%8F%B2%EF%BC%88%E5%B8%8C%E8%85%8A%E6%B3%A2%E6%96%AF%E6%88%98%E4%BA%89%E5%8F%B2%EF%BC%89'
    }],
      related: ['books/music-in-western-civilization', 'books/cambridge-history-china', 'books/global-history-stavrianos'],
      f: {
      field: ['世界史', '历史', '人类学'],
      form: ['实体书'],
      language: ['中文', '英文', '古希腊文']
    }
    },
  {
      id: '1453-constantinople',
      cat: 'books',
      title: '1453：君士坦丁堡之战',
      alt: '1453: The Holy War for Constantinople',
      year: 2005,
      region: '英国',
      status: '已出版',
      image: null,
      summary: '逐日复原1453年奥斯曼围攻与拜占庭守城之战，兼述城墙、火炮、海链与双方心理。',
      review: '叙事史学的佳作：克劳利把五十三天的围城写成节奏紧凑的战地报道，同时交代技术变革（巨炮终结城墙时代）与宗教政治背景。基于希腊与奥斯曼双方史料，兼顾两侧视角。属于「事件史」写作，宏观分析让位于场面还原，读完需再补拜占庭通史。可与《海洋帝国》《征服者》构成地中海三部曲。',
      pros: ['节奏紧凑', '双方史料并重', '技术与心理描写到位'],
      cons: ['宏观解释较浅', '戏剧化处理略多'],
      tags: ['克劳利', '拜占庭', '地中海三部曲'],
      scores: [{
      src: '豆瓣',
      val: 8.8,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=1453%EF%BC%9A%E5%90%9B%E5%A3%AB%E5%9D%A6%E4%B8%81%E5%A0%A1%E4%B9%8B%E6%88%98'
    }, {
      src: 'Goodreads',
      val: 4.1,
      max: 5,
      url: 'https://www.goodreads.com/search?q=1453%3A%20The%20Holy%20War%20for%20Constantinople'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=1453%EF%BC%9A%E5%90%9B%E5%A3%AB%E5%9D%A6%E4%B8%81%E5%A0%A1%E4%B9%8B%E6%88%98'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=1453'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/1453'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=1453'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=1453'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=1453'
    }],
      related: ['books/music-in-western-civilization', 'books/cambridge-history-china', 'books/global-history-stavrianos'],
      f: {
      field: ['世界史', '历史'],
      form: ['实体书', '电子书'],
      language: ['中文', '英文']
    }
    },
  {
      id: 'silk-roads',
      cat: 'books',
      title: '丝绸之路：一部全新的世界史',
      alt: 'The Silk Roads: A New History of the World',
      year: 2015,
      region: '英国',
      status: '已出版',
      image: null,
      summary: '以中亚为轴心重写世界史，从波斯帝国一路写到石油政治与当代「一带一路」。',
      review: '视角翻转是本书最大卖点：世界的中心不在地中海或大西洋，而在中亚十字路口。弗兰科潘材料面广、行文流畅，把宗教传播、贸易、征服、石油与大博弈串成一条线。批评者认为后半部分（近现代）深度不足、结论偏于宏大，但作为通识读物与视角矫正非常成功。',
      pros: ['中心视角创新', '跨越时段长', '可读性强'],
      cons: ['近现代部分深度不足', '概括偏宏大'],
      tags: ['弗兰科潘', '中亚', '贸易史'],
      scores: [{
      src: '豆瓣',
      val: 8.5,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E4%B8%9D%E7%BB%B8%E4%B9%8B%E8%B7%AF%EF%BC%9A%E4%B8%80%E9%83%A8%E5%85%A8%E6%96%B0%E7%9A%84%E4%B8%96%E7%95%8C%E5%8F%B2'
    }, {
      src: 'Goodreads',
      val: 3.9,
      max: 5,
      url: 'https://www.goodreads.com/search?q=The%20Silk%20Roads%3A%20A%20New%20History%20of%20the%20World'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E4%B8%9D%E7%BB%B8%E4%B9%8B%E8%B7%AF%EF%BC%9A%E4%B8%80%E9%83%A8%E5%85%A8%E6%96%B0%E7%9A%84%E4%B8%96%E7%95%8C%E5%8F%B2'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E4%B8%9D%E7%BB%B8%E4%B9%8B%E8%B7%AF'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/The%20Silk%20Roads'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=The%20Silk%20Roads'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=The%20Silk%20Roads'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E4%B8%9D%E7%BB%B8%E4%B9%8B%E8%B7%AF'
    }],
      related: ['books/why-nations-fail', 'books/tianchao-bengkui', 'books/rise-fall-third-reich'],
      f: {
      field: ['世界史', '经济', '政治'],
      form: ['实体书', '电子书'],
      language: ['中文', '英文']
    }
    },
  {
      id: 'empire-of-cotton',
      cat: 'books',
      title: '棉花帝国：一部资本主义全球史',
      alt: 'Empire of Cotton: A Global History',
      year: 2014,
      region: '美国',
      status: '已出版',
      image: null,
      summary: '以棉花这一商品串联奴隶制、殖民扩张、工业革命与全球分工，提出「战争资本主义」概念。',
      review: '全球史与商品史结合的典范，普利策奖决选作品。贝克特用棉花证明：工业革命的起点不是工厂里的机器，而是美洲种植园里的暴力与国家权力的强行介入，「自由市场」背后是军事与法律的强制。论证有力、材料跨国，缺点是结构重复（每章都在重申同一论点），叙述偏重宏观。',
      pros: ['全球史方法典范', '论点有力', '跨洲材料'],
      cons: ['论证重复', '个体经验描写少'],
      tags: ['贝克特', '资本主义', '全球史'],
      scores: [{
      src: '豆瓣',
      val: 8.7,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E6%A3%89%E8%8A%B1%E5%B8%9D%E5%9B%BD%EF%BC%9A%E4%B8%80%E9%83%A8%E8%B5%84%E6%9C%AC%E4%B8%BB%E4%B9%89%E5%85%A8%E7%90%83%E5%8F%B2'
    }, {
      src: 'Goodreads',
      val: 4.0,
      max: 5,
      url: 'https://www.goodreads.com/search?q=Empire%20of%20Cotton%3A%20A%20Global%20History'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E6%A3%89%E8%8A%B1%E5%B8%9D%E5%9B%BD%EF%BC%9A%E4%B8%80%E9%83%A8%E8%B5%84%E6%9C%AC%E4%B8%BB%E4%B9%89%E5%85%A8%E7%90%83%E5%8F%B2'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E6%A3%89%E8%8A%B1%E5%B8%9D%E5%9B%BD'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/Empire%20of%20Cotton'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=Empire%20of%20Cotton'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=Empire%20of%20Cotton'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E6%A3%89%E8%8A%B1%E5%B8%9D%E5%9B%BD'
    }],
      related: ['books/wealth-poverty-nations', 'books/great-divergence', 'books/music-in-western-civilization'],
      f: {
      field: ['世界史', '经济', '历史'],
      form: ['实体书', '电子书'],
      language: ['中文', '英文']
    }
    },
  {
      id: 'great-divergence',
      cat: 'books',
      title: '大分流：欧洲、中国及现代世界经济的发展',
      alt: 'The Great Divergence',
      year: 2000,
      region: '美国',
      status: '已出版',
      image: null,
      summary: '比较18世纪长江三角洲与英格兰，主张两地发展水平相近，英国的领先源于煤炭区位与殖民地资源。',
      review: '加州学派的代表作，直接挑战「欧洲例外论」：不是文化或制度使西方领先，而是偶然要素——易开采的煤矿位置与美洲殖民地提供的「幽灵土地」。引发长达二十年的论战（黄宗智、罗伯特·艾伦等均有反驳）。无论是否赞同其观点，本书都是理解中西比较经济史争论的必经之路。',
      pros: ['挑战主流叙事', '比较方法精细', '引发持续论战'],
      cons: ['数据与比较口径受质疑', '对制度因素重视不足'],
      tags: ['彭慕兰', '加州学派', '经济史'],
      scores: [{
      src: '豆瓣',
      val: 8.6,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E5%A4%A7%E5%88%86%E6%B5%81%EF%BC%9A%E6%AC%A7%E6%B4%B2%E3%80%81%E4%B8%AD%E5%9B%BD%E5%8F%8A%E7%8E%B0%E4%BB%A3%E4%B8%96%E7%95%8C%E7%BB%8F%E6%B5%8E%E7%9A%84%E5%8F%91%E5%B1%95'
    }, {
      src: 'Goodreads',
      val: 3.7,
      max: 5,
      url: 'https://www.goodreads.com/search?q=The%20Great%20Divergence'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E5%A4%A7%E5%88%86%E6%B5%81%EF%BC%9A%E6%AC%A7%E6%B4%B2%E3%80%81%E4%B8%AD%E5%9B%BD%E5%8F%8A%E7%8E%B0%E4%BB%A3%E4%B8%96%E7%95%8C%E7%BB%8F%E6%B5%8E%E7%9A%84%E5%8F%91%E5%B1%95'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E5%A4%A7%E5%88%86%E6%B5%81'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/The%20Great%20Divergence'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=The%20Great%20Divergence'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=The%20Great%20Divergence'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E5%A4%A7%E5%88%86%E6%B5%81'
    }],
      related: ['books/empire-of-cotton', 'books/wealth-poverty-nations', 'books/music-in-western-civilization'],
      f: {
      field: ['世界史', '经济', '历史'],
      form: ['实体书', '电子书'],
      language: ['中文', '英文']
    }
    },
  {
      id: 'rise-fall-third-reich',
      cat: 'books',
      title: '第三帝国的兴亡',
      alt: 'The Rise and Fall of the Third Reich',
      year: 1960,
      region: '美国',
      status: '已出版',
      image: null,
      summary: '记者出身的夏伊勒结合亲历见闻与纽伦堡审判缴获档案，叙述纳粹德国从崛起到覆灭的全过程。',
      review: '千余页的巨著，最大优势是第一现场感与档案的即时利用：作者1930年代常驻柏林，亲眼见过希特勒的演讲与入侵前后的气氛。史学方法上受后来专业史家批评（过度依赖个人叙事、「德国特殊道路」的解释过于整体化），但作为通识读物与叙事史范本仍然难以替代。',
      pros: ['亲历者视角', '档案利用早', '叙事磅礴'],
      cons: ['解释框架受后世批评', '篇幅巨大'],
      tags: ['夏伊勒', '纳粹德国', '二战'],
      scores: [{
      src: '豆瓣',
      val: 9.2,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E7%AC%AC%E4%B8%89%E5%B8%9D%E5%9B%BD%E7%9A%84%E5%85%B4%E4%BA%A1'
    }, {
      src: 'Goodreads',
      val: 4.35,
      max: 5,
      url: 'https://www.goodreads.com/search?q=The%20Rise%20and%20Fall%20of%20the%20Third%20Reich'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E7%AC%AC%E4%B8%89%E5%B8%9D%E5%9B%BD%E7%9A%84%E5%85%B4%E4%BA%A1'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E7%AC%AC%E4%B8%89%E5%B8%9D%E5%9B%BD%E7%9A%84%E5%85%B4%E4%BA%A1'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/The%20Rise%20and%20Fall%20of%20the%20Third%20Reich'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=The%20Rise%20and%20Fall%20of%20the%20Third%20Reich'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=The%20Rise%20and%20Fall%20of%20the%20Third%20Reich'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E7%AC%AC%E4%B8%89%E5%B8%9D%E5%9B%BD%E7%9A%84%E5%85%B4%E4%BA%A1'
    }],
      related: ['books/peloponnesian-war', 'books/diplomacy-kissinger', 'books/rise-of-the-west'],
      f: {
      field: ['世界史', '政治', '历史'],
      form: ['实体书', '电子书'],
      language: ['中文', '英文']
    }
    },
  {
      id: 'study-of-history-toynbee',
      cat: 'books',
      title: '历史研究（节本）',
      alt: 'A Study of History',
      year: 1946,
      region: '英国',
      status: '已出版',
      image: 'assets/img/books/study-of-history-toynbee_it.jpg',
      summary: '提出「挑战与应战」的文明形态理论，考察二十余个文明的起源、生长、衰落与解体规律。',
      review: '文明形态史观的高峰：汤因比拒绝线性进步史观，主张每个文明都要回答自身环境提出的挑战，失败于内部创造力枯竭而非外部打击。宏大、诗意、包罗万象，也因此被专业史家批评为「以诗代证」、材料选择性使用。今天读它，价值在于历史哲学的想象力，而非具体结论。',
      pros: ['历史哲学想象力强', '跨文明视野', '文风恢宏'],
      cons: ['证据使用受批评', '体系过于整齐'],
      tags: ['汤因比', '文明形态', '历史哲学'],
      scores: [{
      src: '豆瓣',
      val: 9.1,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E5%8E%86%E5%8F%B2%E7%A0%94%E7%A9%B6%EF%BC%88%E8%8A%82%E6%9C%AC%EF%BC%89'
    }, {
      src: 'Goodreads',
      val: 4.1,
      max: 5,
      url: 'https://www.goodreads.com/search?q=A%20Study%20of%20History'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E5%8E%86%E5%8F%B2%E7%A0%94%E7%A9%B6%EF%BC%88%E8%8A%82%E6%9C%AC%EF%BC%89'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E5%8E%86%E5%8F%B2%E7%A0%94%E7%A9%B6%EF%BC%88%E8%8A%82%E6%9C%AC%EF%BC%89'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/A%20Study%20of%20History'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=A%20Study%20of%20History'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=A%20Study%20of%20History'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E5%8E%86%E5%8F%B2%E7%A0%94%E7%A9%B6%EF%BC%88%E8%8A%82%E6%9C%AC%EF%BC%89'
    }],
      related: ['books/music-in-western-civilization', 'books/cambridge-history-china', 'books/global-history-stavrianos'],
      f: {
      field: ['世界史', '哲学', '历史'],
      form: ['实体书', '电子书'],
      language: ['中文', '英文']
    }
    },
  {
      id: 'autumn-of-the-middle-ages',
      cat: 'books',
      title: '中世纪的秋天：14、15世纪法国与荷兰的艺术与人生',
      alt: 'The Autumn of the Middle Ages',
      year: 1919,
      region: '荷兰',
      status: '已出版',
      image: null,
      summary: '描绘14、15世纪勃艮第宫廷与低地国家的生活心态：骑士理想、宗教情感、死亡想象与华丽仪式。',
      review: '心态史与文化史的先驱之作。赫伊津哈不谈经济数据与制度沿革，而是重现一个时代「如何感受生活」：对荣誉、死亡、色彩与仪式的过度敏感。文字本身即艺术品，画面感极强。缺点是材料集中于宫廷与上层，且「衰落」的定调被后世修正。与《游戏的人》同为其代表作。',
      pros: ['心态史开创性', '文笔华美', '画面感强'],
      cons: ['材料偏上层', '「衰落」定调受修正'],
      tags: ['赫伊津哈', '中世纪', '文化史'],
      scores: [{
      src: '豆瓣',
      val: 9.1,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E4%B8%AD%E4%B8%96%E7%BA%AA%E7%9A%84%E7%A7%8B%E5%A4%A9%EF%BC%9A14%E3%80%8115%E4%B8%96%E7%BA%AA%E6%B3%95%E5%9B%BD%E4%B8%8E%E8%8D%B7%E5%85%B0%E7%9A%84%E8%89%BA%E6%9C%AF%E4%B8%8E%E4%BA%BA%E7%94%9F'
    }, {
      src: 'Goodreads',
      val: 4.1,
      max: 5,
      url: 'https://www.goodreads.com/search?q=The%20Autumn%20of%20the%20Middle%20Ages'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E4%B8%AD%E4%B8%96%E7%BA%AA%E7%9A%84%E7%A7%8B%E5%A4%A9%EF%BC%9A14%E3%80%8115%E4%B8%96%E7%BA%AA%E6%B3%95%E5%9B%BD%E4%B8%8E%E8%8D%B7%E5%85%B0%E7%9A%84%E8%89%BA%E6%9C%AF%E4%B8%8E%E4%BA%BA%E7%94%9F'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E4%B8%AD%E4%B8%96%E7%BA%AA%E7%9A%84%E7%A7%8B%E5%A4%A9'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/The%20Autumn%20of%20the%20Middle%20Ages'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=The%20Autumn%20of%20the%20Middle%20Ages'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=The%20Autumn%20of%20the%20Middle%20Ages'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E4%B8%AD%E4%B8%96%E7%BA%AA%E7%9A%84%E7%A7%8B%E5%A4%A9'
    }],
      related: ['books/music-in-western-civilization', 'books/art-story-gombrich', 'books/cambridge-history-china'],
      f: {
      field: ['世界史', '艺术', '历史'],
      form: ['实体书', '电子书'],
      language: ['中文', '英文', '荷兰文']
    }
    },
  {
      id: 'feudal-society-bloch',
      cat: 'books',
      title: '封建社会',
      alt: 'Feudal Society',
      year: 1939,
      region: '法国',
      status: '已出版',
      image: 'assets/img/books/feudal-society-bloch.jpg',
      summary: '年鉴学派奠基之作，从心态、法律、经济、阶层多维度比较西欧封建社会与日本、近东的类似形态。',
      review: '布洛赫把「封建」从一套法律术语还原为一种整体社会形态，强调人际依附、土地与武力、集体心态的相互缠绕。方法上开创比较史学与总体史，是年鉴学派方法论宣言式的作品。行文密度高、翻译偏硬，非历史爱好者会觉得吃力；但读过后对中世纪的理解会换一层。',
      pros: ['总体史方法', '跨文明比较', '史学方法论价值高'],
      cons: ['阅读难度大', '译本偏硬'],
      tags: ['布洛赫', '年鉴学派', '中世纪'],
      scores: [{
      src: '豆瓣',
      val: 9.1,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E5%B0%81%E5%BB%BA%E7%A4%BE%E4%BC%9A'
    }, {
      src: 'Goodreads',
      val: 4.0,
      max: 5,
      url: 'https://www.goodreads.com/search?q=Feudal%20Society'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E5%B0%81%E5%BB%BA%E7%A4%BE%E4%BC%9A'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E5%B0%81%E5%BB%BA%E7%A4%BE%E4%BC%9A'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/Feudal%20Society'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=Feudal%20Society'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=Feudal%20Society'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E5%B0%81%E5%BB%BA%E7%A4%BE%E4%BC%9A'
    }],
      related: ['books/glory-and-dream', 'books/music-in-western-civilization', 'books/cambridge-history-china'],
      f: {
      field: ['世界史', '社会学', '历史'],
      form: ['实体书', '电子书'],
      language: ['中文', '法文']
    }
    },
  {
      id: 'rape-of-nanking',
      cat: 'books',
      title: '南京大屠杀：被遗忘的二战浩劫',
      alt: 'The Rape of Nanking: The Forgotten Holocaust of World War II',
      year: 1997,
      region: '美国',
      status: '已出版',
      image: null,
      summary: '从受害者、施暴者与拯救者三个视角记述1937年南京沦陷后的屠杀，并追溯战后审判与国际社会的沉默。',
      review: '第一本以英语向西方世界系统讲述南京大屠杀的非虚构作品，推动了相关史料的整理与国际关注。张纯如的三方视角结构清晰，情感克制但材料令人窒息。学术上属记者型写作，具体数字与细节在学界仍有讨论，需与专业研究并读。作者因长期接触暴行史料而精神崩溃最终自尽，这本身也是本书的注脚。',
      pros: ['三视角结构清晰', '国际影响巨大', '史料抢救价值'],
      cons: ['记者式写作，非严格学术', '部分数字有争议'],
      tags: ['张纯如', '二战', '记忆政治'],
      scores: [{
      src: '豆瓣',
      val: 9.0,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E5%8D%97%E4%BA%AC%E5%A4%A7%E5%B1%A0%E6%9D%80%EF%BC%9A%E8%A2%AB%E9%81%97%E5%BF%98%E7%9A%84%E4%BA%8C%E6%88%98%E6%B5%A9%E5%8A%AB'
    }, {
      src: 'Goodreads',
      val: 4.3,
      max: 5,
      url: 'https://www.goodreads.com/search?q=The%20Rape%20of%20Nanking%3A%20The%20Forgotten%20Holocaust%20of%20World%20War%20II'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E5%8D%97%E4%BA%AC%E5%A4%A7%E5%B1%A0%E6%9D%80%EF%BC%9A%E8%A2%AB%E9%81%97%E5%BF%98%E7%9A%84%E4%BA%8C%E6%88%98%E6%B5%A9%E5%8A%AB'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E5%8D%97%E4%BA%AC%E5%A4%A7%E5%B1%A0%E6%9D%80'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/The%20Rape%20of%20Nanking'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=The%20Rape%20of%20Nanking'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=The%20Rape%20of%20Nanking'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E5%8D%97%E4%BA%AC%E5%A4%A7%E5%B1%A0%E6%9D%80'
    }],
      related: ['books/tianchao-bengkui', 'books/zizhi-tongjian', 'books/chinese-political-gains-losses'],
      f: {
      field: ['世界史', '中国史', '政治'],
      form: ['实体书', '电子书'],
      language: ['中文', '英文']
    }
    },
  {
      id: 'hiroshima-hersey',
      cat: 'books',
      title: '广岛',
      alt: 'Hiroshima',
      year: 1946,
      region: '美国',
      status: '已出版',
      image: null,
      summary: '追踪六位原子弹爆炸幸存者（医生、牧师、寡妇、女工等）在1945年8月6日及此后数十年的经历。',
      review: '《纽约客》整期刊登，被称为20世纪最伟大的新闻报道之一。赫西不写宏观战略与道德辩论，只写六个普通人一天里的每一分钟，用极简白描让读者自己承受重量。这种「去修辞」的写法反而是最强修辞。篇幅短，适合作为理解核时代伦理与新闻写作方法的双重入门。',
      pros: ['白描手法克制有力', '人物视角具体', '新闻写作范本'],
      cons: ['不涉及政治决策分析', '结构单线'],
      tags: ['赫西', '核武器', '非虚构写作'],
      scores: [{
      src: '豆瓣',
      val: 8.9,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E5%B9%BF%E5%B2%9B'
    }, {
      src: 'Goodreads',
      val: 4.0,
      max: 5,
      url: 'https://www.goodreads.com/search?q=Hiroshima'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E5%B9%BF%E5%B2%9B'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E5%B9%BF%E5%B2%9B'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/Hiroshima'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=Hiroshima'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=Hiroshima'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E5%B9%BF%E5%B2%9B'
    }],
      related: ['books/music-in-western-civilization', 'books/cambridge-history-china', 'books/global-history-stavrianos'],
      f: {
      field: ['世界史', '历史', '传记'],
      form: ['实体书', '电子书'],
      language: ['中文', '英文']
    }
    },
  {
      id: 'chinese-philosophy-short-history',
      cat: 'books',
      title: '中国哲学简史',
      alt: 'A Short History of Chinese Philosophy',
      year: 1948,
      region: '美国',
      status: '已出版',
      image: null,
      summary: '以英文写成、面向西方读者的中国哲学通论，按先秦诸子、两汉经学、魏晋玄学、佛学、宋明理学、近代思潮的脉络展开。',
      review: '中国人写给世界看的中国哲学入门，至今仍是最好的单卷本之一。冯友兰长于「以西方哲学问题意识重述中国思想」，因此概念清楚、结构整齐，代价是各家学说被裁剪进同一框架，个别判断带个人立场（如「新理学」的偏好）。涂又光译本与赵复三译本各有拥趸，建议对照阅读。',
      pros: ['脉络清晰', '中西对照易懂', '篇幅适中'],
      cons: ['框架带个人立场', '部分学派处理较简'],
      tags: ['冯友兰', '先秦诸子', '宋明理学'],
      scores: [{
      src: '豆瓣',
      val: 9.3,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E4%B8%AD%E5%9B%BD%E5%93%B2%E5%AD%A6%E7%AE%80%E5%8F%B2'
    }, {
      src: 'Goodreads',
      val: 4.1,
      max: 5,
      url: 'https://www.goodreads.com/search?q=A%20Short%20History%20of%20Chinese%20Philosophy'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E4%B8%AD%E5%9B%BD%E5%93%B2%E5%AD%A6%E7%AE%80%E5%8F%B2'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E4%B8%AD%E5%9B%BD%E5%93%B2%E5%AD%A6%E7%AE%80%E5%8F%B2'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/A%20Short%20History%20of%20Chinese%20Philosophy'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=A%20Short%20History%20of%20Chinese%20Philosophy'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=A%20Short%20History%20of%20Chinese%20Philosophy'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E4%B8%AD%E5%9B%BD%E5%93%B2%E5%AD%A6%E7%AE%80%E5%8F%B2'
    }],
      related: ['books/du-tongjian-lun', 'books/analects', 'books/chuanxi-lu'],
      f: {
      field: ['哲学', '中国史'],
      form: ['实体书', '电子书'],
      language: ['中文', '英文']
    }
    },
  {
      id: 'analects',
      cat: 'books',
      title: '论语',
      alt: 'The Analects of Confucius',
      year: -450,
      region: '中国',
      status: '已出版',
      image: null,
      summary: '记录孔子及其弟子言行的语录体典籍，涵盖仁、礼、君子、为政、教育与修身，是儒家思想的源头文本。',
      review: '两千年来塑造中国人心智结构的文本。看似零散的短句，实际提供了一整套关于人格养成与社会秩序的方案：「仁」是内在态度，「礼」是外在秩序。版本选择上，杨伯峻《论语译注》最通行、注释可靠；钱穆《论语新解》偏义理，李泽厚《论语今读》带入现代哲学对话。是「必须读过原文」的少数书之一。',
      pros: ['思想源头地位', '文本精炼', '注本丰富'],
      cons: ['语录体缺乏系统论证', '历代解释分歧大'],
      tags: ['孔子', '儒家', '经典'],
      scores: [{
      src: '豆瓣',
      val: 9.0,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E8%AE%BA%E8%AF%AD'
    }, {
      src: 'Goodreads',
      val: 3.8,
      max: 5,
      url: 'https://www.goodreads.com/search?q=The%20Analects%20of%20Confucius'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E8%AE%BA%E8%AF%AD'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E8%AE%BA%E8%AF%AD'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/The%20Analects%20of%20Confucius'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=The%20Analects%20of%20Confucius'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=The%20Analects%20of%20Confucius'
    }, {
      kind: '古籍',
      label: '中国哲学书电子化计划',
      url: 'https://ctext.org/searchbooks.pl?if=gb&searchu=%E8%AE%BA%E8%AF%AD'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E8%AE%BA%E8%AF%AD'
    }],
      related: ['books/du-tongjian-lun', 'books/zizhi-tongjian', 'books/tianchao-bengkui'],
      f: {
      field: ['哲学', '中国史', '政治'],
      form: ['实体书'],
      language: ['中文']
    }
    },
  {
      id: 'zhuangzi',
      cat: 'books',
      title: '庄子',
      alt: 'Zhuangzi',
      year: -300,
      region: '中国',
      status: '已出版',
      image: null,
      summary: '以寓言、重言、卮言写成，讨论逍遥、齐物、养生、无用之用，主张超越是非与生死的相对性。',
      review: '中国哲学中最具文学性与想象力的文本，「庖丁解牛」「庄周梦蝶」「濠梁之辩」几乎构成汉语思维的底层典故。它的哲学立场不是给出答案，而是瓦解问题本身，因此对现代人的焦虑有奇特的疗效。陈鼓应《庄子今注今译》是入门首选；内七篇与外杂篇的作者与思想差异需留意。',
      pros: ['寓言极具文学性', '思想解放性强', '对当代焦虑有疗愈作用'],
      cons: ['文本层累复杂', '消极解读风险'],
      tags: ['庄子', '道家', '寓言'],
      scores: [{
      src: '豆瓣',
      val: 9.3,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E5%BA%84%E5%AD%90'
    }, {
      src: 'Goodreads',
      val: 4.2,
      max: 5,
      url: 'https://www.goodreads.com/search?q=Zhuangzi'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E5%BA%84%E5%AD%90'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E5%BA%84%E5%AD%90'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/Zhuangzi'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=Zhuangzi'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=Zhuangzi'
    }, {
      kind: '古籍',
      label: '中国哲学书电子化计划',
      url: 'https://ctext.org/searchbooks.pl?if=gb&searchu=%E5%BA%84%E5%AD%90'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E5%BA%84%E5%AD%90'
    }],
      related: ['books/myth-of-sisyphus', 'books/tao-te-ching', 'books/zarathustra'],
      f: {
      field: ['哲学', '文学理论', '自我提升'],
      form: ['实体书'],
      language: ['中文']
    }
    },
  {
      id: 'chuanxi-lu',
      cat: 'books',
      title: '传习录',
      alt: 'Instructions for Practical Living',
      year: 1518,
      region: '中国',
      status: '已出版',
      image: null,
      summary: '王阳明与门人问答、书信的结集，阐发「心即理」「知行合一」「致良知」的心学体系。',
      review: '把儒学从读书穷理拉回到当下行动的书。「知行合一」不是「理论联系实际」，而是说知而不行即未知——这一命题对现代人普遍的「懂很多道理却做不到」有直接疗效。文本为语录与书信，逻辑跳跃，需注释辅助（陈荣捷、邓艾民注本较可靠）。日本明治维新与近代中国改革者都从中取力。',
      pros: ['强调实践', '对治空谈', '影响东亚近代'],
      cons: ['语录体跳跃', '易被误读为鸡汤'],
      tags: ['王阳明', '心学', '知行合一'],
      scores: [{
      src: '豆瓣',
      val: 9.0,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E4%BC%A0%E4%B9%A0%E5%BD%95'
    }, {
      src: 'Goodreads',
      val: 4.1,
      max: 5,
      url: 'https://www.goodreads.com/search?q=Instructions%20for%20Practical%20Living'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E4%BC%A0%E4%B9%A0%E5%BD%95'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E4%BC%A0%E4%B9%A0%E5%BD%95'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/Instructions%20for%20Practical%20Living'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=Instructions%20for%20Practical%20Living'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=Instructions%20for%20Practical%20Living'
    }, {
      kind: '古籍',
      label: '中国哲学书电子化计划',
      url: 'https://ctext.org/searchbooks.pl?if=gb&searchu=%E4%BC%A0%E4%B9%A0%E5%BD%95'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E4%BC%A0%E4%B9%A0%E5%BD%95'
    }],
      related: ['books/tao-te-ching', 'books/chinese-philosophy-short-history', 'books/zhuangzi'],
      f: {
      field: ['哲学', '自我提升', '中国史'],
      form: ['实体书', '电子书'],
      language: ['中文']
    }
    },
  {
      id: 'zarathustra',
      cat: 'books',
      title: '查拉图斯特拉如是说',
      alt: 'Thus Spoke Zarathustra',
      year: 1883,
      region: '德国',
      status: '已出版',
      image: null,
      summary: '以先知下山布道的寓言体写「上帝之死」、超人、永恒轮回与价值的重估。',
      review: '哲学与诗的混合物，因此也是最容易被误读的哲学书之一。尼采故意不给论证，而是用意象逼迫读者重估自己的价值坐标；「超人」被后来的政治挪用完全扭曲了其原意（自我超越而非种族优越）。中译本以钱春绮、黄明嘉为佳。建议先读一本尼采导论再进原典，否则易得其姿态而失其思想。',
      pros: ['语言极具冲击力', '思想密度高', '重估价值的启蒙'],
      cons: ['寓言体易被误读', '缺乏论证结构'],
      tags: ['尼采', '超人', '永恒轮回'],
      scores: [{
      src: '豆瓣',
      val: 9.1,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E6%9F%A5%E6%8B%89%E5%9B%BE%E6%96%AF%E7%89%B9%E6%8B%89%E5%A6%82%E6%98%AF%E8%AF%B4'
    }, {
      src: 'Goodreads',
      val: 4.06,
      max: 5,
      url: 'https://www.goodreads.com/search?q=Thus%20Spoke%20Zarathustra'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E6%9F%A5%E6%8B%89%E5%9B%BE%E6%96%AF%E7%89%B9%E6%8B%89%E5%A6%82%E6%98%AF%E8%AF%B4'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E6%9F%A5%E6%8B%89%E5%9B%BE%E6%96%AF%E7%89%B9%E6%8B%89%E5%A6%82%E6%98%AF%E8%AF%B4'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/Thus%20Spoke%20Zarathustra'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=Thus%20Spoke%20Zarathustra'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=Thus%20Spoke%20Zarathustra'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E6%9F%A5%E6%8B%89%E5%9B%BE%E6%96%AF%E7%89%B9%E6%8B%89%E5%A6%82%E6%98%AF%E8%AF%B4'
    }],
      related: ['books/zhuangzi', 'books/myth-of-sisyphus', 'books/tao-te-ching'],
      f: {
      field: ['哲学', '文学理论'],
      form: ['实体书', '电子书'],
      language: ['中文', '德文', '英文']
    }
    },
  {
      id: 'world-as-will',
      cat: 'books',
      title: '作为意志和表象的世界',
      alt: 'The World as Will and Representation',
      year: 1818,
      region: '德国',
      status: '已出版',
      image: null,
      summary: '主张世界的本质是盲目的意志，表象只是其对象化；艺术、道德同情与禁欲是摆脱意志奴役的三条路径。',
      review: '西方哲学中最文笔优美、也最悲观的体系之一。叔本华把康德的现象/物自体改造为表象/意志，并引入印度哲学资源，直接影响尼采、瓦格纳、弗洛伊德与托尔斯泰。对欲望机制的剖析（满足即无聊，不满足即痛苦）至今读来仍然锋利。韦启昌译本通行。体系后半的伦理与美学部分尤其耐读。',
      pros: ['文笔一流', '欲望分析锋利', '影响深远'],
      cons: ['悲观论调需辨别', '体系带独断成分'],
      tags: ['叔本华', '意志', '悲观主义'],
      scores: [{
      src: '豆瓣',
      val: 9.2,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E4%BD%9C%E4%B8%BA%E6%84%8F%E5%BF%97%E5%92%8C%E8%A1%A8%E8%B1%A1%E7%9A%84%E4%B8%96%E7%95%8C'
    }, {
      src: 'Goodreads',
      val: 4.1,
      max: 5,
      url: 'https://www.goodreads.com/search?q=The%20World%20as%20Will%20and%20Representation'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E4%BD%9C%E4%B8%BA%E6%84%8F%E5%BF%97%E5%92%8C%E8%A1%A8%E8%B1%A1%E7%9A%84%E4%B8%96%E7%95%8C'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E4%BD%9C%E4%B8%BA%E6%84%8F%E5%BF%97%E5%92%8C%E8%A1%A8%E8%B1%A1%E7%9A%84%E4%B8%96%E7%95%8C'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/The%20World%20as%20Will%20and%20Representation'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=The%20World%20as%20Will%20and%20Representation'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=The%20World%20as%20Will%20and%20Representation'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E4%BD%9C%E4%B8%BA%E6%84%8F%E5%BF%97%E5%92%8C%E8%A1%A8%E8%B1%A1%E7%9A%84%E4%B8%96%E7%95%8C'
    }],
      related: ['books/crime-punishment', 'books/nicomachean-ethics', 'books/escape-from-freedom'],
      f: {
      field: ['哲学', '心理'],
      form: ['实体书', '电子书'],
      language: ['中文', '德文', '英文']
    }
    },
  {
      id: 'being-and-time',
      cat: 'books',
      title: '存在与时间',
      alt: 'Being and Time',
      year: 1927,
      region: '德国',
      status: '已出版',
      image: 'assets/img/books/being-and-time.jpg',
      summary: '以「此在」的生存结构分析存在意义：在世存在、烦、畏、向死而在、本真与非本真。',
      review: '20 世纪最重要的哲学著作之一，也是出了名的难读——海德格尔自造术语（此在、上手、烦），并刻意拆解日常语言。它的影响远超哲学：萨特、阿伦特、诠释学、精神分析乃至建筑与文学批评都受其塑形。中文版陈嘉映、王庆节译本可靠。建议先读导论（如《海德格尔导论》）再啃原著，切勿从第一页硬顶。',
      pros: ['重塑现代哲学语言', '对死亡与时间的分析深刻', '跨学科影响大'],
      cons: ['极难读', '术语自造', '作者政治污点'],
      tags: ['海德格尔', '此在', '现象学'],
      scores: [{
      src: '豆瓣',
      val: 8.9,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E5%AD%98%E5%9C%A8%E4%B8%8E%E6%97%B6%E9%97%B4'
    }, {
      src: 'Goodreads',
      val: 3.98,
      max: 5,
      url: 'https://www.goodreads.com/search?q=Being%20and%20Time'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E5%AD%98%E5%9C%A8%E4%B8%8E%E6%97%B6%E9%97%B4'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E5%AD%98%E5%9C%A8%E4%B8%8E%E6%97%B6%E9%97%B4'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/Being%20and%20Time'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=Being%20and%20Time'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=Being%20and%20Time'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E5%AD%98%E5%9C%A8%E4%B8%8E%E6%97%B6%E9%97%B4'
    }],
      related: ['books/tao-te-ching', 'books/crime-punishment', 'books/chinese-philosophy-short-history'],
      f: {
      field: ['哲学'],
      form: ['实体书', '电子书'],
      language: ['中文', '德文', '英文']
    }
    },
  {
      id: 'myth-of-sisyphus',
      cat: 'books',
      title: '西西弗神话',
      alt: 'The Myth of Sisyphus',
      year: 1942,
      region: '法国',
      status: '已出版',
      image: null,
      summary: '从「唯一严肃的哲学问题是自杀」出发，讨论荒诞：世界无意义而人渴望意义，出路是反抗、自由与激情。',
      review: '荒诞哲学的最佳入口，篇幅短、文字漂亮，比《存在与虚无》好读得多。加缪拒绝用宗教或历史目的论「跳过」荒诞，主张清醒地承担它——「应当想象西西弗是幸福的」。常被误引为励志格言，其实是严格的伦理立场：不逃避、不自欺、不寄望来世。与《局外人》同读效果最佳。',
      pros: ['切入问题锋利', '篇幅精炼', '文字优美'],
      cons: ['论证带文学性跳跃', '易被鸡汤化误读'],
      tags: ['加缪', '荒诞', '存在主义'],
      scores: [{
      src: '豆瓣',
      val: 9.0,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E8%A5%BF%E8%A5%BF%E5%BC%97%E7%A5%9E%E8%AF%9D'
    }, {
      src: 'Goodreads',
      val: 4.1,
      max: 5,
      url: 'https://www.goodreads.com/search?q=The%20Myth%20of%20Sisyphus'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E8%A5%BF%E8%A5%BF%E5%BC%97%E7%A5%9E%E8%AF%9D'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E8%A5%BF%E8%A5%BF%E5%BC%97%E7%A5%9E%E8%AF%9D'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/The%20Myth%20of%20Sisyphus'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=The%20Myth%20of%20Sisyphus'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=The%20Myth%20of%20Sisyphus'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E8%A5%BF%E8%A5%BF%E5%BC%97%E7%A5%9E%E8%AF%9D'
    }],
      related: ['books/zhuangzi', 'books/tao-te-ching', 'books/zarathustra'],
      f: {
      field: ['哲学', '自我提升', '文学理论'],
      form: ['实体书', '电子书'],
      language: ['中文', '法文', '英文']
    }
    },
  {
      id: 'philosophical-investigations',
      cat: 'books',
      title: '哲学研究',
      alt: 'Philosophical Investigations',
      year: 1953,
      region: '奥地利',
      status: '已出版',
      image: null,
      summary: '以数百节短论推翻自己前期的语言图像论，提出「意义即用法」「语言游戏」「家族相似」与私人语言论证。',
      review: '后期维特根斯坦的治疗式哲学：哲学的困惑不是有待解答的问题，而是「语言度假去了」造成的迷失，需要被解开。写作方式是短节、反问、对话，几乎没有系统论证，因此极易读错。陈嘉映译本可靠。对语言哲学、心灵哲学、人类学与认知科学的「实践转向」都有直接影响。',
      pros: ['颠覆语言本质论', '对治哲学困惑', '影响跨学科'],
      cons: ['无系统论证', '极易误读'],
      tags: ['维特根斯坦', '语言游戏', '分析哲学'],
      scores: [{
      src: '豆瓣',
      val: 9.2,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E5%93%B2%E5%AD%A6%E7%A0%94%E7%A9%B6'
    }, {
      src: 'Goodreads',
      val: 4.25,
      max: 5,
      url: 'https://www.goodreads.com/search?q=Philosophical%20Investigations'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E5%93%B2%E5%AD%A6%E7%A0%94%E7%A9%B6'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E5%93%B2%E5%AD%A6%E7%A0%94%E7%A9%B6'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/Philosophical%20Investigations'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=Philosophical%20Investigations'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=Philosophical%20Investigations'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E5%93%B2%E5%AD%A6%E7%A0%94%E7%A9%B6'
    }],
      related: ['books/language-instinct', 'books/ci-hai', 'books/tao-te-ching'],
      f: {
      field: ['哲学', '语言', '认知科学'],
      form: ['实体书', '电子书'],
      language: ['中文', '德文', '英文']
    }
    },
  {
      id: 'ethics-spinoza',
      cat: 'books',
      title: '伦理学（依几何学方法证明）',
      alt: 'Ethics, Demonstrated in Geometrical Order',
      year: 1677,
      region: '荷兰',
      status: '已出版',
      image: 'assets/img/books/ethics-spinoza_it.jpg',
      summary: '以定义、公理、命题、证明的几何学形式，论述神即自然、情感的产生与克服、以及理智之爱带来的自由。',
      review: '形式最奇特、结论最激进的哲学书之一：用证明几何定理的方式论证泛神论与情感理论。斯宾诺莎把「神」等同于自然的必然秩序，把善恶还原为力量的增减，因此被视为启蒙理性主义与世俗伦理的先声。贺麟译本通行。数学式体例令多数读者望而却步，可先读导读再看第三部分（情感论）。',
      pros: ['形式独特', '情感理论深刻', '世俗伦理先声'],
      cons: ['体例艰涩', '术语需专门解释'],
      tags: ['斯宾诺莎', '泛神论', '情感'],
      scores: [{
      src: '豆瓣',
      val: 9.1,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E4%BC%A6%E7%90%86%E5%AD%A6%EF%BC%88%E4%BE%9D%E5%87%A0%E4%BD%95%E5%AD%A6%E6%96%B9%E6%B3%95%E8%AF%81%E6%98%8E%EF%BC%89'
    }, {
      src: 'Goodreads',
      val: 4.0,
      max: 5,
      url: 'https://www.goodreads.com/search?q=Ethics%2C%20Demonstrated%20in%20Geometrical%20Order'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E4%BC%A6%E7%90%86%E5%AD%A6%EF%BC%88%E4%BE%9D%E5%87%A0%E4%BD%95%E5%AD%A6%E6%96%B9%E6%B3%95%E8%AF%81%E6%98%8E%EF%BC%89'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E4%BC%A6%E7%90%86%E5%AD%A6%EF%BC%88%E4%BE%9D%E5%87%A0%E4%BD%95%E5%AD%A6%E6%96%B9%E6%B3%95%E8%AF%81%E6%98%8E%EF%BC%89'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/Ethics%2C%20Demonstrated%20in%20Geometrical%20Order'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=Ethics%2C%20Demonstrated%20in%20Geometrical%20Order'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=Ethics%2C%20Demonstrated%20in%20Geometrical%20Order'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E4%BC%A6%E7%90%86%E5%AD%A6%EF%BC%88%E4%BE%9D%E5%87%A0%E4%BD%95%E5%AD%A6%E6%96%B9%E6%B3%95%E8%AF%81%E6%98%8E%EF%BC%89'
    }],
      related: ['books/mathematics-loss-of-certainty', 'books/concrete-mathematics', 'books/tao-te-ching'],
      f: {
      field: ['哲学', '数学'],
      form: ['实体书', '电子书'],
      language: ['中文', '拉丁文', '英文']
    }
    },
  {
      id: 'nicomachean-ethics',
      cat: 'books',
      title: '尼各马可伦理学',
      alt: 'Nicomachean Ethics',
      year: -340,
      region: '古希腊',
      status: '已出版',
      image: 'assets/img/books/nicomachean-ethics.jpg',
      summary: '讨论幸福（eudaimonia）、德性、中道、友爱、快乐与实践智慧，主张德性来自习惯养成而非知识灌输。',
      review: '西方美德伦理学的源头，也是当代「品格教育」「幸福研究」不断回返的文本。亚里士多德不谈抽象义务，而问「怎样的人生算活得好」，并给出可操作的答案：德性是两种极端之间的中道，靠反复实践形成。廖申白译注本可靠。相较于现代规范伦理学，它对具体处境的敏感度至今仍有优势。',
      pros: ['面向生活的伦理学', '中道说可操作', '影响持续两千年'],
      cons: ['文本有残缺与编排争议', '部分观点受时代限制'],
      tags: ['亚里士多德', '美德伦理', '中道'],
      scores: [{
      src: '豆瓣',
      val: 9.0,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E5%B0%BC%E5%90%84%E9%A9%AC%E5%8F%AF%E4%BC%A6%E7%90%86%E5%AD%A6'
    }, {
      src: 'Goodreads',
      val: 3.95,
      max: 5,
      url: 'https://www.goodreads.com/search?q=Nicomachean%20Ethics'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E5%B0%BC%E5%90%84%E9%A9%AC%E5%8F%AF%E4%BC%A6%E7%90%86%E5%AD%A6'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E5%B0%BC%E5%90%84%E9%A9%AC%E5%8F%AF%E4%BC%A6%E7%90%86%E5%AD%A6'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/Nicomachean%20Ethics'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=Nicomachean%20Ethics'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=Nicomachean%20Ethics'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E5%B0%BC%E5%90%84%E9%A9%AC%E5%8F%AF%E4%BC%A6%E7%90%86%E5%AD%A6'
    }],
      related: ['books/art-of-loving', 'books/tao-te-ching', 'books/crime-punishment'],
      f: {
      field: ['哲学', '自我提升', '心理'],
      form: ['实体书', '电子书'],
      language: ['中文', '古希腊文', '英文']
    }
    },
  {
      id: 'confessions-augustine',
      cat: 'books',
      title: '忏悔录',
      alt: 'Confessiones',
      year: 397,
      region: '古罗马',
      status: '已出版',
      image: null,
      summary: '以向神倾诉的形式回顾自身经历，并深入探讨记忆、时间、意志与恶的问题，末卷转入《创世记》释义。',
      review: '西方第一部真正意义上的自传，也是内在性写作的开端。奥古斯丁对时间的分析（过去已不在、未来尚未在、只有心灵的「延展」）至今仍是哲学课堂的标准文本；对意志分裂（「我愿意，却不为」）的描写比任何现代心理学都精准。周士良译本文笔古雅。可与卢梭《忏悔录》对照，两种自我书写的分野一目了然。',
      pros: ['内在性写作开创', '时间论深刻', '文学价值高'],
      cons: ['宗教前提需接受', '后半转入经义解释'],
      tags: ['奥古斯丁', '自传', '时间'],
      scores: [{
      src: '豆瓣',
      val: 8.9,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E5%BF%8F%E6%82%94%E5%BD%95'
    }, {
      src: 'Goodreads',
      val: 3.95,
      max: 5,
      url: 'https://www.goodreads.com/search?q=Confessiones'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E5%BF%8F%E6%82%94%E5%BD%95'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E5%BF%8F%E6%82%94%E5%BD%95'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/Confessiones'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=Confessiones'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=Confessiones'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E5%BF%8F%E6%82%94%E5%BD%95'
    }],
      related: ['books/open-society', 'books/study-of-history-toynbee', 'books/second-sex'],
      f: {
      field: ['哲学', '传记', '历史'],
      form: ['实体书', '电子书'],
      language: ['中文', '拉丁文', '英文']
    }
    },
  {
      id: 'structure-scientific-revolutions',
      cat: 'books',
      title: '科学革命的结构',
      alt: 'The Structure of Scientific Revolutions',
      year: 1962,
      region: '美国',
      status: '已出版',
      image: 'assets/img/books/structure-scientific-revolutions.jpg',
      summary: '提出常规科学、范式、反常与科学革命的模型，主张科学进步不是累积而是范式的整体转换。',
      review: '20 世纪影响最大的科学哲学著作，「范式转移」已进入日常语汇。库恩用科学史案例（哥白尼、拉瓦锡、爱因斯坦）说明科学家并非在真空中比较证据，而是在共同体的信念框架内工作。批评者指出「范式」一词被用得过于宽松、相对主义倾向过强，但它对「科学如何实际运作」的刻画仍是绕不开的起点。篇幅短，可一周读完。',
      pros: ['范式概念影响巨大', '史论结合', '篇幅精炼'],
      cons: ['概念界定模糊', '被指责走向相对主义'],
      tags: ['库恩', '范式', '科学哲学'],
      scores: [{
      src: '豆瓣',
      val: 8.8,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E7%A7%91%E5%AD%A6%E9%9D%A9%E5%91%BD%E7%9A%84%E7%BB%93%E6%9E%84'
    }, {
      src: 'Goodreads',
      val: 4.0,
      max: 5,
      url: 'https://www.goodreads.com/search?q=The%20Structure%20of%20Scientific%20Revolutions'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E7%A7%91%E5%AD%A6%E9%9D%A9%E5%91%BD%E7%9A%84%E7%BB%93%E6%9E%84'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E7%A7%91%E5%AD%A6%E9%9D%A9%E5%91%BD%E7%9A%84%E7%BB%93%E6%9E%84'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/The%20Structure%20of%20Scientific%20Revolutions'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=The%20Structure%20of%20Scientific%20Revolutions'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=The%20Structure%20of%20Scientific%20Revolutions'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E7%A7%91%E5%AD%A6%E9%9D%A9%E5%91%BD%E7%9A%84%E7%BB%93%E6%9E%84'
    }],
      related: ['books/god-dice-physics-history', 'books/emperor-of-all-maladies', 'books/black-holes-and-time-warps'],
      f: {
      field: ['哲学', '科学史', '科普'],
      form: ['实体书', '电子书'],
      language: ['中文', '英文']
    }
    },
  {
      id: 'open-society',
      cat: 'books',
      title: '开放社会及其敌人（全两卷）',
      alt: 'The Open Society and Its Enemies',
      year: 1945,
      region: '奥地利',
      status: '已出版',
      image: 'assets/img/books/open-society_it.jpg',
      summary: '批判柏拉图、黑格尔与马克思的历史决定论，主张以「零星社会工程」和可纠错的民主制度替代整体乌托邦改造。',
      review: '写于二战末期的自由主义政治哲学重镇。波普尔的核心论证是：历史没有可供预测的必然规律，任何声称掌握历史方向的理论都会为暴力改造社会开脱；因此制度设计的目标应是「让坏的统治者能被和平撤换」。对柏拉图与黑格尔的解读被专业学者批评为漫画化，但其对乌托邦工程的警惕在20世纪的实践中得到反复验证。',
      pros: ['反历史决定论论证有力', '制度设计思路清晰', '现实关怀强'],
      cons: ['对古典哲学家解读简化', '篇幅长、重复多'],
      tags: ['波普尔', '开放社会', '历史决定论批判'],
      scores: [{
      src: '豆瓣',
      val: 9.2,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E5%BC%80%E6%94%BE%E7%A4%BE%E4%BC%9A%E5%8F%8A%E5%85%B6%E6%95%8C%E4%BA%BA%EF%BC%88%E5%85%A8%E4%B8%A4%E5%8D%B7%EF%BC%89'
    }, {
      src: 'Goodreads',
      val: 4.2,
      max: 5,
      url: 'https://www.goodreads.com/search?q=The%20Open%20Society%20and%20Its%20Enemies'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E5%BC%80%E6%94%BE%E7%A4%BE%E4%BC%9A%E5%8F%8A%E5%85%B6%E6%95%8C%E4%BA%BA%EF%BC%88%E5%85%A8%E4%B8%A4%E5%8D%B7%EF%BC%89'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E5%BC%80%E6%94%BE%E7%A4%BE%E4%BC%9A%E5%8F%8A%E5%85%B6%E6%95%8C%E4%BA%BA%EF%BC%88%E5%85%A8%E4%B8%A4%E5%8D%B7%EF%BC%89'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/The%20Open%20Society%20and%20Its%20Enemies'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=The%20Open%20Society%20and%20Its%20Enemies'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=The%20Open%20Society%20and%20Its%20Enemies'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E5%BC%80%E6%94%BE%E7%A4%BE%E4%BC%9A%E5%8F%8A%E5%85%B6%E6%95%8C%E4%BA%BA%EF%BC%88%E5%85%A8%E4%B8%A4%E5%8D%B7%EF%BC%89'
    }],
      related: ['books/communist-manifesto', 'books/zizhi-tongjian', 'books/gulag-archipelago'],
      f: {
      field: ['哲学', '政治', '历史'],
      form: ['实体书', '电子书'],
      language: ['中文', '英文']
    }
    },
  {
      id: 'leviathan',
      cat: 'books',
      title: '利维坦',
      alt: 'Leviathan',
      year: 1651,
      region: '英国',
      status: '已出版',
      image: null,
      summary: '从人性与自我保存出发，论证人为摆脱「一切人对一切人的战争」而订立契约，把权力交给主权者。',
      review: '现代政治哲学的起点：把国家的合法性建立在个体同意而非神授或自然等级之上。霍布斯的推理冷峻彻底，「孤独、贫困、肮脏、野蛮而短暂」的自然状态描写至今仍是政治学课堂的开场白。他被同时代人斥为无神论者，又被后世自由主义者引为先驱（因为契约论内含对个体的尊重）。黎思复、黎廷弼译本通行。',
      pros: ['契约论奠基', '推理彻底', '文本影响巨大'],
      cons: ['绝对主权主张难被接受', '人性假设过于单一'],
      tags: ['霍布斯', '社会契约', '主权'],
      scores: [{
      src: '豆瓣',
      val: 8.7,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E5%88%A9%E7%BB%B4%E5%9D%A6'
    }, {
      src: 'Goodreads',
      val: 3.7,
      max: 5,
      url: 'https://www.goodreads.com/search?q=Leviathan'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E5%88%A9%E7%BB%B4%E5%9D%A6'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E5%88%A9%E7%BB%B4%E5%9D%A6'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/Leviathan'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=Leviathan'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=Leviathan'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E5%88%A9%E7%BB%B4%E5%9D%A6'
    }],
      related: ['books/du-tongjian-lun', 'books/open-society', 'books/capital-marx'],
      f: {
      field: ['政治', '哲学'],
      form: ['实体书', '电子书'],
      language: ['中文', '英文', '拉丁文']
    }
    },
  {
      id: 'social-contract',
      cat: 'books',
      title: '社会契约论',
      alt: 'The Social Contract',
      year: 1762,
      region: '法国',
      status: '已出版',
      image: null,
      summary: '提出「人生而自由，却无往不在枷锁之中」，主张合法政治秩序来自公意，主权不可转让不可分割。',
      review: '法国大革命与美国革命共同的思想资源。「公意」概念既激动人心也危险：它把合法性建立在集体意志上，被批评者（如伯林、塔尔蒙）指为极权民主的理论温床。文本本身不长、段落漂亮，但概念含混处极多，需配合注释与二手研究。何兆武译本通行，可与《论人类不平等的起源》连读。',
      pros: ['公意思想影响深远', '文字极具感染力', '篇幅不长'],
      cons: ['概念含混', '被极权理论挪用'],
      tags: ['卢梭', '公意', '启蒙'],
      scores: [{
      src: '豆瓣',
      val: 8.7,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E7%A4%BE%E4%BC%9A%E5%A5%91%E7%BA%A6%E8%AE%BA'
    }, {
      src: 'Goodreads',
      val: 3.75,
      max: 5,
      url: 'https://www.goodreads.com/search?q=The%20Social%20Contract'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E7%A4%BE%E4%BC%9A%E5%A5%91%E7%BA%A6%E8%AE%BA'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E7%A4%BE%E4%BC%9A%E5%A5%91%E7%BA%A6%E8%AE%BA'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/The%20Social%20Contract'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=The%20Social%20Contract'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=The%20Social%20Contract'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E7%A4%BE%E4%BC%9A%E5%A5%91%E7%BA%A6%E8%AE%BA'
    }],
      related: ['books/du-tongjian-lun', 'books/open-society', 'books/capital-marx'],
      f: {
      field: ['政治', '哲学'],
      form: ['实体书', '电子书'],
      language: ['中文', '法文', '英文']
    }
    },
  {
      id: 'spirit-of-laws',
      cat: 'books',
      title: '论法的精神',
      alt: 'The Spirit of the Laws',
      year: 1748,
      region: '法国',
      status: '已出版',
      image: null,
      summary: '考察法律与政体性质、气候、地理、贸易、货币、宗教与风俗的关系，提出立法、行政、司法三权分立。',
      review: '政治社会学的先驱：孟德斯鸠不满足于规范主张，而是追问制度为何在不同社会呈现不同形态，因此大量篇幅讨论地理、气候与商业的影响（其中气候论今天已站不住）。真正的持久贡献是三权分立与政体类型学，直接写入美国宪法。张雁深译本通行。全书体例松散，可选读关键卷次。',
      pros: ['三权分立理论来源', '制度比较视野开阔', '影响宪政实践'],
      cons: ['气候地理论已过时', '结构松散'],
      tags: ['孟德斯鸠', '三权分立', '政体类型'],
      scores: [{
      src: '豆瓣',
      val: 8.8,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E8%AE%BA%E6%B3%95%E7%9A%84%E7%B2%BE%E7%A5%9E'
    }, {
      src: 'Goodreads',
      val: 3.9,
      max: 5,
      url: 'https://www.goodreads.com/search?q=The%20Spirit%20of%20the%20Laws'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E8%AE%BA%E6%B3%95%E7%9A%84%E7%B2%BE%E7%A5%9E'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E8%AE%BA%E6%B3%95%E7%9A%84%E7%B2%BE%E7%A5%9E'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/The%20Spirit%20of%20the%20Laws'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=The%20Spirit%20of%20the%20Laws'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=The%20Spirit%20of%20the%20Laws'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E8%AE%BA%E6%B3%95%E7%9A%84%E7%B2%BE%E7%A5%9E'
    }],
      related: ['books/federalist-papers', 'books/zizhi-tongjian', 'books/gulag-archipelago'],
      f: {
      field: ['政治', '法律', '历史'],
      form: ['实体书', '电子书'],
      language: ['中文', '法文', '英文']
    }
    },
  {
      id: 'democracy-in-america',
      cat: 'books',
      title: '论美国的民主',
      alt: 'Democracy in America',
      year: 1835,
      region: '法国',
      status: '已出版',
      image: null,
      summary: '考察美国民主的乡镇自治、结社、司法、宗教与民情，并预警「多数暴政」与温和的新型专制。',
      review: '既是政治学经典，也是最好的美国社会观察之一。托克维尔的关键洞见是：民主的存活靠的不是宪法条文，而是民情与结社习惯；平等推进的同时会带来对个人自由的新型威胁（人们甘愿被温和地监护）。董果良译本通行。上卷偏制度、下卷偏社会心理，下卷更耐读也更容易被当代读者共鸣。',
      pros: ['民情视角独到', '对平等与自由的张力分析深刻', '预言性强'],
      cons: ['对美国的具体描述有时代局限', '篇幅长'],
      tags: ['托克维尔', '多数暴政', '结社'],
      scores: [{
      src: '豆瓣',
      val: 9.1,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E8%AE%BA%E7%BE%8E%E5%9B%BD%E7%9A%84%E6%B0%91%E4%B8%BB'
    }, {
      src: 'Goodreads',
      val: 4.1,
      max: 5,
      url: 'https://www.goodreads.com/search?q=Democracy%20in%20America'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E8%AE%BA%E7%BE%8E%E5%9B%BD%E7%9A%84%E6%B0%91%E4%B8%BB'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E8%AE%BA%E7%BE%8E%E5%9B%BD%E7%9A%84%E6%B0%91%E4%B8%BB'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/Democracy%20in%20America'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=Democracy%20in%20America'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=Democracy%20in%20America'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E8%AE%BA%E7%BE%8E%E5%9B%BD%E7%9A%84%E6%B0%91%E4%B8%BB'
    }],
      related: ['books/origins-totalitarianism', 'books/social-origins-dictatorship-democracy', 'books/zizhi-tongjian'],
      f: {
      field: ['政治', '社会学', '历史'],
      form: ['实体书', '电子书'],
      language: ['中文', '法文', '英文']
    }
    },
  {
      id: 'federalist-papers',
      cat: 'books',
      title: '联邦党人文集',
      alt: 'The Federalist Papers',
      year: 1788,
      region: '美国',
      status: '已出版',
      image: null,
      summary: '85篇报刊政论，为批准美国宪法辩护，系统阐述分权制衡、联邦结构、司法审查与派系治理。',
      review: '理解宪政工程学的最佳一手文本，尤其是麦迪逊第10篇（如何在大共和国中控制派系危害）与第51篇（「野心必须用野心来对抗」）。它不是抽象理论，而是具体的说服性论证，因此能看清制度设计者真实的顾虑与权衡。程逢如等译本通行。部分篇目重复冗长，可选择重点篇目精读。',
      pros: ['制度设计一手材料', '第10、51篇极精辟', '论证具体'],
      cons: ['部分篇目冗长重复', '立场带宣传色彩'],
      tags: ['麦迪逊', '汉密尔顿', '宪政'],
      scores: [{
      src: '豆瓣',
      val: 8.9,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E8%81%94%E9%82%A6%E5%85%9A%E4%BA%BA%E6%96%87%E9%9B%86'
    }, {
      src: 'Goodreads',
      val: 4.05,
      max: 5,
      url: 'https://www.goodreads.com/search?q=The%20Federalist%20Papers'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E8%81%94%E9%82%A6%E5%85%9A%E4%BA%BA%E6%96%87%E9%9B%86'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E8%81%94%E9%82%A6%E5%85%9A%E4%BA%BA%E6%96%87%E9%9B%86'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/The%20Federalist%20Papers'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=The%20Federalist%20Papers'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=The%20Federalist%20Papers'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E8%81%94%E9%82%A6%E5%85%9A%E4%BA%BA%E6%96%87%E9%9B%86'
    }],
      related: ['books/spirit-of-laws', 'books/zizhi-tongjian', 'books/gulag-archipelago'],
      f: {
      field: ['政治', '法律', '历史'],
      form: ['实体书', '电子书'],
      language: ['中文', '英文']
    }
    },
  {
      id: 'origins-totalitarianism',
      cat: 'books',
      title: '极权主义的起源',
      alt: 'The Origins of Totalitarianism',
      year: 1951,
      region: '德国',
      status: '已出版',
      image: null,
      summary: '从反犹主义与帝国主义两股线索追溯纳粹与斯大林体制的生成，分析群众、意识形态、恐怖与集中营。',
      review: '20 世纪政治思想最重要著作之一。阿伦特的核心洞见是：极权主义不是暴政的加强版，而是一种全新政体——它以意识形态逻辑取代现实，以恐怖瓦解人的自发性，把人变为「多余者」。对「孤独的大众」如何被动员的分析，在社交媒体时代读来尤其发凉。结构松散、材料繁复，但第三部分值得反复读。',
      pros: ['政体类型学开创', '对群众心理分析深刻', '当代启示性强'],
      cons: ['结构松散', '对苏联材料掌握有限'],
      tags: ['阿伦特', '极权主义', '意识形态'],
      scores: [{
      src: '豆瓣',
      val: 9.1,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E6%9E%81%E6%9D%83%E4%B8%BB%E4%B9%89%E7%9A%84%E8%B5%B7%E6%BA%90'
    }, {
      src: 'Goodreads',
      val: 4.25,
      max: 5,
      url: 'https://www.goodreads.com/search?q=The%20Origins%20of%20Totalitarianism'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E6%9E%81%E6%9D%83%E4%B8%BB%E4%B9%89%E7%9A%84%E8%B5%B7%E6%BA%90'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E6%9E%81%E6%9D%83%E4%B8%BB%E4%B9%89%E7%9A%84%E8%B5%B7%E6%BA%90'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/The%20Origins%20of%20Totalitarianism'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=The%20Origins%20of%20Totalitarianism'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=The%20Origins%20of%20Totalitarianism'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E6%9E%81%E6%9D%83%E4%B8%BB%E4%B9%89%E7%9A%84%E8%B5%B7%E6%BA%90'
    }],
      related: ['books/democracy-in-america', 'books/social-origins-dictatorship-democracy', 'books/zizhi-tongjian'],
      f: {
      field: ['政治', '历史', '社会学'],
      form: ['实体书', '电子书'],
      language: ['中文', '德文', '英文']
    }
    },
  {
      id: 'political-order-changing-societies',
      cat: 'books',
      title: '变化社会中的政治秩序',
      alt: 'Political Order in Changing Societies',
      year: 1968,
      region: '美国',
      status: '已出版',
      image: null,
      summary: '论证政治衰败源于政治参与扩大快于政治制度化，提出「秩序优先」与政党作为制度化载体的分析框架。',
      review: '发展政治学的经典命题：现代化不自动带来稳定，反而常常带来失序，因为动员速度超过制度吸纳能力。这一分析对理解20世纪后半叶大量新兴国家的政局极具解释力，也是亨廷顿后来《文明的冲突》的方法论前身。观点带有明显的「秩序优先」价值取向，批评者认为它为国家威权背书，需带着批判阅读。',
      pros: ['制度化命题解释力强', '案例覆盖广', '框架清晰'],
      cons: ['价值取向偏保守', '对民主化预期悲观'],
      tags: ['亨廷顿', '政治制度化', '发展政治学'],
      scores: [{
      src: '豆瓣',
      val: 9.2,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E5%8F%98%E5%8C%96%E7%A4%BE%E4%BC%9A%E4%B8%AD%E7%9A%84%E6%94%BF%E6%B2%BB%E7%A7%A9%E5%BA%8F'
    }, {
      src: 'Goodreads',
      val: 4.1,
      max: 5,
      url: 'https://www.goodreads.com/search?q=Political%20Order%20in%20Changing%20Societies'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E5%8F%98%E5%8C%96%E7%A4%BE%E4%BC%9A%E4%B8%AD%E7%9A%84%E6%94%BF%E6%B2%BB%E7%A7%A9%E5%BA%8F'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E5%8F%98%E5%8C%96%E7%A4%BE%E4%BC%9A%E4%B8%AD%E7%9A%84%E6%94%BF%E6%B2%BB%E7%A7%A9%E5%BA%8F'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/Political%20Order%20in%20Changing%20Societies'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=Political%20Order%20in%20Changing%20Societies'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=Political%20Order%20in%20Changing%20Societies'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E5%8F%98%E5%8C%96%E7%A4%BE%E4%BC%9A%E4%B8%AD%E7%9A%84%E6%94%BF%E6%B2%BB%E7%A7%A9%E5%BA%8F'
    }],
      related: ['books/poverty-and-famines', 'books/daguodacheng', 'books/jiaohun'],
      f: {
      field: ['政治', '社会学', '经济'],
      form: ['实体书', '电子书'],
      language: ['中文', '英文']
    }
    },
  {
      id: 'social-origins-dictatorship-democracy',
      cat: 'books',
      title: '专制与民主的社会起源',
      alt: 'Social Origins of Dictatorship and Democracy',
      year: 1966,
      region: '美国',
      status: '已出版',
      image: null,
      summary: '比较英法美中德日六国走向资产阶级民主、法西斯主义或共产主义革命的三条道路，强调农民问题与地主阶级角色。',
      review: '历史社会学的标杆之作，「没有资产阶级就没有民主」与对农民革命作用的强调至今被反复引用。摩尔用六国比较说明：现代化的政治后果取决于农业商品化程度、地主与农民的权力关系、以及国家与资产阶级的联盟方式。材料密集、行文厚重，但比较方法的示范价值极高。',
      pros: ['比较历史社会学典范', '农民视角独特', '命题影响深远'],
      cons: ['材料密集难读', '六国样本代表性受限'],
      tags: ['摩尔', '比较历史', '农民革命'],
      scores: [{
      src: '豆瓣',
      val: 9.0,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E4%B8%93%E5%88%B6%E4%B8%8E%E6%B0%91%E4%B8%BB%E7%9A%84%E7%A4%BE%E4%BC%9A%E8%B5%B7%E6%BA%90'
    }, {
      src: 'Goodreads',
      val: 4.0,
      max: 5,
      url: 'https://www.goodreads.com/search?q=Social%20Origins%20of%20Dictatorship%20and%20Democracy'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E4%B8%93%E5%88%B6%E4%B8%8E%E6%B0%91%E4%B8%BB%E7%9A%84%E7%A4%BE%E4%BC%9A%E8%B5%B7%E6%BA%90'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E4%B8%93%E5%88%B6%E4%B8%8E%E6%B0%91%E4%B8%BB%E7%9A%84%E7%A4%BE%E4%BC%9A%E8%B5%B7%E6%BA%90'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/Social%20Origins%20of%20Dictatorship%20and%20Democracy'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=Social%20Origins%20of%20Dictatorship%20and%20Democracy'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=Social%20Origins%20of%20Dictatorship%20and%20Democracy'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E4%B8%93%E5%88%B6%E4%B8%8E%E6%B0%91%E4%B8%BB%E7%9A%84%E7%A4%BE%E4%BC%9A%E8%B5%B7%E6%BA%90'
    }],
      related: ['books/democracy-in-america', 'books/origins-totalitarianism', 'books/zizhi-tongjian'],
      f: {
      field: ['政治', '历史', '社会学'],
      form: ['实体书', '电子书'],
      language: ['中文', '英文']
    }
    },
  {
      id: 'clash-of-civilizations',
      cat: 'books',
      title: '文明的冲突与世界秩序的重建',
      alt: 'The Clash of Civilizations and the Remaking of World Order',
      year: 1996,
      region: '美国',
      status: '已出版',
      image: null,
      summary: '主张冷战后国际冲突的主线将从意识形态转向文明断层线，划分八大文明并预测冲突与结盟格局。',
      review: '争议最大也最常被引用的国际关系论著。亨廷顿把文化认同提升为解释变量，在9·11之后被大量援引，但批评同样有力：文明内部差异远大于文明之间、认同是流动可塑的、把冲突本质化会为冲突自我实现提供理由。作为「必须了解的对手观点」值得一读，但务必配合批判性文献（如萨义德、阿马蒂亚·森）。',
      pros: ['命题极具传播力', '文化变量引入及时', '预测部分可检验'],
      cons: ['文明概念本质化', '内部差异被抹平', '自我实现风险'],
      tags: ['亨廷顿', '文明断层线', '国际关系'],
      scores: [{
      src: '豆瓣',
      val: 8.4,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E6%96%87%E6%98%8E%E7%9A%84%E5%86%B2%E7%AA%81%E4%B8%8E%E4%B8%96%E7%95%8C%E7%A7%A9%E5%BA%8F%E7%9A%84%E9%87%8D%E5%BB%BA'
    }, {
      src: 'Goodreads',
      val: 3.95,
      max: 5,
      url: 'https://www.goodreads.com/search?q=The%20Clash%20of%20Civilizations%20and%20the%20Remaking%20of%20World%20Order'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E6%96%87%E6%98%8E%E7%9A%84%E5%86%B2%E7%AA%81%E4%B8%8E%E4%B8%96%E7%95%8C%E7%A7%A9%E5%BA%8F%E7%9A%84%E9%87%8D%E5%BB%BA'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E6%96%87%E6%98%8E%E7%9A%84%E5%86%B2%E7%AA%81%E4%B8%8E%E4%B8%96%E7%95%8C%E7%A7%A9%E5%BA%8F%E7%9A%84%E9%87%8D%E5%BB%BA'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/The%20Clash%20of%20Civilizations%20and%20the%20Remaking%20of%20World%20Order'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=The%20Clash%20of%20Civilizations%20and%20the%20Remaking%20of%20World%20Order'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=The%20Clash%20of%20Civilizations%20and%20the%20Remaking%20of%20World%20Order'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E6%96%87%E6%98%8E%E7%9A%84%E5%86%B2%E7%AA%81%E4%B8%8E%E4%B8%96%E7%95%8C%E7%A7%A9%E5%BA%8F%E7%9A%84%E9%87%8D%E5%BB%BA'
    }],
      related: ['books/secondhand-time', 'books/tianchao-bengkui', 'books/jiaohun'],
      f: {
      field: ['政治', '世界史', '社会学'],
      form: ['实体书', '电子书'],
      language: ['中文', '英文']
    }
    },
  {
      id: 'end-of-history',
      cat: 'books',
      title: '历史的终结及最后之人',
      alt: 'The End of History and the Last Man',
      year: 1992,
      region: '美国',
      status: '已出版',
      image: 'assets/img/books/end-of-history_it.jpg',
      summary: '主张自由民主与市场经济作为人类意识形态演化的终点，同时以黑格尔式「承认」概念讨论最后之人的虚无风险。',
      review: '书名被误读最严重的著作之一：福山讲的不是「事件停止」，而是「不再有能系统性替代自由民主的普世意识形态方案」，并在下半部严肃讨论胜利之后的精神空虚（末人问题）。30年后他本人也大幅修正立场（《政治秩序的起源》《身份》）。作为理解1990年代思想氛围与后续反弹的坐标，必读。',
      pros: ['论证比书名精细', '承认理论有深度', '可与其后期著作对照'],
      cons: ['核心命题被现实挑战', '对非西方经验重视不足'],
      tags: ['福山', '自由民主', '承认'],
      scores: [{
      src: '豆瓣',
      val: 8.4,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E5%8E%86%E5%8F%B2%E7%9A%84%E7%BB%88%E7%BB%93%E5%8F%8A%E6%9C%80%E5%90%8E%E4%B9%8B%E4%BA%BA'
    }, {
      src: 'Goodreads',
      val: 3.9,
      max: 5,
      url: 'https://www.goodreads.com/search?q=The%20End%20of%20History%20and%20the%20Last%20Man'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E5%8E%86%E5%8F%B2%E7%9A%84%E7%BB%88%E7%BB%93%E5%8F%8A%E6%9C%80%E5%90%8E%E4%B9%8B%E4%BA%BA'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E5%8E%86%E5%8F%B2%E7%9A%84%E7%BB%88%E7%BB%93%E5%8F%8A%E6%9C%80%E5%90%8E%E4%B9%8B%E4%BA%BA'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/The%20End%20of%20History%20and%20the%20Last%20Man'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=The%20End%20of%20History%20and%20the%20Last%20Man'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=The%20End%20of%20History%20and%20the%20Last%20Man'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E5%8E%86%E5%8F%B2%E7%9A%84%E7%BB%88%E7%BB%93%E5%8F%8A%E6%9C%80%E5%90%8E%E4%B9%8B%E4%BA%BA'
    }],
      related: ['books/capital-marx', 'books/road-to-serfdom', 'books/du-tongjian-lun'],
      f: {
      field: ['政治', '哲学', '经济'],
      form: ['实体书', '电子书'],
      language: ['中文', '英文']
    }
    },
  {
      id: 'deng-xiaoping-era',
      cat: 'books',
      title: '邓小平时代',
      alt: 'Deng Xiaoping and the Transformation of China',
      year: 2011,
      region: '美国',
      status: '已出版',
      image: null,
      summary: '以1978年后的改革开放为主线，结合档案、访谈与亲历观察，重建邓小平时期的决策过程。',
      review: '哈佛中国问题专家傅高义十年之作，材料来自大量内部访谈与公开档案，对重大决策（农村包产到户、特区、1989、南巡）的过程还原细致。作者立场总体同情改革路线，对争议事件的处理被批评为过于温和，读者需注意其叙事取向。作为了解当代中国政策逻辑形成的一手二手之间的重要参考。',
      pros: ['访谈与档案丰富', '决策过程还原细致', '可读性好'],
      cons: ['立场偏同情', '争议事件处理温和'],
      tags: ['傅高义', '改革开放', '当代中国'],
      scores: [{
      src: '豆瓣',
      val: 9.2,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E9%82%93%E5%B0%8F%E5%B9%B3%E6%97%B6%E4%BB%A3'
    }, {
      src: 'Goodreads',
      val: 4.1,
      max: 5,
      url: 'https://www.goodreads.com/search?q=Deng%20Xiaoping%20and%20the%20Transformation%20of%20China'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E9%82%93%E5%B0%8F%E5%B9%B3%E6%97%B6%E4%BB%A3'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E9%82%93%E5%B0%8F%E5%B9%B3%E6%97%B6%E4%BB%A3'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/Deng%20Xiaoping%20and%20the%20Transformation%20of%20China'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=Deng%20Xiaoping%20and%20the%20Transformation%20of%20China'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=Deng%20Xiaoping%20and%20the%20Transformation%20of%20China'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E9%82%93%E5%B0%8F%E5%B9%B3%E6%97%B6%E4%BB%A3'
    }],
      related: ['books/li-hongzhang', 'books/zizhi-tongjian', 'books/tianchao-bengkui'],
      f: {
      field: ['政治', '中国史', '传记'],
      form: ['实体书', '电子书'],
      language: ['中文', '英文']
    }
    },
  {
      id: 'diplomacy-kissinger',
      cat: 'books',
      title: '大外交',
      alt: 'Diplomacy',
      year: 1994,
      region: '美国',
      status: '已出版',
      image: null,
      summary: '从黎塞留、维也纳体系、俾斯麦到两次大战与冷战，梳理均势外交与理想主义外交两条传统，并反思美国外交的选择。',
      review: '兼具 实践者视角与史学素养的外交史通论。基辛格反复讨论同一组张力：均势（现实主义的秩序）与合法性（价值共识），并以此解释为何美国的理想主义外交既强大又危险。900余页但章节独立，可按兴趣选读。作者本人是争议极大的政治人物，读其书需与其行为记录并观。',
      pros: ['理论与史实结合', '章节可独立阅读', '实践者视角'],
      cons: ['作者立场需批判对待', '篇幅长'],
      tags: ['基辛格', '均势', '外交史'],
      scores: [{
      src: '豆瓣',
      val: 9.0,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E5%A4%A7%E5%A4%96%E4%BA%A4'
    }, {
      src: 'Goodreads',
      val: 4.2,
      max: 5,
      url: 'https://www.goodreads.com/search?q=Diplomacy'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E5%A4%A7%E5%A4%96%E4%BA%A4'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E5%A4%A7%E5%A4%96%E4%BA%A4'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/Diplomacy'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=Diplomacy'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=Diplomacy'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E5%A4%A7%E5%A4%96%E4%BA%A4'
    }],
      related: ['books/rise-fall-third-reich', 'books/peloponnesian-war', 'books/rise-of-the-west'],
      f: {
      field: ['政治', '世界史', '历史'],
      form: ['实体书', '电子书'],
      language: ['中文', '英文']
    }
    },
  {
      id: 'general-theory-keynes',
      cat: 'books',
      title: '就业、利息和货币通论',
      alt: 'The General Theory of Employment, Interest and Money',
      year: 1936,
      region: '美国',
      status: '已出版',
      image: null,
      summary: '以有效需求不足解释非自愿失业，主张在萧条期用财政与货币政策弥补私人需求缺口。',
      review: '宏观经济学的奠基文本，「凯恩斯革命」的原始文件。它的核心洞见是：储蓄与投资由不同动机决定，市场不会自动出清到充分就业，因此总量管理是政府的正当职能。文风晦涩、论证跳跃（凯恩斯自承写给经济学家同行而非大众），普通读者宜先读导读或教科书再回到原著。高鸿业译本通行。',
      pros: ['宏观经济学奠基', '有效需求概念影响巨大', '政策含义深远'],
      cons: ['行文晦涩', '面向专业读者'],
      tags: ['凯恩斯', '有效需求', '宏观经济学'],
      scores: [{
      src: '豆瓣',
      val: 8.6,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E5%B0%B1%E4%B8%9A%E3%80%81%E5%88%A9%E6%81%AF%E5%92%8C%E8%B4%A7%E5%B8%81%E9%80%9A%E8%AE%BA'
    }, {
      src: 'Goodreads',
      val: 3.75,
      max: 5,
      url: 'https://www.goodreads.com/search?q=The%20General%20Theory%20of%20Employment%2C%20Interest%20and%20Money'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E5%B0%B1%E4%B8%9A%E3%80%81%E5%88%A9%E6%81%AF%E5%92%8C%E8%B4%A7%E5%B8%81%E9%80%9A%E8%AE%BA'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E5%B0%B1%E4%B8%9A%E3%80%81%E5%88%A9%E6%81%AF%E5%92%8C%E8%B4%A7%E5%B8%81%E9%80%9A%E8%AE%BA'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/The%20General%20Theory%20of%20Employment%2C%20Interest%20and%20Money'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=The%20General%20Theory%20of%20Employment%2C%20Interest%20and%20Money'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=The%20General%20Theory%20of%20Employment%2C%20Interest%20and%20Money'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E5%B0%B1%E4%B8%9A%E3%80%81%E5%88%A9%E6%81%AF%E5%92%8C%E8%B4%A7%E5%B8%81%E9%80%9A%E8%AE%BA'
    }],
      related: ['books/political-order-changing-societies', 'books/capital-marx', 'books/zhishen-shinei'],
      f: {
      field: ['经济', '金融', '政治'],
      form: ['实体书', '电子书'],
      language: ['中文', '英文']
    }
    },
  {
      id: 'mankiw-principles',
      cat: 'books',
      title: '经济学原理（微观+宏观）',
      alt: 'Principles of Economics',
      year: 1997,
      region: '美国',
      status: '已出版',
      image: 'assets/img/books/mankiw-principles.png',
      summary: '以十大原理组织微观与宏观经济学入门：稀缺、机会成本、边际、激励、贸易、市场与政府失灵、生产力、货币增长等。',
      review: '全球使用最广的经济学入门教材，特点是先讲直觉再上模型，用大量现实案例（房租管制、税收归宿、汇率）替代公式推导。作为自学第一本经济学书几乎无争议；但它是主流新古典综合的教科书式呈现，对制度、权力与分配问题的处理较浅，读完应补制度经济学与经济史。',
      pros: ['直觉优先易入门', '案例丰富', '体系完整'],
      cons: ['立场主流单一', '数学与制度深度不足'],
      tags: ['曼昆', '十大原理', '教材'],
      scores: [{
      src: '豆瓣',
      val: 9.1,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E7%BB%8F%E6%B5%8E%E5%AD%A6%E5%8E%9F%E7%90%86%EF%BC%88%E5%BE%AE%E8%A7%82%2B%E5%AE%8F%E8%A7%82%EF%BC%89'
    }, {
      src: 'Goodreads',
      val: 4.05,
      max: 5,
      url: 'https://www.goodreads.com/search?q=Principles%20of%20Economics'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E7%BB%8F%E6%B5%8E%E5%AD%A6%E5%8E%9F%E7%90%86%EF%BC%88%E5%BE%AE%E8%A7%82%2B%E5%AE%8F%E8%A7%82%EF%BC%89'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E7%BB%8F%E6%B5%8E%E5%AD%A6%E5%8E%9F%E7%90%86%EF%BC%88%E5%BE%AE%E8%A7%82%2B%E5%AE%8F%E8%A7%82%EF%BC%89'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/Principles%20of%20Economics'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=Principles%20of%20Economics'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=Principles%20of%20Economics'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E7%BB%8F%E6%B5%8E%E5%AD%A6%E5%8E%9F%E7%90%86%EF%BC%88%E5%BE%AE%E8%A7%82%2B%E5%AE%8F%E8%A7%82%EF%BC%89'
    }],
      related: ['books/economic-way-of-thinking-sowell', 'books/skin-in-the-game', 'books/political-order-changing-societies'],
      f: {
      field: ['经济', '思维方法'],
      form: ['教科书', '电子书'],
      language: ['中文', '英文']
    }
    },
  {
      id: 'capitalism-socialism-democracy',
      cat: 'books',
      title: '资本主义、社会主义与民主',
      alt: 'Capitalism, Socialism and Democracy',
      year: 1942,
      region: '奥地利',
      status: '已出版',
      image: null,
      summary: '提出「创造性破坏」与创新的企业家理论，并预言资本主义的成功将侵蚀其社会基础；同时给出竞争性精英民主的经典定义。',
      review: '两半本书各有巨大影响：经济半部把增长的动力从价格均衡转到创新与企业家，成为今天创新经济学的源头；政治半部把民主重新定义为「选择领导人的方法」而非人民统治，深刻塑造了战后民主理论。熊彼特对资本主义衰亡的预言本身被历史证伪，但他对官僚化与知识分子敌意的分析仍常被引用。',
      pros: ['创造性破坏概念奠基', '经济与创新政治双重视角', '文笔犀利'],
      cons: ['核心预言被证伪', '结构跨度大'],
      tags: ['熊彼特', '创造性破坏', '创新经济学'],
      scores: [{
      src: '豆瓣',
      val: 9.0,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E8%B5%84%E6%9C%AC%E4%B8%BB%E4%B9%89%E3%80%81%E7%A4%BE%E4%BC%9A%E4%B8%BB%E4%B9%89%E4%B8%8E%E6%B0%91%E4%B8%BB'
    }, {
      src: 'Goodreads',
      val: 4.05,
      max: 5,
      url: 'https://www.goodreads.com/search?q=Capitalism%2C%20Socialism%20and%20Democracy'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E8%B5%84%E6%9C%AC%E4%B8%BB%E4%B9%89%E3%80%81%E7%A4%BE%E4%BC%9A%E4%B8%BB%E4%B9%89%E4%B8%8E%E6%B0%91%E4%B8%BB'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E8%B5%84%E6%9C%AC%E4%B8%BB%E4%B9%89%E3%80%81%E7%A4%BE%E4%BC%9A%E4%B8%BB%E4%B9%89%E4%B8%8E%E6%B0%91%E4%B8%BB'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/Capitalism%2C%20Socialism%20and%20Democracy'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=Capitalism%2C%20Socialism%20and%20Democracy'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=Capitalism%2C%20Socialism%20and%20Democracy'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E8%B5%84%E6%9C%AC%E4%B8%BB%E4%B9%89%E3%80%81%E7%A4%BE%E4%BC%9A%E4%B8%BB%E4%B9%89%E4%B8%8E%E6%B0%91%E4%B8%BB'
    }],
      related: ['books/political-order-changing-societies', 'books/capital-marx', 'books/zhishen-shinei'],
      f: {
      field: ['经济', '政治', '商业'],
      form: ['实体书', '电子书'],
      language: ['中文', '英文']
    }
    },
  {
      id: 'road-to-serfdom',
      cat: 'books',
      title: '通往奴役之路',
      alt: 'The Road to Serfdom',
      year: 1944,
      region: '奥地利',
      status: '已出版',
      image: null,
      summary: '论证中央计划经济必然导致信息失灵与权力集中，进而侵蚀法治与个人自由。',
      review: '20 世纪自由主义复兴的宣言。哈耶克的论证不是道德谴责而是机制分析：计划者无法掌握分散在千万人手中的具体知识，为达成统一目标就必须不断扩权，最终牺牲法治的普遍性。它对计划经济的批判在苏东剧变后被视为先见，但「必然滑向极权」的强因果链被批评过头（北欧福利国家即为反例）。',
      pros: ['信息与知识分散论深刻', '机制分析清晰', '影响政治实践'],
      cons: ['因果链过强', '对福利国家的适用性有限'],
      tags: ['哈耶克', '计划经济批判', '自由主义'],
      scores: [{
      src: '豆瓣',
      val: 8.5,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E9%80%9A%E5%BE%80%E5%A5%B4%E5%BD%B9%E4%B9%8B%E8%B7%AF'
    }, {
      src: 'Goodreads',
      val: 4.15,
      max: 5,
      url: 'https://www.goodreads.com/search?q=The%20Road%20to%20Serfdom'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E9%80%9A%E5%BE%80%E5%A5%B4%E5%BD%B9%E4%B9%8B%E8%B7%AF'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E9%80%9A%E5%BE%80%E5%A5%B4%E5%BD%B9%E4%B9%8B%E8%B7%AF'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/The%20Road%20to%20Serfdom'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=The%20Road%20to%20Serfdom'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=The%20Road%20to%20Serfdom'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E9%80%9A%E5%BE%80%E5%A5%B4%E5%BD%B9%E4%B9%8B%E8%B7%AF'
    }],
      related: ['books/capital-marx', 'books/end-of-history', 'books/du-tongjian-lun'],
      f: {
      field: ['经济', '政治', '哲学'],
      form: ['实体书', '电子书'],
      language: ['中文', '英文']
    }
    },
  {
      id: 'capital-21st-century',
      cat: 'books',
      title: '21世纪资本论',
      alt: 'Capital in the Twenty-First Century',
      year: 2013,
      region: '法国',
      status: '已出版',
      image: null,
      summary: '用两百余年欧美税收与遗产数据证明 r>g（资本回报率长期高于经济增长率）会使财富集中度自然上升，主张全球累进资本税。',
      review: '让「不平等」重新回到经济学中心的书。它的力量在于数据：皮凯蒂团队构建的长期财富份额序列使争论摆脱了轶事与意识形态。批评集中在方法论（资本概念过于宽泛、忽略制度与权力）、以及全球资本税的可行性。无论立场如何，这是理解当代分配争论的基准文献，可与《资本与意识形态》连读。',
      pros: ['长期数据规模空前', '重塑分配议题', '论证可检验'],
      cons: ['资本概念受质疑', '政策建议可行性弱'],
      tags: ['皮凯蒂', '不平等', 'r>g'],
      scores: [{
      src: '豆瓣',
      val: 8.2,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=21%E4%B8%96%E7%BA%AA%E8%B5%84%E6%9C%AC%E8%AE%BA'
    }, {
      src: 'Goodreads',
      val: 3.98,
      max: 5,
      url: 'https://www.goodreads.com/search?q=Capital%20in%20the%20Twenty-First%20Century'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=21%E4%B8%96%E7%BA%AA%E8%B5%84%E6%9C%AC%E8%AE%BA'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=21%E4%B8%96%E7%BA%AA%E8%B5%84%E6%9C%AC%E8%AE%BA'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/Capital%20in%20the%20Twenty-First%20Century'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=Capital%20in%20the%20Twenty-First%20Century'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=Capital%20in%20the%20Twenty-First%20Century'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=21%E4%B8%96%E7%BA%AA%E8%B5%84%E6%9C%AC%E8%AE%BA'
    }],
      related: ['books/zizhi-tongjian', 'books/gulag-archipelago', 'books/rise-fall-third-reich'],
      f: {
      field: ['经济', '历史', '政治'],
      form: ['实体书', '电子书'],
      language: ['中文', '法文', '英文']
    }
    },
  {
      id: 'poor-economics',
      cat: 'books',
      title: '贫穷的本质：我们为什么摆脱不了贫穷',
      alt: 'Poor Economics',
      year: 2011,
      region: '法国',
      status: '已出版',
      image: null,
      summary: '以随机对照试验研究穷人的具体决策：为何不打疫苗、为何借贷成本极高、为何不愿存钱、教育投资为何失败。',
      review: '2019年诺贝尔经济学奖成果。它把发展经济学从宏大叙事拉回到具体机制：穷人并非不理性，而是缺乏信息、承诺装置与容错空间，因此微小的干预（如发放一斤扁豆作为接种激励）能产生远超成本的效果。批评者认为RCT只能回答小问题、无法解释结构性贫困；两种视角其实互补。行文平实，非专业读者友好。',
      pros: ['RCT方法严谨', '结论具体可行', '可读性强'],
      cons: ['难以回答结构性问题', '外部有效性受限'],
      tags: ['班纳吉', '迪弗洛', '随机对照试验'],
      scores: [{
      src: '豆瓣',
      val: 8.7,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E8%B4%AB%E7%A9%B7%E7%9A%84%E6%9C%AC%E8%B4%A8%EF%BC%9A%E6%88%91%E4%BB%AC%E4%B8%BA%E4%BB%80%E4%B9%88%E6%91%86%E8%84%B1%E4%B8%8D%E4%BA%86%E8%B4%AB%E7%A9%B7'
    }, {
      src: 'Goodreads',
      val: 4.0,
      max: 5,
      url: 'https://www.goodreads.com/search?q=Poor%20Economics'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E8%B4%AB%E7%A9%B7%E7%9A%84%E6%9C%AC%E8%B4%A8%EF%BC%9A%E6%88%91%E4%BB%AC%E4%B8%BA%E4%BB%80%E4%B9%88%E6%91%86%E8%84%B1%E4%B8%8D%E4%BA%86%E8%B4%AB%E7%A9%B7'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E8%B4%AB%E7%A9%B7%E7%9A%84%E6%9C%AC%E8%B4%A8'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/Poor%20Economics'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=Poor%20Economics'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=Poor%20Economics'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E8%B4%AB%E7%A9%B7%E7%9A%84%E6%9C%AC%E8%B4%A8'
    }],
      related: ['books/political-order-changing-societies', 'books/peasant-life-china', 'books/poverty-and-famines'],
      f: {
      field: ['经济', '社会学', '科普'],
      form: ['实体书', '电子书'],
      language: ['中文', '英文']
    }
    },
  {
      id: 'zhishen-shinei',
      cat: 'books',
      title: '置身事内：中国政府与经济发展',
      alt: '',
      year: 2021,
      region: '中国',
      status: '已出版',
      image: null,
      summary: '从地方政府的行为逻辑出发解释中国经济：财税体制、土地财政、城投与债务、产业政策、房价与居民收入。',
      review: '近年解释中国经济运行机制最受欢迎的通识书。它不把地方政府当作抽象的「干预者」，而是有预算约束、考核激励与融资工具的行动主体，因此土地财政、地方债、房价等现象都被放进同一条因果链。行文清楚、案例具体、注释扎实。上篇讲机制、下篇讲后果（债务、房价、内外部失衡），适合任何想看懂中国经济新闻的人。',
      pros: ['机制解释清晰', '案例贴近现实', '上下篇结构合理'],
      cons: ['部分判断带时效性', '对制度价值判断较少'],
      tags: ['兰小欢', '土地财政', '地方政府'],
      scores: [{
      src: '豆瓣',
      val: 9.1,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E7%BD%AE%E8%BA%AB%E4%BA%8B%E5%86%85%EF%BC%9A%E4%B8%AD%E5%9B%BD%E6%94%BF%E5%BA%9C%E4%B8%8E%E7%BB%8F%E6%B5%8E%E5%8F%91%E5%B1%95'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E7%BD%AE%E8%BA%AB%E4%BA%8B%E5%86%85%EF%BC%9A%E4%B8%AD%E5%9B%BD%E6%94%BF%E5%BA%9C%E4%B8%8E%E7%BB%8F%E6%B5%8E%E5%8F%91%E5%B1%95'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E7%BD%AE%E8%BA%AB%E4%BA%8B%E5%86%85'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/%E7%BD%AE%E8%BA%AB%E4%BA%8B%E5%86%85'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=%E7%BD%AE%E8%BA%AB%E4%BA%8B%E5%86%85'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=%E7%BD%AE%E8%BA%AB%E4%BA%8B%E5%86%85'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E7%BD%AE%E8%BA%AB%E4%BA%8B%E5%86%85'
    }],
      related: ['books/zizhi-tongjian', 'books/tianchao-bengkui', 'books/chinese-political-gains-losses'],
      f: {
      field: ['经济', '政治', '中国史'],
      form: ['实体书', '电子书'],
      language: ['中文']
    }
    },
  {
      id: 'daguodacheng',
      cat: 'books',
      title: '大国大城：当代中国的统一、发展与平衡',
      alt: '',
      year: 2016,
      region: '中国',
      status: '已出版',
      image: null,
      summary: '论证人口与产业向大城市和沿海集聚是经济发展的普遍规律，批评以户籍与土地管制阻碍要素流动的做法。',
      review: '用空间经济学常识挑战「控制大城市规模」的主流政策话语。陆铭的核心论点：集聚带来生产率，区域平衡应通过人均指标而非总量指标实现，让劳动力自由流动才是缩小地区差距的路径。数据与图表清晰、论证直接，部分读者会觉得立场先行、对公共服务承载力的讨论不够充分。可与《置身事内》对照读。',
      pros: ['观点鲜明有力', '数据图表清楚', '政策针对性强'],
      cons: ['对承载力问题讨论较少', '立场先行感明显'],
      tags: ['陆铭', '城市化', '户籍制度'],
      scores: [{
      src: '豆瓣',
      val: 8.6,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E5%A4%A7%E5%9B%BD%E5%A4%A7%E5%9F%8E%EF%BC%9A%E5%BD%93%E4%BB%A3%E4%B8%AD%E5%9B%BD%E7%9A%84%E7%BB%9F%E4%B8%80%E3%80%81%E5%8F%91%E5%B1%95%E4%B8%8E%E5%B9%B3%E8%A1%A1'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E5%A4%A7%E5%9B%BD%E5%A4%A7%E5%9F%8E%EF%BC%9A%E5%BD%93%E4%BB%A3%E4%B8%AD%E5%9B%BD%E7%9A%84%E7%BB%9F%E4%B8%80%E3%80%81%E5%8F%91%E5%B1%95%E4%B8%8E%E5%B9%B3%E8%A1%A1'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E5%A4%A7%E5%9B%BD%E5%A4%A7%E5%9F%8E'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/%E5%A4%A7%E5%9B%BD%E5%A4%A7%E5%9F%8E'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=%E5%A4%A7%E5%9B%BD%E5%A4%A7%E5%9F%8E'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=%E5%A4%A7%E5%9B%BD%E5%A4%A7%E5%9F%8E'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E5%A4%A7%E5%9B%BD%E5%A4%A7%E5%9F%8E'
    }],
      related: ['books/political-order-changing-societies', 'books/poverty-and-famines', 'books/jiaohun'],
      f: {
      field: ['经济', '社会学', '政治'],
      form: ['实体书', '电子书'],
      language: ['中文']
    }
    },
  {
      id: 'irrational-exuberance',
      cat: 'books',
      title: '非理性繁荣',
      alt: 'Irrational Exuberance',
      year: 2000,
      region: '美国',
      status: '已出版',
      image: null,
      summary: '从行为金融角度解释资产价格泡沫：叙事传播、反馈环、媒体与心理因素如何推动价格脱离基本面。',
      review: '2000年出版即命中互联网泡沫，2005年再版预警房地产，作者后获诺贝尔奖。希勒的价值在于把「故事」当作经济变量：市场涨跌常常由可传播的叙事驱动，而非信息更新。书中对结构性因素（人口、媒体、政策）的分析部分时效性已过，但反馈机制的框架仍是理解泡沫与恐慌的实用工具。',
      pros: ['两次成功预警', '行为金融框架清晰', '叙事视角独特'],
      cons: ['部分数据过时', '择时仍不可行'],
      tags: ['希勒', '泡沫', '行为金融'],
      scores: [{
      src: '豆瓣',
      val: 8.4,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E9%9D%9E%E7%90%86%E6%80%A7%E7%B9%81%E8%8D%A3'
    }, {
      src: 'Goodreads',
      val: 3.95,
      max: 5,
      url: 'https://www.goodreads.com/search?q=Irrational%20Exuberance'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E9%9D%9E%E7%90%86%E6%80%A7%E7%B9%81%E8%8D%A3'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E9%9D%9E%E7%90%86%E6%80%A7%E7%B9%81%E8%8D%A3'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/Irrational%20Exuberance'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=Irrational%20Exuberance'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=Irrational%20Exuberance'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E9%9D%9E%E7%90%86%E6%80%A7%E7%B9%81%E8%8D%A3'
    }],
      related: ['books/great-betrayal-wallstreet', 'books/thinking-fast-slow', 'books/general-theory-keynes'],
      f: {
      field: ['金融', '经济', '心理'],
      form: ['实体书', '电子书'],
      language: ['中文', '英文']
    }
    },
  {
      id: 'great-betrayal-wallstreet',
      cat: 'books',
      title: '伟大的博弈：华尔街金融帝国的崛起',
      alt: 'The Great Game: The Emergence of Wall Street as a World Power',
      year: 1999,
      region: '美国',
      status: '已出版',
      image: null,
      summary: '从1653年新阿姆斯特丹的土墙写到20世纪末，叙述华尔街三百五十年间如何成为世界金融中心。',
      review: '金融史的叙事佳作：把资本市场的发展与美国工业化、战争融资、铁路投机、监管博弈交织在一起，说明「投机与建设」始终同源。作者立场亲市场，对金融危机中的掠夺与伤害着墨相对温和。作为通识金融史读物节奏好、人物多、易读；若需学术深度，应配合金德尔伯格《疯狂、恐慌与崩溃》。',
      pros: ['叙事流畅', '金融史脉络完整', '人物故事丰富'],
      cons: ['立场亲市场', '学术深度有限'],
      tags: ['戈登', '华尔街', '金融史'],
      scores: [{
      src: '豆瓣',
      val: 8.8,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E4%BC%9F%E5%A4%A7%E7%9A%84%E5%8D%9A%E5%BC%88%EF%BC%9A%E5%8D%8E%E5%B0%94%E8%A1%97%E9%87%91%E8%9E%8D%E5%B8%9D%E5%9B%BD%E7%9A%84%E5%B4%9B%E8%B5%B7'
    }, {
      src: 'Goodreads',
      val: 4.05,
      max: 5,
      url: 'https://www.goodreads.com/search?q=The%20Great%20Game%3A%20The%20Emergence%20of%20Wall%20Street%20as%20a%20World%20Power'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E4%BC%9F%E5%A4%A7%E7%9A%84%E5%8D%9A%E5%BC%88%EF%BC%9A%E5%8D%8E%E5%B0%94%E8%A1%97%E9%87%91%E8%9E%8D%E5%B8%9D%E5%9B%BD%E7%9A%84%E5%B4%9B%E8%B5%B7'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E4%BC%9F%E5%A4%A7%E7%9A%84%E5%8D%9A%E5%BC%88'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/The%20Great%20Game'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=The%20Great%20Game'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=The%20Great%20Game'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E4%BC%9F%E5%A4%A7%E7%9A%84%E5%8D%9A%E5%BC%88'
    }],
      related: ['books/empire-of-cotton', 'books/wealth-poverty-nations', 'books/debt-first-5000-years'],
      f: {
      field: ['金融', '历史', '经济'],
      form: ['实体书', '电子书'],
      language: ['中文', '英文']
    }
    },
  {
      id: 'wealth-poverty-nations',
      cat: 'books',
      title: '国富国穷',
      alt: 'The Wealth and Poverty of Nations',
      year: 1998,
      region: '美国',
      status: '已出版',
      image: null,
      summary: '比较西欧与中国、伊斯兰世界、拉美的长期经济发展，主张文化、制度与知识能力的差异是贫富分化的根源。',
      review: '与《大分流》针锋相对的文化解释路径：兰德斯认为欧洲的技术创新、时间观念、产权与科学文化构成难以复制的优势，中国的落后有其内在逻辑。文笔辛辣、材料广博，但结论的直率也被批评为欧洲中心与本质化。把它与彭慕兰、弗兰克《白银资本》并读，可以完整体验这场经济史大论战。',
      pros: ['文化制度解释有力', '文笔辛辣', '材料广博'],
      cons: ['欧洲中心批评', '概括偏本质化'],
      tags: ['兰德斯', '经济史', '文化解释'],
      scores: [{
      src: '豆瓣',
      val: 8.7,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E5%9B%BD%E5%AF%8C%E5%9B%BD%E7%A9%B7'
    }, {
      src: 'Goodreads',
      val: 3.9,
      max: 5,
      url: 'https://www.goodreads.com/search?q=The%20Wealth%20and%20Poverty%20of%20Nations'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E5%9B%BD%E5%AF%8C%E5%9B%BD%E7%A9%B7'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E5%9B%BD%E5%AF%8C%E5%9B%BD%E7%A9%B7'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/The%20Wealth%20and%20Poverty%20of%20Nations'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=The%20Wealth%20and%20Poverty%20of%20Nations'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=The%20Wealth%20and%20Poverty%20of%20Nations'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E5%9B%BD%E5%AF%8C%E5%9B%BD%E7%A9%B7'
    }],
      related: ['books/empire-of-cotton', 'books/great-divergence', 'books/music-in-western-civilization'],
      f: {
      field: ['经济', '世界史', '历史'],
      form: ['实体书', '电子书'],
      language: ['中文', '英文']
    }
    },
  {
      id: 'poverty-and-famines',
      cat: 'books',
      title: '贫困与饥荒：论权利与剥夺',
      alt: 'Poverty and Famines: An Essay on Entitlement and Deprivation',
      year: 1981,
      region: '印度',
      status: '已出版',
      image: 'assets/img/books/poverty-and-famines.jpg',
      summary: '提出「权利方法」：饥荒通常不是粮食总量不足，而是特定群体丧失了获取粮食的交换权利。',
      review: '森以1943年孟加拉大饥荒等案例证明：在粮食供给未明显下降的情况下仍会发生大规模饿死，关键在于工资、就业、价格与分配关系的崩塌。这一发现彻底改变了饥荒研究与救济政策设计，也是他「可行能力」框架的前身。篇幅不长、论证清楚，是发展经济学最值得先读的一本。',
      pros: ['颠覆粮食短缺解释', '案例论证清晰', '政策影响巨大'],
      cons: ['案例集中于特定历史时期', '权利界定需补充'],
      tags: ['森', '权利方法', '饥荒'],
      scores: [{
      src: '豆瓣',
      val: 8.9,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E8%B4%AB%E5%9B%B0%E4%B8%8E%E9%A5%A5%E8%8D%92%EF%BC%9A%E8%AE%BA%E6%9D%83%E5%88%A9%E4%B8%8E%E5%89%A5%E5%A4%BA'
    }, {
      src: 'Goodreads',
      val: 4.1,
      max: 5,
      url: 'https://www.goodreads.com/search?q=Poverty%20and%20Famines%3A%20An%20Essay%20on%20Entitlement%20and%20Deprivation'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E8%B4%AB%E5%9B%B0%E4%B8%8E%E9%A5%A5%E8%8D%92%EF%BC%9A%E8%AE%BA%E6%9D%83%E5%88%A9%E4%B8%8E%E5%89%A5%E5%A4%BA'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E8%B4%AB%E5%9B%B0%E4%B8%8E%E9%A5%A5%E8%8D%92'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/Poverty%20and%20Famines'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=Poverty%20and%20Famines'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=Poverty%20and%20Famines'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E8%B4%AB%E5%9B%B0%E4%B8%8E%E9%A5%A5%E8%8D%92'
    }],
      related: ['books/political-order-changing-societies', 'books/daguodacheng', 'books/jiaohun'],
      f: {
      field: ['经济', '政治', '社会学'],
      form: ['实体书', '电子书'],
      language: ['中文', '英文']
    }
    },
  {
      id: 'economic-way-of-thinking-sowell',
      cat: 'books',
      title: '经济学的思维方式（基础篇+现实应用）',
      alt: 'Basic Economics / Applied Economics',
      year: 2000,
      region: '美国',
      status: '已出版',
      image: null,
      summary: '不用一个公式讲清价格、利润、租金、工资、风险、移民、住房与歧视背后的激励逻辑。',
      review: '全无图表与数学的经济学通识，靠清晰的因果推理与大量历史案例讲透「稀缺之下人们如何被激励」。索维尔的自由市场立场鲜明，对最低工资、房租管制、福利政策的批评锋利有力；也正因如此，读者需要意识到他对市场失灵、权力不对等与历史不平等的处理相对薄弱，最好与克鲁格曼或皮凯蒂对读以平衡。',
      pros: ['零公式易读', '案例丰富', '激励逻辑清楚'],
      cons: ['立场鲜明', '对市场失灵讨论不足'],
      tags: ['索维尔', '通识经济学', '激励'],
      scores: [{
      src: '豆瓣',
      val: 9.1,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E7%BB%8F%E6%B5%8E%E5%AD%A6%E7%9A%84%E6%80%9D%E7%BB%B4%E6%96%B9%E5%BC%8F%EF%BC%88%E5%9F%BA%E7%A1%80%E7%AF%87%2B%E7%8E%B0%E5%AE%9E%E5%BA%94%E7%94%A8%EF%BC%89'
    }, {
      src: 'Goodreads',
      val: 4.35,
      max: 5,
      url: 'https://www.goodreads.com/search?q=Basic%20Economics%20/%20Applied%20Economics'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E7%BB%8F%E6%B5%8E%E5%AD%A6%E7%9A%84%E6%80%9D%E7%BB%B4%E6%96%B9%E5%BC%8F%EF%BC%88%E5%9F%BA%E7%A1%80%E7%AF%87%2B%E7%8E%B0%E5%AE%9E%E5%BA%94%E7%94%A8%EF%BC%89'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E7%BB%8F%E6%B5%8E%E5%AD%A6%E7%9A%84%E6%80%9D%E7%BB%B4%E6%96%B9%E5%BC%8F%EF%BC%88%E5%9F%BA%E7%A1%80%E7%AF%87%2B%E7%8E%B0%E5%AE%9E%E5%BA%94%E7%94%A8%EF%BC%89'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/Basic%20Economics%20/%20Applied%20Economics'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=Basic%20Economics%20/%20Applied%20Economics'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=Basic%20Economics%20/%20Applied%20Economics'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E7%BB%8F%E6%B5%8E%E5%AD%A6%E7%9A%84%E6%80%9D%E7%BB%B4%E6%96%B9%E5%BC%8F%EF%BC%88%E5%9F%BA%E7%A1%80%E7%AF%87%2B%E7%8E%B0%E5%AE%9E%E5%BA%94%E7%94%A8%EF%BC%89'
    }],
      related: ['books/mankiw-principles', 'books/skin-in-the-game', 'books/political-order-changing-societies'],
      f: {
      field: ['经济', '思维方法'],
      form: ['实体书', '电子书'],
      language: ['中文', '英文']
    }
    },
  {
      id: 'debt-first-5000-years',
      cat: 'books',
      title: '债：第一个5000年',
      alt: 'Debt: The First 5,000 Years',
      year: 2011,
      region: '美国',
      status: '已出版',
      image: 'assets/img/books/debt-first-5000-years_it.jpg',
      summary: '以人类学材料重述货币与债务史，主张信用与债务关系远早于铸币，「物物交换起源说」是虚构。',
      review: '出版于占领华尔街运动之际，直接冲击经济学教科书的货币起源叙事。格雷伯用美索不达米亚账簿、非洲聘礼、殖民地暴力的材料说明：债务首先是道德与权力关系，而非中性技术。人类学材料有时被过度概括、论证带强烈政治立场，但它提出的问题（谁欠谁、凭什么）极具解放性。',
      pros: ['颠覆货币起源叙事', '人类学材料独特', '问题意识锋利'],
      cons: ['概括过度处存在', '立场强烈'],
      tags: ['格雷伯', '债务', '经济人类学'],
      scores: [{
      src: '豆瓣',
      val: 8.7,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E5%80%BA%EF%BC%9A%E7%AC%AC%E4%B8%80%E4%B8%AA5000%E5%B9%B4'
    }, {
      src: 'Goodreads',
      val: 4.15,
      max: 5,
      url: 'https://www.goodreads.com/search?q=Debt%3A%20The%20First%205%2C000%20Years'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E5%80%BA%EF%BC%9A%E7%AC%AC%E4%B8%80%E4%B8%AA5000%E5%B9%B4'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E5%80%BA%EF%BC%9A%E7%AC%AC%E4%B8%80%E4%B8%AA5000%E5%B9%B4'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/Debt'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=Debt'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=Debt'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E5%80%BA%EF%BC%9A%E7%AC%AC%E4%B8%80%E4%B8%AA5000%E5%B9%B4'
    }],
      related: ['books/herodotus-histories', 'books/great-betrayal-wallstreet', 'books/empire-of-cotton'],
      f: {
      field: ['经济', '人类学', '历史'],
      form: ['实体书', '电子书'],
      language: ['中文', '英文']
    }
    },
  {
      id: 'short-history-of-nearly-everything',
      cat: 'books',
      title: '万物简史',
      alt: 'A Short History of Nearly Everything',
      year: 2003,
      region: '美国',
      status: '已出版',
      image: null,
      summary: '从宇宙大爆炸、地球形成、生命起源一路讲到人类文明，串讲地质学、天文学、物理学、化学与生物学的基本图景。',
      review: '最好的通识科普之一，布莱森的功力在于把科学家的怪癖、争论与偶然发现写得像八卦，同时把关键概念讲准。读者读完能建立一套完整的科学常识地图，并记住「我们对地球的了解远比想象少」这一事实。缺点是深度有限、部分数据已随研究更新；作为入门与旅行读物几乎无可替代。',
      pros: ['叙事幽默', '覆盖面广', '概念讲解准确'],
      cons: ['深度有限', '部分数据已更新'],
      tags: ['布莱森', '通识科普', '地球科学'],
      scores: [{
      src: '豆瓣',
      val: 8.9,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E4%B8%87%E7%89%A9%E7%AE%80%E5%8F%B2'
    }, {
      src: 'Goodreads',
      val: 4.2,
      max: 5,
      url: 'https://www.goodreads.com/search?q=A%20Short%20History%20of%20Nearly%20Everything'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E4%B8%87%E7%89%A9%E7%AE%80%E5%8F%B2'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E4%B8%87%E7%89%A9%E7%AE%80%E5%8F%B2'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/A%20Short%20History%20of%20Nearly%20Everything'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=A%20Short%20History%20of%20Nearly%20Everything'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=A%20Short%20History%20of%20Nearly%20Everything'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E4%B8%87%E7%89%A9%E7%AE%80%E5%8F%B2'
    }],
      related: ['books/god-dice-physics-history', 'books/black-holes-and-time-warps', 'books/evolution-of-physics'],
      f: {
      field: ['科普', '科学史', '物理'],
      form: ['实体书', '电子书'],
      language: ['中文', '英文']
    }
    },
  {
      id: 'god-dice-physics-history',
      cat: 'books',
      title: '上帝掷骰子吗：量子物理史话',
      alt: '',
      year: 2006,
      region: '中国',
      status: '已出版',
      image: null,
      summary: '以章回体叙事重述量子力学发展史，从黑体辐射、光电效应到哥本哈根解释、多世界与退相干。',
      review: '中文原创科普的高水准之作。作者把物理学史写成连续剧：每一章都设悬念，人物有性格，概念靠比喻与思想实验落地，同时不失关键数学思想的准确性。适合零基础读者建立量子力学的全貌，也适合物理专业学生当作历史脉络补充。缺点是章回体的戏剧化处理偶有夸张，个别前沿讨论略简化。',
      pros: ['叙事引人入胜', '概念落地准确', '中文原创佳作'],
      cons: ['戏剧化偶有夸张', '前沿部分简化'],
      tags: ['曹天元', '量子力学', '科学史话'],
      scores: [{
      src: '豆瓣',
      val: 9.2,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E4%B8%8A%E5%B8%9D%E6%8E%B7%E9%AA%B0%E5%AD%90%E5%90%97%EF%BC%9A%E9%87%8F%E5%AD%90%E7%89%A9%E7%90%86%E5%8F%B2%E8%AF%9D'
    }, {
      src: 'Goodreads',
      val: 4.4,
      max: 5,
      url: 'https://www.goodreads.com/search?q=%E4%B8%8A%E5%B8%9D%E6%8E%B7%E9%AA%B0%E5%AD%90%E5%90%97%EF%BC%9A%E9%87%8F%E5%AD%90%E7%89%A9%E7%90%86%E5%8F%B2%E8%AF%9D'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E4%B8%8A%E5%B8%9D%E6%8E%B7%E9%AA%B0%E5%AD%90%E5%90%97%EF%BC%9A%E9%87%8F%E5%AD%90%E7%89%A9%E7%90%86%E5%8F%B2%E8%AF%9D'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E4%B8%8A%E5%B8%9D%E6%8E%B7%E9%AA%B0%E5%AD%90%E5%90%97'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/%E4%B8%8A%E5%B8%9D%E6%8E%B7%E9%AA%B0%E5%AD%90%E5%90%97'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=%E4%B8%8A%E5%B8%9D%E6%8E%B7%E9%AA%B0%E5%AD%90%E5%90%97'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=%E4%B8%8A%E5%B8%9D%E6%8E%B7%E9%AA%B0%E5%AD%90%E5%90%97'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E4%B8%8A%E5%B8%9D%E6%8E%B7%E9%AA%B0%E5%AD%90%E5%90%97'
    }],
      related: ['books/black-holes-and-time-warps', 'books/evolution-of-physics', 'books/short-history-of-nearly-everything'],
      f: {
      field: ['科普', '物理', '科学史'],
      form: ['实体书', '电子书'],
      language: ['中文']
    }
    },
  {
      id: 'silent-spring',
      cat: 'books',
      title: '寂静的春天',
      alt: 'Silent Spring',
      year: 1962,
      region: '美国',
      status: '已出版',
      image: null,
      summary: '系统揭露DDT等合成农药在食物链中的富集与生态后果，追问人类对自然的单方面战争。',
      review: '现代环保运动的起点，直接推动美国禁用DDT并促成EPA成立。卡森的写法是科学证据与文学笔调的结合：既有生化机制的说明，也有对「没有鸟鸣的春天」的想象。化工行业当时以「歇斯底里的老处女」攻击她，今天读来仍能看到科学与商业利益、公共舆论的博弈模式。许振基等译本通行。',
      pros: ['开启环保运动', '科学与文学结合', '证据系统'],
      cons: ['部分数据需以现代研究校订', '论战色彩浓'],
      tags: ['卡森', 'DDT', '环境主义'],
      scores: [{
      src: '豆瓣',
      val: 8.6,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E5%AF%82%E9%9D%99%E7%9A%84%E6%98%A5%E5%A4%A9'
    }, {
      src: 'Goodreads',
      val: 3.95,
      max: 5,
      url: 'https://www.goodreads.com/search?q=Silent%20Spring'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E5%AF%82%E9%9D%99%E7%9A%84%E6%98%A5%E5%A4%A9'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E5%AF%82%E9%9D%99%E7%9A%84%E6%98%A5%E5%A4%A9'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/Silent%20Spring'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=Silent%20Spring'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=Silent%20Spring'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E5%AF%82%E9%9D%99%E7%9A%84%E6%98%A5%E5%A4%A9'
    }],
      related: ['books/selfish-gene', 'books/gene-intimate-history', 'books/why-we-sleep'],
      f: {
      field: ['科普', '生物', '政治'],
      form: ['实体书', '电子书'],
      language: ['中文', '英文']
    }
    },
  {
      id: 'emperor-of-all-maladies',
      cat: 'books',
      title: '众病之王：癌症传',
      alt: 'The Emperor of All Maladies: A Biography of Cancer',
      year: 2010,
      region: '美国',
      status: '已出版',
      image: null,
      summary: '以「传记」形式讲述癌症四千年史：从外科根治术、放疗、化疗到分子靶向与免疫治疗，穿插患者与研究者故事。',
      review: '普利策奖作品，也是医学科普写作的当代标杆。穆克吉既是肿瘤医生又是研究者，因此能在机制解释与临床现实之间自由切换，对「过度治疗」与「希望管理」的反思尤其诚恳。篇幅较长但章节独立，可按兴趣读。与《基因传》《细胞传》构成三部曲。',
      pros: ['史与机制并重', '临床视角真实', '反思诚恳'],
      cons: ['篇幅长', '最新疗法覆盖有限'],
      tags: ['穆克吉', '癌症', '医学史'],
      scores: [{
      src: '豆瓣',
      val: 9.2,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E4%BC%97%E7%97%85%E4%B9%8B%E7%8E%8B%EF%BC%9A%E7%99%8C%E7%97%87%E4%BC%A0'
    }, {
      src: 'Goodreads',
      val: 4.3,
      max: 5,
      url: 'https://www.goodreads.com/search?q=The%20Emperor%20of%20All%20Maladies%3A%20A%20Biography%20of%20Cancer'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E4%BC%97%E7%97%85%E4%B9%8B%E7%8E%8B%EF%BC%9A%E7%99%8C%E7%97%87%E4%BC%A0'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E4%BC%97%E7%97%85%E4%B9%8B%E7%8E%8B'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/The%20Emperor%20of%20All%20Maladies'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=The%20Emperor%20of%20All%20Maladies'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=The%20Emperor%20of%20All%20Maladies'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E4%BC%97%E7%97%85%E4%B9%8B%E7%8E%8B'
    }],
      related: ['books/god-dice-physics-history', 'books/black-holes-and-time-warps', 'books/evolution-of-physics'],
      f: {
      field: ['科普', '医学', '科学史'],
      form: ['实体书', '电子书'],
      language: ['中文', '英文']
    }
    },
  {
      id: 'gene-intimate-history',
      cat: 'books',
      title: '基因传：众生之源',
      alt: 'The Gene: An Intimate History',
      year: 2016,
      region: '美国',
      status: '已出版',
      image: null,
      summary: '从孟德尔、达尔文、摩尔根到DNA双螺旋、人类基因组计划与基因编辑，讲述遗传学发展与优生学的历史教训。',
      review: '与《众病之王》同一配方：扎实的机制讲解加上人物与家庭的真实故事。本书最有价值的部分是对优生运动的揭露——科学如何被政治意志征用去划分「合格的人」，这使基因编辑时代的伦理讨论有了历史重量。文字流畅，非生物背景读者也能读。可与《自私的基因》互补（一个讲机制演化，一个讲历史与伦理）。',
      pros: ['机制与历史平衡', '伦理反思深刻', '可读性强'],
      cons: ['技术细节仍有简化', '篇幅长'],
      tags: ['穆克吉', '遗传学', '优生学'],
      scores: [{
      src: '豆瓣',
      val: 8.9,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E5%9F%BA%E5%9B%A0%E4%BC%A0%EF%BC%9A%E4%BC%97%E7%94%9F%E4%B9%8B%E6%BA%90'
    }, {
      src: 'Goodreads',
      val: 4.2,
      max: 5,
      url: 'https://www.goodreads.com/search?q=The%20Gene%3A%20An%20Intimate%20History'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E5%9F%BA%E5%9B%A0%E4%BC%A0%EF%BC%9A%E4%BC%97%E7%94%9F%E4%B9%8B%E6%BA%90'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E5%9F%BA%E5%9B%A0%E4%BC%A0'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/The%20Gene'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=The%20Gene'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=The%20Gene'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E5%9F%BA%E5%9B%A0%E4%BC%A0'
    }],
      related: ['books/emperor-of-all-maladies', 'books/being-mortal', 'books/selfish-gene'],
      f: {
      field: ['科普', '生物', '医学'],
      form: ['实体书', '电子书'],
      language: ['中文', '英文']
    }
    },
  {
      id: 'surely-youre-joking-mr-feynman',
      cat: 'books',
      title: '别闹了，费曼先生',
      alt: 'Surely You\'re Joking, Mr. Feynman!',
      year: 1985,
      region: '美国',
      status: '已出版',
      image: 'assets/img/books/surely-youre-joking-mr-feynman_it.jpg',
      summary: '费曼口述的轶事集：撬保险柜、画裸体、玩桑巴鼓、调查挑战者号事故，以及对权威与装腔作势的持续嘲弄。',
      review: '科学家的自述中最好笑的一本，也是理解「科学态度即怀疑一切权威、亲自验证」的最佳教材。费曼的故事表面是恶作剧，内核是一套一致的认识论：不迷信头衔、不接受未验证的说法、遇到不懂就动手算。挑战者号一章（O形环冰水实验）是教科书级的调查过程。适合作为科学入门的第一本课外读物。',
      pros: ['幽默易读', '科学态度示范', '故事密度高'],
      cons: ['非系统性科学讲解', '自我形象有美化'],
      tags: ['费曼', '科学精神', '轶事'],
      scores: [{
      src: '豆瓣',
      val: 9.2,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E5%88%AB%E9%97%B9%E4%BA%86%EF%BC%8C%E8%B4%B9%E6%9B%BC%E5%85%88%E7%94%9F'
    }, {
      src: 'Goodreads',
      val: 4.25,
      max: 5,
      url: 'https://www.goodreads.com/search?q=Surely%20You%27re%20Joking%2C%20Mr.%20Feynman%21'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E5%88%AB%E9%97%B9%E4%BA%86%EF%BC%8C%E8%B4%B9%E6%9B%BC%E5%85%88%E7%94%9F'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E5%88%AB%E9%97%B9%E4%BA%86%EF%BC%8C%E8%B4%B9%E6%9B%BC%E5%85%88%E7%94%9F'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/Surely%20You%27re%20Joking%2C%20Mr.%20Feynman%21'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=Surely%20You%27re%20Joking%2C%20Mr.%20Feynman%21'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=Surely%20You%27re%20Joking%2C%20Mr.%20Feynman%21'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E5%88%AB%E9%97%B9%E4%BA%86%EF%BC%8C%E8%B4%B9%E6%9B%BC%E5%85%88%E7%94%9F'
    }],
      related: ['books/god-dice-physics-history', 'books/black-holes-and-time-warps', 'books/evolution-of-physics'],
      f: {
      field: ['科普', '传记', '物理'],
      form: ['实体书', '电子书'],
      language: ['中文', '英文']
    }
    },
  {
      id: 'black-holes-and-time-warps',
      cat: 'books',
      title: '黑洞与时间弯曲：爱因斯坦的惊人遗产',
      alt: 'Black Holes and Time Warps',
      year: 1994,
      region: '美国',
      status: '已出版',
      image: null,
      summary: '由引力波探测先驱索恩讲述广义相对论的百年史：时空弯曲、黑洞、虫洞、时间旅行与引力波探测的可能性。',
      review: '既是科普也是科学史回忆录，索恩作为当事人记录了与惠勒、霍金、泽尔多维奇等人的争论与合作，因此读者能看到科学结论是如何在人际博弈中形成的。对时空几何的解释配合大量示意图，难度高于普通科普但值得。2015年LIGO首次探测到引力波，为书中预言画上句号。',
      pros: ['当事人视角', '时空概念解释到位', '史与科学并重'],
      cons: ['难度偏高', '部分内容已被新观测更新'],
      tags: ['索恩', '黑洞', '引力波'],
      scores: [{
      src: '豆瓣',
      val: 9.1,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E9%BB%91%E6%B4%9E%E4%B8%8E%E6%97%B6%E9%97%B4%E5%BC%AF%E6%9B%B2%EF%BC%9A%E7%88%B1%E5%9B%A0%E6%96%AF%E5%9D%A6%E7%9A%84%E6%83%8A%E4%BA%BA%E9%81%97%E4%BA%A7'
    }, {
      src: 'Goodreads',
      val: 4.2,
      max: 5,
      url: 'https://www.goodreads.com/search?q=Black%20Holes%20and%20Time%20Warps'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E9%BB%91%E6%B4%9E%E4%B8%8E%E6%97%B6%E9%97%B4%E5%BC%AF%E6%9B%B2%EF%BC%9A%E7%88%B1%E5%9B%A0%E6%96%AF%E5%9D%A6%E7%9A%84%E6%83%8A%E4%BA%BA%E9%81%97%E4%BA%A7'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E9%BB%91%E6%B4%9E%E4%B8%8E%E6%97%B6%E9%97%B4%E5%BC%AF%E6%9B%B2'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/Black%20Holes%20and%20Time%20Warps'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=Black%20Holes%20and%20Time%20Warps'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=Black%20Holes%20and%20Time%20Warps'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E9%BB%91%E6%B4%9E%E4%B8%8E%E6%97%B6%E9%97%B4%E5%BC%AF%E6%9B%B2'
    }],
      related: ['books/god-dice-physics-history', 'books/evolution-of-physics', 'books/short-history-of-nearly-everything'],
      f: {
      field: ['科普', '物理', '科学史'],
      form: ['实体书', '电子书'],
      language: ['中文', '英文']
    }
    },
  {
      id: 'chaos-gleick',
      cat: 'books',
      title: '混沌：开创一门新科学',
      alt: 'Chaos: Making a New Science',
      year: 1987,
      region: '美国',
      status: '已出版',
      image: null,
      summary: '记录混沌理论的诞生：洛伦兹的天气模拟、曼德博的分形、费根鲍姆的普适常数与圣塔菲学派的兴起。',
      review: '科学新闻写作的经典，把一群「不务正业」的研究者如何在体制边缘发现新规律的过程写得极其动人。核心概念（对初值的敏感依赖、奇异吸引子、分形维数）都通过人物故事而非公式讲清。成书于1987年，此后复杂性科学的进展（自组织、网络、机器学习）需另行补充。',
      pros: ['科学社会学视角佳', '概念讲解不用公式', '叙事精彩'],
      cons: ['内容止于1987年', '复杂性后续发展未覆盖'],
      tags: ['格雷克', '混沌', '分形'],
      scores: [{
      src: '豆瓣',
      val: 8.7,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E6%B7%B7%E6%B2%8C%EF%BC%9A%E5%BC%80%E5%88%9B%E4%B8%80%E9%97%A8%E6%96%B0%E7%A7%91%E5%AD%A6'
    }, {
      src: 'Goodreads',
      val: 4.0,
      max: 5,
      url: 'https://www.goodreads.com/search?q=Chaos%3A%20Making%20a%20New%20Science'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E6%B7%B7%E6%B2%8C%EF%BC%9A%E5%BC%80%E5%88%9B%E4%B8%80%E9%97%A8%E6%96%B0%E7%A7%91%E5%AD%A6'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E6%B7%B7%E6%B2%8C'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/Chaos'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=Chaos'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=Chaos'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E6%B7%B7%E6%B2%8C'
    }],
      related: ['books/from-one-to-infinity', 'books/godel-escher-bach', 'books/god-dice-physics-history'],
      f: {
      field: ['科普', '数学', '物理'],
      form: ['实体书', '电子书'],
      language: ['中文', '英文']
    }
    },
  {
      id: 'information-james-gleick',
      cat: 'books',
      title: '信息简史',
      alt: 'The Information: A History, a Theory, a Flood',
      year: 2011,
      region: '美国',
      status: '已出版',
      image: null,
      summary: '从非洲鼓语、电报、巴贝奇与洛夫莱斯，到香农信息论、熵、量子信息与今天的信息过载。',
      review: '格雷克另一部力作，把「信息」确立为贯穿物理学、生物学与通信技术的统一概念，并揭示香农理论如何被反向输入到热力学与遗传学。章节独立、材料密度高，适合慢读。对信息过载与过滤机制的讨论在今天更具现实意义。可与《混沌》对照，看他如何用同一手法处理两个抽象概念。',
      pros: ['跨学科统一视角', '材料丰富', '现实关照强'],
      cons: ['篇幅长', '部分章节偏史料堆叠'],
      tags: ['格雷克', '信息论', '香农'],
      scores: [{
      src: '豆瓣',
      val: 8.6,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E4%BF%A1%E6%81%AF%E7%AE%80%E5%8F%B2'
    }, {
      src: 'Goodreads',
      val: 4.0,
      max: 5,
      url: 'https://www.goodreads.com/search?q=The%20Information%3A%20A%20History%2C%20a%20Theory%2C%20a%20Flood'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E4%BF%A1%E6%81%AF%E7%AE%80%E5%8F%B2'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E4%BF%A1%E6%81%AF%E7%AE%80%E5%8F%B2'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/The%20Information'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=The%20Information'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=The%20Information'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E4%BF%A1%E6%81%AF%E7%AE%80%E5%8F%B2'
    }],
      related: ['books/godel-escher-bach', 'books/what-is-mathematics', 'books/from-one-to-infinity'],
      f: {
      field: ['科普', '数学', '技术史'],
      form: ['实体书', '电子书'],
      language: ['中文', '英文']
    }
    },
  {
      id: 'periodic-table-levi',
      cat: 'books',
      title: '周期表',
      alt: 'The Periodic Table',
      year: 1975,
      region: '意大利',
      status: '已出版',
      image: null,
      summary: '以元素为章节标题，把化学工作、都灵生活、法西斯时期的犹太身份与集中营记忆交织成21篇短篇。',
      review: '《元素周期表》被皇家学会评为史上最佳科学书籍。莱维既是化学家又是奥斯维辛幸存者，因此他的文字有罕见的双重精确：描述分子与描述人性同样冷静。它不是科普教材，而是用化学结构组织的文学，读完后对元素的理解会带上人的重量。可与《被淹没与被拯救的》并读。',
      pros: ['科学与文学完美融合', '文字克制有力', '结构独特'],
      cons: ['非系统科普', '背景知识有助理解'],
      tags: ['莱维', '化学', '回忆录'],
      scores: [{
      src: '豆瓣',
      val: 8.9,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E5%91%A8%E6%9C%9F%E8%A1%A8'
    }, {
      src: 'Goodreads',
      val: 4.15,
      max: 5,
      url: 'https://www.goodreads.com/search?q=The%20Periodic%20Table'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E5%91%A8%E6%9C%9F%E8%A1%A8'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E5%91%A8%E6%9C%9F%E8%A1%A8'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/The%20Periodic%20Table'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=The%20Periodic%20Table'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=The%20Periodic%20Table'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E5%91%A8%E6%9C%9F%E8%A1%A8'
    }],
      related: ['books/elements-chemistry', 'books/chemistry-central-science', 'books/godel-escher-bach'],
      f: {
      field: ['科普', '化学', '文学理论'],
      form: ['实体书', '电子书'],
      language: ['中文', '意大利文', '英文']
    }
    },
  {
      id: 'what-is-mathematics',
      cat: 'books',
      title: '什么是数学：对思想和方法的基本研究',
      alt: 'What Is Mathematics?',
      year: 1941,
      region: '德国',
      status: '已出版',
      image: 'assets/img/books/what-is-mathematics.jpg',
      summary: '从自然数、数系扩充、几何变换、拓扑、极值到微积分，展示真实数学的推理方式而非公式记忆。',
      review: '爱因斯坦之后最被推崇的数学通识书之一，爱因斯坦本人曾称赞它「对数学有生动而深刻的介绍」。它坚持让读者跟着做证明，因此不是轻松的睡前读物，而是需要纸笔的主动阅读。中文版（左平、张饴慈译）附练习，适合想真正理解数学是什么的高中生、大学生与转行者。',
      pros: ['展示真实数学思维', '内容经典不过时', '层次分明'],
      cons: ['需要动手演算', '对零基础者门槛偏高'],
      tags: ['柯朗', '数学思想', '证明'],
      scores: [{
      src: '豆瓣',
      val: 9.2,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E4%BB%80%E4%B9%88%E6%98%AF%E6%95%B0%E5%AD%A6%EF%BC%9A%E5%AF%B9%E6%80%9D%E6%83%B3%E5%92%8C%E6%96%B9%E6%B3%95%E7%9A%84%E5%9F%BA%E6%9C%AC%E7%A0%94%E7%A9%B6'
    }, {
      src: 'Goodreads',
      val: 4.35,
      max: 5,
      url: 'https://www.goodreads.com/search?q=What%20Is%20Mathematics%3F'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E4%BB%80%E4%B9%88%E6%98%AF%E6%95%B0%E5%AD%A6%EF%BC%9A%E5%AF%B9%E6%80%9D%E6%83%B3%E5%92%8C%E6%96%B9%E6%B3%95%E7%9A%84%E5%9F%BA%E6%9C%AC%E7%A0%94%E7%A9%B6'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E4%BB%80%E4%B9%88%E6%98%AF%E6%95%B0%E5%AD%A6'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/What%20Is%20Mathematics%3F'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=What%20Is%20Mathematics%3F'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=What%20Is%20Mathematics%3F'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E4%BB%80%E4%B9%88%E6%98%AF%E6%95%B0%E5%AD%A6'
    }],
      related: ['books/godel-escher-bach', 'books/from-one-to-infinity', 'books/how-to-solve-it'],
      f: {
      field: ['数学', '科普', '思维方法'],
      form: ['实体书', '电子书'],
      language: ['中文', '英文', '德文']
    }
    },
  {
      id: 'mathematics-loss-of-certainty',
      cat: 'books',
      title: '数学：确定性的丧失',
      alt: 'Mathematics: The Loss of Certainty',
      year: 1980,
      region: '美国',
      status: '已出版',
      image: 'assets/img/books/mathematics-loss-of-certainty.jpg',
      summary: '梳理数学从「绝对真理」到「人类建构」的观念转变：非欧几何、无理数危机、集合论悖论与哥德尔不完备定理。',
      review: '回答一个常被误解的问题：数学为什么不再被认为是绝对可靠的。克莱因把每一次基础危机写清楚，并解释其对科学、哲学与文化自信的影响。立场鲜明（反对过度形式化与脱离应用的纯数学），因此带有争论色彩，但作为数学思想史的通识读物极为清晰。可与《古今数学思想》进阶阅读。',
      pros: ['基础危机讲得清楚', '思想史视角', '可读性好'],
      cons: ['立场带主观色彩', '对现代数学发展着墨少'],
      tags: ['克莱因', '数学基础', '哥德尔'],
      scores: [{
      src: '豆瓣',
      val: 9.0,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E6%95%B0%E5%AD%A6%EF%BC%9A%E7%A1%AE%E5%AE%9A%E6%80%A7%E7%9A%84%E4%B8%A7%E5%A4%B1'
    }, {
      src: 'Goodreads',
      val: 4.1,
      max: 5,
      url: 'https://www.goodreads.com/search?q=Mathematics%3A%20The%20Loss%20of%20Certainty'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E6%95%B0%E5%AD%A6%EF%BC%9A%E7%A1%AE%E5%AE%9A%E6%80%A7%E7%9A%84%E4%B8%A7%E5%A4%B1'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E6%95%B0%E5%AD%A6'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/Mathematics'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=Mathematics'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=Mathematics'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E6%95%B0%E5%AD%A6'
    }],
      related: ['books/godel-incompleteness', 'books/ethics-spinoza', 'books/western-philosophy-russell'],
      f: {
      field: ['数学', '科学史', '哲学'],
      form: ['实体书', '电子书'],
      language: ['中文', '英文']
    }
    },
  {
      id: 'evolution-of-physics',
      cat: 'books',
      title: '物理学的进化',
      alt: 'The Evolution of Physics',
      year: 1938,
      region: '德国',
      status: '已出版',
      image: null,
      summary: '从机械观到场观念，再到相对论与量子论，解释物理学基本概念如何被一次次重建。',
      review: '爱因斯坦亲自参与的科普，特点是几乎不用公式，而靠思想实验与概念分析说明「为什么旧观念必须被放弃」。它对「实体 vs 场」「绝对时空 vs 相对时空」的辨析至今仍是理解相对论的最佳路径之一。成书于1938年，量子部分停留在哥本哈根解释的早期阶段，需以现代教材补充。',
      pros: ['概念辨析极佳', '几乎不用公式', '权威作者'],
      cons: ['内容止于1938年', '量子部分需更新'],
      tags: ['爱因斯坦', '相对论', '场论'],
      scores: [{
      src: '豆瓣',
      val: 9.1,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E7%89%A9%E7%90%86%E5%AD%A6%E7%9A%84%E8%BF%9B%E5%8C%96'
    }, {
      src: 'Goodreads',
      val: 4.2,
      max: 5,
      url: 'https://www.goodreads.com/search?q=The%20Evolution%20of%20Physics'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E7%89%A9%E7%90%86%E5%AD%A6%E7%9A%84%E8%BF%9B%E5%8C%96'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E7%89%A9%E7%90%86%E5%AD%A6%E7%9A%84%E8%BF%9B%E5%8C%96'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/The%20Evolution%20of%20Physics'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=The%20Evolution%20of%20Physics'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=The%20Evolution%20of%20Physics'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E7%89%A9%E7%90%86%E5%AD%A6%E7%9A%84%E8%BF%9B%E5%8C%96'
    }],
      related: ['books/god-dice-physics-history', 'books/black-holes-and-time-warps', 'books/short-history-of-nearly-everything'],
      f: {
      field: ['物理', '科普', '科学史'],
      form: ['实体书', '电子书'],
      language: ['中文', '英文', '德文']
    }
    },
  {
      id: 'tristes-tropiques',
      cat: 'books',
      title: '忧郁的热带',
      alt: 'Tristes Tropiques',
      year: 1955,
      region: '法国',
      status: '已出版',
      image: null,
      summary: '以1930年代巴西内陆田野经历为线索，穿插对南比克瓦拉等族群的观察、对文明与野蛮的反思，以及结构人类学方法的自述。',
      review: '龚古尔奖评审曾感叹「这不是小说，却比小说更好」。它同时是旅行文学、民族志、哲学随笔与自传，因此难以归类——这正是它的价值。列维-斯特劳斯在描写雨林、疾病与族群消亡的同时，质疑西方文明的优越叙事，「我讨厌旅行，我恨探险家」成为名句。文字密度高、节奏缓慢，但一旦进入便难以放下。',
      pros: ['文体独特', '田野描写生动', '文明批判深刻'],
      cons: ['节奏缓慢', '结构跳跃'],
      tags: ['列维-斯特劳斯', '结构人类学', '巴西'],
      scores: [{
      src: '豆瓣',
      val: 8.9,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E5%BF%A7%E9%83%81%E7%9A%84%E7%83%AD%E5%B8%A6'
    }, {
      src: 'Goodreads',
      val: 4.0,
      max: 5,
      url: 'https://www.goodreads.com/search?q=Tristes%20Tropiques'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E5%BF%A7%E9%83%81%E7%9A%84%E7%83%AD%E5%B8%A6'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E5%BF%A7%E9%83%81%E7%9A%84%E7%83%AD%E5%B8%A6'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/Tristes%20Tropiques'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=Tristes%20Tropiques'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=Tristes%20Tropiques'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E5%BF%A7%E9%83%81%E7%9A%84%E7%83%AD%E5%B8%A6'
    }],
      related: ['books/jinyi', 'books/country-driving', 'books/rural-china'],
      f: {
      field: ['社会学', '人类学', '游记'],
      form: ['实体书', '电子书'],
      language: ['中文', '法文', '英文']
    }
    },
  {
      id: 'peasant-life-china',
      cat: 'books',
      title: '江村经济：中国农民的生活',
      alt: 'Peasant Life in China',
      year: 1939,
      region: '英国',
      status: '已出版',
      image: null,
      summary: '对江苏开弦弓村（江村）的家庭、亲属、土地、蚕丝业与消费的实地调查，是社区研究方法的开创性个案。',
      review: '费孝通在伦敦政经学院的博士论文，导师马林诺夫斯基作序称其为「人类学实地调查工作发展过程中的一个里程碑」——因为它把人类学方法从「异域」带回本土文明社会。它记录的乡村工业与土地关系，也为理解此后中国农村改革提供了历史基线。与《乡土中国》配套阅读最完整。',
      pros: ['社区研究开创性', '本土人类学里程碑', '史料价值高'],
      cons: ['单村样本代表性有限', '调查年代久远'],
      tags: ['费孝通', '江村', '社区研究'],
      scores: [{
      src: '豆瓣',
      val: 9.1,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E6%B1%9F%E6%9D%91%E7%BB%8F%E6%B5%8E%EF%BC%9A%E4%B8%AD%E5%9B%BD%E5%86%9C%E6%B0%91%E7%9A%84%E7%94%9F%E6%B4%BB'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E6%B1%9F%E6%9D%91%E7%BB%8F%E6%B5%8E%EF%BC%9A%E4%B8%AD%E5%9B%BD%E5%86%9C%E6%B0%91%E7%9A%84%E7%94%9F%E6%B4%BB'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E6%B1%9F%E6%9D%91%E7%BB%8F%E6%B5%8E'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/Peasant%20Life%20in%20China'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=Peasant%20Life%20in%20China'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=Peasant%20Life%20in%20China'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E6%B1%9F%E6%9D%91%E7%BB%8F%E6%B5%8E'
    }],
      related: ['books/rural-china', 'books/jiaohun', 'books/political-order-changing-societies'],
      f: {
      field: ['社会学', '中国史', '经济'],
      form: ['实体书', '电子书'],
      language: ['中文', '英文']
    }
    },
  {
      id: 'discipline-and-punish',
      cat: 'books',
      title: '规训与惩罚：监狱的诞生',
      alt: 'Discipline and Punish: The Birth of the Prison',
      year: 1975,
      region: '法国',
      status: '已出版',
      image: 'assets/img/books/discipline-and-punish.jpg',
      summary: '从酷刑展示 到时间表化的监狱，分析权力如何通过凝视、分级、检查与规范化渗透进学校、医院、工厂与军队。',
      review: '福柯最具影响力的作品，「规训」「全景敞视」「规范化」已成为社会科学的通用词汇。核心论点是：现代权力不再以公开的暴力展示自己，而是通过持续的观察与评价把人塑造成「驯顺而有用」的身体。这一分析被广泛用于理解监控资本主义、绩效管理与学校制度。文本艰涩，建议配合导读。',
      pros: ['权力分析范式转换', '概念工具强大', '解释当代监控有效'],
      cons: ['史料使用受批评', '阅读难度高'],
      tags: ['福柯', '规训', '全景敞视'],
      scores: [{
      src: '豆瓣',
      val: 9.0,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E8%A7%84%E8%AE%AD%E4%B8%8E%E6%83%A9%E7%BD%9A%EF%BC%9A%E7%9B%91%E7%8B%B1%E7%9A%84%E8%AF%9E%E7%94%9F'
    }, {
      src: 'Goodreads',
      val: 4.2,
      max: 5,
      url: 'https://www.goodreads.com/search?q=Discipline%20and%20Punish%3A%20The%20Birth%20of%20the%20Prison'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E8%A7%84%E8%AE%AD%E4%B8%8E%E6%83%A9%E7%BD%9A%EF%BC%9A%E7%9B%91%E7%8B%B1%E7%9A%84%E8%AF%9E%E7%94%9F'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E8%A7%84%E8%AE%AD%E4%B8%8E%E6%83%A9%E7%BD%9A'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/Discipline%20and%20Punish'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=Discipline%20and%20Punish'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=Discipline%20and%20Punish'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E8%A7%84%E8%AE%AD%E4%B8%8E%E6%83%A9%E7%BD%9A'
    }],
      related: ['books/one-dimensional-man', 'books/du-tongjian-lun', 'books/jiaohun'],
      f: {
      field: ['哲学', '社会学', '政治'],
      form: ['实体书', '电子书'],
      language: ['中文', '法文', '英文']
    }
    },
  {
      id: 'madness-and-civilization',
      cat: 'books',
      title: '疯癫与文明：理性时代的精神病史',
      alt: 'Madness and Civilization',
      year: 1961,
      region: '法国',
      status: '已出版',
      image: 'assets/img/books/madness-and-civilization.jpg',
      summary: '考察文艺复兴至19世纪「疯癫」如何从被展示的异象变为被隔离、被医学化的对象，揭示理性的自我定义机制。',
      review: '福柯的博士论文，与《规训与惩罚》构成同一套权力史工程：理性通过划出「非理性」的边界来确立自身。他的大禁闭、总医院、道德治疗等分析改变了精神病学史的写法，也被精神病学家批评为史料选择不当、忽视疾病实体。英文节译本删去大量材料，中文译本据法文全译，读时应知版本差异。',
      pros: ['视角颠覆', '概念史功力深厚', '跨学科影响大'],
      cons: ['史实争议多', '论证带修辞性'],
      tags: ['福柯', '疯癫', '精神病学史'],
      scores: [{
      src: '豆瓣',
      val: 8.9,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E7%96%AF%E7%99%AB%E4%B8%8E%E6%96%87%E6%98%8E%EF%BC%9A%E7%90%86%E6%80%A7%E6%97%B6%E4%BB%A3%E7%9A%84%E7%B2%BE%E7%A5%9E%E7%97%85%E5%8F%B2'
    }, {
      src: 'Goodreads',
      val: 4.0,
      max: 5,
      url: 'https://www.goodreads.com/search?q=Madness%20and%20Civilization'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E7%96%AF%E7%99%AB%E4%B8%8E%E6%96%87%E6%98%8E%EF%BC%9A%E7%90%86%E6%80%A7%E6%97%B6%E4%BB%A3%E7%9A%84%E7%B2%BE%E7%A5%9E%E7%97%85%E5%8F%B2'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E7%96%AF%E7%99%AB%E4%B8%8E%E6%96%87%E6%98%8E'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/Madness%20and%20Civilization'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=Madness%20and%20Civilization'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=Madness%20and%20Civilization'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E7%96%AF%E7%99%AB%E4%B8%8E%E6%96%87%E6%98%8E'
    }],
      related: ['books/second-sex', 'books/discipline-and-punish', 'books/escape-from-freedom'],
      f: {
      field: ['哲学', '社会学', '医学'],
      form: ['实体书', '电子书'],
      language: ['中文', '法文', '英文']
    }
    },
  {
      id: 'distinction-bourdieu',
      cat: 'books',
      title: '区分：判断力的社会批判',
      alt: 'Distinction: A Social Critique of the Judgement of Taste',
      year: 1979,
      region: '法国',
      status: '已出版',
      image: 'assets/img/books/distinction-bourdieu.jpg',
      summary: '以法国大规模问卷与统计数据证明审美趣味并非天生偏好，而是阶级出身的产物，并起再生产不平等的作用。',
      review: '「文化资本」「惯习」「场域」等概念的实证集大成之作。布尔迪厄用数据说明：喜欢什么音乐、喝什么酒、如何拍照，都能预测你的社会位置，而正是这种看似私人的偏好维持了阶层边界。对「品味平等」的天真假设是致命一击。统计表格多、法语学术文体拗口，建议先读《实践与反思》或导读。',
      pros: ['文化资本理论奠基', '数据支撑扎实', '解释力强'],
      cons: ['阅读门槛高', '法国社会样本局限'],
      tags: ['布尔迪厄', '趣味', '文化资本'],
      scores: [{
      src: '豆瓣',
      val: 8.9,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E5%8C%BA%E5%88%86%EF%BC%9A%E5%88%A4%E6%96%AD%E5%8A%9B%E7%9A%84%E7%A4%BE%E4%BC%9A%E6%89%B9%E5%88%A4'
    }, {
      src: 'Goodreads',
      val: 4.2,
      max: 5,
      url: 'https://www.goodreads.com/search?q=Distinction%3A%20A%20Social%20Critique%20of%20the%20Judgement%20of%20Taste'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E5%8C%BA%E5%88%86%EF%BC%9A%E5%88%A4%E6%96%AD%E5%8A%9B%E7%9A%84%E7%A4%BE%E4%BC%9A%E6%89%B9%E5%88%A4'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E5%8C%BA%E5%88%86'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/Distinction'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=Distinction'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=Distinction'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E5%8C%BA%E5%88%86'
    }],
      related: ['books/political-order-changing-societies', 'books/peasant-life-china', 'books/poverty-and-famines'],
      f: {
      field: ['社会学', '艺术', '经济'],
      form: ['实体书', '电子书'],
      language: ['中文', '法文', '英文']
    }
    },
  {
      id: 'sociological-imagination',
      cat: 'books',
      title: '社会学的想象力',
      alt: 'The Sociological Imagination',
      year: 1959,
      region: '美国',
      status: '已出版',
      image: null,
      summary: '主张社会学的任务是连接「个人困扰」与「公共议题」，并批判当时美国社会学的三种堕落：宏大理论、抽象经验主义与科层气质。',
      review: '一本教人如何思考的书。米尔斯的名句「失业一个人是困扰，失业五千万是议题」概括了社会学想象力的全部：把个人处境放回历史与结构中理解。对学术工业的批评今天读来依然锋利（论文生产、方法崇拜、为资助方服务）。篇幅短、语言有力，是社会学入门的第一推荐。',
      pros: ['思维方法示范', '批判锋利', '篇幅精炼'],
      cons: ['批评多于建设', '案例限于美国社会'],
      tags: ['米尔斯', '社会学想象力', '学术批判'],
      scores: [{
      src: '豆瓣',
      val: 8.9,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E7%A4%BE%E4%BC%9A%E5%AD%A6%E7%9A%84%E6%83%B3%E8%B1%A1%E5%8A%9B'
    }, {
      src: 'Goodreads',
      val: 4.0,
      max: 5,
      url: 'https://www.goodreads.com/search?q=The%20Sociological%20Imagination'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E7%A4%BE%E4%BC%9A%E5%AD%A6%E7%9A%84%E6%83%B3%E8%B1%A1%E5%8A%9B'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E7%A4%BE%E4%BC%9A%E5%AD%A6%E7%9A%84%E6%83%B3%E8%B1%A1%E5%8A%9B'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/The%20Sociological%20Imagination'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=The%20Sociological%20Imagination'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=The%20Sociological%20Imagination'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E7%A4%BE%E4%BC%9A%E5%AD%A6%E7%9A%84%E6%83%B3%E8%B1%A1%E5%8A%9B'
    }],
      related: ['books/amusing-ourselves-to-death', 'books/jiaohun', 'books/political-order-changing-societies'],
      f: {
      field: ['社会学', '思维方法', '政治'],
      form: ['实体书', '电子书'],
      language: ['中文', '英文']
    }
    },
  {
      id: 'second-sex',
      cat: 'books',
      title: '第二性',
      alt: 'Le Deuxième Sexe',
      year: 1949,
      region: '法国',
      status: '已出版',
      image: 'assets/img/books/second-sex.jpg',
      summary: '两卷本论证「女人不是天生的，而是被塑造的」，从生物学、精神分析、历史唯物主义到文学与日常生活，系统拆解「女性」的建构过程。',
      review: '现代女性主义的理论基石。「他者」概念指出：男性把自己设为主体，把女性设为相对于自身的他者，一切不平等由此展开。波伏娃兼用存在主义哲学与大量历史、文学材料，因此第二卷（实际体验）比第一卷更易读也更动人。曾被梵蒂冈列入禁书。郑克鲁译本较新，篇幅大，可分卷慢读。',
      pros: ['理论奠基地位', '材料横跨多学科', '「他者」概念影响巨大'],
      cons: ['篇幅庞大', '部分生物学材料已过时'],
      tags: ['波伏娃', '女性主义', '他者'],
      scores: [{
      src: '豆瓣',
      val: 9.1,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E7%AC%AC%E4%BA%8C%E6%80%A7'
    }, {
      src: 'Goodreads',
      val: 4.2,
      max: 5,
      url: 'https://www.goodreads.com/search?q=Le%20Deuxi%C3%A8me%20Sexe'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E7%AC%AC%E4%BA%8C%E6%80%A7'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E7%AC%AC%E4%BA%8C%E6%80%A7'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/Le%20Deuxi%C3%A8me%20Sexe'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=Le%20Deuxi%C3%A8me%20Sexe'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=Le%20Deuxi%C3%A8me%20Sexe'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E7%AC%AC%E4%BA%8C%E6%80%A7'
    }],
      related: ['books/open-society', 'books/study-of-history-toynbee', 'books/feudal-society-bloch'],
      f: {
      field: ['社会学', '哲学', '历史'],
      form: ['实体书', '电子书'],
      language: ['中文', '法文', '英文']
    }
    },
  {
      id: 'amusing-ourselves-to-death',
      cat: 'books',
      title: '娱乐至死',
      alt: 'Amusing Ourselves to Death',
      year: 1985,
      region: '美国',
      status: '已出版',
      image: null,
      summary: '对比奥威尔与赫胥黎的两种预言，论证电视把公共话语全面娱乐化，使人们「爱上压迫我们的技术」。',
      review: '媒介环境学的代表作，也是被社交媒体时代反复验证的一本书。波兹曼的核心不是反对娱乐，而是指出当政治、宗教、教育、新闻全部以娱乐形式呈现时，公众失去了进行严肃推理的语言形式。批评者认为他把印刷时代过度理想化、对新技术的判断偏于单一；但「形式决定内容」的分析框架至今好用。',
      pros: ['预言性强', '媒介形式分析清晰', '篇幅适中'],
      cons: ['对印刷时代有美化', '技术判断偏单向'],
      tags: ['波兹曼', '媒介环境学', '电视批判'],
      scores: [{
      src: '豆瓣',
      val: 8.5,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E5%A8%B1%E4%B9%90%E8%87%B3%E6%AD%BB'
    }, {
      src: 'Goodreads',
      val: 4.15,
      max: 5,
      url: 'https://www.goodreads.com/search?q=Amusing%20Ourselves%20to%20Death'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E5%A8%B1%E4%B9%90%E8%87%B3%E6%AD%BB'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E5%A8%B1%E4%B9%90%E8%87%B3%E6%AD%BB'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/Amusing%20Ourselves%20to%20Death'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=Amusing%20Ourselves%20to%20Death'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=Amusing%20Ourselves%20to%20Death'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E5%A8%B1%E4%B9%90%E8%87%B3%E6%AD%BB'
    }],
      related: ['books/sociological-imagination', 'books/jiaohun', 'books/political-order-changing-societies'],
      f: {
      field: ['社会学', '思维方法', '政治'],
      form: ['实体书', '电子书'],
      language: ['中文', '英文']
    }
    },
  {
      id: 'consumer-society',
      cat: 'books',
      title: '消费社会',
      alt: 'The Consumer Society: Myths and Structures',
      year: 1970,
      region: '法国',
      status: '已出版',
      image: null,
      summary: '提出消费的对象不是物的使用价值，而是符码与差异系统；丰盛背后是新的社会控制与劳动再生产。',
      review: '把消费从「满足需求」重新定义为「符号系统内的位置竞争」，这一转向影响了后来的品牌研究、亚文化研究与媒介理论。鲍德里亚的语言高度抽象、概念密集，读来费力；且其「消费社会总体化」的判断被批评为缺乏经验证据、过于宿命。可与桑塔格、布尔迪厄对读以平衡。',
      pros: ['符号消费理论开创', '概念密度高', '影响品牌与媒介研究'],
      cons: ['论证缺乏经验支撑', '行文晦涩'],
      tags: ['鲍德里亚', '符号价值', '丰盛社会'],
      scores: [{
      src: '豆瓣',
      val: 8.5,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E6%B6%88%E8%B4%B9%E7%A4%BE%E4%BC%9A'
    }, {
      src: 'Goodreads',
      val: 3.9,
      max: 5,
      url: 'https://www.goodreads.com/search?q=The%20Consumer%20Society%3A%20Myths%20and%20Structures'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E6%B6%88%E8%B4%B9%E7%A4%BE%E4%BC%9A'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E6%B6%88%E8%B4%B9%E7%A4%BE%E4%BC%9A'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/The%20Consumer%20Society'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=The%20Consumer%20Society'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=The%20Consumer%20Society'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E6%B6%88%E8%B4%B9%E7%A4%BE%E4%BC%9A'
    }],
      related: ['books/political-order-changing-societies', 'books/capital-marx', 'books/peasant-life-china'],
      f: {
      field: ['社会学', '经济', '哲学'],
      form: ['实体书', '电子书'],
      language: ['中文', '法文', '英文']
    }
    },
  {
      id: 'one-dimensional-man',
      cat: 'books',
      title: '单向度的人：发达工业社会意识形态研究',
      alt: 'One-Dimensional Man',
      year: 1964,
      region: '德国',
      status: '已出版',
      image: null,
      summary: '论证发达工业社会通过满足虚假需求实现无恐怖整合，使人丧失否定与超越的维度，成为单向度的存在。',
      review: '1960年代学生运动的理论圣经。马尔库塞的洞见是：压迫不再表现为匮乏，而表现为舒适——当消费不断被制造出来，批判的想象力就被消解了。这一分析在算法推荐与消费信贷时代格外贴切。风格是法兰克福学派式的哲学独白，缺乏经验论证，概念跳跃，需耐心；可与波兹曼对照阅读。',
      pros: ['对舒适型控制的洞察', '影响社会运动', '哲学深度高'],
      cons: ['缺乏经验论证', '文风晦涩'],
      tags: ['马尔库塞', '法兰克福学派', '虚假需求'],
      scores: [{
      src: '豆瓣',
      val: 8.4,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E5%8D%95%E5%90%91%E5%BA%A6%E7%9A%84%E4%BA%BA%EF%BC%9A%E5%8F%91%E8%BE%BE%E5%B7%A5%E4%B8%9A%E7%A4%BE%E4%BC%9A%E6%84%8F%E8%AF%86%E5%BD%A2%E6%80%81%E7%A0%94%E7%A9%B6'
    }, {
      src: 'Goodreads',
      val: 3.95,
      max: 5,
      url: 'https://www.goodreads.com/search?q=One-Dimensional%20Man'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E5%8D%95%E5%90%91%E5%BA%A6%E7%9A%84%E4%BA%BA%EF%BC%9A%E5%8F%91%E8%BE%BE%E5%B7%A5%E4%B8%9A%E7%A4%BE%E4%BC%9A%E6%84%8F%E8%AF%86%E5%BD%A2%E6%80%81%E7%A0%94%E7%A9%B6'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E5%8D%95%E5%90%91%E5%BA%A6%E7%9A%84%E4%BA%BA'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/One-Dimensional%20Man'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=One-Dimensional%20Man'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=One-Dimensional%20Man'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E5%8D%95%E5%90%91%E5%BA%A6%E7%9A%84%E4%BA%BA'
    }],
      related: ['books/discipline-and-punish', 'books/du-tongjian-lun', 'books/jiaohun'],
      f: {
      field: ['哲学', '政治', '社会学'],
      form: ['实体书', '电子书'],
      language: ['中文', '德文', '英文']
    }
    },
  {
      id: 'escape-from-freedom',
      cat: 'books',
      title: '逃避自由',
      alt: 'Escape from Freedom',
      year: 1941,
      region: '德国',
      status: '已出版',
      image: null,
      summary: '解释现代人获得自由后为何反而投向权威：孤独与无力感驱使人们通过臣服、破坏或机械顺从来逃避自由。',
      review: '精神分析与社会理论的结合典范。弗洛姆追问：为什么一个摆脱了传统束缚的现代人，会主动交出选择权？他的答案对理解民粹动员、职场依附与社交媒体的从众心理仍然有效。相比《爱的艺术》，本书更有历史厚度（宗教改革、资本主义兴起、纳粹心理基础）。孙恺详译本通行。',
      pros: ['心理机制解释有力', '历史分析深入', '当代适用性强'],
      cons: ['精神分析前提需接受', '概括偏整体化'],
      tags: ['弗洛姆', '权威人格', '社会心理'],
      scores: [{
      src: '豆瓣',
      val: 8.8,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E9%80%83%E9%81%BF%E8%87%AA%E7%94%B1'
    }, {
      src: 'Goodreads',
      val: 4.15,
      max: 5,
      url: 'https://www.goodreads.com/search?q=Escape%20from%20Freedom'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E9%80%83%E9%81%BF%E8%87%AA%E7%94%B1'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E9%80%83%E9%81%BF%E8%87%AA%E7%94%B1'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/Escape%20from%20Freedom'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=Escape%20from%20Freedom'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=Escape%20from%20Freedom'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E9%80%83%E9%81%BF%E8%87%AA%E7%94%B1'
    }],
      related: ['books/crime-punishment', 'books/world-as-will', 'books/second-sex'],
      f: {
      field: ['心理', '哲学', '社会学'],
      form: ['实体书', '电子书'],
      language: ['中文', '德文', '英文']
    }
    },
  {
      id: 'art-of-loving',
      cat: 'books',
      title: '爱的艺术',
      alt: 'The Art of Loving',
      year: 1956,
      region: '德国',
      status: '已出版',
      image: null,
      summary: '主张爱是一种需要学习与实践的能力而非运气或激情，分析母爱、性爱、自爱、神爱，以及资本主义社会对爱的商品化。',
      review: '薄薄一本却常读常新。弗洛姆反对「找到对的人就自然幸福」的浪漫迷思，指出爱包含关心、责任、尊重与了解四项要素，是需要纪律、专注与耐心的实践。他对「爱情市场」的批判（把自己包装成有交换价值的商品）在交友软件时代几乎是对现状的描述。李健鸣译本通行。',
      pros: ['破除浪漫迷思', '结构清晰', '实践导向'],
      cons: ['论述带理想色彩', '精神分析前提需接受'],
      tags: ['弗洛姆', '爱的能力', '亲密关系'],
      scores: [{
      src: '豆瓣',
      val: 8.7,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E7%88%B1%E7%9A%84%E8%89%BA%E6%9C%AF'
    }, {
      src: 'Goodreads',
      val: 4.05,
      max: 5,
      url: 'https://www.goodreads.com/search?q=The%20Art%20of%20Loving'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E7%88%B1%E7%9A%84%E8%89%BA%E6%9C%AF'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E7%88%B1%E7%9A%84%E8%89%BA%E6%9C%AF'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/The%20Art%20of%20Loving'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=The%20Art%20of%20Loving'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=The%20Art%20of%20Loving'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E7%88%B1%E7%9A%84%E8%89%BA%E6%9C%AF'
    }],
      related: ['books/nicomachean-ethics', 'books/tao-te-ching', 'books/crime-punishment'],
      f: {
      field: ['心理', '自我提升', '哲学'],
      form: ['实体书', '电子书'],
      language: ['中文', '德文', '英文']
    }
    },
  {
      id: 'franklin-autobiography',
      cat: 'books',
      title: '富兰克林自传',
      alt: 'The Autobiography of Benjamin Franklin',
      year: 1791,
      region: '美国',
      status: '已出版',
      image: null,
      summary: '从波士顿蜡烛匠之子到印刷商、科学家、外交家的自述，附著名的十三项美德自我修炼表与逐日记录法。',
      review: '美国自助文化的源头文本，也是最早被翻译成中文的西方自传之一。它的价值不在文采而在方法：富兰克林把品格当作工程项目，列出美德清单、每周专攻一项、用表格打勾记录失败，这套做法今天仍被各类习惯追踪应用沿用。自我形象有精心经营之处，但正是这种「自我塑造」本身值得研究。',
      pros: ['自我提升方法具体', '美国精神原型', '篇幅短'],
      cons: ['自我美化明显', '叙事止于1757年（未完成）'],
      tags: ['富兰克林', '美德清单', '自传'],
      scores: [{
      src: '豆瓣',
      val: 8.6,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E5%AF%8C%E5%85%B0%E5%85%8B%E6%9E%97%E8%87%AA%E4%BC%A0'
    }, {
      src: 'Goodreads',
      val: 3.9,
      max: 5,
      url: 'https://www.goodreads.com/search?q=The%20Autobiography%20of%20Benjamin%20Franklin'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E5%AF%8C%E5%85%B0%E5%85%8B%E6%9E%97%E8%87%AA%E4%BC%A0'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E5%AF%8C%E5%85%B0%E5%85%8B%E6%9E%97%E8%87%AA%E4%BC%A0'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/The%20Autobiography%20of%20Benjamin%20Franklin'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=The%20Autobiography%20of%20Benjamin%20Franklin'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=The%20Autobiography%20of%20Benjamin%20Franklin'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E5%AF%8C%E5%85%B0%E5%85%8B%E6%9E%97%E8%87%AA%E4%BC%A0'
    }],
      related: ['books/hiroshima-hersey', 'books/confessions-augustine', 'books/shiji'],
      f: {
      field: ['传记', '自我提升', '历史'],
      form: ['实体书', '电子书'],
      language: ['中文', '英文']
    }
    },
  {
      id: 'biography-of-su-dongpo',
      cat: 'books',
      title: '苏东坡传',
      alt: 'The Gay Genius: The Life and Times of Su Tungpo',
      year: 1947,
      region: '美国',
      status: '已出版',
      image: null,
      summary: '以英文写就的苏轼传记，覆盖其诗文书画、仕途贬谪、佛道修养与生活情趣，塑造「快乐天才」形象。',
      review: '林语堂用英语世界能理解的方式介绍一位中国文人，因此兼具传记与文化翻译的双重功能。它的长处是情趣与视野：把苏轼写成懂吃、懂酒、懂水利、懂禅的完整生活家；短处是史料处理偏文学化，对王安石变法等政治议题的立场过于鲜明（近乎反感）。张振玉译本通行。作为苏轼入门极佳，作为史学依据需补专业研究。',
      pros: ['人物形象生动', '文化翻译价值', '可读性强'],
      cons: ['史料处理偏文学化', '政治立场鲜明'],
      tags: ['林语堂', '苏轼', '文人传记'],
      scores: [{
      src: '豆瓣',
      val: 8.6,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E8%8B%8F%E4%B8%9C%E5%9D%A1%E4%BC%A0'
    }, {
      src: 'Goodreads',
      val: 4.1,
      max: 5,
      url: 'https://www.goodreads.com/search?q=The%20Gay%20Genius%3A%20The%20Life%20and%20Times%20of%20Su%20Tungpo'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E8%8B%8F%E4%B8%9C%E5%9D%A1%E4%BC%A0'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E8%8B%8F%E4%B8%9C%E5%9D%A1%E4%BC%A0'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/The%20Gay%20Genius'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=The%20Gay%20Genius'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=The%20Gay%20Genius'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E8%8B%8F%E4%B8%9C%E5%9D%A1%E4%BC%A0'
    }],
      related: ['books/deng-xiaoping-era', 'books/li-hongzhang', 'books/shiji'],
      f: {
      field: ['传记', '文学理论', '中国史'],
      form: ['实体书', '电子书'],
      language: ['中文', '英文']
    }
    },
  {
      id: 'li-hongzhang',
      cat: 'books',
      title: '李鸿章传',
      alt: '',
      year: 1901,
      region: '中国',
      status: '已出版',
      image: null,
      summary: '李鸿章逝世当年写就的传记兼史论，评其一生功过，并借以检讨晚清政局与「时势造英雄」的命题。',
      review: '梁启超的名言「吾敬李鸿章之才，吾惜李鸿章之识，吾悲李鸿章之遇」概括全书基调。它的独特在于写作时间——传主刚死、政局未定，因此兼具新闻时效与史论抱负。梁启超提出「不以成败论英雄，而以是否尽其才论」的评价标准，并对晚清士大夫的认知局限有深刻批评。文白夹杂，篇幅短，一两晚可读完。',
      pros: ['即时史论', '评价标准有创见', '文笔雄健'],
      cons: ['材料受时间限制', '带论战色彩'],
      tags: ['梁启超', '晚清', '人物评价'],
      scores: [{
      src: '豆瓣',
      val: 8.7,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E6%9D%8E%E9%B8%BF%E7%AB%A0%E4%BC%A0'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E6%9D%8E%E9%B8%BF%E7%AB%A0%E4%BC%A0'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E6%9D%8E%E9%B8%BF%E7%AB%A0%E4%BC%A0'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/%E6%9D%8E%E9%B8%BF%E7%AB%A0%E4%BC%A0'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=%E6%9D%8E%E9%B8%BF%E7%AB%A0%E4%BC%A0'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=%E6%9D%8E%E9%B8%BF%E7%AB%A0%E4%BC%A0'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E6%9D%8E%E9%B8%BF%E7%AB%A0%E4%BC%A0'
    }],
      related: ['books/deng-xiaoping-era', 'books/zizhi-tongjian', 'books/tianchao-bengkui'],
      f: {
      field: ['传记', '中国史', '政治'],
      form: ['实体书', '电子书'],
      language: ['中文']
    }
    },
  {
      id: 'american-prometheus',
      cat: 'books',
      title: '奥本海默传：美国的普罗米修斯',
      alt: 'American Prometheus: The Triumph and Tragedy of J. Robert Oppenheimer',
      year: 2005,
      region: '美国',
      status: '已出版',
      image: null,
      summary: '普利策奖传记，从曼哈顿计划到1954年安全听证会与晚年，重建奥本海默的科学成就、政治立场与悲剧命运。',
      review: '两位作者耗时二十五年、访谈上百人、查阅大量FBI档案，因此对1954年听证会的还原（如何被政治程序摧毁）具有决定性。它同时是一部冷战美国知识分子史：忠诚审查、核伦理、科学与国家的紧张关系。篇幅近千页但叙事紧凑，电影上映后中译本重新流行。可与《广岛》并读。',
      pros: ['档案与访谈规模空前', '听证会还原细致', '冷战史价值高'],
      cons: ['篇幅庞大', '对私人生活着墨多'],
      tags: ['奥本海默', '曼哈顿计划', '冷战'],
      scores: [{
      src: '豆瓣',
      val: 9.0,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E5%A5%A5%E6%9C%AC%E6%B5%B7%E9%BB%98%E4%BC%A0%EF%BC%9A%E7%BE%8E%E5%9B%BD%E7%9A%84%E6%99%AE%E7%BD%97%E7%B1%B3%E4%BF%AE%E6%96%AF'
    }, {
      src: 'Goodreads',
      val: 4.3,
      max: 5,
      url: 'https://www.goodreads.com/search?q=American%20Prometheus%3A%20The%20Triumph%20and%20Tragedy%20of%20J.%20Robert%20Oppenheimer'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E5%A5%A5%E6%9C%AC%E6%B5%B7%E9%BB%98%E4%BC%A0%EF%BC%9A%E7%BE%8E%E5%9B%BD%E7%9A%84%E6%99%AE%E7%BD%97%E7%B1%B3%E4%BF%AE%E6%96%AF'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E5%A5%A5%E6%9C%AC%E6%B5%B7%E9%BB%98%E4%BC%A0'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/American%20Prometheus'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=American%20Prometheus'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=American%20Prometheus'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E5%A5%A5%E6%9C%AC%E6%B5%B7%E9%BB%98%E4%BC%A0'
    }],
      related: ['books/deng-xiaoping-era', 'books/einstein-biography', 'books/li-hongzhang'],
      f: {
      field: ['传记', '科学史', '政治'],
      form: ['实体书', '电子书'],
      language: ['中文', '英文']
    }
    },
  {
      id: 'shoe-dog',
      cat: 'books',
      title: '鞋狗：耐克创始人自传',
      alt: 'Shoe Dog: A Memoir by the Creator of Nike',
      year: 2016,
      region: '美国',
      status: '已出版',
      image: null,
      summary: '从1962年带50美元去日本代理鬼冢虎鞋，到1980年耐克上市，记录现金流危机、伙伴反目与品牌建立。',
      review: '商业自传中少见的诚实之作：奈特几乎不写成功学，而写长达十八年的资金链紧绷、银行拒贷、供应商背刺、合伙人分裂与自我怀疑。因此它对创业者的参考价值高于多数管理书——你能看到一家伟大公司在成名前有多接近破产。文字流畅、情节性强，缺点是后期（品牌营销）处理仓促。',
      pros: ['真实呈现资金危机', '叙事流畅', '对创业者极有参照'],
      cons: ['后期内容仓促', '回避部分争议'],
      tags: ['奈特', '耐克', '创业'],
      scores: [{
      src: '豆瓣',
      val: 9.1,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E9%9E%8B%E7%8B%97%EF%BC%9A%E8%80%90%E5%85%8B%E5%88%9B%E5%A7%8B%E4%BA%BA%E8%87%AA%E4%BC%A0'
    }, {
      src: 'Goodreads',
      val: 4.5,
      max: 5,
      url: 'https://www.goodreads.com/search?q=Shoe%20Dog%3A%20A%20Memoir%20by%20the%20Creator%20of%20Nike'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E9%9E%8B%E7%8B%97%EF%BC%9A%E8%80%90%E5%85%8B%E5%88%9B%E5%A7%8B%E4%BA%BA%E8%87%AA%E4%BC%A0'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E9%9E%8B%E7%8B%97'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/Shoe%20Dog'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=Shoe%20Dog'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=Shoe%20Dog'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E9%9E%8B%E7%8B%97'
    }],
      related: ['books/steve-jobs-biography', 'books/zero-to-one', 'books/lean-startup'],
      f: {
      field: ['传记', '商业', '创业'],
      form: ['实体书', '电子书'],
      language: ['中文', '英文']
    }
    },
  {
      id: 'country-driving',
      cat: 'books',
      title: '寻路中国：从乡村到工厂',
      alt: 'Country Driving: A Journey Through China from Farm to Factory',
      year: 2010,
      region: '美国',
      status: '已出版',
      image: 'assets/img/books/country-driving.jpg',
      summary: '三段旅程：驾车沿长城穿越北方乡村、跟随浙江丽水年轻创业者办厂、在四川农村记录魏家与村干部的日常。',
      review: '何伟的看家本领是长期蹲守与细节记忆：他不写宏大论断，而是让读者通过一个农民考驾照、一个胸罩厂招工人、一个村支书选举的具体经验，理解中国转型的肌理。写作克制、无道德优越感，因此可信度极高。作为了解2000年代中国基层的非虚构文本，与《江城》《奇石》构成系列。',
      pros: ['细节扎实', '视角平视不评判', '结构清晰'],
      cons: ['非系统性社会分析', '时代背景已变化'],
      tags: ['何伟', '非虚构', '中国乡村'],
      scores: [{
      src: '豆瓣',
      val: 8.8,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E5%AF%BB%E8%B7%AF%E4%B8%AD%E5%9B%BD%EF%BC%9A%E4%BB%8E%E4%B9%A1%E6%9D%91%E5%88%B0%E5%B7%A5%E5%8E%82'
    }, {
      src: 'Goodreads',
      val: 4.2,
      max: 5,
      url: 'https://www.goodreads.com/search?q=Country%20Driving%3A%20A%20Journey%20Through%20China%20from%20Farm%20to%20Factory'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E5%AF%BB%E8%B7%AF%E4%B8%AD%E5%9B%BD%EF%BC%9A%E4%BB%8E%E4%B9%A1%E6%9D%91%E5%88%B0%E5%B7%A5%E5%8E%82'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E5%AF%BB%E8%B7%AF%E4%B8%AD%E5%9B%BD'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/Country%20Driving'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=Country%20Driving'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=Country%20Driving'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E5%AF%BB%E8%B7%AF%E4%B8%AD%E5%9B%BD'
    }],
      related: ['books/rural-china', 'books/jiaohun', 'books/peasant-life-china'],
      f: {
      field: ['游记', '中国史', '社会学'],
      form: ['实体书', '电子书'],
      language: ['中文', '英文']
    }
    },
  {
      id: 'glory-and-dream',
      cat: 'books',
      title: '光荣与梦想：1932—1972年美国社会实录',
      alt: 'The Glory and the Dream: A Narrative History of America, 1932-1972',
      year: 1974,
      region: '美国',
      status: '已出版',
      image: null,
      summary: '以新闻笔法记录大萧条、新政、二战、麦卡锡时代、民权运动与越战四十年美国社会的集体经验。',
      review: '中文世界几代人的美国现代史启蒙书。曼彻斯特的方法是「社会实录」：不写决策高层，而写普通人的衣食住行、流行歌曲、电视内容与街头情绪，同时穿插政治事件，使读者获得一种沉浸式的时代感。缺点是缺乏分析框架、以叙事代替解释，读完需要补学术性美国史。四册本，适合长期慢读。',
      pros: ['社会生活细节丰富', '叙事沉浸', '时代覆盖完整'],
      cons: ['缺乏分析框架', '篇幅长'],
      tags: ['曼彻斯特', '美国社会史', '新闻史学'],
      scores: [{
      src: '豆瓣',
      val: 9.1,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E5%85%89%E8%8D%A3%E4%B8%8E%E6%A2%A6%E6%83%B3%EF%BC%9A1932%E2%80%941972%E5%B9%B4%E7%BE%8E%E5%9B%BD%E7%A4%BE%E4%BC%9A%E5%AE%9E%E5%BD%95'
    }, {
      src: 'Goodreads',
      val: 4.3,
      max: 5,
      url: 'https://www.goodreads.com/search?q=The%20Glory%20and%20the%20Dream%3A%20A%20Narrative%20History%20of%20America%2C%201932-1972'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E5%85%89%E8%8D%A3%E4%B8%8E%E6%A2%A6%E6%83%B3%EF%BC%9A1932%E2%80%941972%E5%B9%B4%E7%BE%8E%E5%9B%BD%E7%A4%BE%E4%BC%9A%E5%AE%9E%E5%BD%95'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E5%85%89%E8%8D%A3%E4%B8%8E%E6%A2%A6%E6%83%B3'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/The%20Glory%20and%20the%20Dream'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=The%20Glory%20and%20the%20Dream'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=The%20Glory%20and%20the%20Dream'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E5%85%89%E8%8D%A3%E4%B8%8E%E6%A2%A6%E6%83%B3'
    }],
      related: ['books/feudal-society-bloch', 'books/music-in-western-civilization', 'books/cambridge-history-china'],
      f: {
      field: ['世界史', '历史', '社会学'],
      form: ['实体书', '电子书'],
      language: ['中文', '英文']
    }
    },
  {
      id: 'secondhand-time',
      cat: 'books',
      title: '二手时间：口述苏联解体后的众生',
      alt: 'Secondhand Time: Living in the Ruins of the Soviet Union',
      year: 2013,
      region: '白俄罗斯',
      status: '已出版',
      image: null,
      summary: '以数百段口述记录苏联解体前后普通人的记忆：理想幻灭、贫穷、民族冲突、对斯大林时代的复杂乡愁。',
      review: '2015年诺贝尔文学奖得主代表作。阿列克谢耶维奇发明了「复调纪实」文体：不做评论，只把普通人的声音并置，让互相矛盾的记忆自己碰撞。因此读者能同时听到受害者的痛苦与对旧秩序的怀念，这是任何单一叙事都无法提供的复杂。阅读体验沉重，需分段读。与《切尔诺贝利的回忆》《我是女兵，也是女人》同系列。',
      pros: ['口述复调文体独特', '记忆复杂性呈现充分', '文学与史料双重价值'],
      cons: ['阅读体验沉重', '结构松散'],
      tags: ['阿列克谢耶维奇', '苏联解体', '口述史'],
      scores: [{
      src: '豆瓣',
      val: 8.9,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E4%BA%8C%E6%89%8B%E6%97%B6%E9%97%B4%EF%BC%9A%E5%8F%A3%E8%BF%B0%E8%8B%8F%E8%81%94%E8%A7%A3%E4%BD%93%E5%90%8E%E7%9A%84%E4%BC%97%E7%94%9F'
    }, {
      src: 'Goodreads',
      val: 4.3,
      max: 5,
      url: 'https://www.goodreads.com/search?q=Secondhand%20Time%3A%20Living%20in%20the%20Ruins%20of%20the%20Soviet%20Union'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E4%BA%8C%E6%89%8B%E6%97%B6%E9%97%B4%EF%BC%9A%E5%8F%A3%E8%BF%B0%E8%8B%8F%E8%81%94%E8%A7%A3%E4%BD%93%E5%90%8E%E7%9A%84%E4%BC%97%E7%94%9F'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E4%BA%8C%E6%89%8B%E6%97%B6%E9%97%B4'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/Secondhand%20Time'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=Secondhand%20Time'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=Secondhand%20Time'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E4%BA%8C%E6%89%8B%E6%97%B6%E9%97%B4'
    }],
      related: ['books/clash-of-civilizations', 'books/tianchao-bengkui', 'books/jiaohun'],
      f: {
      field: ['世界史', '政治', '社会学'],
      form: ['实体书', '电子书'],
      language: ['中文', '俄文', '英文']
    }
    },
  {
      id: 'chernobyl-prayer',
      cat: 'books',
      title: '切尔诺贝利的回忆：核灾难口述史',
      alt: 'Voices from Chernobyl',
      year: 1997,
      region: '白俄罗斯',
      status: '已出版',
      image: 'assets/img/books/chernobyl-prayer.jpg',
      summary: '采访消防员遗孀、清理人、农民、医生与官员，记录1986年核事故中人的感受、谎言与身体经验。',
      review: '关于技术灾难最重要的人文文本之一。它不讲反应堆原理，而讲看不见的辐射如何改变人与土地、语言与信任的关系：消防员妻子描述丈夫身体在眼前的溶解，被强制迁离的农民偷偷回到污染区种地。阿列克谢耶维奇由此确立其口述方法。与《二手时间》对照可看清苏联晚期到解体的完整心理轨迹。',
      pros: ['人的经验无可替代', '对谎言机制的揭示', '文学性强'],
      cons: ['内容压抑', '缺乏技术层面说明'],
      tags: ['阿列克谢耶维奇', '核事故', '口述史'],
      scores: [{
      src: '豆瓣',
      val: 8.9,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E5%88%87%E5%B0%94%E8%AF%BA%E8%B4%9D%E5%88%A9%E7%9A%84%E5%9B%9E%E5%BF%86%EF%BC%9A%E6%A0%B8%E7%81%BE%E9%9A%BE%E5%8F%A3%E8%BF%B0%E5%8F%B2'
    }, {
      src: 'Goodreads',
      val: 4.3,
      max: 5,
      url: 'https://www.goodreads.com/search?q=Voices%20from%20Chernobyl'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E5%88%87%E5%B0%94%E8%AF%BA%E8%B4%9D%E5%88%A9%E7%9A%84%E5%9B%9E%E5%BF%86%EF%BC%9A%E6%A0%B8%E7%81%BE%E9%9A%BE%E5%8F%A3%E8%BF%B0%E5%8F%B2'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E5%88%87%E5%B0%94%E8%AF%BA%E8%B4%9D%E5%88%A9%E7%9A%84%E5%9B%9E%E5%BF%86'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/Voices%20from%20Chernobyl'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=Voices%20from%20Chernobyl'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=Voices%20from%20Chernobyl'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E5%88%87%E5%B0%94%E8%AF%BA%E8%B4%9D%E5%88%A9%E7%9A%84%E5%9B%9E%E5%BF%86'
    }],
      related: ['books/sapiens', 'books/feudal-society-bloch', 'books/glory-and-dream'],
      f: {
      field: ['世界史', '科普', '社会学'],
      form: ['实体书', '电子书'],
      language: ['中文', '俄文', '英文']
    }
    },
  {
      id: 'path-of-beauty',
      cat: 'books',
      title: '美的历程',
      alt: 'The Path of Beauty',
      year: 1981,
      region: '中国',
      status: '已出版',
      image: 'assets/img/books/path-of-beauty.jpg',
      summary: '从龙飞凤舞的远古图腾、青铜饕餮、先秦理性、楚汉浪漫，到魏晋风度、盛唐之音、宋元山水与明清市民文艺，勾勒中国审美意识演变。',
      review: '1980年代的「美学热」代表，影响整整一代中国读者的审美观念。李泽厚的方法是把艺术风格与社会结构、时代精神挂钩，因此每个朝代都有鲜明概括（「有意味的形式」「儒道互补」「盛唐之音」）。概括过于漂亮也带来简化风险，部分论断被后续研究质疑；但作为审美史入门与写作范例，至今难有替代。',
      pros: ['概括力强', '文笔优美', '影响一代读者'],
      cons: ['论断偏概括', '部分观点已受质疑'],
      tags: ['李泽厚', '中国美学', '审美史'],
      scores: [{
      src: '豆瓣',
      val: 8.9,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E7%BE%8E%E7%9A%84%E5%8E%86%E7%A8%8B'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E7%BE%8E%E7%9A%84%E5%8E%86%E7%A8%8B'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E7%BE%8E%E7%9A%84%E5%8E%86%E7%A8%8B'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/The%20Path%20of%20Beauty'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=The%20Path%20of%20Beauty'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=The%20Path%20of%20Beauty'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E7%BE%8E%E7%9A%84%E5%8E%86%E7%A8%8B'
    }],
      related: ['books/chinese-philosophy-short-history', 'books/du-tongjian-lun', 'books/story-of-civilization'],
      f: {
      field: ['艺术', '哲学', '中国史'],
      form: ['实体书', '电子书'],
      language: ['中文']
    }
    },
  {
      id: 'film-art',
      cat: 'books',
      title: '电影艺术：形式与风格',
      alt: 'Film Art: An Introduction',
      year: 1979,
      region: '美国',
      status: '已出版',
      image: 'assets/img/books/film-art.jpg',
      summary: '系统讲解电影的形式系统：剪辑、场面调度、摄影、声音、叙事结构与风格史，配大量分镜与剧照分析。',
      review: '全球使用最广的电影学教材，也是把「看电影」变成「分析电影」的最佳工具。它的立场是形式主义：强调导演如何通过镜头选择与组合创造意义，而非依赖主题解读或作者八卦。图示丰富、术语清晰，读完再看片会有完全不同的注意力分配。缺点是理论史与产业史部分较薄，需另补。',
      pros: ['形式分析工具完整', '图示丰富', '术语清晰'],
      cons: ['理论与产业史较薄', '教材体例偏厚'],
      tags: ['波德维尔', '电影形式', '教材'],
      scores: [{
      src: '豆瓣',
      val: 9.2,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E7%94%B5%E5%BD%B1%E8%89%BA%E6%9C%AF%EF%BC%9A%E5%BD%A2%E5%BC%8F%E4%B8%8E%E9%A3%8E%E6%A0%BC'
    }, {
      src: 'Goodreads',
      val: 4.1,
      max: 5,
      url: 'https://www.goodreads.com/search?q=Film%20Art%3A%20An%20Introduction'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E7%94%B5%E5%BD%B1%E8%89%BA%E6%9C%AF%EF%BC%9A%E5%BD%A2%E5%BC%8F%E4%B8%8E%E9%A3%8E%E6%A0%BC'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E7%94%B5%E5%BD%B1%E8%89%BA%E6%9C%AF'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/Film%20Art'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=Film%20Art'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=Film%20Art'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E7%94%B5%E5%BD%B1%E8%89%BA%E6%9C%AF'
    }],
      related: ['books/understanding-movies', 'books/art-story-gombrich', 'books/music-in-western-civilization'],
      f: {
      field: ['艺术', '思维方法'],
      form: ['教科书', '电子书'],
      language: ['中文', '英文']
    }
    },
  {
      id: 'understanding-movies',
      cat: 'books',
      title: '认识电影',
      alt: 'Understanding Movies',
      year: 1973,
      region: '美国',
      status: '已出版',
      image: 'assets/img/books/understanding-movies.jpg',
      summary: '按摄影、剪辑、声音、表演、戏剧、场面调度、色彩、镜头、意识形态与理论分章讲解电影语言。',
      review: '与《电影艺术》并列为电影入门两大教材，风格更活泼：贾内梯大量使用通俗片例、明星与导演轶事，读来轻松，适合完全零基础者。相对《电影艺术》，它的形式分析严谨度略低，但「意识形态」与「理论」两章提供了后者所缺的社会批评视角。两书择一即可，若求可读性选本书。',
      pros: ['入门友好', '案例通俗', '含意识形态批评'],
      cons: ['形式分析较浅', '部分片例偏旧'],
      tags: ['贾内梯', '电影语言', '入门'],
      scores: [{
      src: '豆瓣',
      val: 8.9,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E8%AE%A4%E8%AF%86%E7%94%B5%E5%BD%B1'
    }, {
      src: 'Goodreads',
      val: 4.0,
      max: 5,
      url: 'https://www.goodreads.com/search?q=Understanding%20Movies'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E8%AE%A4%E8%AF%86%E7%94%B5%E5%BD%B1'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E8%AE%A4%E8%AF%86%E7%94%B5%E5%BD%B1'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/Understanding%20Movies'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=Understanding%20Movies'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=Understanding%20Movies'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E8%AE%A4%E8%AF%86%E7%94%B5%E5%BD%B1'
    }],
      related: ['books/film-art', 'books/art-story-gombrich', 'books/music-in-western-civilization'],
      f: {
      field: ['艺术', '思维方法'],
      form: ['教科书', '电子书'],
      language: ['中文', '英文']
    }
    },

  {
      id: 'language-instinct',
      cat: 'books',
      title: '语言本能',
      alt: 'The Language Instinct',
      year: 1994,
      region: '美国',
      status: '已出版',
      image: null,
      summary: '主张语言是进化而来的本能而非文化发明，系统介绍乔姆斯基普遍语法、语言习得、语言与思维的关系及语言变化。',
      review: '认知科学最好的大众入门之一，平克的强项是把技术性论争（普遍语法、语言与思维、词与规则）写成连贯叙事并配以幽默例子。它对「语言决定思维」的强萨丕尔-沃尔夫假说给出了有力的批评。成书于1994年，此后神经语言学与演化语言学有大量进展，部分论断被质疑，但整体框架仍是最好的起点。',
      pros: ['讲解清晰有趣', '论争脉络完整', '批评语言相对论有力'],
      cons: ['内容需以新研究补充', '乔姆斯基立场单一'],
      tags: ['平克', '普遍语法', '认知科学'],
      scores: [{
      src: '豆瓣',
      val: 8.7,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E8%AF%AD%E8%A8%80%E6%9C%AC%E8%83%BD'
    }, {
      src: 'Goodreads',
      val: 4.0,
      max: 5,
      url: 'https://www.goodreads.com/search?q=The%20Language%20Instinct'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E8%AF%AD%E8%A8%80%E6%9C%AC%E8%83%BD'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E8%AF%AD%E8%A8%80%E6%9C%AC%E8%83%BD'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/The%20Language%20Instinct'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=The%20Language%20Instinct'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=The%20Language%20Instinct'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E8%AF%AD%E8%A8%80%E6%9C%AC%E8%83%BD'
    }],
      related: ['books/godel-escher-bach', 'books/philosophical-investigations', 'books/ci-hai'],
      f: {
      field: ['语言', '科普', '认知科学'],
      form: ['实体书', '电子书'],
      language: ['中文', '英文']
    }
    },
  {
      id: 'janson-history-of-art',
      cat: 'books',
      title: '詹森艺术史',
      alt: 'Janson\'s History of Art: The Western Tradition',
      year: 1962,
      region: '美国',
      status: '已出版',
      image: 'assets/img/books/janson-history-of-art.jpg',
      summary: '从史前洞窟壁画、埃及与希腊罗马，经中世纪、文艺复兴、巴洛克到现代主义，系统梳理西方艺术演变。',
      review: '西方艺术史最经典的教科书，几代艺术系学生的第一本书。优点是体系完整、图版精良、风格分析规范；缺点是长期以「西方正统」为主线，对女性艺术家、非西方传统与当代艺术的处理被多次修订才逐步改善。与贡布里希《艺术的故事》互补：后者重叙事与洞察，本书重结构与知识密度。',
      pros: ['体系完整', '图版精良', '规范的风格分析'],
      cons: ['西方中心', '篇幅与重量惊人'],
      tags: ['詹森', '西方艺术史', '教材'],
      scores: [{
      src: '豆瓣',
      val: 9.0,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E8%A9%B9%E6%A3%AE%E8%89%BA%E6%9C%AF%E5%8F%B2'
    }, {
      src: 'Goodreads',
      val: 3.9,
      max: 5,
      url: 'https://www.goodreads.com/search?q=Janson%27s%20History%20of%20Art%3A%20The%20Western%20Tradition'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E8%A9%B9%E6%A3%AE%E8%89%BA%E6%9C%AF%E5%8F%B2'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E8%A9%B9%E6%A3%AE%E8%89%BA%E6%9C%AF%E5%8F%B2'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/Janson%27s%20History%20of%20Art'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=Janson%27s%20History%20of%20Art'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=Janson%27s%20History%20of%20Art'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E8%A9%B9%E6%A3%AE%E8%89%BA%E6%9C%AF%E5%8F%B2'
    }],
      related: ['books/music-in-western-civilization', 'books/story-of-civilization', 'books/autumn-of-the-middle-ages'],
      f: {
      field: ['艺术', '世界史'],
      form: ['教科书', '画册'],
      language: ['中文', '英文']
    }
    },
  {
      id: 'music-in-western-civilization',
      cat: 'books',
      title: '西方文明中的音乐',
      alt: 'Music in Western Civilization',
      year: 1941,
      region: '美国',
      status: '已出版',
      image: 'assets/img/books/music-in-western-civilization.jpg',
      summary: '把西方音乐从古希腊到20世纪初的发展放进文明史语境，讨论音乐与宗教、哲学、社会结构和审美观念的关系。',
      review: '音乐史写作的里程碑：朗拒绝把音乐当作自律的形式演变，而坚持它与思想史的相互塑造，因此希腊悲剧、中世纪礼拜、启蒙歌剧与浪漫主义交响曲都被放在同一条文明线索上。学术密度高、需要一定音乐基础（不必精通乐理），但读完后听音乐的方式会改变。张洪岛译本经典。',
      pros: ['音乐与思想史结合', '视野宏大', '影响深远'],
      cons: ['门槛较高', '止于20世纪初'],
      tags: ['保罗·亨利·朗', '音乐史', '文明史'],
      scores: [{
      src: '豆瓣',
      val: 9.3,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E8%A5%BF%E6%96%B9%E6%96%87%E6%98%8E%E4%B8%AD%E7%9A%84%E9%9F%B3%E4%B9%90'
    }, {
      src: 'Goodreads',
      val: 4.4,
      max: 5,
      url: 'https://www.goodreads.com/search?q=Music%20in%20Western%20Civilization'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E8%A5%BF%E6%96%B9%E6%96%87%E6%98%8E%E4%B8%AD%E7%9A%84%E9%9F%B3%E4%B9%90'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E8%A5%BF%E6%96%B9%E6%96%87%E6%98%8E%E4%B8%AD%E7%9A%84%E9%9F%B3%E4%B9%90'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/Music%20in%20Western%20Civilization'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=Music%20in%20Western%20Civilization'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=Music%20in%20Western%20Civilization'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E8%A5%BF%E6%96%B9%E6%96%87%E6%98%8E%E4%B8%AD%E7%9A%84%E9%9F%B3%E4%B9%90'
    }],
      related: ['books/autumn-of-the-middle-ages', 'books/art-story-gombrich', 'books/cambridge-history-china'],
      f: {
      field: ['艺术', '世界史', '历史'],
      form: ['实体书', '电子书'],
      language: ['中文', '英文']
    }
    },
  {
      id: 'story-of-civilization',
      cat: 'books',
      title: '世界文明史',
      alt: 'The Story of Civilization',
      year: 1935,
      region: '美国',
      status: '已出版',
      image: 'assets/img/books/story-of-civilization.jpg',
      summary: '十一卷巨著，从《我们东方的遗产》到《拿破仑时代》，逐卷讲述各文明的政治、经济、宗教、哲学、文学与艺术。',
      review: '杜兰特夫妇五十年之功，曾获普利策奖与总统自由勋章。它的价值在于「整体文明」的写法：同一卷内并行讲述制度、思想与艺术，使读者获得文明的整体质感，而非碎片知识。文字优雅、判断自信，也因此带有明显的个人趣味与时代局限，细节须以专业研究校订。可先读单卷（如《希腊的生活》《文艺复兴》）再决定是否通读。',
      pros: ['整体文明视角', '文字优雅', '覆盖极广'],
      cons: ['个人趣味明显', '细节需校订', '卷帙浩繁'],
      tags: ['杜兰特', '文明史', '通史'],
      scores: [{
      src: '豆瓣',
      val: 9.2,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E4%B8%96%E7%95%8C%E6%96%87%E6%98%8E%E5%8F%B2'
    }, {
      src: 'Goodreads',
      val: 4.2,
      max: 5,
      url: 'https://www.goodreads.com/search?q=The%20Story%20of%20Civilization'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E4%B8%96%E7%95%8C%E6%96%87%E6%98%8E%E5%8F%B2'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E4%B8%96%E7%95%8C%E6%96%87%E6%98%8E%E5%8F%B2'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/The%20Story%20of%20Civilization'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=The%20Story%20of%20Civilization'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=The%20Story%20of%20Civilization'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E4%B8%96%E7%95%8C%E6%96%87%E6%98%8E%E5%8F%B2'
    }],
      related: ['books/music-in-western-civilization', 'books/study-of-history-toynbee', 'books/autumn-of-the-middle-ages'],
      f: {
      field: ['世界史', '哲学', '艺术'],
      form: ['实体书', '电子书'],
      language: ['中文', '英文']
    }
    },
  {
      id: 'on-war',
      cat: 'books',
      title: '战争论',
      alt: 'On War / Vom Kriege',
      year: 1832,
      region: '德国',
      status: '已出版',
      image: null,
      summary: '提出「战争是政治通过另一种手段的继续」，系统讨论摩擦、迷雾、重心、防御优势与绝对战争概念。',
      review: '西方军事思想的核心文本，也是最常被误引的书之一（「战争是政治的继续」常被抽离其辩证语境）。克劳塞维茨的价值在于概念工具：摩擦（一切在战争中看似简单的事执行起来都困难重重）、战争迷雾、重心与顶点，这些概念今天仍被用于分析组织与项目管理。书稿未完成，结构松散、论证迂回，商务印书馆王中孚译本通行。',
      pros: ['概念工具持久有效', '战争与政治关系论深刻', '辩证思维示范'],
      cons: ['未完成稿，结构松散', '极难读'],
      tags: ['克劳塞维茨', '摩擦', '战争与政治'],
      scores: [{
      src: '豆瓣',
      val: 8.8,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E6%88%98%E4%BA%89%E8%AE%BA'
    }, {
      src: 'Goodreads',
      val: 3.98,
      max: 5,
      url: 'https://www.goodreads.com/search?q=On%20War%20/%20Vom%20Kriege'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E6%88%98%E4%BA%89%E8%AE%BA'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E6%88%98%E4%BA%89%E8%AE%BA'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/On%20War%20/%20Vom%20Kriege'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=On%20War%20/%20Vom%20Kriege'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=On%20War%20/%20Vom%20Kriege'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E6%88%98%E4%BA%89%E8%AE%BA'
    }],
      related: ['books/du-tongjian-lun', 'books/open-society', 'books/capital-marx'],
      f: {
      field: ['军事', '政治', '哲学'],
      form: ['实体书', '电子书'],
      language: ['中文', '德文', '英文']
    }
    },
  {
      id: 'strategy-indirect-approach',
      cat: 'books',
      title: '战略论：间接路线',
      alt: 'Strategy: The Indirect Approach',
      year: 1929,
      region: '英国',
      status: '已出版',
      image: null,
      summary: '以三十三场战争、两百八十余次战役为样本，论证「间接路线」比正面决战更有效，并区分军事战略与大战略。',
      review: '对克劳塞维茨「决战崇拜」的著名反驳。李德哈特从战史中归纳：胜利通常来自破坏敌人的平衡与心理，而非歼灭其兵力。这一思想影响了装甲兵运用、游击战理论乃至商业竞争策略。方法论上受批评（案例选择服务于结论、对二战德军将领访谈的可靠性存疑），但「间接路线」作为思维模型极具启发性。',
      pros: ['间接路线模型清晰', '战史案例丰富', '影响商业战略'],
      cons: ['案例选择带目的性', '史料可靠性受质疑'],
      tags: ['李德哈特', '间接路线', '大战略'],
      scores: [{
      src: '豆瓣',
      val: 8.8,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E6%88%98%E7%95%A5%E8%AE%BA%EF%BC%9A%E9%97%B4%E6%8E%A5%E8%B7%AF%E7%BA%BF'
    }, {
      src: 'Goodreads',
      val: 4.1,
      max: 5,
      url: 'https://www.goodreads.com/search?q=Strategy%3A%20The%20Indirect%20Approach'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E6%88%98%E7%95%A5%E8%AE%BA%EF%BC%9A%E9%97%B4%E6%8E%A5%E8%B7%AF%E7%BA%BF'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E6%88%98%E7%95%A5%E8%AE%BA'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/Strategy'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=Strategy'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=Strategy'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E6%88%98%E7%95%A5%E8%AE%BA'
    }],
      related: ['books/art-of-war-sunzi', 'books/shiji', 'books/art-story-gombrich'],
      f: {
      field: ['军事', '思维方法', '历史'],
      form: ['实体书', '电子书'],
      language: ['中文', '英文']
    }
    },
  {
      id: 'history-of-warfare',
      cat: 'books',
      title: '战争史',
      alt: 'A History of Warfare',
      year: 1993,
      region: '英国',
      status: '已出版',
      image: null,
      summary: '从石器时代的械斗、马背民族、火药革命到两次大战，主张战争是文化现象而非政治的延伸。',
      review: '直接挑战克劳塞维茨：基根认为战争先于国家与政治，是深植于文化的实践，不同社会对战斗方式、荣誉与杀戮限制的理解截然不同。论证依赖大量战史与人类学材料，视野开阔、可读性高，但「战争是文化」的强命题被批评为证据不足、忽视物质与制度因素。作为军事史通识读物极为出色。',
      pros: ['挑战主流命题', '跨时代视野', '可读性高'],
      cons: ['核心命题论证不足', '对制度因素重视不够'],
      tags: ['基根', '战争文化', '军事史'],
      scores: [{
      src: '豆瓣',
      val: 8.7,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E6%88%98%E4%BA%89%E5%8F%B2'
    }, {
      src: 'Goodreads',
      val: 3.9,
      max: 5,
      url: 'https://www.goodreads.com/search?q=A%20History%20of%20Warfare'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E6%88%98%E4%BA%89%E5%8F%B2'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E6%88%98%E4%BA%89%E5%8F%B2'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/A%20History%20of%20Warfare'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=A%20History%20of%20Warfare'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=A%20History%20of%20Warfare'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E6%88%98%E4%BA%89%E5%8F%B2'
    }],
      related: ['books/herodotus-histories', 'books/tianchao-bengkui', 'books/music-in-western-civilization'],
      f: {
      field: ['军事', '世界史', '人类学'],
      form: ['实体书', '电子书'],
      language: ['中文', '英文']
    }
    },
  {
      id: 'art-of-war-sunzi',
      cat: 'books',
      title: '孙子兵法',
      alt: 'The Art of War',
      year: -500,
      region: '中国',
      status: '已出版',
      image: null,
      summary: '十三篇论述战争准备、谋攻、形势、虚实、军争、九变、行军、地形、火攻与用间，核心是「不战而屈人之兵」。',
      review: '世界上传播最广的军事文本，也是唯一同时被军队、企业与球队引用的两千五百年前的书。它的核心不是战术技巧而是成本思维：战争代价极高，因此最高明的是改变对手的算计，其次是破坏其联盟，最下才是攻城。文本极简，需注释辅助（中华书局《十一家注孙子》或郭化若《孙子今注今译》），否则易流于格言式误读。',
      pros: ['成本与博弈思维深刻', '文本精炼', '跨领域适用'],
      cons: ['过于简略需注释', '易被庸俗化引用'],
      tags: ['孙武', '兵法', '博弈思维'],
      scores: [{
      src: '豆瓣',
      val: 9.0,
      max: 10,
      url: 'https://book.douban.com/subject_search?search_text=%E5%AD%99%E5%AD%90%E5%85%B5%E6%B3%95'
    }, {
      src: 'Goodreads',
      val: 3.95,
      max: 5,
      url: 'https://www.goodreads.com/search?q=The%20Art%20of%20War'
    }],
      links: [{
      kind: '资料',
      label: '豆瓣读书',
      url: 'https://book.douban.com/subject_search?search_text=%E5%AD%99%E5%AD%90%E5%85%B5%E6%B3%95'
    }, {
      kind: '阅读',
      label: '微信读书',
      url: 'https://weread.qq.com/web/search/global?keyword=%E5%AD%99%E5%AD%90%E5%85%B5%E6%B3%95'
    }, {
      kind: '下载',
      label: 'Z-Library',
      url: 'https://zh.z-library.sk/s/The%20Art%20of%20War'
    }, {
      kind: '下载',
      label: 'Anna\'s Archive',
      url: 'https://annas-archive.gl/search?q=The%20Art%20of%20War'
    }, {
      kind: '下载',
      label: 'Library Genesis',
      url: 'https://libgen.rs/search.php?req=The%20Art%20of%20War'
    }, {
      kind: '古籍',
      label: '中国哲学书电子化计划',
      url: 'https://ctext.org/searchbooks.pl?if=gb&searchu=%E5%AD%99%E5%AD%90%E5%85%B5%E6%B3%95'
    }, {
      kind: '购买',
      label: '京东',
      url: 'https://search.jd.com/Search?keyword=%E5%AD%99%E5%AD%90%E5%85%B5%E6%B3%95'
    }],
      related: ['books/on-war', 'books/strategy-indirect-approach', 'books/antifragile'],
      f: {
      field: ['军事', '哲学', '思维方法'],
      form: ['实体书'],
      language: ['中文', '英文']
    }
    }
]);
