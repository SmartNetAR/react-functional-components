import React from 'react';
import './style.css';
import SideNav from './components/SideNav';
import Header from './components/Header';
import Content from './components/Content';

const links = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'Contact', path: '/contact' },
  { name: 'About', path: '/contact' },
];

export default function App() {
  return (
    <div>
      {/*<Header
        titulo="Hola mundo"
        descripcion="Jordan Walke prueba...."
      ></Header>*/}
      <SideNav links={links} />
      <Content />
      <a href="www.google.com" target="_blank">
        texto
      </a>
    </div>
  );
}
