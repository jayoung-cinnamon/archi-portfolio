import React, { useState, useCallback, useEffect } from "react";
import styled, { css } from "styled-components";
import GlobalStyle from "../../styles/GlobalStyles";
import Header from "../header/Header";
import awards from "../../data/awards";
import Footer from "../footer/Footer";
// import Link from "next/link";
import { useRouter } from "next/router";
import { Link } from "react-router-dom";

const WorkPage = () => {
  const awards2017 = awards.y2017;
  const awards2016 = awards.y2016;
  const awards2015 = awards.y2015;
  const awards2014 = awards.y2014;
  const awards2013 = awards.y2013;

  const awardsTotalList = [
    ...awards2017,
    ...awards2016,
    ...awards2015,
    ...awards2014,
    ...awards2013,
  ];

  const [hover, setHover] = useState(0);
  const sortedAwardsTotalList = [...awardsTotalList].sort();
  const router = useRouter();
  const selectList = [
    { value: "latest", name: "latest" },
    { value: "awards", name: "award" },
    { value: "professional", name: "professional" },
    // { value: "2017", name: "2017년" },
    // { value: "2016", name: "2016년" },
    // { value: "2015", name: "2015년" },
    // { value: "2014", name: "2014년" },
  ];
  const [selected, setSelected] = useState("");

  const handleSelect = (e: any) => {
    setSelected(e.target.value);
  };

  const [newList, setNewList] = useState<newListInfo[]>(sortedAwardsTotalList);
  interface newListInfo {
    id: number;
    title: string;
    subTitle: string;
    subImage: string;
    thumbNail: string;
    img02: string;
    url: string;
    detail: string;
    regDate: string;
    workDate: string;
    award: string;
    area: string;
    professional: string;
  }
  useEffect(() => {
    if (selected === "latest") {
      setNewList(sortedAwardsTotalList);
    } else if (selected === "awards") {
      setNewList(sortedAwardsTotalList.filter((item) => item.award === "y"));
    } else if (selected === "professional") {
      setNewList(
        sortedAwardsTotalList.filter((item) => item.professional === "y")
      );
    }
  }, [selected]);

  return (
    <>
      <GlobalStyle />
      <Header />
      <Wrapper>
        <Body>
          <Container>
            <Left>
              <Title>Projects</Title>
              <select
                className="select"
                onChange={handleSelect}
                value={selected}
              >
                {selectList.map((item) => (
                  <option value={item.value} key={item.value}>
                    {item.name}
                  </option>
                ))}
              </select>
            </Left>
            <Right>
              <WorkList>
                {newList.map((item, index) => (
                  <Link to={item.url} key={index}>
                    <WorkComponent
                      key={index}
                      unHovered={hover !== null && hover !== index}
                      hovered={hover === index}
                      onMouseOver={() => setHover(index)}
                      onMouseOut={() => setHover(20)}
                    >
                      <ImgContainer>
                        <ThumbNailWrapper
                          src={`${process.env.PUBLIC_URL}/project/${item.thumbNail}`}
                        ></ThumbNailWrapper>
                      </ImgContainer>

                      <WorkTitle>{item.title}</WorkTitle>
                      <WorkSubTitle>{item.subTitle}</WorkSubTitle>
                    </WorkComponent>
                  </Link>
                ))}
              </WorkList>
            </Right>
          </Container>
        </Body>
      </Wrapper>
      <Footer />
    </>
  );
};

export default WorkPage;

const Pf: any = {};
interface SrcProps {
  src: string;
}

interface HoverProps {
  unHovered: boolean;
  hovered: boolean;
}
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  flex-direction: column;

  /* border: 1px solid red; */
`;

const Body = styled.div`
  width: 1080px;
  color: black;
  height: 100%;
  min-height: 100vh;
  /* padding: 20px; */
  /* display: flex; */
  padding: 65px 0px 0px 0px;
  /* border: 1px solid blue; */
  /* margin-top: 65px; */
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
  width: 100%;
  display: flex;
  justify-content: space-between;
  .select {
    border-radius: 0;
    border: 1px solid grey;
    font-size: 12px;
    height: 23px;
  }
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: 800;
`;
const Right = styled.div`
  width: 100%;
  /* height: 100%; */
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* border: 1px solid blue; */
  padding: 10px;
`;

const WorkList = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  /* justify-content: flex-start; */
  flex-wrap: wrap;
  /* border: 1px solid green; */
`;

const WorkComponent = styled.div<HoverProps>`
  width: 250px;
  height: 250px;
  margin: 10px;
  /* border: 1px solid blue; */
  margin-bottom: 40px;
  ${(props) =>
    props.unHovered &&
    css`
      opacity: 0.5;
      transition: 0s ease-in;
    `}
`;

const WorkTitle = styled.div`
  width: 100%;
  /* border: 1px solid red; */
  margin-top: 10px;
  font-size: 15px;
  font-weight: 600;
`;

const WorkSubTitle = styled.div`
  width: 100%;
  /* border: 1px solid blue; */
  font-size: 13px;
  font-weight: 300;
  margin-top: 8px;
`;

const ImgContainer = styled.div`
  width: 100%;
  height: 90%;
  overflow: hidden;
  /* height: 58.6vw; */
  /* margin: 0 0 40px 0; */
`;

const ThumbNailWrapper = styled.div<SrcProps>`
  width: 100%;
  height: 90%;
  background-image: url(${(props) => props.src});
  background-size: cover;
  margin: 0 0 40px 0;
  cursor:pointer;
    :hover {
      transition: all 0.3s ease-out;
      transform: scale(1.1);
    }
  }
`;

const SelectBox = styled.div`
  width: 180px;
  font-size: 12px;
  border: 1px solid blue;
  display: flex;
  flex-direction: flex-end;
`;
