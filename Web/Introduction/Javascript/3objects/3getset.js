
/* ------- Getter/Setter ------ */
//Används för att filtrerar dot notation in i en funktion
function Car(reg, age){
    this.reg = reg;
    this.age = age;
}

var car = new Car("abc123", 12);

Object.defineProperty(car, 'info', {
  get : function(){
      return this.reg + " has been on the road for " + this.age + " years";
  },
  set : function(value){
      var valueParts = value.split(" ");
      this.reg = valueParts[0];
      this.age = valueParts[1];
  }
});


alert(car.info);

car.info = "GHE456 13 years";

alert(car.info);


//Kombinera getters med prototypes, klassiskt exempel
var array = ['hello', 'world', 'tomorrow'];

alert(array[0]);
alert(array[array.length - 1]);

//Object.defineProperties(array, {
Object.defineProperties(Array.prototype, {
    'first' : {
        get : function(){
            return this[0];
        }
    },
    'last' : {
        get : function(){
            return this[this.length -1];
        }
    }
});

alert(array.first);
alert(array.last);

//Denna fungerar inte såvida vi inte sätter objects prototyp
var arr = ['pie', 'tacos', 'ham'];

alert(arr.first);
alert(arr.last);

//Det är viktig att observera att
var arr = ['pie', 'tacos', 'ham'];
//är detsamma som
var arr = new Array('pie', 'tacos', 'ham');
//eftersom new är en viktig komponent till varför prototyper fungerar som det gör, faktum är att endast funktioner har prototyper
