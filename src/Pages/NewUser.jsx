import { Publish } from "@mui/icons-material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/apiCalls";

const NewUser = () => {
  const [userInf, setUserInf] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUserInf((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    addUser(userInf, dispatch);
  };

  return (
    <div className="flex flex-col items-center p-5 sm:flex-row sm:items-start">
      <div className="p-5 m-5 shadow bg-gray-800 rounded-2xl text-white w-full max-w-4xl">
        <form className="flex flex-col sm:flex-row justify-between mt-5">
          <div className="flex flex-wrap w-full sm:w-2/3">
            {[
              { label: "نام کاربری", name: "userName", type: "text" },
              { label: "نام و نام خانوادگی", name: "fullname", type: "text" },
              { label: "نقش", name: "role", type: "text" },
              { label: "شماره تماس", name: "mobile", type: "tel" },
              { label: "ایمیل", name: "email", type: "email" },
              { label: "رمز عبور", name: "password", type: "password" },
            ].map((input, index) => (
              <div key={index} className="flex flex-col w-full sm:w-1/2 px-2 mt-3">
                <label className="mb-1 text-base">{input.label}</label>
                <input
                  className="w-full h-10 px-3 border border-blue-950 bg-blue-600/10 outline-none"
                  onChange={handleChange}
                  type={input.type}
                  name={input.name}
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center w-full sm:w-1/3 mt-5 sm:mt-0">
            <div className="flex flex-col items-center">
              <label htmlFor="img" className="cursor-pointer">
                <Publish />
              </label>
              <input className="hidden" type="file" name="img" id="img" />
              <img
                className="w-24 h-24 mt-2"
                src="https://cdn-icons-png.flaticon.com/512/219/219969.png"
                alt=""
              />
            </div>
            <button
              onClick={handleClick}
              className="mt-4 p-2 rounded-md bg-teal-600 text-white w-full max-w-[200px]">
              به روز رسانی
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewUser;