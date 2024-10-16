"use client";

import Button from "@mui/material/Button";

export const MyButtonComponent = () => {
  return (
<Button
   sx={{
     width: "100%",
     padding: "15px 20px",
     borderRadius: "8px",
     textTransform: "uppercase",
     fontWeight: "800",
     letterSpacing: "3px",
     color: "#FFFF",
     background: "#d3a611",
   }}
 >
   Login
 </Button>

  );
};
