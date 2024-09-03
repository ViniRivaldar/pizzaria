import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import store, {persistor} from './store'
import App from './App.jsx'
import GlobalStyles from './styles/GlobalStyles.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
        <GlobalStyles/>
      </PersistGate>
    </Provider>
  </StrictMode>,
)
