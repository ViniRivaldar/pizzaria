import styled from 'styled-components';
import * as Colors from '../../config/color';

export const Nav = styled.nav`
  background: ${Colors.primaryColor};
  padding: 20px;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  position: relative;

  h1{
    margin: 0 100px;
  
  }

  a {
    color: #fff;
    font-weight: bold;
  }

  .pedidos{
    position: absolute;
    right: 20px; 
    display: flex;
    gap: 15px; 
  }

`;

export const CartIconWrapper = styled.div`
  position: relative;
`;

export const CartBadge = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  background: ${Colors.primaryDarkColor};
  color: #fff;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`;
