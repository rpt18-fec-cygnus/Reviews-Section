var generateName = function() {
  var first = [
    ['Alan', 'Anya', 'Ace', 'Arielle', 'Brenda', 'Benny', 'Bonny'],
    ['Charles', 'Carly', 'Carlos', 'Calliope', 'Denzel', 'Delia'],
    ['Eduardo', 'Edwina', 'Eric', 'Emma', 'Fritz', 'Fred', 'Fran'],
    ['George', 'Grace', 'Harold', 'Holly', 'Henrietta', 'Heath'],
    ['Igancio', 'Izabel', 'Jeremy', 'Julia', 'Johnny', 'Juanita'],
    ['Kenny', 'Kathy', 'Kris', 'Kit', 'Leona', 'Larry', 'Lisa'],
    ['Mark', 'Margot', 'Manny', 'Mina', 'Nick', 'Nora', 'Nina'],
    ['Olivier', 'Olivia', 'Pat', 'Penny', 'Ron', 'Rita'],
    ['Thom', 'Tina', 'Tad', 'Ugene', 'Ursula', 'Vince', 'Vera'],
    ['Wiley', 'Wendy', 'Xavier', 'Yulia', 'Zena', 'Zora']
  ];

  var last = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  var firstNumA = Math.floor(Math.random() * first.length);
  var firstNumB = Math.floor(Math.random() * first[firstNumA].length);
  var lastNum = Math.floor(Math.random() * 26);

  var name = { first: first[firstNumA][firstNumB], last: last[lastNum] };

  return name;
};

module.exports = generateName