//import logo from './logo.svg';
import './App.css';
import Login from './components/LoginPage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from 'react-router-dom';
import Dashboard from './components/Dashboard';
function AppRoutes() {
  const routes = useRoutes(
    [
      {path:'/',element:<Login/>},
      {path:'/dashboard',element:<Dashboard/>}
    ]
  )
  return routes;
}

function App() {
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

export default App;
