// script.js
const translations = {
  en: {
    subtitle: "Builder. Thinker. Time enthusiast.",
    aboutTitle: "About Me",
    aboutText: "I build web applications and explore the intersections of technology, time, and human productivity. Currently deep in the world of Kotlin and Jetpack Compose, while maintaining a healthy obsession with Bitcoin, decentralization, and SDR technology.",
    philosophyTitle: "Philosophy & Theology",
    philosophyText: "I approach life through a lens of Christian philosophy, believing in the inherent value of time as a gift and the importance of stewarding it well. Technology should serve humanity, not enslave it. Bitcoin represents more than currency—it's a return to sound principles of value and truth. I believe in building tools that respect human agency and promote genuine connection.",
    workTitle: "Projects",
    contactTitle: "Get in Touch",
    footerText: "Open to collaboration on meaningful projects. Let's build something worthwhile."
  },
  ko: {
    subtitle: "빌더. 사상가. 시간 애호가.",
    aboutTitle: "소개",
    aboutText: "웹 애플리케이션을 만들고 기술, 시간, 인간 생산성의 교차점을 탐구합니다. 현재 Kotlin 및 Jetpack Compose의 세계에 깊이 빠져 있으며 비트코인, 탈중앙화 및 SDR 기술에 대한 건강한 집착을 유지하고 있습니다.",
    philosophyTitle: "철학과 신학",
    philosophyText: "기독교 철학의 렌즈를 통해 삶에 접근하며, 시간의 본질적인 가치를 선물로 믿고 잘 관리하는 것이 중요하다고 생각합니다. 기술은 인류를 섬겨야 하며 노예로 만들어서는 안 됩니다. 비트코인은 통화 이상을 나타냅니다. 가치와 진실의 건전한 원칙으로의 복귀입니다. 인간의 주체성을 존중하고 진정한 연결을 촉진하는 도구를 만드는 것을 믿습니다.",
    workTitle: "프로젝트",
    contactTitle: "연락하기",
    footerText: "의미 있는 프로젝트에 대한 협업을 환영합니다. 가치 있는 것을 함께 만들어봅시다."
  },
  fr: {
    subtitle: "Constructeur. Penseur. Passionné du temps.",
    aboutTitle: "À Propos",
    aboutText: "Je construis des applications web et explore les intersections de la technologie, du temps et de la productivité humaine. Actuellement plongé dans le monde de Kotlin et Jetpack Compose, tout en maintenant une obsession saine pour Bitcoin, la décentralisation et la technologie SDR.",
    philosophyTitle: "Philosophie et Théologie",
    philosophyText: "J'aborde la vie à travers le prisme de la philosophie chrétienne, croyant en la valeur inhérente du temps comme un don et l'importance de bien le gérer. La technologie devrait servir l'humanité, pas l'asservir. Bitcoin représente plus qu'une monnaie—c'est un retour aux principes solides de valeur et de vérité. Je crois en la construction d'outils qui respectent l'agence humaine et favorisent une connexion authentique.",
    workTitle: "Projets",
    contactTitle: "Contactez-moi",
    footerText: "Ouvert à la collaboration sur des projets significatifs. Construisons quelque chose qui vaut la peine."
  }
};

let currentTheme = 'dark';
let currentLang = 'en';

function toggleTheme() {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.body.setAttribute('data-theme', currentTheme);
}

function setLang(lang) {
  currentLang = lang;
  const trans = translations[lang];
  
  document.getElementById('subtitle').textContent = trans.subtitle;
  document.getElementById('about-title').textContent = trans.aboutTitle;
  document.getElementById('about-text').textContent = trans.aboutText;
  document.getElementById('philosophy-title').textContent = trans.philosophyTitle;
  document.getElementById('philosophy-text').textContent = trans.philosophyText;
  document.getElementById('work-title').textContent = trans.workTitle;
  document.getElementById('contact-title').textContent = trans.contactTitle;
  document.getElementById('footer-text').textContent = trans.footerText;
  
  // Update active button
  document.querySelectorAll('.lang-switcher button').forEach(btn => {
    btn.classList.remove('active');
  });
  event.target.classList.add('active');
}

// Smooth scroll for navigation
document.querySelectorAll('.nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Initialize theme based on system preference
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
  toggleTheme();
}
