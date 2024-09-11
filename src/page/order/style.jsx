import styled from "styled-components";
import * as colors from '../../config/color';

export const Pedidos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    .pedidos {
        margin-top: 30px;
        position: relative; 

        h2 {
            font-size: 15px;
            font-weight: bold;
        }

        h3 {
            margin-top: 10px;
            background: ${colors.primaryColor};
            color: #fff;
            padding: 10px;
            border-radius: 4px;
        }

        div {
            margin-top: 10px;
            color: ${colors.primaryDarkColor};
            font-size: 15px;
            font-weight: bold;
        }

        .close {
            position: absolute;
            right: 10px; 
            top: 0;
            font-size: 24px;
            cursor: pointer;
            color: ${colors.primaryColor};
        }
    }

    .total {
        margin-top: 10px;
        color: ${colors.primaryDarkColor};
        font-size: 15px;
        font-weight: bold;
    }
    
    .status {
        margin-top: 10px;
        color:${colors.primaryColor};
        font-size: 15px;
        font-weight: bold;
    }
`;
