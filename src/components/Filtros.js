import React from "react";
import styled from "styled-components";
import Home from "../Home"


const ContainerFiltros = styled.div`
    flex:1;
    border:2px solid black;
    min-height: calc(100vh - 44px);
    text-align:center;
    margin-right:20px;
    margin-bottom:20px;
`
const Container = styled.div`
    background-color:red;
    height:100px;
    width:100%;
    color:white;
    text-align:center;
`

 class Filtros extends React.Component {

    render(){
        return(
        <ContainerFiltros>
            <h3>Filtros</h3>
            Valor mínimo:<br/>
            <input type="number" onChange={this.props.handleInputMinimo} value={this.props.filtroMinimo}></input><br/><br/>
            Valor máximo:<br/>
            <input type="number" onChange={this.props.handleInputMaximo} value={this.props.filtroMaximo}></input><br/><br/>
            Busca por nome:<br/>
            <input type="text" onChange={this.props.handleInputBusca} value={this.props.filtroBusca}></input><br/><br/>
        </ContainerFiltros>        
   );}



}

export default Filtros

