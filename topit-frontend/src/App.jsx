import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './pages/home/HomePage.jsx';
import ContactPage from './pages/contact/ContactPage.jsx';
import { FormThemeProvider } from 'react-form-component';

function App() {

  return (
    <FormThemeProvider theme={{typography:{inputFontSize:15, labelFontSize:15}, sizes:{borderRadius:5}}}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </FormThemeProvider>
  );
}

export default App;

