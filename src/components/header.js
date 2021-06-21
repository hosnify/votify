import React, { useEffect, useState } from "react";
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
import { setLoggedUser } from "../actions/auth";
import { connect } from "react-redux";

function Header({ loggedUser, userAvatar, dispatch, ...rest }) {
  const [user, setUser] = useState(loggedUser);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);

  useEffect(() => setUser(loggedUser));
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
    dispatch(setLoggedUser(null));
  };

  const handleLogIn = () => {
    navigate("/login");
  };
  return (
    <AppBar position="static" color="transparent">
      <Toolbar>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <Button onClick={() => navigate("/")}>Home</Button>
            <Button onClick={() => navigate("/leaderboard")}>
              Leaderboard
            </Button>
            <Button onClick={() => navigate("/add")}>Add Question</Button>
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
function mapStateToProps({ loggedUser, users }) {
  return {
    loggedUser,
    userAvatar: loggedUser && users[loggedUser].avatarURL,
  };
}

export default connect(mapStateToProps)(Header);
