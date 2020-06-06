var generateFriendCount = function(name) {
  var lTF = function(letter) {
    var cap = letter.toUpperCase();
    var number = cap.charCodeAt(0) - 65;
    return number;
  };

  var count = Math.floor(
    ((lTF(name.last) + lTF(name.first[1])) * lTF(name.first[0])) / 15
  );
  return count;
};

module.exports = generateFriendCount;
