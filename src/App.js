import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);
  const [inputVal, setInputVal] = useState('');

  const fetchHandler = e => {
    e.preventDefault();

    axios.get('https://dummyjson.com/products').then((req) => {
      setProducts(req.data.products);
    })
  }

  const searchHandler = e => {
    setInputVal(e.target.value);
  }

  return (
    <form className="App" onSubmit={fetchHandler}>
      <p><a href="https://github.com/lut3k-IT/searchbar">My github code</a></p>

      <input type="text" placeholder='Search...' value={inputVal} onChange={searchHandler} />
      <button type='submit'>Fetch</button>

      {products.filter((prod) => {
        if (inputVal === '') {
          return true;
        } else if (prod.title.toLowerCase().includes(inputVal.toLowerCase())) {
          return true;
        }
        return false;
      }).map((prod) => {
        return <p key={prod.id}>{prod.title}</p>
      })}

    </form>
  );
}

export default App;
