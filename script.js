const themeToggle = document.getElementById("theme-toggle");
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");
const yearElement = document.getElementById("year");
const scrollProgress = document.getElementById("scroll-progress");
const projectModal = document.getElementById("project-modal");
const modalClose = document.getElementById("modal-close");
const modalTitle = document.getElementById("modal-title");
const modalDate = document.getElementById("modal-date");
const modalSummary = document.getElementById("modal-summary");
const modalFocus = document.getElementById("modal-focus");
const modalOutcome = document.getElementById("modal-outcome");
const modalTech = document.getElementById("modal-tech");
const achievementTrigger = document.getElementById("achievement-trigger");
const achievementModal = document.getElementById("achievement-modal");
const achievementModalClose = document.getElementById("achievement-modal-close");
const roleText = document.getElementById("role-text");
const profileRoleText = document.getElementById("profile-role-text");

const projectDetails = {
  mp3TagEditor: { title: "MP3 Tag Reader and Editor", date: "July 2026 - August 2026", summary: "Developed a command-line MP3 Tag Reader and Editor application to read, display, and modify ID3 metadata from MP3 files. The application supports viewing song title, artist, album, year, track number, and genre, along with editing selected metadata fields using command-line arguments. Implemented binary file handling techniques to read, modify, and preserve MP3 metadata while maintaining the remaining MP3 data.", focus: "Implemented ID3 tag validation and metadata extraction. Used structures and pointers to manage MP3 metadata. Implemented metadata editing while preserving remaining MP3 data.", outcome: "Gained practical experience in binary data processing, bitwise operations, command-line arguments, and debugging.", technologies: ["Advanced C Programming", "Structures", "File Handling", "Pointers", "String Handling", "Bitwise Operations", "Command-Line Arguments", "ID3 Metadata", "Binary File Handling"] },
  steganography: { title: "Image Steganography Using LSB Encoding & Decoding", date: "May 2026 - June 2026", summary: "Built an Image Steganography application that enables secure hiding and retrieval of text messages inside BMP image files using the Least Significant Bit (LSB) encoding technique. Implemented encoding and decoding mechanisms while preserving the integrity and visual quality of the original image.", focus: "Implemented LSB encoding and decoding. Worked with BMP file structure and image headers. Used bitwise operations while maintaining image integrity.", outcome: "Improved modular programming, file handling, debugging, and CLI development skills.", technologies: ["Advanced C Programming", "File Handling", "Bitwise Operations", "Pointers", "Structures", "Functions", "Command-Line Arguments", "BMP File Handling"] },
  addressBook: { title: "Address Book Management System", date: "March 2026 - April 2026", summary: "Built a command-line Address Book Management System for adding, searching, editing, deleting, and displaying contact information. Implemented file handling to permanently save and load contact records across multiple program executions.", focus: "Designed structured contact management using C structures. Implemented persistent file storage and retrieval. Developed search, edit, and delete functionality.", outcome: "Gained experience in modular programming, input validation, debugging, and menu-driven applications.", technologies: ["Advanced C Programming", "Structures", "File Handling", "Functions", "Pointers", "String Handling", "Command-Line Interface (CLI)"] },
  elite: { title: "ELITE EXHAUST CARE - LPG Leakage and Smoke Detection Safety System", date: "December 2025 - February 2026", summary: "Designed and developed an IoT-based Smart Kitchen Safety Monitoring System to monitor LPG gas leakage, fire, smoke, and abnormal temperature levels. The system uses embedded sensors and provides buzzer and cloud-based alerts. Real-time sensor data is transmitted through Wi-Fi for remote monitoring.", focus: "Integrated multiple safety sensors. Implemented Wi-Fi-based IoT connectivity. Calibrated sensor thresholds to reduce false alarms.", outcome: "Gained experience in embedded firmware, sensor interfacing, IoT communication, real-time monitoring, debugging, and hardware integration.", technologies: ["ESP8266", "Embedded C", "MicroPython", "MQ-2 Gas Sensor", "Flame Sensor", "Temperature Sensor", "Buzzer", "Wi-Fi", "Blynk", "Firebase", "Arduino IDE"] },
  laserGrid: { title: "Laser Beam Security Grid - IoT", date: "October 2025 - November 2025", summary: "Designed and developed an IoT-based Laser Beam Security Grid for real-time intrusion detection and security monitoring. The system uses a laser transmitter and LDR sensor with NodeMCU (ESP8266) to monitor beam interruptions. When an interruption is detected, it triggers a buzzer alarm and uses Wi-Fi for remote monitoring.", focus: "Integrated laser transmitter and LDR sensor with NodeMCU. Implemented real-time intrusion detection and buzzer alerts when the beam was interrupted.", outcome: "Used Wi-Fi connectivity for remote monitoring and gained experience in IoT communication and hardware integration.", technologies: ["IoT", "Embedded Systems", "NodeMCU (ESP8266)", "Arduino IDE", "LDR Sensor", "Laser Transmitter", "Buzzer", "Sensor Integration", "Hardware Interfacing", "Wi-Fi Communication"] },
  irrigation: { title: "Automatic Irrigation System Using Rain Sensor and Soil Moisture Sensor", date: "August 2025 - September 2025", summary: "Developed an IoT-based Automatic Irrigation System to automate plant watering based on soil moisture and rain conditions. Integrated soil moisture and rain sensors with NodeMCU and used a relay module to automatically control the water pump.", focus: "Integrated soil moisture and rain sensors. Automated water pump control using relay-based automation.", outcome: "Reduced water wastage and over-irrigation while gaining experience in IoT development, sensor interfacing, microcontroller programming, and hardware integration.", technologies: ["NodeMCU", "IoT", "Soil Moisture Sensor", "Rain Sensor", "Relay Module", "Water Pump", "Blynk", "Sensor Interfacing"] },
  crm: { title: "CRM Jewel Management System", date: "June 2025 - July 2025", summary: "Developed a Customer Relationship Management application using Salesforce to manage customer information and sales records. Designed reports and dashboards for business analysis and improved customer relationship management through organized data handling.", focus: "Developed a CRM application for customer and sales information. Created reports and dashboards.", outcome: "Improved understanding of Salesforce CRM and customer relationship management.", technologies: ["Salesforce CRM", "Reports & Dashboards", "Data Management"] },
  lease: { title: "Lease Management System - Salesforce CRM", date: "November 2024 - May 2025", summary: "Developed a Salesforce-based Lease Management System to streamline property leasing operations including tenant management, lease agreements, payment tracking, and automated communication. Created custom objects for Property, Tenant, Lease, and Payment and implemented Salesforce automation tools.", focus: "Created custom Salesforce objects. Implemented Flows, Validation Rules, Approval Processes, Apex Triggers, and Scheduled Apex.", outcome: "Implemented automated email notifications and gained practical experience in Salesforce CRM development, Apex, SOQL, process automation, and data validation.", technologies: ["Salesforce CRM", "Apex", "SOQL", "Lightning App Builder", "Salesforce Flow", "Validation Rules", "Approval Process", "Apex Triggers", "Scheduled Apex"] },
  ecommerce: { title: "E-Commerce API Development", date: "February 2024 - March 2024", summary: "Developed backend APIs for an e-commerce platform as part of Python Stack Development training. Implemented API functionality for product management, data handling, and backend operations. Designed and tested API endpoints for communication between application and backend services.", focus: "Developed backend API endpoints and implemented structured JSON responses.", outcome: "Gained practical experience in REST API concepts, HTTP methods, API design, and integration.", technologies: ["Python", "REST API", "Backend Development", "API Development", "JSON", "HTTP Methods", "Data Handling"] },
  guardian: { title: "Guardian Care Autonomous Safety Network - IoT", date: "December 2023 - January 2024", summary: "Developed an IoT-based security system for monitoring restricted areas using PIR and HC-SR04 ultrasonic sensors to detect movement and measure distance. Integrated NodeMCU (ESP8266) for sensor data processing and Wi-Fi connectivity, with buzzer and LED alerts for immediate security notifications.", focus: "Used PIR and HC-SR04 ultrasonic sensors. Integrated NodeMCU (ESP8266) for sensor processing and Wi-Fi connectivity. Designed automated, real-time safety monitoring.", outcome: "Implemented buzzer and LED alerts for immediate security notifications.", technologies: ["IoT", "Embedded Systems", "NodeMCU (ESP8266)", "PIR Sensor", "HC-SR04 Ultrasonic Sensor", "Arduino IDE", "Embedded C", "Wi-Fi/IoT", "Buzzer & LED"] }
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
  modalDate.textContent = details.date;
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

const roles = ["Python Developer", "Web Developer", "Full Stack Developer", "Salesforce Developer"];
const profileRoles = [
  {
    title: "Salesforce",
    subtitle: "CRM Development",
    icon: "fa-cloud",
    position: "right-top"
  },
  {
    title: "Full Stack",
    subtitle: "Developement",
    icon: "fa-computer",
    position: "middle-top"
  },
  {
    title: "IOT",
    subtitle: "Embedded Systems",
    icon: "fa-microchip",
    position: "bottom-center"
  }
];
let roleIndex = 0;
const heroPhotoFrame = document.querySelector(".hero-photo-frame");
const profileRoleStack = document.querySelector(".hero-photo-role-stack");
let profileRolesVisible = false;

if (profileRoleText) {
  const rotatingProfileRoles = [
    "Full Stack Developer",
    "Web Developer",
    "Software Developer",
    "Salesforce Developer",
    "Python Developer"
  ];

  let profileRoleIndex = 0;

  const rotateProfileRole = () => {
    profileRoleText.classList.add("is-changing");

    window.setTimeout(() => {
      profileRoleIndex = (profileRoleIndex + 1) % rotatingProfileRoles.length;
      profileRoleText.textContent = rotatingProfileRoles[profileRoleIndex];
      profileRoleText.classList.remove("is-changing");
    }, 180);
  };

  profileRoleText.textContent = rotatingProfileRoles[0];
  window.setInterval(rotateProfileRole, 2200);
}

if (roleText) {
  let isDeleting = false;
  let currentCharIndex = 0;
  let typingTimer = null;

  const startRoleTypingCycle = () => {
    const currentRole = roles[roleIndex];

    if (!isDeleting) {
      currentCharIndex += 1;
      roleText.textContent = currentRole.slice(0, currentCharIndex);

      if (currentCharIndex < currentRole.length) {
        typingTimer = window.setTimeout(startRoleTypingCycle, 110);
        return;
      }

      typingTimer = window.setTimeout(() => {
        isDeleting = true;
        startRoleTypingCycle();
      }, 1200);
      return;
    }

    currentCharIndex -= 1;
    roleText.textContent = currentRole.slice(0, currentCharIndex);

    if (currentCharIndex > 0) {
      typingTimer = window.setTimeout(startRoleTypingCycle, 65);
      return;
    }

    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    currentCharIndex = 0;
    typingTimer = window.setTimeout(startRoleTypingCycle, 220);
  };

  roleText.textContent = "";
  startRoleTypingCycle();
}

const tickerTrack = document.querySelector(".skills-ticker-track");
if (tickerTrack && !tickerTrack.dataset.duplicated) {
  const tickerItems = Array.from(tickerTrack.children);
  tickerItems.forEach((item) => {
    const clone = item.cloneNode(true);
    clone.setAttribute("aria-hidden", "true");
    tickerTrack.appendChild(clone);
  });
  tickerTrack.dataset.duplicated = "true";
}

if (heroPhotoFrame && profileRoleStack) {
  const renderProfileCards = () => {
    if (profileRoleStack.querySelectorAll(".profile-role-card").length) {
      return;
    }

    profileRoles.forEach((role, index) => {
      const card = document.createElement("div");
      card.className = "profile-role-card";
      card.dataset.position = role.position;
      card.style.transitionDelay = `${index * 80}ms`;
      card.setAttribute("aria-hidden", "true");
      card.innerHTML = `
        <span class="profile-role-icon"><i class="fas ${role.icon}"></i></span>
        <div>
          <strong>${role.title}</strong>
          <small>${role.subtitle}</small>
        </div>
      `;
      profileRoleStack.appendChild(card);
    });
  };

  const setProfileCardVisibility = (isVisible) => {
    renderProfileCards();

    const profileCards = profileRoleStack.querySelectorAll(".profile-role-card");
    profileCards.forEach((card, index) => {
      card.style.transitionDelay = `${index * 80}ms`;
      card.classList.toggle("is-visible", isVisible);
      card.setAttribute("aria-hidden", String(!isVisible));
    });

    profileRoleStack.classList.toggle("is-visible", isVisible);
    profileRolesVisible = isVisible;
    heroPhotoFrame.setAttribute("aria-expanded", String(isVisible));
    heroPhotoFrame.setAttribute("aria-label", isVisible ? "Hide developer roles" : "Show developer roles");
  };

  const toggleProfileCards = (event) => {
    if (event && event.type === "keydown" && !(event.key === "Enter" || event.key === " ")) {
      return;
    }

    if (event && event.type === "keydown") {
      event.preventDefault();
    }

    setProfileCardVisibility(!profileRolesVisible);
  };

  renderProfileCards();
  setProfileCardVisibility(false);
  heroPhotoFrame.addEventListener("click", toggleProfileCards);
  heroPhotoFrame.addEventListener("keydown", toggleProfileCards);
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

const isTouchDevice = window.matchMedia("(pointer: coarse)").matches || navigator.maxTouchPoints > 0;

if (isTouchDevice) {
  document.body.classList.add("touch-device");
}

// Theme Toggle
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
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
    const isOpen = navbar.classList.toggle("active");
    menuToggle.setAttribute("aria-expanded", String(isOpen));

    const icon = menuToggle.querySelector("i");

    if (isOpen) {
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

    if (menuToggle) {
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
});

document.addEventListener("pointerdown", (event) => {
  if (!navbar || !menuToggle || !navbar.classList.contains("active")) {
    return;
  }

  if (!(event.target instanceof Element) || event.target.closest(".header")) {
    return;
  }

  navbar.classList.remove("active");
  menuToggle.setAttribute("aria-expanded", "false");
  const icon = menuToggle.querySelector("i");
  icon.classList.remove("fa-xmark");
  icon.classList.add("fa-bars");
});

document.querySelectorAll(".social-links a").forEach((link) => {
  link.addEventListener("pointerdown", () => {
    document.querySelectorAll(".social-links a").forEach((item) => item.classList.remove("is-active"));
    link.classList.add("is-active");

    window.setTimeout(() => {
      link.classList.remove("is-active");
    }, 350);
  });

  link.addEventListener("click", (event) => {
    event.preventDefault();
    const href = link.getAttribute("href");
    if (!href) {
      return;
    }

    setTimeout(() => {
      window.open(href, "_blank", "noopener,noreferrer");
    }, 80);
  });
});

// Contact Form
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !phone || !message) {
      formMessage.textContent = "Please fill in all fields.";
      return;
    }

    formMessage.textContent = "Thank you! Your message has been prepared successfully.";

    const mailSubject = encodeURIComponent("Portfolio Contact Message");
    const mailBody = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`);
    window.location.href = `mailto:asinfathima2705@gmail.com?subject=${mailSubject}&body=${mailBody}`;
    contactForm.reset();
  });
}

window.addEventListener("pointermove", (event) => {
  if (!isTouchDevice && event.target instanceof Element) {
    const projectCard = event.target.closest(".project-card");

    if (projectCard) {
      const bounds = projectCard.getBoundingClientRect();
      projectCard.style.setProperty("--spotlight-x", `${event.clientX - bounds.left}px`);
      projectCard.style.setProperty("--spotlight-y", `${event.clientY - bounds.top}px`);
    }
  }
});

// Reveal sections as they enter the viewport
const revealSections = document.querySelectorAll(".section");
const navigationLinks = document.querySelectorAll(".navbar a");
const mobileRevealMedia = window.matchMedia("(max-width: 767px) and (prefers-reduced-motion: no-preference)");

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

const learningCards = document.querySelectorAll(".learning-box");
if (learningCards.length) {
  const revealLearningCards = (isMobile) => {
    if (!("IntersectionObserver" in window)) {
      learningCards.forEach((card) => card.classList.add("is-visible"));
      return;
    }

    const learningObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: isMobile ? 0.18 : 0.22,
      rootMargin: isMobile ? "0px 0px -10% 0px" : "0px 0px -6% 0px"
    });

    learningCards.forEach((card, index) => {
      card.style.transitionDelay = `${index * (isMobile ? 160 : 120)}ms`;
      learningObserver.observe(card);
    });
  };

  revealLearningCards(window.matchMedia("(max-width: 767px)").matches);
}