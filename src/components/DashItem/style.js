import styled from "styled-components";

export const Container = styled.div`
  display:flex;
  flex-direction:column;
  align-items: center;
  background-color: #fff;
  border-radius:5px;
  margin: 20px;
  padding: 20px;

  @media (max-width:750px){
    width: 60px;

    p{
      font-size: 12px;
    }

    span{
      font-size:20px;
    }

    svg{
      display:none;
    }
  }
`;

export const Header = styled.header`
    display: flex;
    aligh-items: center;
    justify-content: space-around;
    width: 100%;
    gap:10px;

    svg{
      width: 20px;
      height: 20px;
    }
`;

export const HeaderTitle = styled.p`
    font-size: 20px;
`;

export const Total = styled.span`
    font-size:30px;
    font-weight:bold;
`;
