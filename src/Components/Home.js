import React from 'react'

const Home = () => {
  return (
    <div className="max-w-[1750px] h-screen mx-auto text-white overflow-hidden" >

  <img  className="w-full h-full object-cover absolute -z-10" src="https://images.pexels.com/photos/4709286/pexels-photo-4709286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="picture" />

  <div className="relative left-[20%] top-[15%]" >
     <h1 className="text-5xl" >Hi, <span className="text-xl" >I am John Doe</span> </h1>
     <h2 className="text-5xl" >FULL STACK DEVELOPER</h2>
  </div>

 </div>
  )
}

export default Home