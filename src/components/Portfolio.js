import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import project1 from "../images/html-css-javascript-lg.jpg";
import project2 from "../images/html-css-javascript.jpg";
import project3 from "../images/Pokemon.png";
import project4 from "../images/CompTIA Network+ Badge.png";
import project5 from "../images/CompTIA A+ Badge.png";
import project6 from "../images/Microsoft.png";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#424242",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
  heading: {
    color: "#00838f",
    padding: "3rem 0",
  },
}));

const projects = [
  {
    name: "Social Loopz",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
    consequatur magni quod nesciunt necessitatibus molestiae non
    eligendi, magnam est aliquam recusandae? Magnam soluta minus
    iste alias sunt veritatis nisi dolores!`,
    image: project1,
  },
  {
    name: "Beginner Home Page",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
    consequatur magni quod nesciunt necessitatibus molestiae non\
    eligendi, magnam est aliquam recusandae? Magnam soluta minus\
    iste alias sunt veritatis nisi dolores!`,
    image: project2,
  },
  {
    name: "Pokemon API",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
    consequatur magni quod nesciunt necessitatibus molestiae non\
    eligendi, magnam est aliquam recusandae? Magnam soluta minus\
    iste alias sunt veritatis nisi dolores!`,
    image: project3,
  },
  {
    name: "Network +",
    description: `CompTIA Network+ validates the technical skills needed to securely establish, maintain and
     troubleshoot the essential networks that businesses rely on. Offers skills in cloud computing best practices and 
     typical service models. Tests critical security concepts to helping networking professionals work with security practitioners. `,
    image: project4,
    link: "https://www.comptia.org/certifications/network",
  },
  {
    name: "A+ ",
    description: `The CompTIA A+ certification covers configuring device operating 
    systems, including Windows, Mac, Linux, Chrome OS, Android and iOS. Support of basic IT infrastructure and networking.
    Troubleshooting and problem solving core services and support challenges while applying best practices for documentation, 
    change management, and scripting `,
    image: project5,
    link: "https://www.comptia.org/certifications/a",
  },
  {
    name: "Microsoft Suite Certified",
    description: `Certified Specialist in Outlook, Excel, PowerPoint, and Word.`,
    image: project6,
    link: "https://support.microsoft.com/en-us/topic/earn-a-microsoft-office-specialist-mos-certification-0885c944-167c-51ea-1cdc-8f65952bd1b8",
  },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
        <Box component="header" className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
        Projects and Certifications
      </Typography>
    
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" onClick={() => window.open(project.link)}>
                  Info
                </Button>
                <Button size="small" color="primary">
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    </Box>
  );
};

export default Portfolio;
