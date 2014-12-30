var Result = require('./result');
var Player = require('./player');
var Weapon = require('./weapon');
var Armor = require('./armor');

game();


function game() {
  var playerOne = new Player('张三', 100, 20,'战士');
  var playerTwo = new Player('李四', 100, 10,'普通人');

  var weapon = new Weapon('指甲刀',5);
  var armor = new Armor('WTAPS',5);

  console.log('战斗倒计时'+'\n');
  var timeout_ms = 1000;
  var timeout = setTimeout(function() {
    console.log("3!");
  }, timeout_ms);
  var timeout_ms1 = 2000;
  var timeout1 = setTimeout(function() {
    console.log("2!");
  }, timeout_ms1);
  var timeout_ms2 = 3000;
  var timeout2 = setTimeout(function() {
    console.log("1!");
  }, timeout_ms2);
  var timeout_ms4 = 4000;
  var timeout4 = setTimeout(function() {
    console.log("开始!");
  }, timeout_ms4);


  var timeout_ms3 = 5000;
  var timeout3 = setTimeout(function() {
console.log(Result.getScore(playerOne, playerTwo, weapon, armor));
  }, timeout_ms3);
}
