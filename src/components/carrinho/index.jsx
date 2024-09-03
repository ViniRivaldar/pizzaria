import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { FaTrash } from 'react-icons/fa';
import { Modal } from './styled';
import { useEffect, useMemo } from 'react';
import * as actions from '../../store/modules/cart/actions';

export default function Carrinho({ toggleCart }) {
  const produtos = useSelector(state => state.cart.carrinho);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (e.target.classList.contains('modal')) {
        toggleCart();
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [toggleCart]);

  const handleDelete = (id) => {
    dispatch(actions.removeCart(id));
  };

  const handleClean = () => {
    dispatch(actions.clearCart());
  };

  const handleDecrement = (id, quantidade) => {
    if (quantidade > 1) {
      dispatch(actions.updateCart(id, quantidade - 1));
    }
  };

  const handleIncrement = (id, quantidade) => {
    dispatch(actions.updateCart(id, quantidade + 1));
  };

  const totalCarrinho = useMemo(() => {
    return produtos.reduce((total, produto) => {
      return total + (produto.quantidade * produto.price); // Calcula o total de cada produto e soma ao total
    }, 0);
  }, [produtos]);

  return (
    <Modal className="modal">
      <div className="modal-content">
        <span className="close" onClick={toggleCart}>&times;</span>

        <div className='header'>
          <h1>CARRINHO</h1>
          <span className="clear-cart" onClick={handleClean}>limpar carrinho</span>
        </div>

        <ul>
          {produtos.map(produto => (
            <li key={produto.id}>
              <h2>{produto.name}</h2>
              <div className='produto'>
                <img src={produto.imageUrl} alt={produto.name} width="50" />
                <p>{produto.description}</p>
                <div className="quantidade-control">
                  <a onClick={() => handleDecrement(produto.id, produto.quantidade)}>-</a>
                  <span>{produto.quantidade}</span>
                  <a onClick={() => handleIncrement(produto.id, produto.quantidade)}>+</a>
                </div>
                <p>
                  x {(produto.quantidade * produto.price).toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </p>
                <FaTrash size={24} style={{ cursor: 'pointer' }} onClick={() => handleDelete(produto.id)} />
              </div>
            </li>
          ))}
        </ul>

        <div className='comprar'>
          <p>Total: {totalCarrinho.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}</p>
          <button>Comprar</button>
        </div>
      </div>
    </Modal>
  );
}

Carrinho.propTypes = {
  toggleCart: PropTypes.func.isRequired,
};
