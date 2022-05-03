import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactUs() {
  const form = useRef();
  const [data, setData] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7v9552t",
        "template_pd4bdrg",
        form.current,
        "hkwpX6n7asc4sqhHT"
      )
      .then(
        (result) => {
          console.log(result.text);
          setData({
            from_name: "",
            from_email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="pt-20 pb-36 px-8 bg-gray-50" id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-800">Contact</h1>
          <p className="pt-2 text-xl">Get In Touch</p>
        </div>
        <div className="mt-16 relative max-w-4xl mx-auto">
          <div className="absolute z-10 inset-0 bg-gradient-to-r from-primary to-secondary shadow-lg transform skew-y-0 -rotate-6 rounded-lg"></div>
          <div className="relative z-20 bg-white rounded-md shadow-md p-12">
            <form ref={form}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <input
                  type="text"
                  placeholder="Name"
                  name="from_name"
                  id="from_name"
                  value={data.from_name}
                  onChange={onChange}
                  className="border border-gray-300 outline-none px-4 py-2 rounded-md hover:border-gray-500 focus:border-gray-800"
                ></input>
                <input
                  type="email"
                  placeholder="Email"
                  name="from_email"
                  id="from_email"
                  value={data.from_email}
                  onChange={onChange}
                  className="border border-gray-300 outline-none px-4 py-2 rounded-md hover:border-gray-500 focus:border-gray-800"
                ></input>
                <input
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  id="subject"
                  value={data.subject}
                  onChange={onChange}
                  className="border border-gray-300 outline-none px-4 py-2 rounded-md hover:border-gray-500 focus:border-gray-800 md:col-span-2"
                ></input>
                <textarea
                  rows="5"
                  placeholder="Message"
                  name="message"
                  id="message"
                  value={data.message}
                  onChange={onChange}
                  className="border border-gray-300 outline-none px-4 py-2 rounded-md hover:border-gray-500 focus:border-gray-800 md:col-span-2"
                ></textarea>
              </div>
              <button
                onClick={sendEmail}
                className="inline-block w-full mt-4 px-6 py-2 bg-gradient-to-r from-primary to-secondary rounded-md shadow-lg text-white font-bold text-sm"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
