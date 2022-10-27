import React, { Fragment } from 'react'
import IPropsCard from '../../interface/IPropsCard'


const Card: React.FC<IPropsCard> = ({ title, desc, rating, image }) => {
  return (
    <Fragment>
      <div className='group 2xl:relative 2xl:box-border 2xl:rounded-md 2xl:w-[250px] 2xl:h-[22rem] 2xl:shadow-lg hover:cursor-pointer'>
        <section className='2xl:relative'>
          <img className='2xl:rounded-t-md 2xl:object-cover 2xl:object-center 2xl:w-[250px] 2xl:h-[200px]' src={image} alt="" />
          <h1 className='2xl:absolute 2xl:bottom-0 2xl:pl-[10px] 2xl:py-[10px] 2xl:text-white 2xl:bg-opacity-50 2xl:bg-black 2xl:w-full'>{title}</h1>
        </section>
        <section className='2xl:p-[10px]'>
          <h2 ><b>Rating :</b> {rating}</h2>
          <p className='2xl:overflow-y-auto 2xl:text-sm'><b>Description :</b> {desc}</p>
        </section>
        <section className='2xl:inline 2xl:2xl:w-[250px] 2xl:h-full 2xl:duration-200 2xl:ease-in group-hover:backdrop-blur-sm group-hover:absolute group-hover:top-0'>
          <div className=' group-hover:justify-evenly group-hover:flex group-hover:mt-[70%] group-hover:items-center'>
            <button className='2xl:hidden 2xl:duration-200 2xl:ease-in group-hover:delay-300 group-hover:inline group-hover:bg-green-500 group-hover:w-[79px] group-hover:rounded-md group-hover:shadow-md group-hover:py-[3px]'>Edit</button>
            <button className='2xl:hidden 2xl:duration-200 2xl:ease-in group-hover:delay-300 group-hover:inline group-hover:bg-rose-500 group-hover:w-[79px] group-hover:rounded-md group-hover:shadow-md group-hover:py-[3px]'>Delete</button>
          </div>
        </section>
      </div>
    </Fragment>
  )
}

export default Card