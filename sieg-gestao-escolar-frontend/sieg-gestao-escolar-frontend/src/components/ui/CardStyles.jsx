import styled from "styled-components";

export const Card = styled.div`
  max-width: 650px;
  margin: 50px auto;
  padding: 50px;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  text-align: center;

  h2 {
    color: #2c3e50;
    margin-bottom: 30px;
    font-weight: 700;
    font-size: 2rem;
  }
`;

export const InfoList = styled.div`
  text-align: left;
  margin-top: 20px;
`;

export const InfoItem = styled.p`
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 10px;

  strong {
    color: #152259;
    width: 150px;
  }

  svg {
    min-width: 20px;
    min-height: 20px;
  }
`;
