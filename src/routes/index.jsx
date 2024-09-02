import {Routes,Route} from 'react-router-dom'

import Home from '../page/Home'
import Produto from '../page/Produto'
import Register from '../page/Register'
import Login from '../page/Login'
import Notfound from '../page/NotFound'

export default function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/produto/:id' element={<Produto/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='*' element={<Notfound/>}/>
        </Routes>
    )
}