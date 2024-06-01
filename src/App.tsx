import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeScreen from './components/HomeScreen';
import TipScreen from './components/TipScreen';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/tip" element={<TipScreen />} />
      </Routes>
    </div>
  );
};

export default App;
