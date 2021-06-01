import './App.css';
import Login from './Login/Login';
import Dashboard from './Dashboard/Dashboard';
import {
  Route,
  BrowserRouter
} from "react-router-dom";

function App() {
  return ( 
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
        <Route path="/login" exact component={Login} />
        <Route path="/dashboard" exact component={Dashboard} />
      </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
