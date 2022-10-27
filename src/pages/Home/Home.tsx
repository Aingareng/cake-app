/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import { Card } from '../../components'



const Home = () => {
  const [allItem, setAllItem] = useState<any>([])
  const [pageCard, setPageCard] = useState(1)
  let lengthPage: number;


  useEffect(() => {
    getData()
    console.log(pageCard)
  }, [pageCard])




  const getData = async () => {

    try {
      const cakes = await axios.get(`https://611a268fcbf1b30017eb5527.mockapi.io/cakes?page=${pageCard}&limit=2`)
      const { data } = cakes.data
      lengthPage = data.total_page
      handleCardInfo(data.items)

    } catch (error) {
      console.error(error)
    }
  }


  const handleCardInfo = (cardInfo: [any]) => {
    let arr: any = []
    cardInfo.map(value => {
      arr.push(value)

    })
    setAllItem(arr)

  }

  const hanldePrev = () => {

  }
  const handleNext = () => {

    setInterval(() => {
      let counter: number = 1;
      if (pageCard >= lengthPage) {
        counter = 1
      }
      counter++
      setPageCard(card => card = counter)
    }, 1000)
    // console.log(counter)
  }

  return (
    <Fragment>
      <section>
        <ul className='2xl:float-right 2xl:flex 2xl:justify-center 2xl:overflow-x-scroll 2xl:w-[70%] 2xl:h-[25rem]  border-black border-2'>
          {

            allItem.map((_value: any, _index: number) => (
              <li key={_index} className='2xl:py-[25px] 2xl:px-[10px] 2xl:box-border'>
                <Card title={_value.title} desc={_value.description} rating={_value.rating} image={_value.image} />
              </li>
            ))
          }
        </ul>
      </section>
      <section>
        <button onClick={hanldePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </section>
    </Fragment>
  )
}

export default Home