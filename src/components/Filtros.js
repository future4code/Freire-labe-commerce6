import React from "react";
import styled from "styled-components";
import Home from "../Home"


const ContainerFiltros = styled.div`
    flex:1;
    border:2px solid black;
    min-height:calc(100vh - 44px);
    text-align:center;
    margin-right:20px;
`


 class Filtros extends React.Component {

  state = {
    inputMinimo: '',
    inputMaximo:'',
    inputBusca:''
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
        return(
        <ContainerFiltros>
          {/* {this.props.preco}
          {this.props.nome}
          {console.log(this.props.preco)} */}

            <h3>Filtros</h3>
            Valor mínimo:<br/>
            <input type="number" onChange={this.handleInputMinimo} value={this.state.inputMinimo}></input><br/><br/>
            Valor máximo:<br/>
            <input type="number" onChange={this.handleInputMaximo} value={this.state.inputMaximo}></input><br/><br/>
            Busca por nome:<br/>
            <input type="text" onChange={this.handleInputBusca} value={this.state.inputBusca}></input><br/><br/>
        </ContainerFiltros>
   );}



}

export default Filtros

