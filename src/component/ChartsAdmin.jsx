import React from 'react'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from 'recharts';

import Helmet from './Helmet';
import TitlePage from './TitlePage';
import Button from './Button'
import { collection, getDocs } from 'firebase/firestore';
import { db_ } from '../firebase/config';
import { useState } from 'react';
import { useEffect } from 'react';
import Candelar from './Candelar';
import { getDataRadarChart } from '../DataChart';

const ChartsAdmin = () => {

  const [data, setData] = useState([])

  const [time, setTime] = useState(new Date())

  const [chart, setChart] = useState('lineChart')

  const changeDate = date => setTime(date)

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

      const arr_ = []

      arr.forEach((e) => {
        const item_ = { date: e.date, total: e.quantity }
        arr_.push(item_)
      })

      setData(arr_)
      //console.log(data)
    }
    catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {
    getData()
  }, [])

  const data_ = getDataRadarChart(data)
  //  console.log((data_))

  //[
  //   {
  //     subject: 'Math',
  //     A: 120,           
  //   },
  //   {
  //     subject: 'Chinese',
  //     A: 98,    
  //   },
  //   {
  //     subject: 'English',
  //     A: 86,     
  //   },
  //   {
  //     subject: 'Geography',
  //     A: 99,     
  //   },
  //   {
  //     subject: 'Physics',
  //     A: 85,      
  //   },
  //   {
  //     subject: 'History',
  //     A: 65,      
  //   },
  // ];

  return (
    <div className='w-4/5 h-screen'>
      <Helmet title='Admin - Charts'>

        <div className='py-[3rem]'>

          <TitlePage
            link1='dashboard'
            path1='/quan-li/dashboard'
            link2='charts'
          />

          <p className='uppercase text-[2.25rem] text-center font-semibold'>charts management</p>

          <div className='m-8 bg-backgrounditem h-[33rem] py-12 px-8 flex'>

            <div className='h-full w-3/5 bg-backgrounditem2'>

              {(chart === 'lineChart') ?
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart width={300} height={100} data={data_}>
                    <Line type="monotone" dataKey="total" stroke="#8884d8" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer> :
                (chart === 'areaChart') ?
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      width={500}
                      height={400}
                      data={data_}
                      margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Area type="monotone" dataKey="total" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                  </ResponsiveContainer> :
                  (chart === 'barChart') ?
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart width={150} height={40} data={data_}>
                        <Bar dataKey="total" fill="#8884d8" />
                      </BarChart>
                    </ResponsiveContainer> :
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data_}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="month" />
                        <PolarRadiusAxis />
                        <Radar name="Mike" dataKey="total" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                      </RadarChart>
                    </ResponsiveContainer>
              }

            </div>

            <div className='w-2/5 ml-8 bg-white overflow-hidden rounded-[2rem]'>

              <Candelar />

            </div>

          </div>

          <div className='flex justify-evenly items-center'>

            <Button content='Line Chart' animate={false} size='md' onClick={() => setChart('lineChart')} />

            <Button content='Area Chart' animate={false} size='md' onClick={() => setChart('areaChart')} />

            <Button content='Bar Chart' animate={false} size='md' onClick={() => setChart('barChart')} />

            <Button content='Radar Chart' animate={false} size='md' onClick={() => setChart('radarChart')} />

          </div>

        </div>

      </Helmet>
    </div>
  )
}

export default ChartsAdmin