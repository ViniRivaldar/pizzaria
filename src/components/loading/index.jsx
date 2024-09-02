import PropTypes from 'prop-types'

import { Container } from "./styled";

export default function Loading({isLoading=false}){
    if(!isLoading) return <></>

    return(
        <Container>
            <div/>
            <span>Logo da empresa</span>
        </Container>
    )
}

Loading.propTypes = {
    isLoading: PropTypes.bool,
}