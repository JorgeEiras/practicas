


var colores = new Array ("rojo","azul","verde","amarillo");

function ultimo() {
    console.warn("Último elemento del Array");
    console.log(colores[colores.length - 1]);
    console.log("\n")
}

function primero(){
    console.warn("Primer elemento del Array");
    console.log(colores[0]);
    console.log("\n")
}

function tamano(){
    console.warn("Tamaño del array");
    console.log(colores.length);
    console.log("\n");
}

function agrega_final(String) {
    console.info("Se agrega el elemento "+ String + " al final del array");
    colores.push(String);
}
function quitar_final() {
    console.info("Se quita " + colores[colores.length -1] + " al array");
    colores.pop();
}

function agrega_inicio(String) {
    console.info("Se agrega el elemento " + String + " al inicio del array");
    colores.unshift(String);
}
function quitar_inicio() {
    console.info("Se quita " + colores[0] + " al array");
    colores.shift();
}

function detalle() {
    console.warn("Detalle del contenido");
    for(let i = 0; i< colores.length ; i++){
        console.log(colores[i]);
    }
    console.log("\n")
    tamano();
    primero();
    ultimo();
}

detalle();
agrega_final("negro")
detalle();
quitar_final();
detalle();
agrega_inicio("blanco")
detalle();
quitar_inicio();
detalle();
