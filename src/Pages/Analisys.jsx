import OrderChart from "../components/OrderChart";
import SellChart from "../components/SellChart";
import StatusChart from "../components/StatusChart";
import TotalOrder from "../components/TotalOrder";
import TotalOrderQuantity from "../components/TotalOrderQuantity";
import TotalSale from "../components/TotalSale";
import TotalUser from "../components/TotalUser";
import UserChart from "../components/UserChart";

const Analisys = () => {
  return (
    <div className=" w-[calc(100vw-180px)] mt-5 ">
      <div className="flex flex-wrap mx-3 ">
        <UserChart className="" />
        <OrderChart className="" />
        <SellChart className="" />
      </div>
      <div className="flex flex-col md:flex-row mx-3 mt-3">
        <StatusChart className="" />
        <div className="flex flex-wrap">
            <div className="flex flex-wrap">
          <TotalUser />
          <TotalSale />
            </div>
            <div className="flex flex-wrap">
          <TotalOrder />
          <TotalOrderQuantity />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Analisys;
