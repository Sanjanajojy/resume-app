import { Link, useParams } from 'react-router-dom'
import React, { useEffect, useRef, useState } from 'react'
import Edit from '../Components/Edit'
import Preview from '../Components/Preview'
import { FaDownload } from "react-icons/fa";
import { FaFastBackward } from "react-icons/fa";
import { downloadResumeAPI, viewResumeAPI } from '../services/allAPI';
import html2canvas from 'html2canvas'
import { jsPDF } from "jspdf";



function Viewresume() {

const {id}=useParams()
const[resume,setResume]=useState({})
// console.log(resume)
const previewRef=useRef()

useEffect(()=>{
  getResumeDetails()
},[])

const  getResumeDetails=async()=>{
  const response=await viewResumeAPI(id)
 // console.log(response)
 if(response.status=="200")
  setResume(response.data)
}

const downloadCV=async()=>{
  const previewTag=previewRef.current
  const canvas=await html2canvas(previewTag)
 //convert to shorturl
 canvas.toBlob(async(imgFile)=>{

  //create Formdata to upload file via API
  const formData=new FormData()
  formData.append("file",imgFile)
  formData.append("upload_preset","resumes")

//generate resumeIMG  by calling cloudinary API
const result = await fetch('https://api.cloudinary.com/v1_1/f1mlxwro/image/upload',{
  method:'POST',
  body:formData
})
const serveData= await result.json()
console.log(serveData)
const url = serveData.secure_url
console.log(url);

generatePDF(url)


 

 })


}

const generatePDF=async(resumeIMG)=>{
  let today= new Date()
   let timeStamp=`${today.toLocaleDateString()},${today.toLocaleTimeString()}`;
  // console.log(timeStamp);
  const pdf = new jsPDF()
  const imageWidth=pdf.internal.pageSize.getWidth()
  const imageHeight=pdf.internal.pageSize.getHeight()
  pdf.addImage(resumeIMG,"PNG",0,0,imageWidth,imageHeight)

const downloadDetails={
  timeStamp,resumeId:id,resumeIMG,jobRole:resume.job
}
const result=await downloadResumeAPI(downloadDetails)
console.log(result)

if(result.status=='201'){
  pdf.save(`${resume.fullName}-CV.pdf`)
}


}




  return (
    <>
      <div className='container my-5'>
       <div className='row'>
   <div className='col-lg-2'></div>
   <div className='col-lg-8'>
  {/*navigation icons */}
  <div className='d-flex justify-content-center align-items-center'>
     {/*download */}
     <button onClick={downloadCV} style={{color:'#714a2f'}} className='btn me-2'><FaDownload className='fs-5' />Download CV

     </button>
        {/*Edit */}
        <Edit  resumeData={resume} setResumeData={setResume}/>
         {/*back */}
         <Link to={'/form'} style={{color:'#714a2f'}} className='btn'><FaFastBackward className='fs-3' />Home</Link>

  </div>

<div ref={previewRef} className='p-5'>
<Preview resumeData={resume}/>
</div>
   </div>
   <div className='col-lg-2'></div>

       </div>
      </div>
    </>
  )
}

export default Viewresume
