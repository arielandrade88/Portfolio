import { makeStyles } from "@material-ui/core";

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1>mi portfolio</h1>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
root: {

}
}))

export default App;
