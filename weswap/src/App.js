import logo from './logo.svg';
import './App.css';
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
 } from "react-router-dom"; 
import {Login} from './components';

function App() {
  return (
    <div className="App">
      <div className = "gradient-bg">
        <Router>
          <Routes>
            <Route path ='/' element = {
              <div>
                <Login/>
              </div>
            } />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
