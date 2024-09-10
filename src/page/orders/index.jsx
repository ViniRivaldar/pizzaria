import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'

import { Container } from '../../styles/GlobalStyles'
import axios from '../../services/axios'
import { Usuario, Produto, Pedidos,Titulos } from './style'
import Address from '../../components/adress'



export default function Orders(){
    const[user, setUser]= useState({})
    const[showAddress, setShowAddress] = useState(false)
    const id = useSelector(state=> state.auth.user._id)
    // const produtos = useSelector(state=> state.cart.carrinho)
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
    return(
        <Container>
            <h1 style={{textAlign:"center"}}>Faça seu pedido</h1>
            <Usuario>
                <Titulos>Para quem vamos entregar?</Titulos>
                <div className='users' key={user._id}>
                    <p>Nome: {user.name}</p>
                    <p>WhatsApp: {user.phone}</p>
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
            <Produto>
                <Titulos>Seu pedido</Titulos>

                <div className='cart'>
                    <p>produto</p>
                    <p>Quantidade: 30</p>
                    <p>Total: 100,00</p>
                </div>
                <div className='cart'>
                    <p>produto</p>
                    <p>Quantidade: 30</p>
                    <p>Total: 100,00</p>
                </div>
                <div className='cart'>
                    <p>produto</p>
                    <p>Quantidade: 30</p>
                    <p>Total: 100,00</p>
                </div>
                
            </Produto>
            <Pedidos>
                <Titulos>Concluindo seu pedido</Titulos>
                <div className='finalizando'>
                    <p>Total: </p>
                    <button>Fazer pedido</button>
                </div>
            </Pedidos>
        </Container>
    )
}