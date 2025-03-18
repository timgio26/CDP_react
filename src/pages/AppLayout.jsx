import { Outlet } from "react-router";
import { NavItem } from "../Components/NavItem";
import { Logo } from "../Components/Logo";
import { RiDashboardLine } from "react-icons/ri";
import { PiUserList } from "react-icons/pi";
import { FaRegCalendarAlt } from "react-icons/fa";
export function AppLayout() {
  return (
    <div className="flex flex-col md:flex-row h-svh w-svw">
      <div className="w-1/6 min-w-[150px]">
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
      </div>
      <div className="bg-slate-100 flex flex-1">
        {/* <h1>content</h1> */}
        <Outlet />
      </div>
    </div>
  );
}
