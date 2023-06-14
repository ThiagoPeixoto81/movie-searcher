import React, { Component, ReactNode } from "react";
import "./Stat.css";

type StatProp = {
  children?: ReactNode;
  info?: string;
  infoType: string;
};

export default function Stat({ children, info, infoType }: StatProp) {
  return (
    <div className="stat actors p-4 ps-0 d-flex align-items-center mb-3 mb-sm-5 me-sm-3">
      {children}
      <div className="stat-info d-flex flex-column align-items-start ms-4">
        <span className="StatMain mb-sm-2">{info}</span>
        <span className="Statcategory">{infoType}</span>
      </div>
    </div>
  );
}
