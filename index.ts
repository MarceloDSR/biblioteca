import { Biblioteca } from './Biblioteca'; // Importa a classe Biblioteca do arquivo Biblioteca.ts
import { Livro } from './Livro'; // Importa a classe Livro do arquivo Livro.ts
import { Usuario } from './Usuario'; // Importa a classe Usuario do arquivo Usuario.ts
import { StatusLivro } from './StatusLivro'; // Importa a enumeração StatusLivro do arquivo StatusLivro.ts
import { Genero } from './Genero'; // Importa a enumeração Genero do arquivo Genero.ts
import { Emprestimo } from './Emprestimo'; // Importa a classe Emprestimo do arquivo Emprestimo.ts

// Criando uma instância da classe Biblioteca
const biblioteca = new Biblioteca();

// Criando e cadastrando usuários na biblioteca
const usuario1 = new Usuario("Max", 1, "max@example.com"); // Cria um usuário com nome Max, id 1 e contato max@example.com
const usuario2 = new Usuario("Maria", 2, "maria@example.com"); // Cria um usuário com nome Maria, id 2 e contato maria@example.com
biblioteca.cadastrarUsuario(usuario1); // Cadastra o usuário Max na biblioteca
biblioteca.cadastrarUsuario(usuario2); // Cadastra o usuário Maria na biblioteca

// Criando e cadastrando livros na biblioteca
const livro1 = new Livro("Aventuras no Espaço", "Autor A", [Genero.FiccaoCientifica], StatusLivro.Disponivel); // Cria um livro com título "Aventuras no Espaço", autor "Autor A", gênero Ficção Científica e status Disponível
const livro2 = new Livro("Amor Proibido", "Autor B", [Genero.Romance], StatusLivro.Disponivel); // Cria um livro com título "Amor Proibido", autor "Autor B", gênero Romance e status Disponível
const livro3 = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", [Genero.Fantasia], StatusLivro.Disponivel); // Cria um livro com título "O Senhor dos Anéis", autor "J.R.R. Tolkien", gênero Fantasia e status Disponível
biblioteca.livros.push(livro1, livro2, livro3); // Adiciona os livros criados à lista de livros da biblioteca

// Adicionando empréstimos ao histórico de empréstimos do usuário 1
usuario1.historicoEmprestimos.push(new Emprestimo(livro1, 3)); // Adiciona um empréstimo do livro1 com 3 dias de atraso ao histórico do usuário1
usuario1.historicoEmprestimos.push(new Emprestimo(livro2, 0)); // Adiciona um empréstimo do livro2 sem atraso ao histórico do usuário1

// Realizando empréstimos e reservas de livros na biblioteca
biblioteca.emprestarLivro(livro1, usuario1); // Empresta o livro1 ao usuário1
biblioteca.emprestarLivro(livro3, usuario2); // Empresta o livro3 ao usuário2
biblioteca.reservarLivro(livro2, usuario1); // Reserva o livro2 para o usuário1

// Exibindo a multa de cada usuário no console
console.log(`Multa de ${usuario1.nome}: R$ ${biblioteca.verificarMulta(usuario1)}`); // Exibe a multa do usuário1
console.log(`Multa de ${usuario2.nome}: R$ ${biblioteca.verificarMulta(usuario2)}`); // Exibe a multa do usuário2

// Listando os livros de Ficção Científica disponíveis na biblioteca
console.log("Livros de Ficção Científica:"); // Exibe uma mensagem no console
console.log(biblioteca.listarLivrosPorGenero(Genero.FiccaoCientifica)); // Lista os livros de Ficção Científica disponíveis na biblioteca e exibe no console
