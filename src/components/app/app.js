import logo from '../../images/logo.svg';
import './app.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Home, Projects, About } from '../index';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav className="bg-dark">
          <ul className="nav d-flex justify-content-between">
            <li className="nav-brand">
              <img src={logo} className="nav-link" alt="Logo" /> 
            </li>
            <li class="nav-item">
              <ul className="nav">
                <li class="nav-item ">
                  <Link to="/" className="nav-link">
                    HOME
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/projects" className="nav-link">
                    PROJECTS
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/about" className="nav-link">
                    ABOUT
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/contact" className="nav-link">
                    CONTACT
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/about" component={About} />
      </div>
    </BrowserRouter>
  );
}

export default App;
