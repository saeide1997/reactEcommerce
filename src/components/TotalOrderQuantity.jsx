import React, { useEffect } from "react";
import { getOrder } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import fa from "timeago.js/lib/lang/fa";
import * as timeago from "timeago.js";
import { Storefront } from "@mui/icons-material";
timeago.register("fa", fa);

const TotalOrderQuantity = () => {
    var nf = new Intl.NumberFormat();
    const dispatch = useDispatch();
    const orders = useSelector((state) => state.order.orders);
  
    useEffect(() => {
      getOrder(dispatch);
    }, [dispatch]);

    let totalOrderQuantity = 0;
    for (let index = 0; index < orders.length; index++) {
      const element = orders[index];
      for (let index = 0; index < element.products.length; index++) {
        const item = element.products[index];
        totalOrderQuantity += item.quantity;
        
      }
    }
  
    return (
        <div className="!text-teal-700 shadow bg-gray-800 rounded-2xl w-64 h-28 m-2 sm:m-5 py-1 px-3 sm:py-3 sm:px-5 justify-center flex items-center">
        <Storefront className="!text-[50px]" />
        <div className="flex flex-col">
          <div className="text-[20px] m-2">جمع کالاهای سفارشی</div>
          <div className="text-[20px] mr-2">{nf.format(totalOrderQuantity)} عدد</div>
        </div>
      </div>
    );
};

export default TotalOrderQuantity;