
const produtoRepository = require('./repository/produto_repository')

function main() {
    console.log(produtoRepository.listar());

    produtoRepository.inserir({ 
        nome: "Feijao", 
        categoria: "alimento", 
        preco: 8.00 
    });

    produtoRepository.inserir({ 
        nome: "Suco de laranja", 
        categoria: "bebida", 
        preco: 9.20 
    });

    produtoRepository.atualizar(2,{
        id: 2,
        nome: "leite",
        categoria: "bebida",
        preco: 4.00
    });

    console.log(produtoRepository.listar());

    produtoRepository.deletar(4);
    console.log(produtoRepository.buscarPorId(4));
    console.log(produtoRepository.buscarPorId(2));

}

main();