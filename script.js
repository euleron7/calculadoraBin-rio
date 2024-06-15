function convertToBinary() {
    const decimalInput = document.getElementById('decimalInput').value;
    if (decimalInput === '' || decimalInput < 0 || decimalInput > 255) {
        alert('Por favor, insira um número decimal válido (0-255).');
        return;
    }
    const binary = Number(decimalInput).toString(2).padStart(8, '0');
    document.getElementById('binaryOutput').innerText = `Binário: ${binary}`;
}

function binaryOperation(operation) {
    const binaryInput1 = document.getElementById('binaryInput1').value;
    const binaryInput2 = document.getElementById('binaryInput2').value;
    if (!isValidBinary(binaryInput1) || !isValidBinary(binaryInput2)) {
        alert('Por favor, insira números binários válidos de 8 bits.');
        return;
    }
    const num1 = parseInt(binaryInput1, 2);
    const num2 = parseInt(binaryInput2, 2);
    let result;
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            result = Math.floor(num1 / num2);
            break;
    }
    const binaryResult = result.toString(2).padStart(8, '0');
    document.getElementById('operationOutput').innerText = `Resultado: ${binaryResult}`;
}

function twosComplement() {
    const binaryInput = document.getElementById('binaryComplementInput').value;
    if (!isValidBinary(binaryInput)) {
        alert('Por favor, insira um número binário válido de 8 bits.');
        return;
    }
    const complement = (~parseInt(binaryInput, 2) + 1).toString(2).slice(-8);
    document.getElementById('complementOutput').innerText = `Complemento de Dois: ${complement}`;
}

function convertToHexOct() {
    const binaryInput = document.getElementById('binaryConvertInput').value;
    if (!isValidBinary(binaryInput)) {
        alert('Por favor, insira um número binário válido de 8 bits.');
        return;
    }
    const num = parseInt(binaryInput, 2);
    const hex = num.toString(16).toUpperCase();
    const octal = num.toString(8);
    document.getElementById('hexOutput').innerText = `Hexadecimal: ${hex}`;
    document.getElementById('octalOutput').innerText = `Octal: ${octal}`;
}

function isValidBinary(binary) {
    return /^[01]{1,8}$/.test(binary);
}
