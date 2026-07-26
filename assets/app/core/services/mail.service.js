window.PortfolioApp = window.PortfolioApp || {};

window.PortfolioApp.mailService = (function () {
  const { email } = window.PortfolioApp.config;
  const templates = window.PortfolioApp.mailTemplates;

  function buildMailto(templateName) {
    const template = templates[templateName];
    const subject = encodeURIComponent(template.subject);
    const body = encodeURIComponent(template.body);

    return `mailto:${email}?subject=${subject}&body=${body}`;
  }

  return {
    buildMailto
  };
})();
