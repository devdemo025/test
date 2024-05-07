import { books } from "../constants";
const Book = ({ color }) => {
  const filteredBooks = books.filter((book) => book.id === color);

  return (
    <div
      className={`${
        color === "black"
          ? "top-[50px] -left-[560px] "
          : color === "white"
          ? "top-[550px] left-[1050px]"
          : "-top-[100px] -left-[550px] trasnform scale-x-[-1]"
      } absolute -top-[20px] -left-[550px] w-1/2  trasnform scale-x-[-1]`}
    >
      {filteredBooks.map((book) => (
        <img key={book.id} src={book.image} alt="book" />
      ))}
    </div>
  );
};

export default Book;
