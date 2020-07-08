// subclass: Bee
var Bee = function(age, color, food) {
  Grub.call(this, color, food)
  this.age = 5;
  this.color = 'yellow';
  this.food = 'jelly';
};

// set inheritance
Bee.prototype = Object.create(Grub.prototype);
//set bee constuctor function
Bee.prototype.constructor = Grub;


// Bee.prototype.eat = function() {

// };