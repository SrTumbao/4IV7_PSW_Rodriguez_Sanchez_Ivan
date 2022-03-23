function validarn(e){
    var teclado = (document.all)? e.keyCode : e.which;
    if(teclado == 8) return true;
    var patron = /[0-9\d .]/;
    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}

function porcentaje(){

    var tr1 = document.getElementById('t1').value; 
    var tr2 = document.getElementById('t2').value; 
    var numtotal = parseFloat(tr1)+parseFloat(tr2);
    var porhom = (parseFloat(tr1)*(100))/ numtotal;
    var pormun = (parseFloat(tr2)*(100))/ numtotal;

    document.formulario.a.value = "%" + porhom;
    document.formulario.e.value = "%" + pormun;

}

function borrard(){

    document.formulario.t1.value="";
    document.formulario.t2.value="";
    document.formulario.a.value="";
    document.formulario.e.value="";
}