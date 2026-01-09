document.querySelectorAll('.img-compare').forEach(container => {
  const overlay = container.querySelector('img:last-child');
  const handle = container.querySelector('.slider-handle');

  let isDragging = false;

  function setSliderPosition(clientX) {
    const rect = container.getBoundingClientRect();
    let x = clientX - rect.left;

    x = Math.max(0, Math.min(x, rect.width));
    const percent = (x / rect.width) * 100;

    container.style.setProperty('--slider-x', `${percent}%`);
    overlay.style.clipPath = `inset(0 0 0 ${percent}%)`;
  }

  /* =====================
     MOUSE EVENTS
     ===================== */
  handle.addEventListener('mousedown', () => {
    isDragging = true;
    document.body.style.userSelect = 'none';
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
    document.body.style.userSelect = '';
  });

  window.addEventListener('mousemove', e => {
    if (!isDragging) return;
    setSliderPosition(e.clientX);
  });

  /* =====================
     TOUCH EVENTS (mobile)
     ===================== */
  handle.addEventListener('touchstart', () => {
    isDragging = true;
  });

  window.addEventListener('touchend', () => {
    isDragging = false;
  });

  window.addEventListener('touchmove', e => {
    if (!isDragging) return;
    setSliderPosition(e.touches[0].clientX);
  });

  /* =====================
     START CENTERED
     ===================== */
  setSliderPosition(
    container.getBoundingClientRect().width / 2 +
    container.getBoundingClientRect().left
  );
});
