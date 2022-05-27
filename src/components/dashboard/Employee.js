
//import useState hook to create menu collapse state
import React, { useState } from "react";
import {NavLink, Outlet} from "react-router-dom"

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { MdTask } from "react-icons/md";
import { FiLogOut} from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";

//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./AllDashboard.css";


const Employee = () => {
  
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
      <div style={{ display: "flex", height: "100vh", overflow: "scroll initial"}} id="sidebarHeader">
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p>{menuCollapse ? "Evc" : "Employee Dashboard"}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
                {/* changing menu collapse icon on click */}
              {menuCollapse ? (
                <GiHamburgerMenu/>
              ) : (
                <GiHamburgerMenu/>
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem active={window.location.pathname === "/employee/new-task"} icon={<MdTask />}>New Project <NavLink to="/employee/new-task" /> </MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
          <NavLink to="/login">
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
            </NavLink>
          </SidebarFooter>
        </ProSidebar>
        <Outlet />
      </div>
  );
}

export default Employee;
