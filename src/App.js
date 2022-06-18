import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import Filtros from "./components/Filtros";
import Home from "./Home";
import Carrinho from "./components/Carrinho";

const Layout = styled.div`
  display: flex;
  min-height: calc(100vh - 44px);
  flex-direction: row;
  margin: 20px;
`;

const produtos = [
  {
    id: 1,
    nome: "Produto 1",
    preco: 200,
    imagem: "https://picsum.photos/seed/a/200",
  },
  {
    id: 2,
    nome: "Produto 2",
    preco: 100,
    imagem: "https://picsum.photos/seed/b/200",
  },
  {
    id: 3,
    nome: "Produto 3",
    preco: 50,
    imagem: "https://picsum.photos/seed/c/200",
  },
  {
    id: 4,
    nome: "Produto 4",
    preco: 10,
    imagem: "https://picsum.photos/seed/d/200",
  },
  {
    id: 5,
    nome: "Produto 5",
    preco: 2100,
    imagem: "https://picsum.photos/seed/e/200",
  },
  {
    id: 6,
    nome: "Produto 6",
    preco: 2000,
    imagem: "https://picsum.photos/seed/f/200",
  },
];

class App extends React.Component {
  state = {
    inputMinimo: 1,
    inputMaximo: 10000,
    inputBusca: "Produto",
    carrinhoProdutos: [
      {
        id: 6,
        nome: "Produto 6",
        preco: 2000,
        imagem: "https://picsum.photos/seed/f/200",
      },
      {
        id: 5,
        nome: "Produto 5",
        preco: 2100,
        imagem: "https://picsum.photos/seed/e/200",
      }
    ]
  }

  handleInputMinimo = (event) => {
    this.setState({inputMinimo: event.target.value})
  }

  handleInputMaximo = (event) => {
    this.setState({inputMaximo: event.target.value})
  }

  handleInputBusca = (event) => {
    this.setState({inputBusca: event.target.value})
  }

  adicionarProdutosCarrinho = (id) => {
    const produtosCarrinho = this.state.carrinhoProdutos.find(produto => id === produto.id)

    if(produtosCarrinho) {
      const novoProdutosCarrinho = this.state.carrinhoProdutos.map(produto => {
        if(id === produto.id) {
          return {
            ...produto,
            quantidade: produto.quantidade + 1
          }
        }

        return produto
      })

      this.setState({carrinhoProdutos: novoProdutosCarrinho})
    } else {
      const produtoAdicionado = produtos.find(produto => id === produto.id)

      const novoProdutosCarrinho = [...this.state.carrinhoProdutos, {...produtoAdicionado, quantidade: 1}]

      this.setState({produtosInCart: novoProdutosCarrinho})
    }
  }

  removerProdutosCarrinho = (id) => {
    const novoProdutosCarrinho = this.state.carrinhoProdutos.map((produto) => {
      if(produto.id === id) {
        return {
          ...produto,
          quantidade: produto.quantidade - 1
        }
      }
      return produto
    }).filter((produto) => produto.quantidade > 0)

    this.setState({carrinhoProdutos: novoProdutosCarrinho})
  }
  render() {
    return (
      <Layout>
        <Filtros
          filtroMinimo={this.state.inputMinimo}
          filtroMaximo={this.state.inputMaximo}
          filtroBusca={this.state.inputBusca}
          handleInputMinimo={this.handleInputMinimo}
          handleInputMaximo={this.handleInputMaximo}
          handleInputBusca={this.handleInputBusca}
        />
        <Home
          produtos={produtos}
          filtroMinimo={this.state.inputMinimo}
          filtroMaximo={this.state.inputMaximo}
          filtroBusca={this.state.inputBusca}
        />
        <Carrinho
          carrinhoProdutos={this.state.carrinhoProdutos}
          removerProdutosCarrinho={this.removerProdutosCarrinho}
        />
      </Layout>
    );
  }
}

export default App;
