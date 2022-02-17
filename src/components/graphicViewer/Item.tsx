import styled from "styled-components";
import Slick from "../graphicViewer/Slick";
import Sample from "../graphic/index";

interface itemsProps {
  item: string;
  name: string;
  title: string;
}

const SliderItem = styled.div`
  width: 100%;
  img {
    max-width: 100%;
    height: 500px;
  }
`;

const items: itemsProps[] = [
  {
    item: "./modeling/three_js_test_section.glb",
    name: "이미지01",
    title: "어쩌구1",
  },
  {
    item: "http://placehold.it/1200x400/ff0000",
    name: "이미지02",
    title: "어쩌구2",
  },
  {
    item: "http://placehold.it/1200x400/00ffff",
    name: "이미지03",
    title: "어쩌구3",
  },
];

const Item = () => {
  return (
    <Slick>
      {items.map((item, index) => (
        <SliderItem key={index}>
          <img src={item.item} alt={item.name} />
          <Title> {item.title}</Title>
        </SliderItem>
      ))}
    </Slick>
  );
};

export default Item;

const Title = styled.div`
  font-size: 13px;
  border: 1px solid red;
`;
