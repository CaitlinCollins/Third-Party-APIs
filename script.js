var nine = $("#nine");
var inputNine = $("#textNine");
var ten = $("#nine");
var inputTen = $("#textTen");
var eleven = $("#nine");
var inputElev = $("#textElev");
var twelve = $("#nine");
var inputTwel = $("#textTwel");
var one = $("#nine");
var inputOne = $("#textOne");
var two = $("#nine");
var inputTwo = $("#textTwo");
var three = $("#nine");
var inputThree = $("#textThree");
var four = $("#nine");
var inputFour = $("#textFour");
var five = $("#nine");
var inputFive = $("#textFive");

// Setting the local date and time.

// var buttons = [
//     {
//         hour: "$('#nine')",
//         text: "$('#textNine')",
//     },
//     {
//         hour: ten,
//         text: inputTen,
//     },
//     {
//         hour: eleven, 
//         text: inputElev,
//     },
//     {
//         hour: twelve, 
//         text: inputTwel,
//     },
//     {
//         hour: one,
//         text: inputOne,
//     },
//     {
//         hour: two, 
//         text: inputTwo,
//     },
//     {
//         hour: three, 
//         text: inputThree,
//     },
//     {
//         hour: four, 
//         text: inputFour,
//     },
//     {
//         hour: five,
//         text: inputFive,
//     },
    
//     ];

// // var inputs = [inputNine, inputTen, inputElev, inputTwel, inputOne, inputTwo, inputThree, inputFour, inputFive];

// for (i=0; i<buttons.length; i++) {
//     console.log(buttons[i]);

// // Store textarea input to local storage on click.
// $(buttons[i]).on("click", function (){
//     localStorage.setItem("input", buttons[i].text.val());
// })
// // Get the stored input and render it to the page.
// function getInput() {
//     var storedInput = localStorage.getItem("input");
//     buttons[i].text.val(storedInput);
// }
// getInput()
// }

// Store textarea input to local storage on click.
function getNine() {
$(nine).on("click", function (){
    localStorage.setItem("input", inputNine.val());
})
// Get the stored input and render it to the page.
function getInput() {
    var storedInput = localStorage.getItem("input");
    inputNine.val(storedInput);
    console.log(storedInput);
}
getInput();
}
getNine();

// Store textarea input to local storage on click.
function getTen() {
$(ten).on("click", function (){
    localStorage.setItem("input", inputTen.val());
})
// Get the stored input and render it to the page.
function getInput() {
    var storedInput = localStorage.getItem("input");
    inputTen.val(storedInput);
    console.log(storedInput);
}
getInput();
}
getTen();

// // Store textarea input to local storage on click.
// $(eleven).on("click", function (){
//     localStorage.setItem("input", inputElev.val());
// })
// // Get the stored input and render it to the page.
// function getInput() {
//     var storedInput = localStorage.getItem("input");
//     inputElev.val(storedInput);
//     console.log(storedInput);
// }
// getInput();

// // Store textarea input to local storage on click.
// $(twelve).on("click", function (){
//     localStorage.setItem("input", inputTwel.val());
// })
// // Get the stored input and render it to the page.
// function getInput() {
//     var storedInput = localStorage.getItem("input");
//     inputTwel.val(storedInput);
//     console.log(storedInput);
// }
// getInput();

// // Store textarea input to local storage on click.
// $(one).on("click", function (){
//     localStorage.setItem("input", inputOne.val());
// })
// // Get the stored input and render it to the page.
// function getInput() {
//     var storedInput = localStorage.getItem("input");
//     inputOne.val(storedInput);
//     console.log(storedInput);
// }
// getInput();

// // Store textarea input to local storage on click.
// $(two).on("click", function (){
//     localStorage.setItem("input", inputTwo.val());
// })
// // Get the stored input and render it to the page.
// function getInput() {
//     var storedInput = localStorage.getItem("input");
//     inputTWo.val(storedInput);
//     console.log(storedInput);
// }
// getInput();

// // Store textarea input to local storage on click.
// $(three).on("click", function (){
//     localStorage.setItem("input", inputThree.val());
// })
// // Get the stored input and render it to the page.
// function getInput() {
//     var storedInput = localStorage.getItem("input");
//     inputThree.val(storedInput);
//     console.log(storedInput);
// }
// getInput();

// // Store textarea input to local storage on click.
// $(four).on("click", function (){
//     localStorage.setItem("input", inputFour.val());
// })
// // Get the stored input and render it to the page.
// function getInput() {
//     var storedInput = localStorage.getItem("input");
//     inputFour.val(storedInput);
//     console.log(storedInput);
// }
// getInput();

// // Store textarea input to local storage on click.
// $(five).on("click", function (){
//     localStorage.setItem("input", inputFive.val());
// })
// // Get the stored input and render it to the page.
// function getInput() {
//     var storedInput = localStorage.getItem("input");
//     inputFive.val(storedInput);
//     console.log(storedInput);
// }
// getInput();


