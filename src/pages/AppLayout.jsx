import { Outlet } from "react-router";
import { NavItem } from "../Components/NavItem";
import { Logo } from "../Components/Logo";
import { RiDashboardLine } from "react-icons/ri";
import { PiUserList } from "react-icons/pi";
import { FaRegCalendarAlt } from "react-icons/fa";
export function AppLayout() {
  return (
    <div className="flex flex-row h-svh w-svw">
      <div className="w-1/6  min-w-[150px]">
        <Logo />
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
      <div className="bg-slate-100 w-full">
        {/* <h1>content</h1> */}
        <Outlet />
      </div>
    </div>
  );
}
