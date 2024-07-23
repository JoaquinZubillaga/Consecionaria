let set_id = 1

class vehiculo{
    constructor(marca,modelo,precio,año){
        this.marca = marca
        this.modelo = modelo
        this.precio = precio
        this.año = año
        this.id = set_id++
    }
}

let vehiculos = [
    new vehiculo('Chevrolet', 'Corsa', 7900, 2007),
    new vehiculo('Nissan', 'Sentra', 15990, 2015),
    new vehiculo('Ford', 'Focus', 19800, 2021),
    new vehiculo('Kia', 'Rio', 19000, 2019),
    new vehiculo('Volkswagen', 'Vento', 50490, 2024),
    new vehiculo('Ford', 'Fiesta', 13990, 2017),
    new vehiculo('Chevrolet', 'Onix', 23990, 2024),
    new vehiculo('Fiat', 'Uno Way', 11490, 2017),
    new vehiculo('Nissan', 'Tiida', 11900, 2012),
    new vehiculo('BMW', 'X1', 31990, 2018),
]

