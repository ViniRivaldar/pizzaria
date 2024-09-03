import { configureStore} from '@reduxjs/toolkit'
import createSagaMiddleware  from 'redux-saga'

import rootReducer from './modules/rootReduce'
import RootSaga from './modules/rootSaga'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(RootSaga)

export default store

