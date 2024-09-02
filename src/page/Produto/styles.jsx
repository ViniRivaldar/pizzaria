import styled from 'styled-components'
import * as colors from '../../config/color'

export const ContainerProducts = styled.div`
    h1{
        font-size: 30px;
        margin-bottom: 20px;
        text-align: center;
        color: ${colors.primaryColor}
    }
    p{
        margin-bottom: 30px;
        margin-left: 20px;
    }
    p:nth-child(3){
        color: ${colors.primaryDarkColor};
        font-size: 25px;
        font-weight: bold;
    }

    button{
        display: block;
        margin: 0 auto;
        width: 120px;
        height: 44px;

    }
`

export const ContainerPictures = styled.div`
    display: flex;
    align-items: center;

    img{
        width: 180px;
        height: 180px;
        margin-right: 20px;
        border-radius: 4px;
    }
    p{
        margin-left: 20px;
        padding: 10px
    }
`
