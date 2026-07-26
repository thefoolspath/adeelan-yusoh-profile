window.PortfolioApp = window.PortfolioApp || {};

window.PortfolioApp.dom = {
  all(selector, root = document) {
    return Array.from(root.querySelectorAll(selector));
  },

  one(selector, root = document) {
    return root.querySelector(selector);
  }
};
