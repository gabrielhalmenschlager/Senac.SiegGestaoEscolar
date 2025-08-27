import styled, { keyframes } from "styled-components";

const fadeSlideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Card = styled.div`
  max-width: 650px;
  margin: 50px auto;
  padding: 40px 50px;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: ${fadeSlideIn} 0.6s ease forwards;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
  }

  h2 {
    color: #152259;
    margin-bottom: 20px;
    font-weight: 700;
    font-size: 2.2rem;
    letter-spacing: 0.5px;
  }

  p {
    color: #aaaaaa;
    font-size: 1rem;
  }
`;

export const FormCard = styled.div`
  max-width: 600px;
  margin: 40px auto;
  padding: 40px 50px;
  background-color: #ffffff;
  border-radius: 18px;
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: ${fadeSlideIn} 0.7s ease forwards;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 36px rgba(0, 0, 0, 0.12);
  }

  h2 {
    color: #152259;
    margin-bottom: 25px;
    font-weight: 700;
    text-align: center;
    font-size: 2rem;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
  animation: ${fadeSlideIn} 0.8s ease forwards;

  label {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
    font-size: 0.95rem;
    color: #152259;
  }

  input,
  select {
    width: 100%;
    padding: 12px 14px;
    border-radius: 10px;
    border: 1px solid #cccccc;
    font-size: 1rem;
    outline: none;
    background-color: #f5f5f5;
    color: #333;
    transition: border 0.3s ease, box-shadow 0.3s ease;

    &:focus {
      border-color: #152259;
      box-shadow: 0 0 0 3px rgba(21, 34, 89, 0.2);
      background-color: #ffffff;
    }
  }
`;

export const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 15px;
  border-radius: 10px;
  border: 1px solid #d0d7de;
  background-color: #f5f5f5;
  margin-bottom: 20px;
  transition: background-color 0.3s ease;
  animation: ${fadeSlideIn} 0.9s ease forwards;

  &:hover {
    background-color: #ffffff;
  }

  label {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-weight: 500;
    color: #152259;
  }

  input {
    margin-right: 10px;
    accent-color: #ffb400;
  }
`;

export const InfoList = styled.div`
  text-align: left;
  margin-top: 20px;
  background-color: #ffffff;
  padding: 20px 25px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  animation: ${fadeSlideIn} 1s ease forwards;
`;

export const InfoItem = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 0;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }

  strong {
    color: #152259;
  }
  svg {
    color: #FFB400;
    min-width: 20px;
    min-height: 20px;
  }
`;

export const FormWrapper = styled.form`
  width: 100%;
  max-width: 1200px;
  background-color: #ffffff;
  border-radius: 18px;
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.08);
  padding: 40px 50px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  animation: ${fadeSlideIn} 1.1s ease forwards;

  h2 {
    grid-column: span 2;
    color: #152259;
    margin-bottom: 10px;
    font-weight: 700;
    text-align: center;
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 30px 20px;
  }
`;