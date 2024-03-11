import { Livro } from "./Livro";

// Define uma nova classe Emprestimo, que estende a classe Livro
export class Emprestimo extends Livro {
    atraso: number; // Declaração de uma propriedade chamada "atraso" do tipo número

    // Construtor da classe Emprestimo
    constructor(livro: Livro, atraso: number) {
        super(livro.titulo, livro.autor, livro.generos, livro.status); // Chama o construtor da classe Livro

        this.atraso = atraso; // Inicializa a propriedade "atraso" com o valor passado como argumento
    }
}
