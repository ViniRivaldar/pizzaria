import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import axios from '../../services/axios';
import Loading from '../../components/loading';
import { Container } from '../../styles/GlobalStyles';
import { ContainerProducts, ResponsiveImage } from './styles';
import pizzariaImage from '../../assets/pizzaria.jpg';

export default function Home() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getData = async () => {
            setIsLoading(true);
            const response = await axios.get('/product');
            setProducts(response.data);
            setIsLoading(false);
        };
        getData();
    }, [setIsLoading]);

    const formatPrice = (price) => {
        return price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        });
    };


    return (
        <>
            <Container>
                <ResponsiveImage src={pizzariaImage} />
                <Loading isLoading={isLoading} />
                {products.map((produtos) => (
                    <ContainerProducts key={produtos._id}>
                        <h1>{produtos.category && produtos.category.map(categoria => categoria.name).join(', ')}</h1>
                        <Link to={`/produto/${produtos._id}`}>
                            <h2>{produtos.name}</h2>
                            <p>{formatPrice(produtos.price)}</p>
                        </Link>
                    </ContainerProducts>
                ))}
            </Container>
        </>
    );
}
