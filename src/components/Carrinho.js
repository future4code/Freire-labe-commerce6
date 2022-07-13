import React from "react";
import styled from "styled-components";
import carrinho from "../imagens/carrinho.png";


const ContainerFiltros = styled.div`
  padding: 5px 20px;
  border: 1px solid #ccc;
  background-color: #eee;
`;
const Icone = styled.img`
  padding-right: 10px;
`;
const FiltroNome = styled.div`
display:flex;
align-items: center;
justify-content: space-between;

`

class Carrinho extends React.Component {
  pegarValorTotal = () => {
    let valorTotal = 0;

    for (let produto of this.props.carrinhoProdutos) {
      valorTotal += produto.preco * produto.quantidade;
    }

    return valorTotal;
  };

  render() {
    return (
      <ContainerFiltros>
        <FiltroNome>
          <span>
            <h3>Carrinho</h3>
          </span>
          <span>
            <img src={carrinho} width="40" height="40" />
            <br />
          </span>
        </FiltroNome>
        <div>
          {this.props.carrinhoProdutos.map((produto) => {
            return (
              <div>
                <p>{produto.quantidade}x</p>
                <p>{produto.nome}</p>
                <button
                  onClick={() => this.props.removerProdutosCarrinho(produto.id)}
                >
                  Remover
                </button>
              </div>
            );
          })}
        </div>
        <p>Valor total: R${this.pegarValorTotal()},00</p>
      </ContainerFiltros>
    );
  }
}

export default Carrinho;
