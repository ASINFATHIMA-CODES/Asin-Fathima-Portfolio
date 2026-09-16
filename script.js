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

const openProjectCaseStudy = (projectKey) => {
  const details = projectDetails[projectKey];

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
};

document.querySelectorAll(".project-card").forEach((projectCard) => {
  projectCard.addEventListener("click", () => {
    openProjectCaseStudy(projectCard.dataset.project);
  });
});

document.querySelectorAll(".project-link[data-project]").forEach((trigger) => {
  trigger.addEventListener("click", (event) => {
    event.stopPropagation();
    openProjectCaseStudy(trigger.dataset.project);
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
const savedTheme = localStorage.getItem("theme");

if (savedTheme !== "light") {
  document.body.classList.add("dark-mode");
}

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

if (themeToggle && document.body.classList.contains("dark-mode")) {
  const icon = themeToggle.querySelector("i");
  icon.classList.remove("fa-moon");
  icon.classList.add("fa-sun");
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
const cursorTrailCanvas = document.getElementById("cursor-trail");
const cursorTrailContext = cursorTrailCanvas ? cursorTrailCanvas.getContext("2d") : null;
const cursorTrailConfig = {
  particleSize: { min: 9, max: 16 },
  particleCount: 1,
  particleFrequency: 72,
  particleLifetime: 650,
  particleSpeed: 0.4,
  glowIntensity: 5,
  particleOpacity: 0.58,
  symbols: ["🦋", "✦", "✧", "✨"],
  trailSmoothness: 0.28,
  butterflySize: 13,
  butterflyGlow: 8,
  butterflyFlapSpeed: 0.006,
  minimumMovement: 1.5,
  maxParticles: 42,
  maxDevicePixelRatio: 1.25
};
const cursorTrailState = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2,
  targetX: window.innerWidth / 2,
  targetY: window.innerHeight / 2,
  lastParticleTime: 0,
  lastEmissionX: window.innerWidth / 2,
  lastEmissionY: window.innerHeight / 2,
  hasPointerPosition: false,
  particles: []
};

const resizeCursorTrail = () => {
  if (!cursorTrailCanvas || !cursorTrailContext || isTouchDevice) {
    return;
  }

  const devicePixelRatio = Math.min(window.devicePixelRatio || 1, cursorTrailConfig.maxDevicePixelRatio);
  cursorTrailCanvas.width = Math.floor(window.innerWidth * devicePixelRatio);
  cursorTrailCanvas.height = Math.floor(window.innerHeight * devicePixelRatio);
  cursorTrailContext.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
};

const addCursorTrailParticles = (now) => {
  if (!cursorTrailState.hasPointerPosition) {
    return;
  }

  const movement = Math.hypot(
    cursorTrailState.targetX - cursorTrailState.lastEmissionX,
    cursorTrailState.targetY - cursorTrailState.lastEmissionY
  );

  if (movement < cursorTrailConfig.minimumMovement) {
    return;
  }

  if (now - cursorTrailState.lastParticleTime < cursorTrailConfig.particleFrequency) {
    return;
  }

  cursorTrailState.lastParticleTime = now;
  cursorTrailState.lastEmissionX = cursorTrailState.targetX;
  cursorTrailState.lastEmissionY = cursorTrailState.targetY;

  for (let index = 0; index < cursorTrailConfig.particleCount; index += 1) {
    const sizeRange = cursorTrailConfig.particleSize.max - cursorTrailConfig.particleSize.min;
    cursorTrailState.particles.push({
      x: cursorTrailState.x + (Math.random() - 0.5) * 8,
      y: cursorTrailState.y + (Math.random() - 0.5) * 8,
      age: 0,
      size: cursorTrailConfig.particleSize.min + Math.random() * sizeRange,
      opacity: cursorTrailConfig.particleOpacity * (0.7 + Math.random() * 0.3),
      rotation: (Math.random() - 0.5) * 0.8,
      rotationSpeed: (Math.random() - 0.5) * 0.002,
      velocityX: (Math.random() - 0.5) * cursorTrailConfig.particleSpeed,
      velocityY: (Math.random() - 0.5) * cursorTrailConfig.particleSpeed,
      symbol: cursorTrailConfig.symbols[Math.floor(Math.random() * cursorTrailConfig.symbols.length)]
    });
  }

  if (cursorTrailState.particles.length > cursorTrailConfig.maxParticles) {
    cursorTrailState.particles.splice(0, cursorTrailState.particles.length - cursorTrailConfig.maxParticles);
  }
};

const drawButterflyCursor = (now, primaryColor, accentColor) => {
  const { x, y } = cursorTrailState;
  const flap = Math.sin(now * cursorTrailConfig.butterflyFlapSpeed) * 0.18;
  const size = cursorTrailConfig.butterflySize;

  cursorTrailContext.save();
  cursorTrailContext.translate(x, y);
  cursorTrailContext.globalAlpha = 0.9;
  cursorTrailContext.shadowBlur = cursorTrailConfig.butterflyGlow;
  cursorTrailContext.shadowColor = primaryColor;

  cursorTrailContext.fillStyle = accentColor;
  cursorTrailContext.beginPath();
  cursorTrailContext.ellipse(-size * 0.48, -size * 0.18, size * (0.45 + flap), size * 0.72, -0.35, 0, Math.PI * 2);
  cursorTrailContext.ellipse(size * 0.48, -size * 0.18, size * (0.45 + flap), size * 0.72, 0.35, 0, Math.PI * 2);
  cursorTrailContext.fill();

  cursorTrailContext.fillStyle = primaryColor;
  cursorTrailContext.beginPath();
  cursorTrailContext.ellipse(0, 0, size * 0.12, size * 0.68, 0, 0, Math.PI * 2);
  cursorTrailContext.fill();
  cursorTrailContext.restore();
};

const drawCursorTrail = (now, delta) => {
  if (!cursorTrailContext) {
    return;
  }

  const isDarkMode = document.body.classList.contains("dark-mode");
  const primaryColor = isDarkMode ? "#f3d998" : "#6d2940";
  const accentColor = isDarkMode ? "#c86d7d" : "#a8792f";
  cursorTrailContext.clearRect(0, 0, window.innerWidth, window.innerHeight);
  cursorTrailContext.textAlign = "center";
  cursorTrailContext.textBaseline = "middle";

  cursorTrailState.particles = cursorTrailState.particles.filter((particle) => {
    particle.age += delta;
    particle.x += particle.velocityX * delta;
    particle.y += particle.velocityY * delta;
    particle.rotation += particle.rotationSpeed * delta;

    if (particle.age >= cursorTrailConfig.particleLifetime) {
      return false;
    }

    const lifetimeProgress = particle.age / cursorTrailConfig.particleLifetime;
    const fade = 1 - lifetimeProgress;
    cursorTrailContext.save();
    cursorTrailContext.translate(particle.x, particle.y);
    cursorTrailContext.rotate(particle.rotation);
    cursorTrailContext.globalAlpha = particle.opacity * fade;
    cursorTrailContext.font = `${particle.size * (0.8 + fade * 0.2)}px sans-serif`;
    cursorTrailContext.shadowBlur = cursorTrailConfig.glowIntensity * fade;
    cursorTrailContext.shadowColor = particle.symbol === "🦋" ? accentColor : primaryColor;
    cursorTrailContext.fillStyle = particle.symbol === "🦋" ? accentColor : primaryColor;
    cursorTrailContext.fillText(particle.symbol, 0, 0);
    cursorTrailContext.restore();
    return true;
  });

  cursorTrailState.x += (cursorTrailState.targetX - cursorTrailState.x) * cursorTrailConfig.trailSmoothness;
  cursorTrailState.y += (cursorTrailState.targetY - cursorTrailState.y) * cursorTrailConfig.trailSmoothness;
  drawButterflyCursor(now, primaryColor, accentColor);
};

window.addEventListener("pointermove", (event) => {
  if (!isTouchDevice && cursorTrailCanvas) {
    cursorTrailState.targetX = event.clientX;
    cursorTrailState.targetY = event.clientY;
    cursorTrailState.hasPointerPosition = true;
  }

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

if (!isTouchDevice && cursorTrailCanvas) {
  resizeCursorTrail();
  window.addEventListener("resize", resizeCursorTrail);
}

if (!isTouchDevice && (cursorTrailCanvas || (cursorDot && cursorRing))) {
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

  let previousTime = performance.now();
  const animateCursor = (now) => {
    const delta = Math.min(now - previousTime, 40);
    previousTime = now;
    state.ringX += (state.x - state.ringX) * 0.18;
    state.ringY += (state.y - state.ringY) * 0.18;
    if (cursorRing) {
      cursorRing.style.transform = `translate(${state.ringX - 19}px, ${state.ringY - 19}px)`;
    }
    addCursorTrailParticles(now);
    drawCursorTrail(now, delta);
    requestAnimationFrame(animateCursor);
  };

  requestAnimationFrame((now) => animateCursor(now));

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