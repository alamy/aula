import * as React from "react";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import { Box, Button, IconButton } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import LoginIcon from "@mui/icons-material/Login";
import { LoginContext } from "../contexts/loginContext";

function Profile() {
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const loginContext = React.useContext(LoginContext);
  const user = loginContext.userLogged;
  const loggout = loginContext.loggout;
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const settings = [
    { menu: "Perfil", action: loggout },
    { menu: "Conta", action: loggout },
    { menu: "Dashboard", action: loggout },
    { menu: "Sair", action: loggout },
  ];

  if (localStorage.getItem("logged") == "true") {
    return (
      <>
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title={user.name}>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt={user.name} src={user.image} />
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
            {settings.map((setting) => (
              <MenuItem
                key={setting.menu}
                onClose={handleCloseUserMenu}
                onClick={setting.action}
              >
                <Typography textAlign="center">{setting.menu}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </>
    );
  } else {
    return (
      <>
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Button
            variant="contained"
            color="warning"
            href="/"
            endIcon={<LoginIcon />}
          >
            Fazer login
          </Button>
        </IconButton>
      </>
    );
  }
}

export default Profile;
