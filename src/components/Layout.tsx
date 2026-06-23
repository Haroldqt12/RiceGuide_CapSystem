import React from "react";
import { TopNavbar } from "./TopNavbar";
import "../design/Layout.css";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="app-layout">
      <TopNavbar />
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default Layout;
