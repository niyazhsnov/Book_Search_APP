import { useDispatch } from "react-redux";
import { getBook } from "../../redux/slice/BookSlice";
import { useState } from "react";
import {
  Container,
  Connective,
  Head,
  SearchInputCont,
  SearchInput,
  SearchIcon,
} from "./HeaderStyle";

const Header = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    dispatch(getBook({ name: search }));
  };

  return (
    <Container>
      <Connective>
        <Head>Book Searching App</Head>
        <SearchInputCont>
          <form onSubmit={handleSubmit}>
            <SearchInput
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Find book"
            />
            <SearchIcon onClick={handleSubmit} />
          </form>
        </SearchInputCont>
      </Connective>
    </Container>
  );
};

export default Header;
