import React from "react";

const Contact = () => {
  return (
    <>  <div className="max-w-[1300px] mx-auto" >
      <div className=" grid sm:grid-cols-2 " >
        {/* Contact Me */}
      

     
        <div className="bg-green-500 px-6 pt-2 pb-12 text-white">
           <div>

            
          <h1 className="text-4xl mb-6">Contact Me</h1>
          <p className="mb-4">
            React hooks and components to create parallax scroll effects for
            banners, images or any other DOM elements
          </p>
          <p>murarisinhg@gmail.com</p>
          </div>
        </div>
    

        {/* About Me */}
        <div className="bg-red-500 px-6 pt-2 pb-12 text-white">
          <h1 className="text-4xl mb-6">About Me</h1>
          <p className="mb-4">
            React hooks and components to create parallax scroll effects for
            banners, images or any other DOM elements
          </p>
          <p>murarisinhg@gmail.com</p>
      

        </div>
      </div>

      <p className="text-center text-white bg-black py-3" >PROJECT BY DO SOME CODING</p>  

      </div>
    </>
  );
};

export default Contact;
