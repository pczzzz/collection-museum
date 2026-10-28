/* 音乐 · 专辑 / 单曲 / 原声（只编目元信息，不含任何音频） */
window.DB = window.DB || {};
window.DB.music = (window.DB.music || []).concat([
  {
    id: "beatles-abbey-road", cat: "music", title: "Abbey Road", alt: "披头士 · 阿比路", year: 1969, region: "英国",
    summary: "披头士录音室生涯的实际收官之作。B 面组曲把八个片段缝成一部微型交响，Come Together 与 Here Comes the Sun 成为流行史最常被引用的两首歌。",
    review: "乐队在解散前夕做出的最成熟唱片，制作与和声设计至今是录音教材。适合任何想理解流行乐如何成为艺术形式的人，也是黑胶入门首选。",
    pros: ["旋律密度极高", "B 面组曲结构精妙"], cons: ["部分曲目偏实验"],
    tags: ["The Beatles", "摇滚", "经典"],
    scores: [{ src: "Rate Your Music", val: 4.3, max: 5 }, { src: "AllMusic", val: 5, max: 5 }, { src: "豆瓣音乐", val: 9.6, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=abbey road" },
      { kind: "收听", label: "Spotify 搜索", url: "https://open.spotify.com/search/abbey%20road" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Abbey Road" }
    ],
    related: ["music/beatles-sgt-pepper", "music/pink-floyd-dsotm", "music/beach-boys-pet-sounds"],
    image: "assets/img/music/beatles-abbey-road.jpg",
    f: { form: ["录音室专辑"], genre: ["摇滚", "流行"] }
  },
  {
    id: "beatles-sgt-pepper", cat: "music", title: "Sgt. Pepper's Lonely Hearts Club Band", alt: "披头士 · 佩珀军士", year: 1967, region: "英国",
    summary: "概念专辑范式的奠基作品。披头士化身虚拟乐队，用录音室拼贴、印度乐器与管弦编制把流行唱片变成一场剧场演出。",
    review: "常被列为史上最伟大专辑，意义大于听感。想理解 60 年代迷幻浪潮与录音室作为乐器这一观念，从这里开始最直观。",
    pros: ["开创概念专辑", "录音手法影响深远"], cons: ["现代听感略显年代"],
    tags: ["The Beatles", "迷幻摇滚", "概念专辑"],
    scores: [{ src: "Rate Your Music", val: 4.2, max: 5 }, { src: "AllMusic", val: 5, max: 5 }, { src: "豆瓣音乐", val: 9.4, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=sgt pepper" },
      { kind: "收听", label: "Apple Music 搜索", url: "https://music.apple.com/cn/search?term=sgt+pepper" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Sgt Pepper" }
    ],
    related: ["music/beatles-abbey-road", "music/beach-boys-pet-sounds", "music/pink-floyd-piper"],
    image: "assets/img/music/beatles-sgt-pepper.jpg",
    f: { form: ["录音室专辑"], genre: ["摇滚", "迷幻"] }
  },
  {
    id: "pink-floyd-dsotm", cat: "music", title: "The Dark Side of the Moon", alt: "平克·弗洛伊德 · 月之暗面", year: 1973, region: "英国",
    summary: "以时间、金钱、疯狂与死亡为线索的连续体专辑。Money 的 7/4 拍与 Us and Them 的萨克斯成为前卫摇滚最具辨识度的声音。",
    review: "在公告牌榜单停留超过 900 周，是音响发烧友的永久试音盘。适合安静完整聆听，不适合碎片播放。",
    pros: ["概念完整", "录音品质标杆"], cons: ["需整张聆听才见其妙"],
    tags: ["Pink Floyd", "前卫摇滚", "发烧试音"],
    scores: [{ src: "Rate Your Music", val: 4.2, max: 5 }, { src: "Metacritic", val: 90, max: 100 }, { src: "豆瓣音乐", val: 9.5, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=dark side of the moon" },
      { kind: "收听", label: "网易云搜索", url: "https://music.163.com/#/search/m/?s=Pink Floyd 月之暗面" },
      { kind: "资料", label: "Discogs 搜索", url: "https://www.discogs.com/search/?q=dark side of the moon" }
    ],
    related: ["music/pink-floyd-wish-you-were-here", "music/pink-floyd-the-wall", "music/king-crimson-court"],
    image: "assets/img/music/pink-floyd-dsotm.jpg",
    f: { form: ["录音室专辑"], genre: ["摇滚", "前卫摇滚"] }
  },
  {
    id: "pink-floyd-wish-you-were-here", cat: "music", title: "Wish You Were Here", alt: "平克·弗洛伊德 · 愿你在此", year: 1975, region: "英国",
    summary: "写给缺席的创始成员 Syd Barrett 的挽歌，同时讽刺唱片工业对人的消耗。同名曲的木吉他开场是摇滚史最著名的段落之一。",
    review: "比月之暗面更私人、更悲伤，Shine On You Crazy Diamond 九段结构是前卫摇滚的巅峰写作。适合在深夜完整播放。",
    pros: ["情感浓度高", "长篇结构掌控力惊人"], cons: ["曲目数量少"],
    tags: ["Pink Floyd", "前卫摇滚", "Syd Barrett"],
    scores: [{ src: "Rate Your Music", val: 4.3, max: 5 }, { src: "AllMusic", val: 5, max: 5 }, { src: "豆瓣音乐", val: 9.5, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=wish you were here" },
      { kind: "收听", label: "Spotify 搜索", url: "https://open.spotify.com/search/wish%20you%20were%20here%20pink%20floyd" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Wish You Were Here Pink Floyd" }
    ],
    related: ["music/pink-floyd-dsotm", "music/pink-floyd-the-wall", "music/king-crimson-red"],
    image: "assets/img/music/pink-floyd-wish-you-were-here.jpg",
    f: { form: ["录音室专辑"], genre: ["摇滚", "前卫摇滚"] }
  },
  {
    id: "pink-floyd-the-wall", cat: "music", title: "The Wall", alt: "平克·弗洛伊德 · 迷墙", year: 1979, region: "英国",
    summary: "Roger Waters 主导的摇滚歌剧，讲述一位摇滚明星在创伤与孤立中筑起心墙。Another Brick in the Wall 与 Comfortably Numb 传唱至今。",
    review: "叙事野心与制作规模都是 70 年代的极限，后来被改编为同名电影与巨型现场。适合喜欢概念叙事的听众，也常被用作心理主题讨论素材。",
    pros: ["叙事完整如歌剧", "吉他独奏经典"], cons: ["部分段落戏剧化过度"],
    tags: ["Pink Floyd", "摇滚歌剧", "概念专辑"],
    scores: [{ src: "Rate Your Music", val: 4.1, max: 5 }, { src: "AllMusic", val: 5, max: 5 }, { src: "豆瓣音乐", val: 9.3, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=pink floyd the wall" },
      { kind: "收听", label: "QQ音乐搜索", url: "https://y.qq.com/n/ryqq/search?w=Pink Floyd The Wall" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=The Wall Pink Floyd" }
    ],
    related: ["music/pink-floyd-dsotm", "music/pink-floyd-wish-you-were-here", "music/radiohead-ok-computer"],
    image: "assets/img/music/pink-floyd-the-wall.jpg",
    f: { form: ["录音室专辑"], genre: ["摇滚", "前卫摇滚"] }
  },
  {
    id: "radiohead-ok-computer", cat: "music", title: "OK Computer", alt: "电台司令 · _OK 计算机", year: 1997, region: "英国",
    summary: "用摇滚乐器描绘千禧年前技术焦虑的专辑。Paranoid Android 六分钟三段式、Karma Police 与 No Surprises 定义了 90 年代末的另类声音。",
    review: "普遍被视为 90 年代最重要唱片之一，也是电台司令从吉他乐队转向电子实验的转折点。适合对现代生活疏离感有共鸣的听众。",
    pros: ["歌词预言性强", "编曲层次丰富"], cons: ["情绪整体偏压抑"],
    tags: ["Radiohead", "另类摇滚", "90年代"],
    scores: [{ src: "Rate Your Music", val: 4.2, max: 5 }, { src: "Metacritic", val: 92, max: 100 }, { src: "豆瓣音乐", val: 9.3, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=ok computer" },
      { kind: "收听", label: "网易云搜索", url: "https://music.163.com/#/search/m/?s=Radiohead OK Computer" },
      { kind: "资料", label: "Pitchfork 搜索", url: "https://pitchfork.com/search/?query=ok computer" }
    ],
    related: ["music/radiohead-kid-a", "music/radiohead-in-rainbows", "music/muse-origin-of-symmetry"],
    image: "assets/img/music/radiohead-ok-computer.jpg",
    f: { form: ["录音室专辑"], genre: ["摇滚", "另类"] }
  },
  {
    id: "radiohead-kid-a", cat: "music", title: "Kid A", alt: "电台司令 · 孩子 A", year: 2000, region: "英国",
    summary: "几乎放弃吉他，转向模块化合成器、爵士采样与人声变形。Everything in Its Right Place 与 Idioteque 是电子摇滚融合的分水岭。",
    review: "发行时争议极大，如今被公认为 21 世纪开篇之作。适合愿意接受无主歌结构与冰冷音色的听众，是理解当代另类音乐语法的必修。",
    pros: ["彻底重塑乐队语言", "音色设计前卫"], cons: ["旋律可及性低"],
    tags: ["Radiohead", "电子", "实验摇滚"],
    scores: [{ src: "Rate Your Music", val: 4.1, max: 5 }, { src: "Metacritic", val: 80, max: 100 }, { src: "Pitchfork", val: 10, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=radiohead kid a" },
      { kind: "收听", label: "Spotify 搜索", url: "https://open.spotify.com/search/radiohead%20kid%20a" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Kid A" }
    ],
    related: ["music/radiohead-ok-computer", "music/radiohead-in-rainbows", "music/aphex-twin-saw-ii"],
    image: "assets/img/music/radiohead-kid-a.jpg",
    f: { form: ["录音室专辑"], genre: ["电子", "实验", "另类"] }
  },
  {
    id: "radiohead-in-rainbows", cat: "music", title: "In Rainbows", alt: "电台司令 · 雨中彩虹", year: 2007, region: "英国",
    summary: "以自定价格数字发行震惊业界的专辑，音乐上回到温暖的吉他与律动。Nude 与 Reckoner 是乐队最柔美的作品。",
    review: "兼顾实验与悦耳，是电台司令最容易入门的一张，也常被用作讨论音乐产业发行模式变革的案例。",
    pros: ["旋律与质感平衡", "发行模式开创先例"], cons: ["缺少极端曲目"],
    tags: ["Radiohead", "另类摇滚", "独立发行"],
    scores: [{ src: "Rate Your Music", val: 4.1, max: 5 }, { src: "Metacritic", val: 88, max: 100 }, { src: "Pitchfork", val: 9.3, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=in rainbows" },
      { kind: "收听", label: "Apple Music 搜索", url: "https://music.apple.com/cn/search?term=in+rainbows+radiohead" },
      { kind: "官方", label: "官方站点", url: "https://www.radiohead.com/" }
    ],
    related: ["music/radiohead-ok-computer", "music/radiohead-kid-a", "music/thom-yorke-the-eraser"],
    image: "assets/img/music/radiohead-in-rainbows.jpg",
    f: { form: ["录音室专辑"], genre: ["摇滚", "另类", "电子"] }
  },
  {
    id: "pink-floyd-piper", cat: "music", title: "The Piper at the Gates of Dawn", alt: "平克·弗洛伊德 · 黎明门前的吹笛人", year: 1967, region: "英国",
    summary: "Syd Barrett 主导的迷幻首专，充满童话意象与失谐吉他。Astronomy Domine 与 Interstellar Overdrive 是英伦迷幻的原始样本。",
    review: "与佩珀军士同年发行，代表迷幻的另一条更童稚、更混乱的路径。适合研究 60 年代英国地下音乐与 Barrett 传奇的听众。",
    pros: ["迷幻原创性强", "童谣式想象力"], cons: ["录音粗糙"],
    tags: ["Pink Floyd", "迷幻摇滚", "Syd Barrett"],
    scores: [{ src: "Rate Your Music", val: 4.1, max: 5 }, { src: "AllMusic", val: 4.5, max: 5 }, { src: "豆瓣音乐", val: 9, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=piper at the gates of dawn" },
      { kind: "收听", label: "Spotify 搜索", url: "https://open.spotify.com/search/piper%20at%20the%20gates%20of%20dawn" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=The Piper at the Gates of Dawn" }
    ],
    related: ["music/pink-floyd-dsotm", "music/beatles-sgt-pepper", "music/syd-barrett-the-madcap-laughs"],
    image: "assets/img/music/pink-floyd-piper.jpg",
    f: { form: ["录音室专辑"], genre: ["迷幻", "摇滚"] }
  },
  {
    id: "king-crimson-court", cat: "music", title: "In the Court of the Crimson King", alt: "深红之王 · 深红国王的宫廷", year: 1969, region: "英国",
    summary: "公认的前卫摇滚开山之作。21st Century Schizoid Man 的失真萨克斯与同名曲的 Mellotron 合唱，一次定义了此后五十年的重型实验语法。",
    review: "如果你想知道前卫摇滚从哪里开始，这张就是答案。编曲复杂度与情绪张力兼具，也是采样文化的重要素材库。",
    pros: ["前卫摇滚奠基", "Mellotron 使用教科书级"], cons: ["仅五首曲目"],
    tags: ["King Crimson", "前卫摇滚", "1969"],
    scores: [{ src: "Rate Your Music", val: 4.2, max: 5 }, { src: "AllMusic", val: 5, max: 5 }, { src: "豆瓣音乐", val: 9.3, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=in the court of the crimson king" },
      { kind: "收听", label: "网易云搜索", url: "https://music.163.com/#/search/m/?s=King Crimson 深红国王的宫廷" },
      { kind: "官方", label: "DGM 官方档案", url: "https://www.dgmlive.com/" }
    ],
    related: ["music/king-crimson-red", "music/pink-floyd-dsotm", "music/genesis-selling-england"],
    image: "assets/img/music/king-crimson-court.jpg",
    f: { form: ["录音室专辑"], genre: ["前卫摇滚", "摇滚"] }
  },
  {
    id: "king-crimson-red", cat: "music", title: "Red", alt: "深红之王 · 红", year: 1974, region: "英国",
    summary: "King Crimson 70 年代重型三张的收官，同名器乐曲的复合节拍与失真吉他直接影响了后来的数学摇滚与金属。",
    review: "被无数后摇与金属乐手列为启蒙唱片。适合想听器乐张力而非旋律的听众，Starless 的十分钟推进是乐队最高成就之一。",
    pros: ["器乐张力极强", "影响后世流派深远"], cons: ["无主唱段落偏多"],
    tags: ["King Crimson", "前卫摇滚", "器乐"],
    scores: [{ src: "Rate Your Music", val: 4.3, max: 5 }, { src: "AllMusic", val: 4.5, max: 5 }, { src: "豆瓣音乐", val: 9.4, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=king crimson red" },
      { kind: "收听", label: "Spotify 搜索", url: "https://open.spotify.com/search/king%20crimson%20red" },
      { kind: "官方", label: "DGM 官方档案", url: "https://www.dgmlive.com/" }
    ],
    related: ["music/king-crimson-court", "music/tool-lateralus", "music/mogwai-young-team"],
    image: "assets/img/music/king-crimson-red.jpg",
    f: { form: ["录音室专辑"], genre: ["前卫摇滚", "摇滚", "器乐"] }
  },
  {
    id: "genesis-selling-england", cat: "music", title: "Selling England by the Pound", alt: "创世纪 · 按镑出售英格兰", year: 1973, region: "英国",
    summary: "Peter Gabriel 时期的巅峰，用英国市井题材写神话结构。Firth of Fifth 的钢琴与吉他交替是前卫摇滚最著名的器乐段落之一。",
    review: "文学性与技术并重，Cinema Show 十分钟组曲至今被现场翻演。适合喜欢叙事性强、编制复杂的老式前卫的听众。",
    pros: ["叙事结构宏大", "键盘与吉他编排出色"], cons: ["歌词典故密集"],
    tags: ["Genesis", "前卫摇滚", "Peter Gabriel"],
    scores: [{ src: "Rate Your Music", val: 4.1, max: 5 }, { src: "AllMusic", val: 4.5, max: 5 }, { src: "豆瓣音乐", val: 9.2, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=selling england by the pound" },
      { kind: "收听", label: "YouTube Music 搜索", url: "https://music.youtube.com/search?q=selling england by the pound" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Selling England by the Pound" }
    ],
    related: ["music/king-crimson-court", "music/yes-close-to-the-edge", "music/peter-gabriel-so"],
    image: "assets/img/music/genesis-selling-england.jpg",
    f: { form: ["录音室专辑"], genre: ["前卫摇滚", "摇滚"] }
  },
  {
    id: "yes-close-to-the-edge", cat: "music", title: "Close to the Edge", alt: "Yes · 接近边缘", year: 1972, region: "英国",
    summary: "三首长曲构成的前卫摇滚圣经，标题曲十八分钟以四个乐章展开，融合爵士、古典与摇滚。",
    review: "技术演奏与结构设计的极限展示，是理解 70 年代前卫美学的核心文本。适合能接受超长曲目与高信息密度的听众。",
    pros: ["长篇结构典范", "演奏技术顶尖"], cons: ["门槛高"],
    tags: ["Yes", "前卫摇滚", "长曲"],
    scores: [{ src: "Rate Your Music", val: 4.2, max: 5 }, { src: "AllMusic", val: 5, max: 5 }, { src: "豆瓣音乐", val: 9.2, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=close to the edge" },
      { kind: "收听", label: "Spotify 搜索", url: "https://open.spotify.com/search/close%20to%20the%20edge%20yes" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Close to the Edge Yes" }
    ],
    related: ["music/genesis-selling-england", "music/king-crimson-court", "music/dream-theater-images-and-words"],
    image: "assets/img/music/yes-close-to-the-edge.jpg",
    f: { form: ["录音室专辑"], genre: ["前卫摇滚", "摇滚"] }
  },
  {
    id: "led-zeppelin-iv", cat: "music", title: "Led Zeppelin IV", alt: "齐柏林飞艇 · 第四张（无标题）", year: 1971, region: "英国",
    summary: "无标题、无乐队名，仅以四个符号封面示人。Stairway to Heaven、Black Dog 与 Rock and Roll 同处一张唱片，硬摇滚与民谣并置。",
    review: "商业与艺术双巅峰，至今仍是硬摇滚的基准线。适合所有人，也常被用作音响系统低频测试。",
    pros: ["风格跨度极大", "制作与演奏皆顶级"], cons: ["Stairway 过度曝光"],
    tags: ["Led Zeppelin", "硬摇滚", "经典"],
    scores: [{ src: "Rate Your Music", val: 4.1, max: 5 }, { src: "AllMusic", val: 5, max: 5 }, { src: "豆瓣音乐", val: 9.4, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=led zeppelin iv" },
      { kind: "收听", label: "网易云搜索", url: "https://music.163.com/#/search/m/?s=Led Zeppelin IV" },
      { kind: "官方", label: "官方站点", url: "https://www.ledzeppelin.com/" }
    ],
    related: ["music/deep-purple-machine-head", "music/black-sabbath-paranoid", "music/jimmy-page-death-wish-ii"],
    image: "assets/img/music/led-zeppelin-iv.jpg",
    f: { form: ["录音室专辑"], genre: ["摇滚", "硬摇滚", "民谣"] }
  },
  {
    id: "black-sabbath-paranoid", cat: "music", title: "Paranoid", alt: "黑色安息日 · 偏执狂", year: 1970, region: "英国",
    summary: "重金属的出生证明。Iron Man、War Pigs 与同名曲确立了三全音 riff、慢速重击与末日主题的基本配方。",
    review: "想理解金属乐的源头，没有比这张更直接的材料。 riff 写作简洁有力，也是无数翻唱与游戏配乐的引用来源。",
    pros: ["金属乐奠基", "riff 极具记忆点"], cons: ["录音质感粗糙"],
    tags: ["Black Sabbath", "重金属", "1970"],
    scores: [{ src: "Rate Your Music", val: 4.1, max: 5 }, { src: "AllMusic", val: 5, max: 5 }, { src: "豆瓣音乐", val: 9.1, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=black sabbath paranoid" },
      { kind: "收听", label: "Spotify 搜索", url: "https://open.spotify.com/search/black%20sabbath%20paranoid" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Paranoid Black Sabbath" }
    ],
    related: ["music/led-zeppelin-iv", "music/metallica-master-of-puppets", "music/deep-purple-machine-head"],
    image: "assets/img/music/black-sabbath-paranoid.jpg",
    f: { form: ["录音室专辑"], genre: ["重金属", "摇滚"] }
  },
  {
    id: "metallica-master-of-puppets", cat: "music", title: "Master of Puppets", alt: "金属制品 · 傀儡之主", year: 1986, region: "美国",
    summary: "鞭击金属的巅峰之作，标题曲八分钟以层层加速的riff推进，Orion 的贝斯器乐段落成为金属编曲范本。",
    review: "技术与旋律罕见地同时到位，长期位居各类金属榜单首位。适合金属入门者，也是理解 80 年代地下场景的入口。",
    pros: ["riff 写作教科书", "结构张力强"], cons: ["音长偏长"],
    tags: ["Metallica", "鞭击金属", "1986"],
    scores: [{ src: "Rate Your Music", val: 4.1, max: 5 }, { src: "AllMusic", val: 5, max: 5 }, { src: "豆瓣音乐", val: 9.2, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=master of puppets" },
      { kind: "收听", label: "Apple Music 搜索", url: "https://music.apple.com/cn/search?term=master of puppets" },
      { kind: "官方", label: "官方站点", url: "https://www.metallica.com/" }
    ],
    related: ["music/black-sabbath-paranoid", "music/metallica-ride-the-lightning", "music/megadeth-rust-in-peace"],
    image: "assets/img/music/metallica-master-of-puppets.jpg",
    f: { form: ["录音室专辑"], genre: ["重金属", "鞭击金属"] }
  },
  {
    id: "metallica-ride-the-lightning", cat: "music", title: "Ride the Lightning", alt: "金属制品 · 驾驭闪电", year: 1984, region: "美国",
    summary: "从纯粹速度转向结构写作，Fade to Black 引入木吉他与自杀主题，Creeping Death 与同名曲确立史诗化鞭击语言。",
    review: "被视为 Metallica 艺术性最高的一张，也是金属乐开始承载严肃主题的标志。适合想听超越噪音的技术编排的人。",
    pros: ["结构与旋律兼顾", "主题深度提升"], cons: ["制作略显单薄"],
    tags: ["Metallica", "鞭击金属", "1984"],
    scores: [{ src: "Rate Your Music", val: 4.1, max: 5 }, { src: "AllMusic", val: 4.5, max: 5 }, { src: "豆瓣音乐", val: 9.1, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=ride the lightning" },
      { kind: "收听", label: "Spotify 搜索", url: "https://open.spotify.com/search/ride%20the%20lightning" },
      { kind: "官方", label: "官方站点", url: "https://www.metallica.com/" }
    ],
    related: ["music/metallica-master-of-puppets", "music/megadeth-rust-in-peace", "music/slayer-reign-in-blood"],
    image: "assets/img/music/metallica-ride-the-lightning.jpg",
    f: { form: ["录音室专辑"], genre: ["重金属", "鞭击金属"] }
  },
  {
    id: "megadeth-rust-in-peace", cat: "music", title: "Rust in Peace", alt: "麦加帝斯 · 和平锈蚀", year: 1990, region: "美国",
    summary: "技术鞭击的极限，Marty Friedman 与 Nick Menza 时期的Holy Wars与Tornado of Souls 是金属吉他教学的必弹曲目。",
    review: "如果你关注吉他技术与复杂节拍编排，这张几乎无可替代。速度、精度与旋律线同时在线，适合乐手与硬核金属迷。",
    pros: ["吉他技术顶尖", "节奏编排复杂"], cons: ["主题偏军事政治"],
    tags: ["Megadeth", "鞭击金属", "吉他技术"],
    scores: [{ src: "Rate Your Music", val: 4.1, max: 5 }, { src: "AllMusic", val: 4.5, max: 5 }, { src: "豆瓣音乐", val: 9, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=rust in peace" },
      { kind: "收听", label: "YouTube Music 搜索", url: "https://music.youtube.com/search?q=rust in peace megadeth" },
      { kind: "官方", label: "官方站点", url: "https://www.megadeth.com/" }
    ],
    related: ["music/metallica-master-of-puppets", "music/slayer-reign-in-blood", "music/dream-theater-images-and-words"],
    image: "assets/img/music/megadeth-rust-in-peace.jpg",
    f: { form: ["录音室专辑"], genre: ["重金属", "鞭击金属"] }
  },
  {
    id: "slayer-reign-in-blood", cat: "music", title: "Reign in Blood", alt: "杀手 · 血之统治", year: 1986, region: "美国",
    summary: "29 分钟十首歌的极端鞭击，Angel of Death 以纳粹战犯题材引发长期争议，Raining Blood 的三连 riff 成为金属标志。",
    review: "速度与攻击性的历史高点，直接催生了死亡金属。适合能承受极端主题与高密度鼓点的听众，不适合 casual 播放。",
    pros: ["速度与强度极致", "影响死亡金属诞生"], cons: ["主题争议大"],
    tags: ["Slayer", "鞭击金属", "极端金属"],
    scores: [{ src: "Rate Your Music", val: 4, max: 5 }, { src: "AllMusic", val: 5, max: 5 }, { src: "豆瓣音乐", val: 8.9, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=reign in blood" },
      { kind: "收听", label: "Spotify 搜索", url: "https://open.spotify.com/search/reign%20in%20blood" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Reign in Blood" }
    ],
    related: ["music/metallica-master-of-puppets", "music/megadeth-rust-in-peace", "music/death-symbolic"],
    image: "assets/img/music/slayer-reign-in-blood.jpg",
    f: { form: ["录音室专辑"], genre: ["重金属", "鞭击金属", "极端金属"] }
  },
  {
    id: "tool-lateralus", cat: "music", title: "Lateralus", alt: "工具乐队 · 侧向", year: 2001, region: "美国",
    summary: "以斐波那契数列构建节奏与音节的前卫金属专辑，同名曲的拍号变化与 Schism 的 12/8—7/8 交替成为技术讨论经典。",
    review: "把数学结构、部落鼓点与哲学歌词结合到极少有乐队能达到的高度。适合喜欢复杂节拍与概念深度的听众，需要专注聆听。",
    pros: ["节奏数学化设计", "鼓与贝斯层次惊人"], cons: ["曲目长、门槛高"],
    tags: ["Tool", "前卫金属", "数学结构"],
    scores: [{ src: "Rate Your Music", val: 4.1, max: 5 }, { src: "Metacritic", val: 75, max: 100 }, { src: "豆瓣音乐", val: 9.1, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=tool lateralus" },
      { kind: "收听", label: "网易云搜索", url: "https://music.163.com/#/search/m/?s=Tool Lateralus" },
      { kind: "官方", label: "官方站点", url: "https://toolband.com/" }
    ],
    related: ["music/king-crimson-red", "music/dream-theater-images-and-words", "music/mastodon-crack-the-skye"],
    image: "assets/img/music/tool-lateralus.jpg",
    f: { form: ["录音室专辑"], genre: ["重金属", "前卫摇滚", "另类"] }
  },
  {
    id: "dream-theater-images-and-words", cat: "music", title: "Images and Words", alt: "梦剧院 · 影像与文字", year: 1992, region: "美国",
    summary: "前卫金属商业化的关键唱片，Pull Me Under 打入主流榜单，Metropolis Pt. 1 与 Under a Glass Moon 展示器乐 virtuosity。",
    review: "旋律可听性与技术复杂度平衡最好的一张梦剧院，是前卫金属入门的最佳选择，也适合吉他与键盘学习者分析。",
    pros: ["旋律与技术并重", "制作清晰"], cons: ["抒情段落偏多"],
    tags: ["Dream Theater", "前卫金属", "1992"],
    scores: [{ src: "Rate Your Music", val: 4, max: 5 }, { src: "AllMusic", val: 4.5, max: 5 }, { src: "豆瓣音乐", val: 9, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=images and words" },
      { kind: "收听", label: "Spotify 搜索", url: "https://open.spotify.com/search/images%20and%20words%20dream%20theater" },
      { kind: "官方", label: "官方站点", url: "https://www.dreamtheater.net/" }
    ],
    related: ["music/tool-lateralus", "music/yes-close-to-the-edge", "music/symphony-x-the-divine-wings"],
    image: "assets/img/music/dream-theater-images-and-words.jpg",
    f: { form: ["录音室专辑"], genre: ["重金属", "前卫摇滚"] }
  },
  {
    id: "deep-purple-machine-head", cat: "music", title: "Machine Head", alt: "深紫 · 机械头", year: 1972, region: "英国",
    summary: "Smoke on the Water 的 riff 是摇滚史最易辨识的四音符，Highway Star 的键盘与吉他对飙奠定速度金属雏形。",
    review: "硬摇滚与古典技法结合的样板，现场录音质感极佳。适合所有人，也是吉他初学者必练曲目集。",
    pros: ["riff 传唱度极高", "器乐对飙精彩"], cons: ["歌词较简单"],
    tags: ["Deep Purple", "硬摇滚", "1972"],
    scores: [{ src: "Rate Your Music", val: 4, max: 5 }, { src: "AllMusic", val: 5, max: 5 }, { src: "豆瓣音乐", val: 9.1, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=machine head deep purple" },
      { kind: "收听", label: "QQ音乐搜索", url: "https://y.qq.com/n/ryqq/search?w=Deep Purple Machine Head" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Machine Head Deep Purple" }
    ],
    related: ["music/led-zeppelin-iv", "music/black-sabbath-paranoid", "music/rainbow-rising"],
    image: "assets/img/music/deep-purple-machine-head.jpg",
    f: { form: ["录音室专辑"], genre: ["硬摇滚", "摇滚"] }
  },
  {
    id: "nirvana-nevermind", cat: "music", title: "Nevermind", alt: "涅槃 · 别介意", year: 1991, region: "美国",
    summary: "把地下朋克推向全球主流的一张。Smells Like Teen Spirit 的 quiet-loud 结构成为 90 年代摇滚模板，In Bloom 与 Come as You Are 至今传唱。",
    review: "商业与地下的临界点，也是 grunge 浪潮的引爆器。适合所有人作为 90 年代摇滚的第一站，制作由 Butch Vig 完成，音质历久弥新。",
    pros: ["旋律与噪声平衡", "时代意义巨大"], cons: ["后期曲目略重复"],
    tags: ["Nirvana", "垃圾摇滚", "90年代"],
    scores: [{ src: "Rate Your Music", val: 3.9, max: 5 }, { src: "AllMusic", val: 5, max: 5 }, { src: "豆瓣音乐", val: 9.2, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=nevermind nirvana" },
      { kind: "收听", label: "网易云搜索", url: "https://music.163.com/#/search/m/?s=Nirvana Nevermind" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Nevermind Nirvana" }
    ],
    related: ["music/pixies-doolittle", "music/soundgarden-superunknown", "music/smashing-pumpkins-siamese-dream"],
    image: "assets/img/music/nirvana-nevermind.jpg",
    f: { form: ["录音室专辑"], genre: ["摇滚", "另类", "朋克"] }
  },
  {
    id: "pixies-doolittle", cat: "music", title: "Doolittle", alt: "小妖精 · 杜利特尔", year: 1989, region: "美国",
    summary: "独立摇滚的关键节点，Debaser、Where Is My Mind 与 Monkey Gone to Heaven 用两分钟篇幅完成旋律与噪声的完美压缩。",
    review: "Nirvana 公开承认受其影响，是理解 80 年代末美国地下摇滚的必修。短小、怪异、极度悦耳，适合任何时长的播放。",
    pros: ["结构精炼", "影响后世独立摇滚"], cons: ["录音略显粗粝"],
    tags: ["Pixies", "独立摇滚", "1989"],
    scores: [{ src: "Rate Your Music", val: 4, max: 5 }, { src: "Pitchfork", val: 10, max: 10 }, { src: "豆瓣音乐", val: 9, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=pixies doolittle" },
      { kind: "收听", label: "Spotify 搜索", url: "https://open.spotify.com/search/pixies%20doolittle" },
      { kind: "资料", label: "Pitchfork 搜索", url: "https://pitchfork.com/search/?query=doolittle" }
    ],
    related: ["music/nirvana-nevermind", "music/sonic-youth-daydream-nation", "music/smashing-pumpkins-siamese-dream"],
    image: "assets/img/music/pixies-doolittle.jpg",
    f: { form: ["录音室专辑"], genre: ["独立摇滚", "摇滚", "另类"] }
  },
  {
    id: "sonic-youth-daydream-nation", cat: "music", title: "Daydream Nation", alt: "音速青年 · 白日梦国度", year: 1988, region: "美国",
    summary: "双张专辑容量的噪音摇滚史诗，Teen Age Riot 与 Silver Rocket 用非常规定弦创造漂浮的吉他织体。",
    review: "美国地下摇滚向艺术化转型的标志，被国会图书馆收入国家录音登记。适合喜欢长曲目与噪音美学的听众。",
    pros: ["非常规调弦开创性", "长篇结构自由"], cons: ["噪音段落挑人"],
    tags: ["Sonic Youth", "噪音摇滚", "地下"],
    scores: [{ src: "Rate Your Music", val: 4, max: 5 }, { src: "Pitchfork", val: 10, max: 10 }, { src: "豆瓣音乐", val: 8.9, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=daydream nation" },
      { kind: "收听", label: "Bandcamp 搜索", url: "https://bandcamp.com/search?q=sonic youth daydream nation" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Daydream Nation" }
    ],
    related: ["music/pixies-doolittle", "music/my-bloody-valentine-loveless", "music/dinosaur-jr-youre-living-all-over-me"],
    image: "assets/img/music/sonic-youth-daydream-nation.jpg",
    f: { form: ["录音室专辑"], genre: ["噪音", "独立摇滚", "实验"] }
  },
  {
    id: "my-bloody-valentine-loveless", cat: "music", title: "Loveless", alt: "我血腥的情人节 · 无情", year: 1991, region: "爱尔兰",
    summary: "Shoegaze 的定义之作，Kevin Shields 用数十层吉他与滑音杆制造出无边界声墙，Only Shallow 与 When You Sleep 是流派图腾。",
    review: "录音耗费三年与巨额预算，结果是至今无人超越的音色墙。适合戴耳机沉浸聆听，也常被用作音响动态测试。",
    pros: ["音色墙独一无二", "旋律藏在噪声之下"], cons: ["人声极难辨识"],
    tags: ["My Bloody Valentine", "Shoegaze", "音墙"],
    scores: [{ src: "Rate Your Music", val: 4.2, max: 5 }, { src: "Pitchfork", val: 10, max: 10 }, { src: "豆瓣音乐", val: 9.1, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=my bloody valentine loveless" },
      { kind: "收听", label: "Spotify 搜索", url: "https://open.spotify.com/search/my%20bloody%20valentine%20loveless" },
      { kind: "官方", label: "官方站点", url: "https://mbv.net/" }
    ],
    related: ["music/slowdive-souvlaki", "music/sonic-youth-daydream-nation", "music/cocteau-twins-heaven-or-las-vegas"],
    image: "assets/img/music/my-bloody-valentine-loveless.jpg",
    f: { form: ["录音室专辑"], genre: ["Shoegaze", "噪音", "另类"] }
  },
  {
    id: "slowdive-souvlaki", cat: "music", title: "Souvlaki", alt: "慢潜 · 希腊烤肉串", year: 1993, region: "英国",
    summary: "Shoegaze 第二代表作，Alison 与 When the Sun Hits 把朦胧人声与延绵吉他推向梦流行方向，Brian Eno 参与键盘。",
    review: "比 Loveless 更柔和、更具氛围感，是 90 年代梦幻音景的最佳入口，也是 Lo-fi 与氛围摇滚采样常用素材。",
    pros: ["氛围感极强", "旋律隐藏得当"], cons: ["节奏偏慢"],
    tags: ["Slowdive", "Shoegaze", "梦流行"],
    scores: [{ src: "Rate Your Music", val: 4, max: 5 }, { src: "Pitchfork", val: 9.2, max: 10 }, { src: "豆瓣音乐", val: 9, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=slowdive souvlaki" },
      { kind: "收听", label: "网易云搜索", url: "https://music.163.com/#/search/m/?s=Slowdive Souvlaki" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Souvlaki Slowdive" }
    ],
    related: ["music/my-bloody-valentine-loveless", "music/beach-house-teen-dream", "music/cocteau-twins-heaven-or-las-vegas"],
    image: "assets/img/music/slowdive-souvlaki.jpg",
    f: { form: ["录音室专辑"], genre: ["Shoegaze", "梦流行", "另类"] }
  },
  {
    id: "cocteau-twins-heaven-or-las-vegas", cat: "music", title: "Heaven or Las Vegas", alt: "双生鸟 · 天堂或拉斯维加斯", year: 1990, region: "英国",
    summary: "4AD 梦流行的顶点，Elizabeth Fraser 的无义音节人声与 Robin Guthrie 的晶亮吉他织出不可解析的美。",
    review: "适合当作氛围背景或深夜聆听，语言障碍反而成为审美的一部分。是理解 4AD 厂牌美学的核心唱片。",
    pros: ["音色晶莹剔透", "人声如乐器"], cons: ["歌词不可解"],
    tags: ["Cocteau Twins", "梦流行", "4AD"],
    scores: [{ src: "Rate Your Music", val: 4.1, max: 5 }, { src: "Pitchfork", val: 9.5, max: 10 }, { src: "豆瓣音乐", val: 9, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=heaven or las vegas" },
      { kind: "收听", label: "Spotify 搜索", url: "https://open.spotify.com/search/heaven%20or%20las%20vegas" },
      { kind: "官方", label: "4AD 厂牌", url: "https://4ad.com/" }
    ],
    related: ["music/slowdive-souvlaki", "music/beach-house-teen-dream", "music/my-bloody-valentine-loveless"],
    image: "assets/img/music/cocteau-twins-heaven-or-las-vegas.jpg",
    f: { form: ["录音室专辑"], genre: ["梦流行", "另类", "氛围"] }
  },
  {
    id: "joy-division-unknown-pleasures", cat: "music", title: "Unknown Pleasures", alt: "快乐小分队 · 未知的愉悦", year: 1979, region: "英国",
    summary: "后朋克的起点，Martin Hannett 的稀疏制作让 Peter Hook 的高位贝斯与 Ian Curtis 的低吟成为工业城市的回声。",
    review: "封面与音乐同样成为文化符号。适合喜欢冷峻、克制与情绪压抑美学的听众，She's Lost Control 是流派定义曲目。",
    pros: ["制作空间感独特", "情绪表达克制有力"], cons: ["整体阴郁"],
    tags: ["Joy Division", "后朋克", "1979"],
    scores: [{ src: "Rate Your Music", val: 4.2, max: 5 }, { src: "AllMusic", val: 5, max: 5 }, { src: "豆瓣音乐", val: 9.2, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=unknown pleasures" },
      { kind: "收听", label: "Apple Music 搜索", url: "https://music.apple.com/cn/search?term=unknown pleasures joy division" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Unknown Pleasures" }
    ],
    related: ["music/new-order-power-corruption-lies", "music/the-cure-disintegration", "music/bauham-in-the-flat-field"],
    image: "assets/img/music/joy-division-unknown-pleasures.jpg",
    f: { form: ["录音室专辑"], genre: ["后朋克", "摇滚", "哥特"] }
  },
  {
    id: "the-cure-disintegration", cat: "music", title: "Disintegration", alt: "治疗乐队 · 瓦解", year: 1989, region: "英国",
    summary: "哥特流行的巅峰，Pictures of You 与 Lovesong 用层叠键盘与吉他延音构建出潮湿、缓慢的情绪空间。",
    review: "长曲、慢速、密集混响，是阴雨天与深夜的经典配乐。适合情绪化聆听，也是后朋克到梦幻流行的过渡样本。",
    pros: ["氛围营造出色", "旋律线优美"], cons: ["节奏普遍缓慢"],
    tags: ["The Cure", "哥特", "后朋克"],
    scores: [{ src: "Rate Your Music", val: 4.1, max: 5 }, { src: "AllMusic", val: 5, max: 5 }, { src: "豆瓣音乐", val: 9.1, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=the cure disintegration" },
      { kind: "收听", label: "网易云搜索", url: "https://music.163.com/#/search/m/?s=The Cure Disintegration" },
      { kind: "官方", label: "官方站点", url: "https://www.thecure.com/" }
    ],
    related: ["music/joy-division-unknown-pleasures", "music/siouxsie-tinderbox", "music/bauham-in-the-flat-field"],
    image: "assets/img/music/the-cure-disintegration.jpg",
    f: { form: ["录音室专辑"], genre: ["哥特", "后朋克", "摇滚"] }
  },
  {
    id: "new-order-power-corruption-lies", cat: "music", title: "Power, Corruption & Lies", alt: "新秩序 · 权力腐败与谎言", year: 1983, region: "英国",
    summary: "Joy Division 转型电子舞曲的关键唱片，Blue Monday 之前的重要铺垫，Age of Consent 开场贝斯是流行史最著名的低音线之一。",
    review: "把后朋克的阴冷与俱乐部舞曲的律动无缝焊接，直接影响了 synthpop 与 acid house。适合跳舞与聆听兼顾的场景。",
    pros: ["电子与摇滚融合成功", "低音线设计出色"], cons: ["人声偏弱"],
    tags: ["New Order", "电子", "新浪潮"],
    scores: [{ src: "Rate Your Music", val: 4.1, max: 5 }, { src: "AllMusic", val: 4.5, max: 5 }, { src: "豆瓣音乐", val: 9, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=power corruption lies" },
      { kind: "收听", label: "Spotify 搜索", url: "https://open.spotify.com/search/new%20order%20power%20corruption%20lies" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Power Corruption and Lies" }
    ],
    related: ["music/joy-division-unknown-pleasures", "music/depeche-mode-violator", "music/kraftwerk-computer-world"],
    image: "assets/img/music/new-order-power-corruption-lies.jpg",
    f: { form: ["录音室专辑"], genre: ["电子", "新浪潮", "舞曲"] }
  },
  {
    id: "depeche-mode-violator", cat: "music", title: "Violator", alt: "赶时髦 · 侵犯者", year: 1990, region: "英国",
    summary: " synthpop 与工业质感的完美结合，Personal Jesus 的布鲁斯化吉他与 Enjoy the Silence 的极简编排成为流行电子范本。",
    review: "商业与艺术双成功，是电子乐进入主流摇滚场景的关键作品。适合所有人，也常被 DJ 与制作人研究其音色设计。",
    pros: ["音色设计精致", "旋律抓耳"], cons: ["主题偏暗"],
    tags: ["Depeche Mode", "电子", "Synthpop"],
    scores: [{ src: "Rate Your Music", val: 4, max: 5 }, { src: "AllMusic", val: 5, max: 5 }, { src: "豆瓣音乐", val: 9, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=depeche mode violator" },
      { kind: "收听", label: "QQ音乐搜索", url: "https://y.qq.com/n/ryqq/search?w=Depeche Mode Violator" },
      { kind: "官方", label: "官方站点", url: "https://www.depechemode.com/" }
    ],
    related: ["music/new-order-power-corruption-lies", "music/kraftwerk-computer-world", "music/nine-inch-nails-the-downward-spiral"],
    image: "assets/img/music/depeche-mode-violator.jpg",
    f: { form: ["录音室专辑"], genre: ["电子", "合成器流行", "工业"] }
  },
  {
    id: "kraftwerk-computer-world", cat: "music", title: "Computer World", alt: "发电站 · 电脑世界", year: 1981, region: "德国",
    summary: "在个人电脑尚未普及的年代预言数字生活，Computer Love 的旋律被 Coldplay 引用，The Model 成为 synthpop 标准曲。",
    review: "电子音乐的源头之一，对 hip-hop、techno 与当代流行都有直接影响。适合想理解电子乐历史脉络的听众。",
    pros: ["预言性主题", "极简旋律设计"], cons: ["音色年代感强"],
    tags: ["Kraftwerk", "电子", "德国"],
    scores: [{ src: "Rate Your Music", val: 4, max: 5 }, { src: "AllMusic", val: 5, max: 5 }, { src: "豆瓣音乐", val: 9, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=kraftwerk computer world" },
      { kind: "收听", label: "Spotify 搜索", url: "https://open.spotify.com/search/kraftwerk%20computer%20world" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Computer World Kraftwerk" }
    ],
    related: ["music/depeche-mode-violator", "music/jean-michel-jarre-oxygene", "music/yellow-magic-orchestra-solid-state-survivor"],
    image: "assets/img/music/kraftwerk-computer-world.jpg",
    f: { form: ["录音室专辑"], genre: ["电子", "合成器流行", "实验"] }
  },
  {
    id: "jean-michel-jarre-oxygene", cat: "music", title: "Oxygène", alt: "让-米歇尔·雅尔 · 氧气", year: 1976, region: "法国",
    summary: "欧洲电子音乐大众化的里程碑，六段连续乐章用模拟合成器描绘大气层，Oxygène Part 4 成为全球金曲。",
    review: "旋律性远强于同期实验电子，是新世纪音乐与氛围电子的共同祖先。适合作为背景音乐，也适合音响系统展示动态。",
    pros: ["旋律优美易入耳", "模拟合成器音色经典"], cons: ["结构较松散"],
    tags: ["Jean-Michel Jarre", "电子", "氛围"],
    scores: [{ src: "Rate Your Music", val: 3.9, max: 5 }, { src: "AllMusic", val: 4.5, max: 5 }, { src: "豆瓣音乐", val: 9, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=jean michel jarre oxygene" },
      { kind: "收听", label: "YouTube Music 搜索", url: "https://music.youtube.com/search?q=jean michel jarre oxygene" },
      { kind: "官方", label: "官方站点", url: "https://jeanmicheljarre.com/" }
    ],
    related: ["music/kraftwerk-computer-world", "music/vangelis-blade-runner", "music/tangerine-dream-phaedra"],
    image: "assets/img/music/jean-michel-jarre-oxygene.jpg",
    f: { form: ["录音室专辑"], genre: ["电子", "氛围", "新世纪"] }
  },
  {
    id: "vangelis-blade-runner", cat: "music", title: "Blade Runner", alt: "范吉利斯 · 银翼杀手原声", year: 1994, region: "希腊",
    summary: "电影上映十二年后才正式发行的配乐，Yamaha CS-80 合成器塑造的夜雨都市声景，与影片本身互为不可分割的整体。",
    review: "氛围电子与电影配乐的教科书，Memories of Green 与 Love Theme 常被单独欣赏。适合夜晚、雨天与写作背景。",
    pros: ["氛围营造无与伦比", "合成器音色标志"], cons: ["发行版本混乱"],
    tags: ["Vangelis", "影视原声", "氛围"],
    scores: [{ src: "Rate Your Music", val: 4.1, max: 5 }, { src: "AllMusic", val: 4.5, max: 5 }, { src: "豆瓣音乐", val: 9.3, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=blade runner vangelis" },
      { kind: "收听", label: "网易云搜索", url: "https://music.163.com/#/search/m/?s=Vangelis Blade Runner" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Blade Runner soundtrack" }
    ],
    related: ["music/jean-michel-jarre-oxygene", "music/hans-zimmer-blade-runner-2049", "music/tangerine-dream-sorcerer"],
    image: "assets/img/music/vangelis-blade-runner.jpg",
    f: { form: ["影视原声"], genre: ["电子", "氛围", "影视配乐"] }
  },
  {
    id: "tangerine-dream-phaedra", cat: "music", title: "Phaedra", alt: "橘梦乐团 · 费德拉", year: 1974, region: "德国",
    summary: "柏林学派电子的开山作，Moog 序列器与磁带循环构建出无节拍的声音漂流，Virgin 厂牌首张畅销电子唱片。",
    review: "对后来的氛围、Techno 与电影配乐影响深远。适合冥想、写作与深夜聆听，不适合需要节奏驱动的场合。",
    pros: ["序列器运用开创性", "氛围沉浸感强"], cons: ["几乎无旋律钩子"],
    tags: ["Tangerine Dream", "电子", "柏林学派"],
    scores: [{ src: "Rate Your Music", val: 3.9, max: 5 }, { src: "AllMusic", val: 4.5, max: 5 }, { src: "豆瓣音乐", val: 8.9, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=tangerine dream phaedra" },
      { kind: "收听", label: "Bandcamp 搜索", url: "https://bandcamp.com/search?q=tangerine dream phaedra" },
      { kind: "官方", label: "官方站点", url: "https://tangerinedream.org/" }
    ],
    related: ["music/jean-michel-jarre-oxygene", "music/kraftwerk-computer-world", "music/brian-eno-ambient-1"],
    image: "assets/img/music/tangerine-dream-phaedra.jpg",
    f: { form: ["录音室专辑"], genre: ["电子", "氛围", "实验"] }
  },
  {
    id: "brian-eno-ambient-1", cat: "music", title: "Ambient 1: Music for Airports", alt: "布莱恩·伊诺 · 环境音乐 1：机场音乐", year: 1978, region: "英国",
    summary: "环境音乐这一概念的命名之作，伊诺用磁带循环设计可忽略亦可细听的声音，为公共空间而作。",
    review: "改变了音乐的功能定义，是氛围、新世纪与声音装置艺术的共同起点。适合工作、阅读、入睡背景。",
    pros: ["开创氛围音乐概念", "功能性极强"], cons: ["缺乏传统旋律"],
    tags: ["Brian Eno", "氛围", "环境音乐"],
    scores: [{ src: "Rate Your Music", val: 3.9, max: 5 }, { src: "Pitchfork", val: 9.4, max: 10 }, { src: "豆瓣音乐", val: 8.9, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=music for airports" },
      { kind: "收听", label: "Spotify 搜索", url: "https://open.spotify.com/search/brian%20eno%20music%20for%20airports" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Ambient 1 Music for Airports" }
    ],
    related: ["music/harold-budd-the-plateaux-of-mirror", "music/stars-of-the-lid-the-tired-sounds", "music/aphex-twin-selected-ambient-works"],
    image: "assets/img/music/brian-eno-ambient-1.jpg",
    f: { form: ["录音室专辑"], genre: ["氛围", "电子", "实验"] }
  },
  {
    id: "aphex-twin-selected-ambient-works", cat: "music", title: "Selected Ambient Works 85-92", alt: "Aphex Twin · 精选氛围作品 85-92", year: 1992, region: "英国",
    summary: "Richard D. James 用自制设备与老式合成器写出的氛围电子，Xtal 与 Ageispolis 兼具节奏骨架与飘浮旋律。",
    review: "IDM 与氛围 Techno 的共同源头，被无数电子制作人奉为启蒙。适合专注聆听，也可作为深夜背景。",
    pros: ["音色独特", "节奏与氛围兼得"], cons: ["部分曲目冗长"],
    tags: ["Aphex Twin", "IDM", "氛围电子"],
    scores: [{ src: "Rate Your Music", val: 4.2, max: 5 }, { src: "Pitchfork", val: 10, max: 10 }, { src: "豆瓣音乐", val: 9.1, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=selected ambient works 85-92" },
      { kind: "收听", label: "YouTube Music 搜索", url: "https://music.youtube.com/search?q=selected ambient works 85-92" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Selected Ambient Works 85–92" }
    ],
    related: ["music/boards-of-canada-music-has-the-right", "music/brian-eno-ambient-1", "music/aphex-twin-saw-ii"],
    image: "assets/img/music/aphex-twin-selected-ambient-works.jpg",
    f: { form: ["录音室专辑"], genre: ["电子", "IDM", "氛围"] }
  },
  {
    id: "aphex-twin-saw-ii", cat: "music", title: "...I Care Because You Do", alt: "Aphex Twin · SAW II", year: 1995, region: "英国",
    summary: "Aphex Twin 从氛围转向钻击与实验的转折点，Alberto Balsalm 与 Ventolin 展示了极端音色设计能力。",
    review: "比 Selected Ambient Works 更具攻击性与幽默感，是理解 IDM 边界的最佳样本。适合喜欢复杂节奏与怪诞音色的人。",
    pros: ["音色实验大胆", "节奏变化丰富"], cons: ["部分曲目刺耳"],
    tags: ["Aphex Twin", "IDM", "实验电子"],
    scores: [{ src: "Rate Your Music", val: 4, max: 5 }, { src: "AllMusic", val: 4.5, max: 5 }, { src: "豆瓣音乐", val: 8.9, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=i care because you do" },
      { kind: "收听", label: "Spotify 搜索", url: "https://open.spotify.com/search/aphex%20twin%20i%20care%20because%20you%20do" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=I Care Because You Do" }
    ],
    related: ["music/aphex-twin-selected-ambient-works", "music/autechre-tri-repeat-a", "music/boards-of-canada-music-has-the-right"],
    image: "assets/img/music/aphex-twin-saw-ii.jpg",
    f: { form: ["录音室专辑"], genre: ["电子", "IDM", "实验"] }
  },
  {
    id: "boards-of-canada-music-has-the-right", cat: "music", title: "Music Has the Right to Children", alt: "加拿大委员会 · 音乐有权拥有孩子", year: 1998, region: "英国",
    summary: "Warp 厂牌的怀旧电子代表，用降级采样、老式录音带噪声与童年记忆碎片构建出独特的温暖忧郁。",
    review: "Lo-fi 电子与氛围的交界经典，Roygbiv 与 Olso 被广泛采样。适合安静聆听与创作背景，情绪非常独特。",
    pros: ["怀旧质感无可替代", "音色设计细腻"], cons: ["节奏偏缓慢"],
    tags: ["Boards of Canada", "IDM", "Lo-fi电子"],
    scores: [{ src: "Rate Your Music", val: 4.2, max: 5 }, { src: "Pitchfork", val: 9.6, max: 10 }, { src: "豆瓣音乐", val: 9.1, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=music has the right to children" },
      { kind: "收听", label: "网易云搜索", url: "https://music.163.com/#/search/m/?s=Boards of Canada" },
      { kind: "官方", label: "Warp 厂牌", url: "https://warp.net/" }
    ],
    related: ["music/aphex-twin-selected-ambient-works", "music/four-tet-rounds", "music/burial-untrue"],
    image: "assets/img/music/boards-of-canada-music-has-the-right.jpg",
    f: { form: ["录音室专辑"], genre: ["电子", "IDM", "氛围"] }
  },
  {
    id: "burial-untrue", cat: "music", title: "Untrue", alt: "Burial · 非真", year: 2007, region: "英国",
    summary: "Dubstep 与 UK Garage 的情绪化转译，用采样人声碎片、雨声与稀疏鼓点描绘夜伦敦的孤独。Archangel 是流派定义曲目。",
    review: "水星奖提名作品，被广泛视为 21 世纪最重要的电子唱片之一。适合深夜、通勤与独处，氛围营造能力极强。",
    pros: ["氛围与情绪兼备", "采样运用出神入化"], cons: ["几乎无人声演唱"],
    tags: ["Burial", "Dubstep", "UK Garage"],
    scores: [{ src: "Rate Your Music", val: 4.2, max: 5 }, { src: "Pitchfork", val: 9.3, max: 10 }, { src: "Metacritic", val: 90, max: 100 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=burial untrue" },
      { kind: "收听", label: "Spotify 搜索", url: "https://open.spotify.com/search/burial%20untrue" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Untrue Burial" }
    ],
    related: ["music/boards-of-canada-music-has-the-right", "music/massive-play", "music/four-tet-rounds"],
    image: "assets/img/music/burial-untrue.jpg",
    f: { form: ["录音室专辑"], genre: ["电子", "Dubstep", "氛围"] }
  },
  {
    id: "massive-play", cat: "music", title: "Mezzanine", alt: "Massive Attack · 夹层", year: 1998, region: "英国",
    summary: "Trip-hop 转向黑暗电子的分水岭，Angel 的缓慢推进与 Teardrop 的心跳节拍定义了布里斯托之声的成熟期。",
    review: "制作精密、气氛压迫，是电影与广告配乐的常用素材来源。适合夜间聆听，也常被用作音响低频测试。",
    pros: ["制作水准极高", "氛围压迫感强"], cons: ["情绪偏阴暗"],
    tags: ["Massive Attack", "Trip-hop", "电子"],
    scores: [{ src: "Rate Your Music", val: 4.1, max: 5 }, { src: "Metacritic", val: 84, max: 100 }, { src: "豆瓣音乐", val: 9, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=massive attack mezzanine" },
      { kind: "收听", label: "QQ音乐搜索", url: "https://y.qq.com/n/ryqq/search?w=Massive Attack Mezzanine" },
      { kind: "官方", label: "官方站点", url: "https://www.massiveattack.co.uk/" }
    ],
    related: ["music/portishead-dummy", "music/burial-untrue", "music/tricky-maxinquaye"],
    image: "assets/img/music/massive-play.jpg",
    f: { form: ["录音室专辑"], genre: ["电子", "Trip-hop", "嘻哈"] }
  },
  {
    id: "portishead-dummy", cat: "music", title: "Dummy", alt: "波蒂斯黑德 · 假人", year: 1994, region: "英国",
    summary: "Trip-hop 三大代表之一，Beth Gibbons 的脆弱嗓音配上慢速 hip-hop 节拍与电影采样，Glory Box 与 Roads 传唱至今。",
    review: "忧郁、性感、电影感极强，是 90 年代英国最独特的声音之一。适合深夜独处与情绪化聆听。",
    pros: ["人声表现力惊人", "节拍设计精致"], cons: ["整体节奏缓慢"],
    tags: ["Portishead", "Trip-hop", "1994"],
    scores: [{ src: "Rate Your Music", val: 4.1, max: 5 }, { src: "AllMusic", val: 5, max: 5 }, { src: "豆瓣音乐", val: 9.1, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=portishead dummy" },
      { kind: "收听", label: "网易云搜索", url: "https://music.163.com/#/search/m/?s=Portishead Dummy" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Dummy Portishead" }
    ],
    related: ["music/massive-play", "music/tricky-maxinquaye", "music/burial-untrue"],
    image: "assets/img/music/portishead-dummy.jpg",
    f: { form: ["录音室专辑"], genre: ["Trip-hop", "电子", "氛围"] }
  },
  {
    "id": "miles-davis-kind-of-blue",
    "image": "assets/img/music/miles-davis-kind-of-blue.jpg",
    "cat": "music",
    "title": "Kind of Blue",
    "alt": "迈尔斯·戴维斯 · 泛蓝调调",
    "year": 1959,
    "region": "美国",
    "f": {
      "form": [
        "录音室专辑"
      ],
      "genre": [
        "爵士",
        "调式爵士"
      ]
    },
    "summary": "调式爵士的奠基之作，So What 与 All Blues 用极简和声框架解放即兴，John Coltrane 与 Bill Evans 同场演奏。",
    "review": "史上销量最高的爵士唱片，也是爵士入门的第一选择。结构留白极多，适合任何场合，包括完全不懂爵士的人。",
    "pros": [
      "调式爵士开创",
      "演奏阵容传奇",
      "爵士史上最伟大",
      "调式爵士开山"
    ],
    "cons": [
      "节奏普遍舒缓",
      "节奏偏慢"
    ],
    "tags": [
      "Miles Davis",
      "爵士",
      "调式爵士",
      "Cool Jazz"
    ],
    "scores": [
      {
        "src": "Rate Your Music",
        "val": 4.3,
        "max": 5
      },
      {
        "src": "AllMusic",
        "val": 5,
        "max": 5
      },
      {
        "src": "豆瓣音乐",
        "val": 9.5,
        "max": 10
      }
    ],
    "links": [
      {
        "kind": "资料",
        "label": "Rate Your Music 搜索",
        "url": "https://rateyourmusic.com/search?searchterm=kind of blue"
      },
      {
        "kind": "收听",
        "label": "Spotify 搜索",
        "url": "https://open.spotify.com/search/miles%20davis%20kind%20of%20blue"
      },
      {
        "kind": "资料",
        "label": "维基百科",
        "url": "https://zh.wikipedia.org/w/index.php?search=Kind of Blue"
      },
      {
        "kind": "资料",
        "label": "豆瓣音乐搜索",
        "url": "https://www.douban.com/search?cat=1003&q=Kind%20of%20Blue"
      },
      {
        "kind": "收听",
        "label": "网易云音乐搜索",
        "url": "https://music.163.com/#/search/m/?s=Miles%20Davis%20%C2%B7%20%E7%88%B5%E5%A3%AB"
      },
      {
        "kind": "收听",
        "label": "QQ 音乐搜索",
        "url": "https://y.qq.com/portal/search.html#page=1&searchid=1&remoteplace=txt.yqq.top&t=song&w=Miles%20Davis%20%C2%B7%20%E7%88%B5%E5%A3%AB"
      },
      {
        "kind": "资料",
        "label": "维基百科",
        "url": "https://zh.wikipedia.org/w/index.php?search=Kind%20of%20Blue"
      }
    ],
    "related": [
      "music/john-coltrane-a-love-supreme",
      "music/bill-evans-waltz-for-debby",
      "music/dave-brubeck-time-out"
    ]
  },
  {
    "id": "john-coltrane-a-love-supreme",
    "image": "assets/img/music/john-coltrane-a-love-supreme.jpg",
    "cat": "music",
    "title": "A Love Supreme",
    "alt": "约翰·柯川 · 至高的爱",
    "year": 1965,
    "region": "美国",
    "f": {
      "form": [
        "录音室专辑"
      ],
      "genre": [
        "爵士",
        "灵性爵士",
        "自由爵士"
      ]
    },
    "summary": "四乐章的灵性爵士组曲，柯川以重复动机与持续升调表达宗教性追寻，是自由爵士与灵性爵士的分界线。",
    "review": "强度与专注度极高，需要完整聆听才见其结构。适合愿意接受长时间萨克斯独奏与精神性主题的听众。",
    "pros": [
      "精神性表达极致",
      "四乐章结构完整",
      "精神爵士巅峰",
      "情感震撼"
    ],
    "cons": [
      "演奏强度高、门槛大",
      "门槛较高"
    ],
    "tags": [
      "John Coltrane",
      "爵士",
      "灵性爵士",
      "Coltrane",
      "Spiritual"
    ],
    "scores": [
      {
        "src": "Rate Your Music",
        "val": 4.3,
        "max": 5
      },
      {
        "src": "AllMusic",
        "val": 5,
        "max": 5
      },
      {
        "src": "豆瓣音乐",
        "val": 9.4,
        "max": 10
      }
    ],
    "links": [
      {
        "kind": "资料",
        "label": "Rate Your Music 搜索",
        "url": "https://rateyourmusic.com/search?searchterm=a love supreme coltrane"
      },
      {
        "kind": "收听",
        "label": "Apple Music 搜索",
        "url": "https://music.apple.com/cn/search?term=a love supreme john coltrane"
      },
      {
        "kind": "资料",
        "label": "维基百科",
        "url": "https://zh.wikipedia.org/w/index.php?search=A Love Supreme"
      },
      {
        "kind": "资料",
        "label": "豆瓣音乐搜索",
        "url": "https://www.douban.com/search?cat=1003&q=A%20Love%20Supreme"
      },
      {
        "kind": "收听",
        "label": "网易云音乐搜索",
        "url": "https://music.163.com/#/search/m/?s=John%20Coltrane%20%C2%B7%20%E7%88%B5%E5%A3%AB"
      },
      {
        "kind": "收听",
        "label": "QQ 音乐搜索",
        "url": "https://y.qq.com/portal/search.html#page=1&searchid=1&remoteplace=txt.yqq.top&t=song&w=John%20Coltrane%20%C2%B7%20%E7%88%B5%E5%A3%AB"
      },
      {
        "kind": "资料",
        "label": "维基百科",
        "url": "https://zh.wikipedia.org/w/index.php?search=A%20Love%20Supreme"
      }
    ],
    "related": [
      "music/miles-davis-kind-of-blue",
      "music/john-coltrane-giant-steps",
      "music/pharoah-sanders-karma"
    ]
  },
  {
    id: "john-coltrane-giant-steps", cat: "music", title: "Giant Steps", alt: "约翰·柯川 · 巨人脚步", year: 1960, region: "美国",
    summary: "以柯川变化的三度循环和声著称，标题曲成为爵士乐手技术试炼的标准曲目，Naima 则是抒情 ballad 典范。",
    review: "硬波普向调式过渡的关键作品，乐理价值极高。适合学习爵士即兴的人，也适合欣赏高强度技巧演奏。",
    pros: ["和声设计开创性", "演奏技巧惊人"], cons: ["部分曲目过于技术化"],
    tags: ["John Coltrane", "爵士", "硬波普"],
    scores: [{ src: "Rate Your Music", val: 4.2, max: 5 }, { src: "AllMusic", val: 5, max: 5 }, { src: "豆瓣音乐", val: 9.2, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=giant steps coltrane" },
      { kind: "收听", label: "Spotify 搜索", url: "https://open.spotify.com/search/john%20coltrane%20giant%20steps" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Giant Steps John Coltrane" }
    ],
    related: ["music/john-coltrane-a-love-supreme", "music/miles-davis-kind-of-blue", "music/sonny-rollins-saxophone-colossus"],
    image: "assets/img/music/john-coltrane-giant-steps.jpg",
    f: { form: ["录音室专辑"], genre: ["爵士", "硬波普"] }
  },
  {
    id: "bill-evans-waltz-for-debby", cat: "music", title: "Waltz for Debby", alt: "比尔·埃文斯 · 献给黛比的华尔兹", year: 1962, region: "美国",
    summary: " Village Vanguard 现场录音，钢琴三重奏的互动范式在此确立，Scott LaFaro 的贝斯线条彻底改变了爵士低音的角色。",
    review: "录音中可听见杯盘声与人群低语，真实感极强。适合安静夜晚与写作背景，是爵士钢琴三重奏的入门首选。",
    pros: ["三重奏互动典范", "现场氛围真实"], cons: ["录音底噪明显"],
    tags: ["Bill Evans", "爵士", "钢琴三重奏"],
    scores: [{ src: "Rate Your Music", val: 4.3, max: 5 }, { src: "AllMusic", val: 5, max: 5 }, { src: "豆瓣音乐", val: 9.4, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=waltz for debby" },
      { kind: "收听", label: "网易云搜索", url: "https://music.163.com/#/search/m/?s=Bill Evans Waltz for Debby" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Waltz for Debby Bill Evans" }
    ],
    related: ["music/miles-davis-kind-of-blue", "music/keith-jarrett-koln-concert", "music/dave-brubeck-time-out"],
    image: "assets/img/music/bill-evans-waltz-for-debby.jpg",
    f: { form: ["现场专辑"], genre: ["爵士", "冷爵士"] }
  },
  {
    id: "dave-brubeck-time-out", cat: "music", title: "Time Out", alt: "戴夫·布鲁贝克 · 超时", year: 1959, region: "美国",
    summary: "把非常规拍号带入爵士主流，Take Five 的 5/4 与 Blue Rondo à la Turk 的 9/8 成为流行文化里的爵士符号。",
    review: "旋律易记、节奏新奇，是爵士入门最友好的一张，也常被用作节拍训练素材。适合任何场景。",
    pros: ["非常规拍号普及化", "旋律极易记忆"], cons: ["部分曲目偏轻"],
    tags: ["Dave Brubeck", "爵士", "冷爵士"],
    scores: [{ src: "Rate Your Music", val: 4.1, max: 5 }, { src: "AllMusic", val: 5, max: 5 }, { src: "豆瓣音乐", val: 9.2, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=time out dave brubeck" },
      { kind: "收听", label: "QQ音乐搜索", url: "https://y.qq.com/n/ryqq/search?w=Dave Brubeck Time Out" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Time Out Dave Brubeck" }
    ],
    related: ["music/miles-davis-kind-of-blue", "music/bill-evans-waltz-for-debby", "music/john-coltrane-giant-steps"],
    image: "assets/img/music/dave-brubeck-time-out.jpg",
    f: { form: ["录音室专辑"], genre: ["爵士", "冷爵士"] }
  },
  {
    id: "keith-jarrett-koln-concert", cat: "music", title: "The Köln Concert", alt: "基思·贾瑞特 · 科隆音乐会", year: 1975, region: "美国",
    summary: "钢琴独奏即兴的巅峰记录，因琴况不佳而催生的重复音型与温暖旋律，成为史上最畅销的钢琴独奏专辑。",
    review: "全长一小时以上的连续即兴，情绪起伏自然，适合工作、阅读与入睡。是理解即兴创作过程的绝佳材料。",
    pros: ["即兴能力登峰造极", "情绪推进自然"], cons: ["曲目极长"],
    tags: ["Keith Jarrett", "爵士", "钢琴即兴"],
    scores: [{ src: "Rate Your Music", val: 4.3, max: 5 }, { src: "AllMusic", val: 5, max: 5 }, { src: "豆瓣音乐", val: 9.5, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=the koln concert" },
      { kind: "收听", label: "Spotify 搜索", url: "https://open.spotify.com/search/keith%20jarrett%20koln%20concert" },
      { kind: "官方", label: "ECM 厂牌", url: "https://www.ecmrecords.com/" }
    ],
    related: ["music/bill-evans-waltz-for-debby", "music/esbjorn-svensson-trio-winter-in-venice", "music/brad-mehldau-art-of-the-trio"],
    image: "assets/img/music/keith-jarrett-koln-concert.jpg",
    f: { form: ["现场专辑"], genre: ["爵士", "钢琴", "即兴"] }
  },
  {
    id: "getz-gilberto", cat: "music", title: "Getz/Gilberto", alt: "斯坦·盖兹与乔安·吉尔贝托", year: 1964, region: "巴西",
    summary: "Bossa Nova 走向世界的唱片，The Girl from Ipanema 由 Astrud Gilberto 演唱并获格莱美年度唱片奖，Antonio Carlos Jobim 作曲。",
    review: "萨克斯与尼龙弦吉他的对话极致温柔，是巴西音乐与爵士融合的代表作。适合任何放松场合，也常被咖啡馆播放。",
    pros: ["旋律优雅至极", "跨文化融合成功"], cons: ["风格较单一"],
    tags: ["Stan Getz", "João Gilberto", "Bossa Nova"],
    scores: [{ src: "Rate Your Music", val: 4.2, max: 5 }, { src: "AllMusic", val: 5, max: 5 }, { src: "豆瓣音乐", val: 9.3, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=getz gilberto" },
      { kind: "收听", label: "网易云搜索", url: "https://music.163.com/#/search/m/?s=Getz Gilberto" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Getz/Gilberto" }
    ],
    related: ["music/joao-gilberto-chega-de-saudade", "music/antonio-carlos-jobim-wave", "music/bill-evans-waltz-for-debby"],
    image: "assets/img/music/getz-gilberto.jpg",
    f: { form: ["录音室专辑"], genre: ["爵士", "Bossa Nova", "拉丁"] }
  },
  {
    "id": "buena-vista-social-club",
    "image": "assets/img/music/buena-vista-social-club.jpg",
    "cat": "music",
    "title": "Buena Vista Social Club",
    "alt": "好景俱乐部",
    "year": 1997,
    "region": "古巴",
    "f": {
      "form": [
        "录音室专辑"
      ],
      "genre": [
        "世界音乐",
        "拉丁",
        "爵士"
      ]
    },
    "summary": "Ry Cooder 召集古巴老乐手录制的专辑，Chan Chan 与 El Cuarto de Tula 让世界重新认识 son cubano，同名纪录片随后问世。",
    "review": "温暖、怀旧、演奏技巧扎实，是古巴音乐的全球入口。适合夏日午后与旅行背景，也适合了解拉美音乐史。",
    "pros": [
      "老乐手演奏精湛",
      "录音质感温暖",
      "古巴音乐里程碑",
      "演奏精湛"
    ],
    "cons": [
      "风格较为传统",
      "风格偏传统"
    ],
    "tags": [
      "Buena Vista Social Club",
      "古巴",
      "世界音乐",
      "Buena Vista",
      "Son"
    ],
    "scores": [
      {
        "src": "Rate Your Music",
        "val": 4.1,
        "max": 5
      },
      {
        "src": "AllMusic",
        "val": 4.5,
        "max": 5
      },
      {
        "src": "豆瓣音乐",
        "val": 9.2,
        "max": 10
      }
    ],
    "links": [
      {
        "kind": "资料",
        "label": "Rate Your Music 搜索",
        "url": "https://rateyourmusic.com/search?searchterm=buena vista social club"
      },
      {
        "kind": "收听",
        "label": "Spotify 搜索",
        "url": "https://open.spotify.com/search/buena%20vista%20social%20club"
      },
      {
        "kind": "资料",
        "label": "维基百科",
        "url": "https://zh.wikipedia.org/w/index.php?search=Buena Vista Social Club"
      },
      {
        "kind": "资料",
        "label": "豆瓣音乐搜索",
        "url": "https://www.douban.com/search?cat=1003&q=Buena%20Vista%20Social%20Club"
      },
      {
        "kind": "收听",
        "label": "网易云音乐搜索",
        "url": "https://music.163.com/#/search/m/?s=Buena%20Vista%20Social%20Club%20%C2%B7%20%E5%8F%A4%E5%B7%B4"
      },
      {
        "kind": "收听",
        "label": "QQ 音乐搜索",
        "url": "https://y.qq.com/portal/search.html#page=1&searchid=1&remoteplace=txt.yqq.top&t=song&w=Buena%20Vista%20Social%20Club%20%C2%B7%20%E5%8F%A4%E5%B7%B4"
      },
      {
        "kind": "资料",
        "label": "维基百科",
        "url": "https://zh.wikipedia.org/w/index.php?search=Buena%20Vista%20Social%20Club"
      }
    ],
    "related": [
      "music/getz-gilberto",
      "music/ibrahim-ferrer-buenos-hermanos",
      "music/cesaria-evora-miss-perfumado"
    ]
  },
  {
    "id": "cesaria-evora-miss-perfumado",
    "image": "assets/img/music/cesaria-evora-miss-perfumado.jpg",
    "cat": "music",
    "title": "Miss Perfumado",
    "alt": "塞萨里亚·埃沃拉 · 香水小姐",
    "year": 1992,
    "region": "佛得角",
    "f": {
      "form": [
        "录音室专辑"
      ],
      "genre": [
        "世界音乐",
        "民谣"
      ]
    },
    "summary": "赤脚歌姬把佛得角 morna 与 coladeira 带向国际，Sodade 成为非洲葡语区最广为流传的歌曲之一。",
    "review": "嗓音沙哑而深情，情绪缓慢却极具穿透力。适合夜晚与独处，也是了解西非岛国音乐传统的最佳入口。",
    "pros": [
      "嗓音独特深情",
      "流派代表性极强",
      "嗓音独特",
      "世界音乐经典"
    ],
    "cons": [
      "节奏普遍缓慢",
      "风格偏慢"
    ],
    "tags": [
      "Cesária Évora",
      "世界音乐",
      "佛得角",
      "Morna"
    ],
    "scores": [
      {
        "src": "Rate Your Music",
        "val": 4,
        "max": 5
      },
      {
        "src": "AllMusic",
        "val": 4.5,
        "max": 5
      },
      {
        "src": "豆瓣音乐",
        "val": 9,
        "max": 10
      }
    ],
    "links": [
      {
        "kind": "资料",
        "label": "Rate Your Music 搜索",
        "url": "https://rateyourmusic.com/search?searchterm=miss perfumado"
      },
      {
        "kind": "收听",
        "label": "YouTube Music 搜索",
        "url": "https://music.youtube.com/search?q=miss perfumado cesaria evora"
      },
      {
        "kind": "资料",
        "label": "维基百科",
        "url": "https://zh.wikipedia.org/w/index.php?search=Miss Perfumado"
      },
      {
        "kind": "资料",
        "label": "豆瓣音乐搜索",
        "url": "https://www.douban.com/search?cat=1003&q=Miss%20Perfumado"
      },
      {
        "kind": "收听",
        "label": "网易云音乐搜索",
        "url": "https://music.163.com/#/search/m/?s=Ces%C3%A1ria%20%C3%89vora%20%C2%B7%20%E4%B8%96%E7%95%8C%E9%9F%B3%E4%B9%90"
      },
      {
        "kind": "收听",
        "label": "QQ 音乐搜索",
        "url": "https://y.qq.com/portal/search.html#page=1&searchid=1&remoteplace=txt.yqq.top&t=song&w=Ces%C3%A1ria%20%C3%89vora%20%C2%B7%20%E4%B8%96%E7%95%8C%E9%9F%B3%E4%B9%90"
      },
      {
        "kind": "资料",
        "label": "维基百科",
        "url": "https://zh.wikipedia.org/w/index.php?search=Miss%20Perfumado"
      }
    ],
    "related": [
      "music/buena-vista-social-club",
      "music/miriam-makeba-pata-pata",
      "music/tinariwen-amassakoul"
    ]
  },
  {
    id: "tinariwen-amassakoul", cat: "music", title: "Amassakoul", alt: "提纳里文 · 阿马萨库尔", year: 2004, region: "马里",
    summary: "图阿雷格沙漠蓝调代表乐团的第二张，电吉他与手鼓构建出辽阔的撒哈拉声景，是 desert blues 走向国际的关键作品。",
    review: "重复的吉他乐句与低沉吟唱形成催眠效果，适合长途驾驶与专注工作。也是了解北非游牧音乐现代化的入口。",
    pros: ["沙漠蓝调风格独特", "吉他织体催眠"], cons: ["语言障碍"],
    tags: ["Tinariwen", "沙漠蓝调", "马里"],
    scores: [{ src: "Rate Your Music", val: 4, max: 5 }, { src: "AllMusic", val: 4, max: 5 }, { src: "豆瓣音乐", val: 8.9, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=tinariwen amassakoul" },
      { kind: "收听", label: "Bandcamp 搜索", url: "https://bandcamp.com/search?q=tinariwen amassakoul" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Amassakoul" }
    ],
    related: ["music/ali-farka-toure-talking-timbuktu", "music/cesaria-evora-miss-perfumado", "music/bombino-nomad"],
    image: "assets/img/music/tinariwen-amassakoul.jpg",
    f: { form: ["录音室专辑"], genre: ["世界音乐", "蓝调", "摇滚"] }
  },
  {
    id: "bauham-in-the-flat-field", cat: "music", title: "In the Flat Field", alt: "包豪斯 · 平地", year: 1980, region: "英国",
    summary: "哥特摇滚的命名之作，Bela Lugosi's Dead 九分钟的缓慢推进定义了黑暗美学的听觉模板。",
    review: "粗糙、阴冷、充满戏剧张力，是后朋克到哥特的关键过渡。适合喜欢黑暗氛围与舞台化表达的听众。",
    pros: ["哥特美学奠基", "戏剧张力强"], cons: ["制作粗糙"],
    tags: ["Bauhaus", "哥特", "后朋克"],
    scores: [{ src: "Rate Your Music", val: 3.9, max: 5 }, { src: "AllMusic", val: 4, max: 5 }, { src: "豆瓣音乐", val: 8.8, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=in the flat field" },
      { kind: "收听", label: "Spotify 搜索", url: "https://open.spotify.com/search/bauhaus%20in%20the%20flat%20field" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=In the Flat Field" }
    ],
    related: ["music/joy-division-unknown-pleasures", "music/the-cure-disintegration", "music/siouxsie-tinderbox"],
    image: "assets/img/music/bauham-in-the-flat-field.jpg",
    f: { form: ["录音室专辑"], genre: ["哥特", "后朋克", "摇滚"] }
  },
  {
    id: "siouxsie-tinderbox", cat: "music", title: "Tinderbox", alt: "苏克西与女妖 · 火种盒", year: 1986, region: "英国",
    summary: "哥特流行中制作最精致的一张，Candyman 与 Cities in Dust 用明亮吉他与部落节拍打开了黑暗风格的边界。",
    review: "Siouxsie Sioux 的嗓音与 John McGeoch 式吉他设计兼具攻击性与美感，适合喜欢 80 年代另类流行的听众。",
    pros: ["制作精致", "旋律与节奏兼顾"], cons: ["风格转型有争议"],
    tags: ["Siouxsie and the Banshees", "哥特", "另类"],
    scores: [{ src: "Rate Your Music", val: 3.8, max: 5 }, { src: "AllMusic", val: 4, max: 5 }, { src: "豆瓣音乐", val: 8.7, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=siouxsie tinderbox" },
      { kind: "收听", label: "网易云搜索", url: "https://music.163.com/#/search/m/?s=Siouxsie Tinderbox" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Tinderbox Siouxsie" }
    ],
    related: ["music/the-cure-disintegration", "music/bauham-in-the-flat-field", "music/joy-division-unknown-pleasures"],
    image: "assets/img/music/siouxsie-tinderbox.jpg",
    f: { form: ["录音室专辑"], genre: ["哥特", "另类", "摇滚"] }
  },
  {
    id: "pharoah-sanders-karma", cat: "music", title: "Karma", alt: "法罗·桑德斯 · 业", year: 1969, region: "美国",
    summary: "灵性爵士的极端代表，The Creator Has a Master Plan 三十余分钟的渐进式爆发把人声、萨克斯与打击乐推向宗教仪式般的强度。",
    review: "强度极大，需要完整聆听才见结构。适合已经熟悉柯川后期作品、愿意接受自由爵士噪音的听众。",
    pros: ["精神强度罕见", "配器层次丰富"], cons: ["时长与强度门槛极高"],
    tags: ["Pharoah Sanders", "灵性爵士", "自由爵士"],
    scores: [{ src: "Rate Your Music", val: 4.2, max: 5 }, { src: "AllMusic", val: 4.5, max: 5 }, { src: "豆瓣音乐", val: 9.1, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=pharoah sanders karma" },
      { kind: "收听", label: "Bandcamp 搜索", url: "https://bandcamp.com/search?q=pharoah sanders karma" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Karma Pharoah Sanders" }
    ],
    related: ["music/john-coltrane-a-love-supreme", "music/alice-coltrane-journey-in-satchidananda", "music/sun-ra-space-is-the-place"],
    image: "assets/img/music/pharoah-sanders-karma.jpg",
    f: { form: ["录音室专辑"], genre: ["爵士", "灵性爵士", "自由爵士"] }
  },
  {
    id: "alice-coltrane-journey-in-satchidananda", cat: "music", title: "Journey in Satchidananda", alt: "爱丽丝·柯川 · 萨奇达南达之旅", year: 1971, region: "美国",
    summary: "竖琴与萨克斯结合的灵性爵士，Pharoah Sanders 客座演奏，节奏组缓慢漂浮，是冥想爵士的代表作。",
    review: "近年因采样与再版重新获得极高评价，适合放松、瑜伽与写作背景，也适合了解女性爵士乐手的贡献。",
    pros: ["竖琴音色独特", "冥想氛围极佳"], cons: ["即兴段落较长"],
    tags: ["Alice Coltrane", "灵性爵士", "竖琴"],
    scores: [{ src: "Rate Your Music", val: 4.1, max: 5 }, { src: "AllMusic", val: 4.5, max: 5 }, { src: "豆瓣音乐", val: 9, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=journey in satchidananda" },
      { kind: "收听", label: "Spotify 搜索", url: "https://open.spotify.com/search/alice%20coltrane%20journey%20in%20satchidananda" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Journey in Satchidananda" }
    ],
    related: ["music/pharoah-sanders-karma", "music/john-coltrane-a-love-supreme", "music/dorothy-ashby-the-fantastic-jazz-harp"],
    image: "assets/img/music/alice-coltrane-journey-in-satchidananda.jpg",
    f: { form: ["录音室专辑"], genre: ["爵士", "灵性爵士", "氛围"] }
  },
  {
    id: "sonny-rollins-saxophone-colossus", cat: "music", title: "Saxophone Colossus", alt: "桑尼·罗林斯 · 萨克斯巨人", year: 1956, region: "美国",
    summary: "硬波普的经典现场感录音，St. Thomas 以卡里普索节奏成为爵士标准曲，Sonnymoon for Two 展示主题即兴的教科书式发展。",
    review: "结构清晰、旋律好记，是理解爵士即兴逻辑的最佳教材之一。适合入门与进阶 alike。",
    pros: ["主题即兴示范", "旋律极易记忆"], cons: ["录音年代久远"],
    tags: ["Sonny Rollins", "爵士", "硬波普"],
    scores: [{ src: "Rate Your Music", val: 4.2, max: 5 }, { src: "AllMusic", val: 5, max: 5 }, { src: "豆瓣音乐", val: 9.3, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=saxophone colossus" },
      { kind: "收听", label: "Apple Music 搜索", url: "https://music.apple.com/cn/search?term=saxophone colossus sonny rollins" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Saxophone Colossus" }
    ],
    related: ["music/john-coltrane-giant-steps", "music/miles-davis-kind-of-blue", "music/art-blakey-moanin"],
    image: "assets/img/music/sonny-rollins-saxophone-colossus.jpg",
    f: { form: ["录音室专辑"], genre: ["爵士", "硬波普"] }
  },
  {
    id: "art-blakey-moanin", cat: "music", title: "Moanin'", alt: "亚特·布雷基与爵士信使 · 呻吟", year: 1958, region: "美国",
    summary: "Hard bop 的代表作，Bobby Timmons 的布鲁斯化钢琴呼应主题与 Blakey 的强力鼓点，定义了爵士信使乐团的风格。",
    review: "节奏强劲、蓝调味浓，是爵士中最容易带动情绪的一张。适合驾驶、运动与需要提神的场合。",
    pros: ["蓝调感强烈", "节奏驱动力足"], cons: ["曲目结构相似"],
    tags: ["Art Blakey", "爵士", "硬波普"],
    scores: [{ src: "Rate Your Music", val: 4.1, max: 5 }, { src: "AllMusic", val: 5, max: 5 }, { src: "豆瓣音乐", val: 9.1, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=art blakey moanin" },
      { kind: "收听", label: "网易云搜索", url: "https://music.163.com/#/search/m/?s=Art Blakey Moanin" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Moanin Art Blakey" }
    ],
    related: ["music/sonny-rollins-saxophone-colossus", "music/horace-silver-song-for-my-father", "music/miles-davis-kind-of-blue"],
    image: "assets/img/music/art-blakey-moanin.jpg",
    f: { form: ["录音室专辑"], genre: ["爵士", "硬波普", "蓝调"] }
  },
  {
    id: "horace-silver-song-for-my-father", cat: "music", title: "Song for My Father", alt: "霍勒斯·席佛 · 献给我父亲的歌", year: 1965, region: "美国",
    summary: "把巴西节奏融入硬波普的钢琴经典，标题曲成为爵士标准曲，被 Steely Dan 采样引用。",
    review: "旋律优雅、律动轻盈，是爵士与拉丁融合的典范。适合放松聆听与小型聚会背景。",
    pros: ["拉丁节奏融合自然", "标题曲传唱度高"], cons: ["整体较温和"],
    tags: ["Horace Silver", "爵士", "拉丁爵士"],
    scores: [{ src: "Rate Your Music", val: 4.1, max: 5 }, { src: "AllMusic", val: 4.5, max: 5 }, { src: "豆瓣音乐", val: 9, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=song for my father horace silver" },
      { kind: "收听", label: "Spotify 搜索", url: "https://open.spotify.com/search/horace%20silver%20song%20for%20my%20father" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Song for My Father" }
    ],
    related: ["music/art-blakey-moanin", "music/getz-gilberto", "music/dave-brubeck-time-out"],
    image: "assets/img/music/horace-silver-song-for-my-father.jpg",
    f: { form: ["录音室专辑"], genre: ["爵士", "拉丁爵士", "硬波普"] }
  },
  {
    id: "esbjorn-svensson-trio-winter-in-venice", cat: "music", title: "Winter in Venice", alt: "埃斯比约恩·斯文松三重奏 · 威尼斯之冬", year: 1999, region: "瑞典",
    summary: "北欧爵士钢琴三重奏的代表，把古典室内乐的安静与电子氛围融入爵士即兴，旋律极其优美。",
    review: "ESB 是 21 世纪欧洲爵士最重要的乐团之一，本作适合安静聆听、写作与冬夜。情绪克制但极有感染力。",
    pros: ["旋律优美", "北欧音色清冷"], cons: ["节奏偏慢"],
    tags: ["E.S.T.", "北欧爵士", "钢琴三重奏"],
    scores: [{ src: "Rate Your Music", val: 4, max: 5 }, { src: "AllMusic", val: 4, max: 5 }, { src: "豆瓣音乐", val: 9, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=est winter in venice" },
      { kind: "收听", label: "网易云搜索", url: "https://music.163.com/#/search/m/?s=E.S.T. Winter in Venice" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Esbjorn Svensson Trio" }
    ],
    related: ["music/keith-jarrett-koln-concert", "music/bill-evans-waltz-for-debby", "music/brad-mehldau-art-of-the-trio"],
    image: "assets/img/music/esbjorn-svensson-trio-winter-in-venice.jpg",
    f: { form: ["录音室专辑"], genre: ["爵士", "北欧爵士"] }
  },
  {
    id: "brad-mehldau-art-of-the-trio", cat: "music", title: "The Art of the Trio", alt: "布拉德·梅尔道 · 三重奏的艺术", year: 1997, region: "美国",
    summary: "当代爵士钢琴三重奏的重要系列首作，梅尔道把 Radiohead 与流行曲引入爵士语汇，右手双线演奏成为个人标志。",
    review: "技术与情感兼备，适合已经熟悉传统爵士、想了解当代发展的听众。也常被钢琴学习者研究。",
    pros: ["双手独立性惊人", "曲目选择开放"], cons: ["部分改编较抽象"],
    tags: ["Brad Mehldau", "爵士", "钢琴三重奏"],
    scores: [{ src: "Rate Your Music", val: 4, max: 5 }, { src: "AllMusic", val: 4.5, max: 5 }, { src: "豆瓣音乐", val: 8.9, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=brad mehldau art of the trio" },
      { kind: "收听", label: "Spotify 搜索", url: "https://open.spotify.com/search/brad%20mehldau%20art%20of%20the%20trio" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Brad Mehldau" }
    ],
    related: ["music/keith-jarrett-koln-concert", "music/esbjorn-svensson-trio-winter-in-venice", "music/bill-evans-waltz-for-debby"],
    image: "assets/img/music/brad-mehldau-art-of-the-trio.jpg",
    f: { form: ["录音室专辑"], genre: ["爵士", "当代爵士"] }
  },
  {
    id: "joao-gilberto-chega-de-saudade", cat: "music", title: "Chega de Saudade", alt: "乔安·吉尔贝托 · 别了，忧愁", year: 1959, region: "巴西",
    summary: "Bossa Nova 的诞生唱片，吉尔贝托极简的吉他节奏与轻声唱法彻底改变了巴西流行音乐，Jobim 负责作曲与编曲。",
    review: "历史地位无可替代，聆听体验温柔克制。适合了解 bossa nova 起源，也是巴西音乐爱好者的必备。",
    pros: ["开创 bossa nova", "吉他节奏设计精妙"], cons: ["录音年代感强"],
    tags: ["João Gilberto", "Bossa Nova", "巴西"],
    scores: [{ src: "Rate Your Music", val: 4.2, max: 5 }, { src: "AllMusic", val: 5, max: 5 }, { src: "豆瓣音乐", val: 9.2, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=chega de saudade" },
      { kind: "收听", label: "YouTube Music 搜索", url: "https://music.youtube.com/search?q=joao gilberto chega de saudade" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Chega de Saudade" }
    ],
    related: ["music/getz-gilberto", "music/antonio-carlos-jobim-wave", "music/horace-silver-song-for-my-father"],
    image: "assets/img/music/joao-gilberto-chega-de-saudade.jpg",
    f: { form: ["录音室专辑"], genre: ["Bossa Nova", "拉丁", "爵士"] }
  },
  {
    id: "antonio-carlos-jobim-wave", cat: "music", title: "Wave", alt: "安东尼奥·卡洛斯·若宾 · 浪潮", year: 1967, region: "巴西",
    summary: "Jobim 的个人代表作，把 bossa nova 与管弦编曲结合，标题曲与 The Girl from Ipanema 的新版本展现成熟期的优雅。",
    review: "编曲细腻、旋律优美，是巴西音乐走向国际化的样本。适合放松、阅读与午后聆听。",
    pros: ["管弦编曲精致", "旋律优雅"], cons: ["节奏变化较少"],
    tags: ["Antonio Carlos Jobim", "Bossa Nova", "巴西"],
    scores: [{ src: "Rate Your Music", val: 4.1, max: 5 }, { src: "AllMusic", val: 4.5, max: 5 }, { src: "豆瓣音乐", val: 9.1, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=antonio carlos jobim wave" },
      { kind: "收听", label: "网易云搜索", url: "https://music.163.com/#/search/m/?s=Jobim Wave" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Wave Antonio Carlos Jobim" }
    ],
    related: ["music/getz-gilberto", "music/joao-gilberto-chega-de-saudade", "music/horace-silver-song-for-my-father"],
    image: "assets/img/music/antonio-carlos-jobim-wave.jpg",
    f: { form: ["录音室专辑"], genre: ["Bossa Nova", "拉丁", "爵士"] }
  },
  {
    id: "ibrahim-ferrer-buenos-hermanos", cat: "music", title: "Buenos Hermanos", alt: "易卜拉欣·费雷尔 · 好兄弟", year: 2003, region: "古巴",
    summary: "好景俱乐部主唱的个人专辑，延续 son cubano 传统并加入更丰富的管弦编曲，是他晚年最完整的录音。",
    review: "嗓音沧桑而温暖，情绪真挚。适合喜欢古巴传统音乐与好景俱乐部风格的听众。",
    pros: ["嗓音极具感染力", "编曲丰富"], cons: ["风格传统"],
    tags: ["Ibrahim Ferrer", "古巴", "世界音乐"],
    scores: [{ src: "Rate Your Music", val: 3.9, max: 5 }, { src: "AllMusic", val: 4, max: 5 }, { src: "豆瓣音乐", val: 8.9, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=ibrahim ferrer buenos hermanos" },
      { kind: "收听", label: "Spotify 搜索", url: "https://open.spotify.com/search/ibrahim%20ferrer%20buenos%20hermanos" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Ibrahim Ferrer" }
    ],
    related: ["music/buena-vista-social-club", "music/cesaria-evora-miss-perfumado", "music/compay-segundo-yo-soy-del-son"],
    image: "assets/img/music/ibrahim-ferrer-buenos-hermanos.jpg",
    f: { form: ["录音室专辑"], genre: ["世界音乐", "拉丁"] }
  },
  {
    id: "ali-farka-toure-talking-timbuktu", cat: "music", title: "Talking Timbuktu", alt: "阿里·法卡·图雷 · 廷巴克图的对话", year: 1994, region: "马里",
    summary: "马里蓝调大师与 Ry Cooder 合作，获格莱美最佳世界音乐专辑奖，把西非弦乐传统与美国蓝调根源重新连接。",
    review: "吉他演奏循环往复、催眠感强，是 desert blues 的经典入门。适合长途驾驶与专注工作背景。",
    pros: ["跨文化合作成功", "吉他循环催眠"], cons: ["曲目较长"],
    tags: ["Ali Farka Touré", "沙漠蓝调", "世界音乐"],
    scores: [{ src: "Rate Your Music", val: 4, max: 5 }, { src: "AllMusic", val: 4.5, max: 5 }, { src: "豆瓣音乐", val: 8.9, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=talking timbuktu" },
      { kind: "收听", label: "Bandcamp 搜索", url: "https://bandcamp.com/search?q=ali farka toure talking timbuktu" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Talking Timbuktu" }
    ],
    related: ["music/tinariwen-amassakoul", "music/bombino-nomad", "music/ry-cooder-chicken-skin-music"],
    image: "assets/img/music/ali-farka-toure-talking-timbuktu.jpg",
    f: { form: ["录音室专辑"], genre: ["世界音乐", "蓝调"] }
  },
  {
    id: "bombino-nomad", cat: "music", title: "Nomad", alt: "邦比诺 · 游牧者", year: 2013, region: "尼日尔",
    summary: "新一代图阿雷格吉他手的代表作，Dan Auerbach 参与制作，把沙漠蓝调推向更现代的摇滚质感。",
    review: "吉他音色明亮、节奏更紧凑，是了解当代 desert blues 的最佳入口。适合驾驶与户外场景。",
    pros: ["吉他技巧出色", "制作现代"], cons: ["曲目结构相似"],
    tags: ["Bombino", "沙漠蓝调", "尼日尔"],
    scores: [{ src: "Rate Your Music", val: 3.8, max: 5 }, { src: "Metacritic", val: 80, max: 100 }, { src: "豆瓣音乐", val: 8.7, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=bombino nomad" },
      { kind: "收听", label: "Spotify 搜索", url: "https://open.spotify.com/search/bombino%20nomad" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Bombino Nomad" }
    ],
    related: ["music/tinariwen-amassakoul", "music/ali-farka-toure-talking-timbuktu", "music/mdou-moctar-afelan"],
    image: "assets/img/music/bombino-nomad.jpg",
    f: { form: ["录音室专辑"], genre: ["世界音乐", "蓝调", "摇滚"] }
  },
  {
    id: "four-tet-rounds", cat: "music", title: "Rounds", alt: "四重奏 · 循环", year: 2003, region: "英国",
    summary: "Folktronica 的定义作品，Kieran Hebden 用爵士采样、木吉他碎片与 glitch 节拍拼贴出温暖而复杂的电子纹理。",
    review: "既适合专注聆听也适合作为背景，是电子乐中最具人性温度的一张。适合创作与阅读。",
    pros: ["采样拼贴精细", "情绪温暖"], cons: ["节奏碎片化"],
    tags: ["Four Tet", "电子", "Folktronica"],
    scores: [{ src: "Rate Your Music", val: 4.1, max: 5 }, { src: "Pitchfork", val: 8.7, max: 10 }, { src: "Metacritic", val: 84, max: 100 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=four tet rounds" },
      { kind: "收听", label: "Bandcamp 搜索", url: "https://bandcamp.com/search?q=four tet rounds" },
      { kind: "官方", label: "官方站点", url: "https://www.fourtet.net/" }
    ],
    related: ["music/boards-of-canada-music-has-the-right", "music/burial-untrue", "music/aphex-twin-selected-ambient-works"],
    image: "assets/img/music/four-tet-rounds.jpg",
    f: { form: ["录音室专辑"], genre: ["电子", "IDM", "民谣"] }
  },
  {
    id: "autechre-tri-repeat-a", cat: "music", title: "Tri Repetae", alt: "Autechre · 三重重复", year: 1995, region: "英国",
    summary: "IDM 的经典之作，用金属质感节拍与算法化旋律构建冷峻的机械美学，Eulogy 与 Overand 是流派标准曲。",
    review: "抽象、精密、无情感外露，是电子音乐中最具建筑感的作品之一。适合喜欢复杂结构与冷感音色的听众。",
    pros: ["节奏设计精密", "音色冷峻独特"], cons: ["情感距离远"],
    tags: ["Autechre", "IDM", "电子"],
    scores: [{ src: "Rate Your Music", val: 4.1, max: 5 }, { src: "AllMusic", val: 4.5, max: 5 }, { src: "豆瓣音乐", val: 8.9, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=autechke tri repetae" },
      { kind: "收听", label: "Spotify 搜索", url: "https://open.spotify.com/search/autechre%20tri%20repetae" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Tri Repetae" }
    ],
    related: ["music/aphex-twin-saw-ii", "music/boards-of-canada-music-has-the-right", "music/four-tet-rounds"],
    image: "assets/img/music/autechre-tri-repeat-a.jpg",
    f: { form: ["录音室专辑"], genre: ["电子", "IDM", "实验"] }
  },
  {
    id: "tricky-maxinquaye", cat: "music", title: "Maxinquaye", alt: "特里基 · 马辛奎", year: 1995, region: "英国",
    summary: "Trip-hop 三巨头之一的个人首作，Martina Topley-Bird 的空灵嗓音配上缓慢失真的节拍，Hell Is Round the Corner 采样 Isaac Hayes。",
    review: "阴郁、性感、充满电影感，是布里斯托之声的另一面。适合深夜独处与情绪化聆听。",
    pros: ["氛围营造出色", "人声与节拍搭配独特"], cons: ["情绪极度阴暗"],
    tags: ["Tricky", "Trip-hop", "1995"],
    scores: [{ src: "Rate Your Music", val: 4.1, max: 5 }, { src: "Pitchfork", val: 9, max: 10 }, { src: "豆瓣音乐", val: 8.9, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=tricky maxinquaye" },
      { kind: "收听", label: "网易云搜索", url: "https://music.163.com/#/search/m/?s=Tricky Maxinquaye" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Maxinquaye" }
    ],
    related: ["music/portishead-dummy", "music/massive-play", "music/burial-untrue"],
    image: "assets/img/music/tricky-maxinquaye.jpg",
    f: { form: ["录音室专辑"], genre: ["Trip-hop", "电子", "嘻哈"] }
  },
  {
    id: "hans-zimmer-blade-runner-2049", cat: "music", title: "Blade Runner 2049", alt: "汉斯·季默与本杰明·沃菲斯齐 · 银翼杀手2049原声", year: 2017, region: "美国",
    summary: "续集配乐延续 Vangelis 的合成器传统并加入更重的低频与工业质感，Sea Wall 与 Mesa 成为影院级氛围范本。",
    review: "音量与动态范围极大，适合家庭影院与专注聆听。是当代电影电子配乐的代表作之一。",
    pros: ["低频设计震撼", "氛围延续原作"], cons: ["旋律钩子较少"],
    tags: ["Hans Zimmer", "Benjamin Wallfisch", "影视原声"],
    scores: [{ src: "Rate Your Music", val: 3.9, max: 5 }, { src: "Metacritic", val: 78, max: 100 }, { src: "豆瓣音乐", val: 8.8, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=blade runner 2049 soundtrack" },
      { kind: "收听", label: "Spotify 搜索", url: "https://open.spotify.com/search/blade%20runner%202049%20soundtrack" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Blade Runner 2049 soundtrack" }
    ],
    related: ["music/vangelis-blade-runner", "music/hans-zimmer-interstellar", "music/junkie-xl-mad-max-fury-road"],
    image: "assets/img/music/hans-zimmer-blade-runner-2049.jpg",
    f: { form: ["影视原声"], genre: ["影视配乐", "电子", "氛围"] }
  },
  {
    id: "soundgarden-superunknown", cat: "music", title: "Superunknown", alt: "声音花园 · 超未知", year: 1994, region: "美国",
    summary: "Grunge 巅峰期的双张专辑，Black Hole Sun 与 Spoonman 展示 Chris Cornell 的音域跨度与乐队的节奏复杂性。",
    review: "比 Nirvana 更技术化、比 Pearl Jam 更黑暗，是 90 年代硬摇滚的艺术高点。适合喜欢重riff与高音人声的听众。",
    pros: ["人声表现惊人", "非常规拍号运用"], cons: ["双张略冗长"],
    tags: ["Soundgarden", "垃圾摇滚", "硬摇滚"],
    scores: [{ src: "Rate Your Music", val: 3.9, max: 5 }, { src: "AllMusic", val: 4.5, max: 5 }, { src: "豆瓣音乐", val: 8.9, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=soundgarden superunknown" },
      { kind: "收听", label: "Spotify 搜索", url: "https://open.spotify.com/search/soundgarden%20superunknown" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Superunknown" }
    ],
    related: ["music/nirvana-nevermind", "music/alice-in-chains-dirt", "music/smashing-pumpkins-siamese-dream"],
    image: "assets/img/music/soundgarden-superunknown.jpg",
    f: { form: ["录音室专辑"], genre: ["垃圾摇滚", "摇滚", "另类"] }
  },
  {
    id: "alice-in-chains-dirt", cat: "music", title: "Dirt", alt: "爱丽丝囚徒 · 尘土", year: 1992, region: "美国",
    summary: "Grunge 中最黑暗的一张，围绕成瘾主题展开，Rooster 与 Would 成为经典，Layne Staley 与 Jerry Cantrell 的和声是乐队标志。",
    review: "情绪沉重但旋律极强，是理解 90 年代西雅图场景阴暗面的必经之路。适合喜欢重金属与另类摇滚交叉地带的听众。",
    pros: ["双声部和声独特", "主题表达真挚"], cons: ["整体情绪压抑"],
    tags: ["Alice in Chains", "垃圾摇滚", "重金属"],
    scores: [{ src: "Rate Your Music", val: 3.9, max: 5 }, { src: "AllMusic", val: 4.5, max: 5 }, { src: "豆瓣音乐", val: 9, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=alice in chains dirt" },
      { kind: "收听", label: "网易云搜索", url: "https://music.163.com/#/search/m/?s=Alice in Chains Dirt" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Dirt Alice in Chains" }
    ],
    related: ["music/soundgarden-superunknown", "music/nirvana-nevermind", "music/metallica-master-of-puppets"],
    image: "assets/img/music/alice-in-chains-dirt.jpg",
    f: { form: ["录音室专辑"], genre: ["垃圾摇滚", "重金属", "摇滚"] }
  },
  {
    id: "smashing-pumpkins-siamese-dream", cat: "music", title: "Siamese Dream", alt: "碎南瓜 · 暹罗之梦", year: 1993, region: "美国",
    summary: "Billy Corgan 用数十层吉他叠加与 Big Muff 失真打造出巨大音墙，Today 与 Cherub Rock 成为另类摇滚金曲。",
    review: "制作精良、情绪饱满，是 90 年代另类摇滚的技术标杆。适合喜欢厚重吉他与优美旋律并存的听众。",
    pros: ["吉他音墙宏大", "旋律优美"], cons: ["录音工序过度"],
    tags: ["The Smashing Pumpkins", "另类摇滚", "1993"],
    scores: [{ src: "Rate Your Music", val: 4, max: 5 }, { src: "Pitchfork", val: 9, max: 10 }, { src: "豆瓣音乐", val: 9, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=siamese dream" },
      { kind: "收听", label: "QQ音乐搜索", url: "https://y.qq.com/n/ryqq/search?w=Smashing Pumpkins Siamese Dream" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Siamese Dream" }
    ],
    related: ["music/nirvana-nevermind", "music/pixies-doolittle", "music/my-bloody-valentine-loveless"],
    image: "assets/img/music/smashing-pumpkins-siamese-dream.jpg",
    f: { form: ["录音室专辑"], genre: ["另类摇滚", "摇滚", "Shoegaze"] }
  },
  {
    id: "dinosaur-jr-youre-living-all-over-me", cat: "music", title: "You're Living All Over Me", alt: "小恐龙 · 你活在我身上", year: 1987, region: "美国",
    summary: "把重型失真吉他与流行旋律焊接的独立摇滚先驱，Little Fury Things 与 In a Jar 直接影响了 grunge 与 shoegaze。",
    review: "粗糙、响亮、旋律意外地好，是 80 年代美国地下摇滚最被低估的唱片之一。适合喜欢噪音与旋律共存的人。",
    pros: ["失真与旋律结合", "影响后世深远"], cons: ["录音粗糙"],
    tags: ["Dinosaur Jr.", "独立摇滚", "噪音"],
    scores: [{ src: "Rate Your Music", val: 3.9, max: 5 }, { src: "Pitchfork", val: 9.1, max: 10 }, { src: "豆瓣音乐", val: 8.8, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=youre living all over me" },
      { kind: "收听", label: "Bandcamp 搜索", url: "https://bandcamp.com/search?q=dinosaur jr youre living all over me" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=You're Living All Over Me" }
    ],
    related: ["music/sonic-youth-daydream-nation", "music/pixies-doolittle", "music/smashing-pumpkins-siamese-dream"],
    image: "assets/img/music/dinosaur-jr-youre-living-all-over-me.jpg",
    f: { form: ["录音室专辑"], genre: ["独立摇滚", "噪音", "另类"] }
  },
  {
    id: "beach-house-teen-dream", cat: "music", title: "Teen Dream", alt: "海滩小屋 · 青春梦", year: 2010, region: "美国",
    summary: "梦流行的现代经典，Victoria Legrand 的低沉嗓音与 Alex Scally 的滑音吉他营造出怀旧而朦胧的氛围，Space Song 后来成为网络爆款。",
    review: "制作简洁但情绪浓烈，是 2010 年代独立音乐最具代表性的唱片之一。适合黄昏、驾驶与回忆场景。",
    pros: ["氛围与旋律兼得", "制作克制精致"], cons: ["节奏变化少"],
    tags: ["Beach House", "梦流行", "独立"],
    scores: [{ src: "Rate Your Music", val: 4, max: 5 }, { src: "Pitchfork", val: 8.6, max: 10 }, { src: "Metacritic", val: 81, max: 100 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=beach house teen dream" },
      { kind: "收听", label: "Spotify 搜索", url: "https://open.spotify.com/search/beach%20house%20teen%20dream" },
      { kind: "官方", label: "官方站点", url: "https://beachhousebaltimore.com/" }
    ],
    related: ["music/cocteau-twins-heaven-or-las-vegas", "music/slowdive-souvlaki", "music/cigarettes-after-sex-apocalypse"],
    image: "assets/img/music/beach-house-teen-dream.jpg",
    f: { form: ["录音室专辑"], genre: ["梦流行", "独立", "另类"] }
  },
  {
    id: "cigarettes-after-sex-apocalypse", cat: "music", title: "Apocalypse", alt: "事后烟 · 启示录", year: 2017, region: "美国",
    summary: "以极简配器与雌雄莫辨的人声著称的梦流行，Apocalypse 与 K. 成为全球流媒体播放量极高的氛围曲目。",
    review: "音量小、速度慢、氛围浓，是当代最受欢迎的深夜背景音乐之一。适合放松、入睡与写作。",
    pros: ["氛围统一", "旋律易入耳"], cons: ["全专风格雷同"],
    tags: ["Cigarettes After Sex", "梦流行", "氛围"],
    scores: [{ src: "Rate Your Music", val: 3.6, max: 5 }, { src: "Metacritic", val: 74, max: 100 }, { src: "豆瓣音乐", val: 8.6, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=cigarettes after sex apocalypse" },
      { kind: "收听", label: "网易云搜索", url: "https://music.163.com/#/search/m/?s=Cigarettes After Sex" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Cigarettes After Sex" }
    ],
    related: ["music/beach-house-teen-dream", "music/slowdive-souvlaki", "music/cocteau-twins-heaven-or-las-vegas"],
    image: "assets/img/music/cigarettes-after-sex-apocalypse.jpg",
    f: { form: ["录音室专辑"], genre: ["梦流行", "氛围", "独立"] }
  },
  {
    id: "harold-budd-the-plateaux-of-mirror", cat: "music", title: "The Plateaux of Mirror", alt: "哈罗德·巴德 · 镜之高原", year: 1980, region: "美国",
    summary: "Brian Eno 与 Harold Budd 合作的氛围钢琴经典，Eno 的合成器织体托住 Budd 的即兴钢琴，创造无重力的声音空间。",
    review: "环境音乐第二号作品，适合冥想、写作与入睡。几乎没有节奏，是纯粹的声音色彩研究。",
    pros: ["氛围纯净", "钢琴与合成器融合"], cons: ["缺乏结构变化"],
    tags: ["Harold Budd", "Brian Eno", "氛围"],
    scores: [{ src: "Rate Your Music", val: 3.9, max: 5 }, { src: "AllMusic", val: 4, max: 5 }, { src: "豆瓣音乐", val: 8.9, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=the plateaux of mirror" },
      { kind: "收听", label: "Spotify 搜索", url: "https://open.spotify.com/search/harold%20budd%20plateaux%20of%20mirror" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=The Plateaux of Mirror" }
    ],
    related: ["music/brian-eno-ambient-1", "music/stars-of-the-lid-the-tired-sounds", "music/tangerine-dream-phaedra"],
    image: "assets/img/music/harold-budd-the-plateaux-of-mirror.jpg",
    f: { form: ["录音室专辑"], genre: ["氛围", "电子", "新世纪"] }
  },
  {
    id: "stars-of-the-lid-the-tired-sounds", cat: "music", title: "The Tired Sounds of Stars of the Lid", alt: "星空之翼 · 疲惫之声", year: 2001, region: "美国",
    summary: "Drone 氛围的双张杰作，用极缓慢的弦乐与合成器长音构建近乎静止的声音景观，单曲目常超过十分钟。",
    review: "适合深度放松、冥想与睡眠，也常被用作声音装置的参考。需要耐心，但回报极大。",
    pros: ["Drone 质感纯粹", "放松效果极佳"], cons: ["极度缓慢"],
    tags: ["Stars of the Lid", "Drone", "氛围"],
    scores: [{ src: "Rate Your Music", val: 4.1, max: 5 }, { src: "Pitchfork", val: 8.8, max: 10 }, { src: "豆瓣音乐", val: 9, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=tired sounds of stars of the lid" },
      { kind: "收听", label: "Bandcamp 搜索", url: "https://bandcamp.com/search?q=stars of the lid" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Stars of the Lid" }
    ],
    related: ["music/brian-eno-ambient-1", "music/harold-budd-the-plateaux-of-mirror", "music/tim-hecker-ravedeath"],
    image: "assets/img/music/stars-of-the-lid-the-tired-sounds.jpg",
    f: { form: ["录音室专辑"], genre: ["氛围", "Drone", "实验"] }
  },
  {
    id: "tim-hecker-ravedeath", cat: "music", title: "Ravedeath, 1972", alt: "提姆·赫克 · 狂舞之死，1972", year: 2011, region: "加拿大",
    summary: "在冰岛教堂录制管风琴后进行电子处理，把噪音、氛围与宗教空间感结合，是当代实验电子的重要作品。",
    review: "音量层次极丰富，适合戴耳机专注聆听。是了解 drone 与噪音氛围融合的最佳样本。",
    pros: ["空间感独特", "管风琴与电子融合"], cons: ["抽象无旋律"],
    tags: ["Tim Hecker", "Drone", "实验电子"],
    scores: [{ src: "Rate Your Music", val: 3.9, max: 5 }, { src: "Pitchfork", val: 8.5, max: 10 }, { src: "Metacritic", val: 82, max: 100 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=ravedeath 1972" },
      { kind: "收听", label: "Spotify 搜索", url: "https://open.spotify.com/search/tim%20hecker%20ravedeath" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Ravedeath, 1972" }
    ],
    related: ["music/stars-of-the-lid-the-tired-sounds", "music/brian-eno-ambient-1", "music/aphex-twin-selected-ambient-works"],
    image: "assets/img/music/tim-hecker-ravedeath.jpg",
    f: { form: ["录音室专辑"], genre: ["氛围", "实验", "电子"] }
  },
  {
    id: "tangerine-dream-sorcerer", cat: "music", title: "Sorcerer", alt: "橘梦乐团 · 恐惧的代价（原声）", year: 1977, region: "德国",
    summary: "为 William Friedkin 电影创作的配乐，橘梦把柏林学派的序列器与紧张的电影叙事结合，Impression 与 Betrayal 极为出色。",
    review: "氛围紧张、音色冷峻，是电子配乐早期的典范。适合悬疑氛围营造与专注聆听。",
    pros: ["氛围紧张有力", "序列器运用成熟"], cons: ["依赖电影语境"],
    tags: ["Tangerine Dream", "影视原声", "电子"],
    scores: [{ src: "Rate Your Music", val: 3.8, max: 5 }, { src: "AllMusic", val: 4, max: 5 }, { src: "豆瓣音乐", val: 8.7, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=tangerine dream sorcerer" },
      { kind: "收听", label: "YouTube Music 搜索", url: "https://music.youtube.com/search?q=tangerine dream sorcerer" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Sorcerer soundtrack" }
    ],
    related: ["music/tangerine-dream-phaedra", "music/vangelis-blade-runner", "music/jean-michel-jarre-oxygene"],
    image: "assets/img/music/tangerine-dream-sorcerer.jpg",
    f: { form: ["影视原声"], genre: ["电子", "影视配乐", "氛围"] }
  },
  {
    id: "junkie-xl-mad-max-fury-road", cat: "music", title: "Mad Max: Fury Road", alt: "Junkie XL · 疯狂的麦克斯4原声", year: 2015, region: "荷兰",
    summary: "以打击乐、失真吉他与电子节拍驱动的追车配乐，Brothers in Arms 与 Furiosa 主题成为动作片音乐的新标杆。",
    review: "节奏极强、能量密度高，适合运动、驾驶与需要提神的场合。是当代动作电影配乐的代表作。",
    pros: ["能量密度极高", "打击乐设计出色"], cons: ["旋律性较弱"],
    tags: ["Junkie XL", "影视原声", "动作"],
    scores: [{ src: "Rate Your Music", val: 3.8, max: 5 }, { src: "Metacritic", val: 76, max: 100 }, { src: "豆瓣音乐", val: 8.7, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=mad max fury road soundtrack" },
      { kind: "收听", label: "Spotify 搜索", url: "https://open.spotify.com/search/mad%20max%20fury%20road%20junkie%20xl" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Mad Max Fury Road soundtrack" }
    ],
    related: ["music/hans-zimmer-blade-runner-2049", "music/hans-zimmer-interstellar", "music/vangelis-blade-runner"],
    image: "assets/img/music/junkie-xl-mad-max-fury-road.jpg",
    f: { form: ["影视原声"], genre: ["影视配乐", "电子", "摇滚"] }
  },
  {
    id: "hans-zimmer-interstellar", cat: "music", title: "Interstellar", alt: "汉斯·季默 · 星际穿越原声", year: 2014, region: "德国",
    summary: "以教堂管风琴为核心的太空配乐，Cornfield Chase 与 No Time for Caution 用极简动机推动巨大的情绪高潮。",
    review: "动态范围极大，是家庭影院与耳机测试的常用素材。适合专注聆听与情绪化场景。",
    pros: ["管风琴音色震撼", "动机发展出色"], cons: ["部分曲目重复度高"],
    tags: ["Hans Zimmer", "影视原声", "太空"],
    scores: [{ src: "Rate Your Music", val: 4, max: 5 }, { src: "Metacritic", val: 74, max: 100 }, { src: "豆瓣音乐", val: 9.2, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=interstellar hans zimmer" },
      { kind: "收听", label: "网易云搜索", url: "https://music.163.com/#/search/m/?s=Interstellar Hans Zimmer" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Interstellar soundtrack" }
    ],
    related: ["music/hans-zimmer-blade-runner-2049", "music/junkie-xl-mad-max-fury-road", "music/vangelis-blade-runner"],
    image: "assets/img/music/hans-zimmer-interstellar.jpg",
    f: { form: ["影视原声"], genre: ["影视配乐", "氛围", "古典"] }
  },
  {
    id: "joe-hisaishi-spirited-away", cat: "music", title: "千と千尋の神隠し サウンドトラック", alt: "久石让 · 千与千寻原声", year: 2001, region: "日本",
    summary: "久石让为宫崎骏电影创作的原声，One Summer's Day 与 The Sixth Station 成为钢琴独奏的经典曲目，融合日本民谣与管弦乐。",
    review: "旋律优美、情绪细腻，是动画原声中最广为人知的作品之一。适合任何场合，尤其适合钢琴爱好者。",
    pros: ["旋律极其优美", "东西方音乐融合"], cons: ["部分曲目较短"],
    tags: ["久石让", "影视原声", "动画"],
    scores: [{ src: "Rate Your Music", val: 4.1, max: 5 }, { src: "AllMusic", val: 4.5, max: 5 }, { src: "豆瓣音乐", val: 9.4, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=spirited away joe hisaishi" },
      { kind: "收听", label: "QQ音乐搜索", url: "https://y.qq.com/n/ryqq/search?w=久石让 千与千寻" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=千与千寻 原声" }
    ],
    related: ["music/joe-hisaishi-princess-mononoke", "music/yoko-kanno-cowboy-bebop", "music/keiichiro-shibuya-evangelion"],
    image: "assets/img/music/joe-hisaishi-spirited-away.jpg",
    f: { form: ["影视原声"], genre: ["影视配乐", "古典", "动画"] }
  },
  {
    id: "joe-hisaishi-princess-mononoke", cat: "music", title: "もののけ姫 サウンドトラック", alt: "久石让 · 幽灵公主原声", year: 1997, region: "日本",
    summary: "以大型管弦乐与日本传统打击乐构建的史诗配乐，Ashitaka's Legend 成为久石让最具气势的旋律之一。",
    review: "规模宏大、情绪浓烈，是动画配乐向电影级制作的代表。适合专注聆听与情绪化场景。",
    pros: ["管弦规模宏大", "主题旋律震撼"], cons: ["部分曲目偏短"],
    tags: ["久石让", "影视原声", "动画"],
    scores: [{ src: "Rate Your Music", val: 4.1, max: 5 }, { src: "AllMusic", val: 4.5, max: 5 }, { src: "豆瓣音乐", val: 9.3, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=princess mononoke joe hisaishi" },
      { kind: "收听", label: "网易云搜索", url: "https://music.163.com/#/search/m/?s=幽灵公主 久石让" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=幽灵公主 原声" }
    ],
    related: ["music/joe-hisaishi-spirited-away", "music/yoko-kanno-cowboy-bebop", "music/keiichiro-shibuya-evangelion"],
    image: "assets/img/music/joe-hisaishi-princess-mononoke.jpg",
    f: { form: ["影视原声"], genre: ["影视配乐", "古典", "动画"] }
  },
  {
    id: "yoko-kanno-cowboy-bebop", cat: "music", title: "COWBOY BEBOP オリジナルサウンドトラック", alt: "菅野洋子 · 星际牛仔原声", year: 1998, region: "日本",
    summary: "菅野洋子与 The Seatbelts 为动画创作的爵士配乐，Tank! 与 Space Lion 融合 hard bop、蓝调、拉丁与电子，成为动画音乐史的里程碑。",
    review: "演奏水平极高，完全可以脱离动画独立欣赏。适合喜欢爵士、蓝调与动画音乐的听众，也是驾驶提神奇器。",
    pros: ["爵士演奏专业", "风格跨度极大"], cons: ["曲目数量多而杂"],
    tags: ["菅野洋子", "影视原声", "爵士"],
    scores: [{ src: "Rate Your Music", val: 4.3, max: 5 }, { src: "AllMusic", val: 4.5, max: 5 }, { src: "豆瓣音乐", val: 9.6, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=cowboy bebop ost" },
      { kind: "收听", label: "Spotify 搜索", url: "https://open.spotify.com/search/cowboy%20bebop%20soundtrack" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Cowboy Bebop soundtrack" }
    ],
    related: ["music/joe-hisaishi-spirited-away", "music/art-blakey-moanin", "music/keiichiro-shibuya-evangelion"],
    image: "assets/img/music/yoko-kanno-cowboy-bebop.jpg",
    f: { form: ["影视原声"], genre: ["爵士", "影视配乐", "动画"] }
  },
  {
    id: "keiichiro-shibuya-evangelion", cat: "music", title: "NEON GENESIS EVANGELION", alt: "鹭巢诗郎 · 新世纪福音战士原声", year: 1995, region: "日本",
    summary: "鹭巢诗郎为 EVA 创作的原声，A Cruel Angel's Thesis 成为日本动画史上最著名的主题曲，配乐融合古典、爵士与实验电子。",
    review: "曲目风格跨度极大，从管弦到工业噪音都有。适合动画音乐爱好者，也常被用作音响测试。",
    pros: ["风格跨度罕见", "主题曲传唱度极高"], cons: ["专辑结构松散"],
    tags: ["鹭巢诗郎", "影视原声", "动画"],
    scores: [{ src: "Rate Your Music", val: 4, max: 5 }, { src: "AllMusic", val: 4, max: 5 }, { src: "豆瓣音乐", val: 9.3, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=neon genesis evangelion ost" },
      { kind: "收听", label: "网易云搜索", url: "https://music.163.com/#/search/m/?s=新世纪福音战士 原声" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Neon Genesis Evangelion soundtrack" }
    ],
    related: ["music/yoko-kanno-cowboy-bebop", "music/joe-hisaishi-spirited-away", "music/susumu-hirasawa-parade"],
    image: "assets/img/music/keiichiro-shibuya-evangelion.jpg",
    f: { form: ["影视原声"], genre: ["影视配乐", "电子", "动画"] }
  },
  {
    id: "susumu-hirasawa-parade", cat: "music", title: "Parade", alt: "平泽进 · 游行", year: 2000, region: "日本",
    summary: "平泽进为今敏《千年女优》创作的原声，把电子、民族吟唱与管弦乐结合，Rotation 成为其个人风格的集中体现。",
    review: "神秘、宏大、带有宗教仪式感，是今敏电影不可分割的一部分。适合喜欢电子与民族融合的听众。",
    pros: ["风格独特", "与影像契合度极高"], cons: ["较为实验"],
    tags: ["平泽进", "影视原声", "电子"],
    scores: [{ src: "Rate Your Music", val: 3.9, max: 5 }, { src: "AllMusic", val: 4, max: 5 }, { src: "豆瓣音乐", val: 9, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=susumu hirasawa parade" },
      { kind: "收听", label: "YouTube Music 搜索", url: "https://music.youtube.com/search?q=susumu hirasawa parade" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=平泽进" }
    ],
    related: ["music/keiichiro-shibuya-evangelion", "music/yoko-kanno-cowboy-bebop", "music/ryuichi-sakamoto-async"],
    image: "assets/img/music/susumu-hirasawa-parade.jpg",
    f: { form: ["影视原声"], genre: ["电子", "影视配乐", "民族"] }
  },
  {
    id: "ryuichi-sakamoto-async", cat: "music", title: "async", alt: "坂本龙一 · 异步", year: 2017, region: "日本",
    summary: "坂本龙一病中创作的实验电子专辑，用非同步的声音片段与日常采样构建关于时间与死亡的冥想。",
    review: "抽象、安静、充满哲学意味，是他晚期最重要的作品。适合专注聆听与深度放松。",
    pros: ["声音设计精细", "概念完整"], cons: ["无传统旋律"],
    tags: ["坂本龙一", "电子", "实验"],
    scores: [{ src: "Rate Your Music", val: 3.9, max: 5 }, { src: "Pitchfork", val: 8, max: 10 }, { src: "豆瓣音乐", val: 8.8, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=ryuichi sakamoto async" },
      { kind: "收听", label: "网易云搜索", url: "https://music.163.com/#/search/m/?s=坂本龙一 async" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=async Ryuichi Sakamoto" }
    ],
    related: ["music/yellow-magic-orchestra-solid-state-survivor", "music/susumu-hirasawa-parade", "music/brian-eno-ambient-1"],
    image: "assets/img/music/ryuichi-sakamoto-async.jpg",
    f: { form: ["录音室专辑"], genre: ["电子", "实验", "氛围"] }
  },
  {
    id: "yellow-magic-orchestra-solid-state-survivor", cat: "music", title: "Solid State Survivor", alt: "黄色魔术交响乐团 · 固态幸存者", year: 1979, region: "日本",
    summary: "YMO 的代表作，Behind the Mask 与 Technopolis 把日本电子流行推向世界，直接影响了 hip-hop 与 techno 的诞生。",
    review: "旋律与节奏设计极为精巧，是电子流行史的必修。适合喜欢复古电子与日本流行文化的听众。",
    pros: ["旋律设计精巧", "历史影响巨大"], cons: ["音色年代感强"],
    tags: ["YMO", "电子", "日本"],
    scores: [{ src: "Rate Your Music", val: 4, max: 5 }, { src: "AllMusic", val: 4.5, max: 5 }, { src: "豆瓣音乐", val: 9.1, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=solid state survivor ymo" },
      { kind: "收听", label: "Spotify 搜索", url: "https://open.spotify.com/search/yellow%20magic%20orchestra%20solid%20state%20survivor" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Solid State Survivor" }
    ],
    related: ["music/kraftwerk-computer-world", "music/ryuichi-sakamoto-async", "music/depeche-mode-violator"],
    image: "assets/img/music/yellow-magic-orchestra-solid-state-survivor.jpg",
    f: { form: ["录音室专辑"], genre: ["电子", "合成器流行", "流行"] }
  },
  {
    id: "compay-segundo-yo-soy-del-son", cat: "music", title: "Yo Soy del Son", alt: "康贝·瑟贡多 · 我来自颂乐", year: 1996, region: "古巴",
    summary: "古巴传统 son 音乐大师的精选，Chan Chan 的原始版本收录其中，展示他独特的双声部演唱与 tres 吉他技巧。",
    review: "传统、温暖、技巧扎实，是了解古巴 son 音乐根源的重要材料。适合喜欢世界音乐与民谣的听众。",
    pros: ["传统音乐代表", "演唱技巧独特"], cons: ["录音较为朴素"],
    tags: ["Compay Segundo", "古巴", "世界音乐"],
    scores: [{ src: "Rate Your Music", val: 3.9, max: 5 }, { src: "AllMusic", val: 4, max: 5 }, { src: "豆瓣音乐", val: 8.9, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=compay segundo" },
      { kind: "收听", label: "YouTube Music 搜索", url: "https://music.youtube.com/search?q=compay segundo yo soy del son" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Compay Segundo" }
    ],
    related: ["music/buena-vista-social-club", "music/ibrahim-ferrer-buenos-hermanos", "music/cesaria-evora-miss-perfumado"],
    image: "assets/img/music/compay-segundo-yo-soy-del-son.jpg",
    f: { form: ["精选集"], genre: ["世界音乐", "拉丁", "民谣"] }
  },
  {
    id: "ry-cooder-chicken-skin-music", cat: "music", title: "Chicken Skin Music", alt: "雷·库德 · 鸡皮音乐", year: 1976, region: "美国",
    summary: "Ry Cooder 融合夏威夷 slack-key 吉他、墨西哥民谣与福音音乐的实验之作，展现他作为吉他手与制作人的广阔视野。",
    review: "风格跨度大、演奏技巧高超，是了解美国根源音乐与世界音乐交叉的重要唱片。适合吉他爱好者。",
    pros: ["吉他技巧精湛", "跨文化融合自然"], cons: ["风格较杂"],
    tags: ["Ry Cooder", "世界音乐", "民谣"],
    scores: [{ src: "Rate Your Music", val: 3.9, max: 5 }, { src: "AllMusic", val: 4.5, max: 5 }, { src: "豆瓣音乐", val: 8.8, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=ry cooder chicken skin music" },
      { kind: "收听", label: "Bandcamp 搜索", url: "https://bandcamp.com/search?q=ry cooder" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Chicken Skin Music" }
    ],
    related: ["music/ali-farka-toure-talking-timbuktu", "music/buena-vista-social-club", "music/tinariwen-amassakoul"],
    image: "assets/img/music/ry-cooder-chicken-skin-music.jpg",
    f: { form: ["录音室专辑"], genre: ["世界音乐", "民谣", "蓝调"] }
  },
  {
    id: "mdou-moctar-afelan", cat: "music", title: "Afelan", alt: "姆杜·莫克塔尔 · 阿费兰", year: 2020, region: "尼日尔",
    summary: "图阿雷格吉他手用迷幻摇滚手法重新演绎沙漠蓝调，现场感极强的吉他独奏与呼喊式演唱充满能量。",
    review: "比前辈更摇滚、更具攻击性，是当代 desert blues 最充满活力的作品。适合驾驶与需要能量的场合。",
    pros: ["吉他能量强", "现场感极佳"], cons: ["录音较粗粝"],
    tags: ["Mdou Moctar", "沙漠蓝调", "迷幻摇滚"],
    scores: [{ src: "Rate Your Music", val: 3.9, max: 5 }, { src: "Metacritic", val: 84, max: 100 }, { src: "豆瓣音乐", val: 8.7, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=mdou moctar afelan" },
      { kind: "收听", label: "Bandcamp 搜索", url: "https://mdoumoctar.bandcamp.com/" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Mdou Moctar" }
    ],
    related: ["music/bombino-nomad", "music/tinariwen-amassakoul", "music/ali-farka-toure-talking-timbuktu"],
    image: "assets/img/music/mdou-moctar-afelan.jpg",
    f: { form: ["录音室专辑"], genre: ["世界音乐", "蓝调", "迷幻摇滚"] }
  },
  {
    id: "miriam-makeba-pata-pata", cat: "music", title: "Pata Pata", alt: "米丽娅姆·马凯巴 · 帕塔帕塔", year: 1967, region: "南非",
    summary: "南非音乐走向世界的代表专辑，标题曲成为全球金曲，Makeba 用多种非洲语言演唱并融入爵士与流行编曲。",
    review: "节奏欢快、旋律易记，是了解南非音乐的绝佳入口。适合聚会、运动与需要欢快氛围的场合。",
    pros: ["旋律欢快易记", "跨文化融合成功"], cons: ["制作较为简单"],
    tags: ["Miriam Makeba", "世界音乐", "非洲"],
    scores: [{ src: "Rate Your Music", val: 3.9, max: 5 }, { src: "AllMusic", val: 4, max: 5 }, { src: "豆瓣音乐", val: 8.9, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=miriam makeba pata pata" },
      { kind: "收听", label: "Spotify 搜索", url: "https://open.spotify.com/search/miriam%20makeba%20pata%20pata" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Pata Pata" }
    ],
    related: ["music/buena-vista-social-club", "music/cesaria-evora-miss-perfumado", "music/ladysmith-black-mambazo-shaka-zulu"],
    image: "assets/img/music/miriam-makeba-pata-pata.jpg",
    f: { form: ["录音室专辑"], genre: ["世界音乐", "爵士", "流行"] }
  },
  {
    id: "ladysmith-black-mambazo-shaka-zulu", cat: "music", title: "Shaka Zulu", alt: "莱迪史密斯·布莱克·曼巴佐 · 沙卡祖鲁", year: 1987, region: "南非",
    summary: "南非无伴奏合唱团体在 Paul Simon 的 Graceland 之后发行的专辑，获格莱美奖，展示 isicathamiya 和声传统的精湛技艺。",
    review: "和声层次丰富、演唱技巧惊人，是世界音乐中最具代表性的合唱作品之一。适合安静聆听。",
    pros: ["和声精湛", "传统音乐代表"], cons: ["无器乐伴奏"],
    tags: ["Ladysmith Black Mambazo", "世界音乐", "合唱"],
    scores: [{ src: "Rate Your Music", val: 3.9, max: 5 }, { src: "AllMusic", val: 4.5, max: 5 }, { src: "豆瓣音乐", val: 8.9, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=shaka zulu ladysmith" },
      { kind: "收听", label: "网易云搜索", url: "https://music.163.com/#/search/m/?s=Ladysmith Black Mambazo Shaka Zulu" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Shaka Zulu album" }
    ],
    related: ["music/paul-simon-graceland", "music/miriam-makeba-pata-pata", "music/cesaria-evora-miss-perfumado"],
    image: "assets/img/music/ladysmith-black-mambazo-shaka-zulu.jpg",
    f: { form: ["录音室专辑"], genre: ["世界音乐", "合唱", "民谣"] }
  },
  {
    id: "sun-ra-space-is-the-place", cat: "music", title: "Space Is the Place", alt: "桑·拉 · 太空就是位置", year: 1973, region: "美国",
    summary: "Sun Ra Arkestra 的太空爵士代表作，二十多分钟的标题曲用电子琴、铜管与吟唱构建出科幻般的仪式现场。",
    review: "极度自由、充满戏剧性，是理解 avant-garde jazz 与非洲未来主义的关键作品。适合已经熟悉自由爵士的听众。",
    pros: ["概念宏大", "即兴自由度高"], cons: ["结构极松散"],
    tags: ["Sun Ra", "自由爵士", "太空爵士"],
    scores: [{ src: "Rate Your Music", val: 4, max: 5 }, { src: "AllMusic", val: 4.5, max: 5 }, { src: "豆瓣音乐", val: 8.9, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=sun ra space is the place" },
      { kind: "收听", label: "Bandcamp 搜索", url: "https://bandcamp.com/search?q=sun ra space is the place" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Space Is the Place Sun Ra" }
    ],
    related: ["music/pharoah-sanders-karma", "music/alice-coltrane-journey-in-satchidananda", "music/john-coltrane-a-love-supreme"],
    image: "assets/img/music/sun-ra-space-is-the-place.jpg",
    f: { form: ["录音室专辑"], genre: ["爵士", "自由爵士", "实验"] }
  },
  {
    id: "dorothy-ashby-the-fantastic-jazz-harp", cat: "music", title: "The Fantastic Jazz Harp of Dorothy Ashby", alt: "多萝西·阿什比 · 非凡的爵士竖琴", year: 1984, region: "美国",
    summary: "把爵士竖琴从伴奏乐器提升为主奏乐器的代表作，Ashby 的即兴能力与音色控制让竖琴在爵士语境中获得全新地位。",
    review: "音色清亮、即兴流畅，是了解爵士竖琴传统的必备。近年因采样被 hip-hop 制作人重新发现。",
    pros: ["竖琴爵士化成功", "即兴流畅"], cons: ["录音年代感强"],
    tags: ["Dorothy Ashby", "爵士", "竖琴"],
    scores: [{ src: "Rate Your Music", val: 4, max: 5 }, { src: "AllMusic", val: 4.5, max: 5 }, { src: "豆瓣音乐", val: 8.9, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=dorothy ashby jazz harp" },
      { kind: "收听", label: "Spotify 搜索", url: "https://open.spotify.com/search/dorothy%20ashby" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Dorothy Ashby" }
    ],
    related: ["music/alice-coltrane-journey-in-satchidananda", "music/bill-evans-waltz-for-debby", "music/horace-silver-song-for-my-father"],
    image: "assets/img/music/dorothy-ashby-the-fantastic-jazz-harp.jpg",
    f: { form: ["录音室专辑"], genre: ["爵士", "灵魂爵士"] }
  },
  {
    id: "jay-chou-fantasy", cat: "music", title: "范特西", alt: "周杰伦 · 范特西", year: 2001, region: "中国台湾",
    summary: "华语流行音乐的分水岭，双截棍、爱在西元前与简单爱把 R&B、hip-hop、中国风与古典元素融合，重新定义了华语流行。",
    review: "旋律与编曲的创新度至今难以超越，是华语流行入门的首选。适合所有年龄段，也是 KTV 经典曲目来源。",
    pros: ["风格融合开创性", "旋律传唱度极高"], cons: ["部分曲目制作略糙"],
    tags: ["周杰伦", "华语流行", "R&B"],
    scores: [{ src: "豆瓣音乐", val: 9.3, max: 10 }, { src: "Rate Your Music", val: 3.7, max: 5 }, { src: "金曲奖", val: 5, max: 5 }],
    links: [
      { kind: "资料", label: "豆瓣搜索", url: "https://search.douban.com/music/subject_search?search_text=周杰伦 范特西" },
      { kind: "收听", label: "QQ音乐搜索", url: "https://y.qq.com/n/ryqq/search?w=周杰伦 范特西" },
      { kind: "收听", label: "网易云搜索", url: "https://music.163.com/#/search/m/?s=周杰伦 范特西" }
    ],
    related: ["music/jay-chou-ye-hui-mei", "music/david-tao-david-tao", "music/faye-wong-fable"],
    image: "assets/img/music/jay-chou-fantasy.jpg",
    f: { form: ["录音室专辑"], genre: ["流行", "R&B", "嘻哈"] }
  },
  {
    id: "jay-chou-ye-hui-mei", cat: "music", title: "叶惠美", alt: "周杰伦 · 叶惠美", year: 2003, region: "中国台湾",
    summary: "以母亲命名的专辑，晴天、以父之名与东风破把中国风与流行摇滚结合到成熟阶段，编曲层次更加丰富。",
    review: "创作成熟度极高，晴天成为华语流行最传唱的歌曲之一。适合喜欢中国风与流行摇滚结合的听众。",
    pros: ["中国风成熟", "编曲层次丰富"], cons: ["部分曲目偏长"],
    tags: ["周杰伦", "华语流行", "中国风"],
    scores: [{ src: "豆瓣音乐", val: 9.2, max: 10 }, { src: "Rate Your Music", val: 3.7, max: 5 }, { src: "金曲奖", val: 4, max: 5 }],
    links: [
      { kind: "资料", label: "豆瓣搜索", url: "https://search.douban.com/music/subject_search?search_text=周杰伦 叶惠美" },
      { kind: "收听", label: "QQ音乐搜索", url: "https://y.qq.com/n/ryqq/search?w=周杰伦 叶惠美" },
      { kind: "收听", label: "网易云搜索", url: "https://music.163.com/#/search/m/?s=周杰伦 叶惠美" }
    ],
    related: ["music/jay-chou-fantasy", "music/david-tao-david-tao", "music/faye-wong-fable"],
    image: "assets/img/music/jay-chou-ye-hui-mei.jpg",
    f: { form: ["录音室专辑"], genre: ["流行", "R&B", "摇滚"] }
  },
  {
    id: "david-tao-david-tao", cat: "music", title: "David Tao", alt: "陶喆 · 陶喆", year: 1997, region: "中国台湾",
    summary: "把 R&B 真正带入华语主流的处女作，爱很简单与飞机场的10:30 展示了他作为制作人与歌手的双重能力。",
    review: "编曲精致、唱功扎实，是华语 R&B 的起点之作。适合喜欢节奏蓝调与流行结合的听众。",
    pros: ["R&B 引入华语", "制作水准高"], cons: ["部分曲目年代感强"],
    tags: ["陶喆", "华语流行", "R&B"],
    scores: [{ src: "豆瓣音乐", val: 9, max: 10 }, { src: "Rate Your Music", val: 3.6, max: 5 }, { src: "金曲奖", val: 4, max: 5 }],
    links: [
      { kind: "资料", label: "豆瓣搜索", url: "https://search.douban.com/music/subject_search?search_text=陶喆 David Tao" },
      { kind: "收听", label: "QQ音乐搜索", url: "https://y.qq.com/n/ryqq/search?w=陶喆" },
      { kind: "收听", label: "网易云搜索", url: "https://music.163.com/#/search/m/?s=陶喆" }
    ],
    related: ["music/jay-chou-fantasy", "music/faye-wong-fable", "music/leehom-wang-shangri-la"],
    image: "assets/img/music/david-tao-david-tao.jpg",
    f: { form: ["录音室专辑"], genre: ["R&B", "流行"] }
  },
  {
    id: "faye-wong-fable", cat: "music", title: "寓言", alt: "王菲 · 寓言", year: 2000, region: "中国香港",
    summary: "王菲艺术性最高的一张，寒武纪与新房客用弦乐与电子构建五段式概念结构，林夕负责全部词作。",
    review: "概念完整、音色前卫，是华语流行中最具实验精神的主流唱片。适合喜欢另类流行与概念专辑的听众。",
    pros: ["概念结构完整", "音色前卫"], cons: ["流行度较低"],
    tags: ["王菲", "华语流行", "另类"],
    scores: [{ src: "豆瓣音乐", val: 9.1, max: 10 }, { src: "Rate Your Music", val: 3.8, max: 5 }, { src: "金曲奖", val: 4, max: 5 }],
    links: [
      { kind: "资料", label: "豆瓣搜索", url: "https://search.douban.com/music/subject_search?search_text=王菲 寓言" },
      { kind: "收听", label: "QQ音乐搜索", url: "https://y.qq.com/n/ryqq/search?w=王菲 寓言" },
      { kind: "收听", label: "网易云搜索", url: "https://music.163.com/#/search/m/?s=王菲 寓言" }
    ],
    related: ["music/faye-wong-sky", "music/jay-chou-fantasy", "music/cocteau-twins-heaven-or-las-vegas"],
    image: "assets/img/music/faye-wong-fable.jpg",
    f: { form: ["录音室专辑"], genre: ["流行", "另类", "电子"] }
  },
  {
    id: "faye-wong-sky", cat: "music", title: "天空", alt: "王菲 · 天空", year: 1994, region: "中国香港",
    summary: "王菲确立个人风格的专辑，棋子与天空展示她空灵的嗓音与对英式另类流行的吸收，是华语流行的重要转折。",
    review: "音色清亮、编曲简约，适合安静聆听。是了解王菲早期风格与 90 年代华语流行的好材料。",
    pros: ["嗓音空灵", "编曲简约精致"], cons: ["风格较单一"],
    tags: ["王菲", "华语流行", "1994"],
    scores: [{ src: "豆瓣音乐", val: 9, max: 10 }, { src: "Rate Your Music", val: 3.7, max: 5 }, { src: "金曲奖", val: 3, max: 5 }],
    links: [
      { kind: "资料", label: "豆瓣搜索", url: "https://search.douban.com/music/subject_search?search_text=王菲 天空" },
      { kind: "收听", label: "QQ音乐搜索", url: "https://y.qq.com/n/ryqq/search?w=王菲 天空" },
      { kind: "收听", label: "网易云搜索", url: "https://music.163.com/#/search/m/?s=王菲 天空" }
    ],
    related: ["music/faye-wong-fable", "music/david-tao-david-tao", "music/sandy-lam-sandy-lam"],
    image: "assets/img/music/faye-wong-sky.jpg",
    f: { form: ["录音室专辑"], genre: ["流行", "另类"] }
  },
  {
    id: "leehom-wang-shangri-la", cat: "music", title: "心中的日月", alt: "王力宏 · 心中的日月", year: 2004, region: "中国台湾",
    summary: "王力宏提出的 Chinked-out 概念首作，把中国民乐采样与 hip-hop 节拍结合，Forever Love 与心中的日月传唱度极高。",
    review: "制作精良、旋律抓耳，是华语流行与 hip-hop 融合的成功样本。适合喜欢节奏感强与旋律优美并存的听众。",
    pros: ["中西融合成功", "制作水准高"], cons: ["概念略表面"],
    tags: ["王力宏", "华语流行", "嘻哈"],
    scores: [{ src: "豆瓣音乐", val: 8.6, max: 10 }, { src: "Rate Your Music", val: 3.4, max: 5 }, { src: "金曲奖", val: 3, max: 5 }],
    links: [
      { kind: "资料", label: "豆瓣搜索", url: "https://search.douban.com/music/subject_search?search_text=王力宏 心中的日月" },
      { kind: "收听", label: "QQ音乐搜索", url: "https://y.qq.com/n/ryqq/search?w=王力宏 心中的日月" },
      { kind: "收听", label: "网易云搜索", url: "https://music.163.com/#/search/m/?s=王力宏" }
    ],
    related: ["music/jay-chou-ye-hui-mei", "music/david-tao-david-tao", "music/faye-wong-fable"],
    image: "assets/img/music/leehom-wang-shangri-la.jpg",
    f: { form: ["录音室专辑"], genre: ["流行", "嘻哈", "R&B"] }
  },
  {
    id: "sandy-lam-sandy-lam", cat: "music", title: "野花", alt: "林忆莲 · 野花", year: 1991, region: "中国香港",
    summary: "林忆莲艺术转型的代表作，Dick Lee 的编曲把粤语流行与新世纪音乐、世界音乐结合，前尘与野花成为经典。",
    review: "制作精致、演唱细腻，是粤语流行向艺术化转型的重要样本。适合喜欢 90 年代粤语经典与新世纪音乐的听众。",
    pros: ["编曲精致", "演唱细腻"], cons: ["流行度较低"],
    tags: ["林忆莲", "粤语流行", "新世纪"],
    scores: [{ src: "豆瓣音乐", val: 9, max: 10 }, { src: "Rate Your Music", val: 3.7, max: 5 }, { src: "金曲奖", val: 4, max: 5 }],
    links: [
      { kind: "资料", label: "豆瓣搜索", url: "https://search.douban.com/music/subject_search?search_text=林忆莲 野花" },
      { kind: "收听", label: "QQ音乐搜索", url: "https://y.qq.com/n/ryqq/search?w=林忆莲 野花" },
      { kind: "收听", label: "网易云搜索", url: "https://music.163.com/#/search/m/?s=林忆莲 野花" }
    ],
    related: ["music/faye-wong-sky", "music/leslie-cheung-salute", "music/david-tao-david-tao"],
    image: "assets/img/music/sandy-lam-sandy-lam.jpg",
    f: { form: ["录音室专辑"], genre: ["流行", "新世纪", "粤语"] }
  },
  {
    id: "leslie-cheung-salute", cat: "music", title: "Salute", alt: "张国荣 · 致敬", year: 1989, region: "中国香港",
    summary: "张国荣翻唱华语经典的专辑，为你钟情与风继续吹的新版本展示他作为歌手的成熟与情感深度。",
    review: "演唱真挚、编曲克制，是粤语流行的重要文献。适合喜欢张国荣与 80 年代粤语经典的听众。",
    pros: ["演唱情感真挚", "选曲经典"], cons: ["多为翻唱"],
    tags: ["张国荣", "粤语流行", "1989"],
    scores: [{ src: "豆瓣音乐", val: 9.2, max: 10 }, { src: "Rate Your Music", val: 3.7, max: 5 }, { src: "金曲奖", val: 4, max: 5 }],
    links: [
      { kind: "资料", label: "豆瓣搜索", url: "https://search.douban.com/music/subject_search?search_text=张国荣 Salute" },
      { kind: "收听", label: "QQ音乐搜索", url: "https://y.qq.com/n/ryqq/search?w=张国荣 Salute" },
      { kind: "收听", label: "网易云搜索", url: "https://music.163.com/#/search/m/?s=张国荣" }
    ],
    related: ["music/sandy-lam-sandy-lam", "music/faye-wong-sky", "music/beyond-le-beyond"],
    image: "assets/img/music/leslie-cheung-salute.jpg",
    f: { form: ["翻唱专辑"], genre: ["流行", "粤语"] }
  },
  {
    id: "beyond-le-beyond", cat: "music", title: "乐与怒", alt: "Beyond · 乐与怒", year: 1993, region: "中国香港",
    summary: "Beyond 最具代表性的专辑之一，海阔天空成为华语摇滚的精神符号，展现乐队在流行与摇滚之间的平衡能力。",
    review: "旋律与态度兼备，是粤语摇滚的巅峰之作。适合喜欢摇滚与励志主题的听众，也是 KTV 必备。",
    pros: ["旋律传唱度极高", "摇滚态度鲜明"], cons: ["部分曲目偏流行"],
    tags: ["Beyond", "粤语摇滚", "1993"],
    scores: [{ src: "豆瓣音乐", val: 9.3, max: 10 }, { src: "Rate Your Music", val: 3.6, max: 5 }, { src: "金曲奖", val: 4, max: 5 }],
    links: [
      { kind: "资料", label: "豆瓣搜索", url: "https://search.douban.com/music/subject_search?search_text=Beyond 乐与怒" },
      { kind: "收听", label: "QQ音乐搜索", url: "https://y.qq.com/n/ryqq/search?w=Beyond 乐与怒" },
      { kind: "收听", label: "网易云搜索", url: "https://music.163.com/#/search/m/?s=Beyond 海阔天空" }
    ],
    related: ["music/leslie-cheung-salute", "music/cui-jian-nothing-to-my-name", "music/sandy-lam-sandy-lam"],
    image: "assets/img/music/beyond-le-beyond.jpg",
    f: { form: ["录音室专辑"], genre: ["摇滚", "流行", "粤语"] }
  },
  {
    id: "cui-jian-nothing-to-my-name", cat: "music", title: "新长征路上的摇滚", alt: "崔健 · 新长征路上的摇滚", year: 1989, region: "中国大陆",
    summary: "中国大陆摇滚的起点，一无所有与假行僧把西北民歌、放克与摇滚结合，崔健的沙哑嗓音成为一代人的声音。",
    review: "历史意义无可替代，音乐本身也极具力量。适合了解中国摇滚起源，也适合喜欢放克与民歌融合的听众。",
    pros: ["开创中国摇滚", "融合风格独特"], cons: ["录音技术受限"],
    tags: ["崔健", "中国摇滚", "1989"],
    scores: [{ src: "豆瓣音乐", val: 9.4, max: 10 }, { src: "Rate Your Music", val: 3.9, max: 5 }, { src: "华语金曲奖", val: 5, max: 5 }],
    links: [
      { kind: "资料", label: "豆瓣搜索", url: "https://search.douban.com/music/subject_search?search_text=崔健 新长征路上的摇滚" },
      { kind: "收听", label: "QQ音乐搜索", url: "https://y.qq.com/n/ryqq/search?w=崔健" },
      { kind: "收听", label: "网易云搜索", url: "https://music.163.com/#/search/m/?s=崔健 一无所有" }
    ],
    related: ["music/beyond-le-beyond", "music/dou-wei-black-dream", "music/tang-dynasty-tang-dynasty"],
    image: "assets/img/music/cui-jian-nothing-to-my-name.jpg",
    f: { form: ["录音室专辑"], genre: ["摇滚", "民谣", "放克"] }
  },
  {
    id: "dou-wei-black-dream", cat: "music", title: "黑梦", alt: "窦唯 · 黑梦", year: 1994, region: "中国大陆",
    summary: "窦唯离开黑豹后的首张个人专辑，从摇滚转向后朋克与哥特，高级动物与开心电话展示全新的音乐方向。",
    review: "情绪阴郁、编曲前卫，是中国摇滚向另类转型的重要作品。适合喜欢后朋克与黑暗氛围的听众。",
    pros: ["风格转型成功", "编曲前卫"], cons: ["情绪压抑"],
    tags: ["窦唯", "中国摇滚", "后朋克"],
    scores: [{ src: "豆瓣音乐", val: 9.2, max: 10 }, { src: "Rate Your Music", val: 3.9, max: 5 }, { src: "华语金曲奖", val: 4, max: 5 }],
    links: [
      { kind: "资料", label: "豆瓣搜索", url: "https://search.douban.com/music/subject_search?search_text=窦唯 黑梦" },
      { kind: "收听", label: "QQ音乐搜索", url: "https://y.qq.com/n/ryqq/search?w=窦唯 黑梦" },
      { kind: "收听", label: "网易云搜索", url: "https://music.163.com/#/search/m/?s=窦唯 黑梦" }
    ],
    related: ["music/cui-jian-nothing-to-my-name", "music/tang-dynasty-tang-dynasty", "music/joy-division-unknown-pleasures"],
    image: "assets/img/music/dou-wei-black-dream.jpg",
    f: { form: ["录音室专辑"], genre: ["摇滚", "后朋克", "另类"] }
  },
  {
    id: "tang-dynasty-tang-dynasty", cat: "music", title: "唐朝", alt: "唐朝乐队 · 唐朝", year: 1992, region: "中国大陆",
    summary: "中国重金属的里程碑，梦回唐朝与天堂把京剧唱腔、古典意象与重金属 riff 结合，气势恢宏。",
    review: "技术与概念兼备，是中国摇滚史上最具野心的作品之一。适合喜欢重金属与中国古典意象结合的听众。",
    pros: ["中西融合大胆", "气势恢宏"], cons: ["部分曲目冗长"],
    tags: ["唐朝乐队", "中国摇滚", "重金属"],
    scores: [{ src: "豆瓣音乐", val: 9.1, max: 10 }, { src: "Rate Your Music", val: 3.8, max: 5 }, { src: "华语金曲奖", val: 4, max: 5 }],
    links: [
      { kind: "资料", label: "豆瓣搜索", url: "https://search.douban.com/music/subject_search?search_text=唐朝乐队 唐朝" },
      { kind: "收听", label: "QQ音乐搜索", url: "https://y.qq.com/n/ryqq/search?w=唐朝乐队" },
      { kind: "收听", label: "网易云搜索", url: "https://music.163.com/#/search/m/?s=唐朝乐队 梦回唐朝" }
    ],
    related: ["music/cui-jian-nothing-to-my-name", "music/dou-wei-black-dream", "music/black-sabbath-paranoid"],
    image: "assets/img/music/tang-dynasty-tang-dynasty.jpg",
    f: { form: ["录音室专辑"], genre: ["重金属", "摇滚", "中国风"] }
  },
  {
    id: "paul-simon-graceland", cat: "music", title: "Graceland", alt: "保罗·西蒙 · 优雅之地", year: 1986, region: "美国",
    summary: "Paul Simon 赴南非与当地乐手合作，把 township jive、zydeco 与美式民谣融合，You Can Call Me Al 成为全球金曲并获格莱美年度专辑。",
    review: "跨文化合作的成功范例，也伴随关于文化挪用的长期争议。旋律与节奏设计极为精巧，适合所有听众。",
    pros: ["跨文化融合成功", "节奏设计精巧"], cons: ["合作伦理有争议"],
    tags: ["Paul Simon", "世界音乐", "民谣"],
    scores: [{ src: "Rate Your Music", val: 4, max: 5 }, { src: "AllMusic", val: 5, max: 5 }, { src: "Metacritic", val: 90, max: 100 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=paul simon graceland" },
      { kind: "收听", label: "Spotify 搜索", url: "https://open.spotify.com/search/paul%20simon%20graceland" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Graceland Paul Simon" }
    ],
    related: ["music/ladysmith-black-mambazo-shaka-zulu", "music/miriam-makeba-pata-pata", "music/peter-gabriel-so"],
    image: "assets/img/music/paul-simon-graceland.jpg",
    f: { form: ["录音室专辑"], genre: ["世界音乐", "民谣", "流行"] }
  },
  {
    id: "peter-gabriel-so", cat: "music", title: "So", alt: "彼得·加布里埃尔 · 如此", year: 1986, region: "英国",
    summary: "Peter Gabriel 商业与艺术的巅峰，Sledgehammer 的动画 MV 与 In Your Eyes 的世界音乐编曲成为 80 年代标志。",
    review: "制作精密、融合非洲节奏与合成器，是 80 年代最成熟的流行唱片之一。适合所有听众，也常被音响爱好者测试。",
    pros: ["制作水准极高", "融合世界音乐"], cons: ["部分曲目偏商业"],
    tags: ["Peter Gabriel", "艺术流行", "世界音乐"],
    scores: [{ src: "Rate Your Music", val: 3.9, max: 5 }, { src: "AllMusic", val: 5, max: 5 }, { src: "Metacritic", val: 88, max: 100 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=peter gabriel so" },
      { kind: "收听", label: "网易云搜索", url: "https://music.163.com/#/search/m/?s=Peter Gabriel So" },
      { kind: "官方", label: "官方站点", url: "https://petergabriel.com/" }
    ],
    related: ["music/paul-simon-graceland", "music/talking-heads-remains", "music/kate-bush-hounds-of-love"],
    image: "assets/img/music/peter-gabriel-so.jpg",
    f: { form: ["录音室专辑"], genre: ["艺术流行", "摇滚", "世界音乐"] }
  },
  {
    id: "talking-heads-remains", cat: "music", title: "Remain in Light", alt: "传声头像 · 留在光中", year: 1980, region: "美国",
    summary: "Brian Eno 制作，把纽约艺术朋克与非洲节奏、funk 结合，Once in a Lifetime 成为流行文化经典，多层循环录制方式极为前卫。",
    review: "节奏复杂、层次丰富，是 80 年代最具实验精神的主流唱片。适合喜欢 funk、非洲节奏与艺术摇滚的听众。",
    pros: ["节奏层次丰富", "融合前卫"], cons: ["人声念白式演唱挑人"],
    tags: ["Talking Heads", "新浪潮", "Funk"],
    scores: [{ src: "Rate Your Music", val: 4.2, max: 5 }, { src: "Pitchfork", val: 10, max: 10 }, { src: "AllMusic", val: 5, max: 5 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=talking heads remain in light" },
      { kind: "收听", label: "Spotify 搜索", url: "https://open.spotify.com/search/talking%20heads%20remain%20in%20light" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Remain in Light" }
    ],
    related: ["music/peter-gabriel-so", "music/kate-bush-hounds-of-love", "music/new-order-power-corruption-lies"],
    image: "assets/img/music/talking-heads-remains.jpg",
    f: { form: ["录音室专辑"], genre: ["新浪潮", "放克", "艺术流行"] }
  },
  {
    id: "kate-bush-hounds-of-love", cat: "music", title: "Hounds of Love", alt: "凯特·布希 · 爱之猎犬", year: 1985, region: "英国",
    summary: "Kate Bush 自主制作的代表作，A 面是 Running Up That Hill 与 Cloudbusting 等流行曲，B 面 The Ninth Wave 是七段式概念组曲。",
    review: "声音设计与概念野心在当时极为罕见，2022 年因剧集重新翻红。适合喜欢艺术流行与概念结构的听众。",
    pros: ["概念结构完整", "声音设计前卫"], cons: ["B面较抽象"],
    tags: ["Kate Bush", "艺术流行", "1985"],
    scores: [{ src: "Rate Your Music", val: 4.2, max: 5 }, { src: "Pitchfork", val: 9.5, max: 10 }, { src: "AllMusic", val: 5, max: 5 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=kate bush hounds of love" },
      { kind: "收听", label: "Apple Music 搜索", url: "https://music.apple.com/cn/search?term=hounds of love kate bush" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Hounds of Love" }
    ],
    related: ["music/peter-gabriel-so", "music/talking-heads-remains", "music/bjork-homogenic"],
    image: "assets/img/music/kate-bush-hounds-of-love.jpg",
    f: { form: ["录音室专辑"], genre: ["艺术流行", "前卫流行", "电子"] }
  },
  {
    id: "bjork-homogenic", cat: "music", title: "Homogenic", alt: "比约克 · 同质", year: 1997, region: "冰岛",
    summary: "Björk 把弦乐、电子节拍与冰岛民歌元素结合，Bachelorette 与 Jöga 创造出冷冽而宏大的声音景观。",
    review: "声音设计极具辨识度，是电子与管弦融合的教科书。适合喜欢前卫流行与实验电子的听众。",
    pros: ["弦乐与电子融合独特", "声音设计精密"], cons: ["演唱风格挑人"],
    tags: ["Björk", "电子", "艺术流行"],
    scores: [{ src: "Rate Your Music", val: 4.1, max: 5 }, { src: "Pitchfork", val: 9.4, max: 10 }, { src: "AllMusic", val: 5, max: 5 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=bjork homogenic" },
      { kind: "收听", label: "Spotify 搜索", url: "https://open.spotify.com/search/bjork%20homogenic" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Homogenic" }
    ],
    related: ["music/kate-bush-hounds-of-love", "music/boards-of-canada-music-has-the-right", "music/four-tet-rounds"],
    image: "assets/img/music/bjork-homogenic.jpg",
    f: { form: ["录音室专辑"], genre: ["电子", "艺术流行", "实验"] }
  },
  {
    id: "daft-punk-discovery", cat: "music", title: "Discovery", alt: "蠢朋克 · 发现", year: 2001, region: "法国",
    summary: "French House 的巅峰之作，One More Time 与 Harder Better Faster Stronger 把 disco 采样与电子节拍推向全球主流。",
    review: "旋律与节奏设计极其精巧，是电子乐最容易入门也最耐听的唱片之一。适合派对、驾驶与运动。",
    pros: ["旋律抓耳", "制作精致"], cons: ["风格较统一"],
    tags: ["Daft Punk", "电子", "French House"],
    scores: [{ src: "Rate Your Music", val: 4.1, max: 5 }, { src: "Metacritic", val: 78, max: 100 }, { src: "AllMusic", val: 4.5, max: 5 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=daft punk discovery" },
      { kind: "收听", label: "Spotify 搜索", url: "https://open.spotify.com/search/daft%20punk%20discovery" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Discovery Daft Punk" }
    ],
    related: ["music/daft-punk-random-access-memories", "music/justice-cross", "music/deadmau5-for-lack-of-a-better-name"],
    image: "assets/img/music/daft-punk-discovery.jpg",
    f: { form: ["录音室专辑"], genre: ["电子", "舞曲", "浩室"] }
  },
  {
    id: "daft-punk-random-access-memories", cat: "music", title: "Random Access Memories", alt: "蠢朋克 · 随机存取记忆", year: 2013, region: "法国",
    summary: "回归 70 年代录音室质感，与 Nile Rodgers、Pharrell Williams 合作，Get Lucky 成为全球现象级单曲，获格莱美年度专辑。",
    review: "制作水准登峰造极，是电子乐向 disco 与 funk 致敬的成功范例。适合所有听众，尤其适合音响系统展示。",
    pros: ["制作水准极高", "合作阵容豪华"], cons: ["部分曲目偏长"],
    tags: ["Daft Punk", "电子", "Disco"],
    scores: [{ src: "Rate Your Music", val: 3.9, max: 5 }, { src: "Metacritic", val: 87, max: 100 }, { src: "AllMusic", val: 4, max: 5 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=random access memories" },
      { kind: "收听", label: "QQ音乐搜索", url: "https://y.qq.com/n/ryqq/search?w=Daft Punk Random Access Memories" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Random Access Memories" }
    ],
    related: ["music/daft-punk-discovery", "music/justice-cross", "music/parcels-anspera"],
    image: "assets/img/music/daft-punk-random-access-memories.jpg",
    f: { form: ["录音室专辑"], genre: ["电子", "迪斯科", "放克"] }
  },
  {
    id: "justice-cross", cat: "music", title: "Cross", alt: "Justice · 十字", year: 2007, region: "法国",
    summary: "把重金属的失真与 French House 的律动结合，D.A.N.C.E. 与 Genesis 成为 2000 年代电子舞曲的代表作。",
    review: "能量密度高、制作激进，适合派对、运动与需要强节奏的场合。是电子摇滚化趋势的重要作品。",
    pros: ["能量密度极高", "音色设计激进"], cons: ["部分曲目过载"],
    tags: ["Justice", "电子", "French House"],
    scores: [{ src: "Rate Your Music", val: 4, max: 5 }, { src: "Metacritic", val: 82, max: 100 }, { src: "AllMusic", val: 4.5, max: 5 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=justice cross" },
      { kind: "收听", label: "Spotify 搜索", url: "https://open.spotify.com/search/justice%20cross" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Cross Justice album" }
    ],
    related: ["music/daft-punk-discovery", "music/deadmau5-for-lack-of-a-better-name", "music/chemical-brothers-dig-your-own-hole"],
    image: "assets/img/music/justice-cross.jpg",
    f: { form: ["录音室专辑"], genre: ["电子", "舞曲", "浩室"] }
  },
  {
    id: "chemical-brothers-dig-your-own-hole", cat: "music", title: "Dig Your Own Hole", alt: "化学兄弟 · 挖你自己的洞", year: 1997, region: "英国",
    summary: "Big Beat 的代表作，Block Rockin Beats 与 Setting Sun 把摇滚的能量与电子的节奏结合，获格莱美奖。",
    review: "能量极强、制作粗糙有力，是 90 年代电子舞曲进入主流的关键作品。适合派对与运动。",
    pros: ["能量密度高", "摇滚与电子融合"], cons: ["部分曲目重复"],
    tags: ["The Chemical Brothers", "Big Beat", "电子"],
    scores: [{ src: "Rate Your Music", val: 4, max: 5 }, { src: "AllMusic", val: 5, max: 5 }, { src: "Metacritic", val: 84, max: 100 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=dig your own hole" },
      { kind: "收听", label: "Spotify 搜索", url: "https://open.spotify.com/search/chemical%20brothers%20dig%20your%20own%20hole" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Dig Your Own Hole" }
    ],
    related: ["music/justice-cross", "music/prodigy-the-fat-of-the-land", "music/daft-punk-discovery"],
    image: "assets/img/music/chemical-brothers-dig-your-own-hole.jpg",
    f: { form: ["录音室专辑"], genre: ["电子", "Big Beat", "舞曲"] }
  },
  {
    id: "prodigy-the-fat-of-the-land", cat: "music", title: "The Fat of the Land", alt: "神韵乐团 · 大地的肥肉", year: 1997, region: "英国",
    summary: "Big Beat 与 breakbeat hardcore 的商业巅峰，Breathe 与 Firestarter 把电子舞曲推向体育场级能量。",
    review: "能量极强、攻击性十足，适合运动、驾驶与需要爆发的场合。是 90 年代电子舞曲最具冲击力的作品。",
    pros: ["能量爆发力极强", "节奏设计激进"], cons: ["风格较单一"],
    tags: ["The Prodigy", "Big Beat", "Breakbeat"],
    scores: [{ src: "Rate Your Music", val: 3.8, max: 5 }, { src: "AllMusic", val: 4.5, max: 5 }, { src: "Metacritic", val: 78, max: 100 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=the fat of the land prodigy" },
      { kind: "收听", label: "Spotify 搜索", url: "https://open.spotify.com/search/prodigy%20fat%20of%20the%20land" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=The Fat of the Land" }
    ],
    related: ["music/chemical-brothers-dig-your-own-hole", "music/justice-cross", "music/deadmau5-for-lack-of-a-better-name"],
    image: "assets/img/music/prodigy-the-fat-of-the-land.jpg",
    f: { form: ["录音室专辑"], genre: ["电子", "Big Beat", "舞曲"] }
  },
  {
    id: "deadmau5-for-lack-of-a-better-name", cat: "music", title: "For Lack of a Better Name", alt: "鼠来宝 · 姑且如此命名", year: 2009, region: "加拿大",
    summary: "Progressive House 的代表作，Ghosts n Stuff 与 Strobe 展示了 Deadmau5 在旋律构建与音色设计上的能力，Strobe 十分钟的推进被誉为电子乐史诗。",
    review: "旋律与结构俱佳，Strobe 单独就值得一听。适合喜欢 progressive house 与长曲目结构的人。",
    pros: ["旋律构建出色", "Strobe 结构宏大"], cons: ["部分曲目偏长"],
    tags: ["Deadmau5", "Progressive House", "电子"],
    scores: [{ src: "Rate Your Music", val: 3.7, max: 5 }, { src: "Metacritic", val: 74, max: 100 }, { src: "AllMusic", val: 4, max: 5 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=for lack of a better name" },
      { kind: "收听", label: "Spotify 搜索", url: "https://open.spotify.com/search/deadmau5%20for%20lack%20of%20a%20better%20name" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=For Lack of a Better Name" }
    ],
    related: ["music/justice-cross", "music/daft-punk-discovery", "music/tycho-dive"],
    image: "assets/img/music/deadmau5-for-lack-of-a-better-name.jpg",
    f: { form: ["录音室专辑"], genre: ["电子", "浩室", "前卫摇滚"] }
  },
  {
    id: "tycho-dive", cat: "music", title: "Dive", alt: "Tycho · 潜水", year: 2011, region: "美国",
    summary: "Scott Hansen 用吉他、合成器与自然采样构建的 chillwave 作品，A Walk 与 Dive 成为专注工作与放松的经典背景音。",
    review: "旋律优美、氛围温暖，是 chillwave 与 lo-fi 之间的最佳桥梁。适合工作、阅读与驾驶背景。",
    pros: ["氛围温暖", "旋律优美"], cons: ["节奏变化少"],
    tags: ["Tycho", "Chillwave", "电子"],
    scores: [{ src: "Rate Your Music", val: 3.7, max: 5 }, { src: "Metacritic", val: 76, max: 100 }, { src: "AllMusic", val: 4, max: 5 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=tycho dive" },
      { kind: "收听", label: "Bandcamp 搜索", url: "https://tycho.bandcamp.com/album/dive" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Tycho Dive" }
    ],
    related: ["music/boards-of-canada-music-has-the-right", "music/four-tet-rounds", "music/deadmau5-for-lack-of-a-better-name"],
    image: "assets/img/music/tycho-dive.jpg",
    f: { form: ["录音室专辑"], genre: ["电子", "Chillwave", "氛围"] }
  },
  {
    id: "parcels-anspera", cat: "music", title: "Anspera", alt: "Parcels · 安斯佩拉", year: 2020, region: "澳大利亚",
    summary: "五人乐队把 70 年代 funk 与 disco 用现代制作重新演绎，Tieduprightnow 与 IknowhowIfeel 律动极佳。",
    review: "现场演奏能力极强，制作干净，是当代 funk 复兴的代表。适合派对、驾驶与需要律动的场合。",
    pros: ["律动极佳", "现场演奏能力强"], cons: ["风格较复古"],
    tags: ["Parcels", "Funk", "Disco"],
    scores: [{ src: "Rate Your Music", val: 3.8, max: 5 }, { src: "Metacritic", val: 78, max: 100 }, { src: "AllMusic", val: 4, max: 5 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=parcels anstera" },
      { kind: "收听", label: "Spotify 搜索", url: "https://open.spotify.com/search/parcels" },
      { kind: "官方", label: "官方站点", url: "https://www.parcelsmusic.com/" }
    ],
    related: ["music/daft-punk-random-access-memories", "music/jamiroquai-travelling-without-moving", "music/parliament-mothership-connection"],
    image: "assets/img/music/parcels-anspera.jpg",
    f: { form: ["录音室专辑"], genre: ["放克", "迪斯科", "流行"] }
  },
  {
    id: "jamiroquai-travelling-without-moving", cat: "music", title: "Travelling Without Moving", alt: "杰米罗奎 · 不动而行", year: 1996, region: "英国",
    summary: "Acid Jazz 与 funk 的商业巅峰，Virtual Insanity 的 MV 与 Cosmic Girl 的律动成为 90 年代舞曲标志，销量超千万。",
    review: "旋律与律动俱佳，是 acid jazz 最容易入门也最耐听的唱片。适合派对、驾驶与放松。",
    pros: ["律动极佳", "旋律抓耳"], cons: ["风格较统一"],
    tags: ["Jamiroquai", "Acid Jazz", "Funk"],
    scores: [{ src: "Rate Your Music", val: 3.8, max: 5 }, { src: "AllMusic", val: 4.5, max: 5 }, { src: "Metacritic", val: 76, max: 100 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=travelling without moving" },
      { kind: "收听", label: "QQ音乐搜索", url: "https://y.qq.com/n/ryqq/search?w=Jamiroquai" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Travelling Without Moving" }
    ],
    related: ["music/parcels-anspera", "music/parliament-mothership-connection", "music/stevie-wonder-songs-in-the-key-of-life"],
    image: "assets/img/music/jamiroquai-travelling-without-moving.jpg",
    f: { form: ["录音室专辑"], genre: ["Acid Jazz", "放克", "流行"] }
  },
  {
    id: "parliament-mothership-connection", cat: "music", title: "Mothership Connection", alt: "议会乐队 · 母舰连接", year: 1975, region: "美国",
    summary: "P-Funk 的核心唱片，George Clinton 用太空概念与重型 funk 节拍创造神话，Tear the Roof off the Sucker 成为 funk 标准曲。",
    review: "节奏与概念俱佳，是 funk 与 hip-hop 采样的重要来源。适合派对、驾驶与需要了解 funk 历史的人。",
    pros: ["节奏设计出色", "概念宏大"], cons: ["曲目较长"],
    tags: ["Parliament", "Funk", "P-Funk"],
    scores: [{ src: "Rate Your Music", val: 4.1, max: 5 }, { src: "AllMusic", val: 5, max: 5 }, { src: "豆瓣音乐", val: 9, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=mothership connection" },
      { kind: "收听", label: "Spotify 搜索", url: "https://open.spotify.com/search/parliament%20mothership%20connection" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Mothership Connection" }
    ],
    related: ["music/jamiroquai-travelling-without-moving", "music/stevie-wonder-songs-in-the-key-of-life", "music/parcels-anspera"],
    image: "assets/img/music/parliament-mothership-connection.jpg",
    f: { form: ["录音室专辑"], genre: ["放克", "灵魂"] }
  },
  {
    id: "stevie-wonder-songs-in-the-key-of-life", cat: "music", title: "Songs in the Key of Life", alt: "史提夫·汪达 · 生活之歌", year: 1976, region: "美国",
    summary: "双张专辑的灵魂乐巅峰，Isn't She Lovely 与 Sir Duke 展示 Stevie Wonder 作为歌手、作曲与多乐器演奏者的全能，获格莱美年度专辑。",
    review: "曲目数量多但质量极高，是灵魂乐与流行音乐的必修。适合所有听众，也常被爵士与 R&B 乐手研究。",
    pros: ["全能创作", "曲目质量极高"], cons: ["篇幅较长"],
    tags: ["Stevie Wonder", "灵魂", "Funk"],
    scores: [{ src: "Rate Your Music", val: 4.2, max: 5 }, { src: "AllMusic", val: 5, max: 5 }, { src: "Metacritic", val: 96, max: 100 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=songs in the key of life" },
      { kind: "收听", label: "Apple Music 搜索", url: "https://music.apple.com/cn/search?term=songs in the key of life" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Songs in the Key of Life" }
    ],
    related: ["music/parliament-mothership-connection", "music/marvin-gaye-whats-going-on", "music/jamiroquai-travelling-without-moving"],
    image: "assets/img/music/stevie-wonder-songs-in-the-key-of-life.jpg",
    f: { form: ["录音室专辑"], genre: ["灵魂", "放克", "流行"] }
  },
  {
    id: "marvin-gaye-whats-going-on", cat: "music", title: "What's Going On", alt: "马文·盖伊 · 发生了什么", year: 1971, region: "美国",
    summary: "以社会议题为主题的灵魂乐概念专辑，标题曲与 Mercy Mercy Me 把爵士、放克与福音融合，成为摩城唱片最重要的作品。",
    review: "主题深刻、音乐优雅，是灵魂乐向概念专辑转型的标志。适合安静聆听，也常被社会运动引用。",
    pros: ["主题深刻", "编曲优雅"], cons: ["节奏偏慢"],
    tags: ["Marvin Gaye", "灵魂", "1971"],
    scores: [{ src: "Rate Your Music", val: 4.2, max: 5 }, { src: "AllMusic", val: 5, max: 5 }, { src: "Metacritic", val: 94, max: 100 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=whats going on marvin gaye" },
      { kind: "收听", label: "网易云搜索", url: "https://music.163.com/#/search/m/?s=Marvin Gaye What's Going On" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=What's Going On Marvin Gaye" }
    ],
    related: ["music/stevie-wonder-songs-in-the-key-of-life", "music/parliament-mothership-connection", "music/aretha-franklin-never-loved"],
    image: "assets/img/music/marvin-gaye-whats-going-on.jpg",
    f: { form: ["录音室专辑"], genre: ["灵魂", "放克"] }
  },
  {
    id: "aretha-franklin-never-loved", cat: "music", title: "I Never Loved a Man the Way I Love You", alt: "艾瑞莎·弗兰克林 · 我从未如此爱过一个人", year: 1967, region: "美国",
    summary: "灵魂乐女王在 Atlantic 的首张专辑，Respect 与 Do Right Woman 成为民权与女性主义的声音符号。",
    review: "演唱力量与情感表达无与伦比，是灵魂乐的起点之作。适合所有听众，也常被翻唱与研究。",
    pros: ["演唱力量惊人", "历史意义重大"], cons: ["录音技术受限"],
    tags: ["Aretha Franklin", "灵魂", "1967"],
    scores: [{ src: "Rate Your Music", val: 4.2, max: 5 }, { src: "AllMusic", val: 5, max: 5 }, { src: "Metacritic", val: 96, max: 100 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=i never loved a man aretha" },
      { kind: "收听", label: "Spotify 搜索", url: "https://open.spotify.com/search/aretha%20franklin%20i%20never%20loved%20a%20man" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=I Never Loved a Man the Way I Love You" }
    ],
    related: ["music/marvin-gaye-whats-going-on", "music/stevie-wonder-songs-in-the-key-of-life", "music/otis-redding-dictionary-of-soul"],
    image: "assets/img/music/aretha-franklin-never-loved.jpg",
    f: { form: ["录音室专辑"], genre: ["灵魂", "R&B"] }
  },
  {
    id: "otis-redding-dictionary-of-soul", cat: "music", title: "Complete & Unbelievable: The Otis Redding Dictionary of Soul", alt: "奥蒂斯·雷丁 · 灵魂词典", year: 1966, region: "美国",
    summary: "Otis Redding 生前最后完成的专辑，Try a Little Tenderness 的渐进式爆发成为灵魂乐演唱的范本。",
    review: "演唱情感浓烈、编曲精致，是 Southern soul 的巅峰之作。适合喜欢灵魂乐与强力演唱的听众。",
    pros: ["演唱情感浓烈", "编曲精致"], cons: ["录音年代感强"],
    tags: ["Otis Redding", "灵魂", "1966"],
    scores: [{ src: "Rate Your Music", val: 4.2, max: 5 }, { src: "AllMusic", val: 5, max: 5 }, { src: "Metacritic", val: 94, max: 100 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=otis redding dictionary of soul" },
      { kind: "收听", label: "Apple Music 搜索", url: "https://music.apple.com/cn/search?term=otis redding dictionary of soul" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Otis Redding Dictionary of Soul" }
    ],
    related: ["music/aretha-franklin-never-loved", "music/marvin-gaye-whats-going-on", "music/sam-cooke-live-at-the-harlem-square"],
    image: "assets/img/music/otis-redding-dictionary-of-soul.jpg",
    f: { form: ["录音室专辑"], genre: ["灵魂", "R&B"] }
  },
  {
    id: "sam-cooke-live-at-the-harlem-square", cat: "music", title: "Live at the Harlem Square Club, 1963", alt: "山姆·库克 · 1963哈林广场俱乐部现场", year: 1985, region: "美国",
    summary: "1963 年现场录音在二十二年后发行，Sam Cooke 的即兴演唱与观众互动展示灵魂乐现场的真实能量。",
    review: "录音粗糙但情绪真实，是了解 60 年代灵魂乐现场氛围的最佳材料。适合喜欢现场感与即兴演唱的听众。",
    pros: ["现场能量真实", "即兴能力强"], cons: ["录音质量粗糙"],
    tags: ["Sam Cooke", "灵魂", "现场"],
    scores: [{ src: "Rate Your Music", val: 4.2, max: 5 }, { src: "AllMusic", val: 5, max: 5 }, { src: "豆瓣音乐", val: 9.1, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=sam cooke harlem square" },
      { kind: "收听", label: "Spotify 搜索", url: "https://open.spotify.com/search/sam%20cooke%20harlem%20square" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Live at the Harlem Square Club 1963" }
    ],
    related: ["music/otis-redding-dictionary-of-soul", "music/aretha-franklin-never-loved", "music/marvin-gaye-whats-going-on"],
    image: "assets/img/music/sam-cooke-live-at-the-harlem-square.jpg",
    f: { form: ["现场专辑"], genre: ["灵魂", "R&B"] }
  },
  {
    id: "beach-boys-pet-sounds", cat: "music", title: "Pet Sounds", alt: "海滩男孩 · 宠物之声", year: 1966, region: "美国",
    summary: "Brian Wilson 用录音室作为乐器创作的概念专辑，God Only Knows 与 Would Not Be Nice 以复杂和声与非常规配器改变了流行音乐的制作标准。",
    review: "常被列为史上最伟大专辑之一，直接促使披头士创作 Sgt. Pepper。适合安静聆听，编曲细节值得反复研究。",
    pros: ["编曲复杂精致", "和声设计开创性"], cons: ["当时商业失败"],
    tags: ["The Beach Boys", "巴洛克流行", "1966"],
    scores: [{ src: "Rate Your Music", val: 4.2, max: 5 }, { src: "AllMusic", val: 5, max: 5 }, { src: "Metacritic", val: 96, max: 100 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=pet sounds beach boys" },
      { kind: "收听", label: "Spotify 搜索", url: "https://open.spotify.com/search/beach%20boys%20pet%20sounds" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Pet Sounds" }
    ],
    related: ["music/beatles-sgt-pepper", "music/brian-wilson-smile", "music/van-dyke-parks-song-cycle"],
    image: "assets/img/music/beach-boys-pet-sounds.jpg",
    f: { form: ["录音室专辑"], genre: ["巴洛克流行", "流行", "摇滚"] }
  },
  {
    id: "brian-wilson-smile", cat: "music", title: "Smile", alt: "布莱恩·威尔逊 · 微笑", year: 2004, region: "美国",
    summary: "被搁置三十八年的传奇计划终于在 2004 年完成演出与录音，Good Vibrations 与 Surf's Up 展示 Wilson 的美国交响乐构想。",
    review: "既是历史文献也是完整音乐作品，编制宏大、旋律优美。适合了解流行音乐史上最著名的未完成计划。",
    pros: ["历史意义重大", "编制宏大"], cons: ["非原始 1967 版本"],
    tags: ["Brian Wilson", "巴洛克流行", "概念专辑"],
    scores: [{ src: "Rate Your Music", val: 4, max: 5 }, { src: "Metacritic", val: 90, max: 100 }, { src: "AllMusic", val: 4.5, max: 5 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=brian wilson smile" },
      { kind: "收听", label: "Apple Music 搜索", url: "https://music.apple.com/cn/search?term=brian wilson smile" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Smile Brian Wilson" }
    ],
    related: ["music/beach-boys-pet-sounds", "music/van-dyke-parks-song-cycle", "music/beatles-sgt-pepper"],
    image: "assets/img/music/brian-wilson-smile.jpg",
    f: { form: ["录音室专辑"], genre: ["巴洛克流行", "流行", "古典"] }
  },
  {
    id: "van-dyke-parks-song-cycle", cat: "music", title: "Song Cycle", alt: "范·戴克·帕克斯 · 歌曲循环", year: 1967, region: "美国",
    summary: "与 Brian Wilson 合作的编曲家的个人首作，把美国民谣、拉格泰姆与现代古典拼贴成超现实的加州叙事。",
    review: "商业失败但艺术价值极高，是巴洛克流行与实验流行的重要文献。适合喜欢复杂编曲与超现实歌词的听众。",
    pros: ["编曲极其复杂", "概念独特"], cons: ["聆听门槛高"],
    tags: ["Van Dyke Parks", "巴洛克流行", "实验"],
    scores: [{ src: "Rate Your Music", val: 4, max: 5 }, { src: "AllMusic", val: 4.5, max: 5 }, { src: "Pitchfork", val: 8.8, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=van dyke parks song cycle" },
      { kind: "收听", label: "Spotify 搜索", url: "https://open.spotify.com/search/van%20dyke%20parks%20song%20cycle" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Song Cycle Van Dyke Parks" }
    ],
    related: ["music/beach-boys-pet-sounds", "music/brian-wilson-smile", "music/beatles-sgt-pepper"],
    image: "assets/img/music/van-dyke-parks-song-cycle.jpg",
    f: { form: ["录音室专辑"], genre: ["巴洛克流行", "实验", "古典"] }
  },
  {
    id: "muse-origin-of-symmetry", cat: "music", title: "Origin of Symmetry", alt: "缪斯 · 对称起源", year: 2001, region: "英国",
    summary: "Muse 把古典钢琴、失真吉他与太空摇滚结合的代表作，New Born 与 Bliss 展示 Matthew Bellamy 的戏剧化演唱与技巧。",
    review: "技术含量高、情绪夸张，是 2000 年代另类摇滚最具野心的一张。适合喜欢前卫摇滚与太空摇滚的听众。",
    pros: ["技术与戏剧性兼备", "编曲层次丰富"], cons: ["演唱风格夸张"],
    tags: ["Muse", "另类摇滚", "太空摇滚"],
    scores: [{ src: "Rate Your Music", val: 3.9, max: 5 }, { src: "Metacritic", val: 74, max: 100 }, { src: "AllMusic", val: 4.5, max: 5 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=muse origin of symmetry" },
      { kind: "收听", label: "QQ音乐搜索", url: "https://y.qq.com/n/ryqq/search?w=Muse Origin of Symmetry" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Origin of Symmetry" }
    ],
    related: ["music/radiohead-ok-computer", "music/dream-theater-images-and-words", "music/symphony-x-the-divine-wings"],
    image: "assets/img/music/muse-origin-of-symmetry.jpg",
    f: { form: ["录音室专辑"], genre: ["另类摇滚", "太空摇滚", "前卫摇滚"] }
  },
  {
    id: "thom-yorke-the-eraser", cat: "music", title: "The Eraser", alt: "汤姆·约克 · 橡皮擦", year: 2006, region: "英国",
    summary: "Radiohead 主唱的首张个人专辑，以电子节拍、钢琴与采样构建冷冽的氛围，Nigel Godrich 参与制作。",
    review: "比 Radiohead 更极简、更电子，适合喜欢 Kid A 时期风格的听众。适合作为背景与专注聆听。",
    pros: ["电子质感精致", "氛围冷冽统一"], cons: ["旋律钩子较少"],
    tags: ["Thom Yorke", "电子", "另类"],
    scores: [{ src: "Rate Your Music", val: 3.7, max: 5 }, { src: "Metacritic", val: 76, max: 100 }, { src: "Pitchfork", val: 7.4, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=the eraser thom yorke" },
      { kind: "收听", label: "Spotify 搜索", url: "https://open.spotify.com/search/thom%20yorke%20the%20eraser" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=The Eraser" }
    ],
    related: ["music/radiohead-kid-a", "music/radiohead-in-rainbows", "music/four-tet-rounds"],
    image: "assets/img/music/thom-yorke-the-eraser.jpg",
    f: { form: ["录音室专辑"], genre: ["电子", "另类", "实验"] }
  },
  {
    id: "syd-barrett-the-madcap-laughs", cat: "music", title: "The Madcap Laughs", alt: "西德·巴雷特 · 狂笑的人", year: 1970, region: "英国",
    summary: "Pink Floyd 创始人的个人首作，在精神状况不稳定的情况下录制，Octopus 与 Effervescing Elephant 展现古怪的英式民谣才气。",
    review: "录音粗糙、结构松散，但正因如此成为迷幻民谣的独特文献。适合喜欢怪诞英式创作与 Pink Floyd 早期风格的听众。",
    pros: ["创作才气独特", "英式怪诞美学"], cons: ["录音与结构不稳定"],
    tags: ["Syd Barrett", "迷幻民谣", "1970"],
    scores: [{ src: "Rate Your Music", val: 3.9, max: 5 }, { src: "AllMusic", val: 4, max: 5 }, { src: "Pitchfork", val: 8.5, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=the madcap laughs" },
      { kind: "收听", label: "Apple Music 搜索", url: "https://music.apple.com/cn/search?term=the madcap laughs" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=The Madcap Laughs" }
    ],
    related: ["music/pink-floyd-piper", "music/pink-floyd-wish-you-were-here", "music/kevin-ayers-joy-of-a-toy"],
    image: "assets/img/music/syd-barrett-the-madcap-laughs.jpg",
    f: { form: ["录音室专辑"], genre: ["迷幻", "民谣", "摇滚"] }
  },
  {
    id: "kevin-ayers-joy-of-a-toy", cat: "music", title: "Joy of a Toy", alt: "凯文·艾尔斯 · 玩具之乐", year: 1969, region: "英国",
    summary: "Soft Machine 创始成员的个人首作，坎特伯雷场景的迷幻流行代表，旋律古怪而温柔。",
    review: "英式迷幻向室内流行转型的样本，适合喜欢坎特伯雷场景与怪诞旋律的听众。",
    pros: ["旋律古怪温柔", "坎特伯雷场景代表"], cons: ["制作较为简朴"],
    tags: ["Kevin Ayers", "坎特伯雷", "迷幻流行"],
    scores: [{ src: "Rate Your Music", val: 3.8, max: 5 }, { src: "AllMusic", val: 4, max: 5 }, { src: "豆瓣音乐", val: 8.6, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=joy of a toy kevin ayers" },
      { kind: "收听", label: "Bandcamp 搜索", url: "https://bandcamp.com/search?q=kevin ayers joy of a toy" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Joy of a Toy" }
    ],
    related: ["music/syd-barrett-the-madcap-laughs", "music/pink-floyd-piper", "music/genesis-selling-england"],
    image: "assets/img/music/kevin-ayers-joy-of-a-toy.jpg",
    f: { form: ["录音室专辑"], genre: ["迷幻流行", "坎特伯雷", "摇滚"] }
  },
  {
    id: "mogwai-young-team", cat: "music", title: "Mogwai Young Team", alt: "魔怪 · 年轻团队", year: 1997, region: "英国",
    summary: "后摇滚的奠基之作，用极安静到极爆发的动态对比取代传统歌曲结构，Like Herod 十八分钟的推进是流派范本。",
    review: "动态范围极大，适合耳机与音响系统展示。情绪从压抑到释放的过程完整，是后摇滚入门首选。",
    pros: ["动态对比强烈", "结构自由"], cons: ["几乎无人声"],
    tags: ["Mogwai", "后摇滚", "1997"],
    scores: [{ src: "Rate Your Music", val: 4, max: 5 }, { src: "AllMusic", val: 4.5, max: 5 }, { src: "Pitchfork", val: 9, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=mogwai young team" },
      { kind: "收听", label: "网易云搜索", url: "https://music.163.com/#/search/m/?s=Mogwai Young Team" },
      { kind: "官方", label: "官方站点", url: "https://mogwai.scot/" }
    ],
    related: ["music/godspeed-you-black-emperor-lift", "music/explosions-in-the-sky-earth-is-not-a-cold-place", "music/sigur-ros-agaetis-byrjun"],
    image: "assets/img/music/mogwai-young-team.jpg",
    f: { form: ["录音室专辑"], genre: ["后摇", "器乐", "摇滚"] }
  },
  {
    id: "godspeed-you-black-emperor-lift", cat: "music", title: "Lift Your Skinny Fists Like Antennas to Heaven", alt: "上帝是你黑皇帝 · 举起你瘦削的拳头", year: 2000, region: "加拿大",
    summary: "四段式长篇后摇滚，用采样、弦乐与三段式动态构建末日感叙事，是后摇滚史上最受推崇的作品之一。",
    review: "全长八十余分钟，情绪从荒凉到壮丽。适合完整聆听、长途旅程与深度放松，不适合碎片化播放。",
    pros: ["结构宏大", "情绪推进完整"], cons: ["曲目极长"],
    tags: ["Godspeed You! Black Emperor", "后摇滚", "2000"],
    scores: [{ src: "Rate Your Music", val: 4.2, max: 5 }, { src: "Pitchfork", val: 9.5, max: 10 }, { src: "AllMusic", val: 4.5, max: 5 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=lift your skinny fists" },
      { kind: "收听", label: "Bandcamp 搜索", url: "https://godspeedyoublackemperor.bandcamp.com/" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Lift Your Skinny Fists Like Antennas to Heaven" }
    ],
    related: ["music/mogwai-young-team", "music/explosions-in-the-sky-earth-is-not-a-cold-place", "music/sigur-ros-agaetis-byrjun"],
    image: "assets/img/music/godspeed-you-black-emperor-lift.jpg",
    f: { form: ["录音室专辑"], genre: ["后摇", "器乐", "实验"] }
  },
  {
    id: "explosions-in-the-sky-earth-is-not-a-cold-place", cat: "music", title: "The Earth Is Not a Cold Dead Place", alt: "天空爆炸 · 地球并非寒冷死寂之地", year: 2003, region: "美国",
    summary: "德州后摇滚乐团的代表作，Your Hand in Mine 成为婚礼与广告的常用配乐，用双吉他的交织旋律取代失真爆发。",
    review: "旋律优美、情绪温暖，是后摇滚中最易入耳的一张。适合工作、阅读与需要情绪支撑的场合。",
    pros: ["旋律优美", "情绪温暖"], cons: ["动态较温和"],
    tags: ["Explosions in the Sky", "后摇滚", "器乐"],
    scores: [{ src: "Rate Your Music", val: 4.1, max: 5 }, { src: "Pitchfork", val: 8.6, max: 10 }, { src: "Metacritic", val: 84, max: 100 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=the earth is not a cold dead place" },
      { kind: "收听", label: "Spotify 搜索", url: "https://open.spotify.com/search/explosions%20in%20the%20sky%20earth%20is%20not%20a%20cold%20dead%20place" },
      { kind: "官方", label: "官方站点", url: "https://www.explosionsinthesky.com/" }
    ],
    related: ["music/mogwai-young-team", "music/godspeed-you-black-emperor-lift", "music/sigur-ros-agaetis-byrjun"],
    image: "assets/img/music/explosions-in-the-sky-earth-is-not-a-cold-place.jpg",
    f: { form: ["录音室专辑"], genre: ["后摇", "器乐"] }
  },
  {
    id: "sigur-ros-agaetis-byrjun", cat: "music", title: "Ágætis byrjun", alt: "胜利玫瑰 · 美好开始", year: 1999, region: "冰岛",
    summary: "用弓拉电吉他与自创语言演唱，Svefn-g-englar 与 Viðrar vel til loftárása 构建出冰岛式的空灵声景。",
    review: "氛围独特、情绪浓烈，是后摇滚与冰岛音乐走向世界的代表作。适合夜晚、冥想与情绪化聆听。",
    pros: ["音色空灵独特", "氛围营造极强"], cons: ["歌词不可解"],
    tags: ["Sigur Rós", "后摇滚", "冰岛"],
    scores: [{ src: "Rate Your Music", val: 4.1, max: 5 }, { src: "Pitchfork", val: 9.2, max: 10 }, { src: "Metacritic", val: 84, max: 100 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=agaetis byrjun" },
      { kind: "收听", label: "网易云搜索", url: "https://music.163.com/#/search/m/?s=Sigur Ros Agaetis Byrjun" },
      { kind: "官方", label: "官方站点", url: "https://sigur-ros.co.uk/" }
    ],
    related: ["music/mogwai-young-team", "music/explosions-in-the-sky-earth-is-not-a-cold-place", "music/godspeed-you-black-emperor-lift"],
    image: "assets/img/music/sigur-ros-agaetis-byrjun.jpg",
    f: { form: ["录音室专辑"], genre: ["后摇", "氛围", "器乐"] }
  },
  {
    id: "jimmy-page-death-wish-ii", cat: "music", title: "Death Wish II", alt: "吉米·佩奇 · 猛龙怪客2原声", year: 1982, region: "英国",
    summary: "Led Zeppelin 吉他手的个人电影配乐，使用合成器与吉他实验，Prelude 与 City Sirens 展示他少见的环境音乐创作。",
    review: "小众但独特，是了解 Page 在 Led Zeppelin 之外创作方向的重要材料。适合氛围与合成器爱好者。",
    pros: ["合成器实验有趣", "吉他音色独特"], cons: ["依赖电影语境"],
    tags: ["Jimmy Page", "影视原声", "合成器"],
    scores: [{ src: "Rate Your Music", val: 3.4, max: 5 }, { src: "AllMusic", val: 3.5, max: 5 }, { src: "豆瓣音乐", val: 8.2, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=jimmy page death wish ii" },
      { kind: "收听", label: "YouTube Music 搜索", url: "https://music.youtube.com/search?q=jimmy page death wish ii" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Death Wish II soundtrack" }
    ],
    related: ["music/led-zeppelin-iv", "music/rainbow-rising", "music/tangerine-dream-sorcerer"],
    image: "assets/img/music/jimmy-page-death-wish-ii.jpg",
    f: { form: ["影视原声"], genre: ["影视配乐", "电子", "摇滚"] }
  },
  {
    id: "rainbow-rising", cat: "music", title: "Rising", alt: "彩虹 · 崛起", year: 1976, region: "英国",
    summary: "Ritchie Blackmore 与 Ronnie James Dio 合作的硬摇滚经典，Stargazer 与 A Light in the Black 把新古典与重金属结合。",
    review: "技术与气势兼备，是 70 年代硬摇滚向重金属过渡的关键作品。适合喜欢 Dio 时期与史诗结构的听众。",
    pros: ["史诗结构出色", "演奏技术高"], cons: ["曲目数量少"],
    tags: ["Rainbow", "硬摇滚", "重金属"],
    scores: [{ src: "Rate Your Music", val: 4, max: 5 }, { src: "AllMusic", val: 4.5, max: 5 }, { src: "豆瓣音乐", val: 8.9, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=rainbow rising" },
      { kind: "收听", label: "Spotify 搜索", url: "https://open.spotify.com/search/rainbow%20rising" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Rising Rainbow album" }
    ],
    related: ["music/deep-purple-machine-head", "music/black-sabbath-paranoid", "music/symphony-x-the-divine-wings"],
    image: "assets/img/music/rainbow-rising.jpg",
    f: { form: ["录音室专辑"], genre: ["硬摇滚", "重金属", "新古典"] }
  },
  {
    id: "nine-inch-nails-the-downward-spiral", cat: "music", title: "The Downward Spiral", alt: "九寸钉 · 下沉的螺旋", year: 1994, region: "美国",
    summary: "工业摇滚的巅峰概念专辑，Closer 与 Hurt 用失真采样、机械节拍与自毁叙事构建出极度黑暗的声音世界。",
    review: "制作精密、主题极端，是工业音乐进入主流的代表作。适合喜欢重型电子与黑暗叙事的听众，情绪冲击力强。",
    pros: ["制作精密", "概念完整"], cons: ["主题极端黑暗"],
    tags: ["Nine Inch Nails", "工业", "摇滚"],
    scores: [{ src: "Rate Your Music", val: 4.1, max: 5 }, { src: "AllMusic", val: 5, max: 5 }, { src: "Metacritic", val: 88, max: 100 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=the downward spiral" },
      { kind: "收听", label: "Spotify 搜索", url: "https://open.spotify.com/search/nine%20inch%20nails%20downward%20spiral" },
      { kind: "官方", label: "官方站点", url: "https://www.nin.com/" }
    ],
    related: ["music/ministry-psalm-69", "music/tool-lateralus", "music/depeche-mode-violator"],
    image: "assets/img/music/nine-inch-nails-the-downward-spiral.jpg",
    f: { form: ["录音室专辑"], genre: ["工业", "摇滚", "电子"] }
  },
  {
    id: "ministry-psalm-69", cat: "music", title: "Psalm 69: The Way to Succeed and the Way to Suck Eggs", alt: "圣 Ministry · 诗篇69", year: 1992, region: "美国",
    summary: "工业金属的商业与艺术高点，N.W.O. 与 Jesus Built My Hotrod 用金属吉他 riff 与采样节拍定义流派。",
    review: "攻击性强、制作精良，是工业金属入门的经典。适合喜欢重型节奏与机械质感的听众。",
    pros: ["riff 与节拍结合强", "制作精良"], cons: ["攻击性高"],
    tags: ["Ministry", "工业金属", "1992"],
    scores: [{ src: "Rate Your Music", val: 3.9, max: 5 }, { src: "AllMusic", val: 4.5, max: 5 }, { src: "豆瓣音乐", val: 8.8, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=ministry psalm 69" },
      { kind: "收听", label: "Spotify 搜索", url: "https://open.spotify.com/search/ministry%20psalm%2069" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Psalm 69 Ministry" }
    ],
    related: ["music/nine-inch-nails-the-downward-spiral", "music/fear-factory-demanufacture", "music/tool-lateralus"],
    image: "assets/img/music/ministry-psalm-69.jpg",
    f: { form: ["录音室专辑"], genre: ["工业金属", "重金属", "电子"] }
  },
  {
    id: "fear-factory-demanufacture", cat: "music", title: "Demanufacture", alt: "恐惧工厂 · 拆解", year: 1995, region: "美国",
    summary: "把机械节拍、合成器与金属吉他精密同步的工业金属概念专辑，Self Bias Resistor 与 Replica 成为流派标准曲。",
    review: "制作精密如机器，节奏与音色设计极具辨识度。适合喜欢工业金属与重型电子融合的听众。",
    pros: ["机械节奏精密", "概念完整"], cons: ["音色偏冷"],
    tags: ["Fear Factory", "工业金属", "1995"],
    scores: [{ src: "Rate Your Music", val: 3.9, max: 5 }, { src: "AllMusic", val: 4.5, max: 5 }, { src: "豆瓣音乐", val: 8.8, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=fear factory demanufacture" },
      { kind: "收听", label: "Spotify 搜索", url: "https://open.spotify.com/search/fear%20factory%20demanufacture" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Demanufacture" }
    ],
    related: ["music/ministry-psalm-69", "music/nine-inch-nails-the-downward-spiral", "music/meshuggah-nothing"],
    image: "assets/img/music/fear-factory-demanufacture.jpg",
    f: { form: ["录音室专辑"], genre: ["工业金属", "重金属"] }
  },
  {
    id: "meshuggah-nothing", cat: "music", title: "Nothing", alt: "疯狂网 · 无", year: 2002, region: "瑞典",
    summary: "Djent 一词的来源之一，用八弦吉他与多节拍错位的 riff 构建机械般的重型音乐，Rational Gaze 是典型曲目。",
    review: "节奏结构极复杂，适合喜欢数学化重金属与重型 riff 的听众，也是现代金属制作的教科书。",
    pros: ["多节拍结构复杂", "吉他音色厚重"], cons: ["旋律性弱"],
    tags: ["Meshuggah", "Djent", "前卫金属"],
    scores: [{ src: "Rate Your Music", val: 3.9, max: 5 }, { src: "AllMusic", val: 4, max: 5 }, { src: "Metacritic", val: 76, max: 100 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=meshuggah nothing" },
      { kind: "收听", label: "Spotify 搜索", url: "https://open.spotify.com/search/meshuggah%20nothing" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Nothing Meshuggah" }
    ],
    related: ["music/fear-factory-demanufacture", "music/tool-lateralus", "music/gojira-magma"],
    image: "assets/img/music/meshuggah-nothing.jpg",
    f: { form: ["录音室专辑"], genre: ["前卫金属", "重金属", "Djent"] }
  },
  {
    id: "gojira-magma", cat: "music", title: "Magma", alt: "哥斯拉 · 岩浆", year: 2016, region: "法国",
    summary: "法国前卫金属乐团转向更旋律化与情感化的专辑，Stranded 与 Silvera 获得格莱美提名，主题围绕丧母。",
    review: "重型与旋律平衡出色，是现代金属中最具情感表达的作品之一。适合喜欢前卫金属又不排斥旋律的听众。",
    pros: ["重型与旋律平衡", "情感表达真挚"], cons: ["比早期作品温和"],
    tags: ["Gojira", "前卫金属", "2016"],
    scores: [{ src: "Rate Your Music", val: 3.8, max: 5 }, { src: "Metacritic", val: 78, max: 100 }, { src: "AllMusic", val: 4, max: 5 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=gojira magma" },
      { kind: "收听", label: "Spotify 搜索", url: "https://open.spotify.com/search/gojira%20magma" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Magma Gojira" }
    ],
    related: ["music/meshuggah-nothing", "music/tool-lateralus", "music/mastodon-crack-the-skye"],
    image: "assets/img/music/gojira-magma.jpg",
    f: { form: ["录音室专辑"], genre: ["前卫金属", "重金属"] }
  },
  {
    id: "mastodon-crack-the-skye", cat: "music", title: "Crack the Skye", alt: "乳齿象 · 撕裂天空", year: 2009, region: "美国",
    summary: "以沙俄神秘学与星体投射为主题的前卫金属概念专辑，Oblivion 与 The Czar 展示复杂编曲与和声化演唱。",
    review: "概念完整、制作精良，是 2000 年代前卫金属的代表作。适合喜欢长篇概念与重型 riff 的听众。",
    pros: ["概念完整", "编曲复杂"], cons: ["部分曲目偏长"],
    tags: ["Mastodon", "前卫金属", "概念专辑"],
    scores: [{ src: "Rate Your Music", val: 3.9, max: 5 }, { src: "Metacritic", val: 82, max: 100 }, { src: "AllMusic", val: 4.5, max: 5 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=crack the skye" },
      { kind: "收听", label: "Spotify 搜索", url: "https://open.spotify.com/search/mastodon%20crack%20the%20skye" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Crack the Skye" }
    ],
    related: ["music/gojira-magma", "music/tool-lateralus", "music/meshuggah-nothing"],
    image: "assets/img/music/mastodon-crack-the-skye.jpg",
    f: { form: ["录音室专辑"], genre: ["前卫金属", "重金属", "概念专辑"] }
  },
  {
    id: "death-symbolic", cat: "music", title: "Symbolic", alt: "死亡乐队 · 象征", year: 1995, region: "美国",
    summary: "Chuck Schuldiner 把死亡金属推向技术化与旋律化的转折点，Symbolic 与 Zero Tolerance 的吉他编排成为流派标杆。",
    review: "技术含量高、旋律意外清晰，是技术死亡金属的入门与巅峰之作。适合喜欢复杂吉他编排的听众。",
    pros: ["技术与旋律兼备", "吉他编排出色"], cons: ["鼓机音色偏硬"],
    tags: ["Death", "技术死亡金属", "1995"],
    scores: [{ src: "Rate Your Music", val: 4.1, max: 5 }, { src: "AllMusic", val: 4.5, max: 5 }, { src: "豆瓣音乐", val: 9, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=death symbolic" },
      { kind: "收听", label: "Spotify 搜索", url: "https://open.spotify.com/search/death%20symbolic" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Symbolic Death album" }
    ],
    related: ["music/megadeth-rust-in-peace", "music/meshuggah-nothing", "music/cynic-focus"],
    image: "assets/img/music/death-symbolic.jpg",
    f: { form: ["录音室专辑"], genre: ["技术死亡金属", "重金属", "前卫金属"] }
  },
  {
    id: "cynic-focus", cat: "music", title: "Focus", alt: "犬儒 · 焦点", year: 1993, region: "美国",
    summary: "把爵士融合、无品吉他与死腔结合的先锋之作，Veil of Maya 与 How Could I 展示了金属乐的极端可能性。",
    review: "技术密度极高、概念抽象，是前卫金属与技术死亡的里程碑。适合乐手与重型音乐深度爱好者。",
    pros: ["技术密度极高", "风格融合前卫"], cons: ["抽象难懂"],
    tags: ["Cynic", "前卫金属", "爵士融合"],
    scores: [{ src: "Rate Your Music", val: 4, max: 5 }, { src: "AllMusic", val: 4.5, max: 5 }, { src: "豆瓣音乐", val: 8.9, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=cynic focus" },
      { kind: "收听", label: "Bandcamp 搜索", url: "https://bandcamp.com/search?q=cynic focus" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=Focus Cynic album" }
    ],
    related: ["music/death-symbolic", "music/dream-theater-images-and-words", "music/meshuggah-nothing"],
    image: "assets/img/music/cynic-focus.jpg",
    f: { form: ["录音室专辑"], genre: ["前卫金属", "技术死亡金属", "爵士融合"] }
  },
  {
    id: "symphony-x-the-divine-wings", cat: "music", title: "The Divine Wings of Tragedy", alt: "交响X · 悲剧的神圣之翼", year: 1997, region: "美国",
    summary: "新古典前卫金属的代表作，二十分钟的标题组曲把古典对位、复杂节拍与高音演唱结合到极致。",
    review: "技术与旋律俱佳，是前卫金属长篇组曲的典范。适合喜欢 Dream Theater 与交响金属的听众。",
    pros: ["组曲结构宏大", "演奏技术高"], cons: ["曲目较长"],
    tags: ["Symphony X", "前卫金属", "新古典"],
    scores: [{ src: "Rate Your Music", val: 3.9, max: 5 }, { src: "AllMusic", val: 4.5, max: 5 }, { src: "豆瓣音乐", val: 8.9, max: 10 }],
    links: [
      { kind: "资料", label: "Rate Your Music 搜索", url: "https://rateyourmusic.com/search?searchterm=symphony x divine wings of tragedy" },
      { kind: "收听", label: "Spotify 搜索", url: "https://open.spotify.com/search/symphony%20x%20divine%20wings%20of%20tragedy" },
      { kind: "资料", label: "维基百科", url: "https://zh.wikipedia.org/w/index.php?search=The Divine Wings of Tragedy" }
    ],
    related: ["music/dream-theater-images-and-words", "music/rainbow-rising", "music/cynic-focus"],
    image: "assets/img/music/symphony-x-the-divine-wings.jpg",
    f: { form: ["录音室专辑"], genre: ["前卫金属", "新古典", "重金属"] }
  }
]);
