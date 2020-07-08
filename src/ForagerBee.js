/*.
├── Grub
│   └── Bee
│       ├── HoneyMakerBee
│       └── ForagerBee
│          └── RetiredForagerBee
*/
var ForagerBee = function(age, food, color) {
  Bee.call(this, color);
  this.age = 10;
  this.job = 'find pollen';
  this.canFly = true;
  this.treasureChest = [];
};

ForagerBee.prototype = Object.create(Bee.prototype);
ForagerBee.prototype.constructor = constructor;

ForagerBee.prototype.forage = function() {
  this.treasureChest.push('treasure');
}