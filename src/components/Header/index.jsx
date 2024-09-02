import { Link } from 'react-router-dom'
import {FaHome, FaUserAlt, FaSignInAlt} from 'react-icons/fa'

import {Nav} from './styled'

export default function Header(){
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
        </Nav>
    ) 
}