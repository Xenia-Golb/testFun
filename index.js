document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("header-scrolled");
    } else {
      header.classList.remove("header-scrolled");
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const image1 = document.querySelector("#img1");
  const image2 = document.querySelector("#img2");
  const image3 = document.querySelector("#img3");
  const arrow = document.querySelector("#arrow");

  setTimeout(() => {
    image1.style.animation = "slideIn 0.5s forwards";
  }, 300);

  setTimeout(() => {
    image2.style.animation = "slideIn 0.5s forwards";
  }, 400);
  setTimeout(() => {
    image3.style.animation = "slideIn 0.5s forwards";
  }, 500);

  setTimeout(() => {
    arrow.style.opacity = "1";
  }, 800);
});
document.addEventListener("DOMContentLoaded", function () {
  const title = document.querySelector(".animate-title");
  const text = document.querySelector(".animate-text");
  const btns = document.querySelector(".animate-btns");
  const stats = document.querySelector(".animate-stats");

  setTimeout(() => {
    title.classList.add("visible");
  }, 200);
  setTimeout(() => {
    text.classList.add("visible");
  }, 400);
  setTimeout(() => {
    btns.classList.add("visible");
  }, 600);

  setTimeout(() => {
    stats.classList.add("visible");
  }, 800);
});
function getRandomBid() {
  return (Math.random() * (5 - 1) + 1).toFixed(2);
}

const countdownElements = document.querySelectorAll(".countdown-timer");

function startCountdown(element, initialTime) {
  let timeRemaining = initialTime;
  let countdownInterval = setInterval(function () {
    timeRemaining--;

    const hours = Math.floor(timeRemaining / 3600);
    const minutes = Math.floor((timeRemaining % 3600) / 60);
    const seconds = timeRemaining % 60;

    const formattedTime =
      `${String(hours).padStart(2, "0")}h ` +
      `${String(minutes).padStart(2, "0")}m ` +
      `${String(seconds).padStart(2, "0")}s`;

    element.innerText = `${formattedTime}`;
    element.style.display = "block";
    if (timeRemaining <= 0) {
      clearInterval(countdownInterval);
      element.innerText = "Time's up!";
    }
  }, 1000);
}

document.addEventListener("DOMContentLoaded", function () {
  const bidValues = document.querySelectorAll(".bid-value");
  bidValues.forEach((bidValue) => {
    if (bidValue) {
      bidValue.innerText = getRandomBid();
    }
    const countdownElement = document.querySelector(".countdown-timer");
    if (countdownElement) {
      startCountdown(countdownElement);
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const bidValue = document.querySelector(".bid-value");
  if (bidValue) {
    bidValue.innerText = getRandomBid();
  }

  countdownElements.forEach((element) => {
    const initialTime = parseInt(element.getAttribute("data-duration"));
    if (!isNaN(initialTime)) {
      startCountdown(element, initialTime);
    }
  });
});
