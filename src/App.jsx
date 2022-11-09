import React from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Products from './pages/Products'
import ProductType from './pages/ProductType'
import ProductDetail from './pages/ProductDetail'
import Buy from './pages/Buy'
import CustomerZone from './pages/CustomerZone'
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom'
import User from './pages/User'
import UserOrder from './component/UserOrder'
import UserProfile from './component/UserProfile'
import UserAddress from './component/UserAddress'
import BillDetail from './component/BillDetail'
import { useContext } from 'react'
import { AuthContext } from './AuthContext'






const UserLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

const UserDetail = () => {

    return (
        <div>
            <Header />
            <User>
                <Outlet />
            </User>
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

    const { currentUser } =  useContext(AuthContext)
    console.log((currentUser))    

    const ProtectedRouter = ({ children }) => {
        // if (currentUser) {
        //     return <Navigate to='/dang-nhap' />
        // } else {
            return <>{children}</>
        //}
    }

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
                    <Route path='/dang-nhap' element={<CustomerZone />} />
                </Route>
                <Route element={<AdminLayout />}>

                </Route>
                <Route path='/nguoi-dung' element={<ProtectedRouter><UserDetail /></ProtectedRouter>} >
                    <Route path='order' element={<UserOrder />} />
                    <Route path='profile' element={<UserProfile />} />
                    <Route path='addresses' element={<UserAddress />} />
                    <Route path='order/:billID' element={<BillDetail />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App