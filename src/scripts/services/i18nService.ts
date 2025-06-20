import en from '../../locales/en.json';
import fr from '../../locales/fr.json';

const languages = {
    en,
    fr,
};

export const getLangFromUrl = (url: URL) => {
    const [, lang] = url.pathname.split('/');
    if (lang in languages) return lang as keyof typeof languages;
    return 'en';
};

export const useTranslations = (lang: keyof typeof languages) => {
    return function t(key: keyof (typeof languages)[typeof lang]) {
        return languages[lang][key] || languages['en'][key];
    };
};