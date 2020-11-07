import React from 'react';
import Header from './components/Header';
import Board from './components/Board';
import Menu from './components/Menu';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import GlobalStyle from './styles/global';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Header />
      <Board />
      <Menu />
      <GlobalStyle />
    </DndProvider>
  );
}

export default App;
