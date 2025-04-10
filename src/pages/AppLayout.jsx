import { Outlet } from "react-router";
import { NavItem } from "../Components/NavItem";
import { Logo } from "../Components/Logo";
import { RiDashboardLine } from "react-icons/ri";
import { PiUserList } from "react-icons/pi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

export function AppLayout() {

  const [showMobileMenu,setShowMobileMenu] = useState(false)
  return (
    <div className="flex flex-col md:flex-row h-svh w-svw">
      <div className="md:w-1/6 min-w-[150px] flex flex-row md:flex-col w-full justify-between md:justify-start">
        <Logo />
        <div className="hidden md:block">
          <NavItem to="/">
            <RiDashboardLine /> Dashboard
          </NavItem>
          <NavItem to="/customers">
            <PiUserList /> Customers
          </NavItem>
          <NavItem>
            <FaRegCalendarAlt />
            Schedule
          </NavItem>
        </div>
        <div className="flex items-center m-4 md:hidden cursor-pointer" onClick={()=>setShowMobileMenu((curstate)=>!curstate)}>
          <RxHamburgerMenu />
        </div>
      </div>
      {showMobileMenu&&
            <div className="md:hidden">
            <NavItem to="/">
              <RiDashboardLine /> Dashboard
            </NavItem>
            <NavItem to="/customers">
              <PiUserList /> Customers
            </NavItem>
            <NavItem>
              <FaRegCalendarAlt />
              Schedule
            </NavItem>
          </div>
      }

      <div className="bg-slate-100 flex flex-1">
        {/* <h1>content</h1> */}
        <Outlet />
      </div>
    </div>
  );
}
