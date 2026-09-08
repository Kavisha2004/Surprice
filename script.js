/*
  ============================================================
  KAVISHA ❤️ NETHMINI — 2ND ANNIVERSARY WEBSITE
  Vanilla HTML + CSS + JavaScript — GitHub Pages ready.
  ============================================================
*/

const CONFIG = {
  myName: "Kavisha",
  girlfriendName: "Nethmini",
  anniversaryDate: "14 September 2024",
  unlockDate: "2026-09-14T00:00:00"
};

// ================================
// ADD YOUR GOOGLE PHOTOS LINKS HERE
// Replace each GOOGLE_PHOTOS_LINK_* value with your real Google Photos sharing URL.
// ================================
const memories = [
  {
    date: "14 September 2024",
    place: "Vihara Maha Devi Park",
    photo: "assets/memory-01.jpg",
    description: "The first chapter of our story — the day everything began.",
    photos: "https://drive.google.com/drive/folders/1CCXTVMVDnGUb7yugVuHwJ4hbr-Ocwc8k?usp=sharing"
  },
  {
    date: "05 February 2025",
    place: "Gold Gace, Colombo",
    photo: "assets/memory-02.jpg",
    description: "Another little day that quietly became a beautiful memory.",
    photos: "https://drive.google.com/drive/folders/1jgDJiw8zeR-Gak6QFxdU_BSo-VsmCJax?usp=sharing"
  },
  {
    date: "05 April 2025",
    place: "Peradeniya Botanical Garden",
    photo: "assets/memory-03.jpg",
    description: "A day surrounded by nature, laughter, and the two of us.",
    photos: "https://drive.google.com/drive/folders/1NCiGXmUFGuwf8VhodWGuoliPr8pXQ0oL?usp=sharing"
  },
  {
    date: "01 July 2025",
    place: "School – Badging of Prefects",
    photo: "assets/memory-04.jpg",
    description: "A proud moment worth remembering together.",
    photos: "https://drive.google.com/drive/folders/1bkFvXgfhpxOKmirbIZACxTfsxtN1IFrI?usp=sharing"
  },
  {
    date: "22 August 2025",
    place: "Negombo Beach",
    photo: "assets/memory-05.jpg",
    description: "Salt in the air, waves nearby, and another memory with you.",
    photos: "https://drive.google.com/drive/folders/1sXoacGw9GiPNCYTT4lEXtAsR_vtAt8Mz?usp=sharing"
  },
  {
    date: "13 September 2025",
    place: "Baddegana Park",
    photo: "assets/memory-06.jpg",
    description: "One more peaceful day added to our little collection of moments.",
    photos: "https://drive.google.com/drive/folders/1YeYcJDZwV7S7eTyrZoULjRbnI4XZB5Fy?usp=sharing"
  },
  {
    date: "14 February 2026",
    place: "Sri Pada",
    photo: "assets/memory-07.jpg",
    description: "A special day, a special place, and a memory I will always keep.",
    photos: "https://drive.google.com/drive/folders/16SFVVnkXtV0nlWLftjC7_hcI5oRw22vO?usp=sharing"
  },
  {
    date: "12 April 2026",
    place: "Kirindiwala",
    photo: "assets/memory-08.jpg",
    description: "Another adventure, another page in our story.",
    photos: "https://drive.google.com/drive/folders/1hCnBaiJzvAZTWA7zBlUPAgxdmL0TfK3i?usp=sharing"
  },
  {
    date: "01 September 2026",
    place: "Negombo Beach",
    photo: "assets/memory-09.jpg",
    description: "One of the newest memories — just before our second anniversary.",
    photos: "https://drive.google.com/drive/folders/11hNXRVLeAkC6AvYUKhGPVepqE1uy1LIV?usp=sharing"
  }
];

const reasons = [
  { icon: "❤️", title: "Your Smile", text: "Because somehow it makes everything feel a little brighter." },
  { icon: "💕", title: "Your Kindness", text: "The softness and warmth you bring into the little things." },
  { icon: "🥰", title: "The Way You Care", text: "The way you notice, remember, and make me feel loved." },
  { icon: "✨", title: "Our Little Moments", text: "The ordinary moments that become my favourite memories." },
  { icon: "❤️", title: "Every Memory We Create", text: "Because every chapter with you is one I want to keep." }
];

const els = {
  body: document.body,
  countdownScreen: document.getElementById("countdownScreen"),
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds"),
  mainContent: document.getElementById("mainContent"),
  unlockCurtain: document.getElementById("unlockCurtain"),
  unlockName: document.getElementById("unlockName"),
  heroName: document.getElementById("heroName"),
  timeline: document.getElementById("timeline"),
  reasonsGrid: document.getElementById("reasonsGrid"),
  backgroundVideo: document.getElementById("backgroundVideo"),
  backgroundMusic: document.getElementById("backgroundMusic"),
  musicButton: document.getElementById("musicButton"),
  letterButton: document.getElementById("letterButton"),
  envelope: document.getElementById("envelope"),
  letterContent: document.getElementById("letterContent"),
  surpriseButton: document.getElementById("surpriseButton"),
  surpriseMessage: document.getElementById("surpriseMessage"),
  easterEgg: document.getElementById("easterEgg"),
  easterMessage: document.getElementById("easterMessage"),
  heartLayer: document.getElementById("heartLayer"),
  confettiLayer: document.getElementById("confettiLayer")
};

const UNLOCK_DATE = new Date(CONFIG.unlockDate);
let countdownTimer = null;
let musicFallbackVisible = false;
let unlockTransitionStarted = false;
let unlockCelebrationTimer = null;

function isUnlocked(now = new Date()) {
  return now.getTime() >= UNLOCK_DATE.getTime();
}

function pad(value) {
  return String(Math.max(0, value)).padStart(2, "0");
}

function updateCountdown() {
  const remaining = UNLOCK_DATE.getTime() - Date.now();

  if (remaining <= 0) {
    clearInterval(countdownTimer);
    countdownTimer = null;
    unlockWebsite();
    return;
  }

  const totalSeconds = Math.floor(remaining / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  els.days.textContent = pad(days);
  els.hours.textContent = pad(hours);
  els.minutes.textContent = pad(minutes);
  els.seconds.textContent = pad(seconds);
}

function startCountdown() {
  updateCountdown();
  countdownTimer = window.setInterval(updateCountdown, 1000);
}

function personalize() {
  document.title = `${CONFIG.myName} ❤️ ${CONFIG.girlfriendName} — 2nd Anniversary`;
  els.heroName.textContent = CONFIG.girlfriendName;
  els.unlockName.textContent = CONFIG.girlfriendName;
}

function renderMemories() {
  els.timeline.innerHTML = memories.map((memory, index) => {
    const number = String(index + 1).padStart(2, "0");
    const photo = memory.photo ? `
      <div class="memory-photo-wrap">
        <div class="memory-photo-frame">
          <img class="memory-photo" src="${escapeHtml(memory.photo)}" alt="Memory from ${escapeHtml(memory.date)} — ${escapeHtml(memory.place)}" loading="lazy" decoding="async" onerror="this.closest('.memory-photo-wrap').classList.add('photo-missing'); this.remove();">
          <div class="photo-missing-label" aria-hidden="true">Add this memory photo ❤️</div>
        </div>
      </div>
    ` : `
      <div class="memory-photo-wrap photo-missing">
        <div class="memory-photo-frame"><div class="photo-missing-label">Add this memory photo ❤️</div></div>
      </div>
    `;

    return `
      <article class="memory-item reveal ${index % 2 === 0 ? "timeline-left-photo" : "timeline-right-photo"}">
        ${photo}
        <div class="memory-copy">
          <p class="memory-date">${escapeHtml(memory.date)}</p>
          <h3>${escapeHtml(memory.place)}</h3>
          <p>${escapeHtml(memory.description)}</p>
          <button class="memory-button" type="button" data-memory-index="${index}" aria-label="View photos from ${escapeHtml(memory.place)}">
            View Photos 📸
          </button>
        </div>
        <span class="memory-number" aria-hidden="true">${number}</span>
      </article>
    `;
  }).join("");

  els.timeline.querySelectorAll(".memory-button").forEach((button) => {
    button.addEventListener("click", () => {
      const memory = memories[Number(button.dataset.memoryIndex)];
      if (!memory || !memory.photos) return;

      if (/^https?:\/\//i.test(memory.photos)) {
        window.open(memory.photos, "_blank", "noopener,noreferrer");
      } else {
        button.animate(
          [
            { transform: "scale(1)" },
            { transform: "scale(1.04)" },
            { transform: "scale(1)" }
          ],
          { duration: 240, easing: "ease-out" }
        );
        console.warn(`Add a real Google Photos link for: ${memory.place}`);
      }
    });
  });
}

function renderReasons() {
  els.reasonsGrid.innerHTML = reasons.map((reason) => `
    <article class="reason-card reveal">
      <div class="reason-icon" aria-hidden="true">${reason.icon}</div>
      <h3>${escapeHtml(reason.title)}</h3>
      <p>${escapeHtml(reason.text)}</p>
    </article>
  `).join("");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function setupRevealObserver() {
  const targets = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });

  targets.forEach((target) => observer.observe(target));
}

async function startBackgroundMedia() {
  // Start the single fixed background video immediately. It is muted so
  // modern browsers normally allow autoplay without a user gesture.
  els.backgroundVideo.muted = true;
  els.backgroundVideo.playsInline = true;
  try {
    await els.backgroundVideo.play();
  } catch (error) {
    console.info("Background video autoplay was not started by the browser.", error);
  }

  // Best-effort automatic music start. We first start the track muted, then
  // unmute it. This can satisfy autoplay policies in some browsers. If the
  // browser still blocks audible playback, the elegant fallback button appears.
  els.backgroundMusic.loop = true;
  els.backgroundMusic.preload = "auto";
  els.backgroundMusic.volume = 1;
  els.backgroundMusic.muted = true;

  try {
    await els.backgroundMusic.play();
    window.setTimeout(async () => {
      els.backgroundMusic.muted = false;
      try {
        await els.backgroundMusic.play();
        hideMusicFallback();
      } catch (error) {
        showMusicFallback();
      }
    }, 120);
  } catch (error) {
    // A browser may still require a direct user gesture for audible audio.
    showMusicFallback();
  }
}

function showMusicFallback() {
  if (musicFallbackVisible) return;
  musicFallbackVisible = true;
  els.musicButton.hidden = false;
}

function hideMusicFallback() {
  musicFallbackVisible = false;
  els.musicButton.hidden = true;
}

async function tryStartMusicFromInteraction() {
  try {
    els.backgroundMusic.muted = false;
    await els.backgroundMusic.play();
    hideMusicFallback();
  } catch (error) {
    console.info("Music could not start yet.", error);
  }
}

function unlockWebsite() {
  if (unlockTransitionStarted || !els.mainContent.hidden) return;
  unlockTransitionStarted = true;

  // The final second gets a gentle heartbeat pulse before the surprise opens.
  els.countdownScreen.classList.add("unlocking");

  // Bring the real page underneath the cinematic transition so the reveal feels
  // like one continuous scene rather than a hard page switch.
  els.body.classList.remove("is-locked");
  els.mainContent.hidden = false;
  els.mainContent.classList.add("pre-reveal");
  els.unlockCurtain.classList.add("active");
  els.unlockCurtain.setAttribute("aria-hidden", "false");

  // Start the single background video and music immediately at the moment of
  // unlock. The audio function still handles browser autoplay restrictions.
  startBackgroundMedia();
  createUnlockCelebration();
  setupRevealObserver();

  window.setTimeout(() => {
    els.countdownScreen.classList.add("is-hidden");
  }, 420);

  window.setTimeout(() => {
    els.mainContent.classList.remove("pre-reveal");
    els.mainContent.classList.add("is-revealed");
  }, 1250);
}

function createUnlockCelebration() {
  // A one-time, lightweight burst: hearts + soft confetti + a brief star field.
  createHearts(28);
  createConfetti(95);
  const stars = 34;
  for (let i = 0; i < stars; i++) {
    const star = document.createElement("span");
    star.className = "unlock-spark";
    star.textContent = Math.random() > 0.45 ? "✦" : "·";
    star.style.left = `${10 + Math.random() * 80}%`;
    star.style.top = `${12 + Math.random() * 76}%`;
    star.style.setProperty("--delay", `${Math.random() * 1.1}s`);
    star.style.setProperty("--duration", `${1.8 + Math.random() * 1.8}s`);
    els.unlockCurtain.appendChild(star);
    window.setTimeout(() => star.remove(), 4400);
  }
}

function setupLetter() {
  const openLetter = () => {
    els.envelope.classList.toggle("open");
    const opening = els.envelope.classList.contains("open");
    if (opening) {
      els.letterContent.hidden = false;
      els.letterButton.textContent = "Close My Letter ❤️";
      window.setTimeout(() => {
        els.letterContent.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 120);
    } else {
      els.letterContent.hidden = true;
      els.letterButton.textContent = "Open My Letter ❤️";
    }
  };

  els.letterButton.addEventListener("click", openLetter);
  els.envelope.addEventListener("click", openLetter);
  els.envelope.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openLetter();
    }
  });
}

function setupSurprise() {
  els.surpriseButton.addEventListener("click", () => {
    els.surpriseMessage.hidden = false;
    els.surpriseButton.textContent = "Our Little Secret ❤️";
    createHearts(24);
    createConfetti(100);
    els.surpriseMessage.scrollIntoView({ behavior: "smooth", block: "center" });
  });
}

function createHearts(count = 18) {
  for (let i = 0; i < count; i++) {
    const heart = document.createElement("span");
    heart.className = "floating-heart";
    heart.textContent = Math.random() > 0.35 ? "♥" : "♡";
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.setProperty("--drift", `${(Math.random() * 2 - 1) * 140}px`);
    heart.style.setProperty("--duration", `${3.5 + Math.random() * 3.5}s`);
    heart.style.fontSize = `${11 + Math.random() * 18}px`;
    els.heartLayer.appendChild(heart);
    window.setTimeout(() => heart.remove(), 7600);
  }
}

function createConfetti(count = 80) {
  for (let i = 0; i < count; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.setProperty("--drift", `${(Math.random() * 2 - 1) * 220}px`);
    piece.style.setProperty("--duration", `${3.5 + Math.random() * 3}s`);
    piece.style.transform = `rotate(${Math.random() * 90}deg)`;
    if (Math.random() < 0.45) piece.style.borderRadius = "50%";
    els.confettiLayer.appendChild(piece);
    window.setTimeout(() => piece.remove(), 7000);
  }
}

function setupEasterEgg() {
  els.easterEgg.addEventListener("click", () => {
    els.easterMessage.hidden = false;
    createHearts(14);
    window.setTimeout(() => {
      els.easterMessage.hidden = true;
    }, 5200);
  });
}

function setupMusicButton() {
  els.musicButton.addEventListener("click", tryStartMusicFromInteraction);
}

function createTouchHeart(x, y, index = 0) {
  const heart = document.createElement("span");
  heart.className = "touch-heart";
  heart.textContent = Math.random() > 0.16 ? "♥" : "♡";

  // Start all hearts together near the exact touch point, then let them
  // gently spread and float upward. The tiny delay keeps the burst natural.
  heart.style.left = `${x + (Math.random() * 18 - 9)}px`;
  heart.style.top = `${y + (Math.random() * 14 - 7)}px`;
  heart.style.setProperty("--size", `${17 + Math.random() * 12}px`);
  heart.style.setProperty("--x-drift", `${(Math.random() * 2 - 1) * (28 + Math.random() * 44)}px`);
  heart.style.setProperty("--y-rise", `${180 + Math.random() * 130}px`);
  heart.style.setProperty("--spin", `${(Math.random() * 2 - 1) * 18}deg`);
  heart.style.setProperty("--delay", `${index * 0.018 + Math.random() * 0.08}s`);

  els.heartLayer.appendChild(heart);
  window.setTimeout(() => heart.remove(), 3400);
}

function setupCountdownTouchHearts() {
  let lastPointerStamp = 0;

  const isBlockedInteractive = (target) => {
    if (!(target instanceof Element)) return false;
    return Boolean(target.closest('a, button, input, textarea, select, video, audio, [role="button"], .music-button'));
  };

  const emit = (x, y) => {
    if (!Number.isFinite(x) || !Number.isFinite(y)) return;
    const heartCount = 22 + Math.floor(Math.random() * 9);
    for (let i = 0; i < heartCount; i++) createTouchHeart(x, y, i);
  };

  const onPointerDown = (event) => {
    lastPointerStamp = Date.now();
    if (isBlockedInteractive(event.target)) return;
    emit(event.clientX, event.clientY);
  };

  const onTouchStart = (event) => {
    if (Date.now() - lastPointerStamp < 350) return;
    const target = event.target;
    if (isBlockedInteractive(target)) return;
    const touch = event.changedTouches && event.changedTouches[0];
    if (touch) emit(touch.clientX, touch.clientY);
  };

  const onClick = (event) => {
    if (Date.now() - lastPointerStamp < 350) return;
    if (isBlockedInteractive(event.target)) return;
    emit(event.clientX, event.clientY);
  };

  if ("PointerEvent" in window) {
    document.addEventListener("pointerdown", onPointerDown, { passive: true });
  } else {
    document.addEventListener("touchstart", onTouchStart, { passive: true });
    document.addEventListener("mousedown", onClick, { passive: true });
  }

  document.addEventListener("touchstart", onTouchStart, { passive: true });
  document.addEventListener("click", onClick, { passive: true });
}

function setupGlobalInteraction() {
  // Helpful for browsers that keep audio blocked until a direct user gesture.
  const unlockMusicOnGesture = () => {
    if (!isUnlocked()) return;
    if (!els.backgroundMusic.paused) return;
    tryStartMusicFromInteraction();
  };

  ["pointerdown", "keydown", "touchstart"].forEach((eventName) => {
    window.addEventListener(eventName, unlockMusicOnGesture, { passive: true, once: true });
  });
}

function initUnlockedExperience() {
  unlockTransitionStarted = true;
  els.body.classList.remove("is-locked");
  els.mainContent.hidden = false;
  els.countdownScreen.classList.add("is-hidden");
  startBackgroundMedia();
  setupRevealObserver();
}

function init() {
  personalize();
  renderMemories();
  renderReasons();
  setupLetter();
  setupSurprise();
  setupEasterEgg();
  setupMusicButton();
  setupGlobalInteraction();
  setupCountdownTouchHearts();

  if (isUnlocked()) {
    initUnlockedExperience();
  } else {
    startCountdown();
  }
}

document.addEventListener("DOMContentLoaded", init);
