import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Single from './Pages/Single/Single'
import Settings from "./Pages/Settings";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import {BrowserRouter as Router, Switch,Route, Link} from 'react-router-dom'
import Quiz from "./Pages/Quiz";
import {Context} from './context/Context'
import { useContext } from 'react';
import Write2 from './Pages/Write/Write2'
import Footer from "./Components/Footer";







function App() {
   
  const {user}= useContext(Context)

  return(
    <div className="app">
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/">
         <Home/>
        </Route>
        <Route path ="/register">
        {user? <Home/> : <Register/> }
        </Route>
        <Route path ="/login">
        {user ? <Home/> : <Login/>}
        </Route>
        <Route path="/write">
          {user? <Write2/> : <Register/>}
        </Route>
        <Route path="/quiz">
          {user? <Quiz/> : <Register/>}
        </Route>
        <Route path="/settings">
          {user ? <Settings/> : <Register/>}
        </Route>
        <Route path="/post/:postId">
          <Single/>
        </Route>
      </Switch>
      
    </Router>
    </div>
  );
}


export default App;
