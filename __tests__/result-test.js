jest.dontMock('../js/result');

describe('Result',function() {
  describe('#getResult',function() {
    it('should return string',function() {
      var Result = require('../js/result');

      var playerOne = {name : '张三',hp : 100, attack : 20, profession : '战士'};
      var playerTwo = {name : '李四',hp : 100, attack : 10, profession : '普通人'};

      var weapon = {name : '超级木棍',attack : 5};
      var armor = {name : '防御护盾',defense : 5};

      var result = Result.getScore(playerOne, playerTwo, weapon, armor);

      expect(result).toBe('战士张三用超级木棍攻击了普通人李四,普通人李四受到了25点伤害(其中超级木棍攻击了5点伤害),普通人李四生命值还剩75'+'\n'+
        '普通人李四攻击了战士张三,战士张三受到了5点伤害(其中防御护盾承受了5点伤害),战士张三生命值还剩95'+'\n'+
        '战士张三用超级木棍攻击了普通人李四,普通人李四受到了25点伤害(其中超级木棍攻击了5点伤害),普通人李四生命值还剩50'+'\n'+
        '普通人李四攻击了战士张三,战士张三受到了5点伤害(其中防御护盾承受了5点伤害),战士张三生命值还剩90'+'\n'+
        '战士张三用超级木棍攻击了普通人李四,普通人李四受到了25点伤害(其中超级木棍攻击了5点伤害),普通人李四生命值还剩25'+'\n'+
        '普通人李四攻击了战士张三,战士张三受到了5点伤害(其中防御护盾承受了5点伤害),战士张三生命值还剩85'+'\n'+
        '战士张三用超级木棍攻击了普通人李四,普通人李四受到了25点伤害(其中超级木棍攻击了5点伤害),普通人李四生命值还剩0'+'\n'+
        '普通人李四被打败了！');

    });
  });
});
