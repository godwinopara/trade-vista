import { CircleCheck, CircleMinus, CirclePlus } from "lucide-react";
import React from "react";
import { SummaryCardDataStats } from "./CardDataStats";

type Props = {};

export const AccountSummary = (props: Props) => {
  return (
    <div className="bg-primary rounded-lg">
      <div className="px-2 py-5 text-white border-b border-b-white">
        <h3 className="uppercase text-lg font-semibold">Account Summary</h3>
      </div>
      <div className="flex flex-col">
        <SummaryCardDataStats
          title="Total Deposit"
          icon={<CirclePlus color="white" size={30} />}
          desc="$199,000.00"
          action="Deposit"
          url="/user/deposit"
        />
        <SummaryCardDataStats
          title="Total Withdrawals"
          icon={<CircleMinus color="white" size={30} />}
          desc="0.00"
          action="Withdraw"
          url="/user/withdrawal"
        />
        <SummaryCardDataStats
          title="Verification"
          icon={<CircleCheck  color="white" size={30} />}
          desc="Fully verified."
          action="Verified"
          url="/user/verify"
          verify
        />
      </div>
    </div>
  );
};
