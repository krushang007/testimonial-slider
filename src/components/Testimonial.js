import React, { useState } from 'react'
import Card from './Card';

function Testimonial({data,length}) {
    const[ind,setIndex]=useState(0);
  return (
    <div className='max-w-[650px] mt-5 mb-5 mx-auto'>
        <Card data={data[ind]} ind={ind} length={length} setIndex={setIndex}></Card>
    </div>
  )
}

export default Testimonial;