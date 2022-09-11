import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../DummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function UserList({employee}) {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  
  const columns = [
    { field: "id", headerName: "ID", width: 120 },

    { field: "staffId", headerName: "StaffId", width: 120 },

    {
      field: "name",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            {/* <img className="userListImg" src={params.row.avatar} alt="" /> */}
            {params.row.name}
          </div>
        );
      },
    },

    { field: "email", headerName: "Email", width: 200 },
    
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "department",
      headerName: "Department",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
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

  return (
    <div className="userList">
       
      <DataGrid
        rows={employee}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        checkboxSelection
      />

    </div>
  );
}