import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import Navbar from "./Navbar";
import project1 from "../images/Project1.png";
import project2 from "../images/Project2.png";
import project3 from "../images/Project3.png";
import project4 from "../images/Project4.png";

const useStyles = makeStyles({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "5rem auto",
  },
});

const Projects = () => {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar />
      <Grid container justify="center">
        {/* Project 1 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 1"
                height="140"
                image={project1}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Sports App
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  A sports App built on the MERN stack where a person can add sports activities
                  based on his/her interest and enroll for other events. The app is deployed on
                  the Heroku app and the database is stored in Mongo, the images are stored on AWS S3.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" target="_blank" href="https://github.com/deepank7/MERN">
                Share
              </Button>
              <Button size="small" color="primary" target="_blank" href="https://sports-app-front07.herokuapp.com/">
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* Project 2 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 2"
                height="140"
                image={project2}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Book Reading App
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  A simple book reading app that lets you create a todo list for your bucket list books
                  Strike them out once they are done, It uses context API,
                  react hooks and local storage.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" target="_blank" href="https://github.com/deepank7/Booklist">
                Share
              </Button>
              <Button size="small" color="primary" target="_blank" href="https://deepank7.github.io/Booklist/">
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* Project 3 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 3"
                height="140"
                image={project3}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Contact App
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  An app implementing react redux, it takes in the value and triggers an action attached to the reducer
                  and the makes changes to the store. A short example to get you started on redux.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" target="_blank" href="https://github.com/deepank7/contactapp">
                Share
              </Button>
              <Button size="small" color="primary" target="_blank" href="https://deepank7.github.io/contactapp/">
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* Project 4 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 4"
                height="140"
                image={project4}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Memories App
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Memory cards from your past events in a SPA. There is an option to edit the details in case you missed something.
                  The back-end is deployed on Heroku.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" target="_blank" href="https://github.com/deepank7/">
                Share
              </Button>
              <Button size="small" color="primary" target="_blank" href="https://personal-memories.netlify.app/">
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Projects;