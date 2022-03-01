import React from "react";
import Box from "./Box";
import data from "./data";

export default function List() {
  console.log(data);

  return (
    <div className="flex flex-wrap justify-evenly w-full p-24 md:p-12">
      {data.map((box, idx) => (
        <Box name={box.name} github={box.github} linkedin={box.linkedin} key={idx}></Box>
      ))}
    </div>
  );
}
