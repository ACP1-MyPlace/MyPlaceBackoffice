import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { Rentals } from './views/Rentals';
import AuthPage from "./views/auth/AuthPage";
import { HomePage } from './views/HomePage';
import {PrivateRoute} from "./components/PrivateRoute";
import {PublicWithoutUserRoute} from "./components/PublicWithoutUserRoute";
import LayoutHome from "./layouts/LayoutHome";


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
      <Routes>
          <Route element={<PrivateRoute />}>
              <Route element={<LayoutHome />}>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/rentals" element={<Rentals />} />
              </Route>
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
