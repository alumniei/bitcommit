// BitCommit 2026 Interactive Script

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Live Countdown Timer ---
  const cdCard = document.getElementById('countdown-card');
  if (cdCard) {
    const targetDateStr = cdCard.getAttribute('data-event-time') || '2026-10-10T14:30:00+01:00';
    const targetDate = new Date(targetDateStr).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        const elDays = document.getElementById('cd-days');
        const elHours = document.getElementById('cd-hours');
        const elMinutes = document.getElementById('cd-minutes');
        const elSeconds = document.getElementById('cd-seconds');

        if (elDays) elDays.textContent = String(days);
        if (elHours) elHours.textContent = String(hours);
        if (elMinutes) elMinutes.textContent = String(minutes);
        if (elSeconds) elSeconds.textContent = String(seconds);
      }
    };

    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

  // --- 2. Speaker Carousel Controls ---
  const track = document.querySelector('.v1-speakers-track');
  const prevBtn = document.querySelector('.v1-carousel-prev');
  const nextBtn = document.querySelector('.v1-carousel-next');

  if (track && prevBtn && nextBtn) {
    const scrollAmount = 300;
    prevBtn.addEventListener('click', () => {
      track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
    nextBtn.addEventListener('click', () => {
      track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
  }
});
