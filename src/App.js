import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';

function App() {
  return (
    <div className="App">
    <Header/>
    <Banner/>
    </div>
  );
}

export default App;
