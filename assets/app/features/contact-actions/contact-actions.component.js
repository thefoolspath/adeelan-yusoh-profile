window.PortfolioApp = window.PortfolioApp || {};

window.PortfolioApp.contactActionsComponent = (function () {
  const { all } = window.PortfolioApp.dom;
  const { buildMailto } = window.PortfolioApp.mailService;

  function init() {
    all(".mail-link").forEach((link) => {
      link.href = buildMailto("general");
    });

    all(".request-resume-link").forEach((link) => {
      link.href = buildMailto("resume");
    });
  }

  return {
    init
  };
})();
