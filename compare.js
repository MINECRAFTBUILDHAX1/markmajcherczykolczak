document.querySelectorAll('.img-compare').forEach(container => {
  const topImage = container.querySelector('img:first-child');

  container.addEventListener('mousemove', e => {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = (x / rect.width) * 100;
    topImage.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
  });
});
