import './App.css'
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Cart from './pages/Cart/Cart';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/carrinho' element={<Cart />} />
      </Routes >
      <Footer />
    </>
  )
}

export default App
