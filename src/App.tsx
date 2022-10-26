import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { Rentals } from './views/Rentals';
import AuthPage from "./views/auth/AuthPage";
import NavBar from './components/Navbar';
import { HomePage } from './views/HomePage';


const NotLoggedInWeb = () => {
  return <>
        <Routes>
            <Route path="/" element={<AuthPage />} />
            <Route path="/auth" element={<AuthPage />} />
        </Routes>
  </>
}

const LoggedInWeb = () => {
  return <>
        <NavBar />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/rentals" element={<Rentals />} />
        </Routes>
  </>
}

function App() {
  const loggedIn = true // check if there is a token
  return (
    <div>
      <BrowserRouter>
        {!loggedIn && <NotLoggedInWeb />}
        {loggedIn && <LoggedInWeb />}
      </BrowserRouter>
    </div>
  );
}

export default App;
