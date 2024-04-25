import React, { ReactNode } from "react";
import { FaBitcoin, FaEthereum, FaMoneyCheckAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

interface CardDataStatsProps {
  title: string;
  totalUsd?: string;
  totalBtc?: string;
  totalEth?: string;
  desc?: string;
  action?: string;
  url?: string;
  icon?: ReactNode;
  verify?: boolean;
}

export const CardDataStats: React.FC<CardDataStatsProps> = ({
  title,
  totalUsd,
  totalBtc,
  totalEth,
}) => {
  return (
    <div className="w-full rounded-md border border-stroke  bg-primary text-white py-4 px-7 shadow-default ">
      <div className="w-full my-2 flex items-end justify-between">
        <div>
          <span className="text-xl font-semibold mb-2 block">{title}</span>

          {totalUsd && (
            <h4 className="text-lg font-medium text-white mb-1 flex items-center gap-x-2">
              <span className="text-meta-3">
                <FaMoneyCheckAlt />
                {"  "}
              </span>
              ${totalUsd}
            </h4>
          )}
          {totalBtc && (
            <h4 className="text-lg   dark:text-white flex items-center gap-x-2 mb-1">
              <span className="text-amber-500">
                <FaBitcoin />
                {"  "}
              </span>
              {totalBtc} BTC
            </h4>
          )}
          {totalEth && (
            <h4 className="text-lg  dark:text-white flex items-center gap-x-2">
              <span>
                <FaEthereum />
                {"  "}
              </span>
              {totalEth} ETH
            </h4>
          )}
        </div>
      </div>
    </div>
  );
};

export const SummaryCardDataStats: React.FC<CardDataStatsProps> = ({
  title,
  icon,
  desc,
  action,
  url,
  verify
}) => {
  return (
    <div className="flex justify-between items-center px-3 py-6 border-b border-b-white">
      <div className="w-20%">{icon}</div>

      <div className="w-[50%] flex flex-col  text-white">
        <p className="text-lg font-medium block">{title}</p>
        <p className="text-sm font-medium block">{desc}</p>
      </div>
      <Link
        to={`${url}`}
        className={` py-2 px-4 ${verify && "bg-[#10B981]"} bg-primary-hover rounded-[6px] text-white`}
      >
        {action}
      </Link>
    </div>
  );
};
