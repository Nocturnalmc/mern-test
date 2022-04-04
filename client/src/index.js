import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.css';

const BookList = () => {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  );
}

const Image = () => {
  return (
    <img src="https://images-na.ssl-images-amazon.com/images/I/81WZ6QvGZ2L._AC_UL604_SR604,400_.jpg" alt="image load fail" />
  );
}

const Title = () => {
  return (
    <h1>It's Not Easy Being a Bunny</h1>
  );
}

const Author = () => {
  return (
    <h4 style={{ color: '#617d98' }}>Marilyn Sadler</h4>
  );
}

ReactDOM.render(<BookList />, document.getElementById('root'));