function calculaEdad(nombre, diaNacimiento, mesNacimiento, anioNacimiento) {
  var nombre = document.getElementById("nombre").value;
  var diaNacimiento = document.getElementById("dia").value;
  var mesNacimiento = document.getElementById("mes").value;
  var anioNacimiento = document.getElementById("anio").value;
  var salida = document.getElementById("salida");

  this.nombre = nombre;
  this.diaNacimiento = diaNacimiento;
  this.mesNacimiento = mesNacimiento;
  this.anioNacimiento = anioNacimiento;

  this.edad = function edad() {
    var calcula = 0;
    var objeto = new Date();
    var dia = objeto.getDate();
    var mes = objeto.getMonth() + 1;
    var hoy = objeto.getFullYear();

    if (
      mes < this.mesNacimiento ||
      (mes == this.mesNacimiento && dia < this.dia)
    ) {
      return (calcula = parseInt(hoy - this.anioNacimiento) - 1);
    } else {
      return (calcula = parseInt(hoy - this.anioNacimiento));
    }
  };
  salida.innerHTML =
    "La edad actual de " + nombre + " es  " + this.edad() + ".";
}

