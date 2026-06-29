import React from "react";
import { useMediaQuery } from "react-responsive";
import "../../design/ResponsiveDashboard.css";

interface ResponsiveDashboardProps {
  children: React.ReactNode;
}

export const ResponsiveDashboard = ({ children }: ResponsiveDashboardProps) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <div className={`dashboard-container ${isMobile ? 'mobile' : ''} ${isTablet ? 'tablet' : ''} ${isDesktop ? 'desktop' : ''}`}>      
      <div className="dashboard-content">
        {children}
      </div>
    </div>
  );
};

export default ResponsiveDashboard;