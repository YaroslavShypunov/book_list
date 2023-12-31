import { createSlice } from '@reduxjs/toolkit';
import { IHomePageStore } from '../../models/store-models';
import books from '../../data/books';

// initial data for home page
const initialData: IHomePageStore = {
  data: {
    books: books,
    selectedBook: null,
    showBookPopup: false,
  },
};

const cleanPopup = (state: IHomePageStore) => {
  state.data.selectedBook = initialData.data.selectedBook;
  state.data.showBookPopup = false;
};

export const HomePageReducer = createSlice({
  name: 'HomePageReducer',
  initialState: { ...initialData },
  reducers: {
    // show or hide book popup
    TOGGLE_BOOK_POPUP_REDUCER: (state, { payload }) => {
      state.data.showBookPopup = payload;
      state.data.selectedBook = initialData.data.selectedBook;
    },

    // show book popup with selected book
    GET_BOOK_BY_ID_REDUCER: (state, { payload }) => {
      const book = state.data.books.find(book => book.id === payload);
      state.data.selectedBook = book || initialData.data.selectedBook;
      state.data.showBookPopup = true;
    },

    // update existing book
    UPDATE_BOOK_REDUCER: (state, { payload }) => {
      const bookIndex = state.data.books.findIndex(
        book => book.id === payload.id,
      );

      if (bookIndex === -1) {
        return;
      }

      state.data.books[bookIndex] = {
        ...state.data.books[bookIndex],
        ...payload,
      };
      cleanPopup(state);
    },

    // create new book
    CREATE_BOOK_REDUCER: (state, { payload }) => {
      state.data.books.push(payload);
      cleanPopup(state);
    },

    // remove existing book
    REMOVE_BOOK_REDUCER: (state, { payload }) => {
      const bookIndex = state.data.books.findIndex(book => book.id === payload);

      if (bookIndex === -1) {
        return;
      }

      state.data.books.splice(bookIndex, 1);
      cleanPopup(state);
    },
  },
});

export const {
  GET_BOOK_BY_ID_REDUCER,
  UPDATE_BOOK_REDUCER,
  REMOVE_BOOK_REDUCER,
  TOGGLE_BOOK_POPUP_REDUCER,
  CREATE_BOOK_REDUCER,
} = HomePageReducer.actions;
export default HomePageReducer.reducer;
