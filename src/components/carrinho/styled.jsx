import styled from 'styled-components'

import * as colors from '../../config/color'

export const Modal = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 10;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    
    .modal-content {
        position: relative; 
        background-color: #fff;
        padding: 20px;
        border-radius: 5px;
        width: 536px;
        text-align: center;
    }

    .modal-content h1 {
        margin: 0; 
        color: ${colors.primaryDarkColor};
    }

    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
        margin-bottom: 10px;
        padding: 20px;
    }

    .clear-cart{
        cursor: pointer;
        font-size: 14px;
        color: ${colors.primaryColor} ;
    }

    .close {
        position: absolute;
        top: 10px;
        right: 20px;
        font-size: 24px;
        cursor: pointer;
    }

    ul li h2 {
        margin-bottom: 15px;
    }

    .produto{
        display: flex;
        justify-content: space-around;
    }

    .produto img{
        border-radius: 4px;
    }

    ul li .produto p:first-of-type {
        max-width: 208px; 
        white-space: nowrap; 
        overflow: hidden; 
        text-overflow: ellipsis;
    
    }

    ul li{
        margin-bottom: 20px;
    }
    
    .quantidade-control {
        display: flex;
        align-items: center;
        gap: 5px;
        margin-bottom: 32px;

        a {
            display: inline-block;
            width: 20px;
            height: 20px;
            line-height: 18px;
            text-align: center;
            font-size: 14px;
            font-weight: bold;
            color: #C3073F;
            text-decoration: none;
            border: 1px solid #C3073F;
            cursor: pointer;
            border-radius: 50%;
        }

        span {
            font-size: 16px;
        }
    }

    .comprar{
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top: 40px;
    }

    .comprar p {
        font-size: 25px;
        font-weight: bold;
        color: ${colors.primaryDarkColor};
    }

`
