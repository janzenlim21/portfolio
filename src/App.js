import React from 'react';
import './App.css';
import Header from './components/header/header';
import Introduction from './components/introduction/introduction';
import About from './components/about/about'
import Footer from './components/footer/footer'
function App() {
  return (
    <div className="App">
      <Header />
      <Introduction />
      <About />
      <Footer />
    </div>
  );
}

export default App;
