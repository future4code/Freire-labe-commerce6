import React from "react";
import styled from "styled-components";
import filtro from "../imagens/filtro.png";



const ContainerFiltros = styled.div`
  padding:5px 20px;
  border:1px solid #ccc;
  background-color:#eee;
  margin-right:100px;
`
const Filtro = styled.div`
display:flex;
line-height:35px;

`
const FiltroNome = styled.div`
display:flex;
align-items: center;
justify-content: space-between;

`

 class Filtros extends React.Component {

    render(){
        return(
        <ContainerFiltros class="filtro">
            <FiltroNome>
              <span><h3>Filtros</h3></span>
              <span><img src={filtro} width="40" height="40"/><br/></span>
            </FiltroNome>
            <Filtro>
            Valor mínimo:
            </Filtro>
            <input type="number" onChange={this.props.handleInputMinimo} value={this.props.filtroMinimo}></input><br/><br/>
            <Filtro>
            Valor máximo:
            </Filtro>
            <input type="number" onChange={this.props.handleInputMaximo} value={this.props.filtroMaximo}></input><br/><br/>
            <Filtro>
            Filtro por nome:
            </Filtro>
            <input type="text" onChange={this.props.handleInputFiltro} value={this.props.filtroFiltro}></input><br/><br/>
        </ContainerFiltros>        
   );}



}

export default Filtros

