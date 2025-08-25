import styled from "styled-components";

export const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding: 20px 20px;
  border-radius: 15px;
  background: #FFF;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.1);

  h1 {
    margin: 0;
    font-size: 1.8rem;
    color: #152259;
  }

  button {
    background-color: #509CDB;
    color: #FFFFFF;
    font-weight: 600;
    border: none;
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
`;

export const TableContainer = styled.div`
  margin-top: 40px;
  overflow-x: auto;
  background-color: #F5F5F5;
  border-radius: 15px;
  padding: 20px;
`;

export const TableGlobal = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  font-family: 'Segoe UI', sans-serif;

  th, td {
    text-align: left;
    padding: 15px 20px;
    font-size: 1rem;
  }

  th {
    background-color: #152259;
    color: #FFFFFF;
    font-weight: 600;
    border-bottom: 3px solid #FFB400;
  }

  tr {
    transition: all 0.3s ease;

    &:nth-child(even) {
      background-color: #FFFFFF;
    }

    &:nth-child(odd) {
      background-color: #F5F5F5;
    }

    &:hover {
      background-color: #e0e4ff;
    }
  }

  td {
    color: #333333;
    border-bottom: 1px solid #eee;
  }
`;