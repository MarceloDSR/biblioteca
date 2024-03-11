// Enumeração para representar o status do livro
export enum StatusLivro {
    Disponivel = "Disponivel", // Valor "Disponivel" representa que o livro está disponível para empréstimo
    Emprestado = "Emprestado", // Valor "Emprestado" representa que o livro está emprestado
    Atrasado = "Atrasado", // Valor "Atrasado" representa que o livro está em atraso na devolução
    Reservado = "Reservado" // Valor "Reservado" representa que o livro está reservado
}
