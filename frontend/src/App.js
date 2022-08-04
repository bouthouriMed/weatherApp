import React from 'react';
import CityList from './components/CityList'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import './index.css'

function App() {
  return (
    <div className="container">
      <CityList/>
      <ToastContainer/>
    </div>
  );
}

export default App;
