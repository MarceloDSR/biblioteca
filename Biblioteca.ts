import { StatusLivro } from "./StatusLivro";
import { Livro } from "./Livro";
import { Usuario } from "./Usuario";
import { Genero } from "./Genero";

export class Biblioteca {
    livros: Livro[];
    usuarios: Usuario[];
    reservasPendentes: { livro: Livro; usuario: Usuario }[];

    constructor() {
        this.livros = [];
        this.usuarios = [];
        this.reservasPendentes = [];
    }

    cadastrarUsuario(usuario: Usuario) {
        this.usuarios.push(usuario);
    }

    emprestarLivro(livro: Livro, usuario: Usuario): boolean {
        if (livro.status === StatusLivro.Disponivel) {
            livro.status = StatusLivro.Emprestado;
            usuario.historicoEmprestimos.push(livro);
            return true;
        }
        return false;
    }

    reservarLivro(livro: Livro, usuario: Usuario) {
        if (livro.status !== StatusLivro.Disponivel) {
            livro.status = StatusLivro.Reservado;
            this.reservasPendentes.push({ livro, usuario });
            console.log(`Livro "${livro.titulo}" reservado para ${usuario.nome}.`);
        }
    }

    verificarMulta(usuario: Usuario): number {
        const prazoDevolucaoPadraoEmDias = 14;
        const multaPorDiaAtraso = 5; 
        let multa = 0;
    
        for (const livro of usuario.historicoEmprestimos) {
            const atraso = livro.atraso || 0; 
            multa += Math.max(0, atraso) * multaPorDiaAtraso;
        }
    
        return multa;
    }

    listarLivrosPorGenero(genero: Genero): Livro[] {
        const livrosPorGenero: Livro[] = [];

        for (const livro of this.livros) {
            let possuiGenero = false;

            for (const livroGenero of livro.generos) {
                if (livroGenero === genero) {
                    possuiGenero = true;
                    break;
                }
            }

            if (possuiGenero && livro.status === StatusLivro.Disponivel) {
                livrosPorGenero.push(livro);
            }
        }

        return livrosPorGenero;
    }
}
