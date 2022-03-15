import { AccountCircle, Menu, Notifications } from "@mui/icons-material";
import { Badge, Divider, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import SideDrawer from "./SideDrawer";

const Header = () => {
  return (
    <>
      <Toolbar>
        <SideDrawer>
          <IconButton color="default">
            <Menu />
          </IconButton>
        </SideDrawer>

        <Typography variant="h6" sx={{ flexGrow: 1, marginLeft: 5 }}>
          Blogging Website
        </Typography>

        <IconButton color="inherit">
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
        </IconButton>
        <IconButton color="inherit">
          <AccountCircle />
        </IconButton>
      </Toolbar>
      <Divider />
      <Toolbar
        sx={{
          fontSize: 20,
          textTransform: "uppercase",
          justifyContent: "center",
          fontFamily: "Montserrat",
        }}
      >
        Express your emotions through words
      </Toolbar>
    </>
  );
};

export default Header;
