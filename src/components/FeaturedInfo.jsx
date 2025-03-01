import {
  ArrowDownward,
  ArrowUpward,
  PointOfSaleOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import AssignmentReturnIcon from "@mui/icons-material/AssignmentReturn";
import SavingsIcon from "@mui/icons-material/Savings";
import { userRequest } from "../requestMethods";
import React, { useEffect, useState } from "react";

const FeaturedInfo = () => {
  var nf = new Intl.NumberFormat();

  const [income, setIncomes] = useState([]);
  const [incomepercent, setIncomePercent] = useState(0);
  const [sellpercent, setSellPercent] = useState(0);
  useEffect(() => {
    const getincomes = async () => {
      try {
        const res = await userRequest.get("orders/income");
        console.log("res345", res.data);

        setIncomes(res.data[1]);
        setIncomePercent((res.data[1].total * 100) / res.data[0].total - 100);
        setSellPercent(
          (res.data[1].quantity * 100) / res.data[0].quantity - 100
        );
      } catch {}
    };
    getincomes();
  }, []);

  let monthName;
  const monthDefini = () => {
    income._id === "01" && (monthName = "فروردین");
    income._id === "02" && (monthName = "اردیبهشت");
    income._id === "03" && (monthName = "خرداد");
    income._id === "04" && (monthName = "تیر");
    income._id === "05" && (monthName = "مرداد");
    income._id === "06" && (monthName = "شهریور");
    income._id === "07" && (monthName = "مهر");
    income._id === "08" && (monthName = "آبان");
    income._id === "09" && (monthName = "آذر");
    income._id === "10" && (monthName = "دی");
    income._id === "11" && (monthName = "بهن");
    income._id === "12" && (monthName = "اسفند");
    return monthName;
  };

  // console.log('w',income);

  return (
    <div className="flex justify-between flex-wrap">
      <div className="flex-1 xl:!w-1/5 md:w-1/3 flex flex-col  text-white  bg-gray-800 rounded-2xl h-[150px] mx-5 p-7 shadow">
        <div className=" items-center flex justify-between ">
          <span className="flex  text-md ">
            درآمد{" "}
            <h3 className="mr-2 text-green-300/50 font-bold ">
              {monthDefini()}
            </h3>
          </span>
          <span className="flex text-sm items-center mr-5 ltr">
            {Math.floor(incomepercent)}%{" "}
            {incomepercent > 0 && (
              <ArrowUpward className="text-sm ml-1 text-green-500" />
            )}
            {incomepercent < 0 && (
              <ArrowDownward className="text-sm ml-1 text-red-500" />
            )}
          </span>
        </div>
        <div className="flex items-center  justify-between ">
          <span className=""> {nf.format(income.total)} ریال </span>

          <SavingsIcon className="!text-[70px] !text-green-300/60 mr-5" />
        </div>
      </div>
      <div className="flex-1 xl:!w-1/5 md:w-1/3 flex flex-col  text-white  bg-gray-800 rounded-2xl h-[150px] mx-5 p-7 shadow">
        <div className=" items-center flex justify-between ">
          <span className="flex  text-md ">
            فروش{" "}
            <h3 className="mr-2 text-orange-300/80 font-bold ">
              {monthDefini()}
            </h3>
          </span>
          <span className="flex text-sm items-center mr-5 ltr">
            {Math.floor(incomepercent)}%{" "}
            {incomepercent > 0 && (
              <ArrowUpward className="text-sm ml-1 text-green-500" />
            )}
            {incomepercent < 0 && (
              <ArrowDownward className="text-sm ml-1 text-red-500" />
            )}
          </span>
        </div>
        <div className="flex items-center  justify-between ">
          <span className=""> {nf.format(income.total)} ریال </span>

          <ShoppingCartOutlined className="!text-[70px] !text-orange-300/80 mr-5" />
        </div>
      </div>
      <div className="flex-1 xl:!w-1/5 md:w-1/3 flex flex-col  text-white  bg-gray-800 rounded-2xl h-[150px] mx-5 p-7 shadow">
        <div className=" items-center flex justify-between ">
          <span className="flex  text-md ">
            مرجوع{" "}
            <h3 className="mr-2 !text-blue-300/80 font-bold ">
              {monthDefini()}
            </h3>
          </span>
          <span className="flex text-sm items-center mr-5 ltr">
            {Math.floor(incomepercent)}%{" "}
            {incomepercent > 0 && (
              <ArrowUpward className="text-sm ml-1 text-green-500" />
            )}
            {incomepercent < 0 && (
              <ArrowDownward className="text-sm ml-1 text-red-500" />
            )}
          </span>
        </div>
        <div className="flex items-center  justify-between ">
          <span className=""> {nf.format(income.total)} ریال </span>

          <AssignmentReturnIcon className="!text-[70px] !text-blue-300/80 mr-5" />
        </div>
      </div>
      <div className="flex-1 xl:!w-1/5 lg:w-1/3 md:w-1/3 flex flex-col  text-white  bg-gray-800 rounded-2xl h-[150px] mx-5 p-7 shadow">
        <div className=" items-center flex justify-between ">
          <span className="flex  text-md ">
            خرید{" "}
            <h3 className="mr-2 text-red-300/80  font-bold ">
              {monthDefini()}
            </h3>
          </span>
          <span className="flex text-sm items-center mr-5 ltr">
            {Math.floor(sellpercent)}%{" "}
            {sellpercent > 0 && (
              <ArrowUpward className="text-sm ml-1 text-green-500" />
            )}
            {sellpercent < 0 && (
              <ArrowDownward className="text-sm ml-1 text-red-500" />
            )}
          </span>
        </div>
        <div className="flex items-center  justify-between ">
          <span className=""> {nf.format(income.quantity)} محصول </span>

          <LocalMallIcon className="!text-[70px] !text-red-300/80  mr-5" />
        </div>
      </div>
    </div>
  );
};

export default FeaturedInfo;
