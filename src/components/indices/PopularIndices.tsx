import React from "react";
import { MiniChart } from "react-ts-tradingview-widgets";

type Props = {};

export const PopularIndices = (props: Props) => {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-xl xl:text-2xl  font-semibold ">
      Most popular indices
      </h2>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
        <MiniChart
          colorTheme="dark"
          width="100%"
          symbol="US - Cash"
        ></MiniChart>
        <MiniChart
          colorTheme="dark"
          width="100%"
          symbol="Dow - Cash"
        ></MiniChart>
        <MiniChart
          colorTheme="dark"
          width="100%"
          symbol="NDAQ - Cash"
        ></MiniChart>
      </div>
      <p className="text-gray-500">
        Past performance is not a reliable indicator of future results.
      </p>
    </div>
  );
};
