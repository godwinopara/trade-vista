import React from "react";
import { AdminLayout } from "../components/layouts/AdminLayout";
import { StockMarket } from "react-ts-tradingview-widgets";
import DashboardTable from "../components/dashboards/DashboardTable";
import { TradingSession } from "../components/dashboards/TradingSession";
import { AccountSummary } from "../components/dashboards/AccountSummary";
import { CardDataStats } from "../components/dashboards/CardDataStats";

type Props = {};

const UserDashboard = (props: Props) => {
  return (
    <AdminLayout>
      <div className="flex flex-col gap-6">
        <div className=" grid grid-cols-12 gap-4 md:gap-6 ">
          <div className=" flex flex-col gap-5 col-span-12 xl:col-span-8">
            <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 ">
              <CardDataStats
                title="Total Balance"
                totalUsd={`$301,360.00`}
                totalBtc={`4.74585966 BTC`}
                totalEth={`0.00000000 ETH`}
              />
              <CardDataStats
                title="Total Profit"
                totalUsd={`$301,360.00`}
                totalBtc={`4.74585966 BTC`}
                totalEth={`0.00000000 ETH`}
              />
              <CardDataStats
                title="Total Bonus"
                totalUsd={`$301,360.00`}
                totalBtc={`4.74585966 BTC`}
                totalEth={`0.00000000 ETH`}
              />
            </div>
            <StockMarket
              colorTheme="dark"
              height={600}
              width="100%"
              showChart
            ></StockMarket>
            <DashboardTable />
          </div>
          <div className="col-span-12 xl:col-span-4 flex flex-col gap-16">
            <TradingSession />
            <AccountSummary />
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default UserDashboard;