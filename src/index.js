import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './components/Header';
import Footer from "./components/Footer"
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <div className = 'fullApp'>
      <div className = "top">
          <Header />
        </div>
      <div className = "middle">
        <App />
      </div>
      <div className= "end">
        <Footer/>
      </div>
    </div>
  </React.StrictMode>
);