import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { Container } from '../../styles/GlobalStyles'
import axios from '../../services/axios'
import { Usuario, Produto, Pedidos,Titulos } from './style'
import Address from '../../components/adress'
import * as actions from '../../store/modules/cart/actions'



export default function Orders(){
    const[user, setUser]= useState({})
    const[showAddress, setShowAddress] = useState(false)
    const [restrictions, setRestrictions] = useState({})

    const id = useSelector(state=> state.auth.user._id)
    const produtos = useSelector(state=> state.cart.carrinho)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(()=>{
        const getData = async ()=>{
            if(!id){
                toast.error('Ação não permitida')
            }

            try {
                const response = await axios.get('/users');
                setUser(response.data);
              } catch (err) {
                console.log(err)
                toast.error('Erro ao carregar os dados do usuário');
              }
        }
        
        getData()
    },[id])

    if (!user) {
        return <p>Carregando...</p>;
    }


    const toggleAddress = ()=>{
        setShowAddress(!showAddress)
    }

    const formatPrice = (price) => {
        return price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        });
    };

    const calculateOrderTotal = () => {
        return produtos.reduce((acc, produto) => acc + (produto.price * produto.quantidade), 0);
    }

    const handleRestrictionChange = (productId, value)=>{
        setRestrictions({
            ...restrictions,
            [productId]: value
        })
    }

    const handleOrderSubmit = async ()=>{
        const orderData = {
            products: produtos.map(produto => ({
                id: produto.id,
                quantity: produto.quantidade,
                restrition: restrictions[produto._id] || '',
            })),
            total: calculateOrderTotal()
        }
        
        try {
            await axios.post('/order', orderData);
            toast.success('Pedido realizado com sucesso!')
            dispatch(actions.clearCart())
            navigate('/order')
        }catch (err){
            console.error('Erro ao enviar pedido:', err);
            toast.error('Erro ao realizar o pedido.');
        }
    }

    const formatPhoneNumber = (phone) => {
        if (!phone) return '';
        const cleaned = phone.replace(/\D/g, ''); 
        const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/); 
        if (match) {
            return `(${match[1]}) ${match[2]}-${match[3]}`;
        }
        return phone;
    };

    return(
        <Container>
            <h1 style={{textAlign:"center"}}>Faça seu pedido</h1>
            <Usuario>
                <Titulos>Para quem vamos entregar?</Titulos>
                <div className='users' key={user._id}>
                    <p>Nome: {user.name}</p>
                    <p>WhatsApp: {formatPhoneNumber(user.phone)}</p>
                </div>
                <Titulos>Endereço</Titulos>
                <div className='address'>
                    
                    {user.address && user.address.length > 0 ? (
                        <>
                            <p>Bairro: {user.address[0].district}</p>
                            <p>Rua: {user.address[0].street}</p>
                            <p>Número da casa: {user.address[0].number}</p>
                            <p>Ponto de Referência: {user.address[0].reference_point}</p>
                        </>
                    ) : (
                        <>
                            <button onClick={toggleAddress} style={{cursor:"pointer"}}>
                                adicionar novo endereço        
                            </button>
                            {showAddress && <Address toggleAddress={toggleAddress} />}
                        </>
                    )}
                </div>
            </Usuario>
            <Titulos style={{marginTop:"8px"}}>Seu pedido</Titulos>
            <Produto>
                {produtos.map((produto) =>(
                    <div className='cart' key={produto.id}>
                        <h3>{produto.name}</h3>
                        <input
                            type='text'
                            value={restrictions[produto._id] || ''} 
                            onChange={e => handleRestrictionChange(produto._id, e.target.value)}
                            placeholder='O que você quer retirar da sua pizza?'
                        />
                        <p>Preço unit: {formatPrice(produto.price)}</p>
                        <p>Quantidade:{produto.quantidade}</p>
                        <p>Total: {formatPrice(produto.price * produto.quantidade)}</p>
                    </div>                
                ))}
            </Produto>
            <Pedidos>
                <Titulos>Concluindo seu pedido</Titulos>
                <div className='finalizando'>
                    <p>Total do Pedido: {formatPrice(calculateOrderTotal())} </p>
                    <button onClick={handleOrderSubmit}>Fazer pedido</button>
                </div>
            </Pedidos>
        </Container>
    )
}