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

}
// subclass: Bee
var Bee = function() {
  Grub.call(this, age, color, food)
  this.age = 5;
  this.color = 'pink';
  this.food = 'jelly';
};
Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Grub;


// Bee.prototype.eat = function() {

// };