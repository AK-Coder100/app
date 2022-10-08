import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import MyComponent from './MyComponent'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/comp' element={<MyComponent />}/>
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
)
