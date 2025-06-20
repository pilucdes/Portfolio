export class I18n {
    constructor(defaultLocale) {
        this.currentLocale = defaultLocale;
        this.translations = {};
    }

    async initialize(locales) {
        await Promise.all(
            locales.map(locale => this.loadTranslations(locale))
        );
    }

    setLocale(locale) {
        this.currentLocale = locale;
    }

    async loadTranslations(locale) {
        const response = await fetch(`./i18n/resources/${locale}.json`);
        this.translations[locale] = await response.json();
    }

    translate(key, fallbackValue = null) {
        const currentTranslations = this.translations[this.currentLocale];

        if (currentTranslations && currentTranslations[key]) {
            return currentTranslations[key];
        }

        return fallbackValue || key;
    }

}