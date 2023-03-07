import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Listado from './pages/Listado';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path={'/'} element={<Listado/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
