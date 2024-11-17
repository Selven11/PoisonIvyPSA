gsap.registerPlugin(ScrollTrigger);

// Hero animation
gsap.to(".hero-content", {
    opacity: 1,
    y: 0,
    duration: 1.5,
    ease: "power3.out"
});

// Sections animation
gsap.utils.toArray(".section").forEach(section => {
    gsap.to(section, {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse"
        }
    });
});

// Stats cards animation
gsap.utils.toArray(".stat-card").forEach((card, i) => {
    gsap.to(card, {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        delay: i * 0.2,
        scrollTrigger: {
            trigger: card,
            start: "top 80%"
        }
    });
});

// Timeline functionality
const dots = document.querySelectorAll('.timeline-dot');
const labels = document.querySelectorAll('.timeline-label');
const contents = document.querySelectorAll('.timeline-content');
const car = document.querySelector('.car');
const positions = [0, 25, 50, 75, 100]; // Updated percentage positions for 5 stages

function updateTimeline(index) {
    // Update dots
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');

    // Move car
    car.style.left = `${positions[index]}%`;

    // Update content
    contents.forEach(content => {
        content.style.display = 'none';
        content.style.opacity = 0;
    });

    const activeContent = contents[index];
    activeContent.style.display = 'block';

    gsap.to(activeContent, {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out"
    });
}

// Add click events to dots and labels
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => updateTimeline(index));
});

labels.forEach((label, index) => {
    label.addEventListener('click', () => updateTimeline(index));
});