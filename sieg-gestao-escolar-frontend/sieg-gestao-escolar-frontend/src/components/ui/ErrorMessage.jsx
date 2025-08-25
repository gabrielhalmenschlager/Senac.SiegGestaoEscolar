import styled from 'styled-components';
import errorImg from '../../assets/logo.png';

export default function ErrorMessage({ title = "Ops!", message = "Algo deu errado." }) {
  return (
    <ErrorContainer>
      <ErrorImage src={errorImg} alt="Erro" />
      <ErrorTitle>{title}</ErrorTitle>
      <ErrorText>{message}</ErrorText>
    </ErrorContainer>
  );
}

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 40px 20px;
  background-color: #f8d7da;
  color: #721c24;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  margin: 150px auto;
  max-width: 400px;
`;

const ErrorImage = styled.img`
  width: 120px;
  height: auto;
  margin-bottom: 20px;
`;

const ErrorTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 10px;
  color: #b71c1c;
`;

const ErrorText = styled.p`
  font-size: 1rem;
  color: #4f1a1a;
`;