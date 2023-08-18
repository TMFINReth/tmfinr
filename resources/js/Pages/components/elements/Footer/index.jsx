import BottomMenu from "../BottomMenu";

const Footer = () => {
  return (
    <div className="flex flex-col mb-10 w-full">
      <div className="flex flex-col justify-center items-center mb-10 bg-[url('http://127.0.0.1:8000/media/img/Group-26.png')] min-h-[300px] font-bold text-4xl leading-relaxed">
        <span className="text-center">100% of profits go to our holders</span>
        <span className="text-primary">Invest in $0xS</span>
      </div>
      <BottomMenu />
    </div>
  );
};

export default Footer;
