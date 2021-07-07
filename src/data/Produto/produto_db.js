import Realm from 'realm'

class ProdutoSchema extends Realm.Object { }
ProdutoSchema.schema = {
    name: 'Produto',
    properties: {
        produto_id: { type: 'int', default: 0 },
        produto_nome: 'string',
        produto_descricao: 'string',
        produto_preco: 'int',
    }
};

let realm_produto = new Realm({ schema: [ProdutoSchema], schemaVersion: 1 });

// Exportando a instancia do schema criado
export default realm_produto;

//Criando os metodos CRUD
let listarProdutos = () => {
    return realm_produto.objects('Produto')
}

//Adicao de Produtos
let adicionarProdutos = (nomeProduto, descricaoProduto, precoProduto) => {
    
    const ultimoId = realm_produto.objects('Produto').sorted('produto_id', true)[0];
    const maiorId = ultimoId == null ? 1 : ultimoId.produto_id;
    const proximoId = maiorId != 1 ? maiorId : maiorId + 1; 

    realm_produto.write(() => {
        const prod = realm_produto.create('Produto', {
            produto_id: proximoId,
            produto_nome: nomeProduto,
            produto_descricao: descricaoProduto,
            produto_preco: precoProduto,
        });
    });
    console.log(realm_produto.objects('Produto'));
    
}

let deletarProduto = (idProduto) => {
    let savedItens = listarProdutos();
    realm_produto.write(()=>{
        realm_produto.delete(realm.objectForPrimaryKey("Produto", idProduto));
    })
}

export {
    listarProdutos, adicionarProdutos, deletarProduto
}