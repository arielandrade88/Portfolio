import {
  AppBar,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  makeStyles,
  Toolbar,
} from "@material-ui/core";
import logo from "../../images/logo/Logo-portfolio-completo.svg";
import { Link, animateScroll as scroll } from "react-scroll";
import InfoTwoToneIcon from "@material-ui/icons/InfoTwoTone";
import EmojiObjectsTwoToneIcon from "@material-ui/icons/EmojiObjectsTwoTone";
import BuildTwoToneIcon from "@material-ui/icons/BuildTwoTone";
import ContactMailTwoToneIcon from "@material-ui/icons/ContactMailTwoTone";
import MenuIcon from "@material-ui/icons/Menu";
import CancelIcon from "@material-ui/icons/Cancel";
import { useState } from "react";



const NavBar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const links = [
    {
      id: "about",
      text: "Mi perfil",
      icon: <InfoTwoToneIcon fontSize="large" className={classes.icon}/>,
    },
    {
      id: "skills",
      text: "Mis Habilidades",
      icon: <EmojiObjectsTwoToneIcon fontSize="large" className={classes.icon}/>,
    },
    {
      id: "works",
      text: "Mis Trabajos",
      icon: <BuildTwoToneIcon fontSize="large" className={classes.icon}/>,
    },
    {
      id: "contact",
      text: "Contacto",
      icon: <ContactMailTwoToneIcon fontSize="large" className={classes.icon}/>,
    },
  ];

  return (
    <>
      <AppBar position="sticky" className={classes.root}>
        <Toolbar className={classes.toolbar}>
          <img src={logo} className={classes.logo} alt="Logo" />
          <List className={classes.menu}>
            {links.map(({ id, text }, index) => (
              <Link
                key={index}
                to={id}
                spy={true}
                activeClass="active"
                smooth={true}
                duration={500}
                offset={-70}
              >
                {text}
              </Link>
            ))}
          </List>
          <IconButton
            edge="end"
            className={classes.menubutton}
            onClick={() => setOpen(!open)}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <IconButton onClick={() => setOpen(false)}>
          <CancelIcon fontSize="large" className={classes.cancelicon}/>
        </IconButton>
        <Divider/>
        {links.map(({ id, text, icon }, index) => (
              <Link
                key={index}
                className={classes.sidebar}
                to={id}
                spy={true}
                activeClass="active"
                smooth={true}
                duration={500}
                offset={-70}
              >
                <ListItem component="h5">
                    <span>
                        <ListItemIcon>
                            {icon}
                        </ListItemIcon>
                    </span>{text}
                </ListItem>
              </Link>
            ))}
      </Drawer>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#000",
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  logo: {
    height: "5rem",
    objectFit: "contain",
    "&:hover": {
      cursor: "pointer",
    },
  },
  icon:{
      color:"#BEBEBE",
      "&:hover":{
          color:"orange",
      }
  },
  menu: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    "& a": {
      color: "#bebebe",
      fontSize: "1.5rem",
      fontWeight: "bold",
      marginLeft: theme.spacing(2),
    },
    "& a:hover": {
      cursor: "pointer",
      color: "#EF652A",
      borderBottom: "3px solid #EF652A",
    },
  },
  menubutton: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      color: "#EF652A",
      position: "absolute",
      
      right: 10,
    },
  },
  cancelicon:{
  color:"#EF652A",

  },
  sidebar:{
      /* backgroundColor:"#333", */
      width: "40vw",
      [theme.breakpoints.down("sm")]:{
          width: "60vw"
      },
      "& h5":{
          margin: theme.spacing(10, 0, 0, 4),
          fontSize: "1.5rem",
          color:"#BEBEBE",
      },
      "& h5:hover":{
          color:"#EF652A",
          cursor:"pointer",
      }
  }
}));

export default NavBar;
