let listaProductos = [
    {prenda: "Remera", talle: "S/M/L", estado: "En stock", precio: "$1500"},
    {prenda: "Pantalón", talle: "S/M/L", estado: "En stock", precio: "$2000"},
    {prenda: "Gorra", talle: "S/M/L", estado: "En stock", precio: "$1000"}
]

let opcionesMenu;
while (opcionesMenu !== 2) {

function listarProductos(lista) {
    for (let i = 0; i < lista.length; i++) {
            console.table(lista[i]);
    }
}

    const menu = `Elegí una opción:
    1 - Ver productos
    2 - Salir`
    opcionesMenu = Number(prompt(menu));

    // Validación
    if(!isNaN(opcionesMenu) && opcionesMenu < 2 && opcionesMenu > 0) {
        switch (opcionesMenu) {
            case 1:
                listarProductos(listaProductos);
                break;
            default:
                break;
                
        }
    } else if (opcionesMenu == 2) {
        alert("Adios");
    } else {
        alert("La opción ingresada es incorrecta")
    }
}