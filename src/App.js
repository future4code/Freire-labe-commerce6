import React from "react";
import logo from "./imagens/logo.png";
import "./App.css";
import styled from "styled-components";
import Filtros from "./components/Filtros";
import Home from "./components/Home";
import Carrinho from "./components/Carrinho";

const Layout = styled.div`
`;
const Header = styled.div`
  min-height: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;  
`;
const Logo = styled.div`
  margin-left: 100px;
  flex:1;
  display:flex;
  justify-content:center;
`;
const Funcionalidades = styled.div`
  width:100%;
  margin-right: 100px;
  display:flex;
  justify-content:space-around;
  align-items:center;
  padding-top:20px;
  padding-bottom:20px;
  flex:2;
  display:flex;
  justify-content:center;

`;
const Footer = styled.div`
  height:100px;
  color:#333;
  background-color:#eee;
  text-align:center;
  line-height:100px;
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
  {
    id: 7,
    nome: "Produto 7",
    preco: 2000,
    imagem: "https://picsum.photos/seed/g/200",
  },
  {
    id: 8,
    nome: "Produto 8",
    preco: 2000,
    imagem: "https://picsum.photos/seed/h/200",
  },
  {
    id: 9,
    nome: "Produto 9",
    preco: 2000,
    imagem: "https://picsum.photos/seed/i/200",
  },
  {
    id: 10,
    nome: "Produto 10",
    preco: 2000,
    imagem: "https://picsum.photos/seed/j/200",
  },
  {
    id: 11,
    nome: "Produto A",
    preco: 2000,
    imagem: "https://picsum.photos/seed/k/200",
  },
  {
    id: 12,
    nome: "Produto AA",
    preco: 2000,
    imagem: "https://picsum.photos/seed/l/200",
  },
  {
    id: 13,
    nome: "Produto AAA",
    preco: 2000,
    imagem: "https://picsum.photos/seed/m/200",
  },
  {
    id: 14,
    nome: "Produto B",
    preco: 2000,
    imagem: "https://picsum.photos/seed/n/200",
  },
  {
    id: 15,
    nome: "Produto BB",
    preco: 2000,
    imagem: "https://picsum.photos/seed/o/200",
  },
  {
    id: 16,
    nome: "Produto BBB",
    preco: 2000,
    imagem: "https://picsum.photos/seed/p/200",
  },
  {
    id: 17,
    nome: "Produto C",
    preco: 2000,
    imagem: "https://picsum.photos/seed/q/200",
  },
  {
    id: 18,
    nome: "Produto CC",
    preco: 2000,
    imagem: "https://picsum.photos/seed/r/200",
  },
  {
    id: 19,
    nome: "Produto CCC",
    preco: 2000,
    imagem: "https://picsum.photos/seed/s/200",
  },
  {
    id: 20,
    nome: "Produto D",
    preco: 2000,
    imagem: "https://picsum.photos/seed/t/200",
  },
  {
    id: 21,
    nome: "Produto DD",
    preco: 2000,
    imagem: "https://picsum.photos/seed/u/200",
  },
];

class App extends React.Component {
  state = {
    inputMinimo: 1,
    inputMaximo: 10000,
    inputBusca: "Produto",
    carrinhoProdutos: [
      // {
      //   id: 6,
      //   nome: "Produto 6",
      //   preco: 2000,
      //   imagem: "https://picsum.photos/seed/f/200",
      // },
      // {
      //   id: 5,
      //   nome: "Produto 5",
      //   preco: 2100,
      //   imagem: "https://picsum.photos/seed/e/200",
      // }
    ],
  };

  handleInputMinimo = (event) => {
    this.setState({ inputMinimo: event.target.value });
  };

  handleInputMaximo = (event) => {
    this.setState({ inputMaximo: event.target.value });
  };

  handleInputBusca = (event) => {
    this.setState({ inputBusca: event.target.value });
  };

  adicionarProdutosCarrinho = (iD) => {
    const produtosCarrinho = this.state.carrinhoProdutos.find(
      (produto) => iD === produto.id
    );

    if (produtosCarrinho) {
      const novoProdutosCarrinho = this.state.carrinhoProdutos.map(
        (produto) => {
          if (iD === produto.id) {
            return {
              ...produto,
              quantidade: produto.quantidade + 1,
            };
          }

          return produto;
        }
      );

      this.setState({ carrinhoProdutos: novoProdutosCarrinho });
    } else {
      const produtoAdicionado = produtos.find((produto) => iD === produto.id);

      const novoProdutosCarrinho = [
        ...this.state.carrinhoProdutos,
        { ...produtoAdicionado, quantidade: 1 },
      ];

      this.setState({ carrinhoProdutos: novoProdutosCarrinho });
    }
  };

  removerProdutosCarrinho = (iD) => {
    const novoProdutosCarrinho = this.state.carrinhoProdutos
      .map((produto) => {
        if (produto.id === iD) {
          return {
            ...produto,
            quantidade: produto.quantidade - 1,
          };
        }
        return produto;
      })
      .filter((produto) => produto.quantidade > 0);

    this.setState({ carrinhoProdutos: novoProdutosCarrinho });
  };

  render() {
    return (
      <Layout>
        <Header>
          <Logo>
            <img src={logo} alt="logo" height="200" />
          </Logo>
          <Funcionalidades>
            <Filtros
              filtroMinimo={this.state.inputMinimo}
              filtroMaximo={this.state.inputMaximo}
              filtroBusca={this.state.inputBusca}
              handleInputMinimo={this.handleInputMinimo}
              handleInputMaximo={this.handleInputMaximo}
              handleInputBusca={this.handleInputBusca}
            />
            <Carrinho
              carrinhoProdutos={this.state.carrinhoProdutos}
              removerProdutosCarrinho={this.removerProdutosCarrinho}
            />
          </Funcionalidades>
        </Header>

        <Home
          produtos={produtos}
          filtroMinimo={this.state.inputMinimo}
          filtroMaximo={this.state.inputMaximo}
          filtroBusca={this.state.inputBusca}
          adicionarProdutosCarrinho={this.adicionarProdutosCarrinho}
        />

        <Footer>Todos os direitos reservados HAPPY KID®</Footer>
      </Layout>
    );
  }
}

export default App;
