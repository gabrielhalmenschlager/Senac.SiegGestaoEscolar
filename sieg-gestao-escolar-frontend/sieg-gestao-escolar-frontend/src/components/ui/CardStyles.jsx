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

export const FormCard = styled.div`
  max-width: 600px;
  margin: 40px auto;
  padding: 50px;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.08);

  h2 {
    color: #4F4F4F;
    margin-bottom: 25px;
    font-weight: 600;
    text-align: center;
    font-size: 2rem;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;

  label {
    display: block;
    margin-bottom: 5px;
    font-weight: 500;
  }

  input, select {
    width: 100%;
    padding: 10px 10px;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 1rem;
    outline: none;
    transition: border 0.3s ease;

    &:focus {
      border-color: #509CDB;
    }
  }
`;

export const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  border-radius: 8px;
  border: 1px solid #d0d7de;
  margin-bottom: 20px;

  label {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  input {
    margin-right: 10px;
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
