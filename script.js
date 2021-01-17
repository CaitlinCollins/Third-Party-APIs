var btnNine = $("#nine");
var inputNine = $("#textNine");
var btnTen = $("#nine");
var inputTen = $("#textTen");
var btnElev = $("#nine");
var inputElev = $("#textElev");
var btnTwel = $("#nine");
var inputTwel = $("#textTwel");
var btnOne = $("#nine");
var inputOne = $("#textOne");
var btnTwo = $("#nine");
var inputTwo = $("#textTwo");
var btnThree = $("#nine");
var inputThree = $("#textThree");
var btnFour = $("#nine");
var inputFour = $("#textFour");
var btnFive = $("#nine");
var inputFive = $("#textFive");

onPageLoad()

function onPageLoad() {
    getValue();
    var keys = ["entryNine", "entryTen", "entryElev", "entryTwel", "entryOne", "entryTwo", "entryThree", "entryFour", "entryFive"];
   
    for (var i = 0; i<localStorage.length; i++) {
        inputNine.val(localStorage.getItem(keys[0]));
        inputTen.val(localStorage.getItem(keys[1]));
        inputElev.val(localStorage.getItem(keys[2]));
        inputTwel.val(localStorage.getItem(keys[3]));
        inputOne.val(localStorage.getItem(keys[4]));
        inputTwo.val(localStorage.getItem(keys[5]));
        inputThree.val(localStorage.getItem(keys[6]));
        inputFour.val(localStorage.getItem(keys[7]));
        inputFive.val(localStorage.getItem(keys[8]));  
    }
};



function getValue(){

$(btnNine).on("click", function(){
    var inputNineValue = $("#textNine").val();
    localStorage.setItem("entryNine", inputNineValue);
});

$(btnTen).on("click", function(){
    inputTenValue = $("#textTen").val();
    localStorage.setItem("entryTen", inputTenValue);
});
$(btnElev).on("click", function(){
    inputElevValue = $("#textElev").val();
    localStorage.setItem("entryElev", inputElevValue);
});
$(btnTwel).on("click", function(){
    inputTwelValue = $("#textTwel").val();
    localStorage.setItem("entryTwel", inputTwelValue);
});
$(btnOne).on("click", function(){
    inputOneValue = $("#textOne").val();
    localStorage.setItem("entryOne", inputOneValue);
});
$(btnTwo).on("click", function(){
    inputTwoValue = $("#textTwo").val();
    localStorage.setItem("entryTwo", inputTwoValue);
});
$(btnThree).on("click", function(){
    inputThreeValue = $("#textThree").val();
    localStorage.setItem("entryThree", inputThreeValue);
});
$(btnFour).on("click", function(){
    inputFourValue = $("#textFour").val();
    localStorage.setItem("entryFour", inputFourValue);
});
$(btnFive).on("click", function(){
    inputFiveValue = $("#textFive").val();
    localStorage.setItem("entryFive", inputFiveValue);
});

};



// Setting the local date and time.


