
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from './pages/user/Register'
import store from './store/store'
import { Provider } from 'react-redux'

function App() {


  return (
   <Provider store = {store}>
     <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Register />}/>
      </Routes>
    </BrowserRouter>
   </Provider>
  )
}

export default App
