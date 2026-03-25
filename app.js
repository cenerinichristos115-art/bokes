const revealNodes = document.querySelectorAll(
  ".hero-copy, .hero-panel, .glass-card, .work-card, .timeline-item, .contact-panel"
);

revealNodes.forEach((node) => node.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

revealNodes.forEach((node) => observer.observe(node));
