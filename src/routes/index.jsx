import {Routes,Route} from 'react-router-dom'

import Home from '../page/Home'
import Produto from '../page/Produto'
import Register from '../page/Register'
import Login from '../page/Login'
import Orders from '../page/orders'
import Notfound from '../page/NotFound'
import MyRoute from './MyRoutes';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<MyRoute element={Home} />}/>
            <Route path='/produto/:id' element={<MyRoute element={Produto} />}/>
            <Route path='/register' element={<MyRoute element={Register} />}/>
            <Route path='/login' element={<MyRoute element={Login} />}/>
            <Route path='/orders' element={<MyRoute element={Orders} isClosed />}/>
            <Route path='*' element={<Notfound/>}/>
        </Routes>
    )
}