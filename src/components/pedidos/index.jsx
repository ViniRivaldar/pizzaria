import { useEffect, useState } from 'react'

import {Pedido} from './styles'
import axios from '../../services/axios'
import Order from '../modalOrder'

export default function Pedidos(){
    const[pedido, setPedidos] = useState([])
    const[showOrder, setShowOrder] = useState(false)
    const [currentOrderId, setCurrentOrderId] = useState(null);

    useEffect(()=>{
        const getData = async ()=>{
            const response = await axios.get('/order')
            setPedidos(response.data)
        }

        getData()
    },[])

    const toggleOrder = (pedidoId) => {
        setCurrentOrderId(pedidoId); 
        setShowOrder(!showOrder); 
    };

    return (
        <>
            <h1>Pedidos</h1>

            {pedido.map(pedido => (
                <Pedido key={pedido._id}>
                    <p onClick={() => toggleOrder(pedido._id)}>{pedido.user.name}</p>
                </Pedido>
            ))}
            {showOrder && (<Order toggleOrder={toggleOrder} orderId={currentOrderId}/>)}
        </>
    );
}