import styled from "styled-components";

const CategoryItems = ({ title, url, btnText = "See more", handler }) => {
  return (
    <Container>
      <Title target="_blank" href={url}>
        {title}
      </Title>
      <Button onClick={handler}>{btnText}</Button>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1.5rem 0;
`;

const Title = styled.a`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  text-decoration: none;
  color: inherit;
`;

const Button = styled.div`
  border: 0.1rem solid ${({ theme }) => theme.text};
  padding: 1rem 2rem;
  margin-left: 3rem;
  cursor: pointer;
`;

export default CategoryItems;
