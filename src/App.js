import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { BlogDetails } from './BlogDetails';
import { Create } from './Create';
import { Home } from './Home';
import Navbar from './Navbar';
import { NotFound } from './NotFound';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/create">
              <Create></Create>
            </Route>

            <Route path="/blogs/:id">
              <BlogDetails></BlogDetails>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
