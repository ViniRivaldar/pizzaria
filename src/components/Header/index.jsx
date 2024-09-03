import { Link } from 'react-router-dom'
import {useState} from 'react'
import {FaHome, FaUserAlt, FaSignInAlt, FaShoppingCart} from 'react-icons/fa'
import { useSelector } from 'react-redux';


import Carrinho from '../carrinho'
import {Nav, CartIconWrapper,CartBadge} from './styled'

export default function Header(){
    const[showCart, setShowCart]= useState(false)
    const produtos = useSelector(state => state.cart.carrinho)

    const toggleCart = ()=>{
        setShowCart(!showCart)

    }

    const totalItems = produtos.reduce((total, produto) => total + produto.quantidade, 0)

    return(
        <Nav>
            <Link to='/'>
                <FaHome size={24}/>
            </Link>
            <h1>logo da empresa</h1>
            <Link to='/register'>
                <FaUserAlt size={24}/>
            </Link>
            <Link to='/login'>
                <FaSignInAlt size={24}/>
            </Link>
            <CartIconWrapper onClick={toggleCart} style={{cursor:'pointer'}}>
                <FaShoppingCart size={24} style={{color:'#fff'}}/>
                {totalItems > 0 && <CartBadge>{totalItems}</CartBadge>}
            </CartIconWrapper>
            {showCart &&(<Carrinho toggleCart={toggleCart}/>)}
        </Nav>
    ) 
}