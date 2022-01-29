import React from "react";
import styled, { css } from "styled-components";
import GlobalStyle from "../../styles/GlobalStyles";
import Header from "../header/Header";
import schoolWork from "../../data/schoolWork";
import Link from "next/link";
import { useRouter } from "next/router";
// import { Link } from "next/link";
const WorkPage = () => {
  const schoolWork2022 = schoolWork.y2022;
  const schoolWork2021 = schoolWork.y2021;
  const schoolWorkTotalList = schoolWork2022.concat(schoolWork2021);
  console.log(schoolWorkTotalList);

  const onClickLink = () => {
    console.log("Clicked");
  };

  const router = useRouter();
  // const link = router.asPath;
  return (
    <>
      <GlobalStyle />
      <Header />
      <Wrapper>
        <Container>
          <Left>
            <Title>Projects</Title>
          </Left>
          <Right>
            <WorkList>
              {schoolWorkTotalList.map((item, index) => (
                <Link href={item.url} key={index}>
                  <WorkComponent onClick={onClickLink}>
                    <ThumbNailContainer
                      src={`${process.env.PUBLIC_URL}/project/2021/1/${item.thumbNail}`}
                    >
                      {item.thumbNail}
                    </ThumbNailContainer>

                    <WorkTitle>{item.title}</WorkTitle>
                    <WorkSubTitle>{item.subTitle}</WorkSubTitle>
                  </WorkComponent>
                </Link>
              ))}
            </WorkList>
          </Right>
        </Container>
      </Wrapper>
    </>
  );
};

export default WorkPage;

const Pf: any = {};
interface SrcProps {
  src: string;
}

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  padding: 50px 0px 0px 0px;
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  font-size: 100px;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Left = styled.div`
  width: 30%;
  /* border: 1px solid red; */
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: 800;
`;
const Right = styled.div`
  width: 100%;
  /* height: 100%; */
  /* border: 1px solid blue; */
  padding: 10px;
`;

const WorkList = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  /* border: 1px solid green; */
`;

const WorkComponent = styled.div`
  width: 300px;
  height: 300px;
  /* border: 1px solid red; */
  margin: 10px;
`;

const WorkTitle = styled.div`
  width: 100%;
  /* border: 1px solid red; */
  font-size: 15px;
  font-weight: 600;
`;

const WorkSubTitle = styled.div`
  width: 100%;
  /* border: 1px solid blue; */
  font-size: 13px;
  font-weight: 300;
`;

const ThumbNailContainer = styled.div<SrcProps>`
  width: 100%;
  height: 90%;
  background-size: cover;
  font-size: 10px;
  background-image: url(${(props) => props.src});
  cursor: pointer;
`;
