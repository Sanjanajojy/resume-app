import React, { useState } from 'react'
import Userinputs from '../Components/Userinputs'
import Preview from '../Components/Preview'

function Userform() {
  const[resumeData,setResumeData]=useState({
    fullName:"",
    location:"",
    job:"",
    email:"",
    phone:"",
    github:"",
    linkedin:"",
    degree:"",
    college:"",
    year:"",
    skills:[],
    summary:"",
  })
  console.log(resumeData)
  return (
    <div>
       <div className='container my-5'>
  <div className='row'>
<div className='col-lg-6'>
 <Userinputs resumeData={resumeData} setResumeData={setResumeData}/>
</div>
<div className='col-lg-6'>
  {resumeData.fullName&& <Preview resumeData={resumeData}/> }

</div>
  </div>
      </div>
    </div>
  )
}

export default Userform
