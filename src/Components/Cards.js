import React from "react";

const Cards = () => {
  return (
    <>
      <div className="max-w-[1300px] mx-auto py-12">
        {/* Card controlling div */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 px-4 ">
          {/* First card */}
          <div className="sm:max-w-[350px] w-full pb-8  mx-auto shadow-2xl rounded-lg hover:scale-105 duration-300 ">
            <img
              className="h-1/2 rounded-lg w-full object-cover"
              src="https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <div className="mt-4 pb-6 px-3">
              <h1 className="font-bold text-xl mb-2">Web Development </h1>
              <p>
                React hooks and components to create parallax scroll effects for
                banners, images or any other DOM elements. Utilizes Parallax
                Controller to add vertical or horizontal scrolling based{" "}
              </p>
            </div>
          </div>

          {/* Second Card */}
          <div className="sm:max-w-[350px] w-full pb-8 mx-auto shadow-2xl rounded-lg hover:scale-105 duration-300 ">
            <img
              className=" h-1/2 rounded-lg w-full object-cover"
              src="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <div className="mt-4 pb-6 px-3">
              <h1 className="font-bold text-xl mb-2">App Development </h1>
              <p>
                React hooks and components to create parallax scroll effects for
                banners, images or any other DOM elements. Utilizes Parallax
                Controller to add vertical or horizontal scrolling based{" "}
              </p>
            </div>
          </div>

          {/* Third Card */}
          <div className="sm:max-w-[350px] w-full mx-auto pb-8 shadow-2xl rounded-lg hover:scale-105 duration-300 ">
            <img
              className="h-1/2 rounded-lg w-full object-cover"
              src="https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <div className="mt-4 pb-6 px-3">
              <h1 className="font-bold text-xl mb-2">UI UX Design </h1>
              <p>
                React hooks and components to create parallax scroll effects for
                banners, images or any other DOM elements. Utilizes Parallax
                Controller to add vertical or horizontal scrolling based{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
