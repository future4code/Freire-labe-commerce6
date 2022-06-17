import React from "react";
import styled from "styled-components";

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
  };

  render() {
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
        
        <Produto>
          <img src="https://picsum.photos/seed/a/200" />
          <p>Produto 1</p>
          <p>R$200,00</p>
          <p>
            <button>Adicionar</button>
          </p>
        </Produto>
        <Produto>
          <img src="https://picsum.photos/seed/b/200" />
          <p>Produto 1</p>
          <p>R$200,00</p>
          <p>
            <button>Adicionar</button>
          </p>
        </Produto>
        <Produto>
          <img src="https://picsum.photos/seed/c/200" />
          <p>Produto 1</p>
          <p>R$200,00</p>
          <p>
            <button>Adicionar</button>
          </p>
        </Produto>
        <Produto>
          <img src="https://picsum.photos/seed/d/200" />
          <p>Produto 1</p>
          <p>R$200,00</p>
          <p>
            <button>Adicionar</button>
          </p>
        </Produto>
        <Produto>
          <img src="https://picsum.photos/seed/e/200" />
          <p>Produto 1</p>
          <p>R$200,00</p>
          <p>
            <button>Adicionar</button>
          </p>
        </Produto>
        <Produto>
          <img src="https://picsum.photos/seed/f/200" />
          <p>Produto 1</p>
          <p>R$200,00</p>
          <p>
            <button>Adicionar</button>
          </p>
        </Produto>
      </ContainerHome>
    );
  }
}

export default Home;
