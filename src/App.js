import React, { useState } from "react";
import Testimonial from "./components/Testimonial";
import reviews from "./data";

const App = () => {
  let length=reviews.length;
  const [data,setData]=useState(reviews);
  return <div className="flex flex-col justify-center items-center min-h-[100vh]  bg-gray-200">
    <h1 className="text-center rounded-lg font-bold text-2xl mt-16">Out Testimonials</h1>
    <div className="w-[100px] h-1 bg-violet-500"></div>
    <Testimonial data={data} length={length} setData={setData}></Testimonial>
  </div>;
};

export default App;
