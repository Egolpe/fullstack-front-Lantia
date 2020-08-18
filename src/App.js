import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRouter";
import { AuthProvider } from "./context/auth-context";

import { HomePage } from "./pages/HomePage";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Dashboard } from "./pages/Dashboard";
import { Recuperar } from "./pages/Recuperar";
import UserPreferences from "./pages/UserPreferences";


function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route  path="/login">
            <Login />
          </Route> 
          <Route  path="/register">
            <Register />
          </Route>
          <PrivateRoute  path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <Route  path="/recuperar">
            <Recuperar />
          </Route>
          <PrivateRoute  path="/preferences">
            <UserPreferences />
          </PrivateRoute>
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;