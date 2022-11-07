import styled from "styled-components";
  
interface CurrentPageProps {
    currentPage: boolean;
}

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

export const PagesContainer = styled.div`
  background: #ffffff;
  box-shadow: 2px 1px 7px rgba(0, 0, 0, 0.08),
    0px 2px 1px -1px rgba(0, 0, 0, 0.04), 0px 1px 3px rgba(0, 0, 0, 0.12);
  border-radius: 10.4px;
  height: 30px;
  display: inline-block;
  margin-bottom: 10px;
  padding: 8px 12px;
  margin: 20px;
`;
export const Page = styled.button<CurrentPageProps>`
  background-color: transparent;
  border: none;
  margin: 0 5px;
  font-family: "Proxima Nova";
  font-style: normal;
  font-weight: 700;
  font-size: 20.8px;
  line-height: 25px;
  align-items: center;
  letter-spacing: 1.73333px;
  color: ${({currentPage}) => currentPage ? '#5876C5' : '#70778b'};
  border-bottom: ${({ currentPage }) =>
    currentPage ? "2.6px solid #5876C5" : "none"};
`;
export const ArrowContainer = styled.span`
margin: auto 15px;
position: relative;
top: 3px;
`;
