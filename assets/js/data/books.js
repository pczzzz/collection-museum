/* 非虚构书籍种子数据 */
window.DB = window.DB || {};
window.DB.books = (window.DB.books || []).concat([
  {
    id: 'csapp',
    cat: 'books',
    title: '深入理解计算机系统',
    alt: 'Computer Systems: A Programmer\'s Perspective',
    year: 2003,
    region: '美国',
    status: '已出版',
    image: 'assets/img/books/csapp.jpg',
    summary: '从程序员视角讲解计算机系统全貌，涵盖数据表示、汇编、处理器架构、存储器层次、链接、异常控制流、虚拟内存、系统级I/O与网络编程。',
    review: 'CS经典教材，将硬件、OS、编译、网络打通，强调「程序如何在真实机器上运行」。第三版增加并行与并发章节。适合有C语言基础的计算机专业学生与工程师，难度中高，需配合实验效果最佳。',
    pros: ['体系完整', '实验设计精良', '打通软硬件'],
    cons: ['篇幅较大', '需要C基础'],
    tags: ['Randal Bryant', 'David O\'Hallaron', 'CS经典'],
    scores: [
      { src: '豆瓣', val: 9.7, max: 10, url: 'https://book.douban.com/subject_search?search_text=深入理解计算机系统' },
      { src: 'Goodreads', val: 4.5, max: 5, url: 'https://www.goodreads.com/search?q=Computer+Systems+A+Programmers+Perspective' }
    ],
    links: [
      { kind: '资料', label: '豆瓣读书', url: 'https://book.douban.com/subject_search?search_text=深入理解计算机系统' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=深入理解计算机系统' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=深入理解计算机系统' }
    ],
    related: ['books/os-three-easy-pieces', 'books/algorithms-clrs', 'books/tcp-ip-illustrated'],
    f: { field: ['计算机与编程'], form: ['教科书'], language: ['中文', '英文'] }
  },
  {
    id: 'algorithms-clrs',
    cat: 'books',
    title: '算法导论',
    alt: 'Introduction to Algorithms',
    year: 1990,
    region: '美国',
    status: '已出版',
    image: 'assets/img/books/algorithms-clrs.jpg',
    summary: '全面介绍计算机算法设计与分析，覆盖排序、数据结构、图算法、动态规划、NP完全性、随机化与近似算法等核心主题。',
    review: '算法领域圣经级教材，内容严谨且覆盖面广，被称为CLRS（四位作者姓氏缩写）。第四版新增机器学习相关章节。适合作为研究生或高年级本科教材，自学需较强数学基础。配合习题集使用效果更佳。',
    pros: ['内容权威全面', '证明严谨', '习题丰富'],
    cons: ['数学门槛高', '不适合速成'],
    tags: ['Cormen', 'Leiserson', 'Rivest', 'Stein'],
    scores: [
      { src: '豆瓣', val: 9.3, max: 10, url: 'https://book.douban.com/subject_search?search_text=算法导论' },
      { src: 'Goodreads', val: 4.3, max: 5, url: 'https://www.goodreads.com/search?q=Introduction+to+Algorithms' }
    ],
    links: [
      { kind: '资料', label: '维基百科', url: 'https://zh.wikipedia.org/w/index.php?search=算法导论' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=算法导论' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=算法导论' }
    ],
    related: ['books/csapp', 'books/sicp', 'books/concrete-mathematics'],
    f: { field: ['计算机与编程', '数学'], form: ['教科书'], language: ['中文', '英文'] }
  },
  {
    id: 'ddia',
    cat: 'books',
    title: '数据密集型应用系统设计',
    alt: 'Designing Data-Intensive Applications',
    year: 2017,
    region: '英国',
    status: '已出版',
    image: 'assets/img/books/ddia.jpg',
    summary: '系统梳理分布式数据存储与处理的核心原则，涵盖复制、分区、事务、一致性模型、批处理与流处理等关键话题。',
    review: '后端工程师必读的现代经典，将数据库、缓存、消息队列、分布式系统的理论与实践融会贯通。作者Martin Kleppmann文风清晰，图示精准。适合有2年以上开发经验的工程师，中文版翻译质量上乘。被誉为DDIA。',
    pros: ['理论实践结合', '图示清晰', '覆盖面广'],
    cons: ['需要一定工程经验', '部分章节较深'],
    tags: ['Martin Kleppmann', '分布式系统', '后端架构'],
    scores: [
      { src: '豆瓣', val: 9.6, max: 10, url: 'https://book.douban.com/subject_search?search_text=数据密集型应用系统设计' },
      { src: 'Goodreads', val: 4.7, max: 5, url: 'https://www.goodreads.com/search?q=Designing+Data-Intensive+Applications' }
    ],
    links: [
      { kind: '资料', label: '豆瓣读书', url: 'https://book.douban.com/subject_search?search_text=数据密集型应用系统设计' },
      { kind: '购买', label: 'Amazon', url: 'https://www.amazon.cn/s?k=数据密集型应用系统设计' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=数据密集型应用系统设计' }
    ],
    related: ['books/csapp', 'books/kafka-definitive-guide', 'books/site-reliability-engineering'],
    f: { field: ['计算机与编程'], form: ['实体书', '电子书'], language: ['中文', '英文'] }
  },
  {
    id: 'code-complete-2',
    cat: 'books',
    title: '代码大全',
    alt: 'Code Complete: A Practical Handbook of Software Construction',
    year: 2004,
    region: '美国',
    status: '已出版',
    image: 'assets/img/books/code-complete-2.jpg',
    summary: '软件构建实践百科全书，从变量命名、函数设计到调试测试、重构集成，覆盖日常编码的方方面面。',
    review: 'Steve McConnell的经典之作，第二版大幅更新。不教具体语言语法，而是教「如何写出可维护的代码」。适合所有阶段的程序员反复翻阅，尤其适合团队作为编码规范参考。篇幅虽长但每章独立可读。',
    pros: ['实用性强', '案例丰富', '适用面广'],
    cons: ['篇幅过长', '部分内容略显老旧'],
    tags: ['Steve McConnell', '软件工程', '编码实践'],
    scores: [
      { src: '豆瓣', val: 9.3, max: 10, url: 'https://book.douban.com/subject_search?search_text=代码大全' },
      { src: 'Goodreads', val: 4.4, max: 5, url: 'https://www.goodreads.com/search?q=Code+Complete' }
    ],
    links: [
      { kind: '资料', label: '豆瓣读书', url: 'https://book.douban.com/subject_search?search_text=代码大全' },
      { kind: '购买', label: '当当', url: 'https://search.dangdang.com/?key=代码大全' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=代码大全' }
    ],
    related: ['books/clean-code', 'books/refactoring', 'books/pragmatic-programmer'],
    f: { field: ['计算机与编程'], form: ['实体书'], language: ['中文', '英文'] }
  },
  {
    id: 'refactoring',
    cat: 'books',
    title: '重构：改善既有代码的设计',
    alt: 'Refactoring: Improving the Design of Existing Code',
    year: 1999,
    region: '美国',
    status: '已出版',
    image: 'assets/img/books/refactoring.jpg',
    summary: '系统介绍代码重构的原则、手法与时机，提供数十种具体重构模式的步骤与示例。',
    review: 'Martin Fowler的重构圣经，第二版以JavaScript为例重写。定义了重构的标准词汇表，是代码评审与技术债治理的基础参考。适合所有写代码的人，建议配合IDE重构工具实践。第一版用Java示例，两版都值得读。',
    pros: ['模式标准化', '实操性强', '影响深远'],
    cons: ['需要项目实践配合', '部分手法依赖IDE'],
    tags: ['Martin Fowler', '代码质量', '技术债'],
    scores: [
      { src: '豆瓣', val: 9.1, max: 10, url: 'https://book.douban.com/subject_search?search_text=重构改善既有代码的设计' },
      { src: 'Goodreads', val: 4.3, max: 5, url: 'https://www.goodreads.com/search?q=Refactoring+Improving+the+Design' }
    ],
    links: [
      { kind: '资料', label: '维基百科', url: 'https://zh.wikipedia.org/w/index.php?search=重构' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=重构改善既有代码的设计' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=重构' }
    ],
    related: ['books/code-complete-2', 'books/clean-code', 'books/clean-architecture'],
    f: { field: ['计算机与编程'], form: ['实体书', '电子书'], language: ['中文', '英文'] }
  },
  {
    id: 'design-patterns-gof',
    cat: 'books',
    title: '设计模式：可复用面向对象软件的基础',
    alt: 'Design Patterns: Elements of Reusable Object-Oriented Software',
    year: 1994,
    region: '美国',
    status: '已出版',
    image: 'assets/img/books/design-patterns-gof.jpg',
    summary: 'GoF四人组总结23种经典设计模式，分为创建型、结构型、行为型三类，奠定面向对象设计的通用词汇。',
    review: '软件工程里程碑著作，定义了观察者、工厂、策略等至今仍广泛使用的模式名称。原版用C++和Smalltalk示例，现代读者可搭配Head First Design Patterns入门。适合有一定OOP经验的开发者，是面试与架构讨论的必备知识。',
    pros: ['开创性工作', '词汇标准化', '经久不衰'],
    cons: ['示例语言较老', '直接阅读门槛高'],
    tags: ['GoF', 'Erich Gamma', '面向对象'],
    scores: [
      { src: '豆瓣', val: 9.1, max: 10, url: 'https://book.douban.com/subject_search?search_text=设计模式可复用面向对象软件的基础' },
      { src: 'Goodreads', val: 4.2, max: 5, url: 'https://www.goodreads.com/search?q=Design+Patterns+Elements+of+Reusable' }
    ],
    links: [
      { kind: '资料', label: '维基百科', url: 'https://zh.wikipedia.org/w/index.php?search=设计模式' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=设计模式GoF' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=设计模式' }
    ],
    related: ['books/refactoring', 'books/clean-architecture', 'books/domain-driven-design'],
    f: { field: ['计算机与编程'], form: ['教科书'], language: ['中文', '英文'] }
  },
  {
    id: 'pragmatic-programmer',
    cat: 'books',
    title: '程序员修炼之道：从小工到专家',
    alt: 'The Pragmatic Programmer: Your Journey to Mastery',
    year: 1999,
    region: '美国',
    status: '已出版',
    image: null,
    summary: '以格言式短文分享职业程序员的思维习惯与实践技巧，涵盖调试、沟通、自动化、职业发展等话题。',
    review: '程序员职业素养启蒙书，20周年纪念版全面更新。「破窗理论」「曳光弹」「DRY」等概念由此普及。不像技术手册那样过时，更像师傅带徒弟的经验传授。适合所有阶段开发者，每年重读一遍都有新收获。',
    pros: ['永不过时', '金句密集', '启发思考'],
    cons: ['不成体系', '需经验才能共鸣'],
    tags: ['David Thomas', 'Andrew Hunt', '职业素养'],
    scores: [
      { src: '豆瓣', val: 9.2, max: 10, url: 'https://book.douban.com/subject_search?search_text=程序员修炼之道' },
      { src: 'Goodreads', val: 4.5, max: 5, url: 'https://www.goodreads.com/search?q=The+Pragmatic+Programmer' }
    ],
    links: [
      { kind: '资料', label: '豆瓣读书', url: 'https://book.douban.com/subject_search?search_text=程序员修炼之道' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=程序员修炼之道' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=程序员修炼之道' }
    ],
    related: ['books/code-complete-2', 'books/clean-code', 'books/mythical-man-month'],
    f: { field: ['计算机与编程', '自我提升'], form: ['实体书', '电子书'], language: ['中文', '英文'] }
  },
  {
    id: 'mythical-man-month',
    cat: 'books',
    title: '人月神话',
    alt: 'The Mythical Man-Month: Essays on Software Engineering',
    year: 1975,
    region: '美国',
    status: '已出版',
    image: 'assets/img/books/mythical-man-month.jpg',
    summary: 'Fred Brooks基于IBM OS/360项目经验，揭示软件工程的本质困难，提出「没有银弹」「外科手术团队」等著名论断。',
    review: '软件工程开山之作，半个世纪后核心观点依然成立。「向进度落后的项目增加人手只会更落后」已成为行业共识。纪念版增补了《没有银弹》论文。适合项目经理、技术负责人与对软件史感兴趣的开发者。',
    pros: ['洞察深刻', '历史地位高', '篇幅精炼'],
    cons: ['部分细节过时', '需要项目经验体会'],
    tags: ['Fred Brooks', '软件工程', '项目管理'],
    scores: [
      { src: '豆瓣', val: 8.9, max: 10, url: 'https://book.douban.com/subject_search?search_text=人月神话' },
      { src: 'Goodreads', val: 4.1, max: 5, url: 'https://www.goodreads.com/search?q=The+Mythical+Man-Month' }
    ],
    links: [
      { kind: '资料', label: '维基百科', url: 'https://zh.wikipedia.org/w/index.php?search=人月神话' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=人月神话' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=人月神话' }
    ],
    related: ['books/pragmatic-programmer', 'books/clean-architecture', 'books/ddia'],
    f: { field: ['计算机与编程', '管理'], form: ['实体书'], language: ['中文', '英文'] }
  },
  {
    id: 'tcp-ip-illustrated',
    cat: 'books',
    title: 'TCP/IP详解 卷1：协议',
    alt: 'TCP/IP Illustrated, Volume 1: The Protocols',
    year: 1994,
    region: '美国',
    status: '已出版',
    image: 'assets/img/books/tcp-ip-illustrated.jpg',
    summary: '通过实际抓包与图解方式深入剖析TCP/IP协议族各层协议的工作原理与交互细节。',
    review: '网络工程领域的标杆著作，W. Richard Stevens以抓包驱动的方式让抽象协议变得直观。第二版由Kevin Fall修订更新。适合网络工程师、安全研究员与后端开发者。卷2讲实现、卷3讲应用，但卷1最为经典。',
    pros: ['抓包教学典范', '图示精美', '深度适中'],
    cons: ['第二版仍有年代感', '需要网络基础'],
    tags: ['W. Richard Stevens', '网络协议', '抓包分析'],
    scores: [
      { src: '豆瓣', val: 9.5, max: 10, url: 'https://book.douban.com/subject_search?search_text=TCP+IP详解' },
      { src: 'Goodreads', val: 4.4, max: 5, url: 'https://www.goodreads.com/search?q=TCP+IP+Illustrated' }
    ],
    links: [
      { kind: '资料', label: '豆瓣读书', url: 'https://book.douban.com/subject_search?search_text=TCP+IP详解' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=TCPIP详解卷1' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=TCPIP详解' }
    ],
    related: ['books/csapp', 'books/computer-networking-top-down', 'books/os-three-easy-pieces'],
    f: { field: ['计算机与编程'], form: ['教科书'], language: ['中文', '英文'] }
  },
  {
    id: 'computer-networking-top-down',
    cat: 'books',
    title: '计算机网络：自顶向下方法',
    alt: 'Computer Networking: A Top-Down Approach',
    year: 2000,
    region: '美国',
    status: '已出版',
    image: null,
    summary: '从应用层出发逐层向下讲解计算机网络原理，以互联网为核心案例贯穿全书。',
    review: 'Kurose与Ross合著的畅销教材，与传统自底向上路线相反，先讲HTTP/DNS等应用再深入传输与链路层。第八版增加网络安全与SDN内容。适合本科生与自学者，配套在线实验资源丰富。比Tanenbaum更易入门。',
    pros: ['自顶向下易理解', '配套资源好', '更新及时'],
    cons: ['深度不如Stevens', '部分章节冗余'],
    tags: ['James Kurose', 'Keith Ross', '网络教材'],
    scores: [
      { src: '豆瓣', val: 9.0, max: 10, url: 'https://book.douban.com/subject_search?search_text=计算机网络自顶向下方法' },
      { src: 'Goodreads', val: 4.1, max: 5, url: 'https://www.goodreads.com/search?q=Computer+Networking+Top-Down' }
    ],
    links: [
      { kind: '资料', label: '维基百科', url: 'https://zh.wikipedia.org/w/index.php?search=计算机网络自顶向下方法' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=计算机网络自顶向下方法' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=计算机网络自顶向下' }
    ],
    related: ['books/tcp-ip-illustrated', 'books/csapp', 'books/os-three-easy-pieces'],
    f: { field: ['计算机与编程'], form: ['教科书'], language: ['中文', '英文'] }
  },
  {
    id: 'ml-zhou',
    cat: 'books',
    title: '机器学习',
    alt: 'Machine Learning',
    year: 2016,
    region: '中国',
    status: '已出版',
    image: null,
    summary: '周志华教授编写的机器学习入门教材，系统介绍决策树、SVM、神经网络、集成学习、聚类、降维等核心方法。',
    review: '国内最权威的机器学习教材，因封面被称为「西瓜书」。行文简洁、公式推导清晰，兼顾理论与直觉。适合本科高年级与研究生入门，配套「南瓜书」补充公式推导。英文版同步发行，国际影响力大。',
    pros: ['中文原创经典', '体系完整', '配套资源丰富'],
    cons: ['部分章节偏简', '深度学习覆盖有限'],
    tags: ['周志华', '西瓜书', '机器学习入门'],
    scores: [
      { src: '豆瓣', val: 9.0, max: 10, url: 'https://book.douban.com/subject_search?search_text=机器学习周志华' },
      { src: 'Goodreads', val: 4.0, max: 5, url: 'https://www.goodreads.com/search?q=Zhou+Zhihua+Machine+Learning' }
    ],
    links: [
      { kind: '资料', label: '豆瓣读书', url: 'https://book.douban.com/subject_search?search_text=机器学习周志华' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=机器学习周志华' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=机器学习西瓜书' }
    ],
    related: ['books/statistical-learning-li', 'books/deep-learning-goodfellow', 'books/d2l'],
    f: { field: ['人工智能', '计算机与编程'], form: ['教科书'], language: ['中文', '英文'] }
  },
  {
    id: 'deep-learning-goodfellow',
    cat: 'books',
    title: '深度学习',
    alt: 'Deep Learning',
    year: 2016,
    region: '加拿大',
    status: '已出版',
    image: null,
    summary: 'Ian Goodfellow、Yoshua Bengio与Aaron Courville合著的深度学习奠基教材，覆盖线性代数、概率、优化、CNN、RNN、生成模型等。',
    review: '深度学习领域的「花书」，三位作者均为该领域奠基人。第一部分数学基础扎实，第二部分方法论系统，第三部分前沿研究指引。适合研究生与研究者，初学者建议先补数学基础。免费在线版持续更新。',
    pros: ['作者权威', '数学严谨', '免费在线版'],
    cons: ['理论偏重', '代码示例少'],
    tags: ['Ian Goodfellow', 'Yoshua Bengio', '花书'],
    scores: [
      { src: '豆瓣', val: 8.8, max: 10, url: 'https://book.douban.com/subject_search?search_text=深度学习花书' },
      { src: 'Goodreads', val: 4.4, max: 5, url: 'https://www.goodreads.com/search?q=Deep+Learning+Goodfellow' }
    ],
    links: [
      { kind: '资料', label: '官方网站', url: 'https://www.deeplearningbook.org/' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=深度学习花书' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=深度学习Goodfellow' }
    ],
    related: ['books/ml-zhou', 'books/statistical-learning-li', 'books/d2l'],
    f: { field: ['人工智能'], form: ['教科书', '电子书'], language: ['中文', '英文'] }
  },
  {
    id: 'd2l',
    cat: 'books',
    title: '动手学深度学习',
    alt: 'Dive into Deep Learning',
    year: 2019,
    region: '中国',
    status: '已出版',
    image: 'assets/img/books/d2l.jpg',
    summary: '李沐领衔编写，将深度学习理论与可运行代码紧密结合，支持PyTorch/TensorFlow/MXNet/JAX多框架。',
    review: '开源交互式教材，每节附带Jupyter Notebook可直接运行。从基础到Transformer、GAN、强化学习均有覆盖。中英文双语免费，社区活跃。适合希望边学边练的工程师与学生，是目前最佳实践导向的DL入门书。',
    pros: ['开源免费', '代码可运行', '多框架支持'],
    cons: ['更新频繁版本差异', '纸质版滞后'],
    tags: ['李沐', '开源教材', '实战导向'],
    scores: [
      { src: '豆瓣', val: 9.2, max: 10, url: 'https://book.douban.com/subject_search?search_text=动手学深度学习' },
      { src: 'Goodreads', val: 4.5, max: 5, url: 'https://www.goodreads.com/search?q=Dive+into+Deep+Learning' }
    ],
    links: [
      { kind: '官方', label: '官方网站', url: 'https://d2l.ai/' },
      { kind: '资料', label: 'GitHub', url: 'https://github.com/d2l-ai/d2l-zh' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=动手学深度学习' }
    ],
    related: ['books/deep-learning-goodfellow', 'books/ml-zhou', 'books/statistical-learning-li'],
    f: { field: ['人工智能', '计算机与编程'], form: ['电子书', '实体书'], language: ['中文', '英文'] }
  },
  {
    id: 'statistical-learning-li',
    cat: 'books',
    title: '统计学习方法',
    alt: 'Statistical Learning Methods',
    year: 2012,
    region: '中国',
    status: '已出版',
    image: null,
    summary: '李航博士系统介绍监督学习与无监督学习的统计方法，涵盖感知机、朴素贝叶斯、SVM、CRF、EM算法等。',
    review: '国内机器学习理论经典，以数学推导见长，每章附有习题。第二版新增无监督学习内容。适合考研复习与理论研究，与西瓜书互补：西瓜书重直觉，本书重推导。公式密度高，建议配合代码实现加深理解。',
    pros: ['推导严谨', '体系清晰', '考研必备'],
    cons: ['代码缺失', '深度学习未覆盖'],
    tags: ['李航', '统计学习', '数学推导'],
    scores: [
      { src: '豆瓣', val: 9.2, max: 10, url: 'https://book.douban.com/subject_search?search_text=统计学习方法李航' },
      { src: 'Goodreads', val: 4.0, max: 5, url: 'https://www.goodreads.com/search?q=Statistical+Learning+Methods+Li+Hang' }
    ],
    links: [
      { kind: '资料', label: '豆瓣读书', url: 'https://book.douban.com/subject_search?search_text=统计学习方法李航' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=统计学习方法李航' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=统计学习方法' }
    ],
    related: ['books/ml-zhou', 'books/deep-learning-goodfellow', 'books/esl'],
    f: { field: ['人工智能', '数学'], form: ['教科书'], language: ['中文'] }
  },
  {
    id: 'sicp',
    cat: 'books',
    title: '计算机程序的构造和解释',
    alt: 'Structure and Interpretation of Computer Programs',
    year: 1984,
    region: '美国',
    status: '已出版',
    image: null,
    summary: 'MIT经典入门教材，用Scheme语言讲授抽象、递归、解释器设计与元语言抽象等计算机科学核心思想。',
    review: '被誉为「魔法书」，培养的是一整套计算思维而非某种语言技能。Abelson与Sussman的教学理念影响了几代程序员。第二版仍是首选，2022年有Python改编版。适合愿意挑战思维边界的开发者，难度较高但回报巨大。',
    pros: ['思维训练顶级', '影响深远', '免费电子版'],
    cons: ['Scheme语言冷门', '学习曲线陡峭'],
    tags: ['Abelson', 'Sussman', 'MIT', '计算思维'],
    scores: [
      { src: '豆瓣', val: 9.5, max: 10, url: 'https://book.douban.com/subject_search?search_text=计算机程序的构造和解释' },
      { src: 'Goodreads', val: 4.5, max: 5, url: 'https://www.goodreads.com/search?q=Structure+and+Interpretation+of+Computer+Programs' }
    ],
    links: [
      { kind: '资料', label: '维基百科', url: 'https://zh.wikipedia.org/w/index.php?search=SICP' },
      { kind: '阅读', label: 'MIT官方', url: 'https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/6515/sicp.zip/index.html' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=计算机程序的构造和解释' }
    ],
    related: ['books/algorithms-clrs', 'books/csapp', 'books/clean-code'],
    f: { field: ['计算机与编程'], form: ['教科书'], language: ['中文', '英文'] }
  },
  {
    id: 'clean-code',
    cat: 'books',
    title: '代码整洁之道',
    alt: 'Clean Code: A Handbook of Agile Software Craftsmanship',
    year: 2008,
    region: '美国',
    status: '已出版',
    image: null,
    summary: 'Robert C. Martin阐述编写可读、可维护代码的原则与实践，涵盖命名、函数、注释、格式、错误处理等。',
    review: 'Uncle Bob的代码美学宣言，强调「代码是写给人读的」。书中规则有些绝对化，但核心理念——降低认知负担——永不过时。适合团队建立编码规范时参考，建议批判性阅读，结合自身项目取舍。Java示例为主。',
    pros: ['理念清晰', '案例对比直观', '行业影响力大'],
    cons: ['部分规则过于教条', 'Java中心主义'],
    tags: ['Robert C. Martin', 'Uncle Bob', '代码质量'],
    scores: [
      { src: '豆瓣', val: 8.7, max: 10, url: 'https://book.douban.com/subject_search?search_text=代码整洁之道' },
      { src: 'Goodreads', val: 4.2, max: 5, url: 'https://www.goodreads.com/search?q=Clean+Code+Robert+Martin' }
    ],
    links: [
      { kind: '资料', label: '豆瓣读书', url: 'https://book.douban.com/subject_search?search_text=代码整洁之道' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=代码整洁之道' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=代码整洁之道' }
    ],
    related: ['books/refactoring', 'books/clean-architecture', 'books/code-complete-2'],
    f: { field: ['计算机与编程'], form: ['实体书', '电子书'], language: ['中文', '英文'] }
  },
  {
    id: 'os-three-easy-pieces',
    cat: 'books',
    title: '操作系统导论',
    alt: 'Operating Systems: Three Easy Pieces',
    year: 2015,
    region: '美国',
    status: '已出版',
    image: null,
    summary: '以虚拟化、并发、持久化三大支柱组织操作系统教学内容，语言幽默，配套代码实验丰富。',
    review: 'OSTEP是近年来最受欢迎的OS教材，Remzi夫妇写作风格亲切，把复杂概念拆解为小块。免费在线版持续更新，中文版翻译良好。比Tanenbaum更适合自学，比Silberschatz更深入实践。强烈推荐配合项目做实验。',
    pros: ['免费开源', '写作风格好', '实验配套完善'],
    cons: ['深度不及Tanenbaum', '部分章节仍在完善'],
    tags: ['Remzi Arpaci-Dusseau', 'OSTEP', '操作系统'],
    scores: [
      { src: '豆瓣', val: 9.4, max: 10, url: 'https://book.douban.com/subject_search?search_text=操作系统导论OSTEP' },
      { src: 'Goodreads', val: 4.6, max: 5, url: 'https://www.goodreads.com/search?q=Operating+Systems+Three+Easy+Pieces' }
    ],
    links: [
      { kind: '官方', label: '官方网站', url: 'https://pages.cs.wisc.edu/~remzi/OSTEP/' },
      { kind: '资料', label: '豆瓣读书', url: 'https://book.douban.com/subject_search?search_text=操作系统导论' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=操作系统导论' }
    ],
    related: ['books/csapp', 'books/computer-networking-top-down', 'books/algorithms-clrs'],
    f: { field: ['计算机与编程'], form: ['教科书', '电子书'], language: ['中文', '英文'] }
  },
  {
    id: 'clean-architecture',
    cat: 'books',
    title: '架构整洁之道',
    alt: 'Clean Architecture: A Craftsman\'s Guide to Software Structure and Design',
    year: 2017,
    region: '美国',
    status: '已出版',
    image: null,
    summary: 'Robert C. Martin提出整洁架构原则，强调依赖方向、边界划分与组件内聚，指导大型软件系统的结构设计。',
    review: 'Uncle Bob架构思想的集大成之作，将SOLID原则扩展到系统层面。核心观点「依赖指向内部」影响广泛。适合有3年以上经验的开发者与架构师，建议先读《代码整洁之道》打底。部分示例偏理想化，需结合实际项目消化。',
    pros: ['架构原则系统化', '图示清晰', '思想深刻'],
    cons: ['示例偏简单', '落地需经验'],
    tags: ['Robert C. Martin', '软件架构', 'SOLID'],
    scores: [
      { src: '豆瓣', val: 8.6, max: 10, url: 'https://book.douban.com/subject_search?search_text=架构整洁之道' },
      { src: 'Goodreads', val: 4.1, max: 5, url: 'https://www.goodreads.com/search?q=Clean+Architecture' }
    ],
    links: [
      { kind: '资料', label: '豆瓣读书', url: 'https://book.douban.com/subject_search?search_text=架构整洁之道' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=架构整洁之道' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=架构整洁之道' }
    ],
    related: ['books/clean-code', 'books/refactoring', 'books/domain-driven-design'],
    f: { field: ['计算机与编程'], form: ['实体书', '电子书'], language: ['中文', '英文'] }
  },
  {
    "id": "domain-driven-design",
    "image": "assets/img/books/domain-driven-design.jpg",
    "cat": "books",
    "title": "领域驱动设计：软件核心复杂性应对之道",
    "alt": "Domain-Driven Design: Tackling Complexity in the Heart of Software",
    "year": 2003,
    "region": "美国",
    "status": "已出版",
    "f": {
      "field": [
        "计算机与编程"
      ],
      "form": [
        "实体书"
      ],
      "language": [
        "中文",
        "英文"
      ]
    },
    "summary": "Eric Evans提出DDD方法论，通过限界上下文、聚合根、领域事件等概念建模业务复杂性，弥合技术与业务鸿沟。",
    "review": "DDD开山之作，定义了 ubiquitous language、bounded context 等核心概念。原著偏哲学化，入门可先读Vaughn Vernon的《实现领域驱动设计》。适合处理复杂业务系统的架构师与高级开发者，是微服务拆分的重要理论基础。",
    "pros": [
      "思想开创性",
      "解决真实痛点",
      "影响微服务架构"
    ],
    "cons": [
      "原著晦涩",
      "落地难度大"
    ],
    "tags": [
      "Eric Evans",
      "DDD",
      "业务建模"
    ],
    "scores": [
      {
        "src": "豆瓣",
        "val": 8.8,
        "max": 10,
        "url": "https://book.douban.com/subject_search?search_text=领域驱动设计Eric+Evans"
      },
      {
        "src": "Goodreads",
        "val": 4.1,
        "max": 5,
        "url": "https://www.goodreads.com/search?q=Domain-Driven+Design+Eric+Evans"
      }
    ],
    "links": [
      {
        "kind": "资料",
        "label": "维基百科",
        "url": "https://zh.wikipedia.org/w/index.php?search=领域驱动设计"
      },
      {
        "kind": "购买",
        "label": "京东",
        "url": "https://search.jd.com/Search?keyword=领域驱动设计"
      },
      {
        "kind": "阅读",
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/global?keyword=领域驱动设计"
      }
    ],
    "related": [
      "books/clean-architecture",
      "books/design-patterns-gof"
    ]
  },
  {
    "id": "kafka-definitive-guide",
    "image": null,
    "cat": "books",
    "title": "Kafka权威指南",
    "alt": "Kafka: The Definitive Guide",
    "year": 2017,
    "region": "美国",
    "status": "已出版",
    "f": {
      "field": [
        "计算机与编程"
      ],
      "form": [
        "实体书",
        "电子书"
      ],
      "language": [
        "中文",
        "英文"
      ]
    },
    "summary": "由Kafka核心贡献者撰写，全面介绍Apache Kafka的架构、生产者消费者API、流处理与运维管理。",
    "review": "Kafka官方推荐用书，作者团队来自Confluent与LinkedIn。第二版覆盖KRaft模式与新特性。适合大数据工程师与后端开发者，是理解事件驱动架构的必读材料。建议配合官方文档与动手搭建集群一起学习。",
    "pros": [
      "作者权威",
      "覆盖全面",
      "实战导向"
    ],
    "cons": [
      "版本迭代快",
      "部分章节偏运维"
    ],
    "tags": [
      "Gwen Shapira",
      "Confluent",
      "消息队列"
    ],
    "scores": [
      {
        "src": "豆瓣",
        "val": 8.9,
        "max": 10,
        "url": "https://book.douban.com/subject_search?search_text=Kafka权威指南"
      },
      {
        "src": "Goodreads",
        "val": 4.2,
        "max": 5,
        "url": "https://www.goodreads.com/search?q=Kafka+Definitive+Guide"
      }
    ],
    "links": [
      {
        "kind": "资料",
        "label": "豆瓣读书",
        "url": "https://book.douban.com/subject_search?search_text=Kafka权威指南"
      },
      {
        "kind": "购买",
        "label": "京东",
        "url": "https://search.jd.com/Search?keyword=Kafka权威指南"
      },
      {
        "kind": "阅读",
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/global?keyword=Kafka权威指南"
      }
    ],
    "related": [
      "books/ddia",
      "books/site-reliability-engineering"
    ]
  },
  {
    id: 'feynman-lectures',
    cat: 'books',
    title: '费曼物理学讲义',
    alt: 'The Feynman Lectures on Physics',
    year: 1964,
    region: '美国',
    status: '已出版',
    image: null,
    summary: 'Richard Feynman在加州理工讲授的普通物理课程整理，以独特视角重新诠释力学、电磁学、量子力学等基础物理。',
    review: '物理学教育的里程碑，Feynman以直觉驱动的方式讲解物理本质，而非堆砌公式。三卷本覆盖经典到量子。适合有微积分基础的物理爱好者与本科生，被誉为「读一遍不够，要反复品味」。新版附赠习题解答与在线资源。',
    pros: ['直觉式教学', '洞察深刻', '永不过时'],
    cons: ['难度不低', '不适合应试'],
    tags: ['Richard Feynman', '物理经典', 'Caltech'],
    scores: [
      { src: '豆瓣', val: 9.7, max: 10, url: 'https://book.douban.com/subject_search?search_text=费曼物理学讲义' },
      { src: 'Goodreads', val: 4.6, max: 5, url: 'https://www.goodreads.com/search?q=Feynman+Lectures+on+Physics' }
    ],
    links: [
      { kind: '官方', label: '免费在线版', url: 'https://www.feynmanlectures.caltech.edu/' },
      { kind: '资料', label: '维基百科', url: 'https://zh.wikipedia.org/w/index.php?search=费曼物理学讲义' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=费曼物理学讲义' }
    ],
    related: ['books/seven-short-physics', 'books/brief-history-of-time', 'books/godel-escher-bach'],
    f: { field: ['物理'], form: ['教科书'], language: ['中文', '英文'] }
  },
  {
    id: 'brief-history-of-time',
    cat: 'books',
    title: '时间简史',
    alt: 'A Brief History of Time',
    year: 1988,
    region: '英国',
    status: '已出版',
    image: null,
    summary: 'Stephen Hawking面向大众讲述宇宙起源、黑洞、时间箭头与统一理论，全书仅用一个公式E=mc²。',
    review: '史上最畅销的科普书之一，将前沿宇宙学以通俗语言呈现给普通读者。虽然后续研究有更新，但其启发意义不减。插图版增加了更多图解。适合所有对宇宙好奇的人，是科普写作的标杆。建议搭配《果壳中的宇宙》延伸阅读。',
    pros: ['科普典范', '影响深远', '通俗易懂'],
    cons: ['部分内容已过时', '中间章节偏难'],
    tags: ['Stephen Hawking', '宇宙学', '科普经典'],
    scores: [
      { src: '豆瓣', val: 8.8, max: 10, url: 'https://book.douban.com/subject_search?search_text=时间简史' },
      { src: 'Goodreads', val: 4.1, max: 5, url: 'https://www.goodreads.com/search?q=A+Brief+History+of+Time' }
    ],
    links: [
      { kind: '资料', label: '维基百科', url: 'https://zh.wikipedia.org/w/index.php?search=时间简史' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=时间简史' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=时间简史' }
    ],
    related: ['books/feynman-lectures', 'books/seven-short-physics', 'books/cosmos-sagan'],
    f: { field: ['物理', '天文', '科普'], form: ['实体书'], language: ['中文', '英文'] }
  },
  {
    id: 'seven-short-physics',
    cat: 'books',
    title: '七堂极简物理课',
    alt: 'Seven Brief Lessons on Physics',
    year: 2014,
    region: '意大利',
    status: '已出版',
    image: null,
    summary: 'Carlo Rovelli用七篇短文勾勒现代物理全貌：相对论、量子力学、宇宙结构、粒子、量子引力、热时间与自我。',
    review: '薄而精的物理入门，Rovelli兼具科学家与诗人气质，文字优美如散文。每章独立可读，适合碎片时间。比《时间简史》更短更易入口，但深度有限。适合零基础读者建立物理图景，也可作为送礼佳品。全球销量超百万。',
    pros: ['篇幅精炼', '文笔优美', '入门友好'],
    cons: ['深度有限', '不适合系统学习'],
    tags: ['Carlo Rovelli', '物理科普', '极简系列'],
    scores: [
      { src: '豆瓣', val: 8.5, max: 10, url: 'https://book.douban.com/subject_search?search_text=七堂极简物理课' },
      { src: 'Goodreads', val: 4.0, max: 5, url: 'https://www.goodreads.com/search?q=Seven+Brief+Lessons+on+Physics' }
    ],
    links: [
      { kind: '资料', label: '豆瓣读书', url: 'https://book.douban.com/subject_search?search_text=七堂极简物理课' },
      { kind: '购买', label: '当当', url: 'https://search.dangdang.com/?key=七堂极简物理课' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=七堂极简物理课' }
    ],
    related: ['books/brief-history-of-time', 'books/feynman-lectures', 'books/from-one-to-infinity'],
    f: { field: ['物理', '科普'], form: ['实体书'], language: ['中文', '英文'] }
  },
  {
    id: 'godel-escher-bach',
    cat: 'books',
    title: '哥德尔、艾舍尔、巴赫：集异璧之大成',
    alt: 'Gödel, Escher, Bach: an Eternal Golden Braid',
    year: 1979,
    region: '美国',
    status: '已出版',
    image: 'assets/img/books/godel-escher-bach.jpg',
    summary: 'Douglas Hofstadter以哥德尔不完备定理、艾舍尔版画与巴赫赋格为线索，探讨自指、意识与形式系统的深层联系。',
    review: '跨学科神作，融合数学、艺术、音乐、AI与认知科学。结构精巧，对话体穿插，阅读体验独特。获普利策奖。适合喜欢智力挑战的读者，需耐心与多轮重读。中文版翻译难度大但质量尚可。被誉为「改变思维方式的书」。',
    pros: ['跨学科巅峰', '结构精妙', '思想深邃'],
    cons: ['阅读门槛极高', '篇幅巨大'],
    tags: ['Douglas Hofstadter', '自指', '意识'],
    scores: [
      { src: '豆瓣', val: 9.4, max: 10, url: 'https://book.douban.com/subject_search?search_text=哥德尔艾舍尔巴赫' },
      { src: 'Goodreads', val: 4.3, max: 5, url: 'https://www.goodreads.com/search?q=Godel+Escher+Bach' }
    ],
    links: [
      { kind: '资料', label: '维基百科', url: 'https://zh.wikipedia.org/w/index.php?search=哥德尔艾舍尔巴赫' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=哥德尔艾舍尔巴赫' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=哥德尔艾舍尔巴赫' }
    ],
    related: ['books/feynman-lectures', 'books/how-to-solve-it', 'books/concrete-mathematics'],
    f: { field: ['数学', '认知科学', '科普'], form: ['实体书'], language: ['中文', '英文'] }
  },
  {
    id: 'how-to-solve-it',
    cat: 'books',
    title: '怎样解题',
    alt: 'How to Solve It: A New Aspect of Mathematical Method',
    year: 1945,
    region: '美国',
    status: '已出版',
    image: null,
    summary: 'George Polya提出数学解题四步法：理解问题、拟定计划、执行计划、回顾反思，并给出大量启发式策略。',
    review: '数学思维方法论经典，其四步框架适用于远超数学的问题解决场景。Polya的启发式提问清单至今被编程教育与AI研究引用。适合学生、教师与任何需要结构化思考的人。篇幅不长，可反复翻阅。与《数学之美》互补阅读效果佳。',
    pros: ['方法论普适', '简洁实用', '影响深远'],
    cons: ['示例偏初等', '非系统性教材'],
    tags: ['George Polya', '问题解决', '数学思维'],
    scores: [
      { src: '豆瓣', val: 8.9, max: 10, url: 'https://book.douban.com/subject_search?search_text=怎样解题Polya' },
      { src: 'Goodreads', val: 4.2, max: 5, url: 'https://www.goodreads.com/search?q=How+to+Solve+It+Polya' }
    ],
    links: [
      { kind: '资料', label: '维基百科', url: 'https://zh.wikipedia.org/w/index.php?search=怎样解题' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=怎样解题Polya' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=怎样解题' }
    ],
    related: ['books/godel-escher-bach', 'books/concrete-mathematics', 'books/math-beauty'],
    f: { field: ['数学', '思维方法'], form: ['实体书'], language: ['中文', '英文'] }
  },
  {
    id: 'concrete-mathematics',
    cat: 'books',
    title: '具体数学：计算机科学基础',
    alt: 'Concrete Mathematics: A Foundation for Computer Science',
    year: 1989,
    region: '美国',
    status: '已出版',
    image: 'assets/img/books/concrete-mathematics.jpg',
    summary: 'Knuth、Graham、Patashnik合著，融合离散数学与分析技巧，专为算法分析提供数学工具。',
    review: 'CS数学基础圣经，内容涵盖求和、递推、整数函数、二项式系数、生成函数等。书名CONCRETE=CONtinuous+disCRETE。旁注充满学生吐槽与幽默。适合算法竞赛选手与研究生，难度较高但回报丰厚。配合TAOCP阅读更佳。',
    pros: ['CS数学基石', '旁注有趣', '习题精彩'],
    cons: ['难度高', '不适合速成'],
    tags: ['Donald Knuth', 'Ronald Graham', '离散数学'],
    scores: [
      { src: '豆瓣', val: 9.5, max: 10, url: 'https://book.douban.com/subject_search?search_text=具体数学' },
      { src: 'Goodreads', val: 4.4, max: 5, url: 'https://www.goodreads.com/search?q=Concrete+Mathematics' }
    ],
    links: [
      { kind: '资料', label: '维基百科', url: 'https://zh.wikipedia.org/w/index.php?search=具体数学' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=具体数学' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=具体数学' }
    ],
    related: ['books/algorithms-clrs', 'books/how-to-solve-it', 'books/sicp'],
    f: { field: ['数学', '计算机与编程'], form: ['教科书'], language: ['中文', '英文'] }
  },
  {
    "id": "math-beauty",
    "image": null,
    "cat": "books",
    "title": "数学之美",
    "alt": "Mathematical Beauty",
    "year": 2012,
    "region": "中国",
    "status": "已出版",
    "f": {
      "field": [
        "数学",
        "科普",
        "计算机与编程"
      ],
      "form": [
        "实体书"
      ],
      "language": [
        "中文"
      ]
    },
    "summary": "吴军以自然语言处理与信息检索为切入点，展示数学方法在工程实践中的优雅应用。",
    "review": "国内最好的数学科普之一，将抽象数学与搜索引擎、语音识别等实际应用无缝连接。第二版增加大数据与机器学习内容。适合理工科学生与从业者，读完会对「数学有什么用」有全新认识。文风平实，无炫技感。",
    "pros": [
      "应用导向",
      "通俗易懂",
      "案例鲜活"
    ],
    "cons": [
      "深度有限",
      "部分技术已过时"
    ],
    "tags": [
      "吴军",
      "NLP",
      "信息检索"
    ],
    "scores": [
      {
        "src": "豆瓣",
        "val": 8.9,
        "max": 10,
        "url": "https://book.douban.com/subject_search?search_text=数学之美"
      },
      {
        "src": "Goodreads",
        "val": 4,
        "max": 5,
        "url": "https://www.goodreads.com/search?q=Mathematical+Beauty+Wu+Jun"
      }
    ],
    "links": [
      {
        "kind": "资料",
        "label": "豆瓣读书",
        "url": "https://book.douban.com/subject_search?search_text=数学之美"
      },
      {
        "kind": "购买",
        "label": "京东",
        "url": "https://search.jd.com/Search?keyword=数学之美"
      },
      {
        "kind": "阅读",
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/global?keyword=数学之美"
      }
    ],
    "related": [
      "books/how-to-solve-it",
      "books/wave-and-trough"
    ]
  },
  {
    id: 'selfish-gene',
    cat: 'books',
    title: '自私的基因',
    alt: 'The Selfish Gene',
    year: 1976,
    region: '英国',
    status: '已出版',
    image: 'assets/img/books/selfish-gene.jpg',
    summary: 'Richard Dawkins从基因视角重新诠释进化论，提出「基因是自然选择的基本单位」，并首创「模因」概念。',
    review: '进化生物学最具影响力的科普著作，彻底改变了公众对进化的理解方式。「模因」一词由此进入文化讨论。30周年版增补回应批评。适合所有对生命科学感兴趣的读者，是理解现代进化论的必读之作。争议性观点需批判性阅读。',
    pros: ['开创性视角', '文笔出色', '影响超越学术'],
    cons: ['部分观点有争议', '简化了复杂性'],
    tags: ['Richard Dawkins', '进化论', '模因'],
    scores: [
      { src: '豆瓣', val: 8.9, max: 10, url: 'https://book.douban.com/subject_search?search_text=自私的基因' },
      { src: 'Goodreads', val: 4.1, max: 5, url: 'https://www.goodreads.com/search?q=The+Selfish+Gene' }
    ],
    links: [
      { kind: '资料', label: '维基百科', url: 'https://zh.wikipedia.org/w/index.php?search=自私的基因' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=自私的基因' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=自私的基因' }
    ],
    related: ['books/origin-of-species', 'books/sapiens', 'books/what-is-life'],
    f: { field: ['生物', '科普'], form: ['实体书'], language: ['中文', '英文'] }
  },
  {
    id: 'origin-of-species',
    cat: 'books',
    title: '物种起源',
    alt: 'On the Origin of Species',
    year: 1859,
    region: '英国',
    status: '已出版',
    image: null,
    summary: 'Charles Darwin提出自然选择学说，以大量观察证据论证物种通过变异与自然选择逐步演化。',
    review: '生物学史上最重要的著作，奠定了现代进化论基础。Darwin的论证逻辑严密、证据丰富，文风审慎。推荐读第六版（最终修订版），中文译本多个版本可选。适合对科学史与生物学有兴趣的读者，是理解生命科学的原点。',
    pros: ['划时代巨著', '论证严谨', '科学史必读'],
    cons: ['行文冗长', '部分知识已过时'],
    tags: ['Charles Darwin', '进化论', '自然选择'],
    scores: [
      { src: '豆瓣', val: 9.2, max: 10, url: 'https://book.douban.com/subject_search?search_text=物种起源' },
      { src: 'Goodreads', val: 4.0, max: 5, url: 'https://www.goodreads.com/search?q=On+the+Origin+of+Species' }
    ],
    links: [
      { kind: '资料', label: '古腾堡计划', url: 'https://www.gutenberg.org/ebooks/author/485' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=物种起源' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=物种起源' }
    ],
    related: ['books/selfish-gene', 'books/what-is-life', 'books/guns-germs-steel'],
    f: { field: ['生物', '科学史'], form: ['实体书'], language: ['中文', '英文'] }
  },
  {
    id: 'what-is-life',
    cat: 'books',
    title: '生命是什么',
    alt: 'What Is Life? The Physical Aspect of the Living Cell',
    year: 1944,
    region: '奥地利',
    status: '已出版',
    image: null,
    summary: 'Erwin Schrodinger从物理学角度探讨生命的本质，提出「非周期性晶体」存储遗传信息的预言。',
    review: '量子物理学家跨界生物学的经典演讲集，直接启发了Watson和Crick发现DNA双螺旋结构。篇幅短小但思想深邃，展示了物理学思维如何照亮生物学问题。适合对交叉学科感兴趣的读者，是分子生物学诞生的催化剂。',
    pros: ['跨学科先驱', '预见DNA结构', '篇幅精炼'],
    cons: ['部分假说已被修正', '需要物理背景'],
    tags: ['Erwin Schrodinger', '分子生物学', '量子物理'],
    scores: [
      { src: '豆瓣', val: 9.0, max: 10, url: 'https://book.douban.com/subject_search?search_text=生命是什么薛定谔' },
      { src: 'Goodreads', val: 4.2, max: 5, url: 'https://www.goodreads.com/search?q=What+Is+Life+Schrodinger' }
    ],
    links: [
      { kind: '资料', label: '维基百科', url: 'https://zh.wikipedia.org/w/index.php?search=生命是什么薛定谔' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=生命是什么薛定谔' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=生命是什么' }
    ],
    related: ['books/selfish-gene', 'books/origin-of-species', 'books/feynman-lectures'],
    f: { field: ['生物', '物理', '科学史'], form: ['实体书'], language: ['中文', '英文'] }
  },
  {
    id: 'cosmos-sagan',
    cat: 'books',
    title: '宇宙',
    alt: 'Cosmos',
    year: 1980,
    region: '美国',
    status: '已出版',
    image: null,
    summary: 'Carl Sagan以诗意笔触描绘宇宙的演化、恒星的生命周期、行星探索与人类在宇宙中的位置。',
    review: '天文学科普的永恒经典，Sagan将科学知识与人文关怀完美融合。同名纪录片影响一代人。Ann Druyan编辑的新版补充了最新发现。适合所有年龄段的读者，是培养宇宙观与科学精神的最佳入门书。文字优美如诗。',
    pros: ['科学与人文交融', '文笔极佳', '影响深远'],
    cons: ['部分数据过时', '偏感性叙述'],
    tags: ['Carl Sagan', '天文学', '科普经典'],
    scores: [
      { src: '豆瓣', val: 9.3, max: 10, url: 'https://book.douban.com/subject_search?search_text=宇宙Carl+Sagan' },
      { src: 'Goodreads', val: 4.5, max: 5, url: 'https://www.goodreads.com/search?q=Cosmos+Carl+Sagan' }
    ],
    links: [
      { kind: '资料', label: '维基百科', url: 'https://zh.wikipedia.org/w/index.php?search=Cosmos+Carl+Sagan' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=宇宙卡尔萨根' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=宇宙萨根' }
    ],
    related: ['books/brief-history-of-time', 'books/seven-short-physics', 'books/from-one-to-infinity'],
    f: { field: ['天文', '科普'], form: ['实体书'], language: ['中文', '英文'] }
  },
  {
    id: 'from-one-to-infinity',
    cat: 'books',
    title: '从一到无穷大',
    alt: 'One Two Three... Infinity',
    year: 1947,
    region: '美国',
    status: '已出版',
    image: null,
    summary: 'George Gamow以趣味方式讲解数学、物理与生物的基础概念，从数字游戏讲到宇宙结构与基因。',
    review: '科普史上的里程碑，Gamow用亲手绘制的插图与幽默故事让科学变得亲切。覆盖数学、物理、生物三大领域，广度惊人。虽年代久远但核心内容依然有效。适合青少年与成人科普入门，是许多科学家的启蒙读物。',
    pros: ['趣味性强', '手绘插图经典', '跨学科广度'],
    cons: ['部分知识过时', '深度有限'],
    tags: ['George Gamow', '科普入门', '跨学科'],
    scores: [
      { src: '豆瓣', val: 9.0, max: 10, url: 'https://book.douban.com/subject_search?search_text=从一到无穷大' },
      { src: 'Goodreads', val: 4.3, max: 5, url: 'https://www.goodreads.com/search?q=One+Two+Three+Infinity' }
    ],
    links: [
      { kind: '资料', label: '豆瓣读书', url: 'https://book.douban.com/subject_search?search_text=从一到无穷大' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=从一到无穷大' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=从一到无穷大' }
    ],
    related: ['books/cosmos-sagan', 'books/brief-history-of-time', 'books/math-beauty'],
    f: { field: ['科普', '数学', '物理'], form: ['实体书'], language: ['中文', '英文'] }
  },
  {
    id: 'elements-chemistry',
    cat: 'books',
    title: '化学元素漫话',
    alt: 'The Elements: A Visual Exploration of Every Known Atom in the Universe',
    year: 2009,
    region: '美国',
    status: '已出版',
    image: 'assets/img/books/elements-chemistry.jpg',
    summary: 'Theodore Gray以精美摄影展示每种化学元素的实物形态、用途与趣闻，配以简明文字解说。',
    review: '最美的元素图鉴，每个元素都有高清实物照片与数据卡片。Gray的收藏与摄影令人叹为观止。适合化学爱好者与学生，既是工具书也是艺术品。中文版翻译良好。后续有《分子》《反应》同系列。纸质版印刷质量远胜电子版。',
    pros: ['视觉震撼', '信息准确', '收藏价值高'],
    cons: ['深度有限', '价格较高'],
    tags: ['Theodore Gray', '元素周期表', '图鉴'],
    scores: [
      { src: '豆瓣', val: 9.1, max: 10, url: 'https://book.douban.com/subject_search?search_text=化学元素漫话' },
      { src: 'Goodreads', val: 4.5, max: 5, url: 'https://www.goodreads.com/search?q=The+Elements+Theodore+Gray' }
    ],
    links: [
      { kind: '资料', label: '豆瓣读书', url: 'https://book.douban.com/subject_search?search_text=化学元素漫话' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=化学元素漫话' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=化学元素漫话' }
    ],
    related: ['books/from-one-to-infinity', 'books/math-beauty', 'books/cosmos-sagan'],
    f: { field: ['化学', '科普'], form: ['图鉴', '画册'], language: ['中文', '英文'] }
  },
  {
    id: 'sapiens',
    cat: 'books',
    title: '人类简史：从动物到上帝',
    alt: 'Sapiens: A Brief History of Humankind',
    year: 2011,
    region: '以色列',
    status: '已出版',
    image: null,
    summary: 'Yuval Noah Harari以宏观视角梳理智人从认知革命、农业革命到科学革命的历程，探讨虚构故事如何塑造人类社会。',
    review: '现象级全球畅销书，将人类学、历史学与生物学融为一炉。「想象的共同体」「农业革命是史上最大骗局」等观点引发广泛讨论。适合所有对人类命运感兴趣的读者，是当代通识教育的标杆。后续《未来简史》《今日简史》构成三部曲。',
    pros: ['视野宏大', '观点新颖', '可读性极强'],
    cons: ['部分论述过度简化', '学术争议较多'],
    tags: ['Yuval Noah Harari', '大历史', '人类学'],
    scores: [
      { src: '豆瓣', val: 9.1, max: 10, url: 'https://book.douban.com/subject_search?search_text=人类简史' },
      { src: 'Goodreads', val: 4.4, max: 5, url: 'https://www.goodreads.com/search?q=Sapiens+Harari' }
    ],
    links: [
      { kind: '资料', label: '维基百科', url: 'https://zh.wikipedia.org/w/index.php?search=人类简史' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=人类简史' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=人类简史' }
    ],
    related: ['books/homo-deus', 'books/guns-germs-steel', 'books/why-nations-fail'],
    f: { field: ['世界史', '科普'], form: ['实体书', '电子书'], language: ['中文', '英文'] }
  },
  {
    id: 'homo-deus',
    cat: 'books',
    title: '未来简史：从智人到智神',
    alt: 'Homo Deus: A Brief History of Tomorrow',
    year: 2015,
    region: '以色列',
    status: '已出版',
    image: null,
    summary: 'Harari展望人类征服饥荒瘟疫战争后的新议程：追求永生、幸福与神性，探讨数据主义与算法权威。',
    review: '《人类简史》续作，从历史转向未来预测。对人工智能、生物工程与数据宗教的讨论极具前瞻性。比前作更具争议性，部分预言已在验证中。适合关注科技伦理与社会趋势的读者。三部曲中思辨性最强的一本。',
    pros: ['前瞻性强', '思辨深入', '话题热点'],
    cons: ['预测难免偏差', '哲学化较重'],
    tags: ['Yuval Noah Harari', '未来学', '数据主义'],
    scores: [
      { src: '豆瓣', val: 8.5, max: 10, url: 'https://book.douban.com/subject_search?search_text=未来简史' },
      { src: 'Goodreads', val: 4.1, max: 5, url: 'https://www.goodreads.com/search?q=Homo+Deus' }
    ],
    links: [
      { kind: '资料', label: '维基百科', url: 'https://zh.wikipedia.org/w/index.php?search=未来简史' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=未来简史' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=未来简史' }
    ],
    related: ['books/sapiens', 'books/antifragile', 'books/thinking-fast-slow'],
    f: { field: ['世界史', '科普', '哲学'], form: ['实体书', '电子书'], language: ['中文', '英文'] }
  },
  {
    "id": "guns-germs-steel",
    "image": null,
    "cat": "books",
    "title": "枪炮、病菌与钢铁：人类社会的命运",
    "alt": "Guns, Germs, and Steel: The Fates of Human Societies",
    "year": 1997,
    "region": "美国",
    "status": "已出版",
    "f": {
      "field": [
        "世界史",
        "科普"
      ],
      "form": [
        "实体书"
      ],
      "language": [
        "中文",
        "英文"
      ]
    },
    "summary": "Jared Diamond从地理与环境角度解释为何欧亚大陆文明主导了近代世界，驳斥种族主义解释。",
    "review": "普利策奖得主，以大历史视角回答「为什么是欧洲人征服美洲而非相反」。强调地理禀赋而非文化优劣。虽受学术界批评（环境决定论倾向），但作为通识读物启发价值巨大。适合对文明比较感兴趣的读者，可与《国家为什么会失败》对照阅读。",
    "pros": [
      "视角独特",
      "跨学科整合",
      "可读性强"
    ],
    "cons": [
      "环境决定论争议",
      "忽略制度因素"
    ],
    "tags": [
      "Jared Diamond",
      "大历史",
      "地理决定论"
    ],
    "scores": [
      {
        "src": "豆瓣",
        "val": 8.8,
        "max": 10,
        "url": "https://book.douban.com/subject_search?search_text=枪炮病菌与钢铁"
      },
      {
        "src": "Goodreads",
        "val": 4,
        "max": 5,
        "url": "https://www.goodreads.com/search?q=Guns+Germs+and+Steel"
      }
    ],
    "links": [
      {
        "kind": "资料",
        "label": "维基百科",
        "url": "https://zh.wikipedia.org/w/index.php?search=枪炮病菌与钢铁"
      },
      {
        "kind": "购买",
        "label": "京东",
        "url": "https://search.jd.com/Search?keyword=枪炮病菌与钢铁"
      },
      {
        "kind": "阅读",
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/global?keyword=枪炮病菌与钢铁"
      }
    ],
    "related": [
      "books/sapiens",
      "books/why-nations-fail"
    ]
  },
  {
    id: 'wanli-fifteen-years',
    cat: 'books',
    title: '万历十五年',
    alt: '1587, a Year of No Significance',
    year: 1982,
    region: '中国',
    status: '已出版',
    image: null,
    summary: '黄仁宇以1587年为切片，通过万历皇帝、张居正、海瑞、戚继光等人物的命运，揭示明代体制困境。',
    review: '中国史学经典，开创「大历史」叙事范式。表面写无关紧要的一年，实则剖析帝国治理的系统性失败。文笔典雅，兼具学术与文学价值。适合对中国政治传统感兴趣的读者，是理解「数目字管理」缺失的入门必读。多个版本可选，中华书局版较权威。',
    pros: ['叙事独特', '洞察深刻', '文笔典雅'],
    cons: ['视角单一', '部分解读有争议'],
    tags: ['黄仁宇', '明史', '大历史'],
    scores: [
      { src: '豆瓣', val: 9.0, max: 10, url: 'https://book.douban.com/subject_search?search_text=万历十五年' },
      { src: 'Goodreads', val: 3.9, max: 5, url: 'https://www.goodreads.com/search?q=1587+Year+of+No+Significance' }
    ],
    links: [
      { kind: '资料', label: '维基百科', url: 'https://zh.wikipedia.org/w/index.php?search=万历十五年' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=万历十五年' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=万历十五年' }
    ],
    related: ['books/chinese-political-gains-losses', 'books/guo-shi-da-gang', 'books/rural-china'],
    f: { field: ['中国史', '历史'], form: ['实体书'], language: ['中文', '英文'] }
  },
  {
    id: 'chinese-political-gains-losses',
    cat: 'books',
    title: '中国历代政治得失',
    alt: 'Traditional Chinese Politics: Gains and Losses',
    year: 1952,
    region: '中国',
    status: '已出版',
    image: null,
    summary: '钱穆以五次演讲梳理汉唐宋明清五代的政府组织、考试监察、赋税兵役制度及其利弊演变。',
    review: '钱穆先生最通俗的政治史著作，篇幅精炼却洞见频出。强调制度背后的「人事」与「时代意见」，反对以今非古。适合对中国政治制度史感兴趣的读者，是理解传统治理智慧的捷径。与《国史大纲》互补阅读效果更佳。',
    pros: ['精炼通透', '见解独到', '大家小书'],
    cons: ['个人色彩浓', '未覆盖全部朝代'],
    tags: ['钱穆', '制度史', '政治传统'],
    scores: [
      { src: '豆瓣', val: 9.2, max: 10, url: 'https://book.douban.com/subject_search?search_text=中国历代政治得失' },
      { src: 'Goodreads', val: 4.0, max: 5, url: 'https://www.goodreads.com/search?q=Chinese+Political+Gains+Losses+Qian+Mu' }
    ],
    links: [
      { kind: '资料', label: '豆瓣读书', url: 'https://book.douban.com/subject_search?search_text=中国历代政治得失' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=中国历代政治得失' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=中国历代政治得失' }
    ],
    related: ['books/wanli-fifteen-years', 'books/guo-shi-da-gang', 'books/rural-china'],
    f: { field: ['中国史', '政治'], form: ['实体书'], language: ['中文'] }
  },
  {
    id: 'guo-shi-da-gang',
    cat: 'books',
    title: '国史大纲',
    alt: 'Outline of National History',
    year: 1940,
    region: '中国',
    status: '已出版',
    image: null,
    summary: '钱穆在抗战时期编写的中国通史，强调对本国历史的「温情与敬意」，梳理政治制度与文化精神的演进脉络。',
    review: '20世纪最重要的中国通史著作之一，写于民族危亡之际，饱含文化自觉。文言写成，需一定古文功底。适合深入研究中国史的读者，是理解钱穆史学思想的基石。商务印书馆版较通行。与吕思勉《中国通史》、陈寅恪著作并称三大通史。',
    pros: ['文化底蕴深厚', '体系完整', '时代意义特殊'],
    cons: ['文言门槛高', '个人观点鲜明'],
    tags: ['钱穆', '中国通史', '文化史观'],
    scores: [
      { src: '豆瓣', val: 9.4, max: 10, url: 'https://book.douban.com/subject_search?search_text=国史大纲' },
      { src: 'Goodreads', val: 4.2, max: 5, url: 'https://www.goodreads.com/search?q=Guo+Shi+Da+Gang' }
    ],
    links: [
      { kind: '资料', label: '豆瓣读书', url: 'https://book.douban.com/subject_search?search_text=国史大纲' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=国史大纲' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=国史大纲' }
    ],
    related: ['books/chinese-political-gains-losses', 'books/wanli-fifteen-years', 'books/rural-china'],
    f: { field: ['中国史', '历史'], form: ['教科书'], language: ['中文'] }
  },
  {
    id: 'thinking-fast-slow',
    cat: 'books',
    title: '思考，快与慢',
    alt: 'Thinking, Fast and Slow',
    year: 2011,
    region: '以色列',
    status: '已出版',
    image: null,
    summary: 'Daniel Kahneman系统阐述双系统理论：快速直觉的系统1与慢速理性的系统2，揭示人类判断中的系统性偏差。',
    review: '诺贝尔经济学奖得主的毕生研究总结，将行为经济学核心发现以通俗方式呈现。锚定效应、损失厌恶、前景理论等概念由此普及。适合所有做决策的人，是理解认知偏差的必读之作。篇幅较长但每章独立可读。近年部分研究可重复性受质疑，需批判阅读。',
    pros: ['诺奖级研究', '概念体系完整', '应用广泛'],
    cons: ['篇幅冗长', '部分研究存疑'],
    tags: ['Daniel Kahneman', '行为经济学', '认知偏差'],
    scores: [
      { src: '豆瓣', val: 8.6, max: 10, url: 'https://book.douban.com/subject_search?search_text=思考快与慢' },
      { src: 'Goodreads', val: 4.2, max: 5, url: 'https://www.goodreads.com/search?q=Thinking+Fast+and+Slow' }
    ],
    links: [
      { kind: '资料', label: '维基百科', url: 'https://zh.wikipedia.org/w/index.php?search=思考快与慢' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=思考快与慢' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=思考快与慢' }
    ],
    related: ['books/influence-cialdini', 'books/nudge', 'books/black-swan'],
    f: { field: ['心理', '认知科学', '经济'], form: ['实体书', '电子书'], language: ['中文', '英文'] }
  },
  {
    "id": "influence-cialdini",
    "image": null,
    "cat": "books",
    "title": "影响力",
    "alt": "Influence: The Psychology of Persuasion",
    "year": 1984,
    "region": "美国",
    "status": "已出版",
    "f": {
      "field": [
        "心理",
        "商业"
      ],
      "form": [
        "实体书"
      ],
      "language": [
        "中文",
        "英文"
      ]
    },
    "summary": "Robert Cialdini提出六大说服原理：互惠、承诺一致、社会认同、喜好、权威、稀缺，解析日常顺从行为的心理机制。",
    "review": "社会心理学最畅销的应用著作，被营销、销售、谈判从业者奉为圣经。新版增加第七原则「联盟」。案例丰富生动，原理简洁实用。适合所有需要理解或抵御说服的人。建议读最新版，旧版缺少数字时代案例。是《思考快与慢》的最佳实践补充。",
    "pros": [
      "实用性强",
      "案例鲜活",
      "框架清晰"
    ],
    "cons": [
      "部分案例老旧",
      "学术深度有限"
    ],
    "tags": [
      "Robert Cialdini",
      "说服心理学",
      "社会心理学"
    ],
    "scores": [
      {
        "src": "豆瓣",
        "val": 8.7,
        "max": 10,
        "url": "https://book.douban.com/subject_search?search_text=影响力西奥迪尼"
      },
      {
        "src": "Goodreads",
        "val": 4.2,
        "max": 5,
        "url": "https://www.goodreads.com/search?q=Influence+Cialdini"
      }
    ],
    "links": [
      {
        "kind": "资料",
        "label": "豆瓣读书",
        "url": "https://book.douban.com/subject_search?search_text=影响力"
      },
      {
        "kind": "购买",
        "label": "京东",
        "url": "https://search.jd.com/Search?keyword=影响力西奥迪尼"
      },
      {
        "kind": "阅读",
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/global?keyword=影响力"
      }
    ],
    "related": [
      "books/thinking-fast-slow",
      "books/nudge"
    ]
  },
  {
    id: 'nudge',
    cat: 'books',
    title: '助推：如何做出有关健康、财富与幸福的最佳决策',
    alt: 'Nudge: Improving Decisions About Health, Wealth, and Happiness',
    year: 2008,
    region: '美国',
    status: '已出版',
    image: null,
    summary: 'Richard Thaler与Cass Sunstein提出「自由家长主义」，通过选择架构设计引导人们做出更好决策而不限制自由。',
    review: '行为经济学应用于公共政策的里程碑，Thaler因此获诺奖。「默认选项」「选择架构」等概念影响全球政策制定。终极版大幅更新案例。适合政策制定者、产品经理与对行为设计感兴趣的读者。比《思考快与慢》更偏应用。',
    pros: ['政策影响力大', '诺奖背书', '实操性强'],
    cons: ['伦理争议', '效果因情境而异'],
    tags: ['Richard Thaler', 'Cass Sunstein', '行为设计'],
    scores: [
      { src: '豆瓣', val: 8.0, max: 10, url: 'https://book.douban.com/subject_search?search_text=助推' },
      { src: 'Goodreads', val: 3.8, max: 5, url: 'https://www.goodreads.com/search?q=Nudge+Thaler' }
    ],
    links: [
      { kind: '资料', label: '维基百科', url: 'https://zh.wikipedia.org/w/index.php?search=助推Thaler' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=助推' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=助推' }
    ],
    related: ['books/thinking-fast-slow', 'books/influence-cialdini', 'books/black-swan'],
    f: { field: ['经济', '心理', '政治'], form: ['实体书'], language: ['中文', '英文'] }
  },
  {
    id: 'black-swan',
    cat: 'books',
    title: '黑天鹅：如何应对不可预知的未来',
    alt: 'The Black Swan: The Impact of the Highly Improbable',
    year: 2007,
    region: '美国',
    status: '已出版',
    image: null,
    summary: 'Nassim Taleb阐述极端不确定事件（黑天鹅）的特征、成因与应对策略，批判传统统计模型对尾部风险的忽视。',
    review: 'Taleb「不确定性」系列核心著作，2008年金融危机后被奉为先知之书。文风犀利甚至刻薄，观点激进但启发巨大。适合金融从业者、风险管理者与哲学爱好者。后续《反脆弱》提出更积极的应对框架。建议按序阅读整个系列。',
    pros: ['预见性强', '思想深刻', '文风独特'],
    cons: ['行文散漫', '态度傲慢'],
    tags: ['Nassim Taleb', '不确定性', '风险管理'],
    scores: [
      { src: '豆瓣', val: 8.3, max: 10, url: 'https://book.douban.com/subject_search?search_text=黑天鹅塔勒布' },
      { src: 'Goodreads', val: 3.9, max: 5, url: 'https://www.goodreads.com/search?q=The+Black+Swan+Taleb' }
    ],
    links: [
      { kind: '资料', label: '维基百科', url: 'https://zh.wikipedia.org/w/index.php?search=黑天鹅塔勒布' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=黑天鹅塔勒布' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=黑天鹅' }
    ],
    related: ['books/antifragile', 'books/fooled-by-randomness', 'books/thinking-fast-slow'],
    f: { field: ['金融', '思维方法', '哲学'], form: ['实体书'], language: ['中文', '英文'] }
  },
  {
    id: 'antifragile',
    cat: 'books',
    title: '反脆弱：从不确定性中获益',
    alt: 'Antifragile: Things That Gain from Disorder',
    year: 2012,
    region: '美国',
    status: '已出版',
    image: null,
    summary: 'Taleb提出「反脆弱」概念：某些系统在压力与混乱中反而变强，区别于脆弱与坚韧，并给出个人与社会层面的实践指南。',
    review: '「不确定性」系列的集大成之作，比《黑天鹅》更具建设性。杠铃策略、创伤后成长、冗余的价值等概念影响广泛。适合创业者、投资者与系统设计者。篇幅较长，核心观点可提炼，细节按需精读。中文版翻译质量尚可。',
    pros: ['概念原创', '跨领域应用', '实践指导强'],
    cons: ['篇幅冗长', '重复论述多'],
    tags: ['Nassim Taleb', '反脆弱', '复杂系统'],
    scores: [
      { src: '豆瓣', val: 8.4, max: 10, url: 'https://book.douban.com/subject_search?search_text=反脆弱' },
      { src: 'Goodreads', val: 4.1, max: 5, url: 'https://www.goodreads.com/search?q=Antifragile+Taleb' }
    ],
    links: [
      { kind: '资料', label: '维基百科', url: 'https://zh.wikipedia.org/w/index.php?search=反脆弱' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=反脆弱' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=反脆弱' }
    ],
    related: ['books/black-swan', 'books/fooled-by-randomness', 'books/skin-in-the-game'],
    f: { field: ['思维方法', '金融', '哲学'], form: ['实体书'], language: ['中文', '英文'] }
  },
  {
    id: 'intelligent-investor',
    cat: 'books',
    title: '聪明的投资者',
    alt: 'The Intelligent Investor',
    year: 1949,
    region: '美国',
    status: '已出版',
    image: null,
    summary: 'Benjamin Graham阐述价值投资核心理念：安全边际、市场先生、防御型与进取型投资者的不同策略。',
    review: '巴菲特称之为「有史以来最好的投资书籍」。第四版附Jason Zweig注释，将经典理论与现代市场对照。强调纪律与情绪管理而非选股技巧。适合所有股票投资者，尤其是长期价值投资者。建议读第四版注释本，原版部分数据已过时。',
    pros: ['价值投资圣经', '理念永不过时', '巴菲特推荐'],
    cons: ['部分案例过时', '不适合短线交易者'],
    tags: ['Benjamin Graham', '价值投资', 'Warren Buffett'],
    scores: [
      { src: '豆瓣', val: 9.0, max: 10, url: 'https://book.douban.com/subject_search?search_text=聪明的投资者' },
      { src: 'Goodreads', val: 4.3, max: 5, url: 'https://www.goodreads.com/search?q=The+Intelligent+Investor' }
    ],
    links: [
      { kind: '资料', label: '维基百科', url: 'https://zh.wikipedia.org/w/index.php?search=聪明的投资者' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=聪明的投资者' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=聪明的投资者' }
    ],
    related: ['books/security-analysis', 'books/random-walk-wall-street', 'books/principles-dalio'],
    f: { field: ['投资', '金融'], form: ['实体书'], language: ['中文', '英文'] }
  },
  {
    id: 'security-analysis',
    cat: 'books',
    title: '证券分析',
    alt: 'Security Analysis',
    year: 1934,
    region: '美国',
    status: '已出版',
    image: null,
    summary: 'Graham与Dodd合著的投资分析奠基之作，系统建立基本面分析方法论，区分投资与投机。',
    review: '价值投资的源头文献，比《聪明的投资者》更专业更深入。第六版附当代投资人注释。适合专业分析师与严肃的价值投资者，普通读者可从《聪明的投资者》入门。被誉为华尔街的「圣经」，其分析框架至今仍是行业标准。',
    pros: ['分析框架奠基', '严谨系统', '历史地位无可替代'],
    cons: ['专业门槛高', '部分内容过时'],
    tags: ['Benjamin Graham', 'David Dodd', '基本面分析'],
    scores: [
      { src: '豆瓣', val: 9.1, max: 10, url: 'https://book.douban.com/subject_search?search_text=证券分析' },
      { src: 'Goodreads', val: 4.3, max: 5, url: 'https://www.goodreads.com/search?q=Security+Analysis+Graham' }
    ],
    links: [
      { kind: '资料', label: '维基百科', url: 'https://zh.wikipedia.org/w/index.php?search=证券分析' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=证券分析' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=证券分析' }
    ],
    related: ['books/intelligent-investor', 'books/random-walk-wall-street', 'books/principles-dalio'],
    f: { field: ['投资', '金融'], form: ['教科书'], language: ['中文', '英文'] }
  },
  {
    id: 'random-walk-wall-street',
    cat: 'books',
    title: '漫步华尔街',
    alt: 'A Random Walk Down Wall Street',
    year: 1973,
    region: '美国',
    status: '已出版',
    image: 'assets/img/books/random-walk-wall-street.jpg',
    summary: 'Burton Malkiel论证有效市场假说，主张个人投资者应持有指数基金而非试图战胜市场。',
    review: '指数投资的理论基石，与价值投资形成有趣对照。第十二版更新加密货币与行为金融学内容。适合所有个人投资者，尤其适合认同「市场难以战胜」的被动投资者。文笔流畅，兼具学术严谨与大众可读性。是理财入门的最佳起点之一。',
    pros: ['指数投资经典', '更新及时', '平衡客观'],
    cons: ['有效市场假说有争议', '对中国市场适用性有限'],
    tags: ['Burton Malkiel', '有效市场', '指数基金'],
    scores: [
      { src: '豆瓣', val: 8.6, max: 10, url: 'https://book.douban.com/subject_search?search_text=漫步华尔街' },
      { src: 'Goodreads', val: 4.1, max: 5, url: 'https://www.goodreads.com/search?q=Random+Walk+Down+Wall+Street' }
    ],
    links: [
      { kind: '资料', label: '维基百科', url: 'https://zh.wikipedia.org/w/index.php?search=漫步华尔街' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=漫步华尔街' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=漫步华尔街' }
    ],
    related: ['books/intelligent-investor', 'books/security-analysis', 'books/principles-dalio'],
    f: { field: ['投资', '金融'], form: ['实体书'], language: ['中文', '英文'] }
  },
  {
    id: 'principles-dalio',
    cat: 'books',
    title: '原则',
    alt: 'Principles: Life and Work',
    year: 2017,
    region: '美国',
    status: '已出版',
    image: null,
    summary: 'Ray Dalio分享桥水基金的管理与生活原则，强调极度透明、创意择优与系统化决策框架。',
    review: '全球最大对冲基金创始人的经验结晶，将个人成长与组织管理融为一体。「痛苦+反思=进步」等公式广为流传。适合管理者、创业者与追求自我提升的人。部分内容偏理想化，需结合自身情境取舍。配套App与工作手册可辅助实践。',
    pros: ['实战经验丰富', '框架系统化', '坦诚直接'],
    cons: ['篇幅冗长', '部分原则过于机械'],
    tags: ['Ray Dalio', '桥水基金', '管理原则'],
    scores: [
      { src: '豆瓣', val: 8.3, max: 10, url: 'https://book.douban.com/subject_search?search_text=原则Dalio' },
      { src: 'Goodreads', val: 4.0, max: 5, url: 'https://www.goodreads.com/search?q=Principles+Ray+Dalio' }
    ],
    links: [
      { kind: '资料', label: '豆瓣读书', url: 'https://book.douban.com/subject_search?search_text=原则' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=原则Dalio' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=原则' }
    ],
    related: ['books/intelligent-investor', 'books/good-to-great', 'books/high-output-management'],
    f: { field: ['管理', '投资', '自我提升'], form: ['实体书', '电子书'], language: ['中文', '英文'] }
  },
  {
    id: 'good-to-great',
    cat: 'books',
    title: '从优秀到卓越',
    alt: 'Good to Great: Why Some Companies Make the Leap... and Others Don\'t',
    year: 2001,
    region: '美国',
    status: '已出版',
    image: null,
    summary: 'Jim Collins通过对比研究找出企业从优秀跨越到卓越的共性：第五级领导、刺猬理念、飞轮效应等。',
    review: '管理学实证研究标杆，基于大量数据筛选出11家实现跨越的公司。核心概念如「先人后事」「直面残酷现实」影响深远。适合企业管理者与MBA学生。需注意样本选择偏差问题，部分案例公司后来衰落。建议与《基业长青》配套阅读。',
    pros: ['研究方法严谨', '概念易记', '影响广泛'],
    cons: ['样本偏差', '部分公司已衰落'],
    tags: ['Jim Collins', '企业管理', '领导力'],
    scores: [
      { src: '豆瓣', val: 8.5, max: 10, url: 'https://book.douban.com/subject_search?search_text=从优秀到卓越' },
      { src: 'Goodreads', val: 4.1, max: 5, url: 'https://www.goodreads.com/search?q=Good+to+Great' }
    ],
    links: [
      { kind: '资料', label: '维基百科', url: 'https://zh.wikipedia.org/w/index.php?search=从优秀到卓越' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=从优秀到卓越' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=从优秀到卓越' }
    ],
    related: ['books/principles-dalio', 'books/high-output-management', 'books/lean-startup'],
    f: { field: ['管理', '商业'], form: ['实体书'], language: ['中文', '英文'] }
  },
  {
    id: 'high-output-management',
    cat: 'books',
    title: '格鲁夫给经理人的第一课',
    alt: 'High Output Management',
    year: 1983,
    region: '美国',
    status: '已出版',
    image: null,
    summary: 'Intel前CEO Andy Grove以制造业思维解析管理本质，提出产出导向、任务相关成熟度、会议管理等实用框架。',
    review: '硅谷管理经典，Ben Horowitz称之为「最好的管理书」。Grove将工程管理思维引入人员管理，强调经理人的杠杆率。适合技术管理者与初创公司CEO。篇幅精炼，每章都有可立即应用的工具。比德鲁克更实操，比Collins更底层。',
    pros: ['实操性极强', '硅谷管理基石', '篇幅精炼'],
    cons: ['年代较久', '偏制造业视角'],
    tags: ['Andy Grove', 'Intel', '管理杠杆'],
    scores: [
      { src: '豆瓣', val: 9.0, max: 10, url: 'https://book.douban.com/subject_search?search_text=格鲁夫给经理人的第一课' },
      { src: 'Goodreads', val: 4.4, max: 5, url: 'https://www.goodreads.com/search?q=High+Output+Management' }
    ],
    links: [
      { kind: '资料', label: '豆瓣读书', url: 'https://book.douban.com/subject_search?search_text=格鲁夫给经理人的第一课' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=格鲁夫给经理人的第一课' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=格鲁夫经理人' }
    ],
    related: ['books/good-to-great', 'books/principles-dalio', 'books/lean-startup'],
    f: { field: ['管理', '商业'], form: ['实体书'], language: ['中文', '英文'] }
  },
  {
    id: 'lean-startup',
    cat: 'books',
    title: '精益创业',
    alt: 'The Lean Startup',
    year: 2011,
    region: '美国',
    status: '已出版',
    image: null,
    summary: 'Eric Ries提出MVP、构建-衡量-学习循环与验证式学习，将创业从艺术变为可管理的科学过程。',
    review: '创业方法论的革命性著作，「最小可行产品」「转型」等术语已成为行业通用语。适合初创团队与产品负责人，也适用于大企业创新部门。部分批评认为过度简化了创业的复杂性，但核心框架仍有巨大价值。建议结合实际项目边读边练。',
    pros: ['方法论开创性', '术语标准化', '适用范围广'],
    cons: ['过度简化风险', '案例偏科技业'],
    tags: ['Eric Ries', 'MVP', '创业方法论'],
    scores: [
      { src: '豆瓣', val: 8.2, max: 10, url: 'https://book.douban.com/subject_search?search_text=精益创业' },
      { src: 'Goodreads', val: 4.1, max: 5, url: 'https://www.goodreads.com/search?q=The+Lean+Startup' }
    ],
    links: [
      { kind: '资料', label: '维基百科', url: 'https://zh.wikipedia.org/w/index.php?search=精益创业' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=精益创业' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=精益创业' }
    ],
    related: ['books/zero-to-one', 'books/good-to-great', 'books/high-output-management'],
    f: { field: ['创业', '商业', '管理'], form: ['实体书', '电子书'], language: ['中文', '英文'] }
  },
  {
    id: 'zero-to-one',
    cat: 'books',
    title: '从0到1：开启商业与未来的秘密',
    alt: 'Zero to One: Notes on Startups, or How to Build the Future',
    year: 2014,
    region: '美国',
    status: '已出版',
    image: null,
    summary: 'Peter Thiel提出「垂直进步」优于「水平进步」，强调垄断价值、逆向思维与创始人愿景对创新的关键作用。',
    review: 'PayPal联合创始人兼Facebook早期投资者的创业哲学。核心观点「竞争是给失败者的」引发广泛讨论。比《精益创业》更偏战略与哲学，适合有野心的创业者与投资人。文风简洁有力，每章都有 provocative 观点。中文版翻译良好。',
    pros: ['观点犀利', '战略视野高', '启发性强'],
    cons: ['个人色彩浓', '可操作性不如精益创业'],
    tags: ['Peter Thiel', '垄断创新', '逆向思维'],
    scores: [
      { src: '豆瓣', val: 8.4, max: 10, url: 'https://book.douban.com/subject_search?search_text=从0到1' },
      { src: 'Goodreads', val: 4.1, max: 5, url: 'https://www.goodreads.com/search?q=Zero+to+One' }
    ],
    links: [
      { kind: '资料', label: '维基百科', url: 'https://zh.wikipedia.org/w/index.php?search=从0到1' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=从0到1' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=从0到1' }
    ],
    related: ['books/lean-startup', 'books/good-to-great', 'books/innovators-dilemma'],
    f: { field: ['创业', '商业'], form: ['实体书', '电子书'], language: ['中文', '英文'] }
  },
  {
    "id": "innovators-dilemma",
    "image": null,
    "cat": "books",
    "title": "创新者的窘境",
    "alt": "The Innovator's Dilemma: When New Technologies Cause Great Firms to Fail",
    "year": 1997,
    "region": "美国",
    "status": "已出版",
    "f": {
      "field": [
        "商业",
        "管理",
        "技术史"
      ],
      "form": [
        "实体书"
      ],
      "language": [
        "中文",
        "英文"
      ]
    },
    "summary": "Clayton Christensen提出颠覆性创新理论，解释为何管理良好的大公司反而被新技术淘汰。",
    "review": "颠覆性创新概念的源头，解释了柯达、诺基亚等巨头衰落的结构性原因。区分维持性创新与颠覆性创新，提出小市场切入策略。适合企业管理者、产品经理与投资人。Christensen后续著作进一步扩展理论。乔布斯深受此书影响。",
    "pros": [
      "理论开创性",
      "解释力强",
      "影响产业实践"
    ],
    "cons": [
      "案例偏制造业",
      "预测力有限"
    ],
    "tags": [
      "Clayton Christensen",
      "颠覆性创新",
      "技术变革"
    ],
    "scores": [
      {
        "src": "豆瓣",
        "val": 8.7,
        "max": 10,
        "url": "https://book.douban.com/subject_search?search_text=创新者的窘境"
      },
      {
        "src": "Goodreads",
        "val": 4,
        "max": 5,
        "url": "https://www.goodreads.com/search?q=Innovators+Dilemma"
      }
    ],
    "links": [
      {
        "kind": "资料",
        "label": "维基百科",
        "url": "https://zh.wikipedia.org/w/index.php?search=创新者的窘境"
      },
      {
        "kind": "购买",
        "label": "京东",
        "url": "https://search.jd.com/Search?keyword=创新者的窘境"
      },
      {
        "kind": "阅读",
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/global?keyword=创新者的窘境"
      }
    ],
    "related": [
      "books/zero-to-one",
      "books/lean-startup"
    ]
  },
  {
    id: 'wealth-of-nations',
    cat: 'books',
    title: '国富论',
    alt: 'An Inquiry into the Nature and Causes of the Wealth of Nations',
    year: 1776,
    region: '英国',
    status: '已出版',
    image: null,
    summary: 'Adam Smith系统论述分工、自由贸易与市场机制，奠定古典经济学基础，提出「看不见的手」概念。',
    review: '现代经济学的奠基之作，其分工理论与自由贸易主张至今仍是经济学核心。原文篇幅宏大，建议选读精华章节或导读本。适合经济学专业学生与对思想史感兴趣的读者。多个中文译本可选，商务印书馆郭大力王亚南译本较经典。',
    pros: ['经济学原点', '思想深邃', '历史地位无可替代'],
    cons: ['篇幅巨大', '部分论述过时'],
    tags: ['Adam Smith', '古典经济学', '看不见的手'],
    scores: [
      { src: '豆瓣', val: 9.0, max: 10, url: 'https://book.douban.com/subject_search?search_text=国富论' },
      { src: 'Goodreads', val: 3.9, max: 5, url: 'https://www.goodreads.com/search?q=Wealth+of+Nations' }
    ],
    links: [
      { kind: '资料', label: '古腾堡计划', url: 'https://www.gutenberg.org/ebooks/3300' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=国富论' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=国富论' }
    ],
    related: ['books/capital-marx', 'books/freakonomics', 'books/why-nations-fail'],
    f: { field: ['经济', '科学史'], form: ['实体书'], language: ['中文', '英文'] }
  },
  {
    id: 'capital-marx',
    cat: 'books',
    title: '资本论',
    alt: 'Das Kapital',
    year: 1867,
    region: '德国',
    status: '已出版',
    image: null,
    summary: 'Karl Marx剖析资本主义生产方式，提出剩余价值理论、商品拜物教与资本积累规律。',
    review: '马克思主义政治经济学的核心著作，对后世社会科学影响无与伦比。第一卷最为完整，二三卷由恩格斯整理出版。适合哲学、经济学与政治学专业学生，以及对批判理论感兴趣的读者。建议配合导读本入门，直接阅读原文门槛极高。',
    pros: ['思想体系宏大', '影响深远', '批判视角独特'],
    cons: ['阅读难度极高', '部分预言未实现'],
    tags: ['Karl Marx', '政治经济学', '剩余价值'],
    scores: [
      { src: '豆瓣', val: 9.1, max: 10, url: 'https://book.douban.com/subject_search?search_text=资本论' },
      { src: 'Goodreads', val: 3.8, max: 5, url: 'https://www.goodreads.com/search?q=Das+Kapital' }
    ],
    links: [
      { kind: '资料', label: '马克思恩格斯文库', url: 'https://www.marxists.org/chinese/reference-books/capital/' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=资本论' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=资本论' }
    ],
    related: ['books/wealth-of-nations', 'books/why-nations-fail', 'books/communist-manifesto'],
    f: { field: ['经济', '政治', '哲学'], form: ['实体书'], language: ['中文', '德文'] }
  },
  {
    id: 'freakonomics',
    cat: 'books',
    title: '魔鬼经济学',
    alt: 'Freakonomics: A Rogue Economist Explores the Hidden Side of Everything',
    year: 2005,
    region: '美国',
    status: '已出版',
    image: 'assets/img/books/freakonomics.jpg',
    summary: 'Steven Levitt与Stephen Dubner用经济学工具分析犯罪、教育、育儿、房地产等日常话题中的隐藏逻辑。',
    review: '让经济学走出象牙塔的畅销书，以趣味案例展示「激励 matters」的核心洞见。续作多部，形成系列。适合对经济学好奇但畏惧数学的读者，是培养经济学直觉的绝佳入门读物。部分结论后续受到质疑，但思维方式的价值不减。',
    pros: ['趣味性强', '入门友好', '案例新颖'],
    cons: ['学术深度有限', '部分结论存疑'],
    tags: ['Steven Levitt', '趣味经济学', '隐藏逻辑'],
    scores: [
      { src: '豆瓣', val: 8.1, max: 10, url: 'https://book.douban.com/subject_search?search_text=魔鬼经济学' },
      { src: 'Goodreads', val: 3.9, max: 5, url: 'https://www.goodreads.com/search?q=Freakonomics' }
    ],
    links: [
      { kind: '资料', label: '维基百科', url: 'https://zh.wikipedia.org/w/index.php?search=魔鬼经济学' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=魔鬼经济学' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=魔鬼经济学' }
    ],
    related: ['books/wealth-of-nations', 'books/nudge', 'books/thinking-fast-slow'],
    f: { field: ['经济', '科普'], form: ['实体书'], language: ['中文', '英文'] }
  },
  {
    id: 'why-nations-fail',
    cat: 'books',
    title: '国家为什么会失败',
    alt: 'Why Nations Fail: The Origins of Power, Prosperity, and Poverty',
    year: 2012,
    region: '美国',
    status: '已出版',
    image: 'assets/img/books/why-nations-fail.jpg',
    summary: 'Daron Acemoglu与James Robinson论证包容性制度是国家繁荣的根本原因，汲取性制度则导致停滞与崩溃。',
    review: '新制度经济学的通俗力作，以大量历史案例支撑「制度决定论」。与《枪炮病菌与钢铁》形成地理vs制度的经典辩论。2024年作者获诺奖。适合对发展经济学与政治体制感兴趣的读者。中文版翻译良好。可与《狭窄的走廊》延伸阅读。',
    pros: ['论证有力', '案例丰富', '诺奖背书'],
    cons: ['制度决定论简化', '文化因素被低估'],
    tags: ['Daron Acemoglu', 'James Robinson', '制度经济学'],
    scores: [
      { src: '豆瓣', val: 8.5, max: 10, url: 'https://book.douban.com/subject_search?search_text=国家为什么会失败' },
      { src: 'Goodreads', val: 4.1, max: 5, url: 'https://www.goodreads.com/search?q=Why+Nations+Fail' }
    ],
    links: [
      { kind: '资料', label: '维基百科', url: 'https://zh.wikipedia.org/w/index.php?search=国家为什么会失败' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=国家为什么会失败' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=国家为什么会失败' }
    ],
    related: ['books/guns-germs-steel', 'books/sapiens', 'books/wealth-of-nations'],
    f: { field: ['经济', '政治', '世界史'], form: ['实体书'], language: ['中文', '英文'] }
  },
  {
    id: 'republic-plato',
    cat: 'books',
    title: '理想国',
    alt: 'Republic',
    year: -375,
    region: '古希腊',
    status: '已出版',
    image: null,
    summary: 'Plato通过苏格拉底对话探讨正义的本质，构建哲人王统治的理想城邦，提出洞穴寓言与理念论。',
    review: '西方政治哲学的奠基之作，对正义、教育、艺术与政体的讨论影响两千余年。洞穴寓言是认识论的经典隐喻。建议读郭斌和张竹明译本或Allan Bloom英译本。适合哲学专业学生与对政治思想史感兴趣的读者，需配合注释理解。',
    pros: ['西方哲学基石', '思想深邃', '文学性强'],
    cons: ['部分观点争议大', '需要背景知识'],
    tags: ['Plato', '政治哲学', '正义论'],
    scores: [
      { src: '豆瓣', val: 9.0, max: 10, url: 'https://book.douban.com/subject_search?search_text=理想国柏拉图' },
      { src: 'Goodreads', val: 3.9, max: 5, url: 'https://www.goodreads.com/search?q=Republic+Plato' }
    ],
    links: [
      { kind: '资料', label: '古腾堡计划', url: 'https://www.gutenberg.org/ebooks/1497' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=理想国柏拉图' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=理想国' }
    ],
    related: ['books/critique-pure-reason', 'books/justice-rawls', 'books/western-philosophy-russell'],
    f: { field: ['哲学', '政治'], form: ['实体书'], language: ['中文', '英文'] }
  },
  {
    id: 'critique-pure-reason',
    cat: 'books',
    title: '纯粹理性批判',
    alt: 'Critique of Pure Reason',
    year: 1781,
    region: '德国',
    status: '已出版',
    image: null,
    summary: 'Immanuel Kant考察人类认识的界限与条件，区分现象与物自体，调和经验主义与理性主义。',
    review: '近代哲学最重要的著作，开启了德国古典哲学传统。「先天综合判断如何可能」是核心问题。邓晓芒译本附详细注释，李秋零译本更流畅。适合哲学研究生与严肃爱好者，直接阅读门槛极高，建议先读导读本如《康德哲学导论》。',
    pros: ['哲学史转折点', '体系严密', '影响无与伦比'],
    cons: ['极其难读', '术语密集'],
    tags: ['Immanuel Kant', '认识论', '先验哲学'],
    scores: [
      { src: '豆瓣', val: 9.2, max: 10, url: 'https://book.douban.com/subject_search?search_text=纯粹理性批判' },
      { src: 'Goodreads', val: 4.0, max: 5, url: 'https://www.goodreads.com/search?q=Critique+of+Pure+Reason' }
    ],
    links: [
      { kind: '资料', label: '维基百科', url: 'https://zh.wikipedia.org/w/index.php?search=纯粹理性批判' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=纯粹理性批判' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=纯粹理性批判' }
    ],
    related: ['books/republic-plato', 'books/phenomenology-hegel', 'books/western-philosophy-russell'],
    f: { field: ['哲学'], form: ['实体书'], language: ['中文', '德文'] }
  },
  {
    id: 'western-philosophy-russell',
    cat: 'books',
    title: '西方哲学史',
    alt: 'A History of Western Philosophy',
    year: 1945,
    region: '英国',
    status: '已出版',
    image: null,
    summary: 'Bertrand Russell以清晰文笔梳理从古希腊到20世纪的西方哲学发展，穿插社会历史背景与个人评论。',
    review: '最畅销的哲学史著作，Russell的文笔使哲学变得可读。诺奖得主写的哲学史，兼具学术性与趣味性。个人偏见明显（如对黑格尔的批评），但作为入门导览价值巨大。适合哲学初学者，建议搭配更专业的哲学史互补阅读。',
    pros: ['文笔极佳', '覆盖面广', '入门友好'],
    cons: ['个人偏见明显', '部分评价过时'],
    tags: ['Bertrand Russell', '哲学史', '诺奖'],
    scores: [
      { src: '豆瓣', val: 8.9, max: 10, url: 'https://book.douban.com/subject_search?search_text=西方哲学史罗素' },
      { src: 'Goodreads', val: 4.1, max: 5, url: 'https://www.goodreads.com/search?q=History+of+Western+Philosophy+Russell' }
    ],
    links: [
      { kind: '资料', label: '维基百科', url: 'https://zh.wikipedia.org/w/index.php?search=西方哲学史罗素' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=西方哲学史罗素' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=西方哲学史' }
    ],
    related: ['books/republic-plato', 'books/critique-pure-reason', 'books/sophies-world'],
    f: { field: ['哲学', '科学史'], form: ['实体书'], language: ['中文', '英文'] }
  },
  {
    "id": "sophies-world",
    "image": null,
    "cat": "books",
    "title": "苏菲的世界",
    "alt": "Sophie's World",
    "year": 1991,
    "region": "挪威",
    "status": "已出版",
    "f": {
      "field": [
        "哲学",
        "教育"
      ],
      "form": [
        "实体书"
      ],
      "language": [
        "中文",
        "英文"
      ]
    },
    "summary": "Jostein Gaarder以小说形式讲述西方哲学史，少女苏菲收到神秘来信，逐步探索从苏格拉底到萨特的思想历程。",
    "review": "全球最畅销的哲学入门书，将两千多年哲学史融入悬疑故事中。适合青少年与零基础成人读者，是培养哲学兴趣的最佳起点。虽深度有限，但作为导览无可替代。中文版翻译流畅。读完后可转向Russell《西方哲学史》深入。",
    "pros": [
      "入门极佳",
      "故事驱动",
      "覆盖全面"
    ],
    "cons": [
      "深度有限",
      "后半段节奏加快"
    ],
    "tags": [
      "Jostein Gaarder",
      "哲学入门",
      "小说体哲学"
    ],
    "scores": [
      {
        "src": "豆瓣",
        "val": 8.8,
        "max": 10,
        "url": "https://book.douban.com/subject_search?search_text=苏菲的世界"
      },
      {
        "src": "Goodreads",
        "val": 3.9,
        "max": 5,
        "url": "https://www.goodreads.com/search?q=Sophies+World"
      }
    ],
    "links": [
      {
        "kind": "资料",
        "label": "维基百科",
        "url": "https://zh.wikipedia.org/w/index.php?search=苏菲的世界"
      },
      {
        "kind": "购买",
        "label": "京东",
        "url": "https://search.jd.com/Search?keyword=苏菲的世界"
      },
      {
        "kind": "阅读",
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/global?keyword=苏菲的世界"
      }
    ],
    "related": [
      "books/western-philosophy-russell",
      "books/republic-plato"
    ]
  },
  {
    id: 'justice-rawls',
    cat: 'books',
    title: '正义论',
    alt: 'A Theory of Justice',
    year: 1971,
    region: '美国',
    status: '已出版',
    image: null,
    summary: 'John Rawls提出「作为公平的正义」，通过无知之幕与原初状态推导出两条正义原则，重塑政治哲学议程。',
    review: '20世纪最重要的政治哲学著作，复兴了规范政治理论传统。差异原则与优先自由原则引发持续辩论。何怀宏等译本较通行。适合政治学、法学与哲学专业学生，是理解当代自由主义的必读之作。建议配合Sandel《公正》入门。',
    pros: ['理论体系完整', '影响深远', '论证严谨'],
    cons: ['抽象程度高', '批评者众多'],
    tags: ['John Rawls', '政治哲学', '公平正义'],
    scores: [
      { src: '豆瓣', val: 9.0, max: 10, url: 'https://book.douban.com/subject_search?search_text=正义论' },
      { src: 'Goodreads', val: 3.9, max: 5, url: 'https://www.goodreads.com/search?q=A+Theory+of+Justice' }
    ],
    links: [
      { kind: '资料', label: '维基百科', url: 'https://zh.wikipedia.org/w/index.php?search=正义论' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=正义论' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=正义论' }
    ],
    related: ['books/republic-plato', 'books/on-liberty', 'books/communist-manifesto'],
    f: { field: ['政治', '哲学', '法律'], form: ['教科书'], language: ['中文', '英文'] }
  },
  {
    "id": "on-liberty",
    "image": null,
    "cat": "books",
    "title": "论自由",
    "alt": "On Liberty",
    "year": 1859,
    "region": "英国",
    "status": "已出版",
    "f": {
      "field": [
        "政治",
        "哲学",
        "法律"
      ],
      "form": [
        "实体书"
      ],
      "language": [
        "中文",
        "英文"
      ]
    },
    "summary": "John Stuart Mill论证个人自由的边界：只有为防止伤害他人，社会才有权干涉个人行为，捍卫思想与言论自由。",
    "review": "自由主义经典文献，「伤害原则」至今仍是讨论个人自由与国家权力的基本框架。文笔优美，论证清晰。篇幅不长，适合所有关心公民权利的读者。多个中文译本可选，商务印书馆版较经典。与《功利主义》配套阅读可理解Mill思想全貌。",
    "pros": [
      "自由主义基石",
      "论证清晰",
      "篇幅精炼"
    ],
    "cons": [
      "时代局限",
      "部分论述简化"
    ],
    "tags": [
      "John Stuart Mill",
      "自由主义",
      "伤害原则"
    ],
    "scores": [
      {
        "src": "豆瓣",
        "val": 9.1,
        "max": 10,
        "url": "https://book.douban.com/subject_search?search_text=论自由密尔"
      },
      {
        "src": "Goodreads",
        "val": 4.1,
        "max": 5,
        "url": "https://www.goodreads.com/search?q=On+Liberty+Mill"
      }
    ],
    "links": [
      {
        "kind": "资料",
        "label": "古腾堡计划",
        "url": "https://www.gutenberg.org/ebooks/34901"
      },
      {
        "kind": "购买",
        "label": "京东",
        "url": "https://search.jd.com/Search?keyword=论自由密尔"
      },
      {
        "kind": "阅读",
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/global?keyword=论自由"
      }
    ],
    "related": [
      "books/justice-rawls",
      "books/republic-plato"
    ]
  },
  {
    id: 'rural-china',
    cat: 'books',
    title: '乡土中国',
    alt: 'Rural China',
    year: 1948,
    region: '中国',
    status: '已出版',
    image: null,
    summary: '费孝通基于田野调查提炼中国基层社会结构特征：差序格局、礼治秩序、男女有别、血缘地缘等概念。',
    review: '中国社会学的奠基之作，以精炼语言揭示中国传统社会的深层逻辑。「差序格局」成为理解中国人际关系的核心概念。篇幅短小但洞见密集，适合所有想理解中国社会的读者。是社会学入门必读，也是公务员考试常考书目。',
    pros: ['洞察深刻', '概念原创', '篇幅精炼'],
    cons: ['时代局限', '偏静态描述'],
    tags: ['费孝通', '社会学', '差序格局'],
    scores: [
      { src: '豆瓣', val: 9.2, max: 10, url: 'https://book.douban.com/subject_search?search_text=乡土中国' },
      { src: 'Goodreads', val: 4.0, max: 5, url: 'https://www.goodreads.com/search?q=Rural+China+Fei+Xiaotong' }
    ],
    links: [
      { kind: '资料', label: '维基百科', url: 'https://zh.wikipedia.org/w/index.php?search=乡土中国' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=乡土中国' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=乡土中国' }
    ],
    related: ['books/chinese-political-gains-losses', 'books/wanli-fifteen-years', 'books/guo-shi-da-gang'],
    f: { field: ['社会学', '中国史'], form: ['实体书'], language: ['中文'] }
  },
  {
    id: 'suicide-durkheim',
    cat: 'books',
    title: '自杀论',
    alt: 'Suicide: A Study in Sociology',
    year: 1897,
    region: '法国',
    status: '已出版',
    image: null,
    summary: 'Emile Durkheim用统计方法分析自杀率的社会成因，提出利己型、利他型、失范型与宿命型四种自杀类型。',
    review: '社会学实证研究的里程碑，首次系统证明社会事实可用科学方法研究。方法论意义大于具体结论。适合社会学专业学生，是理解「社会事实」概念的必读之作。中文版多个译本可选。注意其数据处理方法按现代标准有瑕疵，但开创性价值不减。',
    pros: ['方法论开创', '概念体系完整', '实证典范'],
    cons: ['数据方法过时', '文化适用性有限'],
    tags: ['Emile Durkheim', '社会事实', '实证社会学'],
    scores: [
      { src: '豆瓣', val: 8.7, max: 10, url: 'https://book.douban.com/subject_search?search_text=自杀论' },
      { src: 'Goodreads', val: 3.8, max: 5, url: 'https://www.goodreads.com/search?q=Suicide+Durkheim' }
    ],
    links: [
      { kind: '资料', label: '维基百科', url: 'https://zh.wikipedia.org/w/index.php?search=自杀论' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=自杀论' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=自杀论' }
    ],
    related: ['books/rural-china', 'books/crowd-le-bon', 'books/social-animal'],
    f: { field: ['社会学'], form: ['实体书'], language: ['中文', '法文'] }
  },
  {
    id: 'crowd-le-bon',
    cat: 'books',
    title: '乌合之众：大众心理研究',
    alt: 'The Crowd: A Study of the Popular Mind',
    year: 1895,
    region: '法国',
    status: '已出版',
    image: null,
    summary: 'Gustave Le Bon分析群体心理特征：易受暗示、情绪传染、智力下降、领袖崇拜，解释集体行为的非理性。',
    review: '社会心理学早期经典，对群体狂热的描述至今仍被引用。虽方法论粗糙且带有精英主义偏见，但其观察力惊人。适合对群众运动、舆论传播感兴趣的读者。建议批判性阅读，配合现代社会心理学著作如《社会性动物》平衡视角。',
    pros: ['观察敏锐', '影响深远', '篇幅短小'],
    cons: ['方法论粗糙', '精英主义偏见'],
    tags: ['Gustave Le Bon', '群体心理', '社会心理学'],
    scores: [
      { src: '豆瓣', val: 8.3, max: 10, url: 'https://book.douban.com/subject_search?search_text=乌合之众' },
      { src: 'Goodreads', val: 3.8, max: 5, url: 'https://www.goodreads.com/search?q=The+Crowd+Le+Bon' }
    ],
    links: [
      { kind: '资料', label: '古腾堡计划', url: 'https://www.gutenberg.org/ebooks/445' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=乌合之众' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=乌合之众' }
    ],
    related: ['books/influence-cialdini', 'books/social-animal', 'books/thinking-fast-slow'],
    f: { field: ['心理', '社会学', '政治'], form: ['实体书'], language: ['中文', '法文'] }
  },
  {
    id: 'social-animal',
    cat: 'books',
    title: '社会性动物',
    alt: 'The Social Animal',
    year: 1972,
    region: '美国',
    status: '已出版',
    image: null,
    summary: 'Elliot Aronson以生动案例讲解社会心理学核心主题：从众、偏见、攻击、吸引、自我辩护与认知失调。',
    review: '社会心理学最佳入门教材，Aronson的文笔使学术内容变得亲切。第十二版更新种族、性别与社交媒体议题。适合心理学本科生与对社会行为感兴趣的普通读者。比《乌合之众》更科学严谨，比教科书更易读。被誉为「社会心理学的圣经」。',
    pros: ['入门极佳', '案例鲜活', '更新及时'],
    cons: ['深度不如专著', '美国中心视角'],
    tags: ['Elliot Aronson', '社会心理学', '认知失调'],
    scores: [
      { src: '豆瓣', val: 9.0, max: 10, url: 'https://book.douban.com/subject_search?search_text=社会性动物' },
      { src: 'Goodreads', val: 4.2, max: 5, url: 'https://www.goodreads.com/search?q=The+Social+Animal+Aronson' }
    ],
    links: [
      { kind: '资料', label: '豆瓣读书', url: 'https://book.douban.com/subject_search?search_text=社会性动物' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=社会性动物' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=社会性动物' }
    ],
    related: ['books/influence-cialdini', 'books/thinking-fast-slow', 'books/crowd-le-bon'],
    f: { field: ['心理', '社会学'], form: ['教科书'], language: ['中文', '英文'] }
  },
  {
    id: 'flow-csikszentmihalyi',
    cat: 'books',
    title: '心流：最优体验心理学',
    alt: 'Flow: The Psychology of Optimal Experience',
    year: 1990,
    region: '美国',
    status: '已出版',
    image: null,
    summary: 'Mihaly Csikszentmihalyi提出「心流」概念：当挑战与技能匹配时，人会进入全神贯注、忘我投入的最优体验状态。',
    review: '积极心理学奠基之作，「心流」已成为日常用语。基于大量访谈与研究，阐述如何在日常工作与生活中创造心流。适合追求幸福感与创造力的读者。后续著作《创造力》《当下的幸福》扩展相关主题。书名发音为「flow」而非「flo」。',
    pros: ['概念影响力大', '研究扎实', '应用广泛'],
    cons: ['部分章节重复', '文化适用性有差异'],
    tags: ['Csikszentmihalyi', '积极心理学', '最优体验'],
    scores: [
      { src: '豆瓣', val: 8.4, max: 10, url: 'https://book.douban.com/subject_search?search_text=心流' },
      { src: 'Goodreads', val: 4.0, max: 5, url: 'https://www.goodreads.com/search?q=Flow+Csikszentmihalyi' }
    ],
    links: [
      { kind: '资料', label: '维基百科', url: 'https://zh.wikipedia.org/w/index.php?search=心流心理学' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=心流最优体验' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=心流' }
    ],
    related: ['books/thinking-fast-slow', 'books/atomic-habits', 'books/deep-work'],
    f: { field: ['心理', '自我提升'], form: ['实体书'], language: ['中文', '英文'] }
  },
  {
    id: 'how-to-read-a-book',
    cat: 'books',
    title: '如何阅读一本书',
    alt: 'How to Read a Book: The Classic Guide to Intelligent Reading',
    year: 1940,
    region: '美国',
    status: '已出版',
    image: null,
    summary: 'Mortimer Adler与Charles Van Doren提出四层次阅读法：基础阅读、检视阅读、分析阅读、主题阅读，系统训练阅读理解能力。',
    review: '阅读方法论经典，1972年修订版至今仍是最佳阅读指南。分析阅读的十五个规则尤其精辟。适合所有希望提升阅读效率的人，特别是大学生与自学者。建议边读边实践，第一遍可按检视阅读快速把握，再回头精读分析阅读章节。',
    pros: ['方法论系统化', '实用性强', '经久不衰'],
    cons: ['示例偏人文', '部分规则过于机械'],
    tags: ['Mortimer Adler', '阅读方法', '学习方法'],
    scores: [
      { src: '豆瓣', val: 8.6, max: 10, url: 'https://book.douban.com/subject_search?search_text=如何阅读一本书' },
      { src: 'Goodreads', val: 4.0, max: 5, url: 'https://www.goodreads.com/search?q=How+to+Read+a+Book' }
    ],
    links: [
      { kind: '资料', label: '维基百科', url: 'https://zh.wikipedia.org/w/index.php?search=如何阅读一本书' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=如何阅读一本书' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=如何阅读一本书' }
    ],
    related: ['books/building-second-brain', 'books/how-to-take-smart-notes', 'books/deep-work'],
    f: { field: ['教育', '自我提升', '思维方法'], form: ['实体书'], language: ['中文', '英文'] }
  },
  {
    id: 'on-writing-stephen-king',
    cat: 'books',
    title: '写作这回事',
    alt: 'On Writing: A Memoir of the Craft',
    year: 2000,
    region: '美国',
    status: '已出版',
    image: null,
    summary: 'Stephen King半自传半写作手册，分享个人写作经历与实用技巧：多读多写、删减副词、关门写开门改。',
    review: '最好的写作指导书之一，King的坦诚与幽默使技术建议变得可亲。前半部回忆录感人至深，后半部工具箱实用精准。适合所有写作者，无论虚构还是非虚构。比学院派写作教材更接地气。中文版张坤译本质量上乘。',
    pros: ['真诚实用', '文笔出色', '兼顾 memoir 与 craft'],
    cons: ['偏虚构写作', '部分建议主观'],
    tags: ['Stephen King', '写作技法', '创作回忆录'],
    scores: [
      { src: '豆瓣', val: 8.9, max: 10, url: 'https://book.douban.com/subject_search?search_text=写作这回事' },
      { src: 'Goodreads', val: 4.4, max: 5, url: 'https://www.goodreads.com/search?q=On+Writing+Stephen+King' }
    ],
    links: [
      { kind: '资料', label: '维基百科', url: 'https://zh.wikipedia.org/w/index.php?search=On+Writing+Stephen+King' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=写作这回事' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=写作这回事' }
    ],
    related: ['books/save-the-cat', 'books/story-mckee', 'books/elements-of-style'],
    f: { field: ['写作', '自我提升'], form: ['实体书'], language: ['中文', '英文'] }
  },
  {
    id: 'save-the-cat',
    cat: 'books',
    title: '救猫咪：电影编剧宝典',
    alt: 'Save the Cat! The Last Book on Screenwriting You\'ll Ever Need',
    year: 2005,
    region: '美国',
    status: '已出版',
    image: null,
    summary: 'Blake Snyder提出15段式节拍表，将商业电影剧本结构量化为可操作的模板，强调「让主角做一件让人喜欢的事」。',
    review: '好莱坞最流行的编剧入门书，节拍表被无数编剧用作创作检查清单。比Robert McKee的《故事》更易上手，适合初学者与商业片编剧。批评者认为过于公式化，但作为结构训练工具价值明确。续作多部，但第一本最核心。',
    pros: ['实操性极强', '模板清晰', '入门友好'],
    cons: ['过于公式化', '不适合艺术片'],
    tags: ['Blake Snyder', '编剧', '节拍表'],
    scores: [
      { src: '豆瓣', val: 8.3, max: 10, url: 'https://book.douban.com/subject_search?search_text=救猫咪' },
      { src: 'Goodreads', val: 4.0, max: 5, url: 'https://www.goodreads.com/search?q=Save+the+Cat' }
    ],
    links: [
      { kind: '资料', label: '官方网站', url: 'https://savethecat.com/' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=救猫咪' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=救猫咪' }
    ],
    related: ['books/story-mckee', 'books/on-writing-stephen-king', 'books/heros-journey'],
    f: { field: ['写作', '艺术'], form: ['实体书'], language: ['中文', '英文'] }
  },
  {
    id: 'story-mckee',
    cat: 'books',
    title: '故事：材质、结构、风格和银幕剧作的原理',
    alt: 'Story: Substance, Structure, Style and the Principles of Screenwriting',
    year: 1997,
    region: '美国',
    status: '已出版',
    image: null,
    summary: 'Robert McKee系统阐述叙事原理：节拍、场景、序列、幕的结构，以及价值转变、潜文本与类型惯例。',
    review: '编剧理论的「圣经」，比《救猫咪》更深入叙事的本质。McKee的讲座影响了全球无数创作者。适合严肃的编剧、小说家与叙事研究者。篇幅较大，建议按需精读相关章节。中文版周铁东译本较通行。是所有叙事创作的底层知识。',
    pros: ['理论深度顶级', '适用范围广', '影响深远'],
    cons: ['篇幅巨大', '阅读门槛较高'],
    tags: ['Robert McKee', '叙事理论', '编剧'],
    scores: [
      { src: '豆瓣', val: 9.2, max: 10, url: 'https://book.douban.com/subject_search?search_text=故事麦基' },
      { src: 'Goodreads', val: 4.3, max: 5, url: 'https://www.goodreads.com/search?q=Story+Robert+McKee' }
    ],
    links: [
      { kind: '资料', label: '维基百科', url: 'https://zh.wikipedia.org/w/index.php?search=Story+Robert+McKee' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=故事麦基' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=故事麦基' }
    ],
    related: ['books/save-the-cat', 'books/on-writing-stephen-king', 'books/heros-journey'],
    f: { field: ['写作', '艺术'], form: ['教科书'], language: ['中文', '英文'] }
  },
  {
    id: 'elements-of-style',
    cat: 'books',
    title: '风格的要素',
    alt: 'The Elements of Style',
    year: 1918,
    region: '美国',
    status: '已出版',
    image: null,
    summary: 'William Strunk Jr.与E.B. White提出英文写作的简洁原则：省略不必要的词、使用主动语态、保持平行结构。',
    review: '英文写作最经典的风格指南，篇幅极短但每条规则都经得起时间考验。第四版仍是最常用版本。适合所有英文写作者，从学生到专业作家。虽针对英文，但其简洁原则对中文写作同样有启发。每年重读一遍都能改善文风。',
    pros: ['极简实用', '永不过时', '篇幅精炼'],
    cons: ['仅适用于英文', '部分规则过于绝对'],
    tags: ['Strunk', 'White', '英文写作'],
    scores: [
      { src: '豆瓣', val: 8.7, max: 10, url: 'https://book.douban.com/subject_search?search_text=风格的要素' },
      { src: 'Goodreads', val: 4.2, max: 5, url: 'https://www.goodreads.com/search?q=Elements+of+Style' }
    ],
    links: [
      { kind: '资料', label: '古腾堡计划', url: 'https://www.gutenberg.org/ebooks/37134' },
      { kind: '购买', label: 'Amazon', url: 'https://www.amazon.cn/s?k=Elements+of+Style' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=风格的要素' }
    ],
    related: ['books/on-writing-stephen-king', 'books/save-the-cat', 'books/story-mckee'],
    f: { field: ['语言', '写作'], form: ['手册'], language: ['英文', '中文'] }
  },
  {
    "id": "nonviolent-communication",
    "image": null,
    "cat": "books",
    "title": "非暴力沟通",
    "alt": "Nonviolent Communication: A Language of Life",
    "year": 2003,
    "region": "美国",
    "status": "已出版",
    "f": {
      "field": [
        "心理",
        "语言",
        "自我提升"
      ],
      "form": [
        "实体书"
      ],
      "language": [
        "中文",
        "英文"
      ]
    },
    "summary": "Marshall Rosenberg提出四步沟通法：观察、感受、需要、请求，帮助人们在冲突中表达真实需求而非评判指责。",
    "review": "沟通方法论经典，在全球冲突调解与日常关系中均有广泛应用。四步框架简单易学但实践需长期练习。适合所有希望改善人际关系的人，尤其是伴侣、亲子与职场沟通。中文版阮胤华译本较通行。建议参加工作坊配合练习效果更佳。",
    "pros": [
      "框架简洁",
      "应用广泛",
      "改变沟通习惯"
    ],
    "cons": [
      "初期显得机械",
      "文化适应性需调整"
    ],
    "tags": [
      "Marshall Rosenberg",
      "NVC",
      "沟通技巧"
    ],
    "scores": [
      {
        "src": "豆瓣",
        "val": 8.5,
        "max": 10,
        "url": "https://book.douban.com/subject_search?search_text=非暴力沟通"
      },
      {
        "src": "Goodreads",
        "val": 4.3,
        "max": 5,
        "url": "https://www.goodreads.com/search?q=Nonviolent+Communication"
      }
    ],
    "links": [
      {
        "kind": "资料",
        "label": "官方网站",
        "url": "https://www.cnvc.org/"
      },
      {
        "kind": "购买",
        "label": "京东",
        "url": "https://search.jd.com/Search?keyword=非暴力沟通"
      },
      {
        "kind": "阅读",
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/global?keyword=非暴力沟通"
      }
    ],
    "related": [
      "books/influence-cialdini",
      "books/social-animal"
    ]
  },
  {
    id: 'cognitive-awakening',
    cat: 'books',
    title: '认知觉醒：开启自我改变的原动力',
    alt: 'Cognitive Awakening',
    year: 2020,
    region: '中国',
    status: '已出版',
    image: null,
    summary: '周岭整合脑科学、心理学与学习理论，解析专注力、学习力、行动力与情绪管理的底层机制，提供可操作的自我提升路径。',
    review: '国内近年最优质的自我成长著作，将认知科学与个人实践无缝结合。比鸡汤类书籍更有理论支撑，比学术著作更接地气。适合感到迷茫或想系统提升的年轻人。作者公众号「清脑」可延伸阅读。是《思考快与慢》的中国实践版。',
    pros: ['理论与实践结合', '本土化好', '可操作性强'],
    cons: ['部分内容拼凑感', '深度有限'],
    tags: ['周岭', '认知科学', '自我成长'],
    scores: [
      { src: '豆瓣', val: 8.3, max: 10, url: 'https://book.douban.com/subject_search?search_text=认知觉醒' },
      { src: 'Goodreads', val: 3.8, max: 5, url: 'https://www.goodreads.com/search?q=Cognitive+Awakening+Zhou+Ling' }
    ],
    links: [
      { kind: '资料', label: '豆瓣读书', url: 'https://book.douban.com/subject_search?search_text=认知觉醒' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=认知觉醒' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=认知觉醒' }
    ],
    related: ['books/thinking-fast-slow', 'books/atomic-habits', 'books/deep-work'],
    f: { field: ['认知科学', '自我提升'], form: ['实体书', '电子书'], language: ['中文'] }
  },
  {
    "id": "art-story-gombrich",
    "image": null,
    "cat": "books",
    "title": "艺术的故事",
    "alt": "The Story of Art",
    "year": 1950,
    "region": "奥地利",
    "status": "已出版",
    "f": {
      "field": [
        "艺术",
        "历史"
      ],
      "form": [
        "实体书",
        "画册"
      ],
      "language": [
        "中文",
        "英文"
      ]
    },
    "summary": "E.H. Gombrich以「没有艺术这回事，只有艺术家」开篇，用清晰脉络讲述从史前到现代的艺术演变。",
    "review": "全球最畅销的艺术史著作，Gombrich的文笔使艺术史变得可读。强调「所见与所知」的张力贯穿全书。第十六版仍是最常用版本。适合艺术爱好者与初学者，是建立艺术史框架的最佳入门书。中文版范景中译本质量上乘。配图丰富，建议买纸质版。",
    "pros": [
      "叙事流畅",
      "视角独特",
      "入门极佳"
    ],
    "cons": [
      "西方中心",
      "当代艺术覆盖有限"
    ],
    "tags": [
      "E.H. Gombrich",
      "艺术史",
      "视觉文化"
    ],
    "scores": [
      {
        "src": "豆瓣",
        "val": 9.5,
        "max": 10,
        "url": "https://book.douban.com/subject_search?search_text=艺术的故事"
      },
      {
        "src": "Goodreads",
        "val": 4.3,
        "max": 5,
        "url": "https://www.goodreads.com/search?q=The+Story+of+Art"
      }
    ],
    "links": [
      {
        "kind": "资料",
        "label": "维基百科",
        "url": "https://zh.wikipedia.org/w/index.php?search=艺术的故事"
      },
      {
        "kind": "购买",
        "label": "京东",
        "url": "https://search.jd.com/Search?keyword=艺术的故事"
      },
      {
        "kind": "阅读",
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/global?keyword=艺术的故事"
      }
    ],
    "related": [
      "books/design-everyday-things",
      "books/heros-journey"
    ]
  },
  {
    id: 'design-everyday-things',
    cat: 'books',
    title: '设计心理学',
    alt: 'The Design of Everyday Things',
    year: 1988,
    region: '美国',
    status: '已出版',
    image: null,
    summary: 'Don Norman以日常物品为例，阐述以人为本的设计原则：可供性、映射、反馈、约束与概念模型。',
    review: '交互设计与用户体验的奠基之作，「Norman门」已成为设计失败的代名词。修订版更新数字产品案例。适合所有设计师、产品经理与工程师。核心理念「问题不在用户而在设计」影响深远。比纯理论著作更实用，每章都有生活案例。',
    pros: ['理念开创性', '案例生动', '跨领域适用'],
    cons: ['部分案例过时', '偏认知心理学'],
    tags: ['Don Norman', '用户体验', '人机交互'],
    scores: [
      { src: '豆瓣', val: 8.7, max: 10, url: 'https://book.douban.com/subject_search?search_text=设计心理学' },
      { src: 'Goodreads', val: 4.2, max: 5, url: 'https://www.goodreads.com/search?q=Design+of+Everyday+Things' }
    ],
    links: [
      { kind: '资料', label: '维基百科', url: 'https://zh.wikipedia.org/w/index.php?search=设计心理学' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=设计心理学' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=设计心理学' }
    ],
    related: ['books/art-story-gombrich', 'books/thinking-fast-slow', 'books/nudge'],
    f: { field: ['设计', '心理'], form: ['实体书'], language: ['中文', '英文'] }
  },
  {
    id: 'steve-jobs-biography',
    cat: 'books',
    title: '史蒂夫·乔布斯传',
    alt: 'Steve Jobs',
    year: 2011,
    region: '美国',
    status: '已出版',
    image: null,
    summary: 'Walter Isaacson基于四十余次面对面采访，全景呈现乔布斯的创造力、偏执、魅力与缺陷。',
    review: '乔布斯唯一授权传记，Isaacson的记者功底使叙事紧凑而不失深度。不美化也不妖魔化，呈现一个复杂的天才。适合对科技创业、产品设计与领导力感兴趣的读者。乔布斯去世后出版，时机使其更具历史价值。后续有电影改编但不及原著。',
    pros: ['一手资料丰富', '叙事精彩', '人物立体'],
    cons: ['缺乏批判距离', '技术细节有限'],
    tags: ['Walter Isaacson', 'Apple', '科技传记'],
    scores: [
      { src: '豆瓣', val: 8.8, max: 10, url: 'https://book.douban.com/subject_search?search_text=史蒂夫乔布斯传' },
      { src: 'Goodreads', val: 4.2, max: 5, url: 'https://www.goodreads.com/search?q=Steve+Jobs+Isaacson' }
    ],
    links: [
      { kind: '资料', label: '维基百科', url: 'https://zh.wikipedia.org/w/index.php?search=史蒂夫·乔布斯传' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=史蒂夫乔布斯传' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=乔布斯传' }
    ],
    related: ['books/zero-to-one', 'books/innovators-dilemma', 'books/lean-startup'],
    f: { field: ['传记', '商业', '技术史'], form: ['实体书'], language: ['中文', '英文'] }
  },
  {
    id: 'kiku-and-sword',
    cat: 'books',
    title: '菊与刀',
    alt: 'The Chrysanthemum and the Sword: Patterns of Japanese Culture',
    year: 1946,
    region: '美国',
    status: '已出版',
    image: null,
    summary: 'Ruth Benedict受美国政府委托研究日本文化，提出「耻感文化」与「恩义」体系，解析日本人的行为模式与价值结构。',
    review: '文化人类学经典，虽从未踏足日本却写出深刻洞察。「耻感vs罪感」的二分法虽有简化之嫌，但作为理解日本文化的起点仍有价值。适合对日本社会感兴趣的读者。建议配合现代日本研究著作平衡视角，避免刻板印象。多个中文译本可选。',
    pros: ['洞察力惊人', '影响深远', '开创文化比较'],
    cons: ['未实地考察', '过度概括'],
    tags: ['Ruth Benedict', '文化人类学', '日本文化'],
    scores: [
      { src: '豆瓣', val: 8.7, max: 10, url: 'https://book.douban.com/subject_search?search_text=菊与刀' },
      { src: 'Goodreads', val: 3.8, max: 5, url: 'https://www.goodreads.com/search?q=Chrysanthemum+and+Sword' }
    ],
    links: [
      { kind: '资料', label: '维基百科', url: 'https://zh.wikipedia.org/w/index.php?search=菊与刀' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=菊与刀' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=菊与刀' }
    ],
    related: ['books/rural-china', 'books/sapiens', 'books/guns-germs-steel'],
    f: { field: ['社会学', '历史'], form: ['实体书'], language: ['中文', '英文'] }
  },
  {
    id: 'norwegian-wood-travel',
    cat: 'books',
    title: '北欧四季透明笔记',
    alt: 'Nordic Seasons',
    year: 2018,
    region: '日本',
    status: '已出版',
    image: null,
    summary: '日本作家凪良汐以细腻笔触记录北欧四国的日常生活、自然景观与文化细节，呈现极简生活方式背后的温度。',
    review: '近年优质的北欧文化观察著作，不同于旅游指南的浮光掠影，深入当地人的季节节奏与生活哲学。图文并茂，适合对北欧设计与生活方式感兴趣的读者。可作为《菊与刀》的文化对照阅读。中文版翻译流畅，装帧精美。',
    pros: ['观察细腻', '图文精美', '文化深度好'],
    cons: ['个人视角局限', '非系统性'],
    tags: ['凪良汐', '北欧文化', '生活美学'],
    scores: [
      { src: '豆瓣', val: 8.2, max: 10, url: 'https://book.douban.com/subject_search?search_text=北欧四季透明笔记' },
      { src: 'Goodreads', val: 3.7, max: 5, url: 'https://www.goodreads.com/search?q=Nordic+Seasons+Nagira' }
    ],
    links: [
      { kind: '资料', label: '豆瓣读书', url: 'https://book.douban.com/subject_search?search_text=北欧四季透明笔记' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=北欧四季透明笔记' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=北欧四季' }
    ],
    related: ['books/kiku-and-sword', 'books/art-story-gombrich', 'books/design-everyday-things'],
    f: { field: ['游记', '艺术'], form: ['实体书', '画册'], language: ['中文', '日文'] }
  },
  {
    id: 'being-mortal',
    cat: 'books',
    title: '最好的告别：关于衰老与死亡，你必须知道的常识',
    alt: 'Being Mortal: Medicine and What Matters in the End',
    year: 2014,
    region: '印度',
    status: '已出版',
    image: null,
    summary: '外科医生Atul Gawande反思现代医学在衰老与临终关怀中的局限，倡导以患者自主权为核心的照护模式。',
    review: '医学人文杰作，Gawande以医生与家属双重视角探讨生命终点的尊严。推动了全球安宁疗护运动。适合所有人，尤其是家中有老人的读者。文笔温暖而不煽情，数据与故事交织。奥巴马年度推荐书目。中文版译名改为《最好的告别》，原名更直白。',
    pros: ['人文关怀深', '推动社会变革', '文笔温暖'],
    cons: ['美国医疗体系为主', '部分建议需本土化'],
    tags: ['Atul Gawande', '临终关怀', '医学人文'],
    scores: [
      { src: '豆瓣', val: 9.0, max: 10, url: 'https://book.douban.com/subject_search?search_text=最好的告别' },
      { src: 'Goodreads', val: 4.5, max: 5, url: 'https://www.goodreads.com/search?q=Being+Mortal' }
    ],
    links: [
      { kind: '资料', label: '维基百科', url: 'https://zh.wikipedia.org/w/index.php?search=Being+Mortal' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=最好的告别' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=最好的告别' }
    ],
    related: ['books/selfish-gene', 'books/what-is-life', 'books/why-we-sleep'],
    f: { field: ['医学', '健康', '科普'], form: ['实体书'], language: ['中文', '英文'] }
  },
  {
    id: 'why-we-sleep',
    cat: 'books',
    title: '我们为什么要睡觉',
    alt: 'Why We Sleep: Unlocking the Power of Sleep and Dreams',
    year: 2017,
    region: '英国',
    status: '已出版',
    image: null,
    summary: '神经科学家Matthew Walker系统阐述睡眠的科学机制、健康影响与社会后果，呼吁重视睡眠这一被忽视的健康支柱。',
    review: '睡眠科学的集大成科普，将数十年研究成果转化为可行动的建议。揭示了睡眠不足与阿尔茨海默症、癌症、肥胖等的关联。适合所有关注健康的人，尤其是长期熬夜者。部分结论过于绝对化受到学界批评，但核心信息价值巨大。读完会改变你的作息习惯。',
    pros: ['科学扎实', '实用性强', '改变行为'],
    cons: ['部分结论过度外推', '忽略个体差异'],
    tags: ['Matthew Walker', '睡眠科学', '健康'],
    scores: [
      { src: '豆瓣', val: 8.4, max: 10, url: 'https://book.douban.com/subject_search?search_text=我们为什么要睡觉' },
      { src: 'Goodreads', val: 4.4, max: 5, url: 'https://www.goodreads.com/search?q=Why+We+Sleep' }
    ],
    links: [
      { kind: '资料', label: '维基百科', url: 'https://zh.wikipedia.org/w/index.php?search=Why+We+Sleep' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=我们为什么要睡觉' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=我们为什么要睡觉' }
    ],
    related: ['books/being-mortal', 'books/atomic-habits', 'books/deep-work'],
    f: { field: ['健康', '科普', '生物'], form: ['实体书', '电子书'], language: ['中文', '英文'] }
  },
  {
    id: 'atomic-habits',
    cat: 'books',
    title: '掌控习惯',
    alt: 'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones',
    year: 2018,
    region: '美国',
    status: '已出版',
    image: null,
    summary: 'James Clear提出习惯养成四步法：提示、渴求、反应、奖赏，强调微小改变的复利效应与身份认同驱动。',
    review: '近年最实用的习惯养成指南，将行为科学转化为可操作的每日实践。「不要追求目标而要建立系统」「成为那种人」等理念深入人心。适合所有想改变习惯的人，比《意志力》《自控力》更可操作。全球销量超千万。中文版译名《掌控习惯》比原名更准确。',
    pros: ['实操性极强', '框架清晰', '案例丰富'],
    cons: ['部分内容重复', '深度有限'],
    tags: ['James Clear', '习惯养成', '行为设计'],
    scores: [
      { src: '豆瓣', val: 8.5, max: 10, url: 'https://book.douban.com/subject_search?search_text=掌控习惯' },
      { src: 'Goodreads', val: 4.4, max: 5, url: 'https://www.goodreads.com/search?q=Atomic+Habits' }
    ],
    links: [
      { kind: '资料', label: '官方网站', url: 'https://jamesclear.com/atomic-habits' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=掌控习惯' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=掌控习惯' }
    ],
    related: ['books/deep-work', 'books/flow-csikszentmihalyi', 'books/how-to-read-a-book'],
    f: { field: ['自我提升', '心理'], form: ['实体书', '电子书'], language: ['中文', '英文'] }
  },
  {
    id: 'deep-work',
    cat: 'books',
    title: '深度工作：如何有效使用每一点脑力',
    alt: 'Deep Work: Rules for a Focused Life in a Distracted World',
    year: 2016,
    region: '美国',
    status: '已出版',
    image: null,
    summary: 'Cal Newport论证深度专注工作的稀缺价值，提出四种深度工作哲学与具体实践策略，对抗注意力碎片化。',
    review: '数字时代的工作方法论标杆，「深度工作」已成为知识工作者的通用语。Newport自身践行其理念，学术产出惊人。适合程序员、研究者、写作者等需要长时间专注的职业。比时间管理书更深入认知层面。建议配合《数字极简主义》阅读。',
    pros: ['切中时代痛点', '策略可操作', '作者以身作则'],
    cons: ['不适用于所有职业', '部分建议极端'],
    tags: ['Cal Newport', '专注力', '知识工作'],
    scores: [
      { src: '豆瓣', val: 8.3, max: 10, url: 'https://book.douban.com/subject_search?search_text=深度工作' },
      { src: 'Goodreads', val: 4.2, max: 5, url: 'https://www.goodreads.com/search?q=Deep+Work' }
    ],
    links: [
      { kind: '资料', label: '豆瓣读书', url: 'https://book.douban.com/subject_search?search_text=深度工作' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=深度工作' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=深度工作' }
    ],
    related: ['books/atomic-habits', 'books/flow-csikszentmihalyi', 'books/digital-minimalism'],
    f: { field: ['自我提升', '思维方法'], form: ['实体书', '电子书'], language: ['中文', '英文'] }
  },
  {
    id: 'digital-minimalism',
    cat: 'books',
    title: '数字极简主义',
    alt: 'Digital Minimalism: Choosing a Focused Life in a Noisy World',
    year: 2019,
    region: '美国',
    status: '已出版',
    image: null,
    summary: 'Cal Newport提出数字极简主义哲学：有意识地选择少数高价值数字工具，放弃其余， reclaim 注意力与时间。',
    review: '《深度工作》的实践延伸，提供30天数字断舍离计划。不是反技术，而是主张技术为价值观服务。适合感到被手机绑架的现代人。比单纯「少刷手机」的建议更有哲学深度与实践路径。Newport的论证一贯严谨，案例真实可信。',
    pros: ['哲学与实践并重', '30天计划可操作', '切中痛点'],
    cons: ['执行难度高', '社交成本大'],
    tags: ['Cal Newport', '数字断舍离', '注意力'],
    scores: [
      { src: '豆瓣', val: 8.0, max: 10, url: 'https://book.douban.com/subject_search?search_text=数字极简主义' },
      { src: 'Goodreads', val: 4.1, max: 5, url: 'https://www.goodreads.com/search?q=Digital+Minimalism' }
    ],
    links: [
      { kind: '资料', label: '豆瓣读书', url: 'https://book.douban.com/subject_search?search_text=数字极简主义' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=数字极简主义' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=数字极简主义' }
    ],
    related: ['books/deep-work', 'books/atomic-habits', 'books/four-thousand-weeks'],
    f: { field: ['自我提升', '思维方法'], form: ['实体书', '电子书'], language: ['中文', '英文'] }
  },
  {
    id: 'crime-and-punishment-analysis',
    cat: 'books',
    title: '刑法学讲义',
    alt: 'Criminal Law Lectures',
    year: 2020,
    region: '中国',
    status: '已出版',
    image: null,
    summary: '罗翔以通俗语言讲解刑法核心概念与经典案例，将法律知识与人文思考融合，让普通人理解法治精神。',
    review: '现象级普法著作，罗翔将枯燥的刑法条文变为生动的思想实验。「法外狂徒张三」成为网络文化符号。适合所有对法律感兴趣的普通读者，是培养法治思维的绝佳入门。比专业教材更易读，比短视频更有深度。后续有《法治的细节》延伸阅读。',
    pros: ['普法效果极佳', '人文关怀深', '通俗易懂'],
    cons: ['非系统教材', '个人风格强'],
    tags: ['罗翔', '刑法', '法治教育'],
    scores: [
      { src: '豆瓣', val: 8.8, max: 10, url: 'https://book.douban.com/subject_search?search_text=刑法学讲义' },
      { src: 'Goodreads', val: 3.9, max: 5, url: 'https://www.goodreads.com/search?q=Criminal+Law+Lectures+Luo+Xiang' }
    ],
    links: [
      { kind: '资料', label: '豆瓣读书', url: 'https://book.douban.com/subject_search?search_text=刑法学讲义' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=刑法学讲义' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=刑法学讲义' }
    ],
    related: ['books/justice-rawls', 'books/on-liberty', 'books/rural-china'],
    f: { field: ['法律', '教育'], form: ['实体书', '电子书'], language: ['中文'] }
  },
  {
    id: 'encyclopedia-britannica-guide',
    cat: 'books',
    title: '大英百科全书精华本',
    alt: 'Encyclopaedia Britannica Essential Edition',
    year: 2010,
    region: '英国',
    status: '已出版',
    image: 'assets/img/books/encyclopedia-britannica-guide.png',
    summary: '从完整版大英百科全书中精选核心条目，涵盖自然科学、人文社科、艺术与历史的权威概述。',
    review: '纸质百科全书时代的最后荣光，精选本保留了原版权威性又降低了体积。适合家庭藏书与通识教育参考。虽已被维基百科取代大部分功能，但其条目经专家审核的可靠性仍无可替代。收藏价值大于实用价值，是知识殿堂的象征。',
    pros: ['权威可靠', '精选浓缩', '收藏价值'],
    cons: ['更新停滞', '价格较高'],
    tags: ['Encyclopaedia Britannica', '百科全书', '通识教育'],
    scores: [
      { src: '豆瓣', val: 9.3, max: 10, url: 'https://book.douban.com/subject_search?search_text=大英百科全书' },
      { src: 'Goodreads', val: 4.4, max: 5, url: 'https://www.goodreads.com/search?q=Encyclopaedia+Britannica' }
    ],
    links: [
      { kind: '官方', label: '官方网站', url: 'https://www.britannica.com/' },
      { kind: '购买', label: 'Amazon', url: 'https://www.amazon.cn/s?k=大英百科全书' },
      { kind: '资料', label: '维基百科', url: 'https://zh.wikipedia.org/w/index.php?search=大英百科全书' }
    ],
    related: ['books/art-story-gombrich', 'books/western-philosophy-russell', 'books/from-one-to-infinity'],
    f: { field: ['百科', '工具书'], form: ['百科全书'], language: ['中文', '英文'] }
  },
  {
    id: 'wave-and-trough',
    cat: 'books',
    title: '浪潮之巅',
    alt: 'On Top of Tides',
    year: 2011,
    region: '中国',
    status: '已出版',
    image: 'assets/img/books/wave-and-trough.jpg',
    summary: '吴军梳理IT产业百年兴衰史，分析AT&T、IBM、苹果、Google等公司的成败规律与技术浪潮更替逻辑。',
    review: '国内最好的科技商业史著作，将技术演进与商业竞争融为一体。「基因决定论」「摩尔定律」「安迪-比尔定律」等框架解释力强。第四版增加AI与云计算内容。适合科技从业者与投资人，是理解硅谷与中国互联网发展的必读之作。与《数学之美》同作者。',
    pros: ['视野宏大', '分析框架实用', '更新及时'],
    cons: ['部分预测偏差', '个人色彩浓'],
    tags: ['吴军', '科技史', '商业分析'],
    scores: [
      { src: '豆瓣', val: 9.0, max: 10, url: 'https://book.douban.com/subject_search?search_text=浪潮之巅' },
      { src: 'Goodreads', val: 4.1, max: 5, url: 'https://www.goodreads.com/search?q=On+Top+of+Tides+Wu+Jun' }
    ],
    links: [
      { kind: '资料', label: '豆瓣读书', url: 'https://book.douban.com/subject_search?search_text=浪潮之巅' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=浪潮之巅' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=浪潮之巅' }
    ],
    related: ['books/math-beauty', 'books/innovators-dilemma', 'books/steve-jobs-biography'],
    f: { field: ['技术史', '商业', '计算机与编程'], form: ['实体书', '电子书'], language: ['中文'] }
  },
  {
    id: 'site-reliability-engineering',
    cat: 'books',
    title: 'SRE：Google运维解密',
    alt: 'Site Reliability Engineering: How Google Runs Production Systems',
    year: 2016,
    region: '美国',
    status: '已出版',
    image: null,
    summary: 'Google SRE团队分享大规模系统运维实践：SLI/SLO/SLA、错误预算、事后复盘、容量规划与自动化。',
    review: 'SRE领域的定义性著作，将Google内部运维方法论公开。定义了可靠性工程的核心术语与实践。适合DevOps工程师与系统管理员。免费在线版持续更新。配套《SRE Workbook》提供更多实操案例。是云原生时代运维团队的必读书目。',
    pros: ['行业定义性', '实践导向', '免费在线版'],
    cons: ['Google特定经验', '需要基础设施背景'],
    tags: ['Google SRE', '运维', '可靠性工程'],
    scores: [
      { src: '豆瓣', val: 8.8, max: 10, url: 'https://book.douban.com/subject_search?search_text=SRE+Google运维' },
      { src: 'Goodreads', val: 4.3, max: 5, url: 'https://www.goodreads.com/search?q=Site+Reliability+Engineering' }
    ],
    links: [
      { kind: '官方', label: '免费在线版', url: 'https://sre.google/sre-book/table-of-contents/' },
      { kind: '资料', label: '豆瓣读书', url: 'https://book.douban.com/subject_search?search_text=SRE' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=SRE+Google运维' }
    ],
    related: ['books/ddia', 'books/kafka-definitive-guide', 'books/csapp'],
    f: { field: ['计算机与编程'], form: ['电子书', '实体书'], language: ['中文', '英文'] }
  },
  {
    id: 'esl',
    cat: 'books',
    title: '统计学习基础',
    alt: 'The Elements of Statistical Learning: Data Mining, Inference, and Prediction',
    year: 2001,
    region: '美国',
    status: '已出版',
    image: 'assets/img/books/esl.jpg',
    summary: 'Hastie、Tibshirani、Friedman合著，从统计学视角系统介绍机器学习方法，强调模型选择与评估。',
    review: '统计学习的权威教材，比西瓜书更偏统计推断，比花书更偏传统ML。第二版增加高维数据与深度学习章节。免费在线版可用。适合统计学与机器学习研究生，是ESL缩写来源。数学要求高于西瓜书，但推导更完整。与ISL（Introduction to Statistical Learning）互补。',
    pros: ['统计视角权威', '免费在线版', '推导完整'],
    cons: ['数学门槛高', '深度学习覆盖有限'],
    tags: ['Hastie', 'Tibshirani', 'Friedman'],
    scores: [
      { src: '豆瓣', val: 9.3, max: 10, url: 'https://book.douban.com/subject_search?search_text=统计学习基础ESL' },
      { src: 'Goodreads', val: 4.4, max: 5, url: 'https://www.goodreads.com/search?q=Elements+of+Statistical+Learning' }
    ],
    links: [
      { kind: '官方', label: '免费在线版', url: 'https://hastie.su.domains/ElemStatLearn/' },
      { kind: '资料', label: '豆瓣读书', url: 'https://book.douban.com/subject_search?search_text=统计学习基础' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=统计学习基础' }
    ],
    related: ['books/ml-zhou', 'books/statistical-learning-li', 'books/deep-learning-goodfellow'],
    f: { field: ['人工智能', '数学'], form: ['教科书', '电子书'], language: ['英文', '中文'] }
  },
  {
    id: 'phenomenology-hegel',
    cat: 'books',
    title: '精神现象学',
    alt: 'Phenomenology of Spirit',
    year: 1807,
    region: '德国',
    status: '已出版',
    image: null,
    summary: 'Hegel描述意识从感性确定性到绝对知识的辩证发展历程，提出主奴辩证法、苦恼意识等核心概念。',
    review: '德国古典哲学的巅峰之作，马克思的思想源头之一。主奴辩证法影响了存在主义与批判理论。先刚译本较新且注释详尽。适合哲学研究生与严肃爱好者，直接阅读极其困难，强烈建议先读导读本如《黑格尔精神现象学导论》。是理解辩证法的原点。',
    pros: ['思想深邃', '影响巨大', '辩证法源头'],
    cons: ['极其难读', '术语晦涩'],
    tags: ['G.W.F. Hegel', '辩证法', '德国古典哲学'],
    scores: [
      { src: '豆瓣', val: 9.1, max: 10, url: 'https://book.douban.com/subject_search?search_text=精神现象学' },
      { src: 'Goodreads', val: 3.9, max: 5, url: 'https://www.goodreads.com/search?q=Phenomenology+of+Spirit' }
    ],
    links: [
      { kind: '资料', label: '维基百科', url: 'https://zh.wikipedia.org/w/index.php?search=精神现象学' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=精神现象学' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=精神现象学' }
    ],
    related: ['books/critique-pure-reason', 'books/republic-plato', 'books/capital-marx'],
    f: { field: ['哲学'], form: ['实体书'], language: ['中文', '德文'] }
  },
  {
    id: 'communist-manifesto',
    cat: 'books',
    title: '共产党宣言',
    alt: 'The Communist Manifesto',
    year: 1848,
    region: '德国',
    status: '已出版',
    image: null,
    summary: 'Marx与Engels为共产主义者同盟起草的纲领，宣告阶级斗争历史观与无产阶级革命使命。',
    review: '历史上最具影响力的政治文献之一，其修辞力量与历史分析至今仍被广泛讨论。篇幅极短，适合作为理解马克思主义的起点。中央编译局译本是标准中文版。建议结合历史背景阅读，避免脱离语境的解读。是政治学与思想史的必读文本。',
    pros: ['历史地位无可替代', '修辞有力', '篇幅精炼'],
    cons: ['预言部分未实现', '需历史语境理解'],
    tags: ['Karl Marx', 'Friedrich Engels', '共产主义'],
    scores: [
      { src: '豆瓣', val: 9.0, max: 10, url: 'https://book.douban.com/subject_search?search_text=共产党宣言' },
      { src: 'Goodreads', val: 3.8, max: 5, url: 'https://www.goodreads.com/search?q=Communist+Manifesto' }
    ],
    links: [
      { kind: '资料', label: '马克思恩格斯文库', url: 'https://www.marxists.org/chinese/marx-engels/01/001.htm' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=共产党宣言' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=共产党宣言' }
    ],
    related: ['books/capital-marx', 'books/justice-rawls', 'books/on-liberty'],
    f: { field: ['政治', '哲学', '历史'], form: ['实体书'], language: ['中文', '德文'] }
  },
  {
    id: 'heros-journey',
    cat: 'books',
    title: '千面英雄',
    alt: 'The Hero with a Thousand Faces',
    year: 1949,
    region: '美国',
    status: '已出版',
    image: null,
    summary: 'Joseph Campbell比较全球神话，提炼英雄之旅的普遍模式：启程、启蒙、归来，揭示叙事的深层原型结构。',
    review: '神话学经典，George Lucas创作《星球大战》的直接灵感来源。单一神话论虽有过度概括之嫌，但对叙事创作者启发巨大。适合编剧、小说家与神话爱好者。比《救猫咪》更深入原型层面，比《故事》更偏文化比较。中文版黄珏苹译本较通行。',
    pros: ['跨文化视野', '影响流行文化', '原型理论基石'],
    cons: ['过度概括', '女性角色边缘化'],
    tags: ['Joseph Campbell', '神话学', '英雄之旅'],
    scores: [
      { src: '豆瓣', val: 8.8, max: 10, url: 'https://book.douban.com/subject_search?search_text=千面英雄' },
      { src: 'Goodreads', val: 4.2, max: 5, url: 'https://www.goodreads.com/search?q=Hero+with+a+Thousand+Faces' }
    ],
    links: [
      { kind: '资料', label: '维基百科', url: 'https://zh.wikipedia.org/w/index.php?search=千面英雄' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=千面英雄' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=千面英雄' }
    ],
    related: ['books/story-mckee', 'books/save-the-cat', 'books/godel-escher-bach'],
    f: { field: ['写作', '艺术', '文学理论'], form: ['实体书'], language: ['中文', '英文'] }
  },
  {
    id: 'four-thousand-weeks',
    cat: 'books',
    title: '四千个星期：时间管理反常识',
    alt: 'Four Thousand Weeks: Time Management for Mortals',
    year: 2021,
    region: '英国',
    status: '已出版',
    image: 'assets/img/books/four-thousand-weeks_it.jpg',
    summary: 'Oliver Burkeman从有限性出发，反对效率至上的时间管理，倡导接受不可能做完一切的事实，重新定义有意义的时间使用。',
    review: '反效率主义的时间哲学，在 productivity 书籍泛滥的时代提供清醒剂。不是教你做更多事，而是帮你接受做不完。适合被待办清单压垮的现代人。文风幽默而深刻，比Stoicism著作更贴近当代生活。2021年多家媒体年度好书。',
    pros: ['视角独特', '治愈焦虑', '文笔出色'],
    cons: ['可操作性不如传统时间管理', '部分观点主观'],
    tags: ['Oliver Burkeman', '时间哲学', '有限性'],
    scores: [
      { src: '豆瓣', val: 8.2, max: 10, url: 'https://book.douban.com/subject_search?search_text=四千个星期' },
      { src: 'Goodreads', val: 4.2, max: 5, url: 'https://www.goodreads.com/search?q=Four+Thousand+Weeks' }
    ],
    links: [
      { kind: '资料', label: '豆瓣读书', url: 'https://book.douban.com/subject_search?search_text=四千个星期' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=四千个星期' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=四千个星期' }
    ],
    related: ['books/deep-work', 'books/digital-minimalism', 'books/atomic-habits'],
    f: { field: ['自我提升', '哲学', '思维方法'], form: ['实体书', '电子书'], language: ['中文', '英文'] }
  },
  {
    id: 'building-second-brain',
    cat: 'books',
    title: '打造第二大脑',
    alt: 'Building a Second Brain: A Proven Method to Organize Your Digital Life and Unlock Your Creative Potential',
    year: 2022,
    region: '美国',
    status: '已出版',
    image: null,
    summary: 'Tiago Forte提出CODE方法论（捕获、组织、提炼、表达），教读者用数字工具构建个人知识管理系统。',
    review: 'PKM（个人知识管理）领域的标杆著作，将Zettelkasten等传统方法现代化。PARA文件夹结构与渐进式摘要技巧实用性强。适合知识工作者、研究者与内容创作者。比《卡片笔记写作法》更偏工具与实践。配套在线课程可深入学习。',
    pros: ['方法论系统化', '工具中立', '实操性强'],
    cons: ['部分内容来自博客', '工具依赖风险'],
    tags: ['Tiago Forte', 'PKM', '知识管理'],
    scores: [
      { src: '豆瓣', val: 7.8, max: 10, url: 'https://book.douban.com/subject_search?search_text=打造第二大脑' },
      { src: 'Goodreads', val: 4.0, max: 5, url: 'https://www.goodreads.com/search?q=Building+a+Second+Brain' }
    ],
    links: [
      { kind: '官方', label: '官方网站', url: 'https://www.buildingasecondbrain.com/' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=打造第二大脑' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=打造第二大脑' }
    ],
    related: ['books/how-to-read-a-book', 'books/how-to-take-smart-notes', 'books/deep-work'],
    f: { field: ['工具书', '自我提升', '思维方法'], form: ['实体书', '电子书'], language: ['中文', '英文'] }
  },
  {
    id: 'how-to-take-smart-notes',
    cat: 'books',
    title: '卡片笔记写作法',
    alt: 'How to Take Smart Notes: One Simple Technique to Boost Writing, Learning and Thinking',
    year: 2017,
    region: '德国',
    status: '已出版',
    image: null,
    summary: 'Sonke Ahrens介绍Niklas Luhmann的Zettelkasten方法，通过原子化笔记与链接构建自生长的知识网络。',
    review: 'Zettelkasten方法的英语世界推广之作，解释了Luhmann如何用卡片盒产出70本著作。核心理念「写作不是思考的结果而是思考本身」颠覆传统写作流程。适合研究者、学者与长期写作者。比《打造第二大脑》更偏理论与认知科学基础。Obsidian/Roam等工具使实践更便捷。',
    pros: ['认知科学支撑', '改变写作范式', '长尾价值高'],
    cons: ['初期投入大', 'Luhmann原版难以复制'],
    tags: ['Sonke Ahrens', 'Zettelkasten', 'Luhmann'],
    scores: [
      { src: '豆瓣', val: 8.3, max: 10, url: 'https://book.douban.com/subject_search?search_text=卡片笔记写作法' },
      { src: 'Goodreads', val: 4.1, max: 5, url: 'https://www.goodreads.com/search?q=How+to+Take+Smart+Notes' }
    ],
    links: [
      { kind: '资料', label: '豆瓣读书', url: 'https://book.douban.com/subject_search?search_text=卡片笔记写作法' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=卡片笔记写作法' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=卡片笔记写作法' }
    ],
    related: ['books/building-second-brain', 'books/how-to-read-a-book', 'books/on-writing-stephen-king'],
    f: { field: ['写作', '工具书', '教育'], form: ['实体书', '电子书'], language: ['中文', '德文'] }
  },
  {
    id: 'skin-in-the-game',
    cat: 'books',
    title: '非对称风险',
    alt: 'Skin in the Game: Hidden Asymmetries in Daily Life',
    year: 2018,
    region: '美国',
    status: '已出版',
    image: null,
    summary: 'Taleb论证「切身利害」是判断可信度与系统稳健性的核心标准，批判没有下注风险的决策者与专家。',
    review: '「不确定性」系列第五部，比前作更聚焦伦理与制度设计。「没有skin in the game的人不应做决策」成为流行语。适合政策制定者、管理者与对公平正义敏感的读者。文风依旧犀利，案例横跨古今。是理解Taleb思想体系的必要拼图。',
    pros: ['伦理视角独特', '现实针对性强', '金句密集'],
    cons: ['重复前作观点', '攻击性强'],
    tags: ['Nassim Taleb', '风险共担', '伦理'],
    scores: [
      { src: '豆瓣', val: 8.2, max: 10, url: 'https://book.douban.com/subject_search?search_text=非对称风险' },
      { src: 'Goodreads', val: 4.0, max: 5, url: 'https://www.goodreads.com/search?q=Skin+in+the+Game' }
    ],
    links: [
      { kind: '资料', label: '维基百科', url: 'https://zh.wikipedia.org/w/index.php?search=Skin+in+the+Game' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=非对称风险' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=非对称风险' }
    ],
    related: ['books/antifragile', 'books/black-swan', 'books/fooled-by-randomness'],
    f: { field: ['思维方法', '哲学', '经济'], form: ['实体书'], language: ['中文', '英文'] }
  },
  {
    id: 'fooled-by-randomness',
    cat: 'books',
    title: '随机漫步的傻瓜',
    alt: 'Fooled by Randomness: The Hidden Role of Chance in Life and in the Markets',
    year: 2001,
    region: '美国',
    status: '已出版',
    image: null,
    summary: 'Taleb以交易员视角揭示运气在成功中的被低估角色，批判幸存者偏差与叙事谬误对判断的扭曲。',
    review: '「不确定性」系列第一部，比《黑天鹅》更早也更个人化。Taleb的交易员经历使论述更具说服力。适合金融从业者与对概率思维感兴趣的读者。是理解整个系列的起点，文风比后续著作更轻松。中文版译名《随机漫步的傻瓜》比原名更传神。',
    pros: ['个人经历鲜活', '概率思维启蒙', '系列起点'],
    cons: ['结构松散', '部分观点重复'],
    tags: ['Nassim Taleb', '概率思维', '幸存者偏差'],
    scores: [
      { src: '豆瓣', val: 8.5, max: 10, url: 'https://book.douban.com/subject_search?search_text=随机漫步的傻瓜' },
      { src: 'Goodreads', val: 4.1, max: 5, url: 'https://www.goodreads.com/search?q=Fooled+by+Randomness' }
    ],
    links: [
      { kind: '资料', label: '维基百科', url: 'https://zh.wikipedia.org/w/index.php?search=Fooled+by+Randomness' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=随机漫步的傻瓜' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=随机漫步的傻瓜' }
    ],
    related: ['books/black-swan', 'books/antifragile', 'books/skin-in-the-game'],
    f: { field: ['金融', '思维方法'], form: ['实体书'], language: ['中文', '英文'] }
  },
  {
    id: 'chemistry-central-science',
    cat: 'books',
    title: '化学：中心科学',
    alt: 'Chemistry: The Central Science',
    year: 1978,
    region: '美国',
    status: '已出版',
    image: null,
    summary: 'Brown、LeMay等合著的经典普通化学教材，系统讲解原子结构、化学键、热力学、动力学与有机化学基础。',
    review: '全球使用最广泛的化学入门教材之一，以清晰解释与丰富习题著称。第十四版更新绿色化学与材料科学内容。适合化学专业本科生与自学者，是理解「化学为何是中心科学」的最佳起点。配套在线资源完善。比国内教材更注重概念理解而非计算技巧。',
    pros: ['解释清晰', '习题丰富', '更新及时'],
    cons: ['篇幅较大', '部分章节偏浅'],
    tags: ['Theodore Brown', '普通化学', '经典教材'],
    scores: [
      { src: '豆瓣', val: 8.8, max: 10, url: 'https://book.douban.com/subject_search?search_text=化学中心科学' },
      { src: 'Goodreads', val: 4.0, max: 5, url: 'https://www.goodreads.com/search?q=Chemistry+Central+Science' }
    ],
    links: [
      { kind: '资料', label: '维基百科', url: 'https://zh.wikipedia.org/w/index.php?search=Chemistry+Central+Science' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=化学中心科学' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=化学中心科学' }
    ],
    related: ['books/elements-chemistry', 'books/feynman-lectures', 'books/from-one-to-infinity'],
    f: { field: ['化学', '科普'], form: ['教科书'], language: ['中文', '英文'] }
  },
  {
    "id": "design-of-design",
    "image": "assets/img/books/design-of-design.jpg",
    "cat": "books",
    "title": "设计中的设计",
    "alt": "Designing Design",
    "year": 2003,
    "region": "日本",
    "status": "已出版",
    "f": {
      "field": [
        "设计",
        "艺术"
      ],
      "form": [
        "画册",
        "实体书"
      ],
      "language": [
        "中文",
        "日文"
      ]
    },
    "summary": "原研哉以MUJI艺术总监视角阐述「空」的设计哲学，探讨日常物品的本质与再设计的可能性。",
    "review": "日本设计大师原研哉的代表作，将东方美学与现代设计理念融合。「Re-Design」展览衍生内容影响深远。适合设计师、建筑师与对日本美学感兴趣的读者。图文并茂，中文版翻译良好。比《设计心理学》更偏哲学与感性，两者互补阅读效果佳。",
    "pros": [
      "东方美学典范",
      "图文精美",
      "思想深邃",
      "思想性强",
      "案例具体",
      "美学观念清晰"
    ],
    "cons": [
      "偏感性叙述",
      "实操性有限",
      "偏观念少方法",
      "实操指导有限"
    ],
    "tags": [
      "原研哉",
      "MUJI",
      "日本设计",
      "RE-DESIGN",
      "无印良品"
    ],
    "scores": [
      {
        "src": "豆瓣",
        "val": 8.9,
        "max": 10,
        "url": "https://book.douban.com/subject_search?search_text=设计中的设计"
      },
      {
        "src": "Goodreads",
        "val": 4.1,
        "max": 5,
        "url": "https://www.goodreads.com/search?q=Design+of+Design+Kenya+Hara"
      }
    ],
    "links": [
      {
        "kind": "资料",
        "label": "豆瓣读书",
        "url": "https://book.douban.com/subject_search?search_text=设计中的设计"
      },
      {
        "kind": "购买",
        "label": "京东",
        "url": "https://search.jd.com/Search?keyword=设计中的设计"
      },
      {
        "kind": "阅读",
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/global?keyword=设计中的设计"
      },
      {
        "kind": "资料",
        "label": "豆瓣读书",
        "url": "https://book.douban.com/subject_search?search_text=%E8%AE%BE%E8%AE%A1%E4%B8%AD%E7%9A%84%E8%AE%BE%E8%AE%A1"
      },
      {
        "kind": "阅读",
        "label": "微信读书",
        "url": "https://weread.qq.com/web/search/global?keyword=%E8%AE%BE%E8%AE%A1%E4%B8%AD%E7%9A%84%E8%AE%BE%E8%AE%A1"
      },
      {
        "kind": "下载",
        "label": "Z-Library",
        "url": "https://zh.z-library.sk/s/Designing%20Design"
      },
      {
        "kind": "下载",
        "label": "Anna's Archive",
        "url": "https://annas-archive.gl/search?q=Designing%20Design"
      },
      {
        "kind": "下载",
        "label": "Library Genesis",
        "url": "https://libgen.rs/search.php?req=Designing%20Design"
      },
      {
        "kind": "购买",
        "label": "京东",
        "url": "https://search.jd.com/Search?keyword=%E8%AE%BE%E8%AE%A1%E4%B8%AD%E7%9A%84%E8%AE%BE%E8%AE%A1"
      }
    ],
    "related": ["books/design-everyday-things", "books/art-story-gombrich", "books/kiku-and-sword", "books/music-in-western-civilization"]
  },
  {
    id: 'einstein-biography',
    cat: 'books',
    title: '爱因斯坦传',
    alt: 'Einstein: His Life and Universe',
    year: 2007,
    region: '美国',
    status: '已出版',
    image: null,
    summary: 'Walter Isaacson基于爱因斯坦私人档案，全景呈现其科学创造、政治立场、家庭生活与人格矛盾。',
    review: 'Isaacson继乔布斯传后的又一力作，将天才的物理直觉与复杂的人性并置。不神化也不贬低，呈现一个有缺陷的伟大灵魂。适合对科学史与人物传记感兴趣的读者。比专业物理学著作更易读，比通俗传记更深入。是理解20世纪科学革命的人文入口。',
    pros: ['一手资料丰富', '人物立体', '科学与人文交融'],
    cons: ['物理细节有限', '篇幅较长'],
    tags: ['Walter Isaacson', '物理学', '科学传记'],
    scores: [
      { src: '豆瓣', val: 8.9, max: 10, url: 'https://book.douban.com/subject_search?search_text=爱因斯坦传Isaacson' },
      { src: 'Goodreads', val: 4.3, max: 5, url: 'https://www.goodreads.com/search?q=Einstein+His+Life+and+Universe' }
    ],
    links: [
      { kind: '资料', label: '维基百科', url: 'https://zh.wikipedia.org/w/index.php?search=爱因斯坦传' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=爱因斯坦传' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=爱因斯坦传' }
    ],
    related: ['books/steve-jobs-biography', 'books/feynman-lectures', 'books/brief-history-of-time'],
    f: { field: ['传记', '物理', '科学史'], form: ['实体书'], language: ['中文', '英文'] }
  },
  {
    id: 'travels-with-charley',
    cat: 'books',
    title: '携犬横越美国',
    alt: 'Travels with Charley: In Search of America',
    year: 1962,
    region: '美国',
    status: '已出版',
    image: null,
    summary: 'John Steinbeck驾驶房车携贵宾犬Charley环游美国，记录各地风土人情与普通美国人的生活状态。',
    review: '诺贝尔文学奖得主的非虚构游记，以小说家的敏锐观察力捕捉1960年代初的美国面貌。文笔优美，兼具纪实与抒情。适合喜欢公路旅行文学与美国文化的读者。虽年代久远但对理解美国地域差异仍有价值。中文版译名多样，注意选择可靠译本。',
    pros: ['文笔极佳', '观察敏锐', '时代记录'],
    cons: ['时代局限', '个人视角'],
    tags: ['John Steinbeck', '美国游记', '公路文学'],
    scores: [
      { src: '豆瓣', val: 8.5, max: 10, url: 'https://book.douban.com/subject_search?search_text=携犬横越美国' },
      { src: 'Goodreads', val: 4.1, max: 5, url: 'https://www.goodreads.com/search?q=Travels+with+Charley' }
    ],
    links: [
      { kind: '资料', label: '维基百科', url: 'https://zh.wikipedia.org/w/index.php?search=Travels+with+Charley' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=携犬横越美国' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=携犬横越美国' }
    ],
    related: ['books/norwegian-wood-travel', 'books/on-writing-stephen-king', 'books/sapiens'],
    f: { field: ['游记', '文学理论'], form: ['实体书'], language: ['中文', '英文'] }
  },
  {
    id: 'when-breath-becomes-air',
    cat: 'books',
    title: '当呼吸化为空气',
    alt: 'When Breath Becomes Air',
    year: 2016,
    region: '美国',
    status: '已出版',
    image: null,
    summary: '神经外科医生Paul Kalanithi在确诊肺癌晚期后写下的回忆录，反思医学、死亡与生命的意义。',
    review: '医者面对自身死亡的真诚记录，文字克制而深沉。从医学生到主治医生再到患者的身份转换，揭示了医学的人文维度。适合所有思考生命意义的读者，尤其是医疗从业者。未完成之作，由妻子Lucy补写后记。纽约时报畅销书榜首。与《最好的告别》主题呼应。',
    pros: ['真诚动人', '医患双重视角', '文学性强'],
    cons: ['未完成之作', '情绪沉重'],
    tags: ['Paul Kalanithi', '医学人文', '临终回忆录'],
    scores: [
      { src: '豆瓣', val: 9.0, max: 10, url: 'https://book.douban.com/subject_search?search_text=当呼吸化为空气' },
      { src: 'Goodreads', val: 4.5, max: 5, url: 'https://www.goodreads.com/search?q=When+Breath+Becomes+Air' }
    ],
    links: [
      { kind: '资料', label: '维基百科', url: 'https://zh.wikipedia.org/w/index.php?search=When+Breath+Becomes+Air' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=当呼吸化为空气' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=当呼吸化为空气' }
    ],
    related: ['books/being-mortal', 'books/why-we-sleep', 'books/einstein-biography'],
    f: { field: ['医学', '传记', '健康'], form: ['实体书'], language: ['中文', '英文'] }
  },
  {
    id: 'ci-hai',
    cat: 'books',
    title: '辞海',
    alt: 'Cihai Dictionary',
    year: 1936,
    region: '中国',
    status: '已出版',
    image: 'assets/img/books/ci-hai.jpg',
    summary: '中国最具权威性的大型综合性辞典，涵盖语文、百科、历史、地理、科技等各学科词条。',
    review: '与《辞源》并称中国两大辞书，第七版收词超12万条。既是语文工具书也是微型百科全书。适合家庭藏书、学术研究与日常查阅。纸质版与网络版并行。虽被搜索引擎部分取代，但其释义的权威性与系统性仍无可替代。是中文世界的知识基础设施。',
    pros: ['权威全面', '历史悠久', '持续更新'],
    cons: ['体积庞大', '更新周期长'],
    tags: ['舒新城', '综合辞典', '中文工具书'],
    scores: [
      { src: '豆瓣', val: 9.5, max: 10, url: 'https://book.douban.com/subject_search?search_text=辞海' },
      { src: 'Goodreads', val: 4.3, max: 5, url: 'https://www.goodreads.com/search?q=Cihai+Dictionary' }
    ],
    links: [
      { kind: '官方', label: '辞海网络版', url: 'https://www.cihai.com.cn/' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=辞海第七版' },
      { kind: '资料', label: '维基百科', url: 'https://zh.wikipedia.org/w/index.php?search=辞海' }
    ],
    related: ['books/encyclopedia-britannica-guide', 'books/how-to-read-a-book', 'books/rural-china'],
    f: { field: ['百科', '工具书', '语言'], form: ['百科全书', '工具书'], language: ['中文'] }
  },
  {
    id: 'aspects-of-novel',
    cat: 'books',
    title: '小说面面观',
    alt: 'Aspects of the Novel',
    year: 1927,
    region: '英国',
    status: '已出版',
    image: null,
    summary: 'E.M. Forster在剑桥克拉克讲座基础上，区分故事与情节、扁平人物与圆形人物，探讨幻想、预言与模式等小说要素。',
    review: '现代小说理论的奠基之作，「扁平人物vs圆形人物」已成为文学批评通用术语。Forster以作家身份评论小说，兼具创作直觉与理论深度。适合文学研究者、小说创作者与深度阅读爱好者。篇幅不长但每章都有开创性洞见。与McKee《故事》互补：前者偏文学，后者偏叙事结构。',
    pros: ['概念原创', '作家视角', '篇幅精炼'],
    cons: ['示例偏古典', '未覆盖现代小说'],
    tags: ['E.M. Forster', '小说理论', '文学批评'],
    scores: [
      { src: '豆瓣', val: 8.8, max: 10, url: 'https://book.douban.com/subject_search?search_text=小说面面观' },
      { src: 'Goodreads', val: 3.9, max: 5, url: 'https://www.goodreads.com/search?q=Aspects+of+the+Novel' }
    ],
    links: [
      { kind: '资料', label: '维基百科', url: 'https://zh.wikipedia.org/w/index.php?search=Aspects+of+the+Novel' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=小说面面观' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=小说面面观' }
    ],
    related: ['books/story-mckee', 'books/heros-journey', 'books/save-the-cat'],
    f: { field: ['文学理论', '写作'], form: ['实体书'], language: ['中文', '英文'] }
  },
  {
    id: 'crime-punishment',
    cat: 'books',
    title: '罪与罚',
    alt: 'Crime and Punishment',
    year: 1866,
    region: '俄罗斯',
    status: '已出版',
    image: null,
    summary: 'Dostoevsky描写穷大学生拉斯柯尔尼科夫杀人后的精神折磨与救赎之路，探讨罪恶、自由意志与信仰。',
    review: '俄国文学巅峰之作，心理描写的里程碑。陀氏对人物内心深渊的挖掘影响后世心理学与存在主义哲学。多个中文译本可选，耿济之、朱海观译本较经典。适合文学爱好者与哲学思考者，是理解俄罗斯精神的必读之作。虽为小说但其思想深度使其成为非虚构读者也应涉猎的作品。',
    pros: ['心理描写巅峰', '思想深邃', '影响深远'],
    cons: ['篇幅较长', '叙事节奏慢'],
    tags: ['Dostoevsky', '俄国文学', '存在主义'],
    scores: [
      { src: '豆瓣', val: 9.3, max: 10, url: 'https://book.douban.com/subject_search?search_text=罪与罚' },
      { src: 'Goodreads', val: 4.2, max: 5, url: 'https://www.goodreads.com/search?q=Crime+and+Punishment' }
    ],
    links: [
      { kind: '资料', label: '古腾堡计划', url: 'https://www.gutenberg.org/ebooks/2554' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=罪与罚' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=罪与罚' }
    ],
    related: ['books/republic-plato', 'books/capital-marx', 'books/phenomenology-hegel'],
    f: { field: ['哲学', '心理'], form: ['实体书'], language: ['中文', '俄文'] }
  },
  {
    id: 'korean-modern-history',
    cat: 'books',
    title: '韩国现代史',
    alt: 'Modern Korean History',
    year: 2019,
    region: '韩国',
    status: '已出版',
    image: 'assets/img/books/korean-modern-history.jpg',
    summary: '系统梳理朝鲜半岛从开化期到当代的政治演变、经济发展与社会转型，解析韩流背后的历史脉络。',
    review: '了解邻国韩国的优质通识著作，弥补中文世界对韩国现代史认知的空白。涵盖殖民、分裂、军政府、民主化与财阀崛起等关键节点。适合对东亚地缘政治感兴趣的读者。比新闻报道更有历史纵深，比学术论文更易读。可与《菊与刀》对照理解日韩差异。',
    pros: ['填补认知空白', '脉络清晰', '时效性强'],
    cons: ['中文原创较少', '视角可能单一'],
    tags: ['韩国史', '东亚研究', '现代化'],
    scores: [
      { src: '豆瓣', val: 8.0, max: 10, url: 'https://book.douban.com/subject_search?search_text=韩国现代史' },
      { src: 'Goodreads', val: 3.7, max: 5, url: 'https://www.goodreads.com/search?q=Modern+Korean+History' }
    ],
    links: [
      { kind: '资料', label: '维基百科', url: 'https://zh.wikipedia.org/w/index.php?search=韩国现代史' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=韩国现代史' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=韩国现代史' }
    ],
    related: ['books/kiku-and-sword', 'books/rural-china', 'books/why-nations-fail'],
    f: { field: ['世界史', '政治'], form: ['实体书'], language: ['中文', '韩文'] }
  },
  {
    id: 'meditations-marcus-aurelius',
    cat: 'books',
    title: '沉思录',
    alt: 'Meditations',
    year: 180,
    region: '其他',
    status: '已出版',
    image: null,
    summary: '罗马皇帝Marcus Aurelius的私人哲学笔记，记录斯多葛学派的自律、理性与面对命运的坦然态度。',
    review: '斯多葛哲学的最佳入门文本，帝王写给自我的箴言集。跨越两千年仍能引起共鸣，因其直面人类共同的困境。何怀宏译本较通行。适合所有寻求内心平静与道德指引的读者。与现代自助书籍不同，其力量来自实践而非说教。是「其他」地区的代表——古罗马文明遗产。',
    pros: ['永恒智慧', '个人化写作', '实践导向'],
    cons: ['片段式结构', '需背景知识'],
    tags: ['Marcus Aurelius', '斯多葛', '古罗马'],
    scores: [
      { src: '豆瓣', val: 9.0, max: 10, url: 'https://book.douban.com/subject_search?search_text=沉思录' },
      { src: 'Goodreads', val: 4.3, max: 5, url: 'https://www.goodreads.com/search?q=Meditations+Marcus+Aurelius' }
    ],
    links: [
      { kind: '资料', label: '古腾堡计划', url: 'https://www.gutenberg.org/ebooks/2680' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=沉思录' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=沉思录' }
    ],
    related: ['books/republic-plato', 'books/on-liberty', 'books/four-thousand-weeks'],
    f: { field: ['哲学', '自我提升'], form: ['实体书'], language: ['中文', '英文'] }
  },
  {
    id: 'godel-incompleteness',
    cat: 'books',
    title: '哥德尔证明',
    alt: 'Godel\'s Proof',
    year: 1958,
    region: '奥地利',
    status: '已出版',
    image: null,
    summary: 'Ernest Nagel与James Newman以通俗方式解释哥德尔不完备定理的逻辑结构与哲学含义。',
    review: '理解哥德尔定理的最佳入门读物，比直接阅读原始论文或GEB更易接近。用最少数学预备知识讲清形式系统的局限。适合对数理逻辑感兴趣的非专业读者。篇幅短小精悍，可作为GEB的前置阅读。中文版陈毓麟译本较通行。',
    pros: ['入门极佳', '解释清晰', '篇幅精炼'],
    cons: ['仍需逻辑思维', '深度有限'],
    tags: ['Ernest Nagel', '不完备定理', '数理逻辑'],
    scores: [
      { src: '豆瓣', val: 9.1, max: 10, url: 'https://book.douban.com/subject_search?search_text=哥德尔证明' },
      { src: 'Goodreads', val: 4.2, max: 5, url: 'https://www.goodreads.com/search?q=Godels+Proof+Nagel' }
    ],
    links: [
      { kind: '资料', label: '维基百科', url: 'https://zh.wikipedia.org/w/index.php?search=哥德尔证明' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=哥德尔证明' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=哥德尔证明' }
    ],
    related: ['books/godel-escher-bach', 'books/how-to-solve-it', 'books/concrete-mathematics'],
    f: { field: ['数学', '科学史'], form: ['实体书'], language: ['中文', '英文'] }
  },
  {
    id: 'art-of-war-india',
    cat: 'books',
    title: '利论',
    alt: 'Arthashastra',
    year: -300,
    region: '印度',
    status: '已出版',
    image: null,
    summary: 'Kautilya（Chanakya）所著的古印度治国方略，涵盖政治、经济、军事、外交与间谍术，被誉为东方马基雅维利。',
    review: '古印度政治思想的集大成之作，比《君主论》早一千八百年且更为系统。其对权力运作的冷静分析超越时代。适合比较政治学与思想史研究者。中文译本较少但质量尚可。与《理想国》《君主论》对照阅读可理解不同文明的治理智慧。是印度文明的重要遗产。',
    pros: ['古代政治学巅峰', '跨文化价值', '体系完整'],
    cons: ['部分观念过时', '中文资源少'],
    tags: ['Kautilya', '古印度', '政治哲学'],
    scores: [
      { src: '豆瓣', val: 8.5, max: 10, url: 'https://book.douban.com/subject_search?search_text=利论' },
      { src: 'Goodreads', val: 3.9, max: 5, url: 'https://www.goodreads.com/search?q=Arthashastra' }
    ],
    links: [
      { kind: '资料', label: '维基百科', url: 'https://zh.wikipedia.org/w/index.php?search=Arthashastra' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=利论' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=利论' }
    ],
    related: ['books/republic-plato', 'books/wealth-of-nations', 'books/communist-manifesto'],
    f: { field: ['政治', '历史'], form: ['实体书'], language: ['中文', '英文'] }
  },
  {
    id: 'prince-machiavelli',
    cat: 'books',
    title: '君主论',
    alt: 'The Prince',
    year: 1532,
    region: '意大利',
    status: '已出版',
    image: null,
    summary: 'Niccolo Machiavelli献给美第奇家族的政治手册，主张统治者应以实效而非道德为准绳，开创现实主义政治学。',
    review: '西方政治思想史上最具争议的著作之一，「马基雅维利主义」由此得名。其冷酷的现实主义与《理想国》的理想主义形成鲜明对照。篇幅短小，适合所有对权力运作感兴趣的读者。多个中文译本可选，商务印书馆版较经典。建议结合历史背景阅读，避免简单化为「权术手册」。',
    pros: ['开创现实主义', '篇幅精炼', '影响深远'],
    cons: ['道德争议大', '需历史语境'],
    tags: ['Niccolo Machiavelli', '政治现实主义', '文艺复兴'],
    scores: [
      { src: '豆瓣', val: 8.7, max: 10, url: 'https://book.douban.com/subject_search?search_text=君主论' },
      { src: 'Goodreads', val: 3.8, max: 5, url: 'https://www.goodreads.com/search?q=The+Prince+Machiavelli' }
    ],
    links: [
      { kind: '资料', label: '古腾堡计划', url: 'https://www.gutenberg.org/ebooks/1232' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=君主论' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=君主论' }
    ],
    related: ['books/republic-plato', 'books/on-liberty', 'books/art-of-war-india'],
    f: { field: ['政治', '历史'], form: ['实体书'], language: ['中文', '英文'] }
  },
  {
    id: 'understanding-media',
    cat: 'books',
    title: '理解媒介：论人的延伸',
    alt: 'Understanding Media: The Extensions of Man',
    year: 1964,
    region: '加拿大',
    status: '已出版',
    image: null,
    summary: 'Marshall McLuhan提出「媒介即讯息」，分析印刷术、电视等媒介如何重塑人类感知与社会结构。',
    review: '传播学奠基之作，其预言在互联网时代被反复验证。「地球村」「冷媒介热媒介」等概念影响深远。适合媒体研究者与文化评论者。文风碎片化但洞见密集，需反复咀嚼。中文版何道宽译本较通行。是理解数字时代文化变迁的思想源头。',
    pros: ['预言性强', '概念原创', '跨学科影响'],
    cons: ['文风晦涩', '论证非传统'],
    tags: ['Marshall McLuhan', '媒介理论', '传播学'],
    scores: [
      { src: '豆瓣', val: 8.6, max: 10, url: 'https://book.douban.com/subject_search?search_text=理解媒介' },
      { src: 'Goodreads', val: 4.0, max: 5, url: 'https://www.goodreads.com/search?q=Understanding+Media+McLuhan' }
    ],
    links: [
      { kind: '资料', label: '维基百科', url: 'https://zh.wikipedia.org/w/index.php?search=理解媒介' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=理解媒介' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=理解媒介' }
    ],
    related: ['books/design-everyday-things', 'books/sapiens', 'books/wave-and-trough'],
    f: { field: ['社会学', '科普'], form: ['实体书'], language: ['中文', '英文'] }
  },
  {
    id: 'poetics-aristotle',
    cat: 'books',
    title: '诗学',
    alt: 'Poetics',
    year: -335,
    region: '古希腊',
    status: '已出版',
    image: null,
    summary: 'Aristotle分析悲剧的结构要素：情节、性格、思想、言辞、歌曲与场景，提出摹仿论与净化说。',
    review: '西方文学理论的源头，其对悲剧六要素的分析至今仍是叙事研究的基础。「卡塔西斯」（净化）概念引发两千年的诠释争论。篇幅短小但密度极高，建议配合注释本阅读。适合文学研究者与编剧，是所有叙事理论的起点。与《千面英雄》《故事》形成古今对话。',
    pros: ['文学理论原点', '体系开创', '影响永恒'],
    cons: ['文本残缺', '需古典学背景'],
    tags: ['Aristotle', '悲剧理论', '古典文论'],
    scores: [
      { src: '豆瓣', val: 9.0, max: 10, url: 'https://book.douban.com/subject_search?search_text=诗学亚里士多德' },
      { src: 'Goodreads', val: 3.8, max: 5, url: 'https://www.goodreads.com/search?q=Poetics+Aristotle' }
    ],
    links: [
      { kind: '资料', label: '古腾堡计划', url: 'https://www.gutenberg.org/ebooks/1974' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=诗学亚里士多德' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=诗学' }
    ],
    related: ['books/republic-plato', 'books/heros-journey', 'books/story-mckee'],
    f: { field: ['文学理论', '艺术'], form: ['实体书'], language: ['中文', '英文'] }
  },
  {
    id: 'gulag-archipelago',
    cat: 'books',
    title: '古拉格群岛',
    alt: 'The Gulag Archipelago',
    year: 1973,
    region: '俄罗斯',
    status: '已出版',
    image: null,
    summary: 'Aleksandr Solzhenitsyn以亲历者与数百份证词为基础，揭露苏联劳改营体系的运作机制与人性摧残。',
    review: '20世纪最重要的政治文献之一，直接推动了全球对极权主义的反思。Solzhenitsyn因此获诺贝尔文学奖并被驱逐。篇幅巨大但每章都是历史的见证。适合对20世纪历史与人权议题感兴趣的读者。中文版多个译本可选。是理解极权体制运作机制的必读之作。',
    pros: ['历史见证价值', '文学力量强', '推动社会变革'],
    cons: ['篇幅巨大', '情绪沉重'],
    tags: ['Solzhenitsyn', '苏联', '极权主义'],
    scores: [
      { src: '豆瓣', val: 9.3, max: 10, url: 'https://book.douban.com/subject_search?search_text=古拉格群岛' },
      { src: 'Goodreads', val: 4.4, max: 5, url: 'https://www.goodreads.com/search?q=Gulag+Archipelago' }
    ],
    links: [
      { kind: '资料', label: '维基百科', url: 'https://zh.wikipedia.org/w/index.php?search=古拉格群岛' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=古拉格群岛' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=古拉格群岛' }
    ],
    related: ['books/capital-marx', 'books/communist-manifesto', 'books/why-nations-fail'],
    f: { field: ['历史', '政治'], form: ['实体书'], language: ['中文', '俄文'] }
  },
  {
    id: 'korean-war-bruce-cumings',
    cat: 'books',
    title: '朝鲜战争',
    alt: 'The Korean War: A History',
    year: 2010,
    region: '韩国',
    status: '已出版',
    image: null,
    summary: 'Bruce Cumings从东亚视角重新审视朝鲜战争，挑战美国中心叙事，揭示战争的深层历史根源与当代影响。',
    review: '修正主义史学代表作，将朝鲜战争置于殖民与冷战的双重语境中。观点争议大但史料扎实。适合对东亚近代史与国际关系感兴趣的读者。可与中文世界的主流叙述对照阅读，培养多元视角。中文版翻译良好。是理解半岛问题历史根源的重要参考。',
    pros: ['视角独特', '史料扎实', '挑战主流叙事'],
    cons: ['争议性大', '立场鲜明'],
    tags: ['Bruce Cumings', '朝鲜战争', '东亚史'],
    scores: [
      { src: '豆瓣', val: 8.3, max: 10, url: 'https://book.douban.com/subject_search?search_text=朝鲜战争Cumings' },
      { src: 'Goodreads', val: 3.8, max: 5, url: 'https://www.goodreads.com/search?q=Korean+War+History+Cumings' }
    ],
    links: [
      { kind: '资料', label: '维基百科', url: 'https://zh.wikipedia.org/w/index.php?search=朝鲜战争' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=朝鲜战争' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=朝鲜战争' }
    ],
    related: ['books/korean-modern-history', 'books/guns-germs-steel', 'books/why-nations-fail'],
    f: { field: ['世界史', '政治'], form: ['实体书'], language: ['中文', '英文'] }
  },
  {
    id: 'tao-te-ching',
    cat: 'books',
    title: '道德经',
    alt: 'Tao Te Ching',
    year: -400,
    region: '其他',
    status: '已出版',
    image: null,
    summary: 'Laozi以五千言阐述道与德的哲学，主张无为而治、柔弱胜刚强、返璞归真，奠定道家思想基础。',
    review: '中国哲学的核心经典之一，其简约文字蕴含无穷解读空间。对后世道教、禅宗、生态哲学乃至管理学均有深远影响。多个注本可选，陈鼓应《老子今注今译》较通行。适合所有对中国智慧感兴趣的读者。英文版Arthur Waley或Ursula Le Guin译本各有特色。是东方思想的基石文本。',
    pros: ['思想深邃', '影响广泛', '篇幅精炼'],
    cons: ['解读分歧大', '需注释辅助'],
    tags: ['Laozi', '道家', '中国哲学'],
    scores: [
      { src: '豆瓣', val: 9.5, max: 10, url: 'https://book.douban.com/subject_search?search_text=道德经' },
      { src: 'Goodreads', val: 4.3, max: 5, url: 'https://www.goodreads.com/search?q=Tao+Te+Ching' }
    ],
    links: [
      { kind: '资料', label: '中国哲学书电子化计划', url: 'https://ctext.org/laozi' },
      { kind: '购买', label: '京东', url: 'https://search.jd.com/Search?keyword=道德经' },
      { kind: '阅读', label: '微信读书', url: 'https://weread.qq.com/web/search/global?keyword=道德经' }
    ],
    related: ['books/republic-plato', 'books/meditations-marcus-aurelius', 'books/rural-china'],
    f: { field: ['哲学', '自我提升'], form: ['实体书'], language: ['中文', '英文'] }
  }
]);
