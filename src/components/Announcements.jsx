import styled from "styled-components";
import React from "react";
const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;
const Announcements = () => {
  return <Container> Super deal free delivery on orders over $50 </Container>;
};

export default Announcements;
