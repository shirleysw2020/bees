// subclass: Bee
var Bee = function(age, color, food) {
  Grub.call(this, color, food)
  this.age = 5;
  this.color = 'yellow';
  // this.food = 'jelly'; inherited from Grub already.
  this.job = 'keep on growing';
};

// set inheritance
Bee.prototype = Object.create(Grub.prototype);
//set bee constuctor function that points to itself!
Bee.prototype.constructor = Bee;


// Bee.prototype.eat = function() {

// };

