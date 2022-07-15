import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const fetchHandler = () => {
    axios.get('https://dummyjson.com/products')// i left here
  }

  const DUMMY_DATA = {
    products: [
      {
        id: 1,
        title: "iPhone 9",
      },
      {
        id: 2,
        title: "iPhone 8",
      },
      {
        id: 3,
        title: "iPhone 7",
      }
    ]
  }

  return (
    <form className="App" onSubmit={fetchHandler}>
      <input type="text" placeholder='Search...' />
      <button type='submit'>Fetch</button>

      {DUMMY_DATA.products.map((prod) => {
        return <p>{prod.title}</p>
      })}

    </form>
  );
}

export default App;
