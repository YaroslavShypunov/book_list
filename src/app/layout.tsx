import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/header';
import StoreProvider from '@/components/store-provider';
import Footer from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'The list of books',
  description: 'Here is the list of books',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <StoreProvider>
        <body className="flex flex-col h-screen">
          <Header />
          <main className="py-4 sm:py-6 lg:py-12 flex-1">{children}</main>
          <Footer />
        </body>
      </StoreProvider>
    </html>
  );
}
