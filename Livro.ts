import { GeneroLivro } from "./GeneroLivro";
import { StatusLivro } from "./StatusLivro";

 export class Livro {
    titulo: string;
    autor: string;
    status: StatusLivro;
    generos: GeneroLivro[];

    constructor(titulo: string, autor: string, status: StatusLivro, generos: GeneroLivro[]) {
        this.titulo = titulo;
        this.autor = autor;
        this.status = status;
        this.generos = generos;
    }
}
