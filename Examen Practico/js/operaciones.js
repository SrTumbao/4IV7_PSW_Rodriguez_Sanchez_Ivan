var res;

function suma(num1,num2) {
	res = parseFloat(num1) + parseFloat(num2);
	document.getElementById('lblResultado').innerHTML = res;
}

function restar(num1,num2) {
	res = parseFloat(num1) - parseFloat(num2);
	document.getElementById('lblResultado').innerHTML = res;
}

function multiplicacion(num1,num2) {
	res = parseFloat(num1) * parseFloat(num2);
	document.getElementById('lblResultado').innerHTML = res;
}

function division(num1,num2) {
	res = parseFloat(num1) / parseFloat(num2);
	document.getElementById('lblResultado').innerHTML = res;
}