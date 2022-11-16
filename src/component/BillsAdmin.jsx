import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { collection, getDocs } from 'firebase/firestore'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { db_ } from '../firebase/config'
import Helmet from './Helmet'
import TitlePage from './TitlePage'
import BillDetailAdmin from './BillDetailAdmin'

const BillsAdmin = () => {

  const [data, setData] = useState([])

  const [active, setActive] = useState(false)

  const [bill, setBill] = useState(null)

  const getData = async () => {

    try {
      const querySnapshot = await getDocs(collection(db_, "users"));
      const arr = []
      querySnapshot.docs.forEach((doc) => {
        if (doc.data().key !== 'admin') {
          const uid = doc.data().uid
          const bills = doc.data().bills
          const name = doc.data().name

          bills.forEach((element) => {

            const item = { name: name, uid: uid, ...element }
            arr.push(item)
          })

        }
      })

      setData(arr)
      
    }
    catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className='w-4/5 h-screen ' >
      <Helmet title='Admin - Bills'>

        {active ? <BillDetailAdmin object={bill} active={active} setActive={(key) => setActive(key)} /> : null }

        <div className='py-[3rem] h-screen'>

          <div className='w-full flex justify-center'>
            <TitlePage
              link1='dashboard'
              path1='/quan-li/dashboard'
              link2='bills'
            />
          </div>

          <p className='uppercase text-[2.25rem] text-center font-semibold'>bills management</p>

          <div className='px-[3rem] mt-[3rem] '>

            <div className='grid grid-cols-4 gap-8 p-[2rem] bg-backgrounditem font-semibold text-center mb-[2rem] w-full'>
              <p>INDEX</p>
              <p>DATE</p>
              <p>TOTAL</p>
              <p>DETAIL</p>
            </div>

            <div className='overflow-y-scroll px-[2rem] h-[58vh] bg-backgrounditem'>
              {
                data.map((item, index) => {
                  return (
                    <div key={index} className=''>
                      <div className='grid grid-cols-4 gap-8  text-center h-[8rem] text-xl w-full pt-[2rem]'>

                        <div className='flex justify-center items-center text-2xl'>
                          {index}
                        </div>

                        <div className='flex justify-center items-center text-[1rem]'>
                          <p>{item.date}</p>
                        </div>

                        <div className='flex justify-center items-center font-semibold'>
                          ${item.quantity}
                        </div>

                        <div className='flex justify-center items-center'>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='text-[2rem] cursor-pointer transition-all duration-300 ease-in hover:scale-125'
                            onClick={() => {
                              setBill(item)
                              setActive(true)
                            }}
                          />
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

export default BillsAdmin