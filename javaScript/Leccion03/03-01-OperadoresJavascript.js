// ejercicio para encontrar numeros pares e impares

let parImpar = 10;
if (parImpar % 2 == 0){
    console.log("Es un numero impar");
}
else{
    console.log ("Es un numero par");
}

// ejercicio : es mayor de edad
let edad = 14, adulto = 18;
if(edad >= adulto){
    console.log ("Es una persona adulta");
}
else{
    console.log("Es menor de edad");
}

// ejercicio : Dentro de un rango
let dentroRango = 5;
let valMin = 0, valMax = 10;

if(dentroRango >= valMin && dentroRango <= valMax){
    console.log ("Esta dentro del rango establecido");
}
else{
    console.log("No esta dentro del rango establecido");
}

// ejercicio : el padre puede asistir al juego de su hijo
let vacaciones = false , diaDescanso = false;
if(vacaciones || diaDescanso){
    console.log("El padre puede asistir al juego de su hijo");
}
else{
    console.log("El padre no puede asistir al juego de su hijo");
}

//operador ternario
let resultado2 = (3 > 2) ? "verdadero" : "falso";
console.log(resultado2);
let numero = 9;
let resultado3 = (numero % 2 == 0) ? "Es par" : "Es impar";
console.log(resultado3);

//convertir de string a numero
let miNUmero = "10"; // es una cadena
console.log(typeof miNUmero);
let edad2 = Number(miNUmero);
console.log(typeof edad2);

if(isNaN(edad2)){
    console.log("No es un numero");
}

else{
    if( edad2 >= 18){
        console.log("puede votar");
    }
    else{
        console.log("muy joven para votar");
}   }

let resultado4 = edad2 >= 18 ? "puede votar" : "muy joven para votar";
console.log(resultado4);

//funcion isNaN
