import { Link } from 'react-router-dom'
import {useState} from 'react'
import {FaHome, FaUserAlt, FaSignInAlt, FaShoppingCart} from 'react-icons/fa'
import Carrinho from '../carrinho'
import {Nav} from './styled'

export default function Header(){
    const[showCart, setShowCart]= useState(false)

    const toggleCart = ()=>{
        setShowCart(!showCart)

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
            <Link to='/login'>
                <FaSignInAlt size={24}/>
            </Link>
            <div onClick={toggleCart}>
                <FaShoppingCart size={24} style={{color:'#fff'}}/>
            </div>
            {showCart &&(<Carrinho toggleCart={toggleCart}/>)}
        </Nav>
    ) 
}