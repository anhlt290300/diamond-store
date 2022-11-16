import { faArrowRight, faBox, faChartBar, faDashboard, faGear, faMoneyBills, faSignOut, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getAuth, signOut } from 'firebase/auth'
import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '../image/logo.png'
const HeaderAdmin = () => {

    const auth = getAuth()

    const navigate = useNavigate()

    const pathname = useLocation().pathname.slice(useLocation().pathname.lastIndexOf('/') + 1)

    const dashboardRef = useRef(null)
    const ChartsRef = useRef(null)
    const productRef = useRef(null)
    const userRef = useRef(null)
    const billRef = useRef(null)
    const settingRef = useRef(null)

    const clear = () => {
        dashboardRef.current.classList.remove('active')
        ChartsRef.current.classList.remove('active')
        productRef.current.classList.remove('active')
        userRef.current.classList.remove('active')
        billRef.current.classList.remove('active')
        settingRef.current.classList.remove('active')
    }

    useEffect(() => {
        clear()
        if (pathname === 'dashboard') {
            dashboardRef.current.classList.add('active')
        } else if (pathname === 'chart') {
            ChartsRef.current.classList.add('active')
        }
        else if (pathname === 'products') {
            productRef.current.classList.add('active')
        }
        else if (pathname === 'bills') {
            billRef.current.classList.add('active')
        }
        else if (pathname === 'setting') {
            settingRef.current.classList.add('active')
        } else {
            userRef.current.classList.add('active')
        }
    }, [pathname])

    const active = (ref) => {
        clear()
        ref.current.classList.add('active')
    }

    const logOut = () => {
        signOut(auth).then(() => {

            navigate('/')

        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <div className='w-1/5 p-8 bg-backgrounditem h-screen text-black z-0'>
            <div className='flex justify-center items-center p-[1.25rem] border-b-2'>
                <img src={logo} alt="logo" className='h-[5rem]' />
                <p className='uppercase ml-4 text-xl font-bold'>diamond store</p>
            </div>

            <Link to='dashboard' className='flex justify-start items-center py-[1.25rem] border-b-2 h-[5rem] cursor-pointer hover:text-black'
                ref={dashboardRef}
                onClick={() => active(dashboardRef)}
            >
                <FontAwesomeIcon icon={faDashboard} className='text-2xl' />
                <p className='font-bold text-base ml-4'>Dashboard</p>
            </Link>

            <Link to='chart' className='py-[1.75rem] cursor-pointer hover:text-black inline-block w-full'
                ref={ChartsRef}
                onClick={() => active(ChartsRef)}
            >
                <div className='flex justify-between'>
                    <div className='flex justify-center items-center'>
                        <FontAwesomeIcon icon={faChartBar} className='w-[3rem] text-2xl' />
                        <p className='ml-[1rem]'>Charts</p>
                    </div>
                    <div className=''>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                </div>
            </Link>

            <Link to='products' className='py-[1.75rem] cursor-pointer hover:text-black inline-block w-full'
                ref={productRef}
                onClick={() => active(productRef)}
            >
                <div className='flex justify-between'>
                    <div className='flex justify-center items-center'>
                        <FontAwesomeIcon icon={faBox} className='w-[3rem] text-2xl' />
                        <p className='ml-[1rem]'>Products</p>
                    </div>
                    <div className=''>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                </div>
            </Link>

            <Link to='users' className='py-[1.75rem] cursor-pointer hover:text-black inline-block w-full'
                ref={userRef}
                onClick={() => active(userRef)}
            >
                <div className='flex justify-between'>
                    <div className='flex justify-center items-center'>
                        <FontAwesomeIcon icon={faUser} className='w-[3rem] text-2xl' />
                        <p className='ml-[1rem]'>Users</p>
                    </div>
                    <div className=''>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                </div>
            </Link>

            <Link to='bills' className='py-[1.75rem] cursor-pointer hover:text-black inline-block w-full'
                ref={billRef}
                onClick={() => active(billRef)}
            >
                <div className='flex justify-between'>
                    <div className='flex justify-center items-center'>
                        <FontAwesomeIcon icon={faMoneyBills} className='w-[3rem] text-2xl' />
                        <p className='ml-[1rem]'>Bills</p>
                    </div>
                    <div className=''>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                </div>
            </Link>

            <Link to='setting' className='py-[1.75rem] cursor-pointer hover:text-black border-b-2 inline-block w-full'
                ref={settingRef}
                onClick={() => active(settingRef)}
            >
                <div className='flex justify-between'>
                    <div className='flex justify-center items-center'>
                        <FontAwesomeIcon icon={faGear} className='w-[3rem] text-2xl' />
                        <p className='ml-[1rem]'>Settings</p>
                    </div>
                    <div className=''>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                </div>
            </Link>

            <div className='py-[1.75rem] cursor-pointer hover:text-black inline-block w-full'
                onClick={() => logOut()}
            >
                <div className='flex justify-between'>
                    <div className='flex justify-center items-center'>
                        <FontAwesomeIcon icon={faSignOut} className='w-[3rem] text-2xl' />
                        <p className='ml-[1rem]'>LogOut</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HeaderAdmin