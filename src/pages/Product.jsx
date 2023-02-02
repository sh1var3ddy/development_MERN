import React from "react";
import styled from "styled-components";
import Announcements from "../components/Announcements";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import Navbar from "../components/Navbar";
import { Add, Remove } from "@material-ui/icons";
const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  padding: 50px;
`;
const Title = styled.h1`
  font-weight: 200;
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const Filter = styled.div`
  display: flex;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
  margin-left: 10px;
`;

const FilterColor = styled.option`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  diplay: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 20px 10px;
`;
const Button = styled.button`
  margin-left: 20px;
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  border-radius: 3px;
  &:hover {
    background-color: #e7e7e7;
  }
`;

const Product = () => {
  return (
    <Container>
      <Announcements />
      <Navbar />
      <Wrapper>
        <ImageContainer>
          <Image src="https://m.media-amazon.com/images/I/61EJxytnV5L._UX679_.jpg" />
        </ImageContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>
            Jeans are casual-wear pants typically made from denim fabric.
            Patented in the nineteenth century in the United States by Levi
            Strauss and Jacob Davis, a typical pair of jeans usually features a
            button clasp, a zipper, belt loops, and front and back pockets, with
            copper rivets to reinforce the pockets
          </Desc>
          <Price>$ 15</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
              <Button>ADD TO CART</Button>
            </AmountContainer>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
