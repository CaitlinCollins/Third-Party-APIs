var btnNine = $("#nine");
// var inputNine = $("#textNine");
var btnTen = $("#nine");
// var inputTen = $("#textTen");
var btnElev = $("#nine");
// var inputElev = $("#textElev");
var btnTwel = $("#nine");
// var inputTwel = $("#textTwel");
var btnOne = $("#nine");
// var inputOne = $("#textOne");
var btnTwo = $("#nine");
// var inputTwo = $("#textTwo");
var btnThree = $("#nine");
// var inputThree = $("#textThree");
var btnFour = $("#nine");
// var inputFour = $("#textFour");
var btnFive = $("#nine");
// var inputFive = $("#textFive");


$(btnNine).on("click", function getValue(){
    var inputNine = $("#textNine").val();
    localStorage.setItem("entryNine", inputNine);
    // Get the stored input and render it to the page.
    function getInput() {
        var storedEntryNine = localStorage.getItem("entryNine");
        console.log(storedEntryNine);
        inputNine.val(storedEntryNine);
    }
    getInput();
});

$(btnTen).on("click", function getValue(){
    inputTen = $("#textTen").val();
    var entryTen = localStorage.setItem("entryTen", inputTen);
});
$(btnElev).on("click", function getValue(){
    inputElev = $("#textElev").val();
    var entryElev = localStorage.setItem("entryElev", inputElev);
});
$(btnTwel).on("click", function getValue(){
    inputTwel = $("#textTwel").val();
    var entryTwel = localStorage.setItem("entryTwel", inputTwel);
});
$(btnOne).on("click", function getValue(){
    inputOne = $("#textOne").val();
    var entryOne = localStorage.setItem("entryOne", inputOne);
});
$(btnTwo).on("click", function getValue(){
    inputTwo = $("#textTwo").val();
    var entryTwo = localStorage.setItem("entryTwo", inputTwo);
});
$(btnThree).on("click", function getValue(){
    inputThree = $("#textThree").val();
    var entryThree = localStorage.setItem("entryThree", inputThree);
});
$(btnFour).on("click", function getValue(){
    inputFour = $("#textFour").val();
    var entryFour = localStorage.setItem("entryFour", inputFour);
});
$(btnFive).on("click", function getValue(){
    inputFive = $("#textFive").val();
    var entryFive = localStorage.setItem("entryFive", inputFive);
});



// Setting the local date and time.


