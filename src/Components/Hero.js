import React from "react";

export default function Hero() {
  return (
    <div className=" p-4 tracking-widest bg-orange-300 w-full text-justify flex flex-col items-center">
      <p className="w-2/4 text-black text-2xl leading-10 md:text-lg md:w-3/4">
        First Pull Request is a website that shows details of folks who tried to
        get started with the open-source with help of this project and get their
        first Pull request merged successfully.
      </p>
      <p className="text-3xl mt-8 md:text-xl">
        You don't know how to contribute ?
      </p>
      <button
        type="submit"
        className="bg-white p-3 rounded-2xl m-4 text-xl font-semibold tracking-widest hover:bg-black hover:text-white hover:duration-500 md:text-base "
      >
        LET'S GET YOUR FIRST PULL REQUEST MERGED
      </button>
    </div>
  );
}
