//Inheritence
function Vehicle(speed){
    this.speed  = speed;
    this.drive = function () {
        alert("Drove " + this.speed + " units");
    }
}

function Car(owner, age){
    Vehicle.call(this, 10); //Kallar på fordons funktionen för att vara säker på att alla värden som sätts på fordon också gäller för bilar
    this.owner = owner;
    this.age = age;
}

//Använder Object.create för att new ordet anropar funktionen, menda object.create endast sätter upp "the prototype chain", vi vill förmodligen inte anropa funktionen förrän vi skapar instanser av bilar, vilket leder till att kalla på fordons konstruktor i bil funktionen
Car.prototype = Object.create(Vehicle.prototype);
//Fixar problemet med fel konstruktor
Car.prototype.constructor = Car;

var rolfV = new Car('Rolf', 2);

rolfV.drive();

//Här kan vi se att rolfF har konstruktorn Vehicle när vi egentligen vill att den ska ha Car
console.log(rolfV.__proto__.constructor);

//Sista vi måste veta om prototyper, prototyper har prototyper, hela vägen ner till objekt

console.log(Car.prototype.__ptoto__); //Vehicle
console.log(Car.prototype.__proto__.__proto__); //Object
console.log(Car.prototype.__proto__.__proto__.__proto__); //null

//Men!! Oroa er inte, vanliga class deklaration finns också

class Vehicle{
  constructor(speed){
    this.speed = speed;
  }
  drive(){
    return "drove " + this.speed + " units";
  }
}

class Car extends Vehicle{
  constructor(owner, age){
    super(10);
    this.owner = owner;
    this.age = age;
  }
  //Ja, du kan kalla på super metoder samt överskugga super-klassens metoder
  drive(){
   alert(this.owner + " " + super.drive());
  }
  //Ja statiska metoder finns
  static construct(owner, age){
    return new Car(owner, age);
  }
  //Ja, vi kan definera getters på samma sätt igen
  get info(){
    return "Owner: " + this.owner + "\nAge: " + this.age + "\nPrice: " + this.price;
  }
}

//Prototyper finns kvar
Object.defineProperty(Car.prototype, 'price', {
  value: '40£'
});

//Car.prototype.price = 40;

var rolfV = new Car('Rolf', 12);
var karlV = Car.construct('Karl', 2);

rolfV.drive();
karlV.drive();

alert(rolfV.info);

/** object properties finns också i class objekt **/
var propertyDesc = Object.getOwnPropertyDescriptor(rolfV, 'owner');

for(var propValue in propertyDesc){
    alert(propValue + ": " + propertyDesc[propValue]);
}
