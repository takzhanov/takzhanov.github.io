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
        "Backend-сервисы на Java, интеграции и поэтапная модернизация существующих систем.",
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
        "Senior Java Backend Engineer с опытом более 15 лет в телекоммуникациях, стриминговых сервисах и retail. Создаю сервисы на Java и Spring Boot, интегрирую системы и повышаю их надежность в production. Модернизирую существующие системы, продолжая выпускать новые функции.",
      target:
        "Ищу hands-on Senior Java Engineer роль с инженерным ростом. Интересны продуктовые backend/platform команды с сильной культурой, умеренной нагрузкой и релокацией в ЕС.",
    },
    skills: {
      title: "Стек",
      backend: "Backend",
      systems: "Системы",
      messaging: "Сообщения",
      messagingBody: "NSQ · Apache Kafka",
      data: "Данные",
      delivery: "Поставка",
      testing: "Тестирование",
      observability: "Мониторинг",
    },
    experience: {
      title: "Опыт",
      e1h: "Senior Java Developer / Team Lead",
      e1company: "Рестрим Медиа · Wink",
      e1date: "2016 — настоящее время",
      e1b:
        "Отвечал за сервисы подписок, покупок и интеграций Wink с аудиторией около 10 млн пользователей в месяц. Каждое региональное развертывание обрабатывало около 300 запросов в секунду и хранило около 2 ТБ данных.",
      e2h: "Senior Java Developer · AT Consulting",
      e2b:
        "Retail/Telecom проекты: движок скидок, API-интеграции, расчет бизнес-показателей, системы знаний контакт-центра.",
      e3h: "Разработчик ПО · Icicall / Intellectika / AuditNT",
      e3b:
        "Разработка и поддержка внутренних бизнес-систем.",
    },
    impact: {
      title: "Ключевой вклад",
      i1: "Реализовал новые способы покупки и подписки, развил интеграционные потоки и выделил B2B-функциональность в отдельный подпроект.",
      i2: "Спроектировал и создал сервисы авторизации и API gateway для основного продукта.",
      i3: "Вел поэтапную модернизацию с Java 6 до Java 21 и Spring Boot 3.5 без остановки продуктового развития.",
      i4: "Заменил ручные Oracle-скрипты версионируемыми Liquibase-миграциями с проверками и поддержкой rollback. Оптимизировал SQL и переработал слой доступа к данным.",
      i5: "Улучшил обмен сообщениями через NSQ: типизированные сообщения, дедупликация и persistent outbox.",
      i6: "Добавил Actuator, Prometheus/Micrometer, readiness, трассировку и тесты с Oracle Testcontainers.",
      i7: "Вел техническую работу команды из пяти инженеров. Провел около 20 собеседований и нанял пять инженеров.",
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
        "Java backend services, system integrations and step-by-step upgrades of existing systems.",
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
        "Senior Java Backend Engineer with 15+ years of experience in telecom, streaming media and retail. I build Java and Spring Boot services, integrate systems and improve production reliability. I modernize existing systems while delivering new features.",
      target:
        "Looking for a Senior Java Engineer role where I can write code and grow as an engineer. Interested in backend or platform teams that value code quality, testing and reliable systems. Open to relocation within the EU.",
    },
    skills: {
      title: "Skills",
      backend: "Backend",
      systems: "Systems",
      messaging: "Messaging",
      messagingBody: "NSQ · Apache Kafka",
      data: "Data",
      delivery: "Delivery",
      testing: "Testing",
      observability: "Monitoring",
    },
    experience: {
      title: "Experience",
      e1h: "Senior Java Developer / Team Lead",
      e1company: "Restream Media · Wink",
      e1date: "2016 — Present",
      e1b:
        "Responsible for subscription, purchase and integration services for Wink, a streaming platform with about 10 million monthly users. Each regional deployment handled about 300 requests per second and stored about 2 TB of data.",
      e2h: "Senior Java Developer · AT Consulting",
      e2b:
        "Built discount calculation services and APIs for retail products, business KPI services for telecom systems and contact center knowledge management features.",
      e3h: "Software Developer · Icicall / Intellectika / AuditNT",
      e3b:
        "Developed and supported internal business systems.",
    },
    impact: {
      title: "Selected work",
      i1: "Added new purchase and subscription options and improved integrations. Moved B2B features into a separate project.",
      i2: "Designed and built authorization and API gateway services for the core product.",
      i3: "Upgraded backend systems from Java 6 to Java 21 and Spring Boot 3.5 in stages, while continuing to deliver product features.",
      i4: "Replaced manual Oracle database scripts with versioned Liquibase migrations, including validation and rollback support. Optimized SQL queries and improved the data access layer.",
      i5: "Improved NSQ messaging with typed messages, deduplication and a persistent outbox.",
      i6: "Added Spring Boot Actuator, Prometheus and Micrometer metrics, readiness checks and request tracing. Added integration tests using Oracle Testcontainers.",
      i7: "Led technical work for a team of five engineers. Interviewed about 20 candidates and hired five engineers.",
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
