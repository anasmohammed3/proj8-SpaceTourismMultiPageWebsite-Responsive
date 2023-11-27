var moon = document.querySelector('#moon');
var mars = document.querySelector("#mars");
var europa = document.querySelector("#europa");
var titan = document.querySelector("#titan");
var moon1 = document.querySelector('.moon1');
var mars1 = document.querySelector(".mars1");
var europa1 = document.querySelector(".europa1");
var titan1 = document.querySelector(".titan1");

document.body.addEventListener('click', function(event) {
    if (event.target.classList.contains('moon1')) {
        event.preventDefault();
        moon.style.display = 'block';
        mars.style.display = 'none';
        europa.style.display = 'none';
        titan.style.display = 'none';
    }
    // Add similar checks for other elements
});


document.body.addEventListener('click', function(event) {
    if (event.target.classList.contains('mars1')) {
        event.preventDefault();
        moon.style.display = 'none';
        mars.style.display = 'block';
        europa.style.display = 'none';
        titan.style.display = 'none';
    }
    // Add similar checks for other elements
});

document.body.addEventListener('click', function(event) {
    if (event.target.classList.contains('europa1')) {
        event.preventDefault();
        moon.style.display = 'none';
        mars.style.display = 'none';
        europa.style.display = 'block';
        titan.style.display = 'none';
    }
    // Add similar checks for other elements
});

document.body.addEventListener('click', function(event) {
    if (event.target.classList.contains('titan1')) {
        event.preventDefault();
        moon.style.display = 'none';
        mars.style.display = 'none';
        europa.style.display = 'none';
        titan.style.display = 'block';
    }
    // Add similar checks for other elements
});












var all4 = document.querySelector(".all4");
var all5 = document.querySelector(".all5");
var all6 = document.querySelector(".all6");
var all7 = document.querySelector(".all7");
var buttons = document.querySelectorAll('.buttons22 button');

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        // Hide all crew sections
        all4.style.display = "none";
        all5.style.display = "none";
        all6.style.display = "none";
        all7.style.display = "none";

        // Show the selected crew section based on the data-target attribute of the clicked button
        var targetSelector = button.getAttribute('data-target');
        var targetSection = document.querySelector(targetSelector);
        if (targetSection) {
            targetSection.style.display = "block";
        }
    });
});












var all8 = document.querySelector(".all8");
var all9 = document.querySelector(".all9");
var all10 = document.querySelector(".all10");
var buttons1 = document.querySelectorAll('.buttons23 button');

buttons1.forEach(function(button) {
    button.addEventListener('click', function() {
        // Hide all crew sections
        all8.style.display = "none";
        all9.style.display = "none";
        all10.style.display = "none";

        // Show the selected crew section based on the data-target attribute of the clicked button
        var targetSelector = button.getAttribute('data-target');
        var targetSection = document.querySelector(targetSelector);
        if (targetSection) {
            targetSection.style.display = "block";
        }
    });
});






var close = document.querySelector(".close");
var click = document.querySelector(".clic")
var bar1 = document.querySelector(".bar1")



click.onclick = function(){
    bar1.style.display = "block"
}


close.onclick = function(){
    bar1.style.display = "none"
}



