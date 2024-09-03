import * as types from '../types'

export function addCart(payload) {
    return {
        type: types.adicionar_produto_carrinho,
        payload,
    };
}

export function removeCart(payload) {
    return {
        type: types.remover_produto_carrinho,
        payload,
    };
}

export function clearCart() {
    return {
        type: types.limpar_carrinho,
    };
}