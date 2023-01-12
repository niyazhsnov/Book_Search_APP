import React, { useState } from "react";
import { useSelector } from "react-redux";
import LoginModal from "../Modal/Modal";
import {
  Container,
  Book,
  Image,
  Title,
  Author,
  Button,
  SearchBook,
} from "./MainStyle";

const Content = () => {
  const bookArr = useSelector((state) => state.BookReducer.books);
  const [selectedBook, setSelectedBook] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (book) => {
    setSelectedBook(book);
    setIsOpen(true);
  };
  return (
    <Container>
      <LoginModal
        book={selectedBook}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
      {bookArr && bookArr.length > 0 ? (
        bookArr.map((book) => {
          return (
            book.volumeInfo.imageLinks &&
            book.volumeInfo.authors && (
              <Book key={book.id}>
                <Image src={book.volumeInfo.imageLinks.smallThumbnail} />
                <Title>{book.volumeInfo.title}</Title>
                <Author>{book.volumeInfo.authors[0]}</Author>
                <br />
                <Button href={book.volumeInfo.previewLink} target="_blank">
                  Preview
                </Button>
                <Button onClick={() => openModal(book)}>Details</Button>
              </Book>
            )
          );
        })
      ) : (
        <SearchBook>
          <div>Search Book</div>
        </SearchBook>
      )}
    </Container>
  );
};

export default Content;
