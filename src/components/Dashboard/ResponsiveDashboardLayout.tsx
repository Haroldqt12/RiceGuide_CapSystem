import React from "react";
import { useMediaQuery } from "react-responsive";
import "../../design/ResponsiveDashboardLayout.css";

interface ResponsiveDashboardLayoutProps {
  children: React.ReactNode;
}

export const ResponsiveDashboardLayout = ({ children }: ResponsiveDashboardLayoutProps) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <div className="dashboard-layout">
      {/* Main Dashboard Container */}
      <div className={`dashboard-container ${isMobile ? 'mobile' : ''} ${isTablet ? 'tablet' : ''} ${isDesktop ? 'desktop' : ''}`}>        
        <div className="dashboard-content">
          {children}
        </div>
      </div>
      
      {/* Mobile Bottom Navigation */}
      {isMobile && (
        <nav className="bottom-nav">
          <a href="#" className="active">
            <span className="icon"><i className="fa-solid fa-house"></i></span>
            Home
          </a>
          <a href="#">
            <span className="icon"><i className="fa-solid fa-table-cells"></i></span>
            Fields
          </a>
          <span className="fab">
            <i className="fa-solid fa-plus"></i>
          </span>
          <a href="#">
            <span className="icon"><i className="fa-solid fa-list-check"></i></span>
            Activities
          </a>
          <a href="#">
            <span className="icon"><i className="fa-solid fa-chart-line"></i></span>
            Reports
          </a>
        </nav>
      )}
    </div>
  );
};

export default ResponsiveDashboardLayout;