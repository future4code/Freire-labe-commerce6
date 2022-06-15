import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

const Layout = styled.div`
display: flex;
height: 100%;
width: 100%;
flex-direction: row;
background-color: purple;
`

const Filtro = styled.div`
display: flex;
background-color: blue;
height: 100vh;
flex: 1;

`

const Home = styled.div`
display: flex;
background-color: yellow;
height: 100vh;
flex: 2;

`

const Carrinho = styled.div`
display:flex;
background-color: black;
height: 100vh;
flex: 1;

`

function App() {
  return (
    <Layout>
      <Filtro>
        teste
      </Filtro>
      <Home>
        teste
      </Home>
      <Carrinho>
        teste
      </Carrinho>
    </Layout>
  );
}

export default App;
