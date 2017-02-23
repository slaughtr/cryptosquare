
var encryptFunction = function(unencrypted) {
  var removeSpecials = unencrypted.toLowerCase().match(/[a-zA-Z]/gi)
  var numChars = removeSpecials.length;
  return gridDimensions(numChars);

}

var gridDimensions = function(length) {
  var sqrCheck = Math.sqrt(length);
  var xSide = parseInt(Math.sqrt(length));
  var ySide = parseInt(length/xSide);
  var dimensions = [xSide, ySide];

  if (sqrCheck % 1 !== 0) {
    xSide = xSide + 1;
  }

  return dimensions;
}

$(document).ready(function(){
  $("form#userInput").submit(function(){
    event.preventDefault();
    var value = $("#inputString").val();
    $("#result").show();
    $("#resultP").text(encryptFunction(value));
    console.log(encryptFunction(value));
  });
});
