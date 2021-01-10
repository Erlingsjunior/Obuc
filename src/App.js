import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import HeadPage from './components/Headpage';
import NavPage from './components/NavPage';
import MainPage from './components/MainPage';

import './App.css';

const App = () => {
  return (
    <Jumbotron className="divFather">
      <header className="imageTop" >
        <HeadPage />;
      </header>
      <section className="section">
        <div className="bodyNav">
          <NavPage />
        </div>
        <main className="bodyMain">
          <MainPage />
        </main>
      </section>
    </Jumbotron>
  )
}

export default App;
