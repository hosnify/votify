import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { green } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import CheckIcon from "@material-ui/icons/Check";
import SaveIcon from "@material-ui/icons/Save";
import CheckBoxOutlineBlankOutlinedIcon from "@material-ui/icons/CheckBoxOutlineBlankOutlined";
import { IconButton } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
  },
  wrapper: {
    margin: theme.spacing(1),
    position: "relative",
  },
  buttonSuccess: {
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700],
    },
  },
  fabProgress: {
    color: green[500],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -13,
    marginLeft: -13,
    zIndex: 1,
  },
  buttonProgress: {
    color: green[500],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
}));

export default function QuestionOption({ ...props }) {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();

  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
  });

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = () => {
    if (!loading) {
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <IconButton
          size="medium"
          aria-label="save"
          color="primary"
          className={buttonClassname}
          onClick={handleButtonClick}
        >
          {success ? (
            <CheckIcon />
          ) : (
            <CheckBoxOutlineBlankOutlinedIcon fontSize="small" />
          )}
        </IconButton>
        {loading && (
          <CircularProgress size={30} className={classes.fabProgress} />
        )}
      </div>
      <div className={classes.wrapper}>
        <Button
          variant="contained"
          color="primary"
          className={buttonClassname}
          disabled={loading}
          onClick={handleButtonClick}
        >
          {props.optionText}
        </Button>
        {loading && (
          <CircularProgress size={24} className={classes.buttonProgress} />
        )}
      </div>
    </div>
  );
}
