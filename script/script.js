function agregar(valor) {
    document.getElementById('display').value += valor;
}

function limpiar() {
    document.getElementById('display').value = '';
}

function calcular() {
    try {
        let resultado = eval(document.getElementById('display').value);
        document.getElementById('display').value = resultado;
    } catch {
        document.getElementById('display').value = 'Error';
    }
}
