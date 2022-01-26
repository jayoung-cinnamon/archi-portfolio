import React from "react";
import styled from "styled-components";
import GlobalStyle from "../../styles/GlobalStyles";
import Header from "../header/Header";

const Contact = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Wrapper>
        <Container>
          <Right>
            <RightContainer>
              <RightTitle>Contact Me</RightTitle>
              <RightSubTitle>Let's work together!</RightSubTitle>
            </RightContainer>

            <SocialContainer>
              <div>Find Me</div>
              <IconContainer>
                <SocialInsta />
                <SocialMail />
              </IconContainer>
            </SocialContainer>
          </Right>

          <Left>
            <SendContainer>
              <MailContainer>
                <ContactTitle>You can contact me by email</ContactTitle>
                <InputContainer>
                  <MailTitle>Name</MailTitle>
                  <MailInput></MailInput>
                  <MailTitle>Company</MailTitle>
                  <MailInput></MailInput>
                </InputContainer>
                <InputContainer>
                  <MailTitle>E-mail</MailTitle>
                  <MailInput></MailInput>
                </InputContainer>
                <InputContainer>
                  <MailTitle>:</MailTitle>
                  <ContentsInput></ContentsInput>
                </InputContainer>
              </MailContainer>
              <SendBtn>Send Mail</SendBtn>
            </SendContainer>
          </Left>
        </Container>
      </Wrapper>
    </>
  );
};

export default Contact;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  padding: 50px 20px 20px 20px;
  height: 100%;
`;

const Container = styled.div`
  height: 90vh;
  font-size: 100px;
  display: flex;
  width: 100%;
`;

const Right = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 250px 30px 0px 30px;
`;

const RightContainer = styled.div``;

const RightTitle = styled.div`
  font-size: 90px;
  font-weight: 500;
`;

const RightSubTitle = styled.div`
  margin-top: 30px;
  margin-left: 10px;
  font-size: 30px;
  font-weight: 300;
`;

const SocialContainer = styled.div`
  width: 100%;
  height: 100px;
  padding: 0;
  font-size: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  justify-content: space-around;
  & .div {
    font-size: 20px;
    margin-left: 30px;
  }
  margin-bottom: 30px;
`;

const IconContainer = styled.div`
  display: flex;
  width: 130px;
  justify-content: space-between;
  align-items: center;
`;

const SocialInsta = styled.svg`
  background-image: url("./icons/instagram.svg");
  width: 57px;
  height: 57px;
  background-repeat: no-repeat;
  background-size: cover;
  stroke: transparent;
  stroke-width: 0px;
`;

const SocialMail = styled.svg`
  background-image: url("./icons/mail.svg");
  width: 50px;
  height: 50px;
  background-repeat: no-repeat;
  background-size: cover;
  stroke: transparent;
  stroke-width: 0px;
`;

const Left = styled.div`
  padding-left: 100px;
  width: 60%;
  display: flex;
  & > div {
    font-size: 30px;
    padding: 30px;
    display: flex;
    justify-content: center;
  }
  display: flex;
  align-items: center;
`;

const MailContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const InputContainer = styled.div`
  width: 80%;
  height: 50px;
  display: flex;
  align-items: center;
`;

const ContactTitle = styled.div`
  font-size: 30px;
  margin-bottom: 90px;
`;

const MailTitle = styled.div`
  font-size: 20px;
  width: 80px;
`;
const MailInput = styled.input`
  font-size: 20px;
  width: 30%;
  color: red;
  border: none;
  border-bottom: 1px solid gray;
  margin-right: 50px;
`;

const ContentsInput = styled.input`
  font-size: 20px;
  width: 100%;
  height: 150px;
  color: blue;
  border: none;
  border: 1px solid gray;
  margin-right: 50px;
`;

const Line = styled.div`
  border-left: 1px solid gray;
  width: 0.5px;
  height: 20%;
`;

const SendBtn = styled.button`
  margin-top: 20px;
  font-size: 18px;
  width: 100px;
  height: 30px;
  text-align: center;
  border-radius: 5;
  padding-top: 5px;
  padding-right: 10px;
  border: 1px solid gray;
  background-color: white;
  :hover {
    background-color: #209fac;
    color: white;
    border: none;
  }
`;

const SendContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
