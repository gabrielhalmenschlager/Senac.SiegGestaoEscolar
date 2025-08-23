import styled from "styled-components";

export const BtnPrimary = styled.button`
  background-color: #509CDB;
  color: white;
  border: none;
  padding: 14px 45px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: all 0.3s ease;

  &:hover {
    background-color: #3a83bf;
    transform: translateY(-2px);
  }
`;

export const BtnDetail = styled.button`
  background-color: #6c757d;
  color: white;
  border: none;
  padding: 5px 12px;
  border-radius: 6px;
  font-size: 14px;
  margin-right: 5px;
  cursor: pointer;

  &:hover {
    background-color: #5a6268;
  }
`;

export const BtnEdit = styled(BtnDetail)`
  background-color: #28a745;

  &:hover {
    background-color: #218838;
  }
`;

export const BtnDelete = styled(BtnDetail)`
  background-color: #dc3545;

  &:hover {
    background-color: #c82333;
  }
`;
