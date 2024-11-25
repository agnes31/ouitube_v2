import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  const title: string = 'Sabaidee Touny';
  const copyright: string = "All rights reserved";
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer title={title} copyright={copyright}/>
      {/* <Footer title={title}/> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
