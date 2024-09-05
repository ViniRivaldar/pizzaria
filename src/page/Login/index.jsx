import {useState} from 'react'
import * as yup from 'yup'
import {toast} from 'react-toastify'
import { useDispatch,useSelector } from 'react-redux'
import{get} from 'lodash'

import {Container} from '../../styles/GlobalStyles'
import {Form} from './styled'
import * as actions from '../../store/modules/auth/actions'
import Loading from '../../components/loading'



export default function Login(props){

    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

    const dispatch = useDispatch()
   
    const prevPath = get(props, 'location.state.prevPath', '/')

    const isLoading = useSelector(state=>state.auth.isLoading)    

    const handleSubmit = (e)=>{
        e.preventDefault()

        const schema = yup.object().shape({
            email: yup.string().required('Email obrigatório').email('Email invalido'),
            password: yup.string().required('Senha é obrigatório').min(6,'No minimo 6 caracteres')
        })

        try{
            schema.validateSync({email, password},{abortEarly: false})
            dispatch(actions.loginRequest({email, password, prevPath}))
        }catch(err){
            if (err instanceof yup.ValidationError) {
                err.inner.forEach((error) => {
                    toast.error(error.message);
                });
            }
        }
        
    }
    return(
        <Container>
            <Loading isLoading={isLoading}/>
            <h1 style={{textAlign:'center'}}>Login</h1>
            <Form onSubmit={handleSubmit}>
                <input 
                    type='text' 
                    value={email}
                    onChange={e=> setEmail(e.target.value)}
                    placeholder='Digite seu Email'
                />
                <input 
                    type='password' 
                    value={password}
                    onChange={e=> setPassword(e.target.value)}
                    placeholder='Digite sua Senha'
                />
                <button type='submit'>Entrar</button>
            </Form>
        </Container>
    )
}
