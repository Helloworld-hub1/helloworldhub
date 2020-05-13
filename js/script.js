/* Toggle for Menu */
const head = document.querySelector('header');
const toggleMenu = document.getElementById('toggle-menu');

toggleMenu.addEventListener('click', function(){
    head.classList.toggle('open-menu');
});

/* Toggle for Next events */
const eventPeriodNext = document.getElementById('event_period_next');
const eventNext = document.getElementById('event_next');
 eventNext.addEventListener('click', function(){
    eventPeriodNext.classList.toggle('open-event1'); 
 });

/* Toggle for Past events */
const eventPeriodPast = document.getElementById('event_period_past');
const eventPast = document.getElementById('event_past');
 eventPast.addEventListener('click', function(){
    eventPeriodPast.classList.toggle('open-event2'); 
 });