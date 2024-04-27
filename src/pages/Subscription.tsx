import React, { useState } from "react";
import { AdminLayout } from "../components/layouts/AdminLayout";
import { FaCheckCircle } from "react-icons/fa";
import { SubscriptionCard } from "../components/dashboards/SuscriptionCard";

type Props = {};

const Subscription = (props: Props) => {
  const [selectedPlan, setSelectedPlan] = useState({
    plan: "",
    amount: 0,
  });

  const user = true;

  const subscribe = (plan: string, amount: number) => {
    if (user) {
      setSelectedPlan({ plan, amount });
    }
  };

  return (
    <AdminLayout>
      <div className="mb-10 rounded-md border border-stroke  bg-white py-4 px-7 shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="my-1 flex items-end justify-between">
          <div>
            <h4 className="text-sm font-bold text-black dark:text-white mb-1">
              GET SUBSCRIPTION
            </h4>
            <div>
              <span className="text-sm font-medium block">
                Tap on any of the Plans below to purchase a plan.
              </span>
            </div>
          </div>
        </div>
      </div>
      {!selectedPlan.plan && (
        <div className="grid md:grid-cols-2 gap-10">
          <SubscriptionCard
            plan="STANDARD"
            roi="10%"
            planAmount={5920}
            handleClickSubscribe={subscribe}
          />
          <SubscriptionCard
            plan="SILVER"
            roi="25%"
            planAmount={7370}
            handleClickSubscribe={subscribe}
          />
          <SubscriptionCard
            plan="GOLD"
            roi="35%"
            planAmount={9910}
            handleClickSubscribe={subscribe}
          />
          <SubscriptionCard
            plan="VIP"
            roi="55%"
            planAmount={16350}
            handleClickSubscribe={subscribe}
          />
        </div>
      )}

      {selectedPlan.plan && (
        <div className="border-stroke  bg-white dark:bg-boxdark flex flex-col items-center justify-center text-center h-full py-20">
          <div className="text-6xl text-primary mb-3">
            <FaCheckCircle />
          </div>
          <h2 className="text-2xl font-bold mb-3 text-black dark:text-white">
            Subscription Confirmed!
          </h2>
          <p className="max-w-150 mb-5 text-black dark:text-white">
            Your Subscription to{" "}
            <span className="text-primary">{selectedPlan.plan}</span> plan was
            successful and actively running, <br />
            Returns attached to the plan will start reflecting on your Portfolio
            Balance shortly.
          </p>
          <h3 className="font-bold mb-3 text-black dark:text-white">
            Plan Name: <span className="text-primary">{selectedPlan.plan}</span>
          </h3>
          <p className="font-bold text-black dark:text-white">
            Subscribed Amount:{" "}
            <span className="text-primary">{selectedPlan.amount}</span>
          </p>
        </div>
      )}
    </AdminLayout>
  );
};

export default Subscription;
