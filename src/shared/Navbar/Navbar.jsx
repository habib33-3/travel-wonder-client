import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";
import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../hooks";
import { Logout } from "@mui/icons-material";
import toast from "react-hot-toast";

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const { user, logOut } = useAuth();

  const handleOpenNavMenu = (e) => {
    setAnchorElNav(e.currentTarget);
  };
  const handleOpenUserMenu = (e) => {
    setAnchorElUser(e.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogOut = () => {
    logOut().then(() => {
      toast.success("You are logged out");
    });
  };

  const navPages = (
    <>
      <Button
        LinkComponent={NavLink}
        to="/"
        onClick={handleCloseNavMenu}
        sx={{ my: 2, color: "white", display: "block" }}
        variant="contained"
        color="info"
      >
        Home
      </Button>
      <Button
        LinkComponent={NavLink}
        to="/community"
        onClick={handleCloseNavMenu}
        sx={{ my: 2, color: "white", display: "block" }}
        variant="contained"
        color="info"
      >
        Community
      </Button>
      <Button
        LinkComponent={NavLink}
        to="/blog"
        onClick={handleCloseNavMenu}
        sx={{ my: 2, color: "white", display: "block" }}
        variant="contained"
        color="info"
      >
        Blogs
      </Button>
      <Button
        LinkComponent={NavLink}
        to="/about"
        onClick={handleCloseNavMenu}
        sx={{ my: 2, color: "white", display: "block" }}
        variant="contained"
        color="info"
      >
        About Us
      </Button>
      <Button
        LinkComponent={NavLink}
        to="/contact"
        onClick={handleCloseNavMenu}
        sx={{ my: 2, color: "white", display: "block" }}
        variant="contained"
        color="info"
      >
        Contact Us
      </Button>
    </>
  );

  return (
    <AppBar
      position="static"
      color="primary"
      sx={{ maxWidth: "1280px", mx: "auto" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Tourist Guide
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem
                onClick={handleCloseNavMenu}
                LinkComponent={NavLink}
                to="/"
              >
                <Typography textAlign="center">Home</Typography>
              </MenuItem>
              <MenuItem
                onClick={handleCloseNavMenu}
                LinkComponent={NavLink}
                to="/community"
              >
                <Typography textAlign="center">Community</Typography>
              </MenuItem>
              <MenuItem
                onClick={handleCloseNavMenu}
                LinkComponent={NavLink}
                to="/blog"
              >
                <Typography textAlign="center">Blog</Typography>
              </MenuItem>
              <MenuItem
                onClick={handleCloseNavMenu}
                LinkComponent={NavLink}
                to="/about"
              >
                <Typography textAlign="center">About Us</Typography>
              </MenuItem>
              <MenuItem
                onClick={handleCloseNavMenu}
                LinkComponent={NavLink}
                to="/contact"
              >
                <Typography textAlign="center">Contact Us</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Tourist Guide
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", gap: "24px" },
            }}
          >
            {navPages}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {user?.email ? (
              <>
                <Tooltip title="Open User settings">
                  <IconButton
                    onClick={handleOpenUserMenu}
                    sx={{ p: 0 }}
                  >
                    <Avatar
                      alt={user.displayName}
                      src={user.photoURL}
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Button
                      LinkComponent={Link}
                      to="/dashboard"
                      textAlign="center"
                      variant="contained"
                    >
                      Dashboard
                    </Button>
                  </MenuItem>
                  <MenuItem>
                    <Typography textAlign="center">
                      Name: {user.displayName}
                    </Typography>
                  </MenuItem>
                  <MenuItem>
                    <Typography textAlign="center">
                      Email: {user.email}
                    </Typography>
                  </MenuItem>
                  <MenuItem>
                    <Button
                      startIcon={<Logout />}
                      textAlign="center"
                      onClick={handleLogOut}
                      variant="contained"
                      color="error"
                    >
                      Logout
                    </Button>
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <Button
                LinkComponent={Link}
                to="/login"
                variant="contained"
                color="info"
              >
                Login
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
