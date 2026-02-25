const translations = {
  ru: {
    title: "Yury Takzhanov | Ведущий Java разработчик",
    description:
      "Портфолио Yury Takzhanov: 15+ лет в Java, ключевой опыт, контакты и CV в PDF.",
    header: { logo: "Yury Takzhanov" },
    menu: {
      about: "Обо мне",
      skills: "Стек",
      experience: "Опыт",
      resume: "Резюме",
      contact: "Контакты",
    },
    hero: {
      kicker: "Open to Remote / Relocation",
      title: "Юрий Такжанов<br />Lead Java Engineer",
      lead:
        "Техлид и тимлид с 15+ годами коммерческой разработки. Проектирую и развиваю backend-системы на Java: от новых сервисов до стабилизации сложного legacy.",
      ctaContact: "Связаться",
      ctaResume: "Скачать CV",
    },
    heroCard: {
      title: "Быстрые факты",
      f1v: "15+",
      f1t: "лет в Java разработке",
      f2v: "Tech/Team Lead",
      f2t: "текущая роль на Wink",
      f3v: "Remote / Relocation",
      f3t: "ищу международную роль",
      f4v: "B2",
      f4t: "английский (рабочий)",
    },
    about: {
      title: "Обо мне",
      body:
        "Основная специализация: Java и экосистема вокруг нее. Комбинирую архитектурное мышление с практикой доставки: беру ответственность за код, процессы, качество и развитие команды.",
    },
    goals: {
      title: "Цель",
      body:
        "Ищу роль в зарубежной компании: удаленно или с релокацией. Наиболее интересны продуктовые команды, где ценятся инженерная культура, скорость изменений и предсказуемость поставки.",
    },
    skills: { title: "Ключевой стек" },
    experience: {
      title: "Опыт",
      e1h: "Senior Java Developer / Team Lead, Rostelecom IT (Wink)",
      e1b:
        "Разработка бизнес-функций, интеграций, рефакторинг legacy, повышение покрытия тестами, улучшение процессов ревью и менторинга.",
      e2h: "Senior Java Developer, AT Consulting",
      e2b:
        "Retail/Telecom проекты: движок скидок, API-интеграции, расчет бизнес-показателей, системы знаний контакт-центра.",
      e3h: "Java Developer (Intellectika, Icicall, AuditNT)",
      e3b:
        "Ранний этап карьеры: enterprise-разработка, поддержка и развитие корпоративных систем.",
    },
    impact: {
      title: "Selected Impact",
      i1: "Собирал и запускал бизнес-фичи для стримингового сервиса Wink, включая интеграции с бонусной платформой.",
      i2: "Уменьшал технический долг: упрощал старый код и улучшал стабильность релизов.",
      i3: "Снизил количество срочных hotfix примерно на 30-40% (плейсхолдер, уточнить точную метрику).",
      i4: "Нанимал и развивал инженеров, формировал практики code review и командного взаимодействия.",
    },
    resume: {
      title: "Резюме (PDF)",
      body: "Доступны две версии CV: английская и русская.",
      en: "Скачать CV EN",
      ru: "Скачать CV RU",
    },
    contact: { title: "Контакты" },
    footer: { text: "Личная страница разработчика, " },
  },
  en: {
    title: "Yury Takzhanov | Lead Java Engineer",
    description:
      "Lead Java Engineer portfolio: 15+ years of experience, selected impact and downloadable CV in EN/RU.",
    header: { logo: "Yury Takzhanov" },
    menu: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      resume: "Resume",
      contact: "Contact",
    },
    hero: {
      kicker: "Open to Remote / Relocation",
      title: "Yury Takzhanov<br />Lead Java Engineer",
      lead:
        "Tech Lead and Team Lead with 15+ years in commercial software development. I design and scale Java backend systems, from greenfield services to stabilizing complex legacy platforms.",
      ctaContact: "Contact",
      ctaResume: "Download CV",
    },
    heroCard: {
      title: "At a Glance",
      f1v: "15+",
      f1t: "years in Java engineering",
      f2v: "Tech/Team Lead",
      f2t: "current role on Wink",
      f3v: "Remote / Relocation",
      f3t: "open to international roles",
      f4v: "B2",
      f4t: "working English proficiency",
    },
    about: {
      title: "About",
      body:
        "My core expertise is Java and its surrounding ecosystem. I combine architecture-level thinking with execution: owning code, quality, delivery process, and team growth.",
    },
    goals: {
      title: "Career Goal",
      body:
        "I am targeting an international engineering role, remote or with relocation. I am most effective in product teams where engineering culture, change speed, and delivery predictability matter.",
    },
    skills: { title: "Core Stack" },
    experience: {
      title: "Experience",
      e1h: "Senior Java Developer / Team Lead, Rostelecom IT (Wink)",
      e1b:
        "Implemented business features and integrations, refactored legacy modules, increased test coverage, and improved review and mentoring practices.",
      e2h: "Senior Java Developer, AT Consulting",
      e2b:
        "Retail/Telecom systems: discount engine, API integrations, business KPI calculations, and knowledge management platforms.",
      e3h: "Java Developer (Intellectika, Icicall, AuditNT)",
      e3b:
        "Early-career enterprise development: support and evolution of internal business systems.",
    },
    impact: {
      title: "Selected Impact",
      i1: "Delivered business features for the Wink streaming platform, including bonus platform integration.",
      i2: "Reduced technical debt by simplifying legacy code paths and improving release stability.",
      i3: "Lowered urgent hotfix volume by approximately 30-40% (placeholder, replace with exact KPI).",
      i4: "Hired and developed engineers, and improved code review and team collaboration practices.",
    },
    resume: {
      title: "Resume (PDF)",
      body: "Two CV versions are available: English and Russian.",
      en: "Download CV EN",
      ru: "Download CV RU",
    },
    contact: { title: "Contact" },
    footer: { text: "Personal engineer profile, " },
  },
};

const RELEASE_DEFAULT_LANG = "en";
const DEV_DEFAULT_LANG = "ru";
const isDev =
  location.protocol === "file:" ||
  location.hostname === "localhost" ||
  location.hostname === "127.0.0.1";
const defaultLang = isDev ? DEV_DEFAULT_LANG : RELEASE_DEFAULT_LANG;
const allowedLangs = ["ru", "en"];

function byPath(obj, path) {
  return path.split(".").reduce((acc, part) => (acc ? acc[part] : undefined), obj);
}

function applyLang(lang) {
  const dict = translations[lang];
  document.documentElement.lang = lang;
  document.title = dict.title;
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute("content", dict.description);
  }

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = byPath(dict, key);
    if (typeof value === "string") {
      el.textContent = value;
    }
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.getAttribute("data-i18n-html");
    const value = byPath(dict, key);
    if (typeof value === "string") {
      el.innerHTML = value;
    }
  });

  document.querySelectorAll("[data-lang-btn]").forEach((button) => {
    button.classList.toggle("active", button.getAttribute("data-lang-btn") === lang);
  });

  localStorage.setItem("portfolio-lang", lang);

  const url = new URL(window.location.href);
  url.searchParams.set("lang", lang);
  window.history.replaceState({}, "", url.toString());
}

const urlLang = new URL(window.location.href).searchParams.get("lang");
const savedLang = localStorage.getItem("portfolio-lang");
const initialLang = allowedLangs.includes(urlLang)
  ? urlLang
  : allowedLangs.includes(savedLang)
  ? savedLang
  : defaultLang;

applyLang(initialLang);

document.querySelectorAll("[data-lang-btn]").forEach((button) => {
  button.addEventListener("click", () => applyLang(button.getAttribute("data-lang-btn")));
});

document.getElementById("year").textContent = new Date().getFullYear();

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll("[data-reveal]").forEach((node) => observer.observe(node));