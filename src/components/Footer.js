import { Container, Link, Typography } from "@mui/material";
import React from "react";

const Footer = ({ title, description }) => {
  return (
    <footer style={{ background: "#1e1e1e", marginTop: 4, padding: "40px 0" }}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          {description}
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          Copyright ©{" "}
          <Link
            color="inherit"
            href="https://www.linkedin.com/in/krishnaprasad-e-k-6322831bb"
          >
            Krishnaprasad
          </Link>{" "}
          {new Date().getFullYear()}.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
