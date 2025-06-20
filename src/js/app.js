import {LanguageService} from "./services/languageService.js";
import {AnimationService} from "./services/animationService.js";
import {I18n} from "./i18n/i18n.js";

const defaultLanguage = navigator.language.includes('fr') ? 'fr' : 'en';
const supportedLanguages = Object.freeze(['en', 'fr']);

class App {

    constructor(languageService, animationService) {
        this.languageSvc = languageService;
        this.animationSvc = animationService;
    }

    async initialize(){
        await this.languageSvc.initialize();
        this.animationSvc.initialize();
    }

}

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const i18n = new I18n(defaultLanguage);
        const languageSvc = new LanguageService(i18n,supportedLanguages);
        const animationSvc = new AnimationService();

        const app = new App(languageSvc, animationSvc);
        await app.initialize();

    } catch (error) {
        console.error('Failed to initialize the application:', error);
    }
});