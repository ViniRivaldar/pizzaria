import styled from 'styled-components'
import * as colors from '../../config/color'

export const Usuario = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 15px;

    

    .users{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .users p{
        font-size: 20px;
        font-weight: bold;
        color: ${colors.primaryDarkColor};
    }

    .address{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 10px
        
    }
    .address p{
        flex: 1 1 45%;
        font-size: 20px;
        font-weight: bold;
        color: ${colors.primaryDarkColor};
    }
`

export const Produto = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 15px;

   
    .cart {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: 1px solid #ccc;
        padding: 10px;
        border-radius: 5px;
    }

    .cart p{
        font-size: 15px;
        font-weight: bold;
        color: ${colors.primaryDarkColor};
    }

`

export const Pedidos= styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 15px;

    .finalizando{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .finalizando p{
        font-size: 20px;
        font-weight: bold;
        color: ${colors.primaryDarkColor};
    }
  
`

export const Titulos = styled.h2`
    background: ${colors.primaryColor};
    color: #fff;
    padding: 5px;
    border-radius: 4px;

    
`