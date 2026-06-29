import React from "react";
import "../../design/AIAssistant.css";

export const AIAssistant = () => {
  return (
    <div className="ai-assistant">
      <h4>
        AI Rice Assistant
        <span style={{ fontSize: "11px", color: "var(--color-text-secondary)", fontWeight: "400" }}>
          — Smart Insights for Your Farm
        </span>
      </h4>

      <div className="ai-insight">
        <div className="ai-insight__icon">
          <i className="fa-solid fa-droplet"></i>
        </div>
        <div>
          <p className="ai-insight__title">Irrigation Advisory</p>
          <p className="ai-insight__desc">Water level is optimal. Maintain current irrigation schedule.</p>
        </div>
      </div>
      <div className="ai-insight">
        <div className="ai-insight__icon">
          <i className="fa-solid fa-flask"></i>
        </div>
        <div>
          <p className="ai-insight__title">Fertilizer Recommendation</p>
          <p className="ai-insight__desc">Apply urea fertilizer in 3 days for better tillering.</p>
        </div>
      </div>
      <div className="ai-insight">
        <div className="ai-insight__icon">
          <i className="fa-solid fa-bug"></i>
        </div>
        <div>
          <p className="ai-insight__title">Pest Alert</p>
          <p className="ai-insight__desc">Low risk of brown planthopper. Continue monitoring.</p>
        </div>
      </div>
      <div className="ai-insight">
        <div className="ai-insight__icon">
          <i className="fa-solid fa-triangle-exclamation"></i>
        </div>
        <div>
          <p className="ai-insight__title">Weather Alert</p>
          <p className="ai-insight__desc">Possible rain in 2 days. Prepare drainage systems.</p>
        </div>
      </div>

      <a href="#" className="btn-primary">View All Insights</a>
    </div>
  );
};

export default AIAssistant;