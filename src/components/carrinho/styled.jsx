import styled from 'styled-components'

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
        width: 300px;
        text-align: center;
    }

    .close {
        position: absolute;
        top: 10px;
        right: 20px;
        font-size: 24px;
        cursor: pointer;
    }
`
