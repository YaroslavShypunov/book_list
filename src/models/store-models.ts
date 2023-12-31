import { IBook } from './book-models';

export interface IHomePageStore {
  data: {
    books: IBook[];
    selectedBook: IBook | null;
    showBookPopup: boolean;
  };
}
