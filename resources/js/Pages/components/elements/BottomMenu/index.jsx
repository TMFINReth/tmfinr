import { Button } from "../../commons";

const BottomMenu = () => {
  return (
    <div className="flex flex-row text-white justify-between items-center md:flex-col gap-4 xs:gap-6">
      <div className="flex flex-row items-center gap-10">
        <div className="w-14 cursor-pointer">
          <img src="/media/img/oxs-7.png" />
        </div>
        <div className="flex flex-row gap-10 lg:gap-4 md:gap-2 xs:flex-col hover:cursor-pointer">
          <a className="hover:bg-gray-900 px-4 py-2 rounded-3xl">Home</a>
          <a className="hover:bg-gray-900 px-4 py-2 rounded-3xl">Dashboard</a>
          <a className="hover:bg-gray-900 px-4 py-2 rounded-3xl">Community</a>
          <a className="hover:bg-gray-900 px-4 py-2 rounded-3xl">Ecosystem</a>
        </div>
      </div>
      <div className="flex flex-row gap-6 md:gap-4 items-center">
        <Button title="Login" type="border" />
        <a className="w-10">
          <img src="/media/img/Group-427319675.png" />
        </a>
        <a className="w-8">
          <img src="/media/img/iconmonstr-twitter-1-8-1.png" />
        </a>
      </div>
    </div>
  );
};

export default BottomMenu;
