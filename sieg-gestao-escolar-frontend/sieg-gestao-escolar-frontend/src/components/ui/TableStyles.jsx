import styled from "styled-components";

export const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const TableContainer = styled.div`
  margin-top: 40px;
  overflow-x: auto;
  background-color: #fff;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.08);
`;

export const ProfessoresTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    text-align: left;
    padding: 15px;
    font-size: 1rem;
  }

  th {
    background-color: #152259;
    color: white;
    font-weight: 600;
  }

  tr {
    border-bottom: 1px solid #e0e0e0;
    transition: background 0.3s ease;

    &:hover {
      background-color: #f1f5f9;
    }
  }

  td {
    color: #555;
  }
`;
