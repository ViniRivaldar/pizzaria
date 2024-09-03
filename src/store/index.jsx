import { configureStore} from '@reduxjs/toolkit'
import createSagaMiddleware  from 'redux-saga'
import { persistStore } from 'redux-persist'

import rootReducer from './modules/rootReduce'
import RootSaga from './modules/rootSaga'
import ReduxPersist from './modules/reduxPersist'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: ReduxPersist(rootReducer),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
            },
        }).concat(sagaMiddleware),
})

sagaMiddleware.run(RootSaga)


export const persistor = persistStore(store)
export default store
