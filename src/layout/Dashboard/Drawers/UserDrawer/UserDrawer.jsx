import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { NavLink } from "react-router-dom";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FavoriteIcon from "@mui/icons-material/Favorite";

const UserDrawer = () => {
  return (
    <List>
      <ListItem disablePadding>
        <ListItemButton
          LinkComponent={NavLink}
          to="/dashboard/userProfile"
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
          to="/dashboard/usersBookings"
        >
          <ListItemIcon>
            <CalendarMonthIcon />
          </ListItemIcon>
          <ListItemText primary={"My Bookings"} />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton
          LinkComponent={NavLink}
          to="/dashboard/usersWishList"
        >
          <ListItemIcon>
            <FavoriteIcon />
          </ListItemIcon>
          <ListItemText primary={"My WishList"} />
        </ListItemButton>
      </ListItem>
    </List>
  );
};

export default UserDrawer;
