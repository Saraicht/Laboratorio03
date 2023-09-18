let miNumero = "17";

let edad = Number(miNumero);
console.log(edad);

if( isNaN(edad)) {
    console.log("No es un  numero")
}

else{
    if(edad >= 18){
        console.log("puende votar");
    }
    else{
        console.log("Muy joven para votar");
    }
}

if(isNaN(edad)){
    console.log("No es un numero");
}
else{
    let resultado = (edad >= 18)?"puedes votar": "Muy joven para votar";
    console.log(resultado);
}
