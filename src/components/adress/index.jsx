import { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import { toast } from 'react-toastify'

import { Modal, Form } from './styles'
import axios from '../../services/axios'
import { useSelector } from 'react-redux';

export default function AddAddress({toggleAddress}){

    const [district, setDistrict] = useState('')
    const [street, setStreet] = useState('')
    const [number, setNumber] = useState('')
    const [reference_point, setReference] = useState('')
    const [address, setAddress] = useState([])
    const [index, setIndex] = useState(null)

    const id = useSelector(state => state.auth.user._id)

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (e.target.classList.contains('modal')) {
                toggleAddress();
            }
        };

        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [toggleAddress])

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if (index !== null) {
                const response = await axios.put('/address', {
                    addressId : address[0]._id,
                    index,
                    district,
                    street,
                    number,
                    reference_point
                })

                if (response.status === 200) { 
                    toast.success('Endereço editado com sucesso')
                }
            } else {
                const response = await axios.post('/address', {
                    district,
                    street,
                    number,
                    reference_point
                })

                if (response.status === 201) {
                    toast.success('Endereço adicionado com sucesso')
                }
            }
            toggleAddress()
        } catch (err) {
            console.error(err)
            toast.error('Erro ao adicionar ou editar o endereço')
        }
    }

    useEffect(() => {
        async function getData() {
            try {
                const response = await axios.get('/users')
                const dataAddress = response.data.address
                
                if (dataAddress.length > 0) {
                    setAddress(dataAddress)
                    setIndex(0) 
                    setDistrict(dataAddress[0].district)
                    setStreet(dataAddress[0].street)
                    setNumber(dataAddress[0].number)
                    setReference(dataAddress[0].reference_point)
                }
            } catch (err) {
                console.error(err)
            }
        }
        getData()
    }, []) 

    const handleDelete = async () => {
        if (!id || index === null) {
            toast.error('Ação não permitida ou índice não definido')
            return;
        }

        try {
            await axios.delete('/address', {
                data: { index } 
            })

            toast.success('Endereço apagado com sucesso')
            toggleAddress()
        } catch (err) {
            console.log(err)
            toast.error('Erro ao deletar endereço')
        }
    }

    return (
        <Modal className="modal">
            <div className='modal-content'>
                <span className="close" onClick={toggleAddress}>&times;</span>
                <div className='header'>
                    <h1>Endereço</h1>
                    {address.length > 0 && <a onClick={handleDelete}>Excluir endereço</a>}
                </div>

                <Form onSubmit={handleSubmit}>
                    <input 
                        type='text'
                        value={district}
                        onChange={e => setDistrict(e.target.value)}
                        placeholder='Qual o seu bairro?'
                    />
                    <input
                        type='text'
                        value={street}
                        onChange={e => setStreet(e.target.value)}
                        placeholder='Qual a sua Rua?'
                    />
                    <input 
                        type='number'
                        value={number}
                        onChange={e => setNumber(e.target.value)}
                        placeholder='Qual o numero da sua casa?'
                    />
                    <input 
                        type='text'
                        value={reference_point}
                        onChange={e => setReference(e.target.value)}
                        placeholder='Qual o ponto de referência?'
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
