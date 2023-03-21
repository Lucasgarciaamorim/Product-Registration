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
        this.Listar()
        this.Cancelar()


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
        };
        if (produto.precoProduto == '') {
            msg += 'Por favor, insira corretamente o preço do Produto! '
        };
        if (msg != '') {
            alert(msg);
            return false;
        }
        return true;
    }
    Salvar(produto) {
        this.arrayProdutos.push(produto)
        this.id++;
    }
    Listar() {
        let tbody = document.querySelector('#tbody');
        tbody.innerHTML = ''

        for (let i = 0; i < this.arrayProdutos.length; i++) {
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_nome = tr.insertCell();
            let td_preco = tr.insertCell();
            let td_del = tr.insertCell();

            

            td_id.innerText = this.arrayProdutos[i].id;
            td_nome.innerText = this.arrayProdutos[i].nomeProduto;
            td_preco.innerText = this.arrayProdutos[i].precoProduto;
            let imagem = document.createElement('img');
            imagem.src = '/assets/img/lixeira.jpg'
            imagem.setAttribute('onclick', "produto.Deletar(" + this.arrayProdutos[i].id + ")")
            td_del.appendChild(imagem);



        }
    }

    Cancelar() {
        document.querySelector('#nomeProduto').value = null;
        document.querySelector('#precoProduto').value = null;

    }

    
    Deletar(id) {
        let confirmacao = confirm("Tem certeza que deseja deletar este item?");
        if (confirmacao) {
            let tbody = document.querySelector('#tbody');
            for (let i = 0; i < this.arrayProdutos.length; i++) {
                if (this.arrayProdutos[i].id == id) {
                    this.arrayProdutos.splice(i, 1)
                    tbody.deleteRow(i);
                }
            }
            alert('O item foi apagado com sucesso');
        }
    }}

let produto = new Produto();