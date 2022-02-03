import React, { useState, useCallback, useEffect } from "react";
import styled, { css } from "styled-components";
import GlobalStyle from "../../styles/GlobalStyles";
import Header from "../header/Header";
// import schoolWork from "../../data/schoolWork";
import awards from "../../data/awards";
import Link from "next/link";
import { useRouter } from "next/router";
import { isTemplateExpression } from "typescript";
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
    { value: "latest", name: "최신순" },
    { value: "awards", name: "수상" },
    { value: "notAwards", name: "비수상" },
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
    url: string;
    detail: string;
    regDate: string;
    workDate: string;
    award: string;
    area: string;
  }
  useEffect(() => {
    if (selected === "latest") {
      setNewList(sortedAwardsTotalList);
    } else if (selected === "awards") {
      setNewList(sortedAwardsTotalList.filter((item) => item.award === "y"));
    } else if (selected === "notAwards") {
      setNewList(sortedAwardsTotalList.filter((item) => item.award === "n"));
    }
  }, [selected]);

  return (
    <>
      <GlobalStyle />
      <Header />
      <Wrapper>
        <Container>
          <Left>
            <Title>Projects</Title>

            <select onChange={handleSelect} value={selected}>
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
                <Link href={item.url} key={index}>
                  <WorkComponent
                    key={index}
                    unHovered={hover !== null && hover !== index}
                    hovered={hover === index}
                    onMouseOver={() => setHover(index)}
                    onMouseOut={() => setHover(20)}
                  >
                    <ThumbNailContainer
                      src={`${process.env.PUBLIC_URL}/project/${item.thumbNail}`}
                    ></ThumbNailContainer>

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

interface HoverProps {
  unHovered: boolean;
  hovered: boolean;
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
  width: 100%;
  display: flex;
  justify-content: space-between;
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

const WorkComponent = styled.div<HoverProps>`
  width: 300px;
  height: 300px;
  margin: 10px;
  margin-bottom: 40px;
  ${(props) =>
    props.unHovered &&
    css`
      opacity: 0.5;
      transition: 0s ease-in;
    `}
  ${(props) =>
    props.hovered &&
    css`
      opacity: 1;
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
  margin-top: 10px;
`;

const ThumbNailContainer = styled.div<SrcProps>`
  width: 100%;
  height: 90%;
  background-size: cover;
  font-size: 10px;
  background-image: url(${(props) => props.src});
  cursor: pointer;
`;
