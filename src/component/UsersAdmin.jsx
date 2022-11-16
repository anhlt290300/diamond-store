import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { collection, getDocs } from 'firebase/firestore'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { db_ } from '../firebase/config'
import Helmet from './Helmet'
import TitlePage from './TitlePage'



const UsersAdmin = () => {

  const [data, setData] = useState([])

  const getData = async () => {

    try {
      const querySnapshot = await getDocs(collection(db_, "users"));
      const arr = []
      querySnapshot.docs.forEach((doc) => {
        if (doc.data().key !== 'admin') {
          arr.push(doc.data())
        }
      })

      setData(arr)
      //console.log(arr)
    }
    catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className='w-4/5 h-screen'>
      <Helmet title='Admin - Users'>

        <div className='py-[3rem]'>

          <TitlePage
            link1='dashboard'
            path1='/quan-li/dashboard'
            link2='users'
          />

          <p className='uppercase text-[2.25rem] text-center font-semibold'>customer management</p>

          <div className='px-[3rem] mt-[3rem] '>

            <div className='grid grid-cols-4 gap-8 p-[2rem] bg-backgrounditem font-semibold text-center mb-[2rem] w-full'>
              <p>INDEX</p>
              <p>NAME</p>
              <p>EMAIL</p>
              <p>CHANGE</p>
            </div>

            <div className='overflow-y-scroll h-[58vh] bg-backgrounditem px-[2rem]'>
              {
                data.map((item, index) => {
                  return (
                    <div key={index} className='relative'>
                      <div className='grid grid-cols-4 gap-8  text-center h-[8rem] text-xl w-full pt-[2rem]'>

                        <div className='flex justify-center items-center text-2xl'>
                          {index}
                        </div>

                        <div className='flex justify-center items-center text-[1rem]'>
                          <p>{item.name}</p>
                        </div>

                        <div className='flex justify-center items-center'>
                          {item.email}
                        </div>

                        <div className='flex justify-center items-center'>
                          <FontAwesomeIcon icon={faDeleteLeft} className='text-[2rem] cursor-pointer transition-all duration-300 ease-in hover:scale-125' />
                        </div>

                      </div>
                    </div>
                  )
                })
              }
            </div>

          </div>

        </div>
      </Helmet >
    </div >
  )
}

export default UsersAdmin