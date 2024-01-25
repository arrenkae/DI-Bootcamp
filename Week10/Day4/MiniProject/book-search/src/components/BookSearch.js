import {useState, useEffect, useRef, createContext} from 'react';
import axios from 'axios';
import Books from './Books';
import './BookSearch.css'

const API_KEY = process.env.REACT_APP_API_KEY;

export const BookContext = createContext();

function BookSearch() {
    const [books, setBooks] = useState([]);
    const [bookList, setBookList] = useState([]);
    const inputRef = useRef();
    const sortRef = useRef();

    useEffect(() => {
      setBookList([...books]);
      sortBooks();
    }, [books])

    const getBooks = async() => {
      try {
        const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${inputRef.current.value}&key=${API_KEY}`);
        setBooks(res.data.items.map(item => item.volumeInfo));
      } catch (err) {
        console.log(err);
      }
    }

    const sortBooks = () => {
      const sorted = [...books];
      sorted.sort((book1, book2) => {
        if (book1.publishedDate && book2.publishedDate) {
          if (sortRef.current.value === 'desc') {
            return Number(book2.publishedDate.slice(0,4)) - Number(book1.publishedDate.slice(0,4));
          } else {
            return Number(book1.publishedDate.slice(0,4)) - Number(book2.publishedDate.slice(0,4));
          }
        }
    })
      setBookList(sorted);
    }

    return (
      <>
        <div className='search'>
          <input type="text" ref={inputRef} />
          <button onClick={getBooks}>Search</button>
          <select name="sort" ref={sortRef} onChange={sortBooks}>
            <option value="desc">Newest</option>
            <option value="asc">Oldest</option>
          </select>
        </div>
        <BookContext.Provider value={{bookList}}>
          <Books />
        </BookContext.Provider>
      </>
    );
}

export default BookSearch;