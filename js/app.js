function mostrarVehiculos() {
    vehiculos.forEach((vehiculo) => {
      console.log(`${vehiculo.marca} ${vehiculo.modelo}, Precio: ${vehiculo.precio}, Año: ${vehiculo.año}`);
    });
}
  
function filtrarPorPrecio() {
    const precio = parseFloat(prompt('Ingresa el precio máximo:'));
    const resultados = vehiculos.filter((vehiculo) => vehiculo.precio <= precio);
    if (resultados.length > 0) {
      resultados.forEach((vehiculo) => {
        console.log(`${vehiculo.marca} ${vehiculo.modelo}, Precio: ${vehiculo.precio}, Año: ${vehiculo.año}`);
      });
    } else {
      console.log('No se encontraron vehículos con el precio especificado.');
    }
  }
  

function filtrarPorAño() {
    const año = parseInt(prompt('Ingresa el año mínimo:'));
    const resultados = vehiculos.filter((vehiculo) => vehiculo.año >= año);
    if (resultados.length > 0) {
      resultados.forEach((vehiculo) => {
        console.log(`${vehiculo.marca} ${vehiculo.modelo}, Precio: ${vehiculo.precio}, Año: ${vehiculo.año}`);
      });
    } else {
      console.log('No se encontraron vehículos del año especificado o más recientes.');
    }
}
  

function menu() {
    alert('Bienvenido a la Concesionaria!');
  
    let opcion = '';
    while (opcion !== 'salir') {
      opcion = prompt('Para listar todos los vehículos disponibles, escribe "1"\nPara filtrar por precio, escribe "2"\nPara filtrar por año, escribe "3"\nPara salir, escribe "salir"');
      if (opcion === '1') {
        mostrarVehiculos();
      } else if (opcion === '2') {
        filtrarPorPrecio();
      } else if (opcion === '3') {
        filtrarPorAño();
      } else if (opcion === 'salir') {
        console.log('Saliendo de la concesionaria.');
      } else {
        console.log('Opción inválida. Por favor, elige una opción válida.');
      }
    }
}

// menu()



vehiculos.forEach(vehiculo => {
    const vehiculos_card = document.createElement("div")
    vehiculos_card.innerHTML = `
    <div id="${vehiculo.id}">
    <p>${vehiculo.marca}</p>
    <p>${vehiculo.modelo}</p>
    <img src=${vehiculo.imagen}>
    <p>${vehiculo.precio}</p>
    <button id = btn${vehiculo.id}> comprar </button>
    </div> `

    document.body.appendChild(vehiculos_card)
})