// ** EJERCICIO 1: **
// Crear una variable con un valor numérico libre:
// var cantidadDeGatos = 10;
// Esto debe generar en la consola lo siguiente:
// ```
// Gato #1: 😺
// Gato #2: 😸
// Gato #3: 😹
// Gato #4: 😺
// Gato #5: 😸
// Gato #6: 😹
// Gato #7: 😺
// Gato #8: 😸
// Gato #9: 😹
// Gato #10: 😺
// ```
// Noten que son 3 emojis distintos que se se van intercalando.

// La consola reflejará los cambios según el contenido de la variable.
// var cantidadDeGatos = 1;
// ```
// Gato #1: 😺
// ```

// var cantidadDeGatos = 4;
// ```
// Gato #1: 😺
// Gato #2: 😸
// Gato #3: 😹
// Gato #4: 😺
// ```

// (Siempre son los mismos 3 emojis intercalados).

// ---------------Resultado ----------------
console.log('ejercicio 1')

var cantidadDeGatos = 10;
for (let index = 0; index < cantidadDeGatos; index++) {
    
    resultado = index % 3
    
    if (resultado == 0) {
       console.log(index,'gato 😺');
    } else if (resultado == 1) {
        console.log(index,'gato 😸');
    } else {
        console.log(index ,'gato 😹');
    }

}

// ** EJERCICIO 2: **

// Crear 2 variables con valores numéricos libres:
// var cantidadDeGatos = 5;
// var cantidadDePasos = 3;
// A partir de esas 2 variables, la consola debe mostrar lo siguiente:

// Gato #1: 🐈 🐾🐾🐾
// Gato #2: 🐈 🐾🐾🐾
// Gato #3: 🐈 🐾🐾🐾
// Gato #4: 🐈 🐾🐾🐾
// Gato #5: 🐈 🐾🐾🐾


// Si se utilizan otros valores, el resultado en la consola debe adaptarse.
// var cantidadDeGatos = 2;
// var cantidadDePasos = 8;

// Gato #1: 🐈 🐾🐾🐾🐾🐾🐾🐾🐾
// Gato #2: 🐈 🐾🐾🐾🐾🐾🐾🐾🐾



// var cantidadDeGatos = 10;
// var cantidadDePasos = 4;

// Gato #1: 🐈 🐾🐾🐾🐾
// Gato #2: 🐈 🐾🐾🐾🐾
// Gato #3: 🐈 🐾🐾🐾🐾
// Gato #4: 🐈 🐾🐾🐾🐾
// Gato #5: 🐈 🐾🐾🐾🐾
// Gato #6: 🐈 🐾🐾🐾🐾
// Gato #7: 🐈 🐾🐾🐾🐾
// Gato #8: 🐈 🐾🐾🐾🐾
// Gato #9: 🐈 🐾🐾🐾🐾
// Gato #10: 🐈 🐾🐾🐾🐾


// ---------------Resultado ----------------
console.log('ejercicio 2')

var cantidadDeGatos = 5;
var cantidadDePasos = 3;

for (let gatos = 1; gatos <= cantidadDeGatos; gatos++) {

    let gatosPantalla = '🐈'

    for (let pasos = 0; pasos < cantidadDePasos; pasos++) {
        let patas  = '🐾'
        gatosPantalla = gatosPantalla.concat(patas)
    }
    console.log('gato #',gatos, gatosPantalla)
}



// ** EJERCICIO 3 **
// Adaptar el ejercicio anterior para que se muestren 2 gatos alternadamente:
// var cantidadDeGatos = 10;
// var cantidadDePasos = 4;
// ```
// Gato #1: 🐈 🐾🐾🐾🐾
// Gato #2: 🐈‍⬛ 🐾🐾🐾🐾
// Gato #3: 🐈 🐾🐾🐾🐾
// Gato #4: 🐈‍⬛ 🐾🐾🐾🐾
// Gato #5: 🐈 🐾🐾🐾🐾
// Gato #6: 🐈‍⬛ 🐾🐾🐾🐾
// Gato #7: 🐈 🐾🐾🐾🐾
// Gato #8: 🐈‍⬛ 🐾🐾🐾🐾
// Gato #9: 🐈 🐾🐾🐾🐾
// Gato #10: 🐈‍⬛ 🐾🐾🐾🐾
// ```

// ---------------Resultado ----------------

console.log('ejercicio 3')

var cantidadDeGatos = 10;
var cantidadDePasos = 4;

for (let gatos = 1; gatos <= cantidadDeGatos; gatos++) {

    let gatosPantalla 

    if (gatos%2) {
         gatosPantalla = '🐈'

    } else{
         gatosPantalla = '🐈‍⬛'

    }


    for (let pasos = 0; pasos < cantidadDePasos; pasos++) {
        let patas  = '🐾'
        gatosPantalla = gatosPantalla.concat(patas)
    }
    console.log('gato #',gatos, gatosPantalla)
}