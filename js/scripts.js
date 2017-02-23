
var encryptFunction = function(unencrypted) {
  var removeSpecials = unencrypted.toLowerCase().match(/[a-zA-Z]/gi)
  var numChars = removeSpecials.length;
}

var gridDimensions = function(length) {
  var xSide = int(sqrt(length))
  var ySide = 0;
  var dimensions = [];
  if (length % 1 === 0) {
    ySide = int(length/xSide);
  } else {
    ySide = int(length/xSide) + 1;
  }

  return dimensions[xSide, ySide];
}

$(document).ready(function(){
  $("form#userInput").submit(function(){
    event.preventDefault();
    var value = $("#inputString").val();
    $("#result").show();
    $("#resultP").text(encryptFunction(value));
  });
});
