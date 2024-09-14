import {useEffect, useState} from 'react'
import PropTypes from 'prop-types';

import {Modal} from './style'
import axios from '../../services/axios'

export default function ModalOrder({toggleOrder,orderId}){

    const [orderDetails, setOrderDetails] = useState(null);

    useEffect(() => {
        const fetchOrderDetails = async () => {
            try {
                const response = await axios.get(`/order/${orderId}`)
                setOrderDetails(response.data);
            }catch (error) {
                console.error('Erro ao buscar os detalhes do pedido:', error);
            }
        }

        if (orderId) {
            fetchOrderDetails()
        }

        const handleOutsideClick = (e) => {
          if (e.target.classList.contains('modal')) {
            toggleOrder();
          }
        };
    
        document.addEventListener('click', handleOutsideClick);
        return () => {
          document.removeEventListener('click', handleOutsideClick);
        };
    }, [toggleOrder,orderId]);


    return(

        <Modal className='modal'>
            <div className='modal-content'>
                <span className="close" onClick={toggleOrder}>&times;</span>
                <h1>Pedido</h1>
               {orderDetails &&(
                <>
                    <p>Nome:{orderDetails.user.name}</p>
                    <p>whatsapp:{orderDetails.user.phone}</p>
                    {orderDetails.user.address.map(endereco=>(
                        <div key={endereco._id}>
                            <p>bairro:{endereco.district}</p>
                            <p>{endereco.street}</p>
                            <p>{endereco.number}</p>
                            <p>{endereco.reference_point}</p>
                        </div>
                    ))}
                    {orderDetails.products.map(produtos=>(
                        <div key={produtos._id}>
                            <p>nome: {produtos.name}</p>
                        </div>
                    ))}
                    <p>total:{orderDetails.total}</p>
                </>
               )}
            </div>
        </Modal>
    )
}

ModalOrder.propTypes = {
    toggleOrder: PropTypes.func.isRequired,
    orderId: PropTypes.string.isRequired
};