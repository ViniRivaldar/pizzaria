import * as types from '../types'

const initialState = {
    carrinho: []
}
export default function reducer(state = initialState, actions){
    switch (actions.type){
        case types.adicionar_produto_carrinho: {
            const produtoExistente = state.carrinho.find(produto => produto.id === actions.payload.id)
            if (produtoExistente) {
                return {
                    ...state,
                    carrinho: state.carrinho.map(produto =>
                      produto.id === actions.payload.id
                        ? { ...produto, quantidade: produto.quantidade + 1 }
                        : produto
                    )
                }
            } return {
                ...state,
                carrinho: [...state.carrinho, { ...actions.payload, quantidade: 1 }]  
            }
        }

        case types.remover_produto_carrinho: {
            return {
                ...state,
                carrinho: state.carrinho.filter(produto => produto.id !== actions.payload.id)
            };
        }

        case types.limpar_carrinho: {
            return {
                ...state,
                carrinho: []
            };
        }
        case types.UPDATE_CART:{
                return {
                    ...state,
                    carrinho: state.carrinho.map(produto => 
                        produto.id === actions.payload.id ?
                            { ...produto, quantidade: actions.payload.quantidade }: produto),
            };

        }

        default: 
            return state
    }
}