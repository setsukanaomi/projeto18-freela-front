/* eslint-disable react/no-unescaped-entities */

import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/logo.png";
import { useContext, useState } from "react";
import axios from "axios";
import { Context } from "../contexts/Context";

export default function SignInPage() {
  const { setToken } = useContext(Context);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function Login(event) {
    event.preventDefault();
    const data = {
      email,
      password,
    };

    axios
      .post(`${import.meta.env.VITE_API_URL}/signin`, data)
      .then((res) => {
        navigate("/poros");
        setToken(res.data.token);
        alert("Yey! Now, lets find your new friend!");
      })
      .catch((error) => {
        console.log(error);
        alert(error.response.data.message);
      });
  }

  return (
    <SignUpContainer
      style={{
        backgroundImage: "url(/background-signin.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
        position: "relative",
      }}
    >
      <Overlay
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        <LogoDiv>
          <ImgLogo src={Logo} alt="Get Poros logo." />
          <RegisterNow>
            Get ready for <strong>cuteness</strong> and
            <strong> friendship!</strong>
          </RegisterNow>
        </LogoDiv>

        <Form onSubmit={Login}>
          <InputsContainer>
            <h2>EMAIL</h2>
            <input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              autoComplete="on"
            />
          </InputsContainer>

          <InputsContainer>
            <h2>PASSWORD</h2>
            <input
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              autoComplete="new-password"
            />
          </InputsContainer>

          <Button type="submit">LOGIN</Button>
        </Form>

        <StyledLink to="/signup">
          Don't have an account? Register now!
        </StyledLink>

        <StyledLink to="/poros">
          Just wanna see our collection of poros? Click here!
        </StyledLink>
      </Overlay>
    </SignUpContainer>
  );
}

const RegisterNow = styled.p`
  font-size: 35px;
  text-align: center;
  strong {
    font-weight: 700;
  }
`;

const StyledLink = styled(Link)`
  font-family: "Mulish", sans-serif;
  text-decoration: none;
  font-weight: 500;
  &:hover {
    background-color: #fff;
    border-radius: 2px;
    color: #000;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }
`;

const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ImgLogo = styled.img`
  width: 180px;
`;

const InputsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 8px;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  input {
    text-align: center;
    width: 300px;
    border: 2px solid #fff;
    color: #ffff;
    height: 40px;
    background-color: transparent;
    transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
    ::placeholder {
      border: none;
      color: white;
      opacity: 1;
    }
    &:hover {
      background-color: #fff;
      color: #000;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    }
    &:focus {
      background-color: #fff;
      border: none;
      color: #000;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    }
  }
`;

const SignUpContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Overlay = styled.div`
  display: flex;
  gap: 35px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  width: 100px;
  height: 50px;
  font-size: 13px;
  text-decoration: none;
  background-color: transparent;
  border: 2px solid #fff;
  color: #ffff;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
  &:hover {
    background-color: #fff;
    color: #000;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }
`;
