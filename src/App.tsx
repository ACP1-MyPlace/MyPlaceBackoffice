import React from 'react';
import Register from './Register';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { Rentals } from './views/Rentals';
import AuthPage from "./views/auth/AuthPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/register" element={<Register />} />
          <Route path="/rentals" element={<Rentals />} />
            <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
