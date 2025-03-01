import React, { useEffect, useMemo, useState } from "react";
import Chart from "./Chart";
import { userRequest } from "../requestMethods";

const OrderChart = () => {
  const [orderQuantity, setOrderQuantity] = useState([]);
  const months = useMemo(
    () => [
      "فروردین",
      "اردیبهشت",
      "خرداد",
      "تیر",
      "مرداد",
      "شهریور",
      "مهر",
      "آبان",
      "آذر",
      "دی",
      "بهمن",
      "اسفند",
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("orders/year");
        res.data.map((item) => {
          console.log('orders',item);
          setOrderQuantity((prev) => [
            ...prev,
            {
              name: months[item._id - 1],
              "جمع سفارشات ": item.quantity,
            },
          ]);
        });
      } catch {}
    };
    getStats();
  }, [months]);
  return (
    <div className="flex-1 min-w-64 max-w-96  ">
      <Chart
        classs="m-2 sm:m-5 py-1 px-3 sm:py-3 sm:px-5  shadow bg-gray-800 rounded-2xl text-white "
        c1= "#92b5b9"
        c2= "#92b5b9"
        c3= "#92b5b9"
        height1="3"
        height2="2"
        data={orderQuantity}
        title="سفارش ماهانه"
        grid
        dataKey="جمع سفارشات "
      />
    </div>
  );
};

export default OrderChart;
