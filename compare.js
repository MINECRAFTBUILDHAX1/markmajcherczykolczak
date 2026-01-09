document.querySelectorAll('.img-compare').forEach(container => {
  const overlay = container.querySelector('img:last-child');
  let line = container;

  function moveSlider(x) {
    const rect = container.getBoundingClientRect();
    x = Math.max(0, Math.min(x, rect.width));
    const percent = (x / rect.width) * 100;

    overlay.style.clipPath = `inset(0 0 0 ${percent}%)`;
    container.style.setProperty('--slider-x', `${percent}%`);
  }

  container.addEventListener('mousemove', e => {
    moveSlider(e.clientX - container.getBoundingClientRect().left);
  });

  container.addEventListener('mouseleave', () => {
    moveSlider(container.offsetWidth / 2);
  });

  // Start centered
  moveSlider(container.offsetWidth / 2);
});
