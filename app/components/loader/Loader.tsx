import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import "./CircularUnderLoad.css"; // Import CSS file for styling

const CircularUnderLoad = () => {
  return (
    <CircularProgress
      disableShrink
      className="rootContainer tailmask"
      thickness={5}
    />
  );
};

export default CircularUnderLoad;
