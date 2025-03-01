import React, { useEffect } from "react";
import { getOrder } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import fa from "timeago.js/lib/lang/fa";
import * as timeago from "timeago.js";
import { AttachMoney } from "@mui/icons-material";
timeago.register("fa", fa);

const TotalSale = () => {
  var nf = new Intl.NumberFormat();
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order.orders);

  useEffect(() => {
    getOrder(dispatch);
  }, [dispatch]);
  let totalAmount = 0;
  for (let index = 0; index < orders.length; index++) {
    const element = orders[index];
    totalAmount += element.amount;
  }

  return (
    <div className="!text-orange-400/80 shadow bg-gray-800 rounded-2xl w-64 h-28  m-2 sm:m-5 py-1 px-3 sm:py-3 sm:px-5 justify-center flex items-center">
      <AttachMoney className="!text-[50px] " />
      <div className="flex flex-col">
        <div className="text-[20px] m-2">جمع فروش</div>
        <div className="text-[20px] mr-2">{nf.format(totalAmount)}</div>
      </div>
    </div>
  );
};

export default TotalSale;
