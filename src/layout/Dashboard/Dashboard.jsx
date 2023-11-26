import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import { Home } from "@mui/icons-material";
import { AdminDrawer, UserDrawer } from "./Drawers";
import { useAdmin, useAuth } from "../../hooks";

const Dashboard = () => {
  const drawerWidth = 240;

  const { user } = useAuth();
  const { isAdmin } = useAdmin();

  console.log()

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="inherit"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          backgroundColor: "skyblue",
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
          >
            Travel Guide
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        {/* TODO: conditional drawer */}
        {user && isAdmin ? <AdminDrawer /> : <UserDrawer />}
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton
              LinkComponent={Link}
              to="/"
            >
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary={"Home"} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Dashboard;
