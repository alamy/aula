import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import { LoginContext } from "../contexts/loginContext";
import { useContext } from "react";

export const ProfileBox = () => {
  const loginContext = useContext(LoginContext);
  const user = loginContext.userLogged;
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar
            sx={{ width: 100, height: 100, marginRight: 3 }}
            src={user.image}
          >
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={user.name}
          secondary={
            <>
              <p>
                <b>E-mail:</b> {user.email}
              </p>
              <p>
                <b>Telefone:</b> {user.phone}
              </p>
            </>
          }
        />
      </ListItem>
    </List>
  );
};
