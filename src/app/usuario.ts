export class Usuario {
    id: string;
    nombre: string;
    email: string;
    password: string;
    foto: string;

    constructor(u: any = {}) {
        this.id = u._id;
        this.nombre = u.nombre;
        this.email = u.email;
        this.password = u.password;
        this.foto = u.foto;
    }
}
