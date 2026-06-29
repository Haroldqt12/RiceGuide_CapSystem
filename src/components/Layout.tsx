import React from "react";
import TopNavbar from "./common/TopNavbar";
import "../design/Layout.css";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="app-layout">
      <TopNavbar onMenuClick={() => {}} />
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default Layout;
