// Cuenta regresiva para el Baby Shower. Hora local de Colombia (UTC-5).
const eventDate = new Date('2026-12-19T13:00:00-05:00').getTime();
const fields = {
  days: document.getElementById('days'),
  hours: document.getElementById('hours'),
  minutes: document.getElementById('minutes'),
  seconds: document.getElementById('seconds')
};
function updateCountdown(){
  const distance = eventDate - Date.now();
  if(distance <= 0){
    document.getElementById('countdown').innerHTML = '<p class="event-live">¡Hoy celebramos la llegada de Maria Isabella! ♡</p>';
    return;
  }
  fields.days.textContent = Math.floor(distance / 86400000);
  fields.hours.textContent = String(Math.floor((distance % 86400000) / 3600000)).padStart(2,'0');
  fields.minutes.textContent = String(Math.floor((distance % 3600000) / 60000)).padStart(2,'0');
  fields.seconds.textContent = String(Math.floor((distance % 60000) / 1000)).padStart(2,'0');
}
updateCountdown();
setInterval(updateCountdown,1000);
