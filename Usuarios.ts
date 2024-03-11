import { StatusUsuario } from "./StatusUsuario";
import { Livro } from "./Livro";


// Definindo a classe Usuario
export class Usuario {
    nome: string; // Propriedade para armazenar o nome do usuário
    id: number; // Propriedade para armazenar o ID do usuário
    contato: string; // Propriedade para armazenar as informações de contato do usuário
    historicoEmprestimos: Livro[]; // Propriedade para armazenar o histórico de empréstimos do usuário
    
    // Construtor da classe Usuario
    constructor(nome: string, id: number, contato: string) {
        this.nome = nome; // Inicializa a propriedade 'nome' com o valor passado como argumento
        this.id = id; // Inicializa a propriedade 'id' com o valor passado como argumento
        this.contato = contato; // Inicializa a propriedade 'contato' com o valor passado como argumento
        this.historicoEmprestimos = []; // Inicializa a propriedade 'historicoEmprestimos' como uma array vazia
       
    }
}
