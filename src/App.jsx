import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';

import Header from './components/Header'
import Routes from './routes'



function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes/>
      <ToastContainer autoClose={3000} className="toast-container" />
    </BrowserRouter>
  )
}

export default App
