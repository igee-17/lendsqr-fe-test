import Image from "next/image";
import { briefcase, arrowDown, home, signOut } from "../assets/icons";
import SideNavItem from "./SideNavItem";
import {
  sideNavBusinesses,
  sideNavCustomers,
  sideNavSettings,
} from "../utils/data";
import SideNavGroup from "./SideNavGroup";
import Link from "next/link";

const SideNav = () => {
  return (
    <div className="sidenav">
      <div className="organisation">
        <Image {...briefcase} alt="briefcase" />
        <p>Switch Organisation</p>
        <Image {...arrowDown} alt="arrow-down" />
      </div>
      <SideNavItem image={home} text="Dashboard" active={false} />
      <SideNavGroup heading="customers" items={sideNavCustomers} />
      <SideNavGroup heading="businesses" items={sideNavBusinesses} />
      <SideNavGroup heading="settings" items={sideNavSettings} />
      <hr />
      <Link href="/" className="sign-out">
        <SideNavItem image={signOut} text="sign out" active={false} />
      </Link>
      <p className="version">v1.2.0</p>
    </div>
  );
};

export default SideNav;
