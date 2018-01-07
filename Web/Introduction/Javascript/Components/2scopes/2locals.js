/* --------- local scopes --------- */

var holder = "placeholder value";

function displayHolder(){
    alert(holder);
    holder = "heyo";
}

displayHolder();
alert(holder);


//Global
var holder = "placeholder value";

//Inne i funktions scope:t finns det en holder deklaration som inte har instantiserats
function displayHolder(){
    alert(holder);
    //privat
    var holder = "heyo";
}

displayHolder();
alert(holder);

//skapar globala variabler "i misstag"
var holder = "placeholder value";

function displayHolder(){
    alert(holder);
    someValue = "some value";
}

displayHolder();
alert(someValue);

//Detta gäller även för inre funktioner
var holder = "placeholder value";

function displayHolder(){
    alert(holder);

    function displayOtherValue(){
        var otherValue = "otherValue";
        alert(otherValue);
    }

    displayOtherValue();
    alert(otherValue);
}

displayHolder();

//Var noga här!! det är funktioner som har ett eget scope, ex. så har inte if/for/while satser ett eget scope

var username = "hej";
var password = "123";
if(username == "hej" && password == "123"){
    var superSecretThing = "Hello World";
}

alert(superSecretThing);

//här är det passande att använda let

var username = "hej";
var password = "123";
if(username == "hej" && password == "123"){
    let superSecretThing = "Hello World";
}

alert(superSecretThing);
