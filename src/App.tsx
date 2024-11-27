import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [footerClickCount, setFooterClickCount] = useState<number>(0);
  const title: string = 'Sabaidee Touny';
  const copyright: string = "All rights reserved";

  const handleFooterClick = (data:any) => {
    const newFooterClickCount = footerClickCount + 1;
    console.log('Footer clicked :', newFooterClickCount);
    setFooterClickCount(newFooterClickCount);
    console.log({data});
  }

  return (
    <div className="App">
      <Header />
      <Content />
      <Footer 
      title={title} 
      copyright={copyright} 
      handleFooterClick={handleFooterClick}
      />
    </div>
  );
}

export default App;
