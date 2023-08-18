import classNames from "classnames";

const FeatureCard = ({
  rtl = true,
  src,
  text1 = "",
  text2 = "",
  text3 = "",
  options = [],
}) => {
  return (
    <div
      className={classNames("flex md:flex-col-reverse gap-5 justify-center ", {
        "flex-row": rtl,
        "flex-row-reverse": !rtl,
      })}
    >
      <div className="w-[40%] md:w-full flex flex-col">
        <span className="text-primary text-lg mb-3">{text1}</span>
        <span className="text-3xl font-bold">{text2}</span>
        <p className="text-[#FFFFFF88] mt-3 mb-4">{text3}</p>
        <div>
          {options.map((item, index) => {
            return (
              <div key={index} className="flex flex-row gap-3 mb-3">
                <img src="/media/img/Group-427319638.png" />
                <span>{item}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-[40%] md:w-full">
        <img src={src} />
      </div>
    </div>
  );
};

export default FeatureCard;
