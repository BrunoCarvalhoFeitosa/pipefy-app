import React from 'react';
import Header from './components/Header';
import Board from './components/Board';
import Menu from './components/Menu';
import Footer from './components/Footer'; 
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import GlobalStyle from './styles/global';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Header />
      <Board />
      <Menu />
      <Footer />
      <GlobalStyle />
    </DndProvider>
  );
}

export default App;
