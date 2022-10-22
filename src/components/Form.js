import React from "react";
import styled from "styled-components";

const Form = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};

Form.Title = ({ children, ...rest }) => {
  return <Title {...rest}>{children}</Title>;
};

Form.Error = ({ children, ...rest }) => {
  return <Error {...rest}>{children}</Error>;
};

Form.Input = ({ onChange, ...rest }) => {
  return <FormInput {...rest} onChange={onChange} />;
};

Form.Select = ({ children, ...rest }) => {
  return (
    <SelectContainer {...rest}>
      <Form.Option value="">Select</Form.Option>
      {children}
    </SelectContainer>
  );
};

Form.Option = ({ value, children, ...rest }) => {
  return (
    <OptionContainer value={value} {...rest}>
      {children}
    </OptionContainer>
  );
};

Form.Group = ({ children, ...rest }) => {
  return <Group {...rest}>{children}</Group>;
};

Form.Body = ({ children, ...rest }) => {
  return <BodyContainer {...rest}>{children}</BodyContainer>;
};

Form.Button = ({ children, ...rest }) => {
  return <Button {...rest}>{children}</Button>;
};

Form.Footer = ({ children, ...rest }) => {
  return <FooterContainer {...rest}>{children}</FooterContainer>;
};

//styles
const Container = styled.form`
  width: 50%;
  min-width: 40rem;
  margin: 0 auto;
  padding: 2.5rem;
  background-color: ${({ theme }) => theme.main};
  border: 0.1rem solid ${({ theme }) => theme.text};
`;

const Title = styled.p`
  font-size: 1.7rem;
`;

const Error = styled.p`
  font-size: 1.4rem;
  color: red;
  margin: 0.3rem 0;
`;

const BodyContainer = styled.div`
  min-height: 30rem;
`;
const FormInput = styled.input`
  margin: 1rem 0;
  font-size: 1.5rem;
  font-family: inherit;
  padding: 0.5rem 1rem;
  width: 100%;
`;

const SelectContainer = styled.select`
  margin: 1rem 0;
  font-size: 1.5rem;
  font-family: inherit;
  padding: 0.5rem 1rem;
  width: 100%;
  color: ${({ theme }) => theme.text};
`;

const OptionContainer = styled.option`
  margin: 1rem 0;
  font-size: 1.5rem;
  font-family: inherit;
  padding: 0.5rem 1rem;
  width: 100%;
  color: ${({ theme }) => theme.text};
`;

const Group = styled.div`
  display: flex;
  align-items: center;
`;

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > button {
    margin: 1rem;
    padding: 1rem 5rem;
  }
`;

const Button = styled.button`
  border: 0.1rem solid ${({ theme }) => theme.text};
  padding: 0.67rem 1rem;
  margin-left: 3rem;
  cursor: pointer;
  background: white;
`;

export default Form;
