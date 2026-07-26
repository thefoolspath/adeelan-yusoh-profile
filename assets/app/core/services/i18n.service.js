window.PortfolioApp = window.PortfolioApp || {};

window.PortfolioApp.i18nService = (function () {
  const { all } = window.PortfolioApp.dom;
  const { defaultLanguage, storageKeys } = window.PortfolioApp.config;
  const translations = window.PortfolioApp.translations;

  function getStoredLanguage() {
    return localStorage.getItem(storageKeys.language) || defaultLanguage;
  }

  function normalizeLanguage(language) {
    return translations[language] ? language : defaultLanguage;
  }

  function applyLanguage(language) {
    const selectedLanguage = normalizeLanguage(language);

    document.documentElement.lang = selectedLanguage === "th" ? "th" : "en";

    all("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;
      const value = translations[selectedLanguage][key];

      if (value) {
        element.textContent = value;
      }
    });

    all("[data-language-option]").forEach((button) => {
      const isActive = button.dataset.languageOption === selectedLanguage;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    localStorage.setItem(storageKeys.language, selectedLanguage);
  }

  return {
    applyLanguage,
    getStoredLanguage
  };
})();
