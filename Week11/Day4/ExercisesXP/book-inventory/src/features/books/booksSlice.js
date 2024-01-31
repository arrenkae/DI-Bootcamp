import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    books: [
        {
            id: 1,
            title: "The Hitchhiker's Guide to the Galaxy",
            author: "Douglas Adams",
            genre: "Science Fiction"
        },
        {
            id: 2,
            title: "The Lord of the Rings",
            author: "J.R.R. Tolkien",
            genre: "Fantasy"
        },
        {
            id: 3,
            title: "A Game of Thrones",
            author: "George R. R. Martin",
            genre: "Fantasy"
        },
        {
            id: 4,
            title: "It",
            author: "Stephen King",
            genre: "Horror"
        },
        {
            id: 5,
            title: "Dune",
            author: "Frank Herbert",
            genre: "Science Fiction"
        },
        {
            id: 6,
            title: "Dracula",
            author: "Bram Stoker",
            genre: "Horror"
        },
        {
            id: 7,
            title: "Do Androids Dream of Electric Sheep?",
            author: "Philip K. Dick",
            genre: "Science Fiction"
        },
        {
            id: 8,
            title: "A Wizard of Earthsea",
            author: "Ursula K. Le Guin",
            genre: "Fantasy"
        },
        {
            id: 9,
            title: "The Call of Cthulhu",
            author: "H. P. Lovecraft",
            genre: "Horror"
        },
    ],
    genreFilter: null
};


const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    filterBooks: (state, action) => {
      state.genreFilter = action.payload;
    }
  }
});

export const { filterBooks } = booksSlice.actions;
export default booksSlice.reducer;
