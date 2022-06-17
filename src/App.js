import React from "react";
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Filtros from "./components/Filtros"
import Home from "./Home"
import Carrinho from "./components/Carrinho"



const Layout = styled.div`
display: flex;
height: 100%;
width: 100%;
flex-direction: row;
`


class App extends React.Component {
  state = {
    inputUsuario: "",
    inputTexto: "",
    mensagens: [],
    inputMinimo: '',
    inputMaximo:'',
    inputBusca:'',
    objeto: [
      {
       nome: 'Produto 1',
       preco: 200,
       imagem: 'https://picsum.photos/seed/a/200',
      },
      {
        nome: 'Produto 2',
        preco: 100,
        imagem: 'https://picsum.photos/seed/b/200',
      },
      {
        nome: 'Produto 3',
        preco: 50,
        imagem: 'https://picsum.photos/seed/c/200',
      },
      {
        nome: 'Produto 4',
        preco: 10,
        imagem: 'https://picsum.photos/seed/d/200',
      },
      {
        nome: 'Produto 5',
        preco: 2100,
        imagem: 'https://picsum.photos/seed/e/200',
      },
      {
        nome: 'Produto 6',
        preco: 2000,
        imagem: 'https://picsum.photos/seed/f/200',
      },
    ]
  };

  handleInputMinimo = (event) => {
    this.setState({inputMinimo: event.target.value})
  }

  handleInputMaximo = (event) => {
    this.setState({inputMaximo: event.target.value})
  }

  handleInputBusca = (event) => {
    this.setState({inputBusca: event.target.value})
  }

  salvar = () => {
    localStorage.setItem("minimo", this.state.inputMinimo)
    localStorage.setItem("maximo", this.state.inputMaximo)
    localStorage.setItem("busca", this.state.inputBusca)
  }

  pegarDados=()=>{ 
    const dadosMinimo =  localStorage.getItem('minimo')
    const dadosMaximo =  localStorage.getItem('maximo')
    const dadosBusca =  localStorage.getItem('busca')


   }

  componentDidUpdate() {
    this.salvar()
  }

  



  render(){
    return (
      <Layout>
        <Filtros>
          teste
        </Filtros>
        <Home>
          teste
        </Home>
        <Carrinho>
          teste
        </Carrinho>
      </Layout>
    );
  }
  
}

export default App;
