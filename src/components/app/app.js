import logo from '../../images/logo.svg';
import './app.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Home, Projects, About } from '../index';
 
function App() {
  return (
    <BrowserRouter> 
      <div className="App">

        <Route exact path="/" component ={Home}/>
        <Route path="/projects" component={Projects} />
        <Route path="/about" component={About} />

        <nav className="App-nav">
          <img src={logo} className="logo" alt="Logo" />
          <div className="navigation-sub">
            <Link to="/" className="item">Home</Link>
            <Link to="/projects" className="item">Projects</Link>
            <Link to="/about" className="item">About</Link>
          </div>
        </nav>
      </div>
    </BrowserRouter>
  );
}

export default App;
