import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';
import DashboardPage from './pages/dashBoard';
import IndexPage from './pages/indexPage';
import Header from './layout/header/Header';
import Footter from './layout/footter/Footter';
import Manager from './manager/Manager';
import Employee from './employee/Employee';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/" component={() => <IndexPage index={1} />} exact />
          <Route path="/login" render={() => <LoginPage />} exact />
          <Route path="/register" component={RegisterPage} exact />
          <Route path="/dashboard" render={() => <DashboardPage />} exact />
          <Route exact path="/dashboard/manager" component={Manager}></Route>
          <Route exact path="/dashboard/employee" component={Employee}></Route>
        </Switch>
      </BrowserRouter>
      {/* <Footter /> */}
    </>
  );
}

export default App;
