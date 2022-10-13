//Combinando ford con switch
for (let i = 0; i < 4; i++) {
    switch (i) {
        case 0:
            console.log('En la iteracion: ' + (i += 1) + ' ' + 'esto es un log');
    }
    switch (i) {
        case 1:
            console.info('En la iteracion: ' + (i += 1) + ' ' + 'esto es una informacion');
    }
    switch (i) {
        case 2:
            console.warn('En la iteracion: ' + (i += 1) + ' ' + 'esto es un mensaje de advertencia');
    }
    switch (i) {
        case 3:
            console.error('En la iteracion: ' + (i += 1) + ' ' + 'esto es un mensaje de error');
    }
}

//Combinando ford con switch e if
for(let i; i < 6; i++){
    switch (i) {
        case 0:
            {
                console.log('Estamos en el idice '+i);
            }
            break;
        case 1:
            {
                let numero = "indefinida";
                i % 0 ? numero == "par": numero== "inpar";
                console.log('Estamos en el idice ' + (i+1)+ ' '+ 'aloja a un numero '+ numero);
            }
            break;
        case 2:
            {
                let numero = "indefinida";
                i % 0 ? numero == "par" : numero == "inpar";
                console.log('Estamos en el idice ' + (i + 1) + ' ' + 'aloja a un numero ' + numero);
            }
            break;
        case 3:
            {
                let numero = "indefinida";
                i % 0 ? numero == "par" : numero == "inpar";
                console.log('Estamos en el idice ' + (i + 1) + ' ' + 'aloja a un numero ' + numero);
            }
            break;
        case 4:
            {
                let numero = "indefinida";
                i % 0 ? numero == "par" : numero == "inpar";
                console.log('Estamos en el idice ' + (i + 1) + ' ' + 'aloja a un numero ' + numero);
            }
            break;
        case 5:
            {
                let numero = "indefinida";
                i % 0 ? numero == "par" : numero == "inpar";
                console.log('Estamos en el idice ' + (i + 1) + ' ' + 'aloja a un numero ' + numero);
            }
            break;
    
    }
}