import React, { useEffect, useMemo, useState } from "react";
import FeaturedInfo from "../components/FeaturedInfo";
import Chart from "../components/Chart";
import WidgetLg from "../components/WidgetLg";
import WidgetSm from "../components/WidgetSm";
import { userRequest } from "../requestMethods";

const Home = () => {
  const [userStats, setUserStats] = useState([]);
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
          console.log("orders", item);
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

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("/users/stats");
        res.data.map((item) => {
          console.log("users", item);
          setUserStats((prev) => [
            ...prev,
            {
              name: months[item._id - 1],
              "کاربر جدید": item.total,
            },
          ]);
        });
      } catch {}
    };
    getStats();
  }, [months]);
  return (
    <div className=" mt-5 w-[calc(100vw-150px)]">
      <FeaturedInfo />
      <div className="flex">
      <Chart
        c1="#d15864"
        c2="#d15864"
        c3="#d15864"
        height1="3"
        height2="1"
        classs="m-5 py-3 px-5  text-md  flex-1 shadow bg-gray-800 rounded-2xl text-white"
        data={userStats}
        title="فعالیت کاربران"
        grid
        dataKey="کاربر جدید"
      />
      <Chart
        classs="m-5 py-3 px-5  text-md  flex-1 shadow bg-gray-800 rounded-2xl text-white "
        c1= "#92b5b9"
        c2= "#92b5b9"
        c3= "#92b5b9"
        height1="3"
        height2="1"
        data={orderQuantity}
        title="سفارش ماهانه"
        grid
        dataKey="جمع سفارشات "
      />
      </div>
      <div className="flex sm:flex-col m-5 ">
        <WidgetLg />
        <WidgetSm />
      </div>
    </div>
  );
};

export default Home;
