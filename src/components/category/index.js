import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { addDetails } from "../../store/bookmarkSlice";
import CategoryItems from "./CategoryItems";

const Category = ({ title }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { bookmarks } = useSelector((state) => state.bookmark);

  const filterCategory = bookmarks.filter((item) => item.category === title);

  const handleDetails = (item) => {
    dispatch(addDetails(item));
  };

  return (
    <Container>
      <Title>{title}</Title>
      <Body>
        {filterCategory.map((item) => (
          <CategoryItems
            key={item.id}
            url={item.url}
            title={item.title}
            btnText="Details"
            handler={() => handleDetails(item)}
          />
        ))}
      </Body>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin: 2rem 0;
`;

const Title = styled.p`
  font-size: 1.8rem;
  margin-bottom: 1rem;
`;

const Body = styled.div`
  width: 80%;
  min-width: 40rem;
  height: 30rem;
  overflow-y: auto;
  border: 0.1rem solid ${({ theme }) => theme.text};
  padding: 1rem;
`;

export default Category;
