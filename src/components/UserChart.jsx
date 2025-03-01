import React, { useEffect, useMemo, useState } from "react";
import Chart from "../components/Chart";
import { userRequest } from "../requestMethods";

const UserChart = () => {
  const [userStats, setUserStats] = useState([]);
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
        const res = fetch("/users.json");
        // await userRequest.get("/users/stats");
        const data = await res.json();
        data.map((item) => {
          console.log('users',item);
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
    <div className="flex-1 min-w-64 max-w-96 ">
      <Chart
        classs="m-2 sm:m-5 py-1 px-3 sm:py-3 sm:px-5 shadow text-white bg-gray-800 rounded-2xl "
        c1= "#d15864"
        c2= "#d15864"
        c3= "#d15864"
        height1="3"
        height2="2"
        data={userStats}
        title="ثبتنام ماهانه"
        grid
        dataKey="کاربر جدید"
      />
    </div>
  );
};

export default UserChart;
