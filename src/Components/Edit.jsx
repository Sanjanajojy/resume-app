import React from 'react'
import { FaRegEdit } from "react-icons/fa";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import jobRole from '../assets/jobRole.json'
import { FaXmark } from "react-icons/fa6";
import { useRef } from 'react';
import { toast } from 'react-toastify';
import { updateResumeAPI } from '../services/allAPI';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  maxHeight:"90vh",
  overflowY:"auto",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  
};






function Edit({resumeData,setResumeData}) {

 const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () =>  setOpen(false);
  const skillRef=useRef()


const removeSkill=(skill)=>{
  setResumeData({...resumeData,skills:resumeData.skills.filter(item=>item!=skill)})
}
const addSkill=(skill)=>{
  if(skill){
if(resumeData?.skills?.map(item=>item.toLowerCase()).includes(skill.toLowerCase())){
  toast.warning("given skill already exist..please add another one...")
}else{
   setResumeData({...resumeData,skills:[...resumeData?.skills,skill]})
}
skillRef.current.value=""
  }else{
    toast.info("input valid skill!!!")
  }
}

const handleUpdate=async()=>{
const{ fullName,location,job,email,phone,github, linkedin, degree, college, year, skills, summary}=resumeData

  if(fullName &&location&& job&& email&& phone&& github &&linkedin && degree && college &&year && skills.length>0 && summary){

const response=await updateResumeAPI(resumeData.id,resumeData)
if(response.status=="200"){
  toast.success("resume added succesfully")
  
  
  setTimeout(()=>{
   handleClose()
  },2000)
}


  }
}


  return (
    <>
    <button onClick={handleOpen} style={{color:'#714a2f'}} className='btn'><FaRegEdit className='fs-3' />Edit CV</button>  
       <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit resume Details
          </Typography>
          <Box id="modal-modal-description" sx={{ mt: 2 }}>
             <div>
          <h3>Personal Details</h3>
          <div className="p-3 row">
            <TextField value={resumeData.fullName} onChange={e=>setResumeData({...resumeData,fullName:e.target.value})} id="standard-basic-name" label="FullName" variant="standard" />
            <TextField value={resumeData.location} onChange={e=>setResumeData({...resumeData,location:e.target.value})} id="standard-basic-Ioc" label="Location" variant="standard" />
                  <FormControl variant="standard" >
                  <InputLabel id="demo-simple-select-standard-label">Choose job Tittle</InputLabel>
                  <Select value={resumeData?.job} onChange={e=>setResumeData({...resumeData,job:e.target.value})} labelId="demo-simple-select-standard-label" id="demo-simple-select">
                    { jobRole.jobRoles.map(job=>(
                        <MenuItem key={job} value={job}>{job}</MenuItem>
                    ))}
                    
                  </Select>
                </FormControl>
          </div>
        </div>
            <div>
                      <h3>Contact Details</h3>
                      <div className="p-3 row">
                        <TextField value={resumeData.email} onChange={e=>setResumeData({...resumeData,email:e.target.value})} id="standard-basic-email" label="Email" variant="standard" />
                        <TextField value={resumeData.phone} onChange={e=>setResumeData({...resumeData,phone:e.target.value})} id="standard-basic-num" label="Contact Number" variant="standard" />
                        <TextField value={resumeData.linkedin} onChange={e=>setResumeData({...resumeData,linkedin:e.target.value})} id="standard-basic-Linkedin" label="Linkedin Link" variant="standard" />
                        <TextField value={resumeData.github} onChange={e=>setResumeData({...resumeData,github:e.target.value})} id="standard-basic-Github" label="Github Link" variant="standard" />
                      </div>
                    </div>
                    <div>
                              <h3>Educational Details</h3>
                              <div className="p-3 row">
                                <TextField value={resumeData.degree} onChange={e=>setResumeData({...resumeData,degree:e.target.value})} id="standard-basic-Degree" label="bacherlor" variant="standard" />
                                <TextField value={resumeData.college} onChange={e=>setResumeData({...resumeData,college:e.target.value})} id="standard-basic-college" label="College / university" variant="standard" />
                                <TextField value={resumeData.year} onChange={e=>setResumeData({...resumeData,year:e.target.value})} id="standard-basic-year" label="year of graduation" variant="standard" />
                              </div>
                            </div>
                        <div>
                          <h3>skills</h3>
                          <div className='d-flex p-3'>
                            <input ref={skillRef} type="text"  placeholder='Add new skill' className='form-control'/>
                             <Button onClick={()=>addSkill(skillRef.current.value)} style={{color:'#714a2f'}}>Add</Button>

                          </div>
                          <h6>Added Skills:</h6>
                          <div className='p-3 d-flex justify-content-between flex-wrap'>
                         {resumeData?.skills?.map(skill=>(
                        <Button onClick={()=>removeSkill(skill)} key={skill} variant='contained' sx={{backgroundColor:'3b19596'}} className='my-1'>{skill}<FaXmark className='ms-2' /></Button>
                         )) }
                          </div>
                        </div>

                     {/*summary */}
                     <div>
                      <h3>Summary</h3>
                      <div className='p-3 row'>
                       <TextField value={resumeData.summary} onChange={e=>setResumeData({...resumeData,summary:e.target.value})} id="standard-basic-Summary" label="Summary" variant="standard" />
                      </div>
                     </div>
                       {/*update resume */}
                       <div>
         <Button onClick={handleUpdate} className='btn btn-light' style={{color:'#714a2f'}}>Update</Button>
                       </div>
           
                       
          </Box>
        </Box>
      </Modal>
    </>
  )
}

export default Edit
