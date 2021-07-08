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
    console.log(realm_produto.objects('Produto2'));
    
}

let deletarProduto = (prodDeletar) => {
    let savedItens = listarProdutos();
    realm_produto.write(()=>{
        realm_produto.delete(prodDeletar);
        prodDeletar = null;
    })
}

export {
    listarProdutos, adicionarProdutos, deletarProduto
}