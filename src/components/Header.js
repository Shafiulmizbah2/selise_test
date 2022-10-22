import styled from "styled-components";

const Header = ({ handler }) => {
  return (
    <Container>
      <Title>Bookmark Manager</Title>
      <Button onClick={handler}>Add Bookmark</Button>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
`;

const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 600;
`;

const Button = styled.div`
  border: 0.1rem solid ${({ theme }) => theme.text};
  padding: 1rem 2rem;
  margin-left: 3rem;
  cursor: pointer;
`;

export default Header;
