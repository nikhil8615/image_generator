import React from "react";
import Hearder from "../Components/Hearder";
import Steps from "../Components/Steps";
import Description from "../Components/Description";
import Testimonials from "../Components/Testimonials";
import GenerateBtn from "../Components/GenerateBtn";

const Home = () => {
  return (
    <div>
      <Hearder />
      <Steps />
      <Description />
      <Testimonials />
      <GenerateBtn />
    </div>
  );
};

export default Home;
