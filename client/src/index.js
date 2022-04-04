import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.css';

// setup const
const firstBook = {
  title: "It's Not Easy Being a Bunny",
  author: 'Marilyn Sadler',
  img: 'https://images-na.ssl-images-amazon.com/images/I/81WZ6QvGZ2L._AC_UL604_SR604,400_.jpg',
};

const secondBook = {
  title: 'Where the Crawdads Sing',
  author: 'Delia Owens',
  img: 'https://images-na.ssl-images-amazon.com/images/I/61m1Vxw8tiL._AC_UL604_SR604,400_.jpg',
};

const BookList = () => {
  return (
    <section className='booklist'>
      <Book
        title={firstBook.title}
        author={firstBook.author}
        img={firstBook.img}
      />
      <Book
        title={secondBook.title}
        author={secondBook.author}
        img={secondBook.img}
      />
    </section>
  );
};

// props destructure right away
const Book = ({ title, author, img }) => {
  // const { title, author, img } = props;
  return (
    <article className='book'>
      <img src={img} alt='load fail' />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById('root'));
