import React from "react";
import "../../design/WelcomeBanner.css";

export const WelcomeBanner = () => {
  return (
    <section className="welcome-banner">
      <div>
        <h2>Welcome back, Juan 👋</h2>
        <p>Here's what's happening on your farm today.</p>
      </div>
    </section>
  );
};

export default WelcomeBanner;