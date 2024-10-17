"use client";

import { Card, Stack, TextField, Typography } from "@mui/material";
import { MyButtonComponent } from "../components/defaultButtons";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify"; // Importando o toast
import "react-toastify/dist/ReactToastify.css"; // Importando o CSS do Toastify
import MyComponent from "@/app/styles/StyledImage";

import { isMobile } from "react-device-detect";

const initialData = {
  email: "",
  senha: "",
  confirmarSenha: "",
};

export const Login = () => {
  const [formData, setformData] = useState(initialData);
  const [error, setError] = useState(false);

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(value);
  };

  const validatePassword = (value) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    return passwordRegex.test(value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setformData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === "email") {
      const isValidEmail = validateEmail(value);

      if (!isValidEmail) {
        setError(true);
        return;
      }
    }
    if (name === "senha") {
      const validatePasswords = validatePassword(value);
      if (!validatePasswords) {
        return;
      }
    }
  };

  const validatePasswordsMatch = (senha, confirmarSenha) => {
    return senha === confirmarSenha;
  };

  const handleLogin = () => {
    const isValidEmail = formData.email === "galencar737@gmail.com";
    const isValidPassword = formData.senha === "@Biel363560";

    const doPasswordsMatch = validatePasswordsMatch(
      formData.senha,
      formData.confirmarSenha
    );
    if (isValidEmail && isValidPassword && doPasswordsMatch) {
      toast.success("Bem vindo ao sistema!");
    } else {
      if (!doPasswordsMatch) {
        toast.error("As senhas não coincidem.");
      } else {
        toast.error("Por favor, corrija os erros antes de continuar.");
      }
    }
  };

  return (
    <div style={{ padding: isMobile ? "5px" : "50px" }}>
      <ToastContainer />
      <Stack
        spacing={2}
        direction={{ xs: "column", md: "row" }}
        margin={{ xs: 2, md: 5}}
        gap={isMobile ? 2 : 15}
      >
        <Stack direction={isMobile ? "column" : "row"}>
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
          <MyComponent />
        </Stack>
        <Card
          sx={{
            width: "500px",
            alignItems: "center",
            justifyContent: "center",
            background: "#36454F",
            padding: 10,
            borderRadius: 15,
            border: "solid 2px White",
          }}
        >
          <Stack
            spacing={3}
            sx={{ alignItems: "center", justifyContent: "center" }}
          >
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
              name="email"
              label="Usuario(Email)"
              type="email"
              value={formData.email}
              onChange={handleChange}
              InputProps={{
                style: { color: "white", cursor: "pointer", width: "400px" },
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
              label="Senha"
              name="senha"
              value={formData.senha}
              onChange={handleChange}
              type="password"
              InputProps={{
                style: { color: "white", cursor: "pointer", width: "400px" },
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
              name="confirmarSenha"
              value={formData.confirmarSenha}
              label="Confirmar Senha"
              type="password"
              onChange={handleChange}
              InputProps={{
                style: { color: "white", cursor: "pointer", width: "400px" },
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
            <MyButtonComponent handleClick={handleLogin} />
          </Stack>
        </Card>
      </Stack>
    </div>
  );
};
