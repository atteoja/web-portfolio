import React from 'react';
import '../App.css';


export function Header() {
  // color black
  return (
    <header className='header-content'> 
      <a className="hidden-link" id="logo" href="/home">Atte Oja</a>
      <nav>
        <a className='hidden-link' id="about" href="/about">About</a>
        <a className='hidden-link' id="projects" href="projects">Projects</a>
        <a className='hidden-link' id="gallery" href="gallery">Gallery</a>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer>
      <p>&copy; 2021</p>
    </footer>
  );
}

export function Home() {
  return (
    <div>
      <h2>TKTL notes app</h2>
    </div>
  );
}

export function Contacts() {
  return (
    <div>
      <h2>Contacts</h2>
    </div>
  );
}
