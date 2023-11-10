import React from 'react'
import {FaQuoteRight} from 'react-icons/fa'
import {FaQuoteLeft} from 'react-icons/fa'
import{AiOutlineLeft,AiOutlineRight} from "react-icons/ai"
import './Card.css'

function Card({data,setIndex,ind,length}) {
  function handleRandom()
  {
    let ran=ind;
    while(ran===ind)
    {
      ran=Math.floor(Math.random()*length);
    }
    setIndex(ran);
    console.log(ran);
  }
  function handleLeft()
  {
    let index=ind;
    index--;
    if(index<0)index=length-1;
    setIndex(index);
  }
  function handleRight()
  {
    
    let index=ind;
    index++;
    if(index>length-1)index=0;
    setIndex(index);
  }
  return (
    <div className="bg-white relative rounded-xl shadow-md p-5 border-gray-50 border mx-3 ">
      <div className="div rounded-full -top-[90px] absolute left-[50px] w-[150px] h-[150px] bg-purple-500"></div>
      <img src={data.image} alt='hey' className="img -top-[80px] left-[40px] rounded-full absolute w-[150px] aspect-square"></img>
      <div className="container mt-5 text-center flex flex-col ">
        <h2 className="heading font-bold text-2xl mt-8">{data.name}</h2>
        <h4 className="text-purple-300 mt-1 font-medium text-md uppercase ">{data.job}</h4>
        <div className="my-5 text-2xl text-purple-400 flex justify-center"><FaQuoteLeft></FaQuoteLeft></div>
        <div>{data.text}</div>
        <div className='my-5 text-2xl text-purple-400 flex justify-center'><FaQuoteRight></FaQuoteRight></div>
        <div className='mb-4 flex justify-center gap-6 text-2xl text-purple-400'>
          <span className='cursor-pointer' onClick={handleLeft}>
        <AiOutlineLeft></AiOutlineLeft>
          </span>
        <span className='cursor-pointer' onClick={handleRight}>
        <AiOutlineRight></AiOutlineRight>
        </span>
        </div>
        <div onClick={handleRandom} className="cursor-pointer select-none bg-purple-400 rounded-md self-center font-bold py-2 px-6 text-white">Surprise Me</div>
      </div>
    </div>
  )
}

export default Card;