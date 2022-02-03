import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import GitHub from "@material-ui/icons/GitHub";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Instagram from "@material-ui/icons/Instagram";

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#222",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "#e0e0e0",
      "&:hover": {
        fill: "#00838f",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <BottomNavigationAction icon={<GitHub />} className={classes.root} onClick={() => window.open('https://github.com/Virtual-Crash', '_blank')} />
      <BottomNavigationAction icon={<LinkedIn />} className={classes.root} onClick={() => window.open('https://www.linkedin.com/in/kayla-jeter404/', '_blank')}/>
      <BottomNavigationAction icon={<Instagram />} className={classes.root} onClick={() => window.open('https://www.instagram.com/virtual_crash/', '_blank')}/>
    </BottomNavigation>
  );
};
export default Footer;
