
var encryptFunction = function(unencrypted) {
  var index = 0;
  var removeSpecials = unencrypted.toLowerCase().match(/[a-zA-Z]/gi)
  var numChars = removeSpecials.length;
  var dimensions = gridDimensions(numChars);
  var xAxis = dimensions[0];
  var yAxis = dimensions[1];
  var result = [];
  // [dimensions[0]][dimensions[1]];


  for(var x = 0; x < xAxis; x++){

    result.push(removeSpecials.slice(index, index+yAxis));
    index += yAxis;
    console.log(index);
    // for(var y = 0; y < dimensions[1]; y++){
    //   if (index <= numChars) {
    //   var tempArray = [];
    //   tempArray.push(removeSpecials[index]);
    //   result.push(tempArray);
    //   index++;
    // } else if(index >= numChars && index < (dimensions[0]*dimensions[1])){
    //   result.push("");
    // }
    // }
  }
  return result;
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
