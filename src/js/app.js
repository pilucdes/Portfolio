import {I18n} from './i18n/i18n.js';

class App {

    static #supported_languages = Object.freeze(['en', 'fr']);

    constructor() {
        const defaultLanguage = navigator.language.includes('fr') ? 'fr' : 'en';
        this.i18n = new I18n(defaultLanguage);
    }

    static async bootstrap() {

        const app = new App();
        await app.i18n.init(this.#supported_languages);
        return app;

    }

    translateUI() {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            element.textContent = this.i18n.translate(key);
        });
    }

    setupLanguageToggle() {

        const toggleButton = document.getElementById('language-toggle');

        if (!toggleButton)
            return;

        toggleButton.addEventListener('click', () => {
            const newLocale = this.i18n.currentLocale === 'en' ? 'fr' : 'en';
            this.i18n.setLocale(newLocale);
            this.translateUI();
        });

    }

    initializeUI() {
        this.translateUI();
        this.setupLanguageToggle();
    }

}

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const app = await App.bootstrap();
        app.initializeUI();
    } catch (error) {
        console.error('Failed to initialize the application:', error);
    }
});