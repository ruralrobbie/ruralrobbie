// script.js
var translations = {
  en: {
    tagline: "BUILDER / THINKER / STEWARD OF TIME",
    aboutTitle: "ABOUT",
    aboutText: "I build web applications at the intersection of technology, time, and human productivity.<br><br>Currently working with Kotlin, Jetpack Compose, and SDR. Deeply interested in Bitcoin, decentralization, and tools that respect human agency.",
    philosophyTitle: "PHILOSOPHY",
    philosophyText: "I approach life through Christian philosophy. Time is a gift to be stewarded wisely. Technology should serve humanity, not enslave it.<br><br>Bitcoin represents more than currency—it's a return to sound principles of value and truth. I build tools that respect human dignity and promote genuine connection.",
    toolsTitle: "TOOLS I USE",
    toolsIntro: "Privacy-respecting alternatives to Big Tech surveillance.",
    toolsCommunication: "COMMUNICATION & EMAIL",
    toolsProductivity: "PRODUCTIVITY & ORGANIZATION",
    toolsSecurity: "SECURITY & PRIVACY",
    toolsBrowsing: "BROWSING & SEARCH",
    toolsMaps: "MAPS & NAVIGATION",
    toolsAssistant: "AI & ASSISTANT",
    toolsOS: "OPERATING SYSTEMS",
    projectsTitle: "PROJECTS",
    projectDays: "Time tracking reimagined",
    projectClutter: "Organize your digital life",
    projectMarriage: "Relationship tools",
    contactTitle: "CONTACT",
    footerText: "<strong>OPEN TO COLLABORATION.</strong> Let's build something meaningful."
  },
  ko: {
    tagline: "빌더 / 사상가 / 시간의 청지기",
    aboutTitle: "소개",
    aboutText: "기술, 시간, 인간 생산성의 교차점에서 웹 애플리케이션을 만듭니다.<br><br>현재 Kotlin, Jetpack Compose 및 SDR로 작업 중입니다. 비트코인, 탈중앙화 및 인간의 주체성을 존중하는 도구에 깊은 관심이 있습니다.",
    philosophyTitle: "철학",
    philosophyText: "기독교 철학을 통해 삶에 접근합니다. 시간은 현명하게 관리해야 할 선물입니다. 기술은 인류를 섬겨야 하며 노예로 만들어서는 안 됩니다.<br><br>비트코인은 통화 이상을 나타냅니다. 가치와 진실의 건전한 원칙으로의 복귀입니다. 인간의 존엄성을 존중하고 진정한 연결을 촉진하는 도구를 만듭니다.",
    toolsTitle: "사용하는 도구",
    toolsIntro: "빅테크 감시를 거부하는 프라이버시 존중 대안.",
    toolsCommunication: "통신 및 이메일",
    toolsProductivity: "생산성 및 조직화",
    toolsSecurity: "보안 및 프라이버시",
    toolsBrowsing: "브라우징 및 검색",
    toolsMaps: "지도 및 내비게이션",
    toolsAssistant: "AI 및 어시스턴트",
    toolsOS: "운영 체제",
    projectsTitle: "프로젝트",
    projectDays: "재구상된 시간 추적",
    projectClutter: "디지털 삶을 정리하세요",
    projectMarriage: "관계 도구",
    contactTitle: "연락처",
    footerText: "<strong>협업 환영.</strong> 의미 있는 것을 함께 만들어봅시다."
  },
  fr: {
    tagline: "CONSTRUCTEUR / PENSEUR / GARDIEN DU TEMPS",
    aboutTitle: "À PROPOS",
    aboutText: "Je construis des applications web à l'intersection de la technologie, du temps et de la productivité humaine.<br><br>Actuellement, je travaille avec Kotlin, Jetpack Compose et SDR. Profondément intéressé par Bitcoin, la décentralisation et les outils qui respectent l'agence humaine.",
    philosophyTitle: "PHILOSOPHIE",
    philosophyText: "J'aborde la vie à travers la philosophie chrétienne. Le temps est un don à gérer sagement. La technologie devrait servir l'humanité, pas l'asservir.<br><br>Bitcoin représente plus qu'une monnaie—c'est un retour aux principes solides de valeur et de vérité. Je construis des outils qui respectent la dignité humaine et favorisent une connexion authentique.",
    toolsTitle: "OUTILS QUE J'UTILISE",
    toolsIntro: "Alternatives respectueuses de la vie privée à la surveillance des Big Tech.",
    toolsCommunication: "COMMUNICATION ET EMAIL",
    toolsProductivity: "PRODUCTIVITÉ ET ORGANISATION",
    toolsSecurity: "SÉCURITÉ ET CONFIDENTIALITÉ",
    toolsBrowsing: "NAVIGATION ET RECHERCHE",
    toolsMaps: "CARTES ET NAVIGATION",
    toolsAssistant: "IA ET ASSISTANT",
    toolsOS: "SYSTÈMES D'EXPLOITATION",
    projectsTitle: "PROJETS",
    projectDays: "Suivi du temps réinventé",
    projectClutter: "Organisez votre vie numérique",
    projectMarriage: "Outils relationnels",
    contactTitle: "CONTACT",
    footerText: "<strong>OUVERT À LA COLLABORATION.</strong> Construisons quelque chose de significatif."
  }
};

var currentLang = 'en';

function setLang(lang) {
  currentLang = lang;
  var trans = translations[lang];
  
  document.getElementById('tagline').innerHTML = trans.tagline;
  document.getElementById('about-title').innerHTML = trans.aboutTitle;
  document.getElementById('about-text').innerHTML = trans.aboutText;
  document.getElementById('philosophy-title').innerHTML = trans.philosophyTitle;
  document.getElementById('philosophy-text').innerHTML = trans.philosophyText;
  document.getElementById('tools-title').innerHTML = trans.toolsTitle;
  document.getElementById('tools-intro').innerHTML = trans.toolsIntro;
  document.getElementById('tools-communication').innerHTML = trans.toolsCommunication;
  document.getElementById('tools-productivity').innerHTML = trans.toolsProductivity;
  document.getElementById('tools-security').innerHTML = trans.toolsSecurity;
  document.getElementById('tools-browsing').innerHTML = trans.toolsBrowsing;
  document.getElementById('tools-maps').innerHTML = trans.toolsMaps;
  document.getElementById('tools-assistant').innerHTML = trans.toolsAssistant;
  document.getElementById('tools-os').innerHTML = trans.toolsOS;
  document.getElementById('projects-title').innerHTML = trans.projectsTitle;
  document.getElementById('project-days').innerHTML = trans.projectDays;
  document.getElementById('project-clutter').innerHTML = trans.projectClutter;
  document.getElementById('project-marriage').innerHTML = trans.projectMarriage;
  document.getElementById('contact-title').innerHTML = trans.contactTitle;
  document.getElementById('footer-text').innerHTML = trans.footerText;
}

function toggleTheme() {
  var body = document.body;
  if (body.className === 'dark') {
    body.className = '';
  } else {
    body.className = 'dark';
  }
}
