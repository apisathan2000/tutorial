import React, { useEffect } from "react";

import ReactDOM from "react-dom/client";

import "./index.css";

const bookList = [
  {
    title: `It's Not Easy Being a Bunny: An Early Reader Book for Kids`,
    author: ` Marilyn Sadler`,
    img: `https://m.media-amazon.com/images/I/71ihGxMQEBL._SY342_.jpg`,
    id: 1,
  },
  {
    title: `The Let them theory`,
    author: `Mel Robbins`,
    img: `https://m.media-amazon.com/images/I/51UmNg33hCL._SY445_SX342_.jpg`,
    id: 2,
  },
];

function BookList() {
  const someValue = "shakeAndBake";
  const displayValue = function () {
    console.log(someValue);
  };

  const getBook = function (id) {
    const book = bookList.find(function (book) {
      return book.id === id;
    });

    console.log(id);
  };

  return (
    <section className="booklist">
      {/* <EventExamples /> */}

      {bookList.map(function (book) {
        return (
          <Book
            book={book}
            key={book.id}
            displayValue={displayValue}
            getBook={getBook}
          />
        );
      })}
    </section>
  );
}

// function EventExamples() {
//   const handleButtonClick = function () {
//     alert("Handle Button Click !");
//   };

//   const handleFormInput = function (e) {
//     console.log(e);
//     console.log(e.target.name);
//     console.log(e.target.value);
//     console.log("Handle Form Input !");
//   };

//   const handleFormSubmission = function (e) {
//     e.preventDefault();
//     console.log("From Submitted !");
//     // alert("Handle form submission !");
//   };

//   return (
//     <section>
//       <form action="">
//         {/* <form action="" onSubmit={handleFormSubmission}> */}
//         <h2>Typical Form</h2>
//         <input
//           type="text"
//           name="example"
//           id=""
//           style={{ margin: "1rem 0" }}
//           onChange={handleFormInput}
//         />
//         <div>
//           <button type="submit" onClick={handleFormSubmission}>
//             Submit Form
//           </button>
//         </div>
//       </form>

//       <button onClick={handleButtonClick}>Click Me</button>
//     </section>
//   );
// }

function Book(props) {
  const { id, img, title, author } = props.book;

  const displayTitle = props.displayValue;
  const getBooks = props.getBook;

  //or

  //  const {img, title, author, displayValue} = props

  // const displayTitle = function() {
  //   console.log(title);
  // }

  const getSingleBook = function() { 
    getBooks(id);
  }

  return (
    <article className="book">
      <img src={img} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {/* <button onClick={displayTitle}>Display Title</button> */}
      <button onClick={getSingleBook}>Display Titles</button>
    </article>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
