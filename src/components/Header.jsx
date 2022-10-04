import React from 'react';
import './header.less';

export default function Header() {
  return (
    <header className="header">
      <h1 className="logo">Study</h1>
      <button className="btn-menu">
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </button>
    </header>
  );
}
