// ===== NAV SCROLL SHADOW =====
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 10);
});

// ===== FADE-IN ON SCROLL =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ===== PROJECT FILTER =====
const filterBtns = document.querySelectorAll('.filter-btn');
const rows       = document.querySelectorAll('.project-row');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    rows.forEach(row => {
      if (filter === 'all' || row.dataset.category === filter) {
        row.classList.remove('hidden');
      } else {
        row.classList.add('hidden');
      }
    });
  });
});

// ===== SMOOTH ACTIVE NAV LINK =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 100) current = sec.id;
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === `#${current}` ? 'var(--dark)' : '';
  });
});

// ===== TRANSLATIONS =====
const translations = {
  en: {
    // Nav
    'nav-about':        'About',
    'nav-projects':     'Projects',
    'nav-experience':   'Experience',
    'nav-recognition':  'Recognition',
    'nav-contact':      'Contact',
    // Hero school
    'hero-major': 'Engineering Science',
    'hero-uni':   'University of Toronto',
    'hero-year':  'Class of 2T9',
    // Hero
    'hero-sub':         'Building at the intersection of AI, Finance, Biomedical Systems, and Accessibility.',
    'tag-ai':           'AI & Agents',
    'tag-fintech':      'FinTech',
    'tag-biomedical':   'Biomedical Systems',
    'tag-accessibility':'Accessibility',
    'tag-hardware':     'Hardware',
    'btn-view-projects':'View Projects',
    'btn-download-cv':  'Download CV',
    'btn-contact':      'Contact',
    // About
    'about-label': 'About',
    'about-title': 'Who I Am',
    'about-p1': "I'm a first-year Engineering Science student at the University of Toronto (graduating 2029), pursuing a major in Biomedical Systems or Math-Statistics-Finance Engineering.",
    'about-p2': "I enjoy building things that bridge disciplines — whether that's an AI agent that reads institutional trading signals before the crowd, a sip-and-puff assistive device for a wheelchair user, or a hackathon prototype that wins a creative design award.",
    'about-p3': "I previously interned at Shenzhen YHLO Biotech as an R&D and Bioinformatics Engineer, where I applied machine learning to diagnose fevers of unknown origin. I hold two Chinese patents for firefighting drone systems.",
    'about-p4': 'Fluent in English and Mandarin. Currently based in Toronto.',
    'skill-prog':  'Programming',
    'skill-eng':   'Engineering',
    'skill-ai':    'AI & Finance',
    'skill-other': 'Other',
    // Projects
    'proj-label':    'Projects',
    'proj-title':    "What I've Built",
    'filter-all':    'All',
    'filter-ai':     'AI & Finance',
    'filter-hw':     'Hardware & IoT',
    'filter-design': 'Design & Engineering',
    // Project 1
    'p1-title': 'Portfolio Hub',
    'p1-desc':  'Full-stack AI-powered portfolio management web app built with Flask and WebSockets. Features a multi-stage agentic pipeline — investor screening, smart money signals, news analysis, and composite scoring — delivering real-time TRIM / HOLD / ADD recommendations across a personalized holdings dashboard.',
    'p1-btn':   'Live Site →',
    // Project 2
    'p2-title': 'Creamy — Smart Money Agent',
    'p2-desc':  'An agentic AI system with 6 specialized tools: Options flow detection, Dark Pool volume absorption and flow/price divergence, Institutional Positioning, SEC filings, and Social Buzz. Built to surface institutional trading footprints before retail attention arrives — winner of the GenAI Genesis Hackathon Smart Money track.',
    'p2-year':  'Mar 2026',
    'p2-btn':   'GitHub →',
    // Project 3
    'p3-title': 'Silent Sensor — Sip & Puff Switch',
    'p3-desc':  'Leading a 15-member UTBionic team to develop a sip-and-puff assistive input device for a wheelchair user with unpredictable tonic head movements. The pressure sensor and Arduino-based system enables fully independent device control through breath, mounting on a flexible arm or wheelchair frame for reliable access regardless of head movement.',
    'p3-year':  'Feb 2026–Present',
    'p3-tag':   'Project Lead · UTBionic',
    // Project 4
    'p4-title': 'Sensory Desensitization Toothbrush',
    'p4-desc':  'Designed a transitional oral hygiene device for children with sensory processing disorders (SPD) who experience oral tactile hypersensitivity — affecting 1 in 6 children. Leverages natural chewing as a stimming bridge toward conventional toothbrushing. Won the Most Creative Design Award at SmileHacks × CUBE 2026.',
    'p4-year':  'Feb 2026',
    'p4-btn':   'View Award →',
    // Project 5
    'p5-title': 'HomeAutomation — Voice Door Control',
    'p5-desc':  'IoT project enabling a disabled client to open their front door using voice commands. Developed software and circuits integrating an ESP32 microcontroller, motor driver, and linear actuator, with GPIO-controlled relay logic for door mechanism actuation.',
    'p5-year':  'Oct 2025',
    'p5-tag':   'Team Member · UTBionic',
    // Project 6
    'p6-title': 'FedEx Stock Pitch — DCF Valuation',
    'p6-desc':  'Built a comprehensive DCF, DDM, and Graham valuation model for FedEx Corporation (NYSE: FDX), arriving at a $350 price target (Equal Weight / Hold). Presented full industry analysis, forward-looking spinoff analysis, and investment thesis at the UTEFA Stock Pitch Competition.',
    'p6-year':  'Feb 2026',
    'p6-tag':   'UTEFA · Feb 2026',
    // Project 7
    'p7-title': 'UTEFA Case — MarketEdge Investment',
    'p7-desc':  'Conducted strategic risk assessment across 4 dimensions — infrastructure, expansion, resource, and concentration risk — using financial metrics (ARR, YoY growth, runway) to deliver an investment recommendation for a design-to-production software platform partnership at the RCAG × UTEFA Case Competition.',
    'p7-year':  'Mar 2026',
    'p7-tag':   'RCAG × UTEFA · Mar 2026',
    // Project 8
    'p8-title': 'Praxis I — Backpack Cable Storage',
    'p8-desc':  'Design brief exploring solutions to reduce cable tangling and unstowing time for Engineering Science students. Applied cable stiffness research, tangle probability modelling, and stakeholder interviews. Incorporated accessibility principles for users with upper-limb limitations.',
    'p8-year':  'Oct 2025',
    'p8-tag':   'Praxis I · UofT 2025',
    // Project 9
    'p9-title': 'CIV102 — Bridge Design',
    'p9-desc':  'Collaborative bridge design project applying structural engineering principles from CIV102: Structures and Materials. Full iterative design process from diverging explorations through converging selection, documented with engineering calculations, assembly drawings, and design reports.',
    'p9-year':  '2025',
    'p9-tag':   'CIV102 · UofT 2025',
    // Experience
    'exp-label': 'Experience',
    'exp-title': "Where I've Worked",
    'exp1-date':  'FEB 2026 – PRESENT',
    'exp1-title': 'Project Lead — Silent Sensor (Sip & Puff)',
    'exp1-org':   'University of Toronto Bioengineering Design Team (UTBionic)',
    'exp1-li1':   'Managing operations of a 15-member team to develop an Arduino-based sip-and-puff assistive device',
    'exp1-li2':   'Leading systematic engineering design process from need-finding through prototyping',
    'exp1-li3':   'Designing for users with tonic head movement — pressure sensor + relay module architecture',
    'exp2-date':  'OCT 2025 – FEB 2026',
    'exp2-title': 'Club Member — HomeAutomation Project',
    'exp2-org':   'UTBionic, University of Toronto',
    'exp2-li1':   'Software and circuit development for voice-controlled door access for a disabled client',
    'exp2-li2':   'Collaborated on hardware integration and firmware development',
    'exp3-date':  'JUL 2024 – AUG 2024',
    'exp3-title': 'Bioinformatics Analysis Engineer',
    'exp3-org':   'Shenzhen YHLO Biotech Co. Ltd.',
    'exp3-li1':   'Applied machine learning to predict causes of Fever of Unknown Origin from biochemical indicators',
    'exp3-li2':   'Authored a report on ML applications for diagnosing undiagnosed fevers',
    'exp4-date':  'JAN 2024 – FEB 2024',
    'exp4-title': 'Research & Development Engineer',
    'exp4-org':   'Shenzhen YHLO Biotech Co. Ltd.',
    'exp4-li1':   'Prepared cDNA libraries and conducted quality control testing',
    // Recognition
    'recog-label':  'Recognition',
    'recog-title':  'Awards & Patents',
    'recog1-title': 'Most Creative Design Award',
    'recog1-desc':  'Awarded for designing a sensory desensitization toothbrush solution for children with oral tactile hypersensitivity. SmileHacks × CUBE Hackathon.',
    'recog1-date':  'FEBRUARY 2026',
    'recog2-title': 'Innovation Potential Award',
    'recog2-desc':  '"Fire Eagle — Fire Reconnaissance and Control Pioneer Team," Sprout Track. China International College Students\' Innovation Competition.',
    'recog2-date':  '2025',
    'recog3-title': 'Patent — Firefighting Drone',
    'recog3-desc':  'Chinese utility patent for a firefighting drone system.<br/>Patent No. 202420991088.7',
    'recog3-date':  'AUGUST 2024',
    'recog4-title': 'Patent — Reconnaissance Firefighting Drone',
    'recog4-desc':  'Chinese utility patent for a reconnaissance firefighting drone.<br/>Patent No. 202420991086.8',
    'recog4-date':  'AUGUST 2024',
    // Contact
    'contact-label':    'Contact',
    'contact-title':    'Get In Touch',
    'contact-desc':     'Open to internships, research collaborations, and interesting conversations. Feel free to reach out.',
    'contact-email':    'Email',
    'contact-linkedin': 'LinkedIn',
    'contact-github':   'GitHub',
    'contact-resume':   'Resume',
    // Footer
    'footer-text': '© 2026 Boyang (Bobby) Xiao · Engineering Science, University of Toronto',
  },

  zh: {
    // Nav
    'nav-about':        '关于我',
    'nav-projects':     '项目',
    'nav-experience':   '经历',
    'nav-recognition':  '荣誉',
    'nav-contact':      '联系',
    // Hero school
    'hero-major': '工程科学',
    'hero-uni':   '多伦多大学',
    'hero-year':  '2029届',
    // Hero
    'hero-sub':         '构建于人工智能、金融、生物医学系统与无障碍技术的交汇处。',
    'tag-ai':           'AI 与智能体',
    'tag-fintech':      '金融科技',
    'tag-biomedical':   '生物医学系统',
    'tag-accessibility':'无障碍技术',
    'tag-hardware':     '硬件',
    'btn-view-projects':'查看项目',
    'btn-download-cv':  '下载简历',
    'btn-contact':      '联系我',
    // About
    'about-label': '关于',
    'about-title': '关于我',
    'about-p1': '我是多伦多大学工程科学专业大一学生（2029年毕业），主修生物医学系统或数学-统计-金融工程。',
    'about-p2': '我热衷于构建跨学科的产品——无论是先于大众识别机构交易信号的 AI 智能体、为轮椅使用者设计的吸吹式辅助设备，还是荣获创意设计奖的黑客松原型。',
    'about-p3': '我曾在深圳亚辉龙生物科技担任研发与生物信息工程师实习生，将机器学习应用于不明原因发热的诊断。我持有两项消防无人机系统的中国专利。',
    'about-p4': '英语和普通话流利。目前居住于多伦多。',
    'skill-prog':  '编程',
    'skill-eng':   '工程',
    'skill-ai':    'AI 与金融',
    'skill-other': '其他',
    // Projects
    'proj-label':    '项目',
    'proj-title':    '我的作品',
    'filter-all':    '全部',
    'filter-ai':     'AI 与金融',
    'filter-hw':     '硬件与物联网',
    'filter-design': '设计与工程',
    // Project 1
    'p1-title': 'Portfolio Hub（投资组合中枢）',
    'p1-desc':  '基于 Flask 和 WebSocket 构建的全栈 AI 投资组合管理应用。具备多阶段智能体流水线——投资者筛选、聪明钱信号、新闻分析与综合评分——在个性化持仓面板上提供实时的减仓 / 持有 / 加仓建议。',
    'p1-btn':   '访问网站 →',
    // Project 2
    'p2-title': 'Creamy — 聪明钱智能体',
    'p2-desc':  '一个拥有 6 个专业工具的 AI 智能体系统：期权流检测、暗池成交量吸筹与价格背离、机构持仓、SEC 文件与社交热度。旨在于散户关注前捕捉机构交易足迹——GenAI Genesis 黑客松聪明钱赛道冠军。',
    'p2-year':  '2026年3月',
    'p2-btn':   'GitHub →',
    // Project 3
    'p3-title': 'Silent Sensor — 吸吹式开关',
    'p3-desc':  '带领 UTBionic 15 人团队，为一名具有不可预测性头部张力运动的轮椅使用者开发吸吹式辅助输入设备。基于压力传感器和 Arduino 的系统使用户能够通过呼吸完全独立地控制设备，安装于可调节臂或轮椅框架，确保无论头部运动如何都能可靠使用。',
    'p3-year':  '2026年2月–至今',
    'p3-tag':   '项目负责人 · UTBionic',
    // Project 4
    'p4-title': '感觉脱敏牙刷',
    'p4-desc':  '为患有感觉处理障碍（SPD）的儿童设计的过渡性口腔卫生设备，针对口腔触觉超敏感——影响六分之一的儿童。利用自然咀嚼作为过渡桥梁，引导儿童逐步适应传统刷牙方式。荣获 SmileHacks × CUBE 2026 最具创意设计奖。',
    'p4-year':  '2026年2月',
    'p4-btn':   '查看奖项 →',
    // Project 5
    'p5-title': 'HomeAutomation — 语音门控',
    'p5-desc':  '物联网项目，使残疾客户能够通过语音命令开启前门。开发了集成 ESP32 微控制器、电机驱动器和线性执行器的软件与电路，通过 GPIO 控制继电器逻辑实现门机构驱动。',
    'p5-year':  '2025年10月',
    'p5-tag':   '团队成员 · UTBionic',
    // Project 6
    'p6-title': 'FedEx 股票推介 — DCF 估值',
    'p6-desc':  '为联邦快递公司（NYSE: FDX）构建了全面的 DCF、DDM 和格雷厄姆估值模型，得出 350 美元目标价（同等权重 / 持有）。在 UTEFA 股票推介竞赛中展示了完整的行业分析、前瞻性分拆分析和投资论点。',
    'p6-year':  '2026年2月',
    'p6-tag':   'UTEFA · 2026年2月',
    // Project 7
    'p7-title': 'UTEFA 案例 — MarketEdge 投资',
    'p7-desc':  '从基础设施、扩张、资源和集中度四个维度进行战略风险评估，运用财务指标（ARR、同比增长、资金跑道），为 RCAG × UTEFA 案例竞赛中一家设计生产软件平台的合作关系提供投资建议。',
    'p7-year':  '2026年3月',
    'p7-tag':   'RCAG × UTEFA · 2026年3月',
    // Project 8
    'p8-title': 'Praxis I — 背包线缆收纳',
    'p8-desc':  '设计简报，探索减少工程科学学生线缆缠绕和取出时间的解决方案。应用了线缆刚度研究、缠结概率建模和利益相关者访谈。融入了上肢障碍用户的无障碍设计原则。',
    'p8-year':  '2025年10月',
    'p8-tag':   'Praxis I · 多伦多大学 2025',
    // Project 9
    'p9-title': 'CIV102 — 桥梁设计',
    'p9-desc':  '合作桥梁设计项目，应用 CIV102《结构与材料》课程的结构工程原理。完整的迭代设计过程，从发散探索到收敛选择，配有工程计算、装配图和设计报告。',
    'p9-year':  '2025年',
    'p9-tag':   'CIV102 · 多伦多大学 2025',
    // Experience
    'exp-label': '经历',
    'exp-title': '我的工作经历',
    'exp1-date':  '2026年2月 – 至今',
    'exp1-title': '项目负责人 — Silent Sensor（吸吹式开关）',
    'exp1-org':   '多伦多大学生物工程设计团队（UTBionic）',
    'exp1-li1':   '管理 15 人团队，开发基于 Arduino 的吸吹式辅助设备',
    'exp1-li2':   '从需求发现到原型制作，主导系统性工程设计流程',
    'exp1-li3':   '针对头部张力运动用户进行设计——压力传感器与继电器模块架构',
    'exp2-date':  '2025年10月 – 2026年2月',
    'exp2-title': '社团成员 — HomeAutomation 项目',
    'exp2-org':   'UTBionic，多伦多大学',
    'exp2-li1':   '为残疾客户的语音门控系统开发软件和电路',
    'exp2-li2':   '协作完成硬件集成与固件开发',
    'exp3-date':  '2024年7月 – 2024年8月',
    'exp3-title': '生物信息分析工程师',
    'exp3-org':   '深圳亚辉龙生物科技股份有限公司',
    'exp3-li1':   '应用机器学习从生化指标预测不明原因发热的病因',
    'exp3-li2':   '撰写机器学习应用于不明热诊断的研究报告',
    'exp4-date':  '2024年1月 – 2024年2月',
    'exp4-title': '研发工程师',
    'exp4-org':   '深圳亚辉龙生物科技股份有限公司',
    'exp4-li1':   '制备 cDNA 文库并进行质量控制测试',
    // Recognition
    'recog-label':  '荣誉',
    'recog-title':  '奖项与专利',
    'recog1-title': '最具创意设计奖',
    'recog1-desc':  '因设计针对口腔触觉超敏儿童的感觉脱敏牙刷方案而获奖。SmileHacks × CUBE 黑客松。',
    'recog1-date':  '2026年2月',
    'recog2-title': '创新潜力奖',
    'recog2-desc':  '「火鹰——消防侦察与控制先锋团队」，萌芽赛道。中国国际大学生创新大赛。',
    'recog2-date':  '2025年',
    'recog3-title': '专利 — 消防无人机',
    'recog3-desc':  '消防无人机系统实用新型专利。<br/>专利号：202420991088.7',
    'recog3-date':  '2024年8月',
    'recog4-title': '专利 — 侦察消防无人机',
    'recog4-desc':  '侦察消防无人机实用新型专利。<br/>专利号：202420991086.8',
    'recog4-date':  '2024年8月',
    // Contact
    'contact-label':    '联系',
    'contact-title':    '与我联系',
    'contact-desc':     '欢迎实习机会、科研合作及有趣的交流，随时联系我。',
    'contact-email':    '邮件',
    'contact-linkedin': 'LinkedIn',
    'contact-github':   'GitHub',
    'contact-resume':   '简历',
    // Footer
    'footer-text': '© 2026 肖博阳（Bobby Xiao）· 工程科学，多伦多大学',
  }
};

// ===== LANGUAGE TOGGLE =====
let currentLang = 'en';

function setLang(lang) {
  currentLang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key] !== undefined) {
      el.innerHTML = translations[lang][key];
    }
  });
  const btn = document.getElementById('lang-toggle');
  btn.textContent = lang === 'en' ? '中文' : 'EN';
  document.documentElement.lang = lang === 'en' ? 'en' : 'zh';
}

document.getElementById('lang-toggle').addEventListener('click', () => {
  setLang(currentLang === 'en' ? 'zh' : 'en');
});
