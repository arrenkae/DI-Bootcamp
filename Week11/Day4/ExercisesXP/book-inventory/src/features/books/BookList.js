import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { filterBooks } from "./booksSlice";

const BookLists = (props) => {
  const { books, genreFilter } = useSelector(state => state.books);
  const dispatch = useDispatch();

  const renderBooks = books
  .filter(book => {
    if (genreFilter) return book.genre == genreFilter;
    return book;
  })
  .map(book => {
    return (
      <div key={book.id}>
        <h2>{book.title}</h2>
        <h4>by {book.author}</h4>
      </div>
    );
  });

  return (
    <div>
        <h1>My Books</h1>
        <h2>{genreFilter}</h2>
        <select onChange={(e)=>dispatch(filterBooks(e.target.value))}>
            <option value=''>Select genre</option>
            <option value='Fantasy'>Fantasy</option>
            <option value='Horror'>Horror</option>
            <option value='Science Fiction'>Science Fiction</option>
        </select>
        {renderBooks}
    </div>
  );
}

export default BookLists;