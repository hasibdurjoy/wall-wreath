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
import Book from './Pages/Home/Book/Book';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './context/AuthProvider';
import Register from './Pages/Login/Register/Register';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/home"><Home /></Route>
            <Route path="/login"><Navigation /><Login /></Route>
            <Route path="/register"><Navigation /><Register /></Route>
            <Route exact path="/products"><Navigation /> <AllProducts /></Route>
            <PrivateRoute path="/products/:productId"><Navigation /> <Book /></PrivateRoute>
            <PrivateRoute path="/dashboard"><Dashboard /></PrivateRoute>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
