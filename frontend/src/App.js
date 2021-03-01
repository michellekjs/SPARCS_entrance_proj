import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";

import MainPage from "./components/mainpage.js"
import SignUp from "./components/signup.js"
import ClassPage from "./components/class.js"
import Match from "./components/match.js"
import BoardPage from "./components/board.js"
import NewBoard from "./components/newboard.js"
import Admin from "./components/admin.js"
import Mate from "./components/mate.js"
import NewRoom from "./components/newroom.js"

function clear(){
  localStorage.clear();
}


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
      <Route exact path = "/admin" component = {Admin}/>
      <Route exact path ="/mate" component={Mate}/>
      <Route exact path ="/newroom" component={NewRoom}/>

      <div>
      <Link to="/"><button className="Logout" onClick={clear}>Logout</button></Link>
    </div>
    </Router>

   

    </div>
  
  );
}

export default App;
