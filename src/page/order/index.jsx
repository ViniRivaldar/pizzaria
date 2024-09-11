import { useState, useEffect } from 'react';
import axios from '../../services/axios';
import { Container } from '../../styles/GlobalStyles';
import { Pedidos } from './style';

export default function Orders() {
    const [pedidos, setPedidos] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const response = await axios.get('/order');
            let pedidosData = response.data;

            const removedPedidos = JSON.parse(localStorage.getItem('removedPedidos')) || [];
            
            
            pedidosData = pedidosData.filter(pedido => !removedPedidos.includes(pedido._id));
            
            setPedidos(pedidosData);
        };

        getData();
    }, []);

    const formatPrice = (price) => {
        return price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        });
    };

    const removePedido = (pedidoId) => {
        setPedidos((prevPedidos) => prevPedidos.filter(pedido => pedido._id !== pedidoId));

        const removedPedidos = JSON.parse(localStorage.getItem('removedPedidos')) || [];
        removedPedidos.push(pedidoId);
        localStorage.setItem('removedPedidos', JSON.stringify(removedPedidos));
    };

    return (
        <Container>
            <h1>Pedidos</h1>
            <Pedidos>
                {pedidos.map((pedido) => (
                    <div className='pedidos' key={pedido._id}> 
                        <span className="close" onClick={() => removePedido(pedido._id)}>&times;</span>
                        <h2>Nome: {pedido.user.name}</h2> 
                        
                        <h3>Pedido</h3>
                      
                        {pedido.products.map((produto) => (
                            <div key={produto._id}>
                                <p>Nome do Produto: {produto.name}</p>
                                <p>Preço: {formatPrice(produto.price)}</p>
                                <p>Quantidade: {produto.quantity}</p>
                            </div>
                        ))}
                        <p className='total'> Total: {formatPrice(pedido.total)}</p>
                        <p className='status'>{pedido.status}</p>
                    </div>
                ))}
            </Pedidos>
        </Container>
    );
}
