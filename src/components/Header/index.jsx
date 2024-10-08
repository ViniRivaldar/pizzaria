import { Link, useNavigate } from 'react-router-dom'
import {useState} from 'react'
import {FaHome, FaUserAlt, FaSignInAlt, FaShoppingCart, FaPowerOff} from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux';


import Carrinho from '../carrinho'
import {Nav, CartIconWrapper,CartBadge} from './styled'
import * as actions from '../../store/modules/auth/actions'

export default function Header(){
    const[showCart, setShowCart]= useState(false)
    const produtos = useSelector(state => state.cart.carrinho)
    const id = useSelector(state=>state.auth.user._id)
    const adm = useSelector(state=>state.auth.user.admin)
    const cart = useSelector(state=>state.cart.carrinho)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const toggleCart = ()=>{
        setShowCart(!showCart)

    }

    const totalItems = produtos.reduce((total, produto) => total + produto.quantidade, 0)

    const handleClick= ()=>{
        dispatch(actions.LoginFailure())
        navigate('/')
    }

    return(
        <Nav>
            <Link to='/'>
                <FaHome size={24}/>
            </Link>
            <h1>logo da empresa</h1>
            <Link to='/register'>
                <FaUserAlt size={24}/>
            </Link>
            {!id ?(
                <Link to='/login'>
                    <FaSignInAlt size={24}/>
                </Link>
            ):
            (
             <>

                <FaPowerOff 
                    size={24} 
                    style={{color:"#fff", cursor:'pointer'}}
                    onClick={handleClick}
                />
                {cart.length > 0 &&(
                    <CartIconWrapper onClick={toggleCart} style={{cursor:'pointer'}}>
                        <FaShoppingCart size={24} style={{color:'#fff'}}/>
                        {totalItems > 0 && <CartBadge>{totalItems}</CartBadge>}
                    </CartIconWrapper>
                    
                )}
                {showCart &&(<Carrinho toggleCart={toggleCart}/>)}
                
                <div className='pedidos'>
                    {adm &&(<Link to='/adm'>Painel de Administrador</Link>)}
                    <Link to='/order'>Seus pedidos</Link>
                </div>
             </>   
            )}
        </Nav>
    ) 
}