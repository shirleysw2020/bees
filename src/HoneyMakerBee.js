/*.
├── Grub
│   └── Bee
│       ├── HoneyMakerBee
│       └── ForagerBee
│          └── RetiredForagerBee
*/
var HoneyMakerBee = function(age, color, food, job, honeyPot) {
  // call the bee superclass
  Bee.call(this, color);
  // this.color = color;

  // age and food inherited from Grub
  this.age = 10;
  this.job = "make honey";
  this.honeyPot = 0;
};

HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype = Object.create(Grub.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot++;
}
HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot--;
}

/*
call the Bee superclass
set the prototype & constructor
age property:  10
job property: "make honey

color property: inherited from bee (yellow)

food property: inherited from grub
eat method that is inherited from grub

a honeyPot property that is set to 0

a makeHoney method that adds 1 to that honeyBee\'s honeyPot
a giveHoney method that subtracts 1 from that honeyBee\'s honeyPot
*/