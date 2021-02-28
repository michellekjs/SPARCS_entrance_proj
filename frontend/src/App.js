import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";

import MainPage from "./components/mainpage.js"
import SignUp from "./components/signup.js"
import ClassPage from "./components/class.js"
import Match from "./components/match.js"
import BoardPage from "./components/board.js"
import NewBoard from "./components/newboard.js"

function App() {
  return (
    <div className="mainpage">
    <Router>
      <nav className="navbar navbar-expand-sm navbar-custom">
        
      {/*
        <Link to="/" className="navbar-brand">Project Mate</Link>
      */}
        
        <ul className="navbar-nav ml-auto">
          
        </ul>
      </nav>

      <Route exact path = "/" component={MainPage}/>
      <Route exact path ="/signup" component={SignUp}/>
      <Route exact path = "/classpage" component={ClassPage}/>
      <Route exact path = "/match" component={Match}/>
      <Route exact path = "/boardpage" component={BoardPage}/>
      <Route exact path="/newboard" component={NewBoard}/>
    </Router>
    </div>
  );
}

export default App;
