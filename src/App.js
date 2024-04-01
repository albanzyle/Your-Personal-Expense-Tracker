import React, { useState } from 'react';
import Menu from './components/Menu'; // Import Menu component
import Details from './components/Details'; // Import Details component
import MyProfile from './components/MyProfile';
import styles from './App.module.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className={styles.App}>
    <Menu />
    <Routes>
    <Route path="/" element={<Details />} />
    <Route path="/myprofile" element={<MyProfile />} />
    <Route path="/Overview" element={<Details />} />
   </Routes>
  </div>
  );
}

export default App;
