import { makeStyles } from "@material-ui/core";
import NavBar from './Components/NavBar/NavBar'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Works from './Components/Works/Works'
import Contact from './Components/Contact/Contact'

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <NavBar/>
      <About title="Mi Perfil" id="about" dark={false } />
      <Skills title="Mis Habilidades" id="skills" dark={true } />
      <Works title="Mis Trabajos" id="works" dark={false } />
      <Contact title="Contacto" id="contact" dark={true }/>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
root: {

}
}))

export default App;
