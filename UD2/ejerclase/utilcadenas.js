function esPalindromo(cad) {
    let cadenaLimpia = cad.toLowerCase();
    let cadenaInvertida = '';

    for (let i = cadenaLimpia.length - 1; i >= 0; i--) {
        cadenaInvertida += cadenaLimpia[i];
    }

    return cadenaLimpia === cadenaInvertida;
}

function miSplit(cad, delimitador) {
    let resultado = [];
    let inicio = 0; 
    let indiceDelimitador = cad.indexOf(delimitador);

    while (indiceDelimitador !== -1) {
        let subcadena = cad.substring(inicio, indiceDelimitador);
        resultado.push(subcadena);

        inicio = indiceDelimitador + delimitador.length;

        indiceDelimitador = cad.indexOf(delimitador, inicio);
    }

    resultado.push(cad.substring(inicio));

    return resultado;
}



function contiene(cad, sub) {
    for (let i = 0; i <= cad.length - sub.length; i++) {
        let encontrado = true;

        for (let j = 0; j < sub.length; j++) {
            if (cad[i + j] !== sub[j]) {
                encontrado = false;
            break;     
            }
        }

        if (encontrado) {
            return true;
        }
    
    }
    return false;
}