import { StatusUsuario } from "./StatusUsuario";
import { Livro } from "./Livro";
export class Usuario {
    nome: string;
    id: number;
    contato: string;
    status: StatusUsuario;
    historicoEmprestimos: Livro[];

    constructor(nome: string, id: number, contato: string) {
        this.nome = nome;
        this.id = id;
        this.contato = contato;
        this.status = StatusUsuario.Ativo;
        this.historicoEmprestimos = [];
    }
}
