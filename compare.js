document.querySelectorAll('.img-compare').forEach(container => {
  const overlay = container.querySelector('img:last-child');

  container.addEventListener('mousemove', e => {
    const rect = container.getBoundingClientRect();
    let x = e.clientX - rect.left;
    x = Math.max(0, Math.min(x, rect.width));
    const percent = (x / rect.width) * 100;

    overlay.style.clipPath = `inset(0 0 0 ${percent}%)`;
  });

  container.addEventListener('mouseleave', () => {
    overlay.style.clipPath = `inset(0 0 0 50%)`;
  });
});
