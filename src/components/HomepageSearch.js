import { FormControl, TextField } from "@mui/material";
import React from "react";
import { BsSearch } from "react-icons/bs";
import Navbar from "./Navbar";

export default function HomepageSearch() {
  return (
    <div className="flex flex-col items-center justify-center h-[50vw]">
      <div classname="font-Roboto flex text-center">
        <h1 className="font-bold text-5xl text-center">
          Groceries Delivered in 90 Minutes
        </h1>
        <h2 className="font-thin text-center mt-8">
          Get your healthy food & snack delivered at your doorstep all day
          everyday
        </h2>
      </div>
      <div className="flex items-center justify-center mt-8">
        <TextField
          label="Search your products from here"
          variant="outlined"
          sx={{ width: "50vw" }}
        />
        <div className="flex items-center justify-center gap-3 bg-vg-dark-green text-white font-medium px-8 py-2 rounded h-14">
          <BsSearch /> Search
        </div>
      </div>
    </div>
  );
}
