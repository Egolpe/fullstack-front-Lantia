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
          <Route exact path="/" component={HomePage}>
            <HomePage />
          </Route>
          <Route  path="/login" component={Login}>
            <Login />
          </Route> 
          <Route  path="/register" component={Register}>
            <Register />
          </Route>
          <Route  path="/dashboard" component={Dashboard}>
            <Dashboard />
          </Route>
          <Route  path="/recuperar" component={Recuperar}>
            <Recuperar />
          </Route>
          <Route  path="/preferences" component={UserPreferences}>
            <UserPreferences />
          </Route>
          
          {/* <Route path="/calendar">
            <Calendar />
          </Route>
          <PrivateRoute path="/home">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/calendarPrivate">
            <CalendarPrivate />
          </PrivateRoute>
          <PrivateRoute path="/events_user">
            <EventsUser />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/events">
            <GetEvent />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <PrivateRoute path="/profile">
            <Profile />
          </PrivateRoute>
          <PrivateRoute path="/update">
            <UserUpdate />
          </PrivateRoute>
          <PrivateRoute path="/delete">
            <DeleteAccount />
          </PrivateRoute>
          <PrivateRoute path="/add-event">
            <AddEvent />
          </PrivateRoute> */}
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;