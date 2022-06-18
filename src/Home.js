import React from "react";
import styled from "styled-components";
import Filtros from "./components/Filtros";


const ContainerHome = styled.div`
  flex: 2;
  border: 2px solid black;
  min-height: calc(100vh - 44px);
  display: flex;
  justify-content:center;
  flex-wrap: wrap;
  margin-right: 20px;
  margin-left:20px;
  margin-bottom:20px;
`;
const Produto = styled.div`
  border: 2px solid black;
  margin: 5px;
  max-height: 350px;
  text-align:center;
`;
const Label = styled.div`
  width:100%;
  height:50px;
  display:flex;
  justify-content:space-between;
  align-items:flex-end;
  padding:20px;
`;



class Home extends React.Component {
  state = {
    sort: "Decrescente"
  }

  pegaListaFiltrada = () => {
    return this.props.produtos
      .filter((produto) => this.props.filtroMinimo ? produto.preco < this.props.filtroMaximo : true)
      .filter((produto) => this.props.filtroMaximo ? produto.preco > this.props.filtroMinimo : true)
      .filter((produto) => this.props.filtroBusca ? produto.nome.includes(this.props.filtroBusca) : true)
      .sort((a, b) => this.state.sort === "Crescente" ? a.preco - b.preco : b.preco - a.preco)
  }

  // componentDidUpdate(){
  //   this.pegaListaFiltrada()
  // }

  onChangeSort = (event) => {
    this.setState({sort: event.target.value})
  }

  render() {
    const ListaFiltrada = this.pegaListaFiltrada()
    console.log(ListaFiltrada)

    return (
      <ContainerHome>
        <Label>
          <div>
            {`Quantidade de produtos: ${ListaFiltrada.length}`}
          </div>
          <div>
            <span>Ordenação: </span>
            <label for="filter" id="filter">
            <select name="filter" id="filter" value={this.state.sort} onChange={this.onChangeSort}>
                <option value={"Crescente"}>Crescente</option>
                <option value={"Decrescente"}>Decrescente</option>
            </select>
            </label>
          </div>

        </Label>
        {ListaFiltrada.map((produto) => {
          return(
            <Produto>
              <img src={produto.imagem}/>
              <h3>{produto.nome}</h3>
              <p>R${produto.preco},00</p>
              <button onClick={() => this.props.adicionarProdutosCarrinho(produto.id)}>
                Adicionar ao carrinho
              </button>
            </Produto>
          )       
        })}

      </ContainerHome>
    );
  }
}

export default Home;
