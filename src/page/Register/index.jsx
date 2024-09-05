import { useState } from 'react'

import {Container} from '../../styles/GlobalStyles'
import { Form } from './styled'

export default function Register(){
    const[name, setName] = useState('')
    const[phone, setPhone] = useState('')
    const[email,setEmail]= useState('')
    const[password, setPassword] = useState('')
    return(
        <Container>
            <h1>Registro</h1>

            <Form>
                <input type='text' 
                    value={name} 
                    onChange={e=> setName(e.target.value)}
                    placeholder='Digite seu nome'
                />
                <input type='text'
                    value={phone}  
                    onChange={e=>setPhone(e.target.value)} 
                    placeholder='Digite seu WhatsApp'
                />
                <input type='text'
                    value={email}
                    onChange={e=>setEmail(e.target.value)}
                    placeholder='Digite um email'
                />
                <input type='text'
                    value={password}
                    onChange={setPassword}
                    placeholder='Digite uma senha'
                />
                <button type='submit'>Cadastrar</button>
            </Form>
        </Container>
    )
}