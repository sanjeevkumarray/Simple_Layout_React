import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Products from './components/Products';
import Admin from './components/Admin';
import Settings from './components/Settings';
import MenuBar from './components/MenuBar';
import Features from './components/Features';
import Services from './components/Services';



const App = () => {
  return (
      <div>
        <MenuBar />      
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/settings" element={<Settings/>} />
          <Route path="/features" element={<Features/>} />
          <Route path="/services" element={<Services/>} />
          

        </Routes>
      </div>
    
  );
};

export default App;
