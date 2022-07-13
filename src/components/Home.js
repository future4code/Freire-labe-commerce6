import React from "react";
import styled from "styled-components";
import bg from "../imagens/bg.png";
import loja from "../imagens/loja.png";
import ordenacao from "../imagens/ordenacao.png";
import add from "../imagens/add.png";



const ContainerHome = styled.div`
  flex: 2;
  border-top: 1px solid #ccc;
  min-height:100vh;
  background-image: url(${bg});
`
const Produto = styled.div`
  margin: 10px;
  text-align:center;
  background-color:white;
  padding-bottom:10px;
  border-radius:10px;
  box-shadow:5px 5px 10px #555;
  border:1px solid #555;

  &:hover{
    box-shadow:5px 5px 10px #333;
  }
`;
const Img = styled.img`
  border-top-left-radius:10px;
  border-top-right-radius:10px;
  width:100%;

`;
const Icone = styled.img`
  padding-right:10px;
`;
const Label = styled.div`
  height:50px;
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding-left:100px;
  padding-right:100px;
  margin-top:20px;
  
`;
const ProdutosArea = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  margin-bottom:20px;
  margin-top:20px;

`;
const Button = styled.button`
  background-color:#009FE6;
  color:white;
  font-weight:bold;
  border:0px solid white;
  border-radius:5px;
  padding:10px 20px;
  display: flex;
  align-items:Center;
  margin:20px;
  &:hover{
    cursor:pointer;
    background-color:#007eb5;
  }
`;
const QtdProdutos = styled.div`
  padding:5px 20px;
  border:1px solid #ccc;
  background-color:#eee;
  display:flex;
  align-items:center;
`;
const Ordenacao = styled.div`
  padding:5px 20px;
  border:1px solid #ccc;
  background-color:#eee;
  display:flex;
  align-items:center;
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
          <QtdProdutos>
            <Icone src={loja} width="50"/>
            {`Quantidade de produtos: ${ListaFiltrada.length}`}
          </QtdProdutos>
          <Ordenacao>
            <Icone src={ordenacao} width="50"/><span>Ordenação: </span>
            <label for="filter" id="filter">
            <select name="filter" id="filter" value={this.state.sort} onChange={this.onChangeSort}>
                <option value={"Crescente"}>Crescente</option>
                <option value={"Decrescente"}>Decrescente</option>
            </select>
            </label>
          </Ordenacao>

        </Label>
        <ProdutosArea>
          {ListaFiltrada.map((produto) => {
            return(
              <Produto>
                <Img src={produto.imagem}/>
                <h3>{produto.nome}</h3>
                <p>R${produto.preco},00</p>
                  <Button onClick={() => this.props.adicionarProdutosCarrinho(produto.id)}>
                    Adicionar ao carrinho
                    <img src={add} width="35" height="35"/>
                  </Button>
              </Produto>
            )       
          })}
        </ProdutosArea>
      </ContainerHome>
    );
  }
}

export default Home;
