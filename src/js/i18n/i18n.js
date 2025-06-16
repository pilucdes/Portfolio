export class I18n {
    constructor(defaultLocale) {
        this.currentLocale = defaultLocale;
        this.translations = {};
    }

    async init(locales = ['en','fr']) {
        try {
            await Promise.all(
                locales.map(locale => this.loadTranslations(locale))
            );
        } catch (error) {
            console.error('Failed to initialize translations:', error);
            throw error;
        }
    }

    setLocale(locale) {
        this.currentLocale = locale;
    }

    async loadTranslations(locale) {
        try {
            const response = await fetch(`js/i18n/resources/${locale}.json`);
            this.translations[locale] = await response.json();
        } catch (error) {
            console.error(`Error loading translations for ${locale}:`, error);
            throw error;
        }
    }

    translate(key, fallbackValue = null) {
        const currentTranslations = this.translations[this.currentLocale];

        if (currentTranslations && currentTranslations[key]) {
            return currentTranslations[key];
        }

        return fallbackValue || key;
    }

}