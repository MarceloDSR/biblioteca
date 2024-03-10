import { Biblioteca } from './Biblioteca';
import { Livro } from './Livro';
import { Usuario } from './Usuario';
import { StatusLivro } from './StatusLivro';
import { Genero } from './Genero';


const biblioteca = new Biblioteca();

const usuario1 = new Usuario("João", 1, "joao@example.com");
const usuario2 = new Usuario("Maria", 2, "maria@example.com");

biblioteca.cadastrarUsuario("João", 1, "joao@example.com");
biblioteca.cadastrarUsuario("Maria", 2, "maria@example.com");


const livro1 = new Livro("Aventuras no Espaço", "Autor A", [Genero.FiccaoCientifica], StatusLivro.Disponivel);
const livro2 = new Livro("Amor Proibido", "Autor B", [Genero.Romance], StatusLivro.Disponivel);
const livro3 = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", [Genero.Fantasia], StatusLivro.Disponivel);
biblioteca.livros.push(livro1, livro2, livro3);


biblioteca.emprestarLivro(livro1, usuario1);
biblioteca.emprestarLivro(livro3, usuario2);


biblioteca.reservarLivro(livro2, usuario1);


console.log(`Multa de ${usuario1.nome}: R$ ${biblioteca.verificarMulta(usuario1)}`);
console.log(`Multa de ${usuario2.nome}: R$ ${biblioteca.verificarMulta(usuario2)}`);


console.log("Livros de Ficção Científica:");
console.log(biblioteca.listarLivrosPorGenero(Genero.FiccaoCientifica));
