const themeToggle = document.getElementById("theme-toggle");
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");
const yearElement = document.getElementById("year");
const coverScreen = document.getElementById("coverScreen");
const enterBtn = document.getElementById("enterBtn");
const coverTitle = document.getElementById("coverTitle");
const scrollProgress = document.getElementById("scroll-progress");
const projectModal = document.getElementById("project-modal");
const modalClose = document.getElementById("modal-close");
const modalTitle = document.getElementById("modal-title");
const modalSummary = document.getElementById("modal-summary");
const modalFocus = document.getElementById("modal-focus");
const modalOutcome = document.getElementById("modal-outcome");
const modalTech = document.getElementById("modal-tech");
const achievementTrigger = document.getElementById("achievement-trigger");
const achievementModal = document.getElementById("achievement-modal");
const achievementModalClose = document.getElementById("achievement-modal-close");

const projectDetails = {
  elite: {
    title: "ELITE EXHAUST CARE",
    summary: "LPG Leakage and Smoke Detection Safety System",
    focus: "Designed and developed an IoT-based Smart Kitchen Safety Monitoring System.",
    outcome: "Monitored LPG gas leakage, fire, smoke, and abnormal temperature levels with buzzer and cloud-based notifications.",
    technologies: ["ESP3266", "Embedded C", "Micro Python", "MQ-2 Gas Sensor", "Flame Sensor", "Temperature Sensor", "Blynk", "Firebase", "Arduino IDE"]
  },
  crm: {
    title: "CRM Application for Jewel Management",
    summary: "A Customer Relationship Management application developed using the Salesforce platform.",
    focus: "Managed customer information and sales records through organized data handling.",
    outcome: "Designed reports and dashboards to provide business insights and support customer relationship management.",
    technologies: ["Salesforce CRM", "Reports & Dashboards", "Data Management"]
  }
};

const closeModal = (modal) => {
  if (!modal) {
    return;
  }

  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
};

document.querySelectorAll("[data-project]").forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const details = projectDetails[trigger.dataset.project];

    if (!details || !projectModal) {
      return;
    }

    modalTitle.textContent = details.title;
    modalSummary.textContent = details.summary;
    modalFocus.textContent = details.focus;
    modalOutcome.textContent = details.outcome;
    modalTech.innerHTML = details.technologies
      .map((technology) => `<span>${technology}</span>`)
      .join("");
    projectModal.classList.add("is-open");
    projectModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    modalClose.focus();
  });
});

if (modalClose) {
  modalClose.addEventListener("click", () => closeModal(projectModal));
}

if (projectModal) {
  projectModal.addEventListener("click", (event) => {
    if (event.target === projectModal) {
      closeModal(projectModal);
    }
  });
}

if (achievementTrigger && achievementModal) {
  achievementTrigger.addEventListener("click", () => {
    achievementModal.classList.add("is-open");
    achievementModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    achievementModalClose.focus();
  });
}

if (achievementModalClose) {
  achievementModalClose.addEventListener("click", () => closeModal(achievementModal));
}

if (achievementModal) {
  achievementModal.addEventListener("click", (event) => {
    if (event.target === achievementModal) {
      closeModal(achievementModal);
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal(projectModal);
    closeModal(achievementModal);
  }
});

// Set current year
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const updateScrollProgress = () => {
  if (!scrollProgress) {
    return;
  }

  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;
  scrollProgress.style.width = `${Math.min(progress, 100)}%`;
};

window.addEventListener("scroll", updateScrollProgress, { passive: true });
window.addEventListener("resize", updateScrollProgress);
updateScrollProgress();
window.addEventListener("load", updateScrollProgress);
window.setTimeout(updateScrollProgress, 100);

// Intro cover interaction
const isTouchDevice = window.matchMedia("(pointer: coarse)").matches || navigator.maxTouchPoints > 0;

if (isTouchDevice) {
  document.body.classList.add("touch-device");
}

const revealPortfolio = () => {
  document.body.classList.add("loaded");
};

if (enterBtn) {
  enterBtn.addEventListener("click", revealPortfolio);
}

if (coverScreen) {
  coverScreen.addEventListener("click", (event) => {
    if (event.target === coverScreen) {
      revealPortfolio();
    }
  });
}

if (coverTitle) {
  const updateCoverTitleGlow = (event) => {
    const bounds = coverTitle.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;

    coverTitle.style.setProperty("--title-glow-x", `${Math.max(0, Math.min(100, x))}%`);
    coverTitle.style.setProperty("--title-glow-y", `${Math.max(0, Math.min(100, y))}%`);
    coverTitle.classList.add("is-interactive");
  };

  coverTitle.addEventListener("pointermove", updateCoverTitleGlow);
  coverTitle.addEventListener("pointerenter", updateCoverTitleGlow);
  coverTitle.addEventListener("pointerleave", () => {
    coverTitle.classList.remove("is-interactive");
  });
  coverTitle.addEventListener("pointerdown", (event) => {
    updateCoverTitleGlow(event);

    if (isTouchDevice) {
      window.setTimeout(() => coverTitle.classList.remove("is-interactive"), 700);
    }
  }, { passive: true });
}

// Theme Toggle
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const icon = themeToggle.querySelector("i");

    if (document.body.classList.contains("dark-mode")) {
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
      localStorage.setItem("theme", "dark");
    } else {
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
      localStorage.setItem("theme", "light");
    }
  });
}

// Load saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");

  if (themeToggle) {
    const icon = themeToggle.querySelector("i");
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  }
}

// Mobile Menu Toggle
if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");

    const icon = menuToggle.querySelector("i");

    if (navbar.classList.contains("active")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-xmark");
    } else {
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
    }
  });
}

// Close mobile menu after clicking a link
document.querySelectorAll(".navbar a").forEach((link) => {
  link.addEventListener("click", () => {
    if (navbar) {
      navbar.classList.remove("active");
    }

    if (menuToggle) {
      const icon = menuToggle.querySelector("i");
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
    }
  });
});

// Contact Form
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      formMessage.textContent = "Please fill in all fields.";
      return;
    }

    formMessage.textContent = "Thank you! Your message has been prepared successfully.";

    const mailSubject = encodeURIComponent("Portfolio Contact Message");
    const mailBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href =
      `mailto:asinfathima2705@gmail.com?subject=${mailSubject}&body=${mailBody}`;

    contactForm.reset();
  });
}

const cursorDot = document.querySelector(".cursor-dot");
const cursorRing = document.querySelector(".cursor-ring");
let lastGlitterTime = 0;

const createGlitter = (x, y) => {
  const now = performance.now();

  if (now - lastGlitterTime < (isTouchDevice ? 24 : 35)) {
    return;
  }

  const particleCount = isTouchDevice ? 2 : 1;

  for (let index = 0; index < particleCount; index += 1) {
    const particle = document.createElement("span");
    const size = `${(2 + Math.random() * (isTouchDevice ? 5 : 4)).toFixed(2)}px`;
    const brightness = (0.45 + Math.random() * 0.5).toFixed(2);
    const driftRange = isTouchDevice ? 46 : 34;
    const driftX = `${Math.round((Math.random() - 0.5) * driftRange)}px`;
    const driftY = `${Math.round((Math.random() - 0.5) * driftRange)}px`;

    particle.className = `glitter-particle${isTouchDevice ? " touch-glitter" : ""}`;
    const particleX = Math.min(Math.max(x + (Math.random() - 0.5) * 8, 4), window.innerWidth - 4);
    const particleY = Math.min(Math.max(y + (Math.random() - 0.5) * 8, 4), window.innerHeight - 4);

    particle.style.left = `${particleX}px`;
    particle.style.top = `${particleY}px`;
    particle.style.width = size;
    particle.style.height = size;
    particle.style.setProperty("--brightness", brightness);
    particle.style.setProperty("--drift-x", driftX);
    particle.style.setProperty("--drift-y", driftY);
    document.body.appendChild(particle);

    window.setTimeout(() => particle.remove(), isTouchDevice ? 1100 : 800);
  }

  lastGlitterTime = now;
};

window.addEventListener("pointermove", (event) => {
  createGlitter(event.clientX, event.clientY);

  if (!isTouchDevice && cursorDot && cursorRing) {
    cursorDot.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
  }

  if (!isTouchDevice && event.target instanceof Element) {
    const projectCard = event.target.closest(".project-card");

    if (projectCard) {
      const bounds = projectCard.getBoundingClientRect();
      projectCard.style.setProperty("--spotlight-x", `${event.clientX - bounds.left}px`);
      projectCard.style.setProperty("--spotlight-y", `${event.clientY - bounds.top}px`);
    }
  }
});

window.addEventListener(
  "pointerdown",
  (event) => {
    if (isTouchDevice) {
      createGlitter(event.clientX, event.clientY);
    }
  },
  { passive: true }
);

if (!isTouchDevice && cursorDot && cursorRing) {
  const state = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
    ringX: window.innerWidth / 2,
    ringY: window.innerHeight / 2
  };

  window.addEventListener("pointermove", (event) => {
    state.x = event.clientX;
    state.y = event.clientY;
  });

  const animateCursor = () => {
    state.ringX += (state.x - state.ringX) * 0.18;
    state.ringY += (state.y - state.ringY) * 0.18;
    cursorRing.style.transform = `translate(${state.ringX - 19}px, ${state.ringY - 19}px)`;
    requestAnimationFrame(animateCursor);
  };

  requestAnimationFrame(animateCursor);

  document.addEventListener("pointerdown", () => {
    cursorRing.classList.add("active");
  });

  document.addEventListener("pointerup", () => {
    cursorRing.classList.remove("active");
  });
}

// Reveal sections as they enter the viewport
const revealSections = document.querySelectorAll(".section");
const navigationLinks = document.querySelectorAll(".navbar a");

if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        const activeLink = document.querySelector(`.navbar a[href="#${entry.target.id}"]`);
        navigationLinks.forEach((link) => link.classList.remove("active"));
        if (activeLink) {
          activeLink.classList.add("active");
        }
        entry.target.querySelectorAll(".timeline-item").forEach((item, index) => {
          window.setTimeout(() => item.classList.add("is-visible"), index * 120);
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealSections.forEach((section) => {
    section.classList.add("reveal-ready");
    sectionObserver.observe(section);
  });
} else {
  revealSections.forEach((section) => {
    section.classList.add("is-visible");
  });
}