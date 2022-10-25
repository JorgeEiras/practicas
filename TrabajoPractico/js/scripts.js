
const etiquetas = new Array('nombre', 'apellido', 'cantidad', 'email');

function calculo() {
    var cantidad = document.getElementById('cantidad').value,
        categoria = document.getElementById('categoria').value;

    const 
        valorGeneral = 200,
        valorEstudiante = valorGeneral - (valorGeneral * 80) / 100,
        valorTarinee = valorGeneral - (valorGeneral * 50) / 100,
        valorJunior = valorGeneral - (valorGeneral * 15) / 100;

    var calc = function(a,b){
        let total = a * b;
        document.getElementById('total').innerHTML =
            'Total a Pagar: \u0024' + total;
    };

    if (cantidad > 0 && !isNaN(cantidad) && cantidad % 1 == 0){
        switch (categoria) {
            case 'Estudiante':
                calc(valorEstudiante,cantidad);
                break;
            case 'Trainee':
                calc(valorTarinee, cantidad);
                break;
            case 'Junior':
                calc(valorJunior, cantidad);
                break;
            case 'General':
                calc(valorGeneral, cantidad);
                break;
            default:
                console.error('Defina etiqueta antes de continuar');
                break;
        }
    } else window.alert('Porfavor ingresar numeros enteros');
};

function borrar() {
    for (let i = 0; i < etiquetas.length; i++){
        document.getElementById(etiquetas[i]).value = '';
    }
    document.getElementById('categoria').value = 'Estudiante';
    document.getElementById('total').innerHTML = 'Total a Pagar: \u0024';
}

function isValidEmail(mail) {
    return /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail);
}
