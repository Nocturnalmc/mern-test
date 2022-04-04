import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.css';

// setup const
const books = [
  {
    title: "It's Not Easy Being a Bunny",
    author: 'Marilyn Sadler',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81WZ6QvGZ2L._AC_UL604_SR604,400_.jpg',
  },
  {
    title: 'Where the Crawdads Sing',
    author: 'Delia Owens',
    img: 'https://images-na.ssl-images-amazon.com/images/I/61m1Vxw8tiL._AC_UL604_SR604,400_.jpg',
  },
  {
    title:
      'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones',
    author: 'James Clear',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL604_SR604,400_.jpg',
  },
];
const BookList = () => {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book book={book} />;
      })}
    </section>
  );
};

const Book = (props) => {
  const { title, author, img } = props.book;
  return (
    <article className='book'>
      <img src={img} alt='load fail' />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById('root'));
