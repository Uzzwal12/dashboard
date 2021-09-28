import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { rows } from "../../dummyData";

import "./userList.css";

const UserList = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "user",
      headerName: "User",
      width: 130,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img src={params.row.avatar} alt="" className="userListImg" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 130 },
    { field: "status", headerName: "Status", width: 120 },
    { field: "transaction", headerName: "Transaction", width: 160 },
    {
      field: "action",
      headerName: "Action",
      width: 160,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/${params.row.id}`}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  const [data, setData] = useState(rows);
  const handleDelete = (id) => {
    setData(data.filter((obj) => obj.id !== id));
  };
  return (
    <div className="userlist">
      <span className="userListTitle">Users</span>
      <div style={{ height: 500, width: "100%" }}>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </div>
  );
};

export default UserList;
