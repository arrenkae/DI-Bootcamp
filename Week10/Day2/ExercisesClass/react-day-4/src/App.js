import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Shop from './Components/Shop';
import ErrorPage from './Components/ErrorPage';
// import { Routes, Route, Link } from "react-router-dom";
import { Link, RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";

/** Routering */
const Root = () => {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link>{" "}
          <Link to="about">About</Link>{" "}
          <Link to="/shop">Shop</Link>{" "}
        </nav>
      </header>
      <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
      path: "/",
      element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
      path: "/shop",
      element: <Shop />
      },
      {
        path: "/shop/:productid",
        element: <Shop />
      }
    ]
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
