// hay una diferencia al usar var y let, al momento de declarar variables
// en un accidente puedes sobreescribir esta sin ningún aviso, let manda un mensaje
// por declarar dos veces la misma variables.

var a = 20;
var a = 30; 
console.log(a);
//va a imprimir 30 porque está sobreescrito

let b =15;
let b =20;

// en ese mismo ejemplo no se va a sobreescribir.

