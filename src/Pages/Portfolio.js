import React from "react";
import ContactUs from "../Components/ContactUs";
import Services from "../Components/Services";
import Stack from "../Components/Stack";
import Timeline from "../Components/Timeline";
import Works from "../Components/Works";

export default function Portfolio() {
  return (
    <div className="scroll-smooth antialiased relative pb-5 text-gray-600">
      <div className="absolute w-full min-h-screen">
        <div
          className="absolute z-0 top-0 w-full h-1/2 bg-cover bg-bottom pt-20 px-12"
          style={{
            backgroundImage: `url("https://raw.githubusercontent.com/Ahmed-5/fractals/main/images/sin_julia.png")`,
          }}
        ></div>
        <div className="absolute z-20 bottom-0 right-0 left-0 inline-flex space-x-20 justify-center font-bold uppercase tracking-wide text-gray-600">
          <a href="#services" className="text-cyan-600">
            Services
          </a>
          <a href="#works" className="text-cyan-600">
            Works
          </a>
          <a href="#contact" className="text-cyan-600">
            Contact
          </a>
        </div>
      </div>
      <div className="relative z-10 flex min-h-screen h-auto justify-center items-center">
        <div className="relative max-w-4xl">
          <div className="absolute z-10 inset-0 bg-gradient-to-r from-primary to-secondary shadow-lg transform skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-lg"></div>
          <div className="relative z-20 bg-white md:flex justify-between p-12 shadow-lg rounded-lg w-full max-w-4xl">
            <div className="sm:flex flex-col justify-between space-y-6 py-6 md:pr-10">
              <div>
                <h2 className="text-lg">Hello I Am</h2>
                <h1 className="pt-1 text-5xl text-bold text-gray-600">
                  Ahmed Alhassan
                </h1>
              </div>
              <p className="text-lg leading-relaxed">
                Amet elit exercitation deserunt incididunt consequat do duis
                fugiat qui commodo eu Lorem cillum aliquip. Est id occaecat
                occaecat duis esse eiusmod dolor.
              </p>
            </div>
            <img
              src="https://avatars.githubusercontent.com/u/39542343?s=400&u=c094ae3133140f0f7e6cdd8d02f8670811c94535&v=4"
              className="w-40 mx-auto sm:w-80 rounded-full flex-shrink-0 border-6 border-white shadow-lg"
              alt="Ahmed Alhassan"
            />
          </div>
        </div>
      </div>
      <Services />
      <Stack />
      <Works />
      <Timeline />
      <ContactUs />
    </div>
  );
}
