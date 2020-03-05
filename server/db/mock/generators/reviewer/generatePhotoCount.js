var generatePhotoCount = function(name) {
  var lTF = function(letter) {
    var cap = letter.toUpperCase();
    var number = cap.charCodeAt(0) - 65;
    return number;
  };

  var a = lTF(name.last) + lTF(name.first[1]);
  var b = lTF(name.last) + lTF(name.first[0]);

  var count = Math.floor((2 * a) + b / 2);
  return count;
};

module.exports = generatePhotoCount