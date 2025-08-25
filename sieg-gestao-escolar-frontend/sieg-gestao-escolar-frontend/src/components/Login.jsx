import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  min-height: 100vh;
  font-family: 'Kumbh Sans', sans-serif;
`;

export const LeftSide = styled.div`
  flex: 1;
  background: linear-gradient(135deg, #152259, #1e2a59);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 80px;
  position: relative;
  color: #fff;
`;

export const WelcomeText = styled.div`
  max-width: 450px;

  h1 {
    font-size: 3.2rem;
    font-weight: 700;
    margin-bottom: 10px;
    color: #FFB400;
  }

  h2 {
    font-size: 2.2rem;
    font-weight: 500;
    margin-bottom: 20px;
    color: #FFFFFF;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.7;
    color: #AAAAAA;
  }
`;

export const LogoTop = styled.img`
  position: absolute;
  top: 70px;
  left: 80px;
  width: 90px;
`;

export const RightSide = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f5f7fa;
  padding: 40px;
`;

export const FormCard = styled.div`
  width: 400px;
  padding: 50px 40px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 15px 35px rgba(0,0,0,0.08);

  h2 {
    text-align: center;
    margin-bottom: 30px;
    font-size: 2rem;
    color: #333;
    font-weight: 600;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  .icon {
    position: absolute;
    left: 12px;
    color: #FFB400;
    font-size: 1.1rem;
  }

  input {
    width: 100%;
    padding: 12px 12px 12px 40px;
    border-radius: 12px;
    border: 1px solid #ccc;
    font-size: 1rem;
    outline: none;
    transition: all 0.3s ease;
    background-color: #F5F5F5;
    color: #152259;

    &::placeholder {
      color: #AAAAAA;
    }

    &:focus {
      border-color: #152259;
      box-shadow: 0 0 8px rgba(21,34,89,0.4);
      background-color: #FFFFFF;
    }
  }
`;

export const ButtonPrimary = styled.button`
  width: 100%;
  padding: 14px;
  background: #509CDB;
  color: #fff;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover:enabled {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0,0,0,0.12);
  }

  &:disabled {
    background-color: #a0c4e8;
    cursor: not-allowed;
  }
`;

export const ErrorText = styled.p`
  color: #e74c3c;
  text-align: center;
  margin-bottom: 20px;
  font-weight: 500;
`;

export const MainLogo = styled.img`
  display: block;
  margin: 0 auto 25px auto;
  width: 100px;
`;