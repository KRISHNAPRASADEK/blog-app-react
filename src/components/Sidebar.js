import { Grid, Link, Paper, Typography } from "@mui/material";
import React from "react";

const Sidebar = ({ title, description, archives, social }) => {
  return (
    <Grid item xs={12} md={4}>
      <Paper elevation={0} sx={{ padding: 2 }}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </Paper>

      <Typography variant="h6" gutterBottom sx={{ marginTop: 3 }}>
        Archives
      </Typography>
      {archives.map((archive) => (
        <Link
          variant="body1"
          display="block"
          href={archive.url}
          key={archive.title}
        >
          {archive.title}
        </Link>
      ))}

      <Typography variant="h6" gutterBottom sx={{ marginTop: 3 }}>
        Social
      </Typography>
      {social.map((network) => (
        <Link display="block" variant="body1" href="#" key={network.name}>
          <Grid container direction="row" spacing={1}>
            <Grid item>
              <network.icon />
            </Grid>
            <Grid item>{network.name}</Grid>
          </Grid>
        </Link>
      ))}
    </Grid>
  );
};

export default Sidebar;
