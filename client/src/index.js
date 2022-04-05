import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.css';

// import data
import { books } from './books';

// import component
import Book from './Book';
// import { Book } from './Book';

const BookList = () => {
  return (
    <section className='booklist'>
      {books.map((book, index) => {
        // return <Book book={book} />;
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
};

ReactDOM.render(<BookList />, document.getElementById('root'));
