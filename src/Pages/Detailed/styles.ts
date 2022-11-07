import styled from "styled-components";
export interface ButtonProps{
    blue?: boolean;
}

export const DetailsContent = styled.div`
display: flex;
justify-content: center;
@media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
}

`
export const DetailsContentLeft = styled.div`
  width: 55%;
  @media (max-width: 1200px) {
    width: 80%;
  }
`;
export const DetailsContentRight = styled.div`
  width: 25%;
  background: black;
  margin-left: 5%;
  height: 432px;
  background: #2a3047;
  border-radius: 8px;
  position: relative;
  z-index: 0;
  display: flex;
  flex-direction: column;
  @media (max-width: 1200px) {
    width: 50%;
    margin-top: 40px;
  }
  @media (max-width: 600px) {
    width: 80%;
    margin-top: 30px;
    height: 350px;
  }
`;
export const DetailsContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(58, 69, 98, 0.13);
  @media (max-width: 700px) {
    flex-direction: column;
    margin: 0;
  }
`;

export const DetailsContentHeaderLeft = styled.p`
  font-family: "Proxima Nova";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 0.413333px;
  color: #3a4562;
`;
export const DetailsContentHeaderRight = styled.p`
  display: flex;
  align-items: center;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;

  letter-spacing: -0.5625px;
  color: #3a4562;
 
`;

export const DetailsContentHeaderRightContainer = styled.div`
  margin-right: 10px;
  margin-left: 20px;
  position: relative;
  top: 2px;
  @media (max-width: 700px) {
    margin-left: 10px;
  }
`;

export const DetailsContentBtn = styled.button`
  background: #384564;
  border-radius: 8px;
  border: none;
  width: 127px;
  height: 57px;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  margin: 25px 0;
`;
export const DetailsTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
export const DetailsTitle = styled.h1`
  width: 55%;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: -0.75px;
  color: #3a4562;
  margin: 0;
  @media (max-width: 800px) {
   width: 90%;
   }
`;

export const DetailsTitlePrice = styled.div`
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    margin-top: 15px;
  }
`;

export const DetailsTitlePriceCost = styled.div`
  font-family: "Proxima Nova";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  letter-spacing: -0.625px;
  color: #3a4562;
`;
export const DetailsTitlePriceSub = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.5625px;
  color: #3a4562;
  font-stretch: 100;
`;

export const PostedTime = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.5625px;
  color: rgba(56, 65, 93, 0.355988);
  font-stretch: 100;
  margin: 10px 0;
`;
export const JobMainInformation = styled.article`

`;
export const JobMainInformationText = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.5625px;
  color: #3a4562;
`;
export const JobMainInformationTitle = styled.h3`
  font-family: "Proxima Nova";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  letter-spacing: -0.625px;
  color: #3a4562;
`;
export const JobMainInformationList = styled.ul`
  list-style: square;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.5625px;
  color: #3a4562;
`;
export const AditionalInfoContainer = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.5625px;
  color: #3a4562;
  margin: 15px 0;
`;
export const BtnsContainer = styled.div`
display: flex;

`;

export const Btn = styled.button<ButtonProps>`
  background: ${({ blue }) =>
    blue ? "rgba(161, 177, 219, 0.317343)" : "rgba(255, 207, 0, 0.15)"};
  border: 1px solid
    ${({ blue }) => (blue ? "rgba(85, 105, 158, 0.3)" : " #FFCF00")};
  border-radius: 8px;
  font-family: "Proxima Nova";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  width: 222px;
  height: 49px;
  text-align: center;
  letter-spacing: -0.457143px;
  color: ${({ blue }) => (blue ? "#55699e" : "#988B49")};
  margin-right: 10px;
  margin-bottom: 15px;
`;
export const BtnReturn = styled.button`
  display: flex;
  align-items: center;
  background: rgba(56, 69, 100, 0.14);
  mix-blend-mode: normal;
  border-radius: 8px;
  font-family: "Proxima Nova";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  text-transform: uppercase;
  color: #3a4562;
  width: 213px;
  height: 50px;
  border: none;
  position: relative;
  left: -70px;
  margin-top: 40px;
  @media (max-width: 900px) {
    position: relative;
    left: 0px;
  }
  @media (max-width: 500px) {
    display: none;
  }
`;
export const ImageContainer = styled.img`
  width: 32%;
  height: 156px;
  border-radius: 10px;
  margin: 20px 5px 40px 0;
  @media (max-width: 500px) {
    height: 90px;
    width: 30%;
  }
`;
export const MapContainer = styled.img`
  width: 100%;
  height: 220px;
  position: absolute;
  bottom: 0;
  @media (max-width: 600px) {
    height: 150px;
  }
`;
export const CircleContainer = styled.div`
  @media (max-width: 1200px) {
    display: none;
  }
`;
export const TextContainer = styled.div`
  position: absolute;
  z-index: 2;
  margin-top: 30px;
  margin-left: 70px;
  @media (max-width: 600px) {
    margin-top: 15px;
    margin-left: 40px;
  }
`;

export const TextContainerInformationMain = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  letter-spacing: -0.625px;
  color: #e7eaf0;
  @media (max-width: 600px) {
    font-size: 18px;
  }
`;
export const TextContainerInformation = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.5625px;
  color: #e8ebf3;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;
export const Link = styled.a`
  text-decoration: none;
  color: #e8ebf3;
`;

export const LocationContainer = styled.img`
 width: 20px;
 height: 15px;
`;
export const LocationContainerBig = styled.img`
  width: 40px;
  height: 35px;
  position: absolute;
  z-index: 3;
  bottom: 130px;
  left: 70px;
  @media (max-width: 600px) {
    display: none;
  }
`;
export const Contacts = styled.p`
  display: none;
  font-family: "Proxima Nova";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 0.413333px;
  color: #3a4562;
  @media (max-width: 1200px) {
    display: block;
  }
`;





