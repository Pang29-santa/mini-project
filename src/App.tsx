import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import NotFound from './components/NotFound'
import Home from './components/Home'
import MovieDetail from './components/MovieDetail'
import { store } from './store/store'
import { Provider } from 'react-redux'

function App() {
  document.title = 'OMDb API'
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <div className='header'>
            <Header />
          </div>
          <div className='container'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/movie/:id' element={<MovieDetail />} />
              <Route path='*' element={<NotFound/>} />
            </Routes>
          </div>
          <div className='footer'>
            <Footer />
          </div>
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
