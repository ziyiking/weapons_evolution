var Player = require('./player');
var Wearpon = require('./weapon');
var Armor = require('./armor');

function Result() {

}

Result.getScore = function(playerOne,playerTwo,weapon,armor) {
  var zhangsan = playerOne.profession + playerOne.name;
  var lisi = playerTwo.profession + playerTwo.name;
  var resultText = '';

  while(true) {
    var attackvalue =playerOne.attack + weapon.attack;
    var armorvalue = playerTwo.attack - armor.defense;

    playerOne.hp = playerOne.hp - armorvalue;
    playerTwo.hp = playerTwo.hp - attackvalue;

    if(playerOne.hp <= 0) {
      resultText += zhangsan + '被打败了！';
      console.log(zhangsan + '被打败了！');
      break;
    }
    resultText += zhangsan + '用' + weapon.name + '攻击了' + lisi + ',' +
    lisi + '受到了' + attackvalue + '点伤害(其中'+ weapon.name +'攻击了'+weapon.attack+'点伤害'+'),'  + lisi + '生命值还剩' + playerTwo.hp + '\n';
    console.log(zhangsan + '用' + weapon.name + '攻击了' + lisi + ',' +
    lisi + '受到了' + attackvalue + '点伤害(其中'+ weapon.name +'攻击了'+weapon.attack+'点伤害'+'),'  + lisi + '生命值还剩' + playerTwo.hp);

    if(playerTwo.hp <= 0) {
      resultText += lisi + '被打败了！';
      console.log(lisi + '被打败了！');
      break;
    }

    resultText += lisi + '攻击了' + zhangsan + ',' +
    zhangsan + '受到了' + armorvalue + '点伤害(其中'+ armor.name +'承受了'+armor.defense+'点伤害'+'),'  + zhangsan + '生命值还剩' + playerOne.hp + '\n';
    console.log(lisi + '攻击了' + zhangsan + ',' +
    zhangsan + '受到了' + armorvalue + '点伤害(其中'+ armor.name +'承受了'+armor.defense+'点伤害'+'),' + zhangsan + '生命值还剩' + playerOne.hp);

  }

  return resultText;
};

module.exports = Result;
