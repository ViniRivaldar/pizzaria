import styled from 'styled-components';
import { primaryColor } from '../../config/color';

export const Nav = styled.nav`
  background: ${primaryColor};
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  h1{
    margin: 0 100px;
  
  }

  a {
    color: #fff;
    margin: 0 10px 0 0;
    font-weight: bold;
  }

`;