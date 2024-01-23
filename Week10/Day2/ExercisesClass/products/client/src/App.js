import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";
import Products from './components/Products';
import Product from './components/Product';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/:id' element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
