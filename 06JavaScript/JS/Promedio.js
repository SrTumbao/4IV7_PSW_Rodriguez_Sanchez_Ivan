function validarn(e){
    var teclado = (document.all)? e.keyCode : e.which;
    if(teclado == 8) return true;
    var patron = /[0-9\d .]/;
    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}

function promedio() { 
    var vr1 = document.getElementById('P1').value; 
    var vr2 = document.getElementById('P2').value; 
    var vr3 = document.getElementById('P3').value; 
    var p = (parseFloat(vr1)+parseFloat(vr2)+parseFloat(vr3))/3;
    var vr4 = document.getElementById('P4').value; 
    var vr5 = document.getElementById('P5').value; 
    var final= (p*0.55)+(vr4*0.3)+(vr5*0.15);
    
    document.formulario.Prom.value= final;

    }


function borrard(){

    document.formulario.P1.value="";
    document.formulario.P2.value="";
    document.formulario.P3.value="";
    document.formulario.P4.value="";
    document.formulario.P5.value="";
    document.formulario.Prom.value="";

}