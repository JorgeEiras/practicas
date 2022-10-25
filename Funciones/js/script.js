
var parrafo = n => console.info(n)

// El segundo "saludar" (nombre de la función) se suele omitir: es redundante
const saludo = function saludar(n) {
    return n;
};

parrafo(saludo("Hello")); // 'Hola'