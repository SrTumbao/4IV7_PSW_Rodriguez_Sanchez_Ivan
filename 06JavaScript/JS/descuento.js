
function validarn(e){
    var teclado = (document.all)? e.keyCode : e.which;
    if(teclado == 8) return true;
    var patron = /[0-9\d .]/;
    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}

function descuento(){

    var valor = document.formulario.cantidad.value;
    var resul = parseInt(valor);
    var descuento = resul*0.015;
    var total = resul - descuento;

    document.formulario.Pago.value = "$" + total;
}

function borrard(){

    document.formulario.cantidad.value="";
    document.formulario.Pago.value="";
}