// head arrow 
const arrow = document.getElementById("arrow");
const menubtn = document.getElementById("menubtn");
menubtn.addEventListener("click", () => {
    if (arrow.classList.contains('ri-arrow-down-s-line')) {
        arrow.classList.add("ri-arrow-up-s-line");
        arrow.classList.remove("ri-arrow-down-s-line");
    } else {
        arrow.classList.add("ri-arrow-down-s-line");
        arrow.classList.remove("ri-arrow-up-s-line");

    }

})


//time count
const day = document.getElementById('day');
const hour = document.getElementById('hour');
const min = document.getElementById('min');
const sec = document.getElementById('sec');

// Set the date we're counting down to
var countDownDate = new Date("march 15, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    day.innerHTML = `<span>${days}</span>days`;
    hour.innerHTML = `<span>${hours}</span>HRS`;
    min.innerHTML = `<span>${minutes}</span>MINS`;
    sec.innerHTML = `<span>${seconds}</span>SECS`;

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        day.innerHTML = `<span>00</span>days`;
        hour.innerHTML = `<span>00</span>HRS`;
        min.innerHTML = `<span>00</span>MINS`;
        sec.innerHTML = `<span>00</span>SECS`;
    }
}, 1000);



//light dark

const toggleSwitch = document.querySelector('.toggle-button');
const light_dark = document.querySelector('#light_dark');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        light_dark.classList.add('ri-sun-fill');
        light_dark.classList.remove('ri-moon-fill');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        light_dark.classList.remove('ri-sun-fill');
        light_dark.classList.add('ri-moon-fill');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);