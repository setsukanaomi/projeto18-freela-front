/* eslint-disable react-hooks/exhaustive-deps */
import styled from "styled-components";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Context } from "../contexts/Context";

export default function PorosPage() {
  const { poros, setPoros } = useContext(Context);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/poros`)
      .then((answer) => {
        setPoros(answer.data);
      })
      .catch((error) => {
        alert(error.message);
      });

    const token = localStorage.getItem("token");
    if (token) {
      setAuthenticated(true);
    }
  }, []);

  const handleLogOff = () => {
    localStorage.removeItem("token");
    setAuthenticated(false);
  };

  return (
    <div>
      <PorosContainer
        style={{
          backgroundImage: "url(/background-poros.jpg)",
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
          <SideBar>
            <ImgLogo src={Logo} alt="Get Poros logo." />
            <Button to="/">WELCOME</Button>
            {authenticated ? (
              <Button to="/my/poros">MY POROS</Button>
            ) : (
              <Button to="/signup">SIGN UP</Button>
            )}
            {authenticated ? (
              <Button to="#" onClick={handleLogOff}>
                LOG OFF
              </Button>
            ) : (
              <Button to="/signin">SIGN IN</Button>
            )}
            <Button disabled>POROS</Button>
            <Button>POROS ALREADY TRAVELING</Button>
          </SideBar>
          <PorosDiv>
            <h1>
              Our collection of <strong>poros</strong> just for{" "}
              <strong>you</strong>!
            </h1>
            <Underline />
            <PorosList>
              {poros.map((poro, id) => (
                <StyledLink to={`/poros/${id + 1}`} key={id}>
                  <Poro>
                    <img src={poro.picture} alt={poro.name} />
                    <h2>{poro.name}</h2>
                  </Poro>
                </StyledLink>
              ))}
            </PorosList>
          </PorosDiv>
        </Overlay>
      </PorosContainer>
    </div>
  );
}
const StyledLink = styled(Link)`
  text-decoration: none;
`;
const PorosContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const PorosList = styled.div`
  margin-top: 55px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 30px;
`;

const ImgLogo = styled.img`
  width: 160px;
`;

const Poro = styled.div`
  cursor: pointer;
  width: 350px;
  height: 300px;
  gap: 3px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 20px;
  img {
    width: 295px;
    border-radius: 30px;
    height: 300px;
  }
  h2 {
    font-size: 22px;
    text-align: center;
  }
`;

const Underline = styled.div`
  height: 3px;
  width: 550px;
  margin-top: 5px;
  background-color: rgba(0, 0, 0, 0.2);
`;

const Overlay = styled.div`
  display: flex;
  gap: 35px;
  justify-content: flex-start;
`;

const SideBar = styled.div`
  width: 160px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 50px;
  margin-left: 350px;
  background-image: url(/background-sidebar.jpg);
  height: 853px;
  background-color: rgba(0, 0, 0, 0.7);
`;

const PorosDiv = styled.div`
  margin-top: 60px;
  height: 850px;
  overflow: scroll;
  h1 {
    font-size: 35px;
    font-weight: 200;
  }
  strong {
    font-weight: 700;
  }
`;

const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 160px;
  height: 50px;
  font-size: 14px;
  text-decoration: none;
  background-color: transparent;
  border: none;
  color: ${(props) => (props.disabled ? "#000 " : "#fff")};
  background-color: ${(props) =>
    props.disabled ? "#fff" : "rgba(0, 0, 0, 0.4)"};
  font-weight: 600;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
  &:hover {
    background-color: #fff;
    color: #000;
    box-shadow: ${(props) =>
      props.disabled ? "none" : "0px 0px 10px rgba(0, 0, 0, 0.2)"};
  }
`;
