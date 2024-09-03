import {  put, takeLatest } from 'redux-saga/effects';
import * as types from '../types';
import * as actions from './actions';

function* adicionarProdutoSaga(action) {
    try {
        yield put(actions.addCart(action.payload));
    } catch (error) {
        console.error('Erro ao adicionar produto ao carrinho:', error);
    }
}

function* removerProdutoSaga(action) {
    try {
        yield put(actions.removeCart(action.payload));
    } catch (error) {
        console.error('Erro ao remover produto do carrinho:', error);
    }
}

function* limparCarrinhoSaga() {
    try {
        yield put(actions.clearCart());
    } catch (error) {
        console.error('Erro ao limpar o carrinho:', error);
    }
}

export default function* watchCarrinhoActions() {
    yield takeLatest(types.adicionar_produto_carrinho, adicionarProdutoSaga);
    yield takeLatest(types.remover_produto_carrinho, removerProdutoSaga);
    yield takeLatest(types.limpar_carrinho, limparCarrinhoSaga);
}
