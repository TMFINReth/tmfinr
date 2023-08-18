import classNames from "classnames";
import styles from "./LastPrices.module.css";

const LastPrices = () => {
  return (
    <div className="overflow-x-hidde pb-4 mb-4 bg-gray-100/5 w-full">
      <div
        className={classNames(
          styles.contentMover,
          "text-white flex flex-row mt-4 mb-4n"
        )}
      >
        <div className={classNames("flex flex-row min-w-fit ml-8 mr-8")}>
          <div className={classNames("flex flex-row")}>
            <i></i>
            <span className="text-green-600 mr-2">TOP GAINERS (6hrs): </span>
          </div>
          <div className={classNames("flex flex-row")}>
            <span className="mr-2">TOKEN X</span>
            <i className="mar-2"></i>
            <span>+10%</span>
          </div>
        </div>

        <div className={classNames("flex flex-row min-w-fit ml-8 mr-8")}>
          <div className={classNames("flex flex-row")}>
            <i></i>
            <span className="text-green-600 mr-2">TOP GAINERS (6hrs): </span>
          </div>
          <div className={classNames("flex flex-row")}>
            <span className="mr-2">TOKEN X</span>
            <i className="mar-2"></i>
            <span>+10%</span>
          </div>
        </div>

        <div className={classNames("flex flex-row min-w-fit ml-8 mr-8")}>
          <div className={classNames("flex flex-row")}>
            <i></i>
            <span className="text-green-600 mr-2">TOP GAINERS (6hrs): </span>
          </div>
          <div className={classNames("flex flex-row")}>
            <span className="mr-2">TOKEN X</span>
            <i className="mar-2"></i>
            <span>+10%</span>
          </div>
        </div>

        <div className={classNames("flex flex-row min-w-fit ml-8 mr-8")}>
          <div className={classNames("flex flex-row")}>
            <i></i>
            <span className="text-green-600 mr-2">TOP GAINERS (6hrs): </span>
          </div>
          <div className={classNames("flex flex-row")}>
            <span className="mr-2">TOKEN X</span>
            <i className="mar-2"></i>
            <span>+10%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastPrices;
