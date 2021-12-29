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
      <About title="Mi Perfil" id="about" dark={true } />
      <Skills title="Mis Habilidades" id="skills" dark={false } />
      <Works title="Mis Proyectos" id="works" dark={true } />
      <Contact title="Contacto" id="contact" dark={false }/>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
root: {

}
}))

export default App;
