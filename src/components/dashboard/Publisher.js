
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
import { FaFileContract } from "react-icons/fa";
import { FiLogOut} from "react-icons/fi";
import { HiDocumentReport } from "react-icons/hi";
import { BiCog } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";


//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./AllDashboard.css";


const Publisher = () => {
  
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
              <p>{menuCollapse ? "Evc" : "Publisher Dashboard"}</p>
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
              <MenuItem active={window.location.pathname === "/publisher/project-status"} icon={<FaFileContract />}>Project status<NavLink to="/publisher/project-status" /> </MenuItem>   
            <MenuItem active={window.location.pathname === "/publisher/allpublise"} icon={<HiDocumentReport />}>All project <NavLink  to="/publisher/allpublise" /> </MenuItem>  
              <MenuItem  icon={<BiCog />}>Settings</MenuItem>
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

export default Publisher;
