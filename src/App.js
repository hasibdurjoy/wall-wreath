import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import AllProducts from './Pages/Home/AllProducts/AllProducts';
import Navigation from './Pages/Shared/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/home"><Home /></Route>
          <Route path="/products"><Navigation /> <AllProducts /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
