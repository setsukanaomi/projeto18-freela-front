import styled from "styled-components";

export default function HomePage() {
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
        <Welcome>
          Welcome to Get <strong>Poros</strong>
        </Welcome>
        <Description>
          Here is where you are going to die from cuteness and find <br />
          your perfect poro friend to follow you through your adventures!
        </Description>
        <ButtonContainer>
          <Button>SIGN UP</Button>
          <Button>SIGN IN</Button>
          <Button>POROS</Button>
        </ButtonContainer>
      </Overlay>
    </div>
  );
}

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

const Button = styled.button`
  width: 150px;
  color: black;
  cursor: pointer;
  font-size: 18px;
  border: none;
  border-radius: 2px;
  background-color: white;
  height: 50px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 5px;
`;
