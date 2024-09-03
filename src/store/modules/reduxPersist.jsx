import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'


const reducerPersist = reducers =>{
    const persist = persistReducer(
    {
        key:'pizzaria',
        storage,
        whitelist:['cart']
    },reducers)

    return persist
}

export default reducerPersist