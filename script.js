var n1 = document.querySelector('#n1');
var n2 = document.querySelector('#n2');
var n3 = document.querySelector('#n3');
var resultado = document.querySelector('#resultado');
var calculo = document.querySelector('#calculo');

function calcular() {
    var operacao = calculo.value;
    switch (operacao) {
        case 'somar':
            somar();
            break;
        case 'subtrair':
            subtrair();
            break;
        case 'multiplicar':
            multiplicar();
            break;
        case 'dividir':
            dividir();
            break;
        case 'areaQuadrado':
            areaQuadrado();
            break;
        case 'areaRetangulo':
            areaRetangulo();
            break;
        case 'areaTrapezio':
            areaTrapezio();
            break;
        case 'areaLosango':
            areaLosango();
            break;
        case 'areaTrianguloRetangulo':
            areaTrianguloRetangulo();
            break;
        case 'areaTrianguloEquilatero':
            areaTrianguloEquilatero();
            break;
        case 'areaCircunferencia':
            areaCircunferencia();
            break;
        default:
            resultado.innerHTML = 'Selecione um cálculo válido';
    }
}

function somar() {
    resultado.innerHTML = parseFloat(n1.value) + parseFloat(n2.value) + parseFloat(n3.value);
}

function subtrair() {
    resultado.innerHTML = parseFloat(n1.value) - parseFloat(n2.value) - parseFloat(n3.value);
}

function multiplicar() {
    resultado.innerHTML = parseFloat(n1.value) * parseFloat(n2.value) * parseFloat(n3.value);
}

function dividir() {
    if (parseFloat(n2.value) !== 0 && parseFloat(n3.value) !== 0) {
        resultado.innerHTML = parseFloat(n1.value) / parseFloat(n2.value) / parseFloat(n3.value);
    } else {
        resultado.innerHTML = 'Erro: Divisão por zero';
    }
}

function areaQuadrado() {
    resultado.innerHTML = Math.pow(parseFloat(n1.value), 2);
}

function areaRetangulo() {
    resultado.innerHTML = parseFloat(n1.value) * parseFloat(n2.value);
}

function areaTrapezio() {
    resultado.innerHTML = ((parseFloat(n1.value) + parseFloat(n2.value)) * parseFloat(n3.value)) / 2;
}

function areaLosango() {
    resultado.innerHTML = (parseFloat(n1.value) * parseFloat(n2.value)) / 2;
}

function areaTrianguloRetangulo() {
    resultado.innerHTML = (parseFloat(n1.value) * parseFloat(n2.value)) / 2;
}

function areaTrianguloEquilatero() {
    resultado.innerHTML = (Math.sqrt(3) / 4) * Math.pow(parseFloat(n1.value), 2);
}

function areaCircunferencia() {
    resultado.innerHTML = Math.PI * Math.pow(parseFloat(n1.value), 2);
}
