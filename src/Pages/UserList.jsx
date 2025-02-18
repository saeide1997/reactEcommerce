import React, { useEffect, useState } from "react";
import { DataGrid} from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { DeleteOutline } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../redux/apiCalls";
import TimeAgo from "timeago-react";
import * as timeago from "timeago.js";

// import it first.
import fa from "timeago.js/lib/lang/fa";

// register it.
timeago.register("fa", fa);

const UserList = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.users);

  useEffect(() => {
    getUser(dispatch);
  }, [dispatch]);

  const columns = [
    // { field: "_id", headerName: "ID", width: 100 },
    {
      field: "userName",
      headerName: "نام کاربری",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="flex justify-center items-center">
            <img
              className="w-10 h-10 ml-2"
              src="https://cdn-icons-png.flaticon.com/512/219/219969.png"
              alt="userImage"
            />
            {params.row.userName}
          </div>
        );
      },
    },
    { field: "email", headerName: "ایمیل", width: 250 },
    {
      field: "createdAt",
      headerName: "تاریخ عضویت",
      width: 180,
      renderCell: (params) => {
        return (
          <div>
            <TimeAgo datetime={params.row.createdAt} locale="fa" />
          </div>
        );
      },
    },
    { field: "updatedAt", headerName: "تاریخ بروزرسانی", width: 200,
      renderCell: (params) => {
        return (
          <div>
            <TimeAgo datetime={params.row.updatedAt} locale="fa" />
          </div>
        );
      },
     },
    {
      field: "action",
      headerName: "عملیات",
      width: 180,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row._id}>
              <button className="ml-2 px-4 bg-teal-700 h-8 flex justify-center rounded-md items-center">
                ویرایش
              </button>
            </Link>
            <DeleteOutline
              className="text-red-500 !text-3xl"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  const rows = [
    { id: 1, userName: "Hello", email: "World" },
    { id: 2, userName: "DataGridPro", email: "is Awesome" },
    { id: 3, userName: "MUI", email: "is Amazing" },
  ];

  const [data, setData] = useState(rows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <div className=" mx-5 mt-10 !max-w-[calc(100vw-200px)]">
      <DataGrid
        className=" h-[80%] rounded-lg"
        initialState={{
          pagination: {
            paginationModel: { pageSize: 8, page: 0 },
          },
        }}
        rows={user}
        getRowId={(row) => row._id}
        disableSelectionOnClick
        columns={columns}
        checkboxSelection
      />
    </div>
  );
};

export default UserList;
