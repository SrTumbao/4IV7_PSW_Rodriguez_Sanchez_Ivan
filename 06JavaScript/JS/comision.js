function validarn(e){
    var teclado = (document.all)? e.keyCode : e.which;
    if(teclado == 8) return true;
    var patron = /[0-9\d .]/;
    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}

function comision(){

    var valor = document.formulario.sueldo.value;
    var ventas = document.formulario.cantidadv.value;
    var resul = parseInt(valor);
    var comision1 = resul*0.1*ventas;


    document.formulario.porcentaje.value = "$" + comision1;
}

function final(){
    var val = document.formulario.sueldo.value;
    var ven = document.formulario.cantidadv.value;
    var res = parseInt(val);
    var com = val*0.1*ven;
    var tot = com + res;

    
    document.formulario.sueldoC.value = "$" + tot;
}


function borrard(){

    document.formulario.sueldo.value="";
    document.formulario.cantidadv.value="";
    document.formulario.porcentaje.value="";
    document.formulario.sueldoC.value="";
}