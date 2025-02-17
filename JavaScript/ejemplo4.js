let soles = 1500;
let pdolar = 3.85;
let peuro = 4.35;

respuesta = 3;
console.log("1. Para dolares");
console.log("2. Para euros");
console.log("Selecciono la opción " + respuesta)

if (respuesta == 1){
    //Verdadera
    let dolares = soles / pdolar;
    console.log("El cambio en dolares es: " + dolares.toFixed(2))
}else if (respuesta == 2){
    let euros = soles / peuro;
    console.log("El cambio en euros es: " + euros.toFixed(2))
}else{
    console.log("opción no existe")
}

