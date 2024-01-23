import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Shop from './Components/Shop';
import ErrorPage from './Components/ErrorPage';
import { Routes, Route, Link } from "react-router-dom";

/** Routering */

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <Link to="/">Home</Link>{" "}
          <Link to="about">About</Link>{" "}
          <Link to="/shop">Shop</Link>{" "}
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:productid" element={<Shop />} />
        <Route path="/shop/:productid:shopid" element={<Shop />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
