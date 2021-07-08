import Realm from 'realm'

class ProdutoSchema2 extends Realm.Object { }
ProdutoSchema2.schema = {
    name: 'Produto2',
    properties: {
        produto_id: { type: 'int', default: 0 },
        produto_nome: 'string',
        produto_descricao: 'string',
        produto_preco: 'double',
    },
    primaryKey: 'produto_id'
};

let realm_produto = new Realm({ schema: [ProdutoSchema2], schemaVersion: 1 });

// Exportando a instancia do schema criado
export default realm_produto;

//Criando os metodos CRUD
let listarProdutos = () => {
    return realm_produto.objects('Produto2')
}

//Adicao de Produtos
let adicionarProdutos = (nomeProduto, descricaoProduto, precoProduto) => {
    
    const ultimoId = realm_produto.objects('Produto2').sorted('produto_id', true)[0];
    const proximoId = ultimoId == null ? 1 : ultimoId.produto_id + 1;

  //const proximoId = maiorId != 1 ? maiorId : maiorId + 1; 

    realm_produto.write(() => {
        const prod = realm_produto.create('Produto2', {
            produto_id: proximoId,
            produto_nome: nomeProduto,
            produto_descricao: descricaoProduto,
            produto_preco: precoProduto,
        });
    });
}

let buscarPorNome = (nome) => {
    const produto = realm_produto.objects('Produto2')
                                .filtered('produto_nome= $0', nome);
    return produto;
}

let atualizarProduto = (nome, descricao, preco, id) => {
    realm_produto.write(() => {
        const prod = realm_produto.objectForPrimaryKey('Produto2', id);
        prod.produto_nome = nome;
        prod.produto_descricao = descricao;
        prod.produto_preco = preco;
    });
}

let deletarProduto = (id) => {
    let savedItens = listarProdutos();
    realm_produto.write(()=>{
        realm_produto.delete(realm_produto.objectForPrimaryKey('Produto2', id));
        
    })
}

export {
    listarProdutos, adicionarProdutos, buscarPorNome, atualizarProduto, deletarProduto
}