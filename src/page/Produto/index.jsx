import { Link, useParams } from 'react-router-dom'
import {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'


import {Container} from '../../styles/GlobalStyles'
import {ContainerProducts, ContainerPictures} from './styles'
import axios from '../../services/axios'
import * as actions from '../../store/modules/cart/actions'



export default function Produto(){
    const dispatch = useDispatch()
    const isLoggedIn = useSelector(state=>state.auth.user._id)
    const {id} = useParams()
    const[product, setProduct] = useState(null)
    

    useEffect(()=>{
        if (!id) return

        const getData = async ()=>{
            const response = await axios.get(`/product/${id}`)
            setProduct(response.data)
        }
        getData()

    },[id])

    if (!product) {
        return <p>Loading...</p>
    }

    const formatPrice = (price) => {
        return price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        });
    }

    const handleAddToCart = ()=>{
        dispatch(actions.addCart({
            id: product._id,
            name: product.name,
            price: product.price,
            description: product.description,
            imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTosf9DrL7LNKEdcQkD6jKNt7jLE68JZC9w0jsIduelte7L8VeM6no8EjosXDYeLM1eztA&usqp=CAU'
        }))
        
    }

    return(
        <Container>
            <ContainerProducts>
                <h1>{product.name}</h1>
                <ContainerPictures>
                    <p>{product.description}</p>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTosf9DrL7LNKEdcQkD6jKNt7jLE68JZC9w0jsIduelte7L8VeM6no8EjosXDYeLM1eztA&usqp=CAU'/>
                </ContainerPictures>
                <p>{formatPrice(product.price)}</p>
            </ContainerProducts>
            {!isLoggedIn ? (
                <span>Para seguir comprando, <Link to='/login'>vá para a página de login</Link> </span>
            ) : (
                <button onClick={handleAddToCart}>Adicionar ao carrinho</button>)
                
            }
        </Container>
    ) 
}