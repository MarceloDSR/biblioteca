import { StatusLivro } from "./StatusLivro";
import { Genero } from "./Genero";

// Definindo a classe Livro
export class Livro {
    titulo: string; // Propriedade para armazenar o título do livro
    autor: string; // Propriedade para armazenar o nome do autor do livro
    generos: Genero[]; // Propriedade para armazenar os gêneros literários do livro
    status: StatusLivro; // Propriedade para armazenar o status do livro (Disponível, Emprestado, Reservado, etc.)
    atraso: number; // Propriedade para armazenar o número de dias de atraso na devolução do livro

    // Construtor da classe Livro
    constructor(titulo: string, autor: string, generos: Genero[], status: StatusLivro) {
        this.titulo = titulo; // Inicializa a propriedade 'titulo' com o valor passado como argumento
        this.autor = autor; // Inicializa a propriedade 'autor' com o valor passado como argumento
        this.generos = generos; // Inicializa a propriedade 'generos' com o valor passado como argumento
        this.status = status; // Inicializa a propriedade 'status' com o valor passado como argumento
        this.atraso = this.atraso; // Inicializa a propriedade 'atraso' com ela mesma (parece um erro, discutirei abaixo)
    }
}
