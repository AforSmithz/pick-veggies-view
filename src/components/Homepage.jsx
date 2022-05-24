import React from "react";
import Navbar from "./Navbar";
import HomepageSearch from "./HomepageSearch";

const Homepage = () => {
  return (
    <div className="bg-hero bg-cover bg-center bg-no-repeat">
      <Navbar />
      <HomepageSearch />
    </div>
  );
};

export default Homepage;
