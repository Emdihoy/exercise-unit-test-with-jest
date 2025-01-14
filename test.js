const oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// Importar la función sum del archivo app.js
const { sum, fromYenToPound } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("One dollar should be 146,2 Yens", function() {
        // Importo la funcion desde app.js
    const {fromDollarToYen} = require ('./app.js') 

        // Uso la función como debe ser usada
        const Yens =  fromDollarToYen(3.5)

        // 1 dolar es 146.2 Yenes, entonces 3.5 dolares deberían ser = (3.5 * 146.2)
        const expected = (oneEuroIs.JPY / oneEuroIs.USD) * 3.5;
        // Hago mi comparación (la prueba)
    expect(fromDollarToYen(3.5)).toBe((oneEuroIs.JPY / oneEuroIs.USD) * 3.5);
        
})

test("one pound should be 179,88 Yens", function(){
    // importo la funcion desde app.js
    const {fromYenToPound} = require ('./app.js')
    const pounds = fromYenToPound(3.5)
    const expected = (oneEuroIs.JPY / oneEuroIs.GBP) * 3.5;
    expect(fromYenToPound(3.5)).toBe((oneEuroIs.JPY / oneEuroIs.GBP)* 3.5)
})