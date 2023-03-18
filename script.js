class Produto {

    constructor() {
        this.id = 1;
        this.arrayProdutos = [];
    }

    Adicionar() {
        let produto = this.lerDados()
        if (this.Validar(produto) == true) {
            this.Salvar(produto)

        }
        console.log(this.arrayProdutos)

    }
    lerDados() {
        let produto = {}

        produto.id = this.id;
        produto.nomeProduto = document.querySelector('#nomeProduto').value;
        produto.precoProduto = document.querySelector('#precoProduto').value;

        return produto
    }

    Validar(produto) {
        let msg = ''

        if (produto.nomeProduto == '') {
            msg += 'Por favor, insira corretamente o nome do Produto! '
        }
        if (produto.precoProduto == '') {
            msg += 'Por favor, insira corretamente o preço do Produto! '
        }
        if (msg != '') {
            alert(msg)
            return false
        }
        return true
    }
    Salvar(produto) {
        this.arrayProdutos.push(produto)
        this.id++;
    }
}

let produto = new Produto();