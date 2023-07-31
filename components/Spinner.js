import React from "react";
import { CircularProgress } from "@mui/material";

const Spinner = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress />
    </div>
  );
};

export default Spinner;
