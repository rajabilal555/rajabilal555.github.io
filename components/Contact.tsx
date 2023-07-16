"use client";

import developer from "@/app/data";
import { SubmitHandler, useForm } from "react-hook-form";
import { HiLocationMarker, HiMail, HiPhone } from "react-icons/hi";
import { Cursor, useTypewriter } from "react-simple-typewriter";

type Inputs = {
  name: string;
  // email: string;
  subject: string;
  message: string;
};
type Props = {};

const Contact = (props: Props) => {
  const [text, count] = useTypewriter({
    words: ["Lets Get in touch!"],
    loop: true,
    delaySpeed: 2000,
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    window.open(
      `mailto:rajabilal555@gmail.com?subject=${data.subject}&body=Hi, my name is ${data.name}. ${data.message}`
    );
  };
  // TODO: make the contact for open the email app
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-10 pb-10 mx-auto space-y-16 text-center max-w-7xl">
      {/* <h3 className="pt-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3> */}
      <div className="flex flex-col max-w-screen-md space-y-10">
        <h4 className="text-3xl font-semibold text-center">
          {/* I have got just what you need. */}
          <br />
          <span className="underline decoration-blue-900">
            {text}
            <Cursor />
          </span>
        </h4>
        <div className="flex flex-col items-center justify-center w-full mx-auto md:flex-row">
          <div className="p-4 space-y-8 ">
            {developer.phone != undefined && (
              <div className="flex items-center justify-center space-x-5">
                <HiPhone className="text-blue-900 h-7 w-7 animate-pulse" />
                <p className="text-xl">{developer.phone}</p>
              </div>
            )}
            {developer.email != undefined && (
              <div className="flex items-center justify-center space-x-5">
                <HiMail className="text-blue-900 h-7 w-7 animate-pulse" />
                <p className="text-xl">{developer.email}</p>
              </div>
            )}
            {developer.location != undefined && (
              <div className="flex items-center justify-center space-x-5">
                <HiLocationMarker className="text-blue-900 h-7 w-7 animate-pulse" />
                <p className="text-xl">{developer.location}</p>
              </div>
            )}
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col p-4 space-y-2  w-[70vw]">
            {/* <div className="flex space-x-2"> 
               <div className="w-1/2"> */}
            <input
              className="w-full contactInput"
              type="text"
              {...register("name", { required: true })}
              placeholder="Name"
            />
            {/* </div> */}
            {/* <div className="w-1/2">
                <input
                  className="w-full contactInput"
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Email"
                />
              </div>
            </div> */}
            <input
              className="contactInput"
              type="text"
              {...register("subject", { required: true })}
              placeholder="Subject"
            />
            <textarea
              {...register("message", { required: true })}
              placeholder="Your Message"
              className="contactInput"
              name="message"></textarea>
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
