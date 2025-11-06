export class AnimationService {

    private inViewObserver: IntersectionObserver | null = null;

    public initialize(): void {
        this.setupInViewAnimation();
        this.setupAnchorScrollAnimation();
    }

    private setupInViewAnimation(): void {
        this.inViewObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');

                    this.inViewObserver?.unobserve(entry.target);
                }
            });
        });

        const fadeElements = document.querySelectorAll('.fade-in');
        fadeElements.forEach(element => this.inViewObserver?.observe(element));
    }

    private setupAnchorScrollAnimation(): void {
        const anchorLinks = document.querySelectorAll('a[href^="#"]');


        anchorLinks.forEach(link => {
            link.addEventListener('click', (event) => {
                const href = link.getAttribute('href');

                if (!href || href.length <= 1) return;

                const targetElement = document.querySelector(href);

                if (targetElement) {
                    event.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                    });
                }
            });
        });
    }

}
