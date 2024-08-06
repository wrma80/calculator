// DECLARACAO DAS VARIAVEIS
let number1 = 0;
let number2 = 0;
let sign = null;
let result = 0;
let chave = false;


// criar 4 funcoes. 1 para cada operacao matematica (add, subtract, multiply and divide);
// DECLARACAO DAS FUNCOES
function add(number1, number2) {
    sign = null;
    return number1 + number2;
};

function subtract(number1, number2) {
    return number1 - number2;
};

function multiply(number1, number2) {
    return number1 * number2;
};
    
function divide(number1, number2) {
    return number1 / number2;
};

function operate(n1, n2, sign) {
    switch (sign) {
        case "+":
            result = add(n1, n2);
            display.value = result;
            number2 = 0;
            break;
        case "-":
            result = subtract(n1, n2);
            display.value = result;
            break;
        case "*":
            result = multiply(n1, n2);
            display.value = result;
            break;
        case "/":
            result = divide(n1, n2);
            display.value = result;
            break;
    }
};

// limpa o conteudo do display
let clear = document.getElementById('clear');
clear.addEventListener('click', function() {
    display.value = '';
});

// capturar o valor do botao igual
let display = document.getElementById('display');
let igual = document.getElementById('calcular');
igual.addEventListener('click', function() {
    number2 = Number(display.value);
    operate(number1, number2, sign);
    sign = null;
});


// inserir valor no display
// ADICIONA ESCUTADORES
function adicionarEvento() {
    let buttons = document.getElementsByClassName('number');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', e => {
            if (chave) {display.value = ""}; // linha para zerar o display.
            display.value += e.target.value;
            chave = false;
        });
    }
};

// CAPTURAR VALOR DO SINAL E ACRESCENTAR O VALOR A VARIAVEL 'SIGN'
function captureSign() {
    let operator = document.getElementsByClassName('sign');

    for (let i = 0; i < operator.length; i++) {
        operator[i].addEventListener('click', e => {
            
            //REFAZENDO A FORMULA DO CALCULO
            chave = true; // criei uma chave para identificar se o usuario ja apertou no botao do operador.
            number1 = Number(display.value);
            if (sign == null) {
                sign = e.target.value;
                number2 = number1; // estava no else.
            } else {
                operate(number1, number2, sign);
            }
        })
        
    }
    
};

adicionarEvento();

captureSign();
