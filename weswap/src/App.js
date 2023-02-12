import './App.css';
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
 } from "react-router-dom"; 
import {Home,Profile,User,Events,Match} from './components';


function App() {
  return (
    <div className="App">
      <div className = "gradient-bg">
        <Router>
          <Routes>
            <Route path ='/' element = {<Home/>} />
            <Route path="/profiles" element={<Profile />} />
            <Route path="/events" element={<Events />} />
            <Route path="/user" element={<User />} />
            <Route path="/match" element={<Match />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
