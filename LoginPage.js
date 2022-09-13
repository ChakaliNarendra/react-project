import './LoginPage.css';
import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useRoutes,useHistory,Link
  } from 'react-router-dom';
import Dashboard from './Dashboard.js';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
// } from "react-router-dom";
// import { render } from '@testing-library/react';

/* <Switch>
<Route path="/dashboard">
  <Dashboard />
</Route>

</Switch> */
function Button({children}) {
    return <button>{children}</button>;
  }
function AppRoutes() {
    const routes = useRoutes(
      [
        {path:'/',element:<Login/>},
        {path:'/dashboard',element:<Dashboard/>}
      ]
    )
    return routes;
  }
function DashboardNew() {
    return (
        <><>
    
          <Router>
            <AppRoutes/>
          </Router>
    
        </>
        {/* <div className="App">
            <header className="App-header">
              <Login></Login>
            </header>
          </div> */}
          
          </>
      );

}
// const handleButtonClick = () => {
//     history.push('/dashboard')
//   }
function Login() {
    return (
        <div className="login-page">
            <div className="form">
                <form className="register-form">
                    <input type="text" placeholder="name" />
                    <input type="password" placeholder="password" />
                    <input type="text" placeholder="email address" />
                    <button>create</button>
                    <p className="message">Already registered? <a href="#">Sign In</a></p>
                </form>
                <form className="login-form">
                    <input type="text" placeholder="username" />
                    <input type="password" placeholder="password" />
                   
                    
                    <Link to="/dashboard">
          <Button>Login</Button>
        </Link>
                   
                    {/* <button onClick={handleButtonClick} >login</button> */}
                    <p className="message">Not registered? <a href="#">Create an account</a></p>
                </form>
            </div>
        </div>

    );
}



export default Login;