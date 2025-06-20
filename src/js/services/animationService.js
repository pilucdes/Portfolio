export class AnimationService {
    initialize(){
        this.setupObserver();
    }
    setupObserver() {

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    observer.unobserve(entry.target);
                }
            });
        });

        const fadeElements = document.querySelectorAll('.fade-in');
        fadeElements.forEach(element => observer.observe(element));
    }
}