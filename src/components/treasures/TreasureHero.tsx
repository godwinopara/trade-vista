import React from "react";
import heroImage from "../../images/img_commodities_hero_extra.png";
import Button from "../Button";

type Props = {};

export const TreasureHero = (props: Props) => {
  return (
    <section className=" xl:mb-0 min-h-[80vh] py-28 xl:my-0 max-w-7xl mx-auto px-6  xl:flex xl:justify-between xl:items-center xl:gap-x-10">
      <div className="text-center mb-20 xl:text-left xl:mb-0 w-full lg:w-2/3">
        <h1 className="text-3xl xl:text-6xl font-bold mb-5 tracking-wide leading-[120%]">
          Rates and bonds trading
        </h1>
        <p className="text-lg text-gray-500 mb-10">
          Trade on over 50 government bond and interest-rate instruments with
          leverage on our award-winning spread bet and CFD platform. With tight
          spreads, lightning-fast execution and the highest customer
          satisfaction in the industry.*
        </p>
        <div className="">
          <Button
            btnText="Start trading treasuries"
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
