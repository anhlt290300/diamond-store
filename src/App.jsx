import React from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Products from './pages/Products'
import ProductType from './pages/ProductType'
import ProductDetail from './pages/ProductDetail'
import Buy from './pages/Buy'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
const UserLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

const AdminLayout = () => {
    return (
        <div>

        </div>
    )
}

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<UserLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/danh-muc" element={<Products />} />
                    <Route path="/danh-muc/:type" element={<ProductType />} />
                    <Route path="/gio-hang" element={<Cart />} />
                    <Route path="/thanh-toan" element={<Buy />} />
                    <Route path="/san-pham/:id" element={<ProductDetail />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App