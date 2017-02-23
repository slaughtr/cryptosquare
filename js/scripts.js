
var encryptFunction = function(unencrypted) {
  var index = 0;
  var removeSpecials = unencrypted.toLowerCase().match(/[a-zA-Z]/gi)
  var numChars = removeSpecials.length;
  var xAxis = gridDimensions(numChars);
  var result = [];

  for(var x = 0; x < removeSpecials.length; x+=xAxis){
    result.push(removeSpecials.slice(x, x+xAxis));
  }

  var output = cryptoOutput(result);
  output = chunk(output, 5).join(' ');
  return output;
}

var cryptoOutput = function(array) {
  var outputString = "";
  
  for (var x = 0; x < array.length; x++) {
    array.forEach(function(subArray) {
      var arrayToString = subArray.join("");

      if (arrayToString[x] === undefined) {
        outputString += ""
      } else {
        outputString = outputString + arrayToString[x];
      }

    });
  }
  return outputString;
}

function chunk(stringLength, n) {
  var result = [];
  var i;
  var len;

  for(i = 0, len = stringLength.length; i < len; i += n) {
    result.push(stringLength.substr(i, n))
  }

  return result
};

var gridDimensions = function(length) {
  var sqrCheck = Math.sqrt(length);
  var xSide = parseInt(Math.sqrt(length));

  if (sqrCheck % 1 !== 0) {
    xSide += 1;
  }

  var dimensions = xSide;
  return dimensions;
}

$(document).ready(function(){
  $("form#userInput").submit(function(){
    event.preventDefault();
    var value = $("#inputString").val();
    $("#result").show();
    $("#resultP").text(encryptFunction(value));
  });
});
