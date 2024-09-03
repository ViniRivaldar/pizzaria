import * as types from '../types'

export function addCart(payload) {
    return {
        type: types.adicionar_produto_carrinho,
        payload,
    };
}

export function removeCart(id) {
    return {
        type: types.remover_produto_carrinho,
        payload: { id },
    };
}

export function clearCart() {
    return {
        type: types.limpar_carrinho,
    };
}

export const updateCart = (id, quantidade) => ({
    type: types.UPDATE_CART,
    payload: { id, quantidade },
});