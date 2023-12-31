import BookList from '@/components/book/book-list';
import BookPopup from '@/components/book/book-popup';
import HomeHeader from '@/components/home/home-header';
export default function Home() {
  return (
    <>
      <HomeHeader />
      <BookList />
      <BookPopup />
    </>
  );
}
