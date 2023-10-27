const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function() {
    console.log("Button clicked");
    if (this.classList.contains('bi-moon-fill')) {
        this.classList.replace('bi-moon-fill', 'bi-brightness-high-fill');
        console.log("Switched to sun icon");
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';
    } else {
        this.classList.replace('bi-brightness-high-fill', 'bi-moon-fill');
        console.log("Switched to moon icon");
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s';
    }
});