import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { updateUser } from "../redux/apiCalls";

const User = () => {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const user = useSelector((state) =>
    state.user.users.find((product) => product._id === productId)
  );
  const [userInf, setUserInf] = useState([]);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUserInf((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    updateUser(productId, userInf, dispatch);
  };

  return (
    <div className="flex-6 p-5 items-start">
      <div className="flex justify-between items-center">
        <h1 className=""> </h1>
        <Link to={"/newUser"}>
          <button className="w-20 p-1 bg-teal-500 rounded text-white">
            ایجاد
          </button>
        </Link>
      </div>
      <div className="flex flex-col lg:flex-row mt-5 gap-5">
        <div className="flex-1 w-full p-5 shadow bg-gray-800 rounded-2xl text-white flex-col">
          <div className="flex items-center">
            <img
              className="w-10 h-10 ml-10 rounded-full object-cover"
              src="https://cdn-icons-png.flaticon.com/512/219/219969.png"
              alt=""
            />
            <div className="flex flex-col justify-between">
              <span className="boldShab">{user.fullname} </span>
              <span className="">برنامه نویس</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-base boldShab text-gray-400 my-5">اطلاعات حساب</span>
            <div className="flex items-center mb-5 text-white">
              <PermIdentity className="text-base" />
              <span className="mr-1">{user.userName}</span>
            </div>
            <div className="flex items-center mb-5 text-white">
              <CalendarToday className="text-base" />
              <span className="mr-1">{user.role}</span>
            </div>
            <span className="text-base boldShab text-gray-400 my-5">اطلاعات کاربر</span>
            <div className="flex items-center mb-5 text-white">
              <PhoneAndroid className="text-base" />
              <span className="mr-1">{user.mobile}</span>
            </div>
            <div className="flex items-center mb-5 text-white">
              <MailOutline className="text-base" />
              <span className="mr-1">{user.email}</span>
            </div>
            <div className="flex items-center mb-5 text-white">
              <LocationSearching className="text-base" />
              <span className="mr-1">ایران. تبریز</span>
            </div>
          </div>
        </div>
        <div className="flex-4 p-5 shadow flex flex-col bg-gray-800 rounded-2xl text-white">
          <span className="text-2xl">ویرایش</span>
          <form className="flex flex-col lg:flex-row justify-between mt-5">
            <div className="flex-3 flex flex-wrap">
              {[
                { label: "نام کاربری", name: "userName", type: "text", placeholder: user.userName },
                { label: "نام و نام خانوادگی", name: "fullname", type: "text", placeholder: user.fullname },
                { label: "نقش", name: "role", type: "text", placeholder: user.role },
                { label: "شماره تماس", name: "mobile", type: "tel", placeholder: user.mobile },
                { label: "ایمیل", name: "email", type: "email", placeholder: user.email },
                { label: "رمز عبور", name: "password", type: "password", placeholder: "*********" },
              ].map((input, index) => (
                <div key={index} className="flex flex-col w-full lg:w-[50%] mt-3 mb-10">
                  <label className="mb-1 text-base" htmlFor={input.name}>{input.label}</label>
                  <input
                    className="w-full lg:w-[250px] h-8 px-3 py-4 border border-blue-950 shadow bg-blue-600/10 outline-none"
                    onChange={handleChange}
                    style={{ borderBottom: "1px solid gray" }}
                    type={input.type}
                    placeholder={input.placeholder}
                    name={input.name}
                    id={input.name}
                  />
                </div>
              ))}
            </div>
            <div className="flex-1 flex flex-col justify-between items-center">
              <label htmlFor="img" className="cursor-pointer">
                <Publish />
              </label>
              <input className="hidden" type="file" name="img" id="img" />
              <img
                className="w-24 h-24"
                src="https://cdn-icons-png.flaticon.com/512/219/219969.png"
                alt=""
              />
              <button onClick={handleClick} className="p-1 rounded-md bg-teal-600 text-white">
                به روز رسانی
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
