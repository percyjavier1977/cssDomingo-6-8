function sumar(){
    //Obtener los valores del formulario
    let num1 = document.getElementById("numero1").value;
    let num2 = document.getElementById("numero2").value;

    // Convertir a timpo número los valores
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    let suma = num1 + num2;
    document.getElementById("resultado").innerText = suma;
}