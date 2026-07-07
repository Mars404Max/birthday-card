let opened = false;

const envelope = document.getElementById("envelope");
const musicBtn = document.getElementById("musicBtn");
const music = document.getElementById("music");
const ratHolder = document.getElementById("ratHolder");
const hint = document.getElementById("hint");
const raveGuests = document.getElementById("raveGuests");

envelope.addEventListener("click", openCard);

envelope.addEventListener("keydown", function (event) {
  if (event.key === "Enter" || event.key === " ") {
    openCard();
  }
});

musicBtn.addEventListener("click", toggleMusic);

createBackgroundStars();

function openCard() {
  if (opened) {
    return;
  }

  envelope.classList.add("open");
  ratHolder.classList.add("show");
  raveGuests.classList.add("show");

  opened = true;

  hint.textContent = "Birthday rave mode activated ⚡";
  musicBtn.textContent = "Выключить hard techno 🔇";

  startMusic();
  createHearts(24);
  createConfetti(100);
}

function startMusic() {
  music.volume = 0.35;

  music.play()
    .then(function () {
      document.body.classList.add("rave");
    })
    .catch(function () {
      musicBtn.textContent = "Нажми, чтобы включить музыку 🔊";
      console.log("Браузер ждёт отдельный клик для запуска музыки.");
    });
}

function toggleMusic() {
  if (music.paused) {
    music.volume = 0.35;

    music.play()
      .then(function () {
        document.body.classList.add("rave");
        musicBtn.textContent = "Выключить hard techno 🔇";
      })
      .catch(function () {
        console.log("Музыка не запустилась. Нужен клик пользователя.");
      });
  } else {
    music.pause();
    document.body.classList.remove("rave");
    musicBtn.textContent = "Включить hard techno 🔊";
  }
}

function createHearts(count) {
  for (let i = 0; i < count; i++) {
    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = getRandomHeart();

    heart.style.left = 35 + Math.random() * 30 + "vw";
    heart.style.top = 55 + Math.random() * 22 + "vh";
    heart.style.animationDelay = Math.random() * 1.2 + "s";

    document.body.appendChild(heart);

    setTimeout(function () {
      heart.remove();
    }, 4500);
  }
}

function createConfetti(count) {
  const colors = [
    "#ff6bd6",
    "#ffd166",
    "#9b5cff",
    "#ffffff",
    "#ff9de2",
    "#00f5ff"
  ];

  for (let i = 0; i < count; i++) {
    const confetti = document.createElement("div");

    confetti.className = "confetti";

    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.top = "-20px";
    confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
    confetti.style.animationDelay = Math.random() * 1 + "s";

    document.body.appendChild(confetti);

    setTimeout(function () {
      confetti.remove();
    }, 5500);
  }
}

function createBackgroundStars() {
  for (let i = 0; i < 75; i++) {
    const star = document.createElement("div");

    star.className = "star";

    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";
    star.style.animationDelay = Math.random() * 3 + "s";
    star.style.animationDuration = Math.random() * 3 + 2 + "s";

    document.body.appendChild(star);
  }
}

function getRandomHeart() {
  const hearts = ["💜", "💖", "✨", "🖤", "⚡"];
  return hearts[Math.floor(Math.random() * hearts.length)];
}