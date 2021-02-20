import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import { ThemeContext } from './context/ThemeContext';

function App() {
  const [theme, setTheme] = useState('light');

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  }

  return (
    <ThemeContext.Provider value={[theme, toggleTheme]}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route>
            <Home />
          </Route>
        </Switch>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
