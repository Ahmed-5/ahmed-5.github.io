import React from "react";

export default function ContactUs() {
  return (
    <section className="pt-20 pb-36 px-8 bg-gray-50" id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-800">Contact</h1>
          <p className="pt-2 text-xl">Get In Touch</p>
        </div>
        <div className="mt-16 relative max-w-4xl mx-auto">
          <div className="absolute z-10 inset-0 bg-gradient-to-r from-primary to-secondary shadow-lg transform skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-lg"></div>
          <div className="relative z-20 bg-white rounded-md shadow-md p-12">
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="border border-gray-300 outline-none px-4 py-2 rounded-md hover:border-gray-500 focus:border-gray-800"
                ></input>
                <input
                  type="email"
                  placeholder="Email"
                  className="border border-gray-300 outline-none px-4 py-2 rounded-md hover:border-gray-500 focus:border-gray-800"
                ></input>
                <input
                  type="text"
                  placeholder="Subject"
                  className="border border-gray-300 outline-none px-4 py-2 rounded-md hover:border-gray-500 focus:border-gray-800 md:col-span-2"
                ></input>
                <textarea
                  rows="5"
                  placeholder="Message"
                  className="border border-gray-300 outline-none px-4 py-2 rounded-md hover:border-gray-500 focus:border-gray-800 md:col-span-2"
                ></textarea>
              </div>
              <button className="inline-block w-full mt-4 px-6 py-2 bg-gradient-to-r from-primary to-secondary rounded-md shadow-lg text-white font-bold text-sm">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
