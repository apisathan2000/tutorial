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
  return (
    <section className="booklist">
      <EventExamples />

      {bookList.map(function (book) {
        return <Book book={book} key={book.id} />;
      })}
    </section>
  );
}

function EventExamples() {
  return <h1>Events</h1>;
}

function Book(props) {
  const { img, title, author } = props.book;
  return (
    <article className="book">
      <img src={img} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
