(function () {
  const scripts = [
    "assets/app/core/config/app.config.js",
    "assets/app/core/config/mail-templates.js",
    "assets/app/core/i18n/translations.js",
    "assets/app/shared/dom/dom.helpers.js",
    "assets/app/core/services/mail.service.js",
    "assets/app/core/services/i18n.service.js",
    "assets/app/features/contact-actions/contact-actions.component.js",
    "assets/app/features/language-switch/language-switch.component.js",
    "assets/app/features/remark/remark.component.js",
    "assets/app/app.bootstrap.js"
  ];

  function loadScript(index) {
    if (index >= scripts.length) {
      return;
    }

    const script = document.createElement("script");
    script.src = scripts[index];
    script.onload = () => loadScript(index + 1);
    script.onerror = () => {
      throw new Error(`Unable to load script: ${scripts[index]}`);
    };

    document.head.appendChild(script);
  }

  loadScript(0);
})();
