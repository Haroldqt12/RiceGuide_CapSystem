import React from "react";

type IconProps = {
    className?: string;
};

export const UserIcon = ({ className }: IconProps) => (
  <svg
    className={className}
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="20" cy="20" r="20" fill="#E8F5E9" />
    <path
      d="M20 8C13.373 8 8 13.373 8 20C8 26.627 13.373 32 20 32C26.627 32 32 26.627 32 20C32 13.373 26.627 8 20 8ZM20 28C15.582 28 12 24.418 12 20C12 15.582 15.582 12 20 12C24.418 12 28 15.582 28 20C28 24.418 24.418 28 20 28Z"
      fill="#4CAF50"
    />
    <path d="M19 14L15 22H23L19 14Z" fill="#FBC02D" />
  </svg>
);

export const BellIcon = ({ className }: IconProps) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
  </svg>
);

export const SunIcon = ({ className }: IconProps) => (
  <svg
    className={className}
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="#FDE047"
    stroke="#EAB308"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>
);

export const DropsIcon = ({ className }: IconProps) => (
  <svg
    className={className}
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="#38BDF8"
    stroke="#0284C7"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7 6.3 7 6.3s-2.29 2.76-2.29 2.76C3.57 10 3 11.09 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path>
    <path d="M16 21c3.3 0 6-2.7 6-6 0-1.74-.86-3.4-2.57-4.79S16 6 16 6s-3.43 4.21-3.43 4.21c-1.71 1.39-2.57 3.05-2.57 4.79 0 3.3 2.7 6 6 6z"></path>
  </svg>
);

export const RainCloudIcon = ({ className }: IconProps) => (
  <svg
    className={className}
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="#94A3B8"
    stroke="#475569"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
    <path d="M16 14v6"></path>
    <path d="M8 14v6"></path>
    <path d="M12 16v6"></path>
  </svg>
);

export const IrrigationIcon = ({ className }: IconProps) => (
  <svg className={className} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="20" fill="#1E658A" />
    <path d="M20 12C20 12 16 16.5 16 19.5C16 21.985 17.791 24 20 24C22.209 24 24 21.985 24 19.5C24 16.5 20 12 20 12Z" fill="#7FD1F9" />
    <path d="M14 26C14 26 17 28 20 28C23 28 26 26 26 26" stroke="#F5D0A9" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const FertilizerIcon = ({ className }: IconProps) => (
  <svg className={className} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="20" fill="#3B9E66" />
    <path d="M20 14V28M20 28C17 25 14 25 14 21C14 17 20 14 20 14ZM20 28C23 25 26 25 26 21C26 17 20 14 20 14Z" stroke="white" strokeWidth="2" strokeLinejoin="round" />
  </svg>
);

export const BugIcon = ({ className }: IconProps) => (
  <svg className={className} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="20" fill="#FFEBEE" />
    <path d="M20 12C16 12 14 15 14 18V22C14 25 16 28 20 28C24 28 26 25 26 22V18C26 15 24 12 20 12Z" fill="#F44336" />
    <path d="M20 12V28M14 16H12M14 20H11M14 24H12M26 16H28M26 20H29M26 24H28" stroke="#F44336" strokeWidth="2" strokeLinecap="round" />
    <circle cx="17" cy="16" r="1.5" fill="white" />
    <circle cx="23" cy="16" r="1.5" fill="white" />
  </svg>
);

export const RightArrowIcon = ({ className }: IconProps) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

export const HomeIcon = ({ className }: IconProps) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
);

export const ActivitiesIcon = ({ className }: IconProps) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
    <path d="M9 14h6"></path>
    <path d="M9 18h6"></path>
    <path d="M9 10h.01"></path>
  </svg>
);

export const PlusIcon = ({ className }: IconProps) => (
  <svg className={className} width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

export const CalendarIcon = ({ className }: IconProps) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
    <circle cx="8" cy="15" r="1"></circle>
    <circle cx="12" cy="15" r="1"></circle>
    <circle cx="16" cy="15" r="1"></circle>
  </svg>
);

export const SettingsIcon = ({ className }: IconProps) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
  </svg>
);