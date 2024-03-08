import { Livro } from "./Livro";
import { StatusLivro } from "./StatusLivro";
import { GeneroLivro } from "./GeneroLivro";
import { Usuario } from "./Usuarios";

export class Biblioteca {
    livros: Livro[];
    usuarios: Usuario[];

    constructor() {
        this.livros = [];
        this.usuarios = [];
    }

    adicionarLivro(livro: Livro) {
        this.livros.push(livro);
    }

    cadastrarUsuario(usuario: Usuario) {
        this.usuarios.push(usuario);
    }

    emprestarLivro(livro: Livro, usuario: Usuario): boolean {
        if (livro.status === StatusLivro.Disponivel) {
            livro.status = StatusLivro.Emprestado;
            usuario.historicoEmprestimos.push(livro);
            console.log(`O livro:${livro.titulo} foi emprestado para o Usuario:${usuario.nome}`)
            return true;
        }
        return false;
    }

    devolverLivro(livro: Livro, usuario: Usuario) {
        const index = usuario.historicoEmprestimos.indexOf(livro);
        if (index !== -1) {
            livro.status = StatusLivro.Disponivel;
            usuario.historicoEmprestimos.splice(index, 1);
            console.log(`O livro:${livro.titulo} foi devolvido pelo Usuario:${usuario.nome}`)
        }
    }

    reservarLivro(livro: Livro, usuario: Usuario) {
        if (livro.status !== StatusLivro.Disponivel) {
            livro.status = StatusLivro.Reservado;
            console.log(`O livro:${livro.titulo} foi reservado para o Usuario:${usuario.nome}`)
        }
    }

    verificarMulta(usuario: Usuario, multa: number): number {
        multa;
        const diasAtraso = this.calcularDiasAtraso(usuario, multa);
        
        if (diasAtraso > 0) {
            multa = diasAtraso * 5; 
        }
        return multa;
    }

    calcularDiasAtraso(usuario: Usuario, diasAtrasoTotal: number): number {
        const prazoDevolucaoPadraoEmDias = 14; 
        diasAtrasoTotal
    
        // Percorrendo o histórico de empréstimos do usuário
    for (const livro of usuario.historicoEmprestimos) {
            
    const dataAtual = new Date();
        const dataDevolucaoEsperada = new Date(dataAtual);
        dataDevolucaoEsperada.setDate(dataDevolucaoEsperada.getDate() + prazoDevolucaoPadraoEmDias);
        const diffTime = dataAtual.getTime() - dataDevolucaoEsperada.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays > 0) {
        diasAtrasoTotal += diffDays; 
    }
    }
        return diasAtrasoTotal; 
    }

    listarLivrosDisponiveis(): Livro[] {
        return this.livros.filter(livro => livro.status === StatusLivro.Disponivel);
    }

    listarLivrosEmprestados(): Livro[] {
        return this.livros.filter(livro => livro.status === StatusLivro.Emprestado);
    }

    listarLivrosAtrasados(): Livro[] {
        return this.livros.filter(livro => livro.status === StatusLivro.Atrasado);
    }

    listarLivrosPorGenero(genero: GeneroLivro): Livro[] {
        return this.livros.filter(livro => {
            for (const livroGenero of livro.generos) {
                if (livroGenero === genero && livro.status === StatusLivro.Disponivel) {
                    return true;
                }
            }
            return false;
        });
    }
}

let biblioteca = new Biblioteca();

let livro1 = new Livro("Dom Quixote", "Miguel de Cervantes", StatusLivro.Disponivel, [GeneroLivro.Romance]);
let livro2 = new Livro("1984", "George Orwell", StatusLivro.Emprestado, [GeneroLivro.FiccaoCientifica, GeneroLivro.Suspense]);
let livro3 = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", StatusLivro.Atrasado, [GeneroLivro.Fantasia]);
let livro4 = new Livro("Uma Breve História do Tempo", "Stephen Hawking", StatusLivro.Reservado, [GeneroLivro.Historia]);
let livro5 = new Livro("As Flores do Mal", "Charles Baudelaire", StatusLivro.Disponivel, [GeneroLivro.Poesia]);
let livro6 = new Livro("O Iluminado", "Stephen Hawking", StatusLivro.Disponivel, [GeneroLivro.Terror] );
let livro7 = new Livro("O Colecionador", " John Fowles", StatusLivro.Disponivel, [GeneroLivro.Suspense]);
let livro8 = new Livro("Sapiens: Uma Breve História da Humanidade","Yuval Noah Harari", StatusLivro.Disponivel, [GeneroLivro.NaoFiccao]);

let usuario1 = new Usuario("Franco", 1, "Franco@example.com", 0);
let usuario2 = new Usuario("Franca", 2, "Franca@exemple.com", 3);

biblioteca.adicionarLivro(livro1);
// biblioteca.adicionarLivro(livro2);
// biblioteca.adicionarLivro(livro3);
// biblioteca.adicionarLivro(livro4);
// biblioteca.adicionarLivro(livro5);
// biblioteca.adicionarLivro(livro6);
// biblioteca.adicionarLivro(livro7);
// biblioteca.adicionarLivro(livro8);

biblioteca.cadastrarUsuario(usuario1);
biblioteca.cadastrarUsuario(usuario2);

// console.log("Livros Disponíveis:", biblioteca.listarLivrosDisponiveis());
console.log("Livros Emprestados:", biblioteca.listarLivrosEmprestados());
// console.log("Livros Atrasados:", biblioteca.listarLivrosAtrasados());
// console.log("Livros de Suspense Disponíveis:", biblioteca.listarLivrosPorGenero(GeneroLivro.Suspense));
// console.log("Livros de Romance Disponíveis:", biblioteca.listarLivrosPorGenero(GeneroLivro.Romance));
// console.log("Calculando dias de atraso", biblioteca.calcularDiasAtraso(usuario1, 3))
// console.log("Dias de atraso", biblioteca.calcularDiasAtraso(usuario2, 5))
// console.log("Calculando multa de atraso", biblioteca.verificarMulta(usuario1, 3))

biblioteca.emprestarLivro(livro1, usuario1)
biblioteca.emprestarLivro(livro1, usuario2)
// biblioteca.devolverLivro(livro1, usuario1)
