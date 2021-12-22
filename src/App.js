import React from 'react';
import Signup from "./Home/Signup/Signup";
import LoginForm from './Home/login/LoginForm';
import {BrowserRouter,Switch,Route} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Emi from './Emi_page/emi';

const App = () => {
  return (
  <>
   <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Emi} />
      <Route path="/Login" exact component={LoginForm}/>
      <Route path="/Register" exact component={Signup}/>
    </Switch>   
   </BrowserRouter>
    <ToastContainer />
  </>
  )
}

export default App;

