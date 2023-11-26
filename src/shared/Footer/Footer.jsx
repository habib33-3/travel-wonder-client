import {
  EmailOutlined,
  FacebookRounded,
  Phone,
  Reddit,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      sx={{
        background: "black",
        color: "white",
        py: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        mt:"40px"
      }}
    >
      <Box>
        <Typography
          variant="h3"
          component={"h2"}
          textAlign={"center"}
        >
          Travel Guide
        </Typography>
      </Box>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          width:4/5,
          mx:"auto"
          
        }}
      >
        <Box>
          <List>
            <ListItem
              LinkComponent={Link}
              to="/register"
            >
              <ListItemText primary="Registration" />
            </ListItem>
            <ListItem
              LinkComponent={Link}
              to="/login"
            >
              <ListItemText primary="Login" />
            </ListItem>
            <ListItem
              components={Link}
              to="/blogs"
            >
              <ListItemText primary="Blog" />
            </ListItem>
          </List>
        </Box>
        <Box >
          <List>
            <ListItem>
              <ListItemIcon>
                <Phone color="info" />
              </ListItemIcon>
              <ListItemText primary="53553-33" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <EmailOutlined color="info" />
              </ListItemIcon>
              <ListItemText primary="info@email.com" />
            </ListItem>
          </List>
        </Box>
      </Stack>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          gap: "20px",
          mt: "10px",
        }}
      >
        <FacebookRounded sx={{ color: "blue", fontSize: "3rem" }} />
        <YouTube sx={{ color: "red", fontSize: "3rem" }} />
        <Twitter sx={{ color: "violet", fontSize: "3rem" }} />
        <Reddit sx={{ color: "red", fontSize: "3rem" }} />
      </Box>
    </Box>
  );
};

export default Footer;
