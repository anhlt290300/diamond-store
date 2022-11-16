import React from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Products from './pages/Products'
import ProductType from './pages/ProductType'

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
import HeaderAdmin from './component/HeaderAdmin'
import DashBoard from './component/DashBoard'
import ChartsAdmin from './component/ChartsAdmin'
import BillsAdmin from './component/BillsAdmin'
import UsersAdmin from './component/UsersAdmin'
import Setting from './component/Setting'
import ProductsAdmin from './component/ProductsAdmin'

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
        <div className='flex relative z-50'>
            <HeaderAdmin />
            <Outlet />
        </div>
    )
}

const App = () => {

    const { currentUser } = useContext(AuthContext)
    //console.log((currentUser))

    const ProtectedRouterUser = ({ children }) => {
        if (!currentUser) {
            return <Navigate to='/dang-nhap' />
        } else {
            return <>{children}</>
        }
    }

    const ProtectedRouterAdmin = ({ children }) => {
        if (!currentUser) {
            <Navigate to='/dang-nhap' />
        } else {
            return <>{children}</>
        }
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
                    
                    <Route path='/dang-nhap' element={<CustomerZone />} />
                </Route>
                <Route element={<AdminLayout />}>

                </Route>
                <Route path='/nguoi-dung' element={<ProtectedRouterUser><UserDetail /></ProtectedRouterUser>} >
                    <Route path='order' element={<UserOrder />} />
                    <Route path='profile' element={<UserProfile />} />
                    <Route path='addresses' element={<UserAddress />} />
                    <Route path='order/:billID' element={<BillDetail />} />
                </Route>
                <Route path='/quan-li' element={<ProtectedRouterAdmin><AdminLayout /></ProtectedRouterAdmin>}>
                    <Route path='dashboard' element={<DashBoard />} />
                    <Route path='chart' element={<ChartsAdmin />} />
                    <Route path='bills' element={<BillsAdmin />} />
                    <Route path='users' element={<UsersAdmin />} />
                    <Route path='setting' element={<Setting />} />
                    <Route path='products' element={<ProductsAdmin />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App