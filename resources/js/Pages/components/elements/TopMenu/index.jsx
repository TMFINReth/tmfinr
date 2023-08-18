import classNames from "classnames";
import { useState } from "react";
import { HambergerMenu } from "iconsax-react";

import { Button } from "../../commons";

const TopMenu = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className=" flex flex-row text-white justify-between items-center">
      <div className="flex flex-row items-center gap-10 xl:gap-6 lg:hidden md:hidden sm:hidden ">
        <div className="w-14 cursor-pointer">
          <img src="/media/img/oxs-7.png" />
        </div>
        <div className="flex flex-row gap-8 xl:gap-4 hover:cursor-pointer">
          <a className="hover:bg-gray-900 px-4 py-2 rounded-3xl">Home</a>
          <a className="hover:bg-gray-900 px-4 py-2 rounded-3xl">Dashboard</a>
          <a className="hover:bg-gray-900 px-4 py-2 rounded-3xl">Community</a>
          <a className="hover:bg-gray-900 px-4 py-2 rounded-3xl">Ecosystem</a>
        </div>
      </div>

      <div className="flex flex-row gap-6 lg:hidden md:hidden sm:hidden">
        <Button title="Connect Now" type="border" />
        <Button title="Telegram" type="primary" />
      </div>

      <div className="hidden lg:flex  lg:flex-col  lg:justify-between sm:flex  sm:flex-col  sm:justify-between w-full md:flex  md:flex-col  md:justify-between">
        <div className="flex flex-row justify-between w-full">
          <div className="w-14 cursor-pointer">
            <img src="/media/img/oxs-7.png" />
          </div>
          <button onClick={() => setOpen(() => !isOpen)}>
            <HambergerMenu size={32} />
          </button>
        </div>
        <div
          className={classNames({
            "flex flex-col mt-5": isOpen,
            hidden: !isOpen,
          })}
        >
          <a className="hover:bg-gray-900 px-4 py-2 rounded-3xl">Home</a>
          <a className="hover:bg-gray-900 px-4 py-2 rounded-3xl">Dashboard</a>
          <a className="hover:bg-gray-900 px-4 py-2 rounded-3xl">Community</a>
          <a className="hover:bg-gray-900 px-4 py-2 rounded-3xl">Ecosystem</a>
        </div>
        <div
          className={classNames({
            "flex flex-row justify-center gap-6 mt-8": isOpen,
            hidden: !isOpen,
          })}
        >
          <a className="px-8 py-2 border border-white border-solid rounded">
            login
          </a>
          <a className="px-8 py-2   rounded bg-primary">start for free</a>
        </div>
      </div>
    </div>
  );
};

export default TopMenu;
