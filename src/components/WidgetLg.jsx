import React, { useEffect, useState } from "react";
import { userRequest } from "../requestMethods";
import { format } from "timeago.js";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../redux/apiCalls";
import { Link } from "react-router-dom";

const WidgetLg = () => {
  var nf = new Intl.NumberFormat();
  const dispatch = useDispatch();
  const userInf = useSelector((state) => state.user.users);
  let statusColor
  // console.log(userInf);
  const statusCl = (status)=>{
  if (status === "pending") {
    statusColor = "bg-orange-500/50";
  }
  if (status === "cancelled") {
    statusColor = "bg-red-500/50";
  }
  if (status === "complited") {
    statusColor = "bg-green-500/50";
  }
  if (status === "draft") {
    statusColor = "bg-gray-500/50";
  }
  return statusColor
}
  useEffect(() => {
    getProduct(dispatch);
  }, [dispatch]);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("orders/orders/?new=true");
        setOrders(res.data);
      } catch {}
    };
    getOrders();
  }, []);
  return (
    <div className="flex-2 shadow p-5 mx-2 md:mx-5  text-white items-center bg-gray-800 rounded-2xl ">
      <span className="text-xl md:text-2xl lg:text-3xl">آخرین تراکنشها</span>
      <table className="border-separate border-spacing-1 sm:border-spacing-2 md:border-spacing-3 lg:border-spacing-5  w-full text-[10px] md:text-sm lg:text-base">
        <thead className="text-center ">
        <tr className=" flex items-center">
          <th className="flex-1">مشتری</th>
          <th className="flex-1">تاریخ</th>
          <th className="flex-1">مقدار</th>
          <th className="flex-1">وضعیت</th>
          <th className="flex-1">عملیات</th>
          </tr>
        </thead>
        <tbody className="text-center items-center ">
          {orders.map((order) => (
            <tr key={order._id} className=" flex items-center h-10 md:h-20">
              <td className="flex flex-1 items-center">
                <img
                  className="w-5 md:w-10 object-cover rounded-full ml-5"
                  src="https://cdn-icons-png.flaticon.com/512/219/219969.png"
                  alt=""
                />
                <span className="">
                  {/* {userInf.find((item) => item._id === order.userId).userName}{" "} */}
                </span>
              </td>
              <td className="flex-1 text-gray-500">{format(order.CreatedAt)}</td>
              <td className="flex-1 text-gray-500">{nf.format(order.amount)}</td>
              <td className="flex-1">
                <button className={" w-10 h-4 sm:w-14 sm:h-5 md:w-20 md:h-6 lg:h-8 flex items-center justify-center rounded-xl text-[9px] md:text-base " + statusCl(order.status)}>
                  {" "}
                  {order.status}
                </button>
              </td>
              <td className="flex-1 flex items-center justify-center">              
              <button className="bg-teal-600 shadow w-10 md:w-20 md:h-12 h-6 text-black font-semibold rounded-md text-[9px] md:text-base hover:shadow-none flex justify-center items-center ">
                <Link to={"/order/" + order._id}>
                جزییات سفارش
            </Link>
              </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WidgetLg;
