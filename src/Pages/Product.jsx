import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Chart from "../components/Chart";
import { productData } from "../dummyData";
import { Publish } from "@mui/icons-material";
import { getProduct, updateProduct } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { updateProductSuccess } from "../redux/productRedux";

const Product = ({ history }) => {
  const location = useLocation();
  // const alert = useAlert();
  console.log(location.pathname.split("/")[2]);
  const productId = location.pathname.split("/")[2];
  const product = useSelector((state) =>
    state.product.products.find((product) => product._id === productId)
  );
  const img =
  "https://st4.depositphotos.com/13324256/24475/i/450/depositphotos_244751462-stock-photo-top-view-product-lettering-made.jpg";
  
  const userInfo = {
    "_id": product._id,
    "title": product.title,
    "desc": product.desc,
    "price": product.price,
    "img": product.img,
    "inStock": product.inStock,
  }
  
  const [userInf, setUserInf] = useState(userInfo);
  const [cat, setCat] = useState(product.categories);
  const [size, setSize] = useState(product.size);
  const [color, setColor] = useState(product.color);
  const [avatar, setAvatar] = useState();
  const [avatarPreview, setAvatarPreview] = useState(
    product.img ? product.img : img
  );
  
  console.log('history', history);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUserInf((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleCat = (e) => {
    setCat(e.target.value.split(","));
  };

  const handleColor = (e) => {
    setColor(e.target.value.split(","));
  };

  const handleSize = (e) => {
    setSize(e.target.value.split(","));
  };

  const updateProductSubmit = async(e) => {
    e.preventDefault();

    const productInf = {
      ...userInf,
      categories: cat,
      color: color,
      size: size,
    };
    console.log(22,productInf);
    await updateProduct(productId, productInf, dispatch);
    await getProduct(dispatch)
    // dispatch(Product(myProduct));
    if(dispatch(updateProductSuccess(productInf))){
      console.log('dispach');
      setNewData()
    }
  };

  const setNewData = ()=>{
   
    const myProduct = new FormData();
    
    myProduct.set("title", userInf.title);
    myProduct.set("desc", userInf.desc);
    myProduct.set("price", userInf.price);
    myProduct.set("color", color);
    myProduct.set("categories", cat);
    myProduct.set("size", size);
    myProduct.set("avatar", avatar);
  }

  const updateProductImg = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatarPreview(reader.result);
        setAvatar(reader.result);
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   const productInf = {
  //     ...userInf,
  //     categories: cat,
  //     color: color,
  //     size: size,
  //   };
  //   updateProduct(productId, productInf, dispatch);
  // };

  return (
    <div className="flex-6 p-5 items-start">
      <div className=" flex justify-between items-center">
        <h1 className=""> </h1>
        <Link to={"/newProduct"}>
          <button className="w-20 p-1 bg-teal-500 rounded text-white ">
            ایجاد
          </button>
        </Link>
      </div>
      <div className="flex ">
        <div className="flex-1 p-5 m-5  shadow  bg-gray-800 rounded-2xl text-white">
          <Chart data={productData} title=" فروش" grid dataKey="فروش" />
        </div>
        <div className="flex-1 flex p-5 m-5  shadow  bg-gray-800 rounded-2xl text-white">
          <div className="flex-2 flex ml-10 items-center">
            <img
              className="w-full h-full rounded-md object-cover ml-5"
              src={userInf.img}
              alt=""
            />
          </div>
          <div className="flex-3 mt-3 ">
            <div className=" flex ">
              <span className=""> شناسه: </span>
              <span className="">{userInf._id}</span>
            </div>
            <div className=" flex ">
              <span className=""> نام کالا: </span>
              <span className="">{userInf.title}</span>
            </div>
            <div className=" flex ">
              <span className=""> قیمت کالا: </span>
              <span className="">{userInf.price}</span>
            </div>
            <div className=" flex ">
              <span className=""> سایز کالا: </span>
              <span className="">{size.join(' ')}</span>
            </div>
            <div className=" flex ">
              <span className="">رنگ کالا:</span>
              <span className="">{color.join(' ')}</span>
            </div>
            <div className=" flex ">
              <span className="">موجودی: </span>
              <span className="">{(userInf.inStock === true)?' موجود':' ناموجود' }</span>
            </div>
          </div>
        </div>
      </div>
      <div className=" p-5 m-5  shadow  bg-gray-800 rounded-2xl text-white">
        <form className="flex justify-between mt-5" action="">
          <div className="flex flex-wrap">
            <div className="flex flex-col w-[50%] mt-3">
              <label className="mb-1  text-md " htmlFor="">
                نام محصول
              </label>
              <input
                className=" w-[50%] h-8 px-2  border border-blue-950 shadow bg-blue-600/10 outline-none"
                onChange={handleChange}
                style={{ borderBottom: "1px solid gray" }}
                type="text"
                placeholder={userInf.title}
                name="title"
                value={userInf.title}
                id=""
              />
            </div>
            <div className="flex flex-col w-[50%] mt-3">
              <label className="mb-1  text-md " htmlFor="">
                توضیحات محصول
              </label>
              <input
                className=" w-[50%] h-8 px-2  border border-blue-950 shadow bg-blue-600/10 outline-none"
                onChange={handleChange}
                style={{ borderBottom: "1px solid gray" }}
                type="text"
                placeholder={userInf.desc}
                name="desc"
                value={userInf.desc}
                id=""
              />
            </div>
            <div className="flex flex-col w-[50%] mt-3">
              <label className="mb-1  text-md " htmlFor="">
                قیمت محصول
              </label>
              <input
                className=" w-[50%] h-8 px-2  border border-blue-950 shadow bg-blue-600/10 outline-none"
                onChange={handleChange}
                style={{ borderBottom: "1px solid gray" }}
                type="text"
                placeholder={userInf.price}
                name="price"
                value={userInf.price}
                id=""
              />
            </div>
            <div className="flex flex-col w-[50%] mt-3">
              <label className="mb-1  text-md " htmlFor="">
                کتگوری محصول
              </label>
              <input
                className=" w-[50%] h-8 px-2  border border-blue-950 shadow bg-blue-600/10 outline-none"
                style={{ borderBottom: "1px solid gray" }}
                type="text"
                onChange={handleCat}
                placeholder={cat}
                value={cat}
                name="categories"
                id=""
              />
            </div>
            <div className="flex flex-col w-[50%] mt-3">
              <label className="mb-1  text-md " htmlFor="">
                رنگ محصول
              </label>
              <input
                className=" w-[50%] h-8 px-2  border border-blue-950 shadow bg-blue-600/10 outline-none"
                onChange={handleColor}
                style={{ borderBottom: "1px solid gray" }}
                type="text"
                placeholder={color}
                value={color}
                name="color"
                id=""
              />
            </div>
            <div className="flex flex-col w-[50%] mt-3">
              <label className="mb-1  text-md " htmlFor="">
                سایز محصول
              </label>
              <input
                className=" w-[50%] h-8 px-2  border border-blue-950 shadow bg-blue-600/10 outline-none"
                onChange={handleSize}
                style={{ borderBottom: "1px solid gray" }}
                type="text"
                placeholder={size}
                value={size}
                name="size"
                id=""
              />
            </div>
            <div className="flex flex-col w-[50%] mt-3">
              <label className="mb-1  text-md " for="stock">
                موجودی
              </label>
              <select
                onChange={handleChange}
                className="h-10 w-[50%] rounded-md pr-2  border border-blue-950 shadow bg-blue-600/10 outline-none"
                name="inStock"
                id="stock"
              >
                <option value="true">بله</option>
                <option value="false">خیر</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col justify-between items-center">
            <div className="flex justify-centern flex-col items-center">
            <img className="min-w-48 min-h-48 max-w-56 max-h-56" src={avatarPreview} alt="" />
              <label htmlFor="img">
                <Publish className="cursor-pointer mt-4" />
              </label>
              <input
                onChange={updateProductImg}
                accept="image/*"
                className="hidden"
                type="file"
                name="avatar"
                id="img"
              />
            </div>
            <button
              onClick={updateProductSubmit}
              className="px-4 py-1 rounded-md bg-teal-600 text-white"
            >
              به روزرسانی
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
