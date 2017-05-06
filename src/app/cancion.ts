export class Cancion {
    id: string;
    nombre: string;
    imagen: string;
    autor: string;
    url: string;

    constructor(u: any = {}) {
        this.id = u._id;
        this.nombre = u.nombre;
        this.imagen = u.imagen;
        this.autor = u.autor;
        this.url = u.url;
    }
}
