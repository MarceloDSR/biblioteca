import { Biblioteca } from './Biblioteca';
import { Livro } from './Livro';
import { Usuario } from './Usuario';
import { StatusLivro } from './StatusLivro';
import { Genero } from './Genero';
import { Emprestimo } from './Emprestimo';


const biblioteca = new Biblioteca();

const usuario1 = new Usuario("Max", 1, "max@example.com");
const usuario2 = new Usuario("Maria", 2, "maria@example.com");

biblioteca.cadastrarUsuario(usuario1);
biblioteca.cadastrarUsuario(usuario2);


const livro1 = new Livro("Aventuras no Espaço", "Autor A", [Genero.FiccaoCientifica], StatusLivro.Disponivel);
const livro2 = new Livro("Amor Proibido", "Autor B", [Genero.Romance], StatusLivro.Disponivel);
const livro3 = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", [Genero.Fantasia], StatusLivro.Disponivel);
biblioteca.livros.push(livro1, livro2, livro3);


usuario1.historicoEmprestimos.push(new Emprestimo(livro1, 3));
usuario1.historicoEmprestimos.push(new Emprestimo(livro2, 0));


biblioteca.emprestarLivro(livro1, usuario1);
biblioteca.emprestarLivro(livro3, usuario2);


biblioteca.reservarLivro(livro2, usuario1);


console.log(`Multa de ${usuario1.nome}: R$ ${biblioteca.verificarMulta(usuario1)}`);
console.log(`Multa de ${usuario2.nome}: R$ ${biblioteca.verificarMulta(usuario2)}`);


console.log("Livros de Ficção Científica:");
console.log(biblioteca.listarLivrosPorGenero(Genero.FiccaoCientifica));
