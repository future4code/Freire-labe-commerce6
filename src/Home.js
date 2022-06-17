import React from "react";
import styled from "styled-components";
import Filtros from "./components/Filtros";


const ContainerHome = styled.div`
  flex: 2;
  border: 2px solid black;
  min-height: calc(100vh - 44px);
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  margin-right: 20px;
`;
const Produto = styled.div`
  border: 2px solid black;
  margin: 10px;
  max-height: 350px;
`;
const Label = styled.div`
  width:100%;
  display:flex;
  justify-content:flex-end;
  padding:20px;
`;

class Home extends React.Component {
  state = {
    inputUsuario: "",
    inputTexto: "",
    mensagens: [],
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

  render() {
    let produtos = this.state.objeto.map((obj) => {
      return(
        <Produto>
          <img src={obj.imagem}/>
          <h3>{obj.nome}</h3>
          <p>R${obj.preco},00</p>
        </Produto>
      )
    })
    return (
      <ContainerHome>
        <Label>
            Ordenação:
            <label for="filter" id="filter">
            <select name="filter" id="filter">
                <option value="Crescente">Crescente</option>
                <option value="Decrescente">Decrescente</option>
            </select>
            </label>
        </Label>
            {produtos}
            {/* <Filtros id="mostrar"
              preco={valores}
              nome={nomes}
            /> */}
      </ContainerHome>
    );
  }
}

export default Home;
