/* function conversion() {
    const tipoMoneda = prompt("A qué moneda desea convertir (dolar, euro, real)?");
    const montoIngresado = parseFloat(prompt("Ingrese el monto en pesos"));

    const dolar = 492;
    const euro = 286;
    const real = 53.56;

    let resultado = 0;

    switch (tipoMoneda) {
        case "dolar":
            resultado = montoIngresado / dolar;
            alert(resultado);
            break;
        case "euro":
            resultado = montoIngresado / euro;
            alert(resultado);
            break;
        case "real":
            resultado = montoIngresado / real;
            alert(resultado);
            break;
        default:
            alert("Ingrese una opción válida");
            break;
    }
}

let continuar = true;


while (continuar) {
    conversion();
    const opcion = prompt("quiere realizar otra conversion? (si/no)");
    if (opcion !== "si"){
        continuar = false;
    }   
} */

