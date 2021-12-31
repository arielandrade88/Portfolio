import { Button, Card, CardActions, CardContent, CardMedia, makeStyles, Typography } from "@material-ui/core";
import image from "../../images/about/persona1.png"
import TypeWriterEffect from "react-typewriter-effect"
import pdf from "../../docs/cv.pdf"

const About = ({ title, dark, id }) => {
  const classes = useStyles();
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
      <div className={classes.sectioncontent} id={id}>
        <Typography variant="h3">{title}</Typography>
        <Card className={classes.card}>
            <CardMedia image={image} className={classes.media} title="picture" />
            <CardContent className={classes.cardcontent}>
                <TypeWriterEffect
                text="Ariel Andrade"
                textStyle={{
                    fontSize: "3rem",
                    fontWeight: "700px",
                    color: "#EF652A"
                }}
                startDelay={100}
                cursorColor="#000"
                typeSpeed={100}
                 />
                <TypeWriterEffect
                text="DESARROLLADOR WEB FULLSTACK"
                textStyle={{
                    fontSize: "1.3rem",
                    fontWeight: "700px",
                    color: "#BEBEBE"
                }}
                startDelay={2000}
                cursorColor="#BEBEBE"
                typeSpeed={100}
                 />
                 <Typography variant="h6" color="textSecondary">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aliquam, rerum recusandae expedita eum quas enim vel nam incidunt consequatur odio dolore voluptate facere necessitatibus voluptas debitis doloribus, rem dignissimos.
                 </Typography>
            </CardContent>
            <CardActions>
                <Button variant="contained" className={classes.pdfbutton}>
                <a href={ pdf } download>
                Descargar CV
                    </a>    
                </Button>
            </CardActions>
        </Card>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: "100vh",
  },
  sectiondark: {
    background: "#2594A6", 
    color: "#fff",
  },
  sectioncontent: {
    maxWidth: "80vh",
    margin: "10px auto",
  },
  card:{

      height: "70vh",
      display: "flex",
      marginTop: theme.spacing(5),
      position: "relative",
      backgroundColor:"#000"
  },
  media: {
      width:"500px",
      height:"auto",
    objectFit: "cover",
    borderRadius:"10px",
    margin: theme.spacing(5)
  },
  cardcontent: {
      marginTop: theme.spacing(3),
      "& h6": {
        marginTop:theme.spacing(6),
        color:"#BEBEBE"
      }
  },
  pdfbutton: {
      position: "absolute",
      bottom: "2.5rem",
      right: "4rem",
      backgroundColor: "#EF652A",
      padding: theme.spacing(2),
      "& a": {
          color:"#BEBEBE",
          textDecoration: "none",
          fontWeight:900,
      },
      "& a:hover": {
        color:"#EF652A",
      }
  }
}));

export default About;
