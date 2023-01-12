import React from "react";
import {
  Image,
  CloseIcon,
  TextContainer,
  Title,
  Date,
  Author,
  Desc,
  ModalDiv,
  Overlay,
} from "./ModalStyle";

export default function Modal({ book, isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <div>
      <Overlay onClick={onClose} />
      <ModalDiv>
        <Image src={book.volumeInfo.imageLinks.smallThumbnail} />
        <CloseIcon onClick={onClose} />
        <TextContainer>
          <Title>{book.volumeInfo.title}</Title>
          <Date>({book.volumeInfo.publishedDate})</Date>
          {book.volumeInfo.authors.map((a, i) => (
            <Author key={i}>{a}</Author>
          ))}
          <Desc>{book.volumeInfo.description}</Desc>
        </TextContainer>
      </ModalDiv>
    </div>
  );
}
