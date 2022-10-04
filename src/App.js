import React from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import './style.less';

export default function App() {
  return (
    <div className="wrap">
      <Header />
      <div className="container"></div>
      <Footer />
    </div>
  );
}
