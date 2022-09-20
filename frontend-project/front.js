// DOM Manipulation
// Event Handling hover need description/alert, click
// AJAX (Using $.get)
// Basic HTML Elements
// CSS: Selectors, properties, how to align elements
// Put together HTML, CSS, and Javascript files so they all run in the browser.

//get info from open library API
let $searchbook = $('input').val()
$.get(`https://gutendex.com/books?search=${$searchbook}`, function (data) {
    console.log(data);
})

//on hover for image show alert book desription
// redButton.addEventListener('click', makeRedBulb);
// function makeRedBulb() {
//     redBulb.style.backgroundColor = 'red';
//property. addEventListener('mouseover', (event) => {}); onmouseover = (event) => { }; A MouseEvent.

// let noticerDescription = 'sometimes all a person needs is a little perspective';
// let noticerHover = document.getElementsByClassName('noticerImage');

// noticerHover.addEventListener('mouseover', noticerSummary);

// function noticerSummary() {
//     alert('sometimes all a person needs is a little perspective');
//     console.log(noticerDescription);
// }
// alert()
// alert(message)

//append images so side by side
document.getElementsByClassName('span')

document.body.appendChild(newSquare);


