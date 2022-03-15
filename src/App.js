import { Container, createTheme, Grid, ThemeProvider } from "@mui/material";

import "./App.css";
import FeaturedPost from "./components/FeaturedPost";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import PostCard from "./components/PostCard";
import Sidebar from "./components/Sidebar";
import { featuredPosts, sidebar } from "./Data/Data";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Header />
        <FeaturedPost />
        <br />
        <Grid container spacing={4}>
          {featuredPosts.map((post) => (
            <PostCard post={post} key={post.title} />
          ))}
        </Grid>

        <Grid container spacing={5} sx={{ marginTop: 3 }}>
          <Main title="from the firehose" />
          <Sidebar
            title={sidebar.title}
            description={sidebar.description}
            archives={sidebar.archives}
            social={sidebar.social}
          />
        </Grid>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}

export default App;
