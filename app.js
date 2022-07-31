//Se requiere un algoritmo para obtener la estatura promedio de un grupo de personas cuyo numero de miembros se desconoce,
//El ciclo debe efectuarse siempre y cuando la estatura sea mayor a 0

let estatura = parseInt(prompt("Por favor, ingrese la estatura en centimetros"));
let Cantidad = 0;
let Suma = 0;

while(estatura>0){
    estatura= parseInt(prompt("Ingrese la estatura en centimetros"));
    Cantidad= Cantidad+1;
    Suma = Suma+ estatura;
}

//El ingreso de datos, finaliza con el numero 0 
if(Cantidad===0){
    alert("No ingresaste una estatura valida, por favor ingresa un numero mayor a 0");
}else{
    alert("El promedio de las estaturas de "+Cantidad+" es de  "+(Suma/Cantidad)+ " centimetros ");
}