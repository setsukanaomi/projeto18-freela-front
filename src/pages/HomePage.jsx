import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/logo.png";
import { useContext, useEffect } from "react";
import { Context } from "../contexts/Context";

export default function HomePage() {
  const { setToken } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      navigate("/poros");
    }
  }, [navigate, setToken]);

  return (
    <div
      style={{
        backgroundImage: "url(/background.jpg)",
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
        <ImgLogo src={Logo} alt="Get Poros logo." />
        <Welcome>
          Welcome to Get <strong>Poros</strong>
        </Welcome>
        <Description>
          Here is where you are going to die from cuteness and find <br />
          your perfect poro friend to follow you through your adventures!
        </Description>
        <ButtonContainer>
          <Button to="/signup">SIGN UP</Button>
          <Button to="/signin">SIGN IN</Button>
          <Button to="/poros">POROS</Button>
        </ButtonContainer>
      </Overlay>
    </div>
  );
}

const ImgLogo = styled.img`
  width: 180px;
`;

const Overlay = styled.div`
  display: flex;
  gap: 30px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Welcome = styled.p`
  font-size: 48px;
  strong {
    font-weight: 700;
  }
`;

const Description = styled.p`
  font-size: 20px;
  text-align: center;
`;

const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
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

const ButtonContainer = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 5px;
`;
