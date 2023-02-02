import styled from "styled-components";
import React from "react";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://thumbs.dreamstime.com/z/shopping-trolley-blue-background-background-business-shop-online-shopping-trolley-blue-background-108444881.jpg")
      center;
  display: flex;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 30%;
  padding: 20px;
  background-color: white;
  margin-left: 100px;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;
const Button = styled.button`
  width: 20%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;
const Issues = styled.div`
  display: flex;
  justify-content: center;
`;

const Link = styled.a`
  margin: 10px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  flex: 1;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
        </Form>
        <Button>LOGIN</Button>
        <Issues>
          <Link>FORGOT PASSWORD</Link>
          <Link>CREATE AN ACCOUNT</Link>
        </Issues>
      </Wrapper>
    </Container>
  );
};

export default Login;
