import './App.css'
import Header from './Components/Header/Header'
import Dashboard from './Components/Dashboard/Dashboard'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ErrorMessage from './Components/ErrorMessage/ErrorMessage'
import CircularIndeterminate from './Components/CircularIndeterminate/CircularIndeterminate'

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/">
            <Header />
            <Dashboard />
            <ErrorMessage />
            <CircularIndeterminate />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
