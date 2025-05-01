function Book(props) {
  const { id, img, title, author } = props.book;
  const number  = props.number + 1;
  
  console.log(number);

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
      <h3 className= "number" ># {number}</h3>
      {/* <button onClick={displayTitle}>Display Title</button> */}
      {/* <button onClick={getSingleBook}>Display Titles</button> */}
    </article>
  );
}


export default Book;