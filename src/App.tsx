import "./App.css";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import NewsPage from "./components/NewsPage/NewsPage";
import "./App.css";
import News from "./components/News/News";
function App() {
  return (
    <div className="contaner">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Hacker News</Typography>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          width: "100%",
          background: "rgb(228, 228, 228)",
          padding: "8px",
          flexGrow: 1,
        }}
      >
        <Router>
          <Switch>
            <Route path="/new/:id" render={() => <NewsPage />} />
            <Route exact path="/" render={() => <News />} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </Box>
      <footer className="footer">
        <Typography component="p" variant="body2" color="inherit">
          © 2022 - Hacker News
        </Typography>
      </footer>
    </div>
  );
}

export default App;
