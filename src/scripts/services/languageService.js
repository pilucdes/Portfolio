export class LanguageService {

    #i18n;
    #supportedLanguages;


    constructor(i18n, supportedLanguages) {
        this.#i18n = i18n;
        this.#supportedLanguages=supportedLanguages;

    }

    async initialize() {
        await this.#i18n.initialize(this.#supportedLanguages);
        this.translateUI();
        this.setupLanguageToggle();
    }

    translateUI() {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            element.textContent = this.#i18n.translate(key);
        });
    }

    setupLanguageToggle() {

        const toggleButton = document.getElementById('language-toggle');

        if (!toggleButton)
            return;

        toggleButton.addEventListener('click', () => {
            const newLocale = this.#i18n.currentLocale === 'en' ? 'fr' : 'en';
            this.#i18n.setLocale(newLocale);
            this.translateUI();
        });

    }
}