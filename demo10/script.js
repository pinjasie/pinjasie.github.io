const progress = document.getElementById('progress');
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle');

var currentActive = 0; //funktio, joka kertoo mikä nappula on aktiivinen. Ei toimi täysin oikein, vaikka miten säätää
next.addEventListener('click', () => {
    currentActive++;
    if(currentActive > circles.length){
        currentActive = circles.length;
    }
    update();
})

prev.addEventListener('click', () => {
    currentActive--;
    if(currentActive < 0){
        currentActive = 0;
    }
    update();
})

function update() { //päivittää aktiivisena olevan pallon sen mukaan, missä osiossa mennään
    //Active class in circle
    circles.forEach((circle, index) => {
        if(index < currentActive){
            circle.classList.add('active')
        } else{
            circle.classList.remove('active')
        }
    })

    //progress bar
    var activeCircles = document.querySelectorAll('active');

    progress.style.width = (activeCircles.length) / (circles.length) * 100 + '%'
    console.log(currentActive.length / circles.length);

    //change btn enabled/disabled state
    if(currentActive === 1) {
        prev.disabled = true;
    } else if(currentActive === circles.length){
        next.disabled = true;
    } else{
        prev.disabled = false;
        next.disabled = false;
    }

}