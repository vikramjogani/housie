
var randomHousieNumber;
var housieNumber = [];
var totalHousieNumbers = 90;

function changeColorNumber(n) {
  document.querySelectorAll(".numberCircle")[n-1].style.backgroundColor = "#ff5200";
  document.querySelectorAll(".numberCircle")[n-1].style.color = "black";
  document.querySelectorAll(".numberCircle")[n-1].style.fontWeigth = "900";

}

$("button").click(function () {
  if (housieNumber.length === totalHousieNumbers) {
    $(".numberGenerated").text("Housie Completed");
    $(".numberGenerated").css("font-size", "1.5rem");
    $(".buttonClick").css("visibility", "hidden");
    return;
  }

//generating random number till it is not eual to numbers in the housieNumber array

randomHousieNumber = Math.floor((Math.random() * totalHousieNumbers) +1);

while (housieNumber.includes(randomHousieNumber)) {

  randomHousieNumber = Math.floor((Math.random() * totalHousieNumbers) +1);


}


housieNumber.push(randomHousieNumber);


$(".numberGenerated").text(randomHousieNumber);
$(".numberGenerated").css("font-size", "2rem");
changeColorNumber(randomHousieNumber);


});

// $(".buttonClick").click("reload()")";
