import React from "react";
import "./CategorizedExpense.css";
import LinearProgress from "@mui/material/LinearProgress";
import CategoryIcon from "@mui/icons-material/LocalFloristRounded";

export function CategorizedExpense({ name, amount }) {
  
  return (
    <div className="categorized-expense">
      <div className="icon">
        <CategoryIcon sx={{ fontSize: "1.5em" }} />
      </div>
      <div className="details">
        <span> {name} </span>
        <span>{amount}</span>
        <span>&#x20B9;</span>
        <LinearProgress variant="determinate" value={70} className="progress" />
      </div>
    </div>
  );
}
