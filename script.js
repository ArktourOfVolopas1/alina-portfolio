document.addEventListener("DOMContentLoaded", () => { const revealElements = document.querySelectorAll( ".section, .project-card, .project-placeholder, .interest-card, .skill-card, .timeline-item, .contact-card" );
if ("IntersectionObserver" in window) {
    revealElements.forEach((element) => {
        element.classList.add("will-reveal");
    });

    const observer = new IntersectionObserver(
        (entries, currentObserver) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    currentObserver.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.1
        }
    );

    revealElements.forEach((element) => {
        observer.observe(element);
    });
}

const externalLinks = document.querySelectorAll(
    'a[target="_blank"]'
);

externalLinks.forEach((link) => {
    link.setAttribute("rel", "noopener noreferrer");
});

const emailLink = document.querySelector(
    'a[href="mailto:dzurdz.way05@mail.ru"]'
);

if (emailLink && navigator.clipboard) {
    const copyButton = document.createElement("button");

    copyButton.type = "button";
    copyButton.textContent = "Скопировать почту";
    copyButton.classList.add("copy-email-button");

    copyButton.addEventListener("click", async () => {
        try {
            await navigator.clipboard.writeText(
                "dzurdz.way05@mail.ru"
            );

            copyButton.textContent = "Скопировано!";

            setTimeout(() => {
                copyButton.textContent = "Скопировать почту";
            }, 2000);
        } catch (error) {
            copyButton.textContent = "Не удалось скопировать";
        }
    });

    emailLink.insertAdjacentElement("afterend", copyButton);
}
});