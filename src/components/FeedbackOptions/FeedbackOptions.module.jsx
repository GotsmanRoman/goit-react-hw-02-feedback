import styled from '@emotion/styled';
export const NavButtons = styled.div`
  display: flex;
  gap: 20px;
`;
export const Button = styled.button`
  width: 100px;
  height: 30px;
  border: none;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  color: #ffffff;
  background-color: #ccccfc;

  transition: background-color 250ms ease-in-out;

  :hover {
    background-color: #3300cc;
  }
`;
