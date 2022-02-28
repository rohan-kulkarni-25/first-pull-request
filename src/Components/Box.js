import React from "react";
const { BsLinkedin, BsGithub } = require("react-icons/bs");
export default function Box({ name, linkedin, github }) {
  return (
    <div className="m-4 shadow-sm shadow-black bg-white rounded-2xl p-4 flex flex-col items-center gap-4">
      <img
        src="https://github.com/rohan-kulkarni-25.png"
        className="h-24 rounded-full"
        alt=""
      />
      <span className="text-xl font-medium tracking-wider">{name}</span>
      <div className="flex justify-around gap-3 w-full">
        <a href={linkedin} target="_blank" rel="noreferrer">
          <BsLinkedin className="text-3xl"></BsLinkedin>
        </a>
        <a href={github} target="_blank" rel="noreferrer">
          <BsGithub className="text-3xl"></BsGithub>
        </a>
      </div>
    </div>
  );
}
