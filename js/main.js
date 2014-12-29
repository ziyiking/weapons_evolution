var Result = require('./result');
var Player = require('./player');
var Weapon = require('./weapon');
var Armor = require('./armor');

game();


function game() {
  var playerOne = new Player('张三', 100, 20,'战士');
  var playerTwo = new Player('李四', 100, 10,'普通人');

  var weapon = new Weapon('超级木棍',5);
  var armor = new Armor('防御护盾',5);
  console.log('战斗开始'+'\n');
  Result.getScore(playerOne, playerTwo, weapon, armor);
}
