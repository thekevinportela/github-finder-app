import React from "react";

const UserStats = ({ title, stat, icon }) => {
  return (
    <div className="stat">
      <div className="stat-figure text-secondary">{icon}</div>
      <div className="stat-title pr-5">{title}</div>
      <div className="stat-value pr-5 text-3xl md:text-4xl">{stat}</div>
    </div>
  );
};

export default UserStats;
