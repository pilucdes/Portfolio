import { AnimationService } from "./services/animationService.ts";

class App {
    constructor(private animationSvc: AnimationService) {}

    public initialize(): void {
        this.animationSvc.initialize();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    try {
        const animationSvc = new AnimationService();
        const app = new App(animationSvc);

        app.initialize();

    } catch (error: unknown) {
        console.error('Failed to initialize the application:', error);
    }
});