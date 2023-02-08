//traigo funcionalidades de el paquete
const {toCelsius} = require("celsius")
const {toFahrenheit} = require("celsius")
//traigo todas las funcionalidades de una
const conv = require("celsius")

//se hace la conversión a celsius
toCelsius(100); // 38
toCelsius(100, 3); // 37.778
toCelsius('105.981 degrees F', 5); // 41.10056

//se hace la conversión a Fahrenheit
toFahrenheit(36); // 97
toFahrenheit(36.68, 3); // 98.024
toFahrenheit('-40.691 degrees C', 5); // -41.24380

//se hacen la conversiones y se imprimen
console.log(conv.toCelsius(100))
console.log(conv.toCelsius(100,3))
console.log(toCelsius(100))
console.log(toFahrenheit(100))

/*un error que tuve fue no poner el nombre de la constante 
"conv" a la hora de imprimir la funcion*/