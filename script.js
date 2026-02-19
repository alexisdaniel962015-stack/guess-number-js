console.log('¡Hola desde JavaScript!');

// --- Variables con let (pueden cambiar) ---
let nombre = 'ALEXIS';
let edad = 29; // Cambia por tu edad real
let estaAprendiendo = true;

// --- Imprime cada variable ---
console.log(nombre);
console.log(edad);
console.log(estaAprendiendo);

// --- Verifica los tipos de dato ---
console.log(typeof nombre);       // ¿Qué tipo es?
console.log(typeof edad);         // ¿Qué tipo es?
console.log(typeof estaAprendiendo); // ¿Qué tipo es?

// --- Variables con const (no pueden cambiar) ---
const curso = 'Code 101';
const maxIntentos = 10;

console.log(curso);
console.log(maxIntentos);

// Descomenta la siguiente línea y observa qué pasa:
// maxIntentos = 20; // Esto causará un error porque maxIntentos es una constante

// --- Entrada del usuario ---
let nombreUsuario = prompt('¿Cómo te llamas?');
let edadUsuario = prompt('¿Cuántos años tienes?');
let  ciudadUsuario = prompt('¿En qué ciudad vives?');

// --- Salida al usuario ---
alert('Hola ' + nombreUsuario + ', tienes ' + edadUsuario + ' años y vives en ' + ciudadUsuario + '.');

// --- Verifica en consola ---
console.log('Nombre:', nombreUsuario);
console.log('Edad:', edadUsuario);
console.log('Tipo de edad:', typeof edadUsuario);

// --- Operadores aritméticos ---
let a = 20;
let b = 7;

console.log('Suma:', a + b);        // 27
console.log('Resta:', a - b);       // 13
console.log('Multiplicación:', a * b); // 140
console.log('División:', a / b);     // 2.857...
console.log('Módulo:', a % b);       // 6 (el residuo)

// --- ¿Qué resultado esperas? ---
console.log('5' + 3);    // ¿53 o 8?
console.log(5 + 3);      // ¿53 o 8?
console.log('5' - 3);    // ¿Qué pasa aquí?

// Forma 1: Concatenación con +
let saludo1 = 'Hola ' + nombreUsuario + ', tienes ' + edadUsuario + ' años.';
console.log(saludo1);

// Forma 2: Template literals con `` (backticks)
let saludo2 = `Hola ${nombreUsuario}, tienes ${edadUsuario} años y vives en ${ciudadUsuario}.`;
console.log(saludo2);

// --- Calculadora de edad ---
let anioActual = 2026;
let anioNacimiento = anioActual - Number(edadUsuario);

console.log(`Si naciste en ${anioNacimiento}, entonces en el año ${anioActual} tendrás ${Number(edadUsuario)} años.`);



