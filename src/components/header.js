import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import { useNavigate } from "react-router-dom";

export default function Header({ loggedUser, userAvatar, ...rest }) {
  const [user, setUser] = useState(loggedUser);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setUser(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    navigate("/login");
  };

  const handleLogIn = () => {
    navigate("/login");
  };
  return (
    <AppBar position="sticy" color="transparent">
      <Toolbar>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <Button onClick={() => navigate("/")}>Home</Button>
            <Button onClick={() => navigate("/leaderboard")}>
              Leaderboard
            </Button>
          </Grid>
          <Grid item>
            {user ? (
              <div>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <Avatar src={userAvatar} />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleLogOut}>Log out</MenuItem>
                </Menu>
              </div>
            ) : (
              <Button onClick={handleLogIn}>Log in</Button>
            )}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
