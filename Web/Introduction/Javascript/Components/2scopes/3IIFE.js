
var namespace = (function(){
	//everything is private here
	var foo = "hello world!";
	var fooVariable = "hej världen!"


	return {
		foo: foo
	}
})();

alert(namepsace.foo)	//hello world!
alert(namespace.fooVariable); 	//undefined
