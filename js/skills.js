const progressBars = document.querySelectorAll('.progress');

window.addEventListener('load', () => {

progressBars.forEach(bar => {

let width = bar.style.width;

bar.style.width = "0";

setTimeout(() => {
bar.style.width = width;
bar.style.transition = "2s";
}, 200);

});

});