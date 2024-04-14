import forex from "../../images/forex.svg";
import indices from "../../images/indices.svg";
import shares from "../../images/shares.svg";
import commodities from "../../images/commodities.svg";
import crypto from "../../images/crypto.svg";
import treasuries from "../../images/treasuries.svg";

export default function MoreThan() {
  return (
    <div className="bg-black text-white py-16">
      <section className="max-w-7xl mx-auto my-24 px-6">
        <h2 className="text-2xl xl:text-4xl text-center font-semibold mb-16">
          More than a forex trading platform
        </h2>
        <div className="grid xl:grid-cols-3 gap-10">
          <TradingOptionsCard
            img={forex}
            title="We've got your pair"
            description="More forex pairs than any other broker*. If you want it, we've probably got it."
            url="/forex"
          />
          <TradingOptionsCard
            img={indices}
            title="Precision pricing"
            description="We combine 8 feeds from tier-one banks, to get you our most accurate price."
            url="/indices"
          />
          <TradingOptionsCard
            img={crypto}
            title="Minimal slippage"
            description="With fully automated, lightning-fast execution in 0.0045 seconds**.
          "
            url="/crypto"
          />
          <TradingOptionsCard
            img={commodities}
            title="99.7% fill rate^"
            description="No dealer intervention, regardless of your trading size."
            url="/commodities"
          />
          <TradingOptionsCard
            img={shares}
            title="UK-based client services"
            description="Award-winning service*, online 24/5, whenever you're trading."
            url="/shares"
          />
          <TradingOptionsCard
            img={treasuries}
            title="No partial fills"
            description="Get the trade you want – we don’t reject or partially fill trades based on size."
            url="/treasuries"
          />
        </div>
      </section>
    </div>
  );
}

interface TradingOptionsCardProps {
  img: string;
  title: string;
  description: string;
  url: string;
}
function TradingOptionsCard({
  img,
  title,
  description,
  url,
}: TradingOptionsCardProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <img src={img} alt={title} className="h-16 w-16" />
      <h3 className="py-4 font-extrabold text-xl leading-7">{title}</h3>
      <p className="text-gray-500 w-[95%]">{description}</p>
    </div>
  );
}
