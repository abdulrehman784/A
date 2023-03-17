import React from 'react';
import SlideUp from './SlideUp';

const ContactUs = () => {
  return (
    <section id="contact">
      <h1 className="text-center font-bold text-4xl mt-20 md:mt-40">
        Contact Us
        <hr className="w-6 h-1 mx-auto my-4 bg-orange-400 border-0 rounded"></hr>
      </h1>
      <SlideUp offset="-300px 0px -300px 0px">
        <div className=" flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className=" md:w-1/2 flex flex-col self-start bg-gray-200 p-10">
            <div className="space-y-5">
              <div className="flex space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clip-rule="evenodd"
                  />
                </svg>

                <span>+(92) 3123864884</span>
              </div>
              <div className="flex space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>

                <span>naqashyounas1999@gmail.com</span>
              </div>
              <div className="flex space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                    clip-rule="evenodd"
                  />
                </svg>

                <span>1320 House, 57 Street, Karachi</span>
              </div>
            </div>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            {/* <h1 className="text-2xl font-bold mb-6">Contact Form</h1> */}
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              <form className="grid grid-rows-2 gap-4 md:grid-cols-2 text-left container">
                <div className="grid grid-rows-2 ">
                  <label className="font-semibold pb-3">First Name</label>
                  <input
                    placeholder="First Name"
                    type={'text'}
                    className=" p-2 border-solid border-2 outline-none focus:border-orange-400 min-w-0 rounded"
                  ></input>
                </div>
                <div className="grid grid-rows-2 ">
                  <label className="font-semibold pb-3 ">Last Name</label>
                  <input
                    placeholder="Last Name"
                    type={'text'}
                    className="p-2 border-solid border-2 outline-none focus:border-orange-400 min-w-0 rounded "
                  ></input>
                </div>
                <div className="grid grid-rows-2 md:col-span-2">
                  <label className="font-semibold pb-3">Email</label>
                  <input
                    placeholder="Email here"
                    type="email"
                    className="p-2 border-solid border-2 outline-none focus:border-orange-400 rounded "
                  ></input>
                </div>
                <div className="grid grid-rows-2">
                  <label className="font-semibold pb-3">City</label>
                  <input
                    placeholder="Where are you from?"
                    type="email"
                    className="p-2 border-solid border-2 outline-none focus:border-orange-400 min-w-0 rounded "
                  ></input>
                </div>

                <div className="grid grid-rows-2">
                  <label className="font-semibold pb-3">Phone</label>
                  <input
                    placeholder="Phone number"
                    type="number"
                    className="p-2 border-solid border-2 outline-none focus:border-orange-400 min-w-0 rounded "
                  ></input>
                </div>
                <label htmlFor="" className="font-semibold">
                  Message
                </label>
                <textarea
                  typeof="2xl"
                  rows={4}
                  placeholder="Write your notes or question here..."
                  className="p-2 md:col-span-2 border-solid border-2 outline-none focus:border-orange-400 rounded"
                ></textarea>
                <div className="md:col-span-2">
                  <a href="#">
                    <button
                      className="p-2 text-neutral-100 font-semibold px-6 py-3 bg-orange-400 rounded hover:bg-orange-500 w-full"
                      type="submit"
                    >
                      Click Me
                    </button>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </SlideUp>
    </section>
  );
};

export default ContactUs;
