import { FormControl, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";

function Navbar() {
  const [category, setCategory] = useState("Grocery");
  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  return (
    <div className="font-Roboto flex justify-around pt-9 sticky top-0">
      <div className="flex gap-4">
        <div className="flex font-bold text-3xl items-center justify-center">
          Pick<span className="text-vg-green">Veggies</span>
        </div>
        <FormControl sx={{ width: 150 }}>
          <Select value={category} onChange={handleChange}>
            <MenuItem value={"Grocery"}>Grocery</MenuItem>
            <MenuItem value={"Bakery"}>Bakery</MenuItem>
            <MenuItem value={"Makeup"}>Makeup</MenuItem>
            <MenuItem value={"Bags"}>Bags</MenuItem>
            <MenuItem value={"Clothing"}>Clothing</MenuItem>
            <MenuItem value={"Furniture"}>Furniture</MenuItem>
            <MenuItem value={"Daily Needs"}>Daily Needs</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="flex justify-evenly items-center gap-4 font-light text-gray-500">
        <div>Shops</div>
        <div>Offers</div>
        <div>FAQ</div>
        <div>Contact</div>
        <div className="flex gap-2">
          <div className="bg-vg-dark-green text-white font-medium flex items-center justify-center px-3 py-2 rounded">
            Become a seller
          </div>
          <div className="bg-vg-dark-green text-white font-medium flex items-center justify-center px-3 py-2 rounded">
            join
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
