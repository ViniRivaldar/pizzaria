import { useEffect, useState } from 'react'
import PropTypes from 'prop-types';

import { Modal, Form } from './styles'

export default function AddAddress({toggleAddress}){

    const[district, setDistrict] = useState('')
    const[street, setStreet] = useState('')
    const[number, setNumber] = useState(0)
    const[reference_point, setReference] = useState('')

    useEffect(()=>{
        const handleOutsideClick = (e) => {
            if (e.target.classList.contains('modal')) {
                toggleAddress();
            }
          };
      
          document.addEventListener('click', handleOutsideClick);
          return () => {
            document.removeEventListener('click', handleOutsideClick);
          };
    },[toggleAddress])

    return(
        <Modal className="modal">
            <div className='modal-content'>
                <span className="close" onClick={toggleAddress}>&times;</span>
                <h1>Endereço</h1>
                <Form>
                    <input 
                        type='text'
                        value={district}
                        onChange={e=> setDistrict(e.target.value)}
                        placeholder='Qual o seu bairro?'
                    />
                    <input
                        type='text'
                        value={street}
                        onChange={e=> setStreet(e.target.value)}
                        placeholder='Qual a sua Rua?'
                    />
                    <input 
                        type='number'
                        value={number}
                        onChange={e=>setNumber(e.target.value)}
                        placeholder='Qual o numero da sua casa?'
                    />
                    <input 
                        type='text'
                        value={reference_point}
                        onChange={e=>setReference(e.target.value)}
                        placeholder='Qual o ponto de refencia?'
                    />

                    <button type='submit'>Cadastrar endereço</button>
                </Form>                
            </div>
        </Modal>
    )
}

AddAddress.propTypes = {
    toggleAddress: PropTypes.func.isRequired,
};