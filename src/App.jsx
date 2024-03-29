import React from 'react';
import Home from './components/home/home.jsx';
import Header from './components/Header/header.jsx';
import { CarrinhoProvider } from './context/CarrinhoContext.js';


function App() {
  return (
      <>
        <CarrinhoProvider /* Teria que usar onde tem o router, assim todo mundo 
                            teria acesso ao carrinho e seus items */> 
          <Header></Header>
          <Home></Home>
        </CarrinhoProvider>
      </>
  );
}

export default App;
