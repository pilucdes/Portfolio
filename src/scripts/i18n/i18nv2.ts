// The outer Record's key is the locale string (e.g., 'en'), 
// and its value is the dictionary of translations for that locale.
type TranslationSet = Record<string, string>;
type AllTranslations = Record<string, TranslationSet>;

export class I18n {
    // Declare class properties with their types
    public currentLocale: string;
    private translations: AllTranslations;

    constructor(defaultLocale: string) {
        this.currentLocale = defaultLocale;
        this.translations = {};
    }

    /**
     * Loads translation files for all specified locales.
     */
    public async initialize(locales: readonly string[]): Promise<void> {
        await Promise.all(
            locales.map(locale => this.loadTranslations(locale))
        );
    }

    /**
     * Sets the active locale.
     */
    public setLocale(locale: string): void {
        this.currentLocale = locale;
    }

    /**
     * Fetches and stores the translation JSON for a single locale.
     */
    public async loadTranslations(locale: string): Promise<void> {
        try {
            const response = await fetch(`./i18n/resources/${locale}.json`);
            if (!response.ok) {
                console.error(`Failed to fetch translations for ${locale}. Status: ${response.status}`);
                return;
            }
            this.translations[locale] = await response.json();
        } catch (error) {
            console.error(`Error loading or parsing translations for ${locale}:`, error);
        }
    }

    /**
     * Gets a translation for a given key in the current locale.
     */
    public translate(key: string, fallbackValue: string | null = null): string {
        const currentTranslations = this.translations[this.currentLocale];

        if (currentTranslations && currentTranslations[key]) {
            return currentTranslations[key];
        }

        // Use the nullish coalescing operator (??) to provide the fallback.
        // It returns the right-hand side operand only when the left-hand side is null or undefined.
        return fallbackValue ?? key;
    }
}