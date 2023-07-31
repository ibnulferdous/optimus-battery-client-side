import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { app } from "../auth/firebase/firebase.config";

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth(app);
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/admin-dashboard");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <form
        onSubmit={handleLogin}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          padding: "50px 40px",
          maxWidth: "400px",
          width: "100%",
          backgroundColor: "#f2f6fb",
          borderRadius: "8px",
        }}
      >
        <Typography variant="h4" align="center">
          Admin Login
        </Typography>
        <TextField
          type="email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          variant="outlined"
        />
        <TextField
          type="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          variant="outlined"
        />
        <Button type="submit" variant="contained" size="large" color="primary">
          Log In
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
