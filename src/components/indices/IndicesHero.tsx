import React from "react";
import heroImage from "../../images/img_commodities_hero_extra.png";
import Button from "../Button";

type Props = {};

export const IndicesHero = (props: Props) => {
  return (
    <section className=" xl:mb-0 min-h-[80vh] py-24 xl:my-0 max-w-7xl mx-auto px-6  xl:flex xl:justify-between xl:items-center xl:gap-x-10">
      <div className="text-center mb-20 xl:text-left xl:mb-0 w-full lg:w-2/3">
        <h1 className="text-3xl xl:text-6xl font-bold mb-5 tracking-wide leading-[120%]">
          Index trading
        </h1>
        <p className="text-lg text-gray-500 mb-10">
          Trade on over 80 cash and forward global indices based on the FTSE 100
          and more, with leverage, on our award-winning spread bet and CFD
          platform. Enjoy tight spreads, lightning-fast execution and the
          highest-rated customer service in the industry.*
        </p>
        <div className="">
          <Button
            btnText="Start trading indices"
            className="bg-primary py-3 px-8 hover:bg-primary-hover text-white rounded-[50px]"
          />
        </div>
      </div>
      <div>
        <img src={heroImage} alt="hero" className="" />
      </div>
    </section>
  );
};