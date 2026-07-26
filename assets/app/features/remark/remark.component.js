window.PortfolioApp = window.PortfolioApp || {};

window.PortfolioApp.remarkComponent = (function () {
  const { all, one } = window.PortfolioApp.dom;

  function init() {
    const remark = one("#portfolioRemark");

    if (!remark) {
      return;
    }

    all("[data-close-remark]", remark).forEach((button) => {
      button.addEventListener("click", () => {
        remark.hidden = true;
      });
    });
  }

  return {
    init
  };
})();
