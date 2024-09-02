import PropTypes from 'prop-types'

import {Modal} from './styled'
import { useEffect } from 'react'

export default function Carrinho({ toggleCart,cartItems }){

    useEffect(()=>{
        const handleOutsideClick = (e) => {

            if(e.target.classList.contains('modal')){
                toggleCart()
            }
        }

        document.addEventListener('click', handleOutsideClick)
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        }
    },[toggleCart])

    
    return(
        <Modal className="modal">
            <div className="modal-content">
                <span className="close" onClick={toggleCart}>&times;</span>
                <h1>carrinho</h1>
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index}>
                            {item.name} - {item.price.toLocaleString('pt-BR', {
                                style: 'currency',
                                currency: 'BRL',
                            })}
                        </li>
                    ))}
                </ul>
            </div>
        </Modal>

    )
}

Carrinho.propTypes = {
    toggleCart: PropTypes.func.isRequired,
    cartItems: PropTypes.array.isRequired
}