import './App.css';
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Form from './pages/Form';
import NotFound from './pages/NotFound';
import Submitted from './pages/Submitted';
import Profile from './pages/Profile';
import BlogPosts from './pages/BlogPosts';

function App() {
  return (
    <div className="App">
      <Router>
        <h3>React Router Test</h3>
        <nav>
          <Link to="/" style={{ marginRight: '20px' }}>Home</Link>
          <Link to="/about" style={{ marginRight: '20px' }}>About</Link>
          <Link to="/profile" style={{ marginRight: '20px' }}>Profile</Link>
          <Link to="/form" style={{ marginRight: '20px' }}>Form</Link>
          <Link to="/blogs">Blogs</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/form" element={<Form />} />
          <Route path="/submitted" element={<Submitted />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="/blogs" element={<BlogPosts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <footer style={{ color: 'gray', backgroundColor: '#111111', borderRadius: '5px' }}>
          foooter
        </footer>
      </Router>
    </div>
  );
}

export default App;
