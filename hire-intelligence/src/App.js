import './App.css'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Chart from './Components/Chart/Chart'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/">
            <Header className="header" />
            <Navbar />
            <Chart />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
