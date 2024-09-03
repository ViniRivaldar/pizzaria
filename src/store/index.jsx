import { configureStore } from '@reduxjs/toolkit'

import rootReducer from './modules/rootReduce'

const store = configureStore({
    reducer: rootReducer
})

export default store

