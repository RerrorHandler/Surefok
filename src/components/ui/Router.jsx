import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../../screens/home/Home'
import About from '../../screens/about/About'
import Delivery from '../../screens/delivery/Delivery'
import Warranty from '../../screens/warranty/Warranty'
import Configurator from '../../screens/Configurator/Configurator'
import Cart from '../../screens/cart/Cart'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path='/' />
                <Route element={<About />} path='/about/' />
                <Route element={<Delivery />} path='/delivery' />
                <Route element={<Warranty />} path='/warranty' />
                <Route element={<Cart />} path='/Cart' />
                {/* <Route element={<CarDetail />} path='/car/:id' /> */}
                <Route element={<Configurator />} path='/configurator' />
                <Route path='*' element={<div>Not found</div>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router