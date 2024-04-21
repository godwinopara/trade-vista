import React from "react";
import MainLayout from "../components/layouts/MainLayout";
import { forexData } from "../components/educations/data";
import { useParams } from "react-router-dom";
import { FundamentalAnalysis } from "../components/educations/FundamentalAnalysis";
import { StockExchanges } from "../components/educations/StockExchanges";
import { PricePatterns } from "../components/educations/PricePatterns";

type Props = {};

const LearnForexDetails = (props: Props) => {
  const params = useParams();
  console.log(params, "sgyd");

  const details = forexData?.find((data) => data?.title === params.id);
  console.log(details, "detauk");

  return (
    <MainLayout>
      <section className="max-w-4xl mx-auto px-6 py-16 ">
        {details?.symbol === "fundamental" && (
          <FundamentalAnalysis details={details} />
        )}
        {details?.symbol ===
          "stock" && (
          <StockExchanges details={details} />
        )}
        {details?.symbol ===
          "pattern" && (
          <PricePatterns details={details} />
        )}
      </section>
    </MainLayout>
  );
};

export default LearnForexDetails;
