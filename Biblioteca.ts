import { StatusLivro } from "./StatusLivro";
import { Livro } from "./Livro";
import { Usuario } from "./Usuario";
import { Genero } from "./Genero";

// Definindo a classe Biblioteca
export class Biblioteca {
    // Propriedades da classe
    livros: Livro[]; // Array para armazenar os livros da biblioteca
    usuarios: Usuario[]; // Array para armazenar os usuários da biblioteca
    reservasPendentes: { livro: Livro; usuario: Usuario }[]; // Array para armazenar as reservas pendentes

    // Construtor da classe
    constructor() {
        this.livros = []; // Inicializando o array de livros como vazio
        this.usuarios = []; // Inicializando o array de usuários como vazio
        this.reservasPendentes = []; // Inicializando o array de reservas pendentes como vazio
    }

    // Método para cadastrar um novo usuário na biblioteca
    cadastrarUsuario(usuario: Usuario) {
        this.usuarios.push(usuario); // Adiciona o usuário ao array de usuários
    }

    // Método para emprestar um livro para um usuário
    emprestarLivro(livro: Livro, usuario: Usuario): boolean {
        if (livro.status === StatusLivro.Disponivel) { // Verifica se o livro está disponível para empréstimo
            livro.status = StatusLivro.Emprestado; // Atualiza o status do livro para Emprestado
            usuario.historicoEmprestimos.push(livro); // Adiciona o livro ao histórico de empréstimos do usuário
            return true; // Retorna verdadeiro indicando que o empréstimo foi bem-sucedido
        }
        return false; // Retorna falso indicando que o empréstimo não foi possível
    }

    // Método para reservar um livro para um usuário
    reservarLivro(livro: Livro, usuario: Usuario) {
        if (livro.status !== StatusLivro.Disponivel) { // Verifica se o livro não está disponível
            livro.status = StatusLivro.Reservado; // Atualiza o status do livro para Reservado
            this.reservasPendentes.push({ livro, usuario }); // Adiciona a reserva às reservas pendentes
            console.log(`Livro ${livro.titulo}" reservado para ${usuario.nome}.`); // Exibe uma mensagem de confirmação da reserva
        }
    }

    // Método para verificar a multa acumulada de um usuário
    verificarMulta(usuario: Usuario): number {
        const prazoDevolucaoPadraoEmDias = 14; // Define o prazo padrão para devolução de livros em dias
        const multaPorDiaAtraso = 5; // Define o valor da multa por dia de atraso
        let multa = 0; // Inicializa a multa como zero

        // Itera sobre o histórico de empréstimos do usuário
        for (const livro of usuario.historicoEmprestimos) {
            const atraso = livro.atraso || 0; // Obtém o número de dias de atraso do livro, se houver, ou assume zero
            multa += Math.max(0, atraso) * multaPorDiaAtraso; // Calcula a multa acumulada com base no número de dias de atraso
        }

        return multa; // Retorna o valor total da multa
    }

    // Método para listar os livros disponíveis na biblioteca de acordo com um determinado gênero
    listarLivrosPorGenero(genero: Genero): Livro[] {
        const livrosPorGenero: Livro[] = []; // Array para armazenar os livros do gênero especificado

        // Itera sobre todos os livros da biblioteca
        for (const livro of this.livros) {
            let possuiGenero = false; // Variável para verificar se o livro possui o gênero especificado

            // Itera sobre os gêneros do livro
            for (const livroGenero of livro.generos) {
                if (livroGenero === genero) { // Verifica se o livro possui o gênero especificado
                    possuiGenero = true; // Define que o livro possui o gênero especificado
                    break; // Sai do loop, pois o gênero foi encontrado
                }
            }

            // Verifica se o livro possui o gênero especificado e está disponível
            if (possuiGenero && livro.status === StatusLivro.Disponivel) {
                livrosPorGenero.push(livro); // Adiciona o livro ao array de livros por gênero
            }
        }

        return livrosPorGenero; // Retorna a lista de livros do gênero especificado
    }
}
