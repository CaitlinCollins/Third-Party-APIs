var btnNine = $("#nine");
var inputNine = $("#textNine");
var btnTen = $("#ten");
var inputTen = $("#textTen");
var btnElev = $("#eleven");
var inputElev = $("#textElev");
var btnTwel = $("#twelve");
var inputTwel = $("#textTwel");
var btnOne = $("#one");
var inputOne = $("#textOne");
var btnTwo = $("#two");
var inputTwo = $("#textTwo");
var btnThree = $("#three");
var inputThree = $("#textThree");
var btnFour = $("#four");
var inputFour = $("#textFour");
var btnFive = $("#five");
var inputFive = $("#textFive");

onPageLoad()

function onPageLoad() {
    getValue();
    getCurrentDate();
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
    };
};



function getValue(){

$(btnNine).on("click", function(){
    var inputNineValue = $("#textNine").val();
    localStorage.setItem("entryNine", inputNineValue);
});

$(btnTen).on("click", function(){
    var inputTenValue = $("#textTen").val();
    localStorage.setItem("entryTen", inputTenValue);
});

$(btnElev).on("click", function(){
    var inputElevValue = $("#textElev").val();
    localStorage.setItem("entryElev", inputElevValue);
});
$(btnTwel).on("click", function(){
    var inputTwelValue = $("#textTwel").val();
    localStorage.setItem("entryTwel", inputTwelValue);
});
$(btnOne).on("click", function(){
    var inputOneValue = $("#textOne").val();
    localStorage.setItem("entryOne", inputOneValue);
});
$(btnTwo).on("click", function(){
    var inputTwoValue = $("#textTwo").val();
    localStorage.setItem("entryTwo", inputTwoValue);
});
$(btnThree).on("click", function(){
    var inputThreeValue = $("#textThree").val();
    localStorage.setItem("entryThree", inputThreeValue);
});
$(btnFour).on("click", function(){
    var inputFourValue = $("#textFour").val();
    localStorage.setItem("entryFour", inputFourValue);
});
$(btnFive).on("click", function(){
    var inputFiveValue = $("#textFive").val();
    localStorage.setItem("entryFive", inputFiveValue);
});

};


// Setting the local date and time.
function getCurrentDate(){
    const now = moment().format("MMMM Do YYYY, h:mm:ss a");
    console.log(now);

    var today = moment().format("dddd, MMMM Do");
    var currentDay = $("#currentDay");
    currentDay.html(today);
}
