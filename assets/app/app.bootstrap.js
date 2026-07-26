window.PortfolioApp = window.PortfolioApp || {};

window.PortfolioApp.bootstrap = function bootstrap() {
  window.PortfolioApp.contactActionsComponent.init();
  window.PortfolioApp.languageSwitchComponent.init();
  window.PortfolioApp.remarkComponent.init();
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", window.PortfolioApp.bootstrap);
} else {
  window.PortfolioApp.bootstrap();
}
