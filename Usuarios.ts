import { StatusUsuario } from "./StatusUsuario";

export class Usuario {
    nome: string;
    id: number;
    contato: string;
    historicoEmprestimos: Livro[];
    status: StatusUsuario; // Adicionando a propriedade status

    constructor(nome: string, id: number, contato: string, status: StatusUsuario) {
        this.nome = nome;
        this.id = id;
        this.contato = contato;
        this.historicoEmprestimos = [];
        this.status = status; // Definindo o status ao criar um usuário
    }
}
