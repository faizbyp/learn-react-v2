import './App.css'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Form from './pages/Form'
import NotFound from './pages/NotFound'
import Submitted from './pages/Submitted'
import Profile from './pages/Profile'

function App() {
  return (
    <div className="App">
      <Router>
        <h3>React Router Test</h3>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/profile'>Profile</Link>
          <Link to='/form'>Form</Link>
        </nav>
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/form' element={<Form />} />
          <Route path='/submitted' element={<Submitted />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/profile/:username' element={<Profile />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

        <footer>
          foooter
        </footer>
      </Router>
    </div>
  )
}

export default App
