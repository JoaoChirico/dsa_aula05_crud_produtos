let idGerador = 2;

let listaProdutos = [
    {
        id: 1,
        nome: "arroz",
        categoria: "alimento",
        preco: 5.80
    },
    {
        id: 2,
        nome: "leite",
        categoria: "bebida",
        preco: 4.25
    }
];

function listar() {
    return listaProdutos;
}

function inserir(produto) {
    produto.id = ++idGerador;
    listaProdutos.push(produto);
}

function buscarPorId(id) {
    for(let produto of listaProdutos) {
        if(produto.id === id){
            return produto;
        }
    }
}

function atualizar(id, produtoAleterado){
    let produto = buscarPorId(id);
    if(produto){
        produto.nome = produtoAleterado.nome;
        produto.categoria = produtoAleterado.categoria;
        produto.preco = produtoAleterado.preco;
    }

}

function deletar(id){
    for(let indice in listaProdutos){
        if(listaProdutos[indice].id === id){
            listaProdutos.splice(indice,1)
        }
    }
   
}

module.exports = {
    listar,
    inserir,
    buscarPorId,
    atualizar,
    deletar
}