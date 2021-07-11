import React,{useState,useEffect} from 'react';
import {
  TextField,
  Box,
  Typography,
  makeStyles,
  Container,
} from "@material-ui/core";
import { Formik } from "formik";
import * as Yup from "yup";

const myStyles = makeStyles(() => ({
text: {
  borderRadius:`${9}px`,
  width:`${20}em`,
  '& label.Mui-focused': {
    color: '#1A6F4C',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#1A6F4C',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#1A6F4C',
    },
    '&:hover fieldset': {
      borderColor: '#1A6F4C',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#1A6F4C',
    },
  },
},
field: {
  borderRadius:`${9}px`,
  width:`${90}%`,
  marginTop:`${1.5}em`,
  '& label.Mui-focused': {
    color: '#1A6F4C',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#1A6F4C',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#1A6F4C',
    },
    '&:hover fieldset': {
      borderColor: '#1A6F4C',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#1A6F4C',
    },
  },
},
navigate: {
  border:`${1}px solid #1A6F4C`,
  color:`#1A6F4C`,
  width:`${45}px`,
  height:`${25}px`,
  paddingTop:`${3}px`,
  borderRadius:`${8}px`,
  marginLeft:`${8}px`,
  textAlign:`center`,
  cursor:`pointer`,
},
step: {
  border:`${1}px solid #1A6F4C`,
  color:`#1A6F4C`,
  width:`${100}%`,
  height:`${25}px`,
  borderRadius:`${10}px`,
  paddingTop:`${4}px`,
  marginLeft:`${8}px`,
 textAlign:`center`,
  cursor:`pointer`,
  fontSize:`${16}px`,
  fontFamily:`poppins`
},
option: {
  border:`${1}px solid #1A6F4C`,
  color:`#1A6F4C`,
  width:`${35}px`,
  height:`${20}px`,
  borderRadius:`${3}px`,
  margin:`${8}px`,
 textAlign:`center`,
  cursor:`pointer`,
  fontSize:`${13}px`,
  paddingTop:`${6}px`
}
}));

const SignupSchema = Yup.object().shape({
    email: Yup.string().email(`please input a valid email`).required("Required field"),
    name:Yup.string().min(3,"Required field"),
    address:Yup.string().min(5,"Required field"),
    date:Yup.string().required("Required field"),
  });

  
const BasicInformation = ({increment}) => {
  const classes = myStyles();
  const [value, setValue] = useState(9);
  const [internet, setInternet] = useState('Yes');
  const [indegious, setIndegious] = useState("Yes");
  const [Price, setPrice] = useState(">$35000");
  useEffect(() => {
   const id = document.querySelectorAll("#box");
   const price = document.querySelectorAll("#price");
   const first = document.querySelectorAll("#first");
   const second = document.querySelectorAll("#second");

   const tab =  (target) => {
    var x =0;
    while(x < target.length){
      target[x].style.background="#fff";
      target[x].style.color="#1A6F4C";
      x++
    }
  }
   for(let i = 0; i < id.length; i++){
     id[i].addEventListener("click",(e)=>{
      tab(id)
       e.target.style.background="#1A6F4C";
       e.target.style.color="#fff";

     })
    }

     for(let i = 0; i < price.length; i++){
      price[i].addEventListener("click",(e)=>{
       tab(price)
        e.target.style.background="#1A6F4C";
        e.target.style.color="#fff";
 
      })
   }
   for(let i = 0; i < first.length; i++){
    first[i].addEventListener("click",(e)=>{
     tab(first)
      e.target.style.background="#1A6F4C";
      e.target.style.color="#fff";

    })
 }

 for(let i = 0; i < second.length; i++){
  second[i].addEventListener("click",(e)=>{
   tab(second)
    e.target.style.background="#1A6F4C";
    e.target.style.color="#fff";

  })
}
    
  }, []);
  
    return(
        <>
      
        <Container>
          <Box style={{marginLeft:`${-3}em`,marginBottom:`${1.5}em`}}>
<Typography variant="h5" style={{color:`#1A6F4C`,fontSize:`${25}px`}}>Tell us about yourself:</Typography>
</Box>
         <Formik
                  enableReinitialize
                    initialValues={{
                      name: "",
                      email: "",
                      address: "",
                      date:"",
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={(Values) => increment + 1}
                  >
                        {({ handleSubmit, handleChange, errors }) => (
                             <form style={{overflowY:`scroll`,overflowX:`hidden`,margin:`${-0.5}em ${0}px ${0}px ${-9}em`,width:`${58}vw`,height:`${70}vh`,}} onSubmit={handleSubmit}>
    <div style={{display:`flex`,marginTop:`${1.5}em`}}>
  <Box>
<TextField
variant="outlined"
type="text"
size="small"
onChange={handleChange}
name="name"
id="name"
error={errors.name}
label="First Name"
className={classes.text}
/>
</Box>

<Box style={{marginLeft:`${2}em`}}>
<TextField
variant="outlined"
type="text"
size="small"
onChange={handleChange}
name="name"
id="name"
label="Phone Number"
error={errors.name}
className={classes.text}
/>
</Box>
</div>

<div style={{display:`flex`,marginTop:`${2}em`,marginBottom:`${1}em`}}>
  <Box>
<TextField
variant="outlined"
type="text"
size="small"
onChange={handleChange}
name="name"
id="name"
label="School"
error={errors.name}
className={classes.text}
/>
</Box>

<Box  style={{marginLeft:`${2}em`}}>
<TextField
variant="outlined"
type="email"
size="small"
onChange={handleChange}
name="name"
id="name"
label="Email"
error={errors.name}
className={classes.text}
/>
</Box>
</div>

<div style={{display:`flex`,marginTop:`${2}em`,marginBottom:`${1}em`,overflow:`hidden`}}>
  <Box style={{display:`flex`,marginTop:`${1.6}em`,position:`relative`}}>
  <Typography style={{position:`absolute`,bottom:`${2.2}em`,color:`#323865`,fontWeight:600,fontFamily:`poppins`}}>Current Grade</Typography>
  <Box className={classes.navigate} id="box" onClick={ setValue(9)} > {value} </Box>
  <Box className={classes.navigate} id="box" onClick={ setValue(10)} > 10 </Box>
  <Box className={classes.navigate} id="box" onClick={ setValue(11)} >11</Box>
  <Box className={classes.navigate} id="box" onClick={ setValue(12) } > 12</Box>
  <Box className={classes.navigate} id="box" onClick={ setValue(13)} >13 </Box>
</Box>
<Box style={{marginLeft:`${2}em`}} >
<TextField
variant="outlined"
type="text"
size="small"
onChange={handleChange}
name="name"
id="name"
label="Geographic Region"
error={errors.name}
style={{marginTop:`${1}em`,width:`${21}em`,marginLeft:`${2}em`}}
className={classes.text}
/>
</Box>
</div>
<TextField
variant="outlined"
type="text"
size="small"
onChange={handleChange}
name="address"
id="address"
label="List any regional program you are a part of:"
placeholder="e.g IB,AP,GHSM"
error={errors.address}
className={classes.field}
/>

<Box style={{marginTop:`${2.5}em`,width:`${90}%`}}>
<Typography style={{color:`#323865`,fontWeight:600,textAlign:`center`}} variant="h5">What is your household income?</Typography>

<Typography style={{fontSize:`${1}em`,textAlign:`center`}}>We ask for your household income to ensure that we are providing adequate opportunities to multiple students across Ontario</Typography>
<Box style={{display:`flex`,marginTop:`${1.5}em`}}>
  <Box className={classes.step} id="price" onClick={ setPrice(`>$35000`)} > {Price} </Box>
  <Box className={classes.step} id="price" onClick={ setPrice(`$35,000 - $55,000`)} > $35,000 - $55,000 </Box>
  <Box className={classes.step} id="price" onClick={ setPrice(`$55,000 - $75,000`)} >$55,000 - $75,000</Box>
  <Box className={classes.step} id="price" onClick={ setPrice(`$100,000+`)} > $100,000+</Box>
</Box>
</Box>

<div style={{display:`flex`,marginTop:`${1}em`,marginBottom:`${1}em`}}>
  <Box style={{marginLeft:`${2}em`}}>
<Typography style={{color:`#323865`,fontWeight:600,fontSize:`${1}em`}}>Do you have access to a laptop and internet  that you can complete the <br/> program at home?</Typography>
</Box>

<Box  style={{marginLeft:`${2}em`}}>
<Box style={{display:`flex`}}>
<Box className={classes.option} id="first"  onClick={ setInternet(`Yes`)} >{internet}</Box>
<Box className={classes.option}  id="first"  onClick={ setInternet(`Yes`)}>No</Box>
</Box>
</Box>
</div>

<div style={{display:`flex`,marginTop:`${2}em`,marginBottom:`${1}em`}}>
  <Box style={{marginLeft:`${2}em`}}>
  <Typography style={{color:`#323865`,fontWeight:600,fontSize:`${1}em`}}>Do you wish to self‑identify as an Indigenous person  in Canada, such as <br/> 
First Nation, Métis or Inuit?</Typography>
</Box>

<Box  style={{marginLeft:`${1}em`}}>
  <Box style={{display:`flex`}}>
<Box className={classes.option}  id="second" onClick={ setIndegious(`Yes`)}>{indegious}</Box>
<Box className={classes.option}  id="second" onClick={ setIndegious(`Yes`)}>No</Box>
</Box>
</Box>
</div>
</form>
 )}
</Formik>
</Container>
</>
    )
}

export default BasicInformation;
