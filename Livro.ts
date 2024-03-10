import { StatusLivro } from "./StatusLivro";
import { Genero } from "./Genero";

export class Livro {

    titulo: string
    autor: string
    generos: Genero[]
    status: StatusLivro
    atraso: number
    
    constructor(titulo: string, autor: string, generos: Genero[], status: StatusLivro) {
        this.titulo = titulo
        this.autor = autor
        this.generos = generos
        this.status = status
        this.atraso = this.atraso
    }
}
