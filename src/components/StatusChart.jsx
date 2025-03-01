import React, {  useEffect,  useState } from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
} from "recharts";
import { userRequest } from "../requestMethods";

const StatusChart = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [orderAmount, setOrderAmount] = useState([]);

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("orders/year");
        // console.log(res);
        const pendingStatus = res.data.filter(
          (item) => item.stat[0] === "pending"
        );
        const cancelledStatus = res.data.filter(
          (item) => item.stat[0] === "cancelled"
        );
        const complitedStatus = res.data.filter(
          (item) => item.stat[0] === "complited"
        );
        setOrderAmount([
          {
            name: "در انتظار",
            count: pendingStatus.length,
          },
          {
            name: "لغو شده",
            count: cancelledStatus.length,
          },
          {
            name: "کامل شده",
            count: complitedStatus.length,
          },
        ]);
      } catch {}
    };
    getStats();
  }, []);
  // console.log(orderAmount);

  const COLORS = ["#d17f49", "#c34a53", "#418b64", "#545454"];

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  return (
    <div className=" shadow m-2 sm:m-5 py-1 px-3 sm:py-3 sm:px-5  text-white bg-gray-800 rounded-2xl">
      <h2 className="  text-md  mx-2 mb-4">وضعیت سفارشات</h2>
      <div className="flex flex-col md:flex-row items-center">
        <div className="">
          <PieChart width={200} height={200}>
            <Pie
              activeIndex={activeIndex}
              data={orderAmount}
              dataKey="count"
              outerRadius={100}
              fill="green"
              onMouseEnter={onPieEnter}
              style={{ cursor: "pointer", outline: "none" }} // Ensure no outline on focus
            >
              {orderAmount.map((entry, index) => (
                
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
        <div className="mr-8 w-40">
          <div className="flex my-3 items-center">
            <div className="h-5 w-5 bg-orange-400/50 rounded-full mx-3"></div>
            <span className="">در انتظار برسی</span>
          </div>
          <div className="flex my-3 items-center">
            <div className="h-5 w-5 bg-green-600/50 rounded-full mx-3"></div>
            <span className="">تکمیل شده</span>
          </div>
          <div className="flex my-3 items-center">
            <div className="h-5 w-5 bg-red-600/50 rounded-full mx-3"></div>
            <span className="">لغو شده</span>
          </div>
          <div className="flex my-3 items-center">
            <div className="h-5 w-5 bg-gray-600 rounded-full mx-3"></div>
            <span className="">پیشنویس شده</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StatusChart;
