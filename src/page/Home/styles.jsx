import styled from 'styled-components'

export const ContainerProducts = styled.div`
    a{
        display: flex;
        justify-content: space-between;
        padding: 10px;
        border-radius: 4px;
    }

    a:hover{
        background:#C3073F ;
        color: #fff;
    }

    p{
        font-size: 25px;
    }
`

export const ButtonContainer = styled.div`
    position: fixed;
    bottom: 20px; 
    left: 50%;
    transform: translateX(-50%); 
    z-index: 1000; 
    
    button {
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
    }

`