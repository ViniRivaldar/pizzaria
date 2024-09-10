import styled from 'styled-components'

export const Modal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 10;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);

    .modal-content{
        position: relative;
        background-color: #fff;
        padding: 20px;
        border-radius: 5px;
        width: 536px;
        text-align: center;
    }

    .close{
        position: absolute;
        top: 10px;
        right: 20px;
        font-size: 24px;
        cursor: pointer;
    }

    .header{
        margin-bottom: 39px;
    }

    .header a{
        float: right;
        cursor: pointer;
        
    }

`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    margin-top: 20px;

    input{
        margin-bottom: 20px;
        height: 40px;
        padding: 0 10px;
        border-radius: 4px;
        border: 1px solid #ddd;
    }
`