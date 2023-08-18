import { Button } from "../../commons";

const Charts = () => {
  return (
    <div className="flex items-center flex-col mt-28">
      <h1 className="font-bold mb-9 text-white text-4xl">
        Get relevant analytics, instantly
      </h1>
      <div className="flex flex-row justify-center w-4/5">
        <img src="/media/img/Group-427319673-p-2000.png" />
      </div>

      <Button
        title="Join the Beta on Telegram"
        type="primary"
        className="my-5"
      />
    </div>
  );
};

export default Charts;
