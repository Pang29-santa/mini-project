import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import NotFound from './components/NotFound'

function App() {
  return (
    <>
      <BrowserRouter>
        <div className='header'>
          <Header />
        </div>
        <div className='contianer'>
          <Routes>
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
        <div className='footer'>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
