import React from 'react';
import Signup from "./Home/Signup/Signup";
import LoginForm from './Home/login/LoginForm';
import {BrowserRouter,Switch,Route, Redirect} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Emi from './Emi_page/emi';

const App = () => {
  return (
  <>
   <BrowserRouter>
    <Switch>
      <Route path="/" exact component={LoginForm} />
      <Route path="/Login" exact component={LoginForm}/>
      <Route path="/Register" exact component={Signup}/>
      <Route path="/emicalc" render ={(props)=>{
        let hasToken=JSON.parse(sessionStorage.getItem('auth'))
        return hasToken  !==null? <Emi {...props}/> : <Redirect to="/login" /> }}/>
    </Switch>   
   </BrowserRouter>
    <ToastContainer />
  </>
  )
}

export default App;

