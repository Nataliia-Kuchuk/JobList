import styled from "styled-components";
import { Link } from "react-router-dom";

export const ItemContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px 16px 24px 16px;
  color: #ffffff;
  margin: 32px auto;
  box-shadow: 2px 1px 7px rgba(0, 0, 0, 0.08),
    0px 2px 1px -1px rgba(0, 0, 0, 0.04), 0px 1px 3px rgba(0, 0, 0, 0.12);
  @media (max-width: 1450px) {
    flex-direction: column-reverse;
    align-items: flex-start;
  }
  @media (max-width: 400px) {
    padding: 24px 8px 24px 16px;
  }
`;
export const ItemContainerLeft = styled.div`
  display: flex;
`;
export const ItemContainerRight = styled.div`
  display: flex;
  @media (max-width: 1450px) {
    /* display: flex;
    justify-content: space-between;
    margin-bottom: 20px; */
    display: none;
  }
`;
export const ItemContainerRightAdaptive = styled.div`
  display: none;
  @media (max-width: 1450px) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px; 
  }
`;
export const ItemImg = styled.img`
  width: 100%;
  max-width: 85px;
  max-height: 85px;
  border-radius: 50%;
  margin-right: 20px;
  margin-left: 10px;
`;
export const ItemTitle = styled.h3`
  width: 80%;

  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  letter-spacing: -0.625px;
  color: #3a4562;
  margin: 0px 0px 8px 0px;
  @media (max-width: 1450px) {
    width: 60%;
  }
  @media (max-width: 1000px) {
    width: 90%;
  }
  @media (max-width: 500px) {
    font-size: 16px;
  }
`;
export const LinkTitle = styled(Link)`
  text-decoration: none;
  color: #3a4562;
`;
export const ItemSubTitle = styled.p`
  font-weight: 400;
  width: 80%;

  font-size: 16px;
  line-height: 25px;
  letter-spacing: 0.23619px;
  color: #878d9d;
  margin: 0px 0px 8px 0px;
`;
export const ItemLocation = styled.p`
  font-size: 16px;
  line-height: 25px;
  letter-spacing: 0.23619px;
  color: #878d9d;
  margin: 0;
`;
export const LocationImg = styled.img`
margin-left: 0;
 position: relative;
  top: 5px;
  width: 25px;
  height: 20px;
`;

export const JobRating = styled.div`
display: flex;
align-items: center;
margin-right: 20px;
 @media (max-width: 1450px) {
   width: 30%;
   height: 30%;
   
  }
`;
export const TimePosted = styled.div`
  font-size: 16px;

  display: flex;
  align-items: flex-end;
  text-align: right;
  letter-spacing: 0.23619px;
  color: #878d9d;
  height: 116px;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 1450px) {
    height: 0;
  }
  @media (max-width: 400px) {
    font-size: 12px;
    align-items: center;
    text-align: center;
   
   
  }
`;
export const Save = styled.div`
  @media (max-width: 1450px) {
    display: none;
  }
`;
