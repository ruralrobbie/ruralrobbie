// script.js
const translations = {
  en: {
    greeting: "👋 Hi, I’m ruralrobbie",
    interestsTitle: "👀 Interests",
    interests: ["Web apps", "Time", "Bitcoin", "Productivity", "Executive assistants", "Communications"],
    collabTitle: "🤝 Open to collaboration on",
    collab: "Pretty much anything."
  },
  ko: {
    greeting: "👋 안녕하세요, ruralrobbie입니다",
    interestsTitle: "👀 관심사",
    interests: ["웹 애플리케이션", "시간에 대한 개념", "비트코인", "생산성과 워크플로", "임원 보조 / 개인 비서", "커뮤니케이션"],
    collabTitle: "🤝 협업에 열려 있습니다",
    collab: "분야와 상관없이 흥미로운 프로젝트라면 무엇이든 환영합니다."
  },
  fr: {
    greeting: "👋 Bonjour, je suis ruralrobbie",
    interestsTitle: "👀 Centres d’intérêt",
    interests: ["Applications web", "La notion du temps", "Bitcoin", "Productivité", "Assistants exécutifs", "Communication"],
    collabTitle: "🤝 Ouvert aux collaborations",
    collab: "À peu près sur n’importe quel projet intéressant."
  }
};

let currentLang = 'en';

function setLang(lang) {
  currentLang = lang;
  const trans = translations[lang];
  document.getElementById('greeting').textContent = trans.greeting;
  document.getElementById('interests-title').textContent = trans.interestsTitle;
  const interestsList = document.getElementById('interests');
  interestsList.innerHTML = ''; // Clear existing
  trans.interests.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    interestsList.appendChild(li);
  });
  document.getElementById('collab-title').textContent = trans.collabTitle;
  document.getElementById('collab').textContent = trans.collab;
}

function toggleTheme() {
  const body = document.getElementById('body');
  body.classList.toggle('light');
  body.classList.toggle('dark');
}

// Initialize with user preference or default to light
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.getElementById('body').classList.add('dark');
} else {
  document.getElementById('body').classList.add('light');
}
