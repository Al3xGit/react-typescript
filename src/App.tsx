import React from 'react';
import Container from './components/Container';
import Header from './components/Header'
import CSS from 'csstype'

function App() {
  const appStyle: CSS.Properties = {
    backgroundColor: '#99C',
    height: '100vh',
  }

  return (
    <div style={appStyle}>
      <Header />
      <Container />
    </div>

  );
}

export default App;
