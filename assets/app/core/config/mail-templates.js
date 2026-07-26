window.PortfolioApp = window.PortfolioApp || {};

window.PortfolioApp.mailTemplates = {
  general: {
    subject: "Portfolio Contact - Adeelan Yusoh",
    body: [
      "Hello Adeelan,",
      "",
      "My name is ..... from Company .....",
      "I found your portfolio and would like to contact you about .....",
      "",
      "Role/Position: .....",
      "Company: .....",
      "Contact: .....",
      "",
      "Thank you."
    ].join("\n")
  },
  resume: {
    subject: "Request Resume / CV - Adeelan Yusoh",
    body: [
      "Hello Adeelan,",
      "",
      "My name is ..... from Company .....",
      "I found your portfolio and would like to request your latest resume/CV for a potential opportunity.",
      "",
      "Role/Position: .....",
      "Company: .....",
      "Contact: .....",
      "Additional details: .....",
      "",
      "Thank you."
    ].join("\n")
  }
};
