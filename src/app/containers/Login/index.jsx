"use client";

import { Card, Stack, TextField, Typography } from "@mui/material";
import { MyButtonComponent } from "../components/defaultButtons";
import { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(value);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setError(!validateEmail(value));
  };

  return (
    <Stack spacing={2} direction={"row"} margin={10} gap={25}>
      <Stack>
        <Typography
          sx={{
            fontSize: "40px",
            color: "#d3a611",
            fontFamily: "Roboto",
            fontWeight: "bold",
          }}
        >
          Faça Login e Entre para o time!
        </Typography>
        {/* {!isMobile && */}
        <img
          src="./assets/negocios.svg"
          alt="Imagem de trabalho"
          width={"80%"}
        />
        {/* } */}
      </Stack>
      <Card>
        <Stack spacing={2}>
          <Typography
            sx={{
              fontSize: "40px",
              color: "#d3a611",
              fontFamily: "Roboto",
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            Login
          </Typography>
          <TextField
            id="outlined-basic"
            label="Usuario(Email)"
            value={email}
            type="email"
            onChange={handleEmailChange}
            InputProps={{
              style: { color: "white", cursor: "pointer" },
            }}
            InputLabelProps={{
              style: { color: "white", cursor: "pointer" },
            }}
            sx={{
              "& .MuiOutlinedInput-root fieldset": {
                borderColor: "gray",
                borderRadius: 15,
              },
            }}
          />
          <TextField
            id="outlined-basic"
            label="Senha"
            InputProps={{
              style: { color: "white", cursor: "pointer" },
            }}
            InputLabelProps={{
              style: { color: "white", cursor: "pointer" },
            }}
            sx={{
              "& .MuiOutlinedInput-root fieldset": {
                borderColor: "gray",
                borderRadius: 15,
              },
            }}
          />
          <TextField
            id="outlined-basic"
            label="Confirmar Senha"
            InputProps={{
              style: { color: "white", cursor: "pointer" },
            }}
            InputLabelProps={{
              style: { color: "white", cursor: "pointer" },
            }}
            sx={{
              "& .MuiOutlinedInput-root fieldset": {
                borderColor: "gray",
                borderRadius: 15,
              },
            }}
          />
          <MyButtonComponent />
        </Stack>
      </Card>
    </Stack>
  );
};
