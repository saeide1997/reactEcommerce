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
    <div className=" h-screen !max-w-[calc(100vw-180px)] mt-5 ">
      <div className="flex h-1/2 mx-3 ">
        <UserChart className="" />
        <OrderChart className="" />
        <SellChart className="" />
      </div>
      <div className="flex mx-3 h-1/2 mt-3">
        <StatusChart className="" />
        <div className="flex">
            <div>
          <TotalUser />
          <TotalSale />
            </div>
            <div>
          <TotalOrder />
          <TotalOrderQuantity />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Analisys;
