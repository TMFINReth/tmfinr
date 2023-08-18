import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <div className="flex flex-col items-center mt-28">
      <div className="mb-14">
        <h1 className="font-bold mb-9 text-white text-4xl flex flex-col">
          Powerfull features for{" "}
          <span className="text-primary">professional investors</span>
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center gap-20">
        <FeatureCard
          rtl={true}
          src={"/media/img/Group-427319684.png"}
          text1="BRIDGING MADE EASY"
          text2="Cross Chain Bridging"
          text3="Effortlessly transfer assets between Shibarium and other blockchains."
          options={[
            "Seamless Asset Transfers",
            "Low Fees",
            "Secure Transactions",
          ]}
        />{" "}
        <FeatureCard
          rtl={false}
          src={"/media/img/Group-427319690.png"}
          text1="Say Goodbye to Inefficiencies"
          text2="Liquid Pool Management"
          text3="Safeguard value, earn trust and ensure long-term growth with efficient secure token locking."
          options={[
            "Preserve Token Value",
            "Build Investor Trust",
            "Foster Long-Term Growth",
          ]}
        />{" "}
        <FeatureCard
          rtl={true}
          src={"/media/img/Group-427319694.png"}
          text1="Sentiment Analytics That Work"
          text2="Social Sentiment Bot"
          text3="Get access to a sentiment and on-chain databased AI model that can help to predict trends and provide higher quality analysis."
          options={[
            "Informed Decision-Making",
            "Real-time Price Alerts",
            "Enhanced Community Engagement",
          ]}
        />{" "}
        <FeatureCard
          rtl={false}
          src={"/media/img/Group-427319695.png"}
          text1="BUILT FOR PROFIT"
          text2="Discover The Power of 0XS AI"
          text3="Stop going in blind! Elevate your trading and risk mitigation with top of the line AI analysis tools."
          options={[
            "Increase Profit Potential",
            "Automate Trading Strategies",
            "Calculated Decisions",
          ]}
        />
      </div>
    </div>
  );
};

export default Features;
