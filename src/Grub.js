/*.
├── Grub
│   └── Bee
│       ├── HoneyMakerBee
│       └── ForagerBee
│          └── RetiredForagerBee
*/
var Grub = function(age, color, food) {
  this.age = 0;
  this.color = 'pink'
  this.food = 'jelly';
};
Grub.prototype.eat = function() {
  return this.food;
}
