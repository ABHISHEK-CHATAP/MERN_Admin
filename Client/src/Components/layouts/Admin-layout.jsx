import React from "react";
import { NavLink, Navigate, Outlet } from "react-router-dom";
import "./Admin-layout.css"
import { useAuth } from "../../Store/AuthProvider";

const AdminLayout = () => {
  const {activeUser} = useAuth();
console.log("Admin layout :", activeUser);

if(!activeUser.isAdmin){
  return <Navigate to="/" />;
}

  return (
    <>
      <ul>
        <li className="adminlinks">
        <NavLink to="/admin/users">user</NavLink>
        </li>
        <li className="adminlinks">
        <NavLink to="/admin/contacts">Contact</NavLink>
        </li>
      </ul>
      <Outlet/>
    </>
  );
};

export default AdminLayout;
