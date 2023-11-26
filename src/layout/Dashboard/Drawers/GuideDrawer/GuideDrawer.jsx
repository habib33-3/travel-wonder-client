import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import UpcomingIcon from "@mui/icons-material/Upcoming";

const GuideDrawer = () => {
  return (
    <List>
      <ListItem disablePadding>
        <ListItemButton
          LinkComponent={NavLink}
          to="/dashboard/guideProfile"
        >
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary={"My Profile"} />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton
          LinkComponent={NavLink}
          to="/dashboard/myTours"
        >
          <ListItemIcon>
            <UpcomingIcon />
          </ListItemIcon>
          <ListItemText primary={"Assigned Tours"} />
        </ListItemButton>
      </ListItem>
    </List>
  );
};

export default GuideDrawer;
