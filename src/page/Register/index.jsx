import { useEffect, useState } from 'react'
import * as yup from 'yup'
import {toast} from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { get } from 'lodash'


import {Container} from '../../styles/GlobalStyles'
import { Form } from './styled'
import Loading from '../../components/loading'
import * as actions from '../../store/modules/auth/actions'
import axios from '../../services/axios'

export default function Register(){
    const[name, setName] = useState('')
    const[phone, setPhone] = useState('')
    const[email,setEmail]= useState('')
    const[password, setPassword] = useState('')

    const dispatch = useDispatch()
    const isLoading = useSelector(state => state.auth.isLoading)
    const id = useSelector(state=>state.auth.user._id)
    const nameStorage = useSelector(state=>state.auth.user.name)
    const phoneStorage = useSelector(state=> state.auth.user.phone)
    const emailStorage = useSelector(state => state.auth.user.email)
    

    useEffect(()=>{
        if(!id) return
        setEmail(emailStorage)
        setName(nameStorage)
        setPhone(phoneStorage)
    },[id,nameStorage,phoneStorage,emailStorage])

    const handleSubmit = e=>{
        e.preventDefault()

        const schema = yup.object().shape({
            name:yup.string(). required('Nome obrigatório'), 
            phone: yup.string().required('WhatsApp é obrigatório').min(11,'whatsApp inválido'), 
            email:yup.string().required('Email é obrigatório').email('Email invalido'), 
            password:yup.string().required('Senha obrigatória').min(6, 'Senha com no mínimo 6 caracteres')
        })

        try {
            schema.validateSync({name, phone, email, password},{abortEarly:false})
            dispatch(actions.registerRequest({ id,name, phone, email, password}))
        } catch (err) {
            if (err instanceof yup.ValidationError) {
                err.inner.forEach((error) => {
                    toast.error(error.message);
                });
            }
        }


    }

    const handleDelete = async ()=>{
        try {
            if(!id){
                toast.error("Ação não permitida")
            }

            await axios.delete('/users')

            toast.success('Conta apagada com sucesso!');

            dispatch(actions.LoginFailure())

        } catch (err) {
            const errors = get(err, 'response.data.errors', [])
            const status = get(err, 'response.status', 0)
        
            if(status === 400){
              toast.error('Você precisa fazer o login novamente')
              dispatch(actions.LoginFailure())
              window.location.href = '/login'
              return 
            }

            if(errors.length > 0){
                errors.map(error => toast.error(error))
            }else{
                toast.error('Erro desconhecido')
            }
        }

    } 

    return(
        <Container>
            <Loading isLoading={isLoading}/>

            <h1 style={{textAlign:'center',marginBottom:'30px'}}>{id ? 'Editar conta' :'Registro'}</h1>
            {id && <a style={{cursor:'pointer'}} onClick={handleDelete}>Apagar conta</a>}

            <Form onSubmit={handleSubmit}>
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
                    onChange={e=>setPassword(e.target.value)}
                    placeholder='Digite uma senha'
                />
                <button type='submit'>{id ? 'Salvar' :'Cadastrar'}</button>
            </Form>
        </Container>
    )
}