// funcion fromDollarToYen
// One euro is:
const oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(someValue) {
    // Convertimos el valor a dólares
    let valueInDollar = someValue * oneEuroIs.USD;
    // Retornamos el valor en dólares
    return valueInDollar;
}
//
const fromDollarToYen = function (someValue) {
//convertimos el valor a Yenes
let valueInYen =  (oneEuroIs.JPY / oneEuroIs.USD) * someValue;
//retornamos el valor en Yenes
return valueInYen;
}

const fromYenToPound = function (someValue) {
    //convertimos el valor a pound
    let valueInPound =  (oneEuroIs.JPY / oneEuroIs.GBP) * someValue;
    // retornamos el valor en pounds
    return valueInPound;
}

// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };