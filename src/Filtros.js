import React from "react";
import styled from "styled-components";

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

    
    render(){
        return(
        <ContainerFiltros>
            <h3>Filtros</h3>
            Valor mínimo:<br/>
            <input type="number" onChange={this.handleInputMinimo} value={this.state.inputMinimo}></input><br/><br/>
            Valor máximo:<br/>
            <input type="number" onChange={this.handleInputMaximo}></input><br/><br/>
            Busca por nome:<br/>
            <input type="text" onChange={this.handleInputBusca}></input><br/><br/>
            <button onClick={this.salvar}>salvar</button>

        </ContainerFiltros>
   );}



}

export default Filtros

