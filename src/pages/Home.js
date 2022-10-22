import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Category from "../components/category";
import Header from "../components/Header";
import Modal from "../components/Modal";

const Home = () => {
  const [IsModalOpen, setIsModalOpen] = useState(false);
  const { categories, bookmarkDetails } = useSelector(
    (state) => state.bookmark
  );
  const toggleModal = () => setIsModalOpen(!IsModalOpen);

  return (
    <>
      <Container>
        <Header handler={toggleModal} />
        {IsModalOpen && (
          <Modal onCancel={toggleModal} setIsModalOpen={setIsModalOpen} />
        )}
        <Main>
          <Wrapper>
            <Left>
              {categories.map((item) => (
                <Category title={item.title} key={item.id} />
              ))}
            </Left>
            <Right>
              <Details>
                <div>
                  <p>Title : {bookmarkDetails?.title}</p>
                  <p>URL : {bookmarkDetails?.url} </p>
                  <p>Category : {bookmarkDetails?.category} </p>
                </div>
              </Details>
            </Right>
          </Wrapper>
        </Main>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 1rem;
`;

const Main = styled.main`
  width: 100%;
  height: 100%;
  max-width: 120rem;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const Left = styled.div`
  flex: 2;
  min-width: 30rem;
`;

const Right = styled.div`
  flex: 1;
  min-width: 30rem;
`;

const Details = styled.div`
  border: 0.1rem solid ${({ theme }) => theme.text};
  padding: 1rem 2rem;
  margin: 2rem;
  width: 30rem;
  height: 20rem;

  p {
    margin: 1rem 0;
  }
`;

export default Home;
