import React,{useState} from 'react';
import {
  Paper,
   makeStyles,
  Grid,
  Button,
  Container, 
  Box,
 ListItem,
 List,
 Typography,
} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import BasicInformation from "./basicInfo.js";
import Description from "./description.js";
import Upload from "./uploadDocs";

const myStyles = makeStyles(() => ({
  paper: {
    width: `${85}%`,
    height: `${93}vh`,
    background: `#fff`,
    marginTop: `${1.5}em`,
    marginLeft: `${8}em`,
    overflow:`hidden`,
  },
  first: {
    width: `${10}%`,
    height: `${93}vh`,
    background: `#1A6F4C`,
   
  },
  item: {
    marginTop:`${1.5}em`,
    cursor:`pointer`
  },
  contain: {
    marginTop:`${2}em`
  },

  Box: {
    width:`${8}px`,
    height:`${8}px`,
    background:`#BFEDEA`,
    border:`${7}px solid #BFEDEA`,
    borderRadius:`${50}px`,
    
  },
  stepname: {
   color:`#fff`,
   marginLeft:`${0.8}em`,
   fontSize:`${1}em`,
   display:`inline-block`
  },
}));


const App = () => {   
  const classes = myStyles();
  const [activeStep, setActiveStep] = useState(1);
  const handleNext = () => {
    setActiveStep(activeStep + 1)
  }
  const handlePrev = () => {
    setActiveStep(activeStep - 1)
  }
return (
<>
<style>{"body {background-color: #bfbaba; overflow:hidden;}"}</style>
<Paper className={classes.paper} elevation={10}>
<Grid container>
            <Grid className={classes.first} item xs={3}>
<Container>
  <List >
  <ListItem className={classes.item} onClick={()=>setActiveStep(1)} >
  <Box style={ activeStep === 1 ? {background:`#1A6F4C`}  : {background:`#BFEDEA`}} size="small" className={classes.Box}/>
  <Typography className={classes.stepname}  > Description</Typography>
  </ListItem>

  <ListItem className={classes.item} onClick={()=>setActiveStep(2)}>
  <Box size="small" style={ activeStep === 2 ? {background:`#1A6F4C`}  : {background:`#BFEDEA`}} className={classes.Box}/>
  <Typography className={classes.stepname}> Basic Information </Typography>
  </ListItem>

  <ListItem className={classes.item} onClick={()=>setActiveStep(3)}>
  <Box size="small" style={ activeStep === 3 ? {background:`#1A6F4C`}  : {background:`#BFEDEA`}} className={classes.Box}/>
  <Typography className={classes.stepname}  > Long form responses</Typography>
  </ListItem >

  <ListItem className={classes.item} onClick={()=>setActiveStep(4)}>
  <Box size="small" style={ activeStep === 4 ? {background:`#1A6F4C`}  : {background:`#BFEDEA`}} className={classes.Box}/>
  <Typography className={classes.stepname}  >Survey Questions </Typography>
  </ListItem>

  <ListItem className={classes.item} onClick={()=>setActiveStep(5)}>
  <Box size="small" style={ activeStep === 5 ? {background:`#1A6F4C`}  : {background:`#BFEDEA`}} className={classes.Box}/>
  <Typography className={classes.stepname}>Upload Documents</Typography>
  </ListItem >


  <ListItem className={classes.item} onClick={()=>setActiveStep(6)}>
  <Box size="small" style={ activeStep === 6 ? {background:`#1A6F4C`}  : {background:`#BFEDEA`}} className={classes.Box}/>
  <Typography className={classes.stepname} > Review and Submit</Typography>
  </ListItem>
  </List>
 
 <Button
 style={{
  background:`#fff`,
  color:`#1A6F4C`,
  width:`${90}%`,
  height:`${25}px`,
  marginTop:`${1}em`,
  marginLeft:`${1}em`,
  fontSize:`${1}em`,
  borderRadius:`${0.5}em`,
  fontFamily:`poppins`,
  fontWeight:900,
 }}
 >Save and exit {<CloseIcon/>}  </Button>
</Container>
              </Grid>

              <Grid item xs={9}>
                <Container className={classes.contain} maxWidth="sm">
 
                 
<Container>
{activeStep === 1 ? <Description/>  : null}   
 {activeStep === 2 ? <BasicInformation/>  : null}
 {activeStep === 5 ? <Upload/>  : null}

     
</Container>
<Button variant="contained" style={{
                background:`#1A6F4C`,
                color:`#fff`,
                width:`${32}%`,
                height:`${30}px`,
                marginTop:`${2}em`,
                marginLeft:`${38}em`,
                fontSize:`${0.8}em`,
                borderRadius:`${0.5}em`,
                fontFamily:`poppins`,
                fontWeight:900
                }} 
                onClick={handleNext}
                type="submit"
                >
              Save and continue
              </Button>
{
activeStep > 1
            ?  <Button variant="contained" style={{
                background:`#1A6F4C`,
                color:`#fff`,
                width:`${32}%`,
                height:`${30}px`,
                marginTop:`${-4}em`,
                fontFamily:`popins`,
                fontSize:`${0.8}em`,
                fontWeight:900
                }} 
                onClick={handlePrev}
                >
                Back
              </Button>
              :
              null
}
              </Container>
</Grid>
              
             </Grid>
  </Paper>
 
</>
)
}

export default App;