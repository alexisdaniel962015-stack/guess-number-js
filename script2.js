// === ADIVINA EL NÚMERO ===
// El programa genera un número secreto entre 1 y 100
// El jugador intenta adivinarlo

console.log('=== Adivina el Número ===');

// --- Generar número secreto ---
const numeroSecreto = Math.floor(Math.random() * 100) + 1;

// Temporal: ver el número para probar (lo quitaremos después)
console.log('(DEBUG) Número secreto:', numeroSecreto);



// --- Pedir intento al jugador ---
let intento = prompt('Adivina el número (1-100):');
intento = Number(intento);

console.log('Intento del jugador:', intento);
console.log('Tipo:', typeof intento);
alert ('Tu intento es: ' + intento);

// === Validar primer intento ===
if (isNaN(intento)) {
    alert('⚠️ Eso no es un número. Por favor ingresa un número del 1 al 100.');
} else if (intento < 1 || intento > 100) {
    alert('⚠️ El número debe estar entre 1 y 100.');
} else if (intento === numeroSecreto) {
    alert('🎉 ¡Correcto! El número era ' + numeroSecreto);
    console.log('Resultado: ¡GANÓ!');
} else {
       // Mensaje de error genérico + pista
    alert('❌ Incorrecto. Tu número no coincide.');

    // --- Segundo intento ---
    let intento2 = prompt('Intenta de nuevo (1-100):');
    intento2 = Number(intento2);

    if (isNaN(intento2)) {
        alert('⚠️ Eso no es un número válido.');
    } else if (intento2 < 1 || intento2 > 100) {
        alert('⚠️ El número debe estar entre 1 y 100.');
    } else if (intento2 === numeroSecreto) {
        alert('🎉 ¡Correcto en el segundo intento!');
        console.log('Resultado: ¡GANÓ en el segundo intento!');
    } else if (intento2 > numeroSecreto) {
        alert('📈 Muy alto. El número era ' + numeroSecreto);
        console.log('Resultado: muy alto en el segundo intento');
    } else {
        alert('📉 Muy bajo. El número era ' + numeroSecreto);
        console.log('Resultado: muy bajo en el segundo intento');
    }
}


// --- Verificar el intento ---     
//----- if (intento === numeroSecreto) {
 //--- alert(' ¡Correcto! El número era ' + numeroSecreto);
//--- } else {
 //-- alert(' Incorrecto. El número era ' + numeroSecreto);
//--- } 

// --- Pistas alto/bajo/correcto ---
//if (intento === numeroSecreto) {
  //alert('🎉 ¡Correcto! El número era ' + numeroSecreto);
  //console.log('Resultado: ¡GANÓ!');
//} else if (intento > numeroSecreto) {
 // alert('📈 Muy alto. Intenta un número más bajo.');
  //console.log('Resultado: muy alto');
//} else {
 // alert('📉 Muy bajo. Intenta un número más alto.');
 // console.log('Resultado: muy bajo');
//}

// --- Segundo intento ---
//if (intento !== numeroSecreto) {
 // let intento2 = prompt('Intenta de nuevo (1-100):');
 // intento2 = Number(intento2);

 // if (intento2 === numeroSecreto) {
   // alert('🎉 ¡Correcto en el segundo intento!');
  //} else if (intento2 > numeroSecreto) {
   // alert('📈 Muy alto. El número era ' + numeroSecreto);
 // } else {
   // alert('📉 Muy bajo. El número era ' + numeroSecreto);
//  }
//}



// AND (&&): ambas deben ser true
let edad = 25;
let tieneLicencia = true;
console.log(edad >= 18 && tieneLicencia);  // true

// OR (||): al menos una debe ser true
let esFeriado = false;
let esDomingo = true;
console.log(esFeriado || esDomingo);  // true (domingo es true)

// NOT (!): invierte el valor
let lloviendo = false;
console.log(!lloviendo);  // true (NO está lloviendo)





