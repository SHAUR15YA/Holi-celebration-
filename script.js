const btn = document.getElementById("celebrateBtn");
const text = document.getElementById("holiText");

btn.addEventListener("click", function () {
  text.style.display = "block";
});

// RESET button
resetBtn.addEventListener("click", () => {
  text.classList.remove("show");
});

btn.addEventListener("click", () => {
  // show Happy Holi text
  text.classList.add("show");

  // colorful bursts from multiple sides
  const colors = ['#ff0000', '#ffcc00', '#00ffcc', '#ff00ff', '#00ff00'];

  confetti({ particleCount: 120, spread: 100, origin: { x: 0.2, y: 0.6 }, colors });
  confetti({ particleCount: 120, spread: 100, origin: { x: 0.8, y: 0.6 }, colors });
  confetti({ particleCount: 150, spread: 120, origin: { y: 0.5 }, colors });

  // sprinkle rain for 2 seconds
  const duration = 2 * 1000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 5,
      spread: 90,
      origin: { x: Math.random(), y: 0 },
      colors
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
});
