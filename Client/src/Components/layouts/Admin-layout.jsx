import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Admin-layout.css"

const AdminLayout = () => {
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
