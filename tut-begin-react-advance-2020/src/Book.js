import React from 'react';

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

export default Book;
// export { Book };
