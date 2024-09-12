import { useState } from 'react'

import { Container } from '../../styles/GlobalStyles'
import { Painel } from './styles'
import Produtos from '../../components/produtos'
import Pedidos from '../../components/pedidos'

export default function Adm(){

    const [activeComponent, setActiveComponent] = useState('pedidos');



    return(
        <Container>
            <h1 style={{textAlign:'center'}}>Painel de administrador</h1>
            <Painel>
                <nav>
                    <p onClick={() => setActiveComponent('pedidos')}>Pedidos</p>
                    <p onClick={() => setActiveComponent('produtos')}>Produtos</p>
                </nav>
                <div>
                    {activeComponent === 'pedidos' && <Pedidos />}
                    {activeComponent === 'produtos' && <Produtos />}
                </div>
            </Painel>
        </Container>
    )
}