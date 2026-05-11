import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import ForRestaurantsPage from './pages/ForRestaurantsPage';
import ScrollToTop from './components/ScrollToTop';
import './index.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/for-restaurants" element={<ForRestaurantsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
