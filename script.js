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

// --- Salida al usuario ---
alert('Hola ' + nombreUsuario + ', tienes ' + edadUsuario + ' años.');

// --- Verifica en consola ---
console.log('Nombre:', nombreUsuario);
console.log('Edad:', edadUsuario);
console.log('Tipo de edad:', typeof edadUsuario);

