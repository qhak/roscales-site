const toast = document.getElementById('toast');
let hideTimer;
document.querySelectorAll('.buy-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    toast.innerHTML = 'To buy the <strong>' + btn.dataset.pack + '</strong> pack — contact me: <a href="mailto:readrew2013@gmail.com">readrew2013@gmail.com</a>';
    toast.classList.add('show');
    clearTimeout(hideTimer);
    hideTimer = setTimeout(() => toast.classList.remove('show'), 6000);
  });
});

const glow = document.getElementById('cursor-glow');
window.addEventListener('mousemove', (e) => {
  glow.style.opacity = '1';
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});
window.addEventListener('mouseleave', () => { glow.style.opacity = '0'; });

const sparkles = ['✨', '💫', '⭐', '🌟'];
let lastSparkle = 0;
window.addEventListener('mousemove', (e) => {
  const now = Date.now();
  if (now - lastSparkle < 60) return;
  lastSparkle = now;
  const el = document.createElement('span');
  el.textContent = sparkles[Math.floor(Math.random() * sparkles.length)];
  el.style.position = 'fixed';
  el.style.left = e.clientX + 'px';
  el.style.top = e.clientY + 'px';
  el.style.pointerEvents = 'none';
  el.style.zIndex = '999';
  el.style.fontSize = (12 + Math.random() * 10) + 'px';
  el.style.transition = 'transform 0.7s ease, opacity 0.7s ease';
  document.body.appendChild(el);
  requestAnimationFrame(() => {
    el.style.transform = 'translateY(-30px) rotate(' + (Math.random() * 90 - 45) + 'deg)';
    el.style.opacity = '0';
  });
  setTimeout(() => el.remove(), 700);
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
