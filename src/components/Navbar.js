import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Footer from "./Footer";
import {
    AppBar,
    Toolbar,
    ListItem,
    ListItemIcon,
    IconButton,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    Box,
} from "@material-ui/core";
import {
    Menu,
    AssignmentInd,
    Home,
    Apps,
    School,
} from "@material-ui/icons";
import avatar from "../avatar.jpg";

// CSS STYLES
const useStyles = makeStyles((theme) => ({
    menuSliderContainer: {
        width: 250,
        background: "#511",
        height: "100%",
    },
    resume: {
        textAlign: "right",
        marginTop: "0rem",
    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13),
    },
    listItem: {
        color: "tan",
    },
}));

const menuItems = [
    {
        listIcon: <Home />,
        listText: "Home",
        listPath: "/",
    },
    {
        listIcon: <AssignmentInd />,
        listText: "Resume",
        listPath: "/resume",
    },
    {
        listIcon: <Apps />,
        listText: "Projects",
        listPath: "/projects",
    },
    {
        listIcon: <School />,
        listText: "Academics",
        listPath: "/academics",
    },
];

const Navbar = () => {
    const [state, setState] = useState({
        right: false,
    });

    const toggleSlider = (slider, open) => () => {
        setState({ ...state, [slider]: open });
    };

    const classes = useStyles();

    const sideList = (slider) => (
        <Box
            className={classes.menuSliderContainer}
            component="div"
            onClick={toggleSlider(slider, false)}
        >
            <Avatar className={classes.avatar} src={avatar} alt="Deepank Sharma" />
            <Divider />
            <List>
                {menuItems.map((lsItem, key) => (
                    <ListItem button key={key} component={Link} to={lsItem.listPath}>
                        <ListItemIcon className={classes.listItem}>
                            {lsItem.listIcon}
                        </ListItemIcon>
                        <ListItemText
                            className={classes.listItem}
                            primary={lsItem.listText}
                        />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
    return (
        <>
            <>
                <AppBar position="static" style={{ background: "#222" }}>
                    <Toolbar>
                        <IconButton edge="start" onClick={toggleSlider("right", true)}>
                            <Menu style={{ color: "tomato" }} />
                        </IconButton>
                        <Typography variant="h4" style={{ color: "tan" }}>
                            <Link to="/" style={{ color: "tan", textDecoration: "none" }}>
                                Portfolio
                            </Link>
                        </Typography>
                        <Drawer
                            anchor="left"
                            open={state.right}
                            onClose={toggleSlider("right", false)}
                        >
                            {sideList("right")}
                            <Footer />
                        </Drawer>
                    </Toolbar>
                    {/* <Typography className={classes.resume} variant="h6" style={{ color: "tan" }}>
                        <Link to="/resume" style={{ color: "tan", textDecoration: "none" }}>
                            Resume
                        </Link>
                    </Typography> */}
                </AppBar>
            </>
        </>
    );
};

Navbar.propTypes = {
    state: PropTypes.object,
};

export default Navbar;