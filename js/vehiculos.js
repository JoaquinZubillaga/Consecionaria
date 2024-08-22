let set_id = 1

class Vehiculo{
    constructor(marca,modelo,precio,año,imagen){
        this.marca = marca
        this.modelo = modelo
        this.precio = precio
        this.año = año
        this.id = set_id++
        this.imagen = imagen
    }
}

let vehiculos = [
    new Vehiculo('Chevrolet', 'Corsa', 7900, 2007, 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.carros.com%2Fauto%2Ffba0f3c1f1c54dbbb0d4b2a7249dc5c6-p41003%2F%3Flang%3Des&psig=AOvVaw065BI5xQDPAL5bwrL9sr9z&ust=1722984412290000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIiBzab33ocDFQAAAAAdAAAAABAE'),
    new Vehiculo('Nissan', 'Sentra', 15990, 2015, 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.scottclarknissan.com%2Fblogs%2F1043%2Fnew-vehicles%2F2015-nissan-sentra-s-test-drive%2F&psig=AOvVaw39Yn75ItMPFVc2QslqARu0&ust=1722984690427000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMjCqK_43ocDFQAAAAAdAAAAABAE'),
    new Vehiculo('Ford', 'Focus', 19800, 2021, 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.autoscout24.be%2Ffr%2Foffres%2Fford-focus-st-line-zeer-mooie-wagen-garantie-essence-noir-99674a00-5345-4886-8777-0ab30f3ce4d4&psig=AOvVaw3mdQTcqiMTXHnN0WLXpfEi&ust=1722984747153000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCODcqMf43ocDFQAAAAAdAAAAABAJ'),
    new Vehiculo('Kia', 'Rio', 19000, 2019, 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fcarden.com.py%2Fcar%2Fkia%2Frio%2F2019%2F4846&psig=AOvVaw1Ricfu7EZhx0wPS_QkvnK7&ust=1722984804011000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIiohuD43ocDFQAAAAAdAAAAABAE'),
    new Vehiculo('Volkswagen', 'Vento', 50490, 2024, 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fautos.mercadolibre.com.ar%2Fvolkswagen%2Fvento%2F&psig=AOvVaw15_iMJtHr-p_l_MFle55xZ&ust=1722984845837000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKCr5_b43ocDFQAAAAAdAAAAABAJ'),
    new Vehiculo('Ford', 'Fiesta', 13990, 2017, 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fcarden.com.py%2Fcar%2Fford%2Ffiesta%2F2017%2F2632&psig=AOvVaw3-Ny7dIwXvbFvT-2lPwcm7&ust=1722984910903000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKDdrJL53ocDFQAAAAAdAAAAABAE'),
    new Vehiculo('Chevrolet', 'Onix', 23990, 2024, 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fcarros.tucarro.com.co%2Fchevrolet%2Fonix%2F2024%2Fventa-carro_DisplayType_G_PriceRange_75000000-90000000_Combustible_Diesel_DOORS_5-5_ITEM*CONDITION_2230284%3Ffilter%3DVEHICLE_YEAR&psig=AOvVaw13xPu_XB5P_gSe-qnyoe41&ust=1722984953354000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJCrvaX53ocDFQAAAAAdAAAAABAE'),
    new Vehiculo('Fiat', 'Uno Way', 11490, 2017, 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.yapo.cl%2Fautos-usados%2Ffiat-uno-way-2017%2F26840394&psig=AOvVaw2nq_VCAaJsvAtDbXGwALxS&ust=1722984989964000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMDfo7T53ocDFQAAAAAdAAAAABAR'),
    new Vehiculo('Nissan', 'Tiida', 11900, 2012, 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fneoauto.com%2Fnissan-tiida-2012-1229905&psig=AOvVaw2YLi97eiURR3oiUs10dQtm&ust=1722985125535000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLC07Pn53ocDFQAAAAAdAAAAABAE'),
    new Vehiculo('BMW', 'X1', 31990, 2018, 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.reddit.com%2Fr%2FBMW%2Fcomments%2F8qgj12%2Fnewest_addition_2018_x1_msport%2F&psig=AOvVaw0KbaPAM0cj5N2ckeFyAbre&ust=1722985172956000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCODcu5H63ocDFQAAAAAdAAAAABAE'),
]

