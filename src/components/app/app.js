import logo from '../../images/logo.svg';
import './app.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Home, Projects, About, Footer } from '../index';

function App() {
  return (
    <BrowserRouter>
      <main className="App">
        <nav className="bg-dark">
          <ul className="nav d-flex justify-content-between">
            <li className="nav-brand">
              <a href="/">
                <img src={logo} href="/" className="nav-link" alt="Logo" /> 
              </a>
            </li>
            <li className="nav-item">
              <ul className="nav">
                <li className="nav-item ">
                  <Link to="/" className="nav-link">
                    HOME
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/projects" className="nav-link">
                    PROJECTS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">
                    ABOUT
                  </Link>
                </li>
                <li className="nav-item">
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
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
