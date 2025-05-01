import React, { useEffect } from "react";

import ReactDOM from "react-dom/client";

import "./index.css";

import {books}  from "./books.js";

import Book from './Book.js';
import Title from "./Title.js";



function BookList() {

  const bookList = books;


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
    <section>
      <Title title={"Best Sellers"} />

      <section className="booklist">
        {/* <EventExamples /> */}

        {bookList.map(function (book, index) {
          return (
            <Book
              book={book}
              key={book.id}
              displayValue={displayValue}
              getBook={getBook}
              number={index}
            />
          );
        })}
      </section>
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


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
