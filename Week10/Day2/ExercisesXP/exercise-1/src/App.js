import logo from './logo.svg';
import { Routes, Route, NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import ErrorBoundary from './ErrorBoundary';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomeScreen = () => (
  <h1>Home</h1>
);

const ProfileScreen = () => (
  <h1>Profile</h1>
);

const ShopScreen = () => {
  useEffect(() => {
    throw new Error('oops');
  }, [])
  
  return (
    <h1>Shop</h1>
  )
};

function App() {
  return (
    <div className="App">
      <header>
        <div class="container">
          <nav class="navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="profile">Profile</NavLink>
            <NavLink to="/shop">Shop</NavLink>
          </nav>
        </div>
      </header>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/shop" element={<ShopScreen />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;