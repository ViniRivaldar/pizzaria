import styled from 'styled-components'
import * as colors from '../../config/color'

export const ContainerProducts = styled.div`
    a{
        display: flex;
        justify-content: space-between;
        padding: 10px;
        border-radius: 4px;
    }

    a:hover{
        background:${colors.primaryColor} ;
        color: #fff;
    }

    p{
        font-size: 25px;
    }

    h1{
        background: ${colors.primaryDarkColor};
        color: #fff;
        padding: 10px;
        border-radius: 4px;
        margin: 10px 0;
    }

`

export const ResponsiveImage = styled.img`
    width: 542px;
    height: 216px;
    display: block;
    margin-bottom: 20px;
    border-radius: 4px;
`;