var totalRandomNumbers = [];
var numberPositionCol1 = [];
var numberPositionCol2 = [];
var numberPositionCol3 = [];
var numberPositionCol4 = [];
var numberPositionCol5 = [];
var numberPositionCol6 = [];
var numberPositionCol7 = [];
var numberPositionCol8 = [];
var numberPositionCol9 = [];
var randomTicketNumbers;
var randomPosition;
var count = 90;
var numberSelection = 10;




$(".generateTicket").click(function() {
  $(".generateTicket").css("visibility", "hidden");
  while (totalRandomNumbers.length < 15) {
    randomTicketNumbers = Math.floor((Math.random() * 90) + 1);
    if (randomTicketNumbers >= 1 && randomTicketNumbers <= 9) {
      if (numberPositionCol1.includes(randomTicketNumbers)) {
        continue;
      } else if (numberPositionCol1.length > 2) {
        continue;
      } else {
        numberPositionCol1.push(randomTicketNumbers);
      }
    }
    if (randomTicketNumbers >= 10 && randomTicketNumbers <= 19) {
      if (numberPositionCol2.includes(randomTicketNumbers)) {
        continue;
      } else if (numberPositionCol2.length > 2) {
        continue;
      } else {
        numberPositionCol2.push(randomTicketNumbers);
      }
    }
    if (randomTicketNumbers >= 20 && randomTicketNumbers <= 29) {
      if (numberPositionCol3.includes(randomTicketNumbers)) {
        continue;
      } else if (numberPositionCol3.length > 2) {
        continue;
      } else {
        numberPositionCol3.push(randomTicketNumbers);
      }
    }
    if (randomTicketNumbers >= 30 && randomTicketNumbers <= 39) {
      if (numberPositionCol4.includes(randomTicketNumbers)) {
        continue;
      } else if (numberPositionCol4.length > 2) {
        continue;
      } else {
        numberPositionCol4.push(randomTicketNumbers);
      }
    }
    if (randomTicketNumbers >= 40 && randomTicketNumbers <= 49) {
      if (numberPositionCol5.includes(randomTicketNumbers)) {
        continue;
      } else if (numberPositionCol5.length > 2) {
        continue;
      } else {
        numberPositionCol5.push(randomTicketNumbers);
      }
    }
    if (randomTicketNumbers >= 50 && randomTicketNumbers <= 59) {
      if (numberPositionCol6.includes(randomTicketNumbers)) {
        continue;
      } else if (numberPositionCol6.length > 2) {
        continue;
      } else {
        numberPositionCol6.push(randomTicketNumbers);
      }
    }
    if (randomTicketNumbers >= 60 && randomTicketNumbers <= 69) {
      if (numberPositionCol7.includes(randomTicketNumbers)) {
        continue;
      } else if (numberPositionCol7.length > 2) {
        continue;
      } else {
        numberPositionCol7.push(randomTicketNumbers);
      }
    }
    if (randomTicketNumbers >= 70 && randomTicketNumbers <= 79) {
      if (numberPositionCol8.includes(randomTicketNumbers)) {
        continue;
      } else if (numberPositionCol8.length > 2) {
        continue;
      } else {
        numberPositionCol8.push(randomTicketNumbers);
      }
    }
    if (randomTicketNumbers >= 80 && randomTicketNumbers <= 90) {
      if (numberPositionCol9.includes(randomTicketNumbers)) {
        continue;
      } else if (numberPositionCol9.length > 2) {
        continue;
      } else {
        numberPositionCol9.push(randomTicketNumbers);
      }
    }
    totalRandomNumbers.push(randomTicketNumbers);
  }

  numberPositionCol1.sort(function(a, b) {
    return a - b
  });
  numberPositionCol2.sort(function(a, b) {
    return a - b
  });
  numberPositionCol3.sort(function(a, b) {
    return a - b
  });
  numberPositionCol4.sort(function(a, b) {
    return a - b
  });
  numberPositionCol5.sort(function(a, b) {
    return a - b
  });
  numberPositionCol6.sort(function(a, b) {
    return a - b
  });
  numberPositionCol7.sort(function(a, b) {
    return a - b
  });
  numberPositionCol8.sort(function(a, b) {
    return a - b
  });
  numberPositionCol9.sort(function(a, b) {
    return a - b
  });
  totalRandomNumbers.sort(function(a, b) {
    return a - b
  });

  if (numberPositionCol1.length === 1) {
    $(".ticketNumber11").text(numberPositionCol1[0]);
  }
  else if (numberPositionCol1.length === 2) {
    $(".ticketNumber1").text(numberPositionCol1[0]);
    $(".ticketNumber21").text(numberPositionCol1[1]);
  }
  else if (numberPositionCol1.length === 3) {
    $(".ticketNumber1").text(numberPositionCol1[0]);
    $(".ticketNumber11").text(numberPositionCol1[1]);
    $(".ticketNumber21").text(numberPositionCol1[2]);
  }

  if (numberPositionCol2.length === 1) {
    $(".ticketNumber12").text(numberPositionCol2[0]);
  }
  else if (numberPositionCol2.length === 2) {
    $(".ticketNumber2").text(numberPositionCol2[0]);
    $(".ticketNumber22").text(numberPositionCol2[1]);
  }
  else if (numberPositionCol2.length === 3) {
    $(".ticketNumber2").text(numberPositionCol2[0]);
    $(".ticketNumber12").text(numberPositionCol2[1]);
    $(".ticketNumber22").text(numberPositionCol2[2]);
  }

  if (numberPositionCol3.length === 1) {
    $(".ticketNumber13").text(numberPositionCol3[0]);
  }
  else if (numberPositionCol3.length === 2) {
    $(".ticketNumber3").text(numberPositionCol3[0]);
    $(".ticketNumber23").text(numberPositionCol3[1]);
  }
  else if (numberPositionCol3.length === 3) {
    $(".ticketNumber3").text(numberPositionCol3[0]);
    $(".ticketNumber13").text(numberPositionCol3[1]);
    $(".ticketNumber23").text(numberPositionCol3[2]);
  }

  if (numberPositionCol4.length === 1) {
    $(".ticketNumber14").text(numberPositionCol4[0]);
  }
  else if (numberPositionCol4.length === 2) {
    $(".ticketNumber4").text(numberPositionCol4[0]);
    $(".ticketNumber24").text(numberPositionCol4[1]);
  }
  else if (numberPositionCol4.length === 3) {
    $(".ticketNumber4").text(numberPositionCol4[0]);
    $(".ticketNumber14").text(numberPositionCol4[1]);
    $(".ticketNumber24").text(numberPositionCol4[2]);
  }

  if (numberPositionCol5.length === 1) {
    $(".ticketNumber15").text(numberPositionCol5[0]);
  }
  else if (numberPositionCol5.length === 2) {
    $(".ticketNumber5").text(numberPositionCol5[0]);
    $(".ticketNumber25").text(numberPositionCol5[1]);
  }
  else if (numberPositionCol5.length === 3) {
    $(".ticketNumber5").text(numberPositionCol5[0]);
    $(".ticketNumber15").text(numberPositionCol5[1]);
    $(".ticketNumber25").text(numberPositionCol5[2]);
  }

  if (numberPositionCol6.length === 1) {
    $(".ticketNumber16").text(numberPositionCol6[0]);
  }
  else if (numberPositionCol6.length === 2) {
    $(".ticketNumber6").text(numberPositionCol6[0]);
    $(".ticketNumber26").text(numberPositionCol6[1]);
  }
  else if (numberPositionCol6.length === 3) {
    $(".ticketNumber6").text(numberPositionCol6[0]);
    $(".ticketNumber16").text(numberPositionCol6[1]);
    $(".ticketNumber26").text(numberPositionCol6[2]);
  }

  if (numberPositionCol7.length === 1) {
    $(".ticketNumber17").text(numberPositionCol7[0]);
  }
  else if (numberPositionCol7.length === 2) {
    $(".ticketNumber7").text(numberPositionCol7[0]);
    $(".ticketNumber27").text(numberPositionCol7[1]);
  }
  else if (numberPositionCol7.length === 3) {
    $(".ticketNumber7").text(numberPositionCol7[0]);
    $(".ticketNumber17").text(numberPositionCol7[1]);
    $(".ticketNumber27").text(numberPositionCol7[2]);
  }

  if (numberPositionCol8.length === 1) {
    $(".ticketNumber18").text(numberPositionCol8[0]);
  }
  else if (numberPositionCol8.length === 2) {
    $(".ticketNumber8").text(numberPositionCol8[0]);
    $(".ticketNumber28").text(numberPositionCol8[1]);
  }
  else if (numberPositionCol8.length === 3) {
    $(".ticketNumber8").text(numberPositionCol8[0]);
    $(".ticketNumber18").text(numberPositionCol8[1]);
    $(".ticketNumber28").text(numberPositionCol8[2]);
  }

  if (numberPositionCol9.length === 1) {
    $(".ticketNumber19").text(numberPositionCol9[0]);
  }
  else if (numberPositionCol9.length === 2) {
    $(".ticketNumber9").text(numberPositionCol9[0]);
    $(".ticketNumber29").text(numberPositionCol9[1]);
  }
  else if (numberPositionCol9.length === 3) {
    $(".ticketNumber9").text(numberPositionCol9[0]);
    $(".ticketNumber19").text(numberPositionCol9[1]);
    $(".ticketNumber29").text(numberPositionCol9[2]);
  }

});

var numberofTicketDivs = document.querySelectorAll(".col").length;

for (var i = 0; i < numberofTicketDivs; i++) {

  document.querySelectorAll(".col")[i].addEventListener("click", function() {

    if (this.innerHTML > 0) {
    this.style.backgroundColor="#ff5200";
  }

  });

}


// $(document).click( function(){
//
// });

// var allColumns = [numberPositionCol1, numberPositionCol2, numberPositionCol3, numberPositionCol4, numberPositionCol5,
//   numberPositionCol6, numberPositionCol7, numberPositionCol8, numberPositionCol9];
//
//   for (var i = 0; i < allColumns.length; i++) {
//     if (allColumns[i].length > 3) {
//       allColumns[i].pop();
//       var ind = findLeastlen(allColumns);
//       var low = allColumns[ind];
//       console.log(low);
//       low.push(Math.floor(
//         Math.random()*maxAllowed(ind)));
//     }
//   }

// console.log("AFTER CHANGES");
// console.log(numberPositionCol1);
// console.log(numberPositionCol2);
// console.log(numberPositionCol3);
// console.log(numberPositionCol4);
// console.log(numberPositionCol5);
// console.log(numberPositionCol6);
// console.log(numberPositionCol7);
// console.log(numberPositionCol8);
// console.log(numberPositionCol9);


// });

function findLeastlen(x) {
  var least = 99999;
  var leastIndex = 0;
  for (var i = 0; i < x.length; i++) {
    if (x[i].length < least) {
      least = x[i].length;
      leastIndex = i;
    }
  }
  return leastIndex;
}

function maxAllowed(x) {
  for (var i = 1; i <= 9; i += 1) {
    if (x === i) {
      return i * 10;
    }
  }
}
