import React, { useState } from "react";

export const Button = ({value, clickFunc}) => {
  return (
    <>
      <button className="text-3xl border-2 border-white h-14 w-14 " onClick={clickFunc}>{value}</button>
    </>
  );
};