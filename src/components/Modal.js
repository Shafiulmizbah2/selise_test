import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addBookmark } from "../store/bookmarkSlice";
import Form from "./Form";
import { v4 as uuidv4 } from "uuid";

const Modal = ({ onCancel, setIsModalOpen }) => {
  const [state, setState] = useState({});
  const [iscategory, setIscategory] = useState(false);
  const [error, setError] = useState({});
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.bookmark);

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setState({ ...state, [name]: value });
  };

  const SubmitForm = (e) => {
    e.preventDefault();
    setError({});

    if (!state.title) {
      setError({ ...error, title: "Title is required!" });
      return;
    }

    if (!state.url) {
      setError({ ...error, url: "Url is required!" });
      return;
    }

    if (!state.category) {
      setError({ ...error, category: "Category is required!" });
      return;
    }

    const data = {
      id: uuidv4(),
      ...state,
    };
    dispatch(addBookmark(data));
    setState({});
    setIsModalOpen(false);
  };

  const toggoleAddCategory = () => setIscategory(!iscategory);

  //   console.log(iscategory);

  return (
    <Container>
      <Form onSubmit={SubmitForm}>
        <Form.Title>Add bookmark</Form.Title>

        <Form.Body>
          <Form.Input
            name="title"
            required={true}
            placeholder="Title"
            value={state.title}
            onChange={handleChange}
          />
          {error.title && <Form.Error>{error.title}</Form.Error>}

          <Form.Input
            name="url"
            type="url"
            required={true}
            placeholder="Url"
            value={state.url}
            onChange={handleChange}
          />

          {error.url && <Form.Error>{error.url}</Form.Error>}

          <Form.Group>
            <Form.Select
              defaultValue=""
              name="category"
              value={state.category}
              onChange={handleChange}
              disabled={iscategory}
            >
              {categories.map((item) => (
                <Form.Option value={item.title} key={item.id}>
                  {item.title}
                </Form.Option>
              ))}
            </Form.Select>

            <Form.Button type="button" onClick={toggoleAddCategory}>
              +
            </Form.Button>
          </Form.Group>
          {iscategory && (
            <Form.Input
              name="category"
              placeholder="Category name"
              value={state.category}
              onChange={handleChange}
            />
          )}
          {error.category && <Form.Error>{error.category}</Form.Error>}
        </Form.Body>
        <Form.Footer>
          <Form.Button onClick={onCancel}>Cancel</Form.Button>
          <Form.Button type="submit" onClick={SubmitForm}>
            Save
          </Form.Button>
        </Form.Footer>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  positon: absolute;
  top: 0%;
  left: 0%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Modal;
