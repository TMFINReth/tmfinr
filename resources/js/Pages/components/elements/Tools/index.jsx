const Tools = () => {
  const items = [
    {
      id: 1,
      img: "/media/img/wired-outline-962-social-media-marketing-1.png",
      title: "Social Sentiment & Analysis",
    },
    {
      id: 2,
      img: "/media/img/wired-outline-298-coins-1-1.png",
      title: "Liquidity Pool Management",
    },
    {
      id: 3,
      img: "/media/img/wired-outline-1901-burning-fuel-flame-1.png",
      title: "Gas Fee Simulator",
    },
    {
      id: 4,
      img: "/media/img/wired-outline-147-basket-trolley-shopping-card-plus-1.png",
      title: "BuyBot",
    },
    {
      id: 5,
      img: "/media/img/wired-outline-421-wallet-purse-morph-1.png",
      title: "Portfolio & Wallet Tracking",
    },
    {
      id: 6,
      img: "/media/img/wired-outline-297-coin-eth-1.png",
      title: "Cross-Chain Shibarium Bridge",
    },
    {
      id: 7,
      img: "/media/img/wired-outline-134-target-1.png",
      title: "Sniper Bot",
    },
    {
      id: 8,
      img: "/media/img/wired-outline-65-magnifier-plus-1.png",
      title: "Anti-Rug Auditor",
    },
    {
      id: 9,
      img: "/media/img/wired-outline-297-coin-eth-2.png",
      title: "Multisender Bot",
    },
  ];

  return (
    <div className="flex flex-col items-center mt-28 mb-10">
      <div className="">
        <h1 className="font-bold mb-9 text-white text-4xl">
          All the tools you need on{" "}
          <span className="text-primary">Shibarium Blockchain</span>
        </h1>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-6 justify-center ">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col max-w-[280px] aspect-square justify-center items-center border border-[#FFFFFF88]  p-7 rounded-2xl min-w-[180px] min-h-[180px] hover:bg-gradient-to-br hover:from-slate-700 hover:to-black transition-all"
          >
            <img className="mb-5" src={item.img} />
            <span className="font-semibold text-center text-xl lg:text-lg">
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
