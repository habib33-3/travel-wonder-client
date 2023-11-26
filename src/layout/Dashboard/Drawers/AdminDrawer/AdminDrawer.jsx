import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddIcon from "@mui/icons-material/Add";
import PeopleIcon from "@mui/icons-material/People";
import { NavLink } from "react-router-dom";

const AdminDrawer = () => {
  return (
    <List>
      <ListItem disablePadding>
        <ListItemButton
          LinkComponent={NavLink}
          to="/dashboard/adminProfile"
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
          to="/dashboard/addPackage"
        >
          <ListItemIcon>
            <AddIcon />
          </ListItemIcon>
          <ListItemText primary={"Add Package"} />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton
          LinkComponent={NavLink}
          to="/dashboard/manageUsers"
        >
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary={"Manage Users"} />
        </ListItemButton>
      </ListItem>
    </List>
  );
};

export default AdminDrawer;
