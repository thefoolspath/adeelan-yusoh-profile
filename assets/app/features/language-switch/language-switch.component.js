window.PortfolioApp = window.PortfolioApp || {};

window.PortfolioApp.languageSwitchComponent = (function () {
  const { all } = window.PortfolioApp.dom;
  const { applyLanguage, getStoredLanguage } = window.PortfolioApp.i18nService;

  function init() {
    all("[data-language-option]").forEach((button) => {
      button.addEventListener("click", () => {
        applyLanguage(button.dataset.languageOption);
      });
    });

    applyLanguage(getStoredLanguage());
  }

  return {
    init
  };
})();
