import React from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';
import jobRole from '../assets/jobRole.json'
import jobSkills from '../assets/jobSkills.json'
import summaries from '../assets/summaries.json'
import { saveResumeAPI } from '../services/allAPI';
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';


const steps = ['Basic Information','contact Details','Educational Details','Review & submit'];

function Userinputs({resumeData,setResumeData}) {
console.log(resumeData)

  const [activeStep, setActiveStep] = React.useState(0);
// usenavigate hook to route pages
const navigate= useNavigate()

   const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const renderformcontent = (stepcount)=>{

    switch (stepcount) {
      case 0: return(
        <div>
          <h3>Personal Details</h3>
          <div className="p-3 row">
            <TextField value={resumeData.fullName} onChange={e=>setResumeData({...resumeData,fullName:e.target.value})} id="standard-basic-name" label="FullName" variant="standard" />
            <TextField value={resumeData.location} onChange={e=>setResumeData({...resumeData,location:e.target.value})} id="standard-basic-Ioc" label="Location" variant="standard" />
                  <FormControl variant="standard" >
                  <InputLabel id="demo-simple-select-standard-label">Choose job Tittle</InputLabel>
                  <Select onChange={e=>setResumeData({...resumeData,job:e.target.value})} labelId="demo-simple-select-standard-label" id="demo-simple-select">
                    { jobRole.jobRoles.map(job=>(
                        <MenuItem key={job} value={job}>{job}</MenuItem>
                    ))}
                    
                  </Select>
                </FormControl>
          </div>
        </div>
      )
      break;

      case 1: return(
        <div>
          <h3>Contact Details</h3>
          <div className="p-3 row">
            <TextField value={resumeData.email} onChange={e=>setResumeData({...resumeData,email:e.target.value})} id="standard-basic-email" label="Email" variant="standard" />
            <TextField value={resumeData.phone} onChange={e=>setResumeData({...resumeData,phone:e.target.value})} id="standard-basic-num" label="Contact Number" variant="standard" />
            <TextField value={resumeData.linkedin} onChange={e=>setResumeData({...resumeData,linkedin:e.target.value})} id="standard-basic-Linkedin" label="Linkedin Link" variant="standard" />
            <TextField value={resumeData.github} onChange={e=>setResumeData({...resumeData,github:e.target.value})} id="standard-basic-Github" label="Github Link" variant="standard" />
          </div>
        </div>
      )
      break;
      case 2: return(
        <div>
          <h3>Educational Details</h3>
          <div className="p-3 row">
            <TextField value={resumeData.degree} onChange={e=>setResumeData({...resumeData,degree:e.target.value})} id="standard-basic-Degree" label="bacherlor" variant="standard" />
            <TextField value={resumeData.college} onChange={e=>setResumeData({...resumeData,college:e.target.value})} id="standard-basic-college" label="College / university" variant="standard" />
            <TextField value={resumeData.year} onChange={e=>setResumeData({...resumeData,year:e.target.value})} id="standard-basic-year" label="year of graduation" variant="standard" />
          </div>
        </div>
      )
      break;
      case 3:return(
        <div>
          <p> Our All will generate Skills & summary according to your jpb roles.once the form get submitted,user wont get the chance to update the resume details.if you want ot processed please click the <b>Generate AI Skill & Summary </b> button to submit
          </p>
        </div>
      )
      break;
      default: return null
      break;
    }
  }


//generate skills & summary
const generateSkills=()=>{
  setResumeData({...resumeData,skills:jobSkills[resumeData.job],summary:summaries[resumeData.job]})
  handleNext()
}

//save summary
const handleAddResume=async()=>{

  const{ fullName,location,job,email,phone,github, linkedin, degree, college, year, skills, summary}=resumeData
// console.log(resumeData)
  if(fullName &&location&& job&& email&& phone&& github &&linkedin && degree && college &&year && skills && summary){

const response=await saveResumeAPI(resumeData)
console.log(response);
if(response.status=="201"){
  toast.success("resume added succesfully")
  
  const resumeId=response.data.id
  setTimeout(()=>{
    navigate(`/resume/${resumeId}/view`)
  },2000)
}
   
  }else{
    toast.info("please fill missing fields")
  }
}



  return (
    <div>
       <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleAddResume}>
              Finish
            </Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          <Box>
            {/* {render content} */}
            {renderformcontent(activeStep)}
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            
              {activeStep === steps.length - 1 ?<Button onClick={generateSkills}>Generate AI Skills & Summary</Button>:<Button onClick={handleNext} >Next</Button>}
           
          </Box>
        </React.Fragment>
      )}
    </Box>
    </div>
  )
}

export default Userinputs