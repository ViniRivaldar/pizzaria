import { useParams } from 'react-router-dom'
import {useState, useEffect} from 'react'


import {Container} from '../../styles/GlobalStyles'
import {ContainerProducts, ContainerPictures} from './styles'
import axios from '../../services/axios'



export default function Produto(){
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
            <button>Adicionar ao carrinho</button>
        </Container>
    ) 
}