import Home  from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './CSS/Login.css';
import Profile from './components/Profile';
import ProductDetail from './components/ProductDetail';
import NavbarBucks from './components/NavbarBucks';




function App() {
  return (
    <Router>
    <div>
      <NavbarBucks />
    </div>

    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/profile" element={<Profile />} />
      <Route exact path="/product/:id" element={<ProductDetail />} />
      {/* <Route exact path="/" element={<Register />} /> */}
      {/* <Route exact path="/login" element={<Login />} /> */}
    </Routes>
  </Router>
  );
}

export default App;

