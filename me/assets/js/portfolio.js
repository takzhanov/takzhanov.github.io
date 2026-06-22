const translations = {
  ru: {
    title: "Yury Takzhanov | Senior Java Backend Engineer",
    description:
      "Yury Takzhanov — Senior Java Backend Engineer с 15+ годами опыта, открыт к релокации в ЕС.",
    header: {
      logo: "Yury Takzhanov",
      role: "Senior Java Backend Engineer",
    },
    menu: {
      experience: "Опыт",
      skills: "Стек",
      resume: "Резюме",
      contact: "Контакты",
    },
    hero: {
      kicker: "Senior engineer · Hands-on leadership",
      name: "Юрий Такжанов",
      role: "Senior Java Backend Engineer",
      lead:
        "Backend-системы и поэтапная модернизация бизнес-критичного legacy без остановки продуктового развития.",
      location: "Ереван, Армения",
      availability: "Открыт к релокации в ЕС · приоритет Франция / Германия",
      ctaResume: "Резюме и контакты",
    },
    metrics: {
      experience: "лет в backend-разработке",
      audience: "MAU продукта Wink",
      load: "на макрорегион",
      modernization: "поэтапная модернизация",
    },
    profile: {
      title: "Профиль",
      body:
        "Развиваю бизнес-критичные backend-системы без остановки продуктового развития. Зона ответственности охватывает бизнес-логику и интеграции, модернизацию runtime и данных, а также надежность production-систем. Принимаю технические решения и отвечаю за их реализацию в production.",
      target:
        "Ищу hands-on Senior Java Engineer роль с инженерным ростом. Интересны продуктовые backend/platform команды с сильной культурой, умеренной нагрузкой и релокацией в ЕС.",
    },
    skills: {
      title: "Стек",
      backend: "Backend",
      systems: "Системы",
      data: "Данные",
      delivery: "Поставка",
      observability: "Наблюдаемость",
    },
    experience: {
      title: "Опыт",
      e1h: "Senior Java Developer / Team Lead",
      e1company: "Рестрим Медиа · Wink",
      e1date: "2016 — настоящее время",
      e1b:
        "Отвечал за backend подписок, покупок и интеграций Wink с аудиторией около 10 млн пользователей в месяц. Каждый макрорегион обрабатывал около 300 RPS и хранил около 2 ТБ данных.",
      e2h: "Senior Java Developer · AT Consulting",
      e2b:
        "Retail/Telecom проекты: движок скидок, API-интеграции, расчет бизнес-показателей, системы знаний контакт-центра.",
      e3h: "Опыт разработки · Icicall / Intellectika / AuditNT",
      e3b:
        "Ранний этап карьеры: enterprise-разработка, поддержка и развитие корпоративных систем.",
    },
    impact: {
      title: "Ключевой вклад",
      i1: "Реализовал новые способы покупки и подписки, развил интеграционные потоки и выделил B2B-функциональность в отдельный подпроект.",
      i2: "Спроектировал и создал сервисы авторизации и API gateway для основного продукта.",
      i3: "Вел поэтапную модернизацию с Java 6 до Java 21 и Spring Boot 3.5 без остановки продуктового развития.",
      i4: "Заменил Oracle-скрипты управляемыми Liquibase-миграциями; оптимизировал SQL и переработал DAO-слой.",
      i5: "Развил NSQ event flows с типизированными сообщениями, дедупликацией и persisted outbox.",
      i6: "Добавил Actuator, Prometheus/Micrometer, readiness, трассировку и тесты с Oracle Testcontainers.",
      i7: "Определял технические решения для команды из пяти инженеров, провел около 20 собеседований и нанял пять инженеров.",
    },
    resume: {
      title: "Резюме",
      body: "Одностраничное CV доступно на английском и русском языках.",
      en: "English CV",
      ru: "Русское CV",
      preview: "Открыть English CV",
    },
    footer: { text: "Yury Takzhanov · Senior Java Backend Engineer · " },
  },
  en: {
    title: "Yury Takzhanov | Senior Java Backend Engineer",
    description:
      "Yury Takzhanov — Senior Java Backend Engineer with 15+ years of experience, open to EU relocation.",
    header: {
      logo: "Yury Takzhanov",
      role: "Senior Java Backend Engineer",
    },
    menu: {
      experience: "Experience",
      skills: "Skills",
      resume: "Resume",
      contact: "Contact",
    },
    hero: {
      kicker: "Senior engineer · Hands-on leadership",
      name: "Yury Takzhanov",
      role: "Senior Java Backend Engineer",
      lead:
        "Backend systems and incremental modernization of business-critical legacy without stopping product delivery.",
      location: "Yerevan, Armenia",
      availability: "Open to EU relocation · priority France / Germany",
      ctaResume: "Resume and contact",
    },
    metrics: {
      experience: "years in backend engineering",
      audience: "Wink monthly users",
      load: "per macro-region",
      modernization: "incremental modernization",
    },
    profile: {
      title: "Profile",
      body:
        "I evolve business-critical backend systems while continuing product delivery. My work spans business logic and integrations, runtime and data modernization, and production reliability. I own technical decisions from design through production.",
      target:
        "Targeting a hands-on Senior Java Engineer role with a technical growth path. Interested in product backend or platform teams with a strong engineering culture and relocation opportunities within the EU.",
    },
    skills: {
      title: "Skills",
      backend: "Backend",
      systems: "Systems",
      data: "Data",
      delivery: "Delivery",
      observability: "Observability",
    },
    experience: {
      title: "Experience",
      e1h: "Senior Java Developer / Team Lead",
      e1company: "Restream Media · Wink",
      e1date: "2016 — Present",
      e1b:
        "At Wink, I owned backend areas for subscriptions, purchases, and integrations, serving around 10M monthly users. Each macro-regional deployment handled around 300 RPS and stored around 2 TB of data.",
      e2h: "Senior Java Developer · AT Consulting",
      e2b:
        "Retail/Telecom systems: discount engine, API integrations, business KPI calculations, and knowledge management platforms.",
      e3h: "Developer Experience · Icicall / Intellectika / AuditNT",
      e3b:
        "Early-career enterprise development: support and evolution of internal business systems.",
    },
    impact: {
      title: "Selected Impact",
      i1: "Delivered new purchase and subscription methods, evolved integration flows, and separated B2B functionality into a dedicated subproject.",
      i2: "Designed and built authorization and API gateway services for the core product.",
      i3: "Drove incremental modernization from Java 6 to Java 21 and Spring Boot 3.5 while continuing product delivery.",
      i4: "Replaced ad hoc Oracle scripts with managed Liquibase migrations; optimized SQL and refactored the DAO layer.",
      i5: "Evolved NSQ event flows with typed messages, deduplication, and a persisted outbox.",
      i6: "Added Actuator, Prometheus/Micrometer, readiness checks, request tracing, and Oracle Testcontainers tests.",
      i7: "Provided technical direction for a five-engineer team, interviewed around 20 candidates, and hired five engineers.",
    },
    resume: {
      title: "Resume",
      body: "A focused one-page CV is available in English and Russian.",
      en: "English CV",
      ru: "Russian CV",
      preview: "Open English CV",
    },
    footer: { text: "Yury Takzhanov · Senior Java Backend Engineer · " },
  },
};

const RELEASE_DEFAULT_LANG = "en";
const DEV_DEFAULT_LANG = "en";
const isDev =
  location.protocol === "file:" ||
  location.hostname === "localhost" ||
  location.hostname === "127.0.0.1";
const defaultLang = isDev ? DEV_DEFAULT_LANG : RELEASE_DEFAULT_LANG;
const allowedLangs = ["ru", "en"];

function byPath(obj, path) {
  return path.split(".").reduce((acc, part) => (acc ? acc[part] : undefined), obj);
}

function getSavedLang() {
  try {
    return localStorage.getItem("portfolio-lang");
  } catch {
    return null;
  }
}

function saveLang(lang) {
  try {
    localStorage.setItem("portfolio-lang", lang);
  } catch {
    // Storage can be unavailable for local file URLs.
  }
}

function updateUrlLang(lang) {
  try {
    const url = new URL(window.location.href);
    url.searchParams.set("lang", lang);
    window.history.replaceState({}, "", url.toString());
  } catch {
    // Some browsers do not allow history changes for local file URLs.
  }
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

  saveLang(lang);
  updateUrlLang(lang);
}

const urlLang = new URL(window.location.href).searchParams.get("lang");
const savedLang = getSavedLang();
const initialLang = allowedLangs.includes(urlLang)
  ? urlLang
  : allowedLangs.includes(savedLang)
  ? savedLang
  : defaultLang;

applyLang(initialLang);

document.querySelectorAll("[data-lang-btn]").forEach((button) => {
  button.addEventListener("click", () => applyLang(button.getAttribute("data-lang-btn")));
});

const labsSequence = "labs";
let typedSequence = "";

document.addEventListener("keydown", (event) => {
  if (event.ctrlKey || event.metaKey || event.altKey || event.key.length !== 1) {
    return;
  }

  const target = event.target;
  if (target instanceof Element && target.closest("input, textarea, [contenteditable='true']")) {
    return;
  }

  typedSequence = `${typedSequence}${event.key.toLowerCase()}`.slice(-labsSequence.length);
  if (typedSequence === labsSequence) {
    window.location.assign(new URL("../labs/", window.location.href));
  }
});

document.getElementById("year").textContent = new Date().getFullYear();
