import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Header, Footer, Home, Contacts } from './utils/components';

function App() {
  return (
    <div className="App">
      <section className='home-section'>
        <Header />
        <div id="content">
          <a href="/home">Home</a>
          <a href="/contacts">Contacts</a>
        </div>
        <Footer />
      </section>

      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
