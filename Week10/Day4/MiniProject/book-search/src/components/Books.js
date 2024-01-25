import { useContext } from 'react';
import { BookContext } from './BookSearch';
import './Books.css'

function Books() {
    const {bookList} = useContext(BookContext);

    return (
        <div className='book-list'>
            {bookList.length > 0 ? 
                bookList.map((book, index) => {
                    return (
                        <div className='book-card'>
                            <img src={book.imageLinks ? book.imageLinks.thumbnail : null} alt="" />
                            <h3 key={index}>{book.title ? book.title : null}</h3>
                            <p>Author: {book.authors ? book.authors : null}</p>
                            <p>Published on: {book.publishedDate ? book.publishedDate.slice(0,4) : null}</p>
                        </div>
                    );
                })
          : null}
      </div>
    );
}

export default Books;