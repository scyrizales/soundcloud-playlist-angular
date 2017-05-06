export class Playlist {
    id: string;
    nombre: string;
    imagen: string;
    
    constructor(p:any = {}) {
        this.id = p._id;
        this.nombre = p.nombre;
        this.imagen = p.imagen;
    }
}
