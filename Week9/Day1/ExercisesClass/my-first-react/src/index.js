import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import SubHello from './SubHello';

// const products = [
//   {id:1, name:'iPhone', price:700 },
//   {id:2, name:'iPad', price:600 },
//   {id:3, name:'iPhone2', price:800 },
// ]

// element needs to be wrapped in 1 parent
// const element = (<div>
//   {
//     products.map(item => {
//       return (
//         <div>
//           <h1>{item.name}</h1>
//           <h2>{item.price}</h2>
//         </div>
//       )
//     })
//   }
// </div>);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
