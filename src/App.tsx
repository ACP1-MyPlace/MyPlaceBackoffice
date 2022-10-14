import React from 'react';
import Register from './Register';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { Rentals } from './views/Rentals';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/register" element={<Register />} />
          <Route path="/rentals" element={<Rentals />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
