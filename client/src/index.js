import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.css';

// setup const
const books = [
  {
    id: 1,
    title: "It's Not Easy Being a Bunny",
    author: 'Marilyn Sadler',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81WZ6QvGZ2L._AC_UL604_SR604,400_.jpg',
  },
  {
    id: 2,
    title: 'Where the Crawdads Sing',
    author: 'Delia Owens',
    img: 'https://images-na.ssl-images-amazon.com/images/I/61m1Vxw8tiL._AC_UL604_SR604,400_.jpg',
  },
  {
    id: 3,
    title:
      'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones',
    author: 'James Clear',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL604_SR604,400_.jpg',
  },
];
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

const Book = (props) => {
  // const { title, author, img } = props.book;
  const { title, author, img } = props;

  function clickHandler(e) {
    console.log(e);
    console.log(e.target);
    alert('hello world');
  }

  function needArrowFunction(authorArgument) {
    console.log(authorArgument);
  }

  return (
    <article
      className='book'
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt='load fail' />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type='button' onClick={clickHandler}>
        {/* onClick does not need to be invoked for the function */}
        Click me!
      </button>
      <button type='button' onClick={() => needArrowFunction(author)}>
        Need to have arrow function
      </button>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById('root'));
