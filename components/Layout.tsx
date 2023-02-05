import React, { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { logo, person } from "../assets/images";
import {
  searchIcon,
  notification,
  bell,
  avatar,
  dropdownSmall,
  notifcationNew,
} from "../assets/icons";
import SideNav from "./SideNav";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <div className="left">
          <Image {...logo} alt="logo" className="logo" />
          <div className="search">
            <input type="text" placeholder="Search for anything" />
            <div className="icon">
              <Image {...searchIcon} alt="searchIcon" />
            </div>
          </div>
        </div>
        <div className="right">
          <a href="#">Docs</a>
          <Image {...notifcationNew} alt="notification-bell" className="bell" />
          <Image {...person} className="person" alt="person" />
          <p>Adedeji</p>
          <Image {...dropdownSmall} alt="dropdownSmall" />
        </div>
      </nav>
    </header>
    <section className="content">
      <SideNav />
      {children}
    </section>
  </div>
);

export default Layout;
