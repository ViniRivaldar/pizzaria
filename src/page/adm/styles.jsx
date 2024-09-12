import styled from 'styled-components'

import * as colors from '../../config/color'

export const Painel = styled.div`
    nav{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap:40px;
        margin-top: 30px;
        padding: 10px;
        background: ${colors.primaryColor};
        color: #fff;
        border-radius: 4px;

        p{
           font-size: 20px;
           font-weight: bold;
           cursor: pointer;
           padding: 10px;
           transition: transform 0.2s ease, background 0.2s ease;
        }

        p:hover{
            background: ${colors.primaryDarkColor};
            border-radius: 4px;
            transform: translateY(-5px);
        }
    }

`