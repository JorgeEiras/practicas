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