import React, { useState } from 'react';
import Menu from './components/Menu'; // Import Menu component
import Details from './components/Details'; // Import Details component
import styles from './App.module.css'; // Import CSS module
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className={styles.App}>
      <Menu />
      <Details />
    </div>
    </Router>
  );
}

export default App;
