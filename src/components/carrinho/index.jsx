import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

import {Modal} from './styled'
import { useEffect } from 'react'

export default function Carrinho({ toggleCart }){
    const produto = useSelector(state => state.carrinho)

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
                {produto.map(produto => (
                    <li key={produto.id}>
                        <img src={produto.imageUrl} alt={produto.name} width="50" />
                        <div>
                            <p>{produto.name}</p>
                            <p>{produto.description}</p>
                            <p>{produto.quantidade} x {produto.price.toLocaleString('pt-BR', {
                                style: 'currency',
                                currency: 'BRL',
                            })}</p>
                        </div>
                    </li>
                    ))}
            </div>
        </Modal>

    )
}

Carrinho.propTypes = {
    toggleCart: PropTypes.func.isRequired,
}