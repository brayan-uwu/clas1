class Dispositivo {
    marca;
    modelo;
    n_serie;
    procesador;
    ram;
    almacenamiento;
    constructor(m, mo, ns, p, r, a) {
        this.marca = m;
        this.modelo = mo;
        this.n_serie = ns;
        this.procesador = p;
        this.ram = r;
        this.almacenamiento = a;
    }
}
class Celular {
    camara;
    numero;
    memoria;
    constructor(c, nu, me) {
        this.camara = c;
        this.numero = nu;
        this.memoria = me;
    }

}
class Computadora {
    tarjeta_grafica;
    puertos;
    constructor(tg, pu) {
        this.tarjeta = tg;
        this.puertos = pu;
    }
}
class Laptop {
    pantalla;
    camaras;
    baterias;
    constructor(pa, cam, b) {
        this.pantalla = pa;
        this.camaras = cam;
        this.baterias = b;
    }
}
class Pc extends Computadora {
    fuente_p;
    gabinete;
    constructor(fp, g, tg, pu) {
        super(tg, pu);
        this.fuente_p = fp;
        this.gabinete = g;
    }
}

var d1 = new Pc(127, "madera", "rtx", "usb");