import React from "react";
import styled from "styled-components";


const ContainerFiltros = styled.div`
    flex:1;
    border:2px solid black;
    min-height:calc(100vh - 44px);
    text-align:center;
    margin-bottom:20px;
`


 class Carrinho extends React.Component {
  pegarValorTotal = () => {
    let valorTotal = 0

    for(let produto of this.props.carrinhoProdutos) {
      valorTotal += produto.preco * produto.quantidade
    }

    return valorTotal
  }

  render() {
    return <div>
      <h3>Carrinho:</h3>
      <div>
        {this.props.carrinhoProdutos.map((produto) => {
          return <div>
          <p>{produto.quantidade}x</p>
          <p>{produto.nome}</p>
          <button 
            onClick={() => this.props.removerProdutosCarrinho(produto.id)}
          >
            Remover
          </button>
        </div>         
  })}
  </div>
  <p>Valor total: R${this.pegarValorTotal()},00</p>
  </div>

 }
}

export default Carrinho
