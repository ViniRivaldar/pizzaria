import * as types from '../types'

export function addCart(payload) {
    return {
        type: types.adicionar_produto_carrinho,
        payload,
    };
}