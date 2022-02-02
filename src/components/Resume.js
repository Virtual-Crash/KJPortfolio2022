import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#424242",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "o auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid #9e9e9e",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid #9e9e9e",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "#00838f #00838f transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "#9e9e9e",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent #00838f #00838f",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    color: "#fff",
    background: "#00838f",
    lineHeight: 1,
    padding: "0.5rem 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "#00838f",
    padding: "3rem 0",
  },
  subHeading: {
    color: "#fff",
    padding: 0,
    textTransform: "uppercase",
  },
  body1: {
    color: "#00838f",
  },
  subtitle1: {
    color: "#e0e0e0",
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
        Experience
      </Typography>
      <Box component="div" className={classes.timeLine}>
      <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2022
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Bachelor of Science, Information Systems and Computer Science
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Seattle Pacific University, Seattle, WA. 
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Provided three years of learning and experience in a 
            variety of programming languages HTML, CSS, JavaScript, C#, C++ and SQL.
            Collaborated with project members in groups ranging from three to 5 members.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2020
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Advanced Repair Agent
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Geek Sqaud, Lynnwood, WA.
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Resolved hardware and software issues with printers, 
            applications, email, and operating systems.
            Restore data, operating systems, files, documents, and drivers
            Implemented company policies, technical procedures, and standards 
            for preserving the integrity and security of data, reports, and access of client devices. 

          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2017
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Networking Infrastructure Manager
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            US Army, Joint Base Lewis-McChord, WA.
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
          Identified operations risk due to lack of training. 
          Developed training materials and provided individual expertise which 
          resulted in reducing on call hours by 50%.  
        	Received first generation hyper mobile satellite terminal. 
          Documented set up guide for generalist network operators which resulted 
          in reduced dependency on subject matter experts.

          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2016
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Associate of Arts, General Studies
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Central Texas College, Killeen, TX.
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Grew a deeper understanding of my career trajectory and skills
            needed to get there. Honed in on being an efficient note taker, and
            developed a more adaptable nature.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2015
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Volunteer
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            No DUI of Killeen, Killeen, TX.
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Provided a safe alternative to drunk driving by escorting inebriated individuals’ home 
            Over 150 hours logged.

          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2014
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Node Operations Specialist
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            US Army, Fort Hood, TX.
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Deployed and maintained a three-tier secure network, including Brocade,
             Cisco, and Juniper router and switches, Cisco VoIP Communications Manager, 
             General Dynamics Encryption devices, Virtual Machine environments using VMware, 
             NetApp Raid 10 Mirrored and Striped storage devices, SNMPc device manager, and OS imaging
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2009
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            LAN Center Associate
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Howie's Game Shack, Mesa, AZ.
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Oversaw daily operations of over 150 desktop computers and 100 Xbox consoles. 
            Provided troubleshooting and maintinence on client used devices.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Resume;
