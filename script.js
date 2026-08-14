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

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
