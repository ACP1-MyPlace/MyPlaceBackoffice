import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { Rentals } from './views/Rentals';
import AuthPage from "./views/auth/AuthPage";
import NavBar from './components/Navbar';
import { HomePage } from './views/HomePage';
import {userStorage} from "./userSession/userStorage";
import {PrivateRoute} from "./components/PrivateRoute";
import {PublicWithoutUserRoute} from "./components/PublicWithoutUserRoute";


const NotLoggedInWeb = () => {
  return <>
        <Routes>
            <Route element={<PublicWithoutUserRoute />}>
                <Route path="/auth" element={<AuthPage />} />
            </Route>
        </Routes>
  </>
}

const LoggedInWeb = () => {
  return <>
      { userStorage.isLogged() && <NavBar /> }

      <Routes>
          <Route element={<PrivateRoute />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/rentals" element={<Rentals />} />
          </Route>
      </Routes>
  </>
}

function App() {
    return (
        <div>
            <BrowserRouter>
                <NotLoggedInWeb />
                <LoggedInWeb />
            </BrowserRouter>
        </div>
    );
}

export default App;
