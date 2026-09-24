import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
     {/*landing*/}
     <div style={{height:'100vh',backgroundImage:'url("/landing.jpeg")',backgroundSize:'cover',
        backgroundAttachment:'fixed' }} className="d-flex justify-content-center align-items-center">
          <div style={{backgroundColor:'rgba(0,0,0,0.39)'}} className="w-50 p-5 rounded text-light text-center">
            <h1>Designed To Get Hired.Your Skills, Your Story, Your Next Job - All In One.</h1>
            <Link to={'/steps'} style={{backgroundColor:'#755846'}} className='btn text-light mt-3'>Make Your Resume With AI</Link>

          </div>

      </div>

     {/* about */}
   <div className='container my-5'>
  <h1 className='text-center mb-5'>What's AI resume Builder</h1>
  <div className='row align-items-center'>
<div className='col-lg-1'></div>
<div className='col-lg-5'><p style={{textAlign:'justify'}}>An AI rBuilder is a web application that helps users create professional resumes quickly and efficiently using artificial intelligence. Traditional resume creation can be time-consuming and difficult, especially for freshers who may not know the correct format or keywords required for modern recruitment systems.</p>

            <p style={{textAlign:'justify'}}> The system can suggest job-specific keywords, professional summaries, and skill recommendations to make the resume more effective and ATS (Applicant Tracking System) friendly. </p>
            <p style={{textAlign:'justify'}}>The main goal of the AI rBuilder is to simplify the resume creation process and help job seekers build professional, well-structured resumes in a few minutes. Users can edit content, preview their resume, and download it in formats such as PDF.</p>

            <p style={{textAlign:'justify'}}>This type of system is especially useful for students & fresh graduates, who want to create high-quality resumes that increase their chances of getting shortlisted for job interviews.</p></div>
<div className='col-lg-1'></div>
<div className='col-lg-5'>
  <img width={'100%'} height={'550px'} src="/resume.jpeg" alt="" />
</div>

  </div>
   </div>

{/*banner*/}
<div style={{height:'80vh',backgroundImage:'url("/team.jpeg")',backgroundSize:'cover',backgroundPosition:'center',backgroundAttachment:'fixed'}}></div>

{/*testimony*/}
 <div className='container my-5'>
  <h1 className='text-center mb-5'>Testimony</h1>
  <div className='row align-items-center'>
<div className='col-lg-1'></div>
<div className='col-lg-5'>
  <h5>Trusted by professionala worldwide</h5>
  <p style={{textAlign:'justify'}}>An AI rBuilder is a web application that helps users create professional resumes quickly and efficiently using artificial intelligence. Traditional resume creation can be time-consuming and difficult, especially for freshers who may not know the correct format or keywords required for modern recruitment systems.</p>

            <p style={{textAlign:'justify'}}> The system can suggest job-specific keywords, professional summaries, and skill recommendations to make the resume more effective and ATS (Applicant Tracking System) friendly. </p>
            <p style={{textAlign:'justify'}}>The main goal of the AI rBuilder is to simplify the resume creation process and help job seekers build professional, well-structured resumes in a few minutes. Users can edit content, preview their resume, and download it in formats such as PDF.</p>

            <p style={{textAlign:'justify'}}>This type of system is especially useful for students & fresh graduates, who want to create high-quality resumes that increase their chances of getting shortlisted for job interviews.</p>
  </div>
<div className='col-lg-1'></div>
<div className='col-lg-5'>
  <div className='row'>
<div className='col-md-3'>
<img className='img-fluid p-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5nVLS7ubsVKZ7LN0_Gp6gn7tyJCNH_uuzM3l9EM0nVg&s=10" alt="user" />
</div>
<div className='col-md-3'>
<img className='img-fluid p-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5nVLS7ubsVKZ7LN0_Gp6gn7tyJCNH_uuzM3l9EM0nVg&s=10" alt="" />
</div>
<div className='col-md-3'>
<img className='img-fluid p-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5nVLS7ubsVKZ7LN0_Gp6gn7tyJCNH_uuzM3l9EM0nVg&s=10" alt="" />
</div>
<div className='col-md-3'>
<img className='img-fluid p-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5nVLS7ubsVKZ7LN0_Gp6gn7tyJCNH_uuzM3l9EM0nVg&s=10" alt="" />
</div>
<div className='col-md-3'>
<img className='img-fluid p-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5nVLS7ubsVKZ7LN0_Gp6gn7tyJCNH_uuzM3l9EM0nVg&s=10" alt="" />
</div>
<div className='col-md-3'>
<img  className='img-fluid p-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5nVLS7ubsVKZ7LN0_Gp6gn7tyJCNH_uuzM3l9EM0nVg&s=10" alt="" />
</div>
<div className='col-md-3'>
<img className='img-fluid p-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5nVLS7ubsVKZ7LN0_Gp6gn7tyJCNH_uuzM3l9EM0nVg&s=10" alt="" />
</div>
<div className='col-md-3'>
<img className='img-fluid p-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5nVLS7ubsVKZ7LN0_Gp6gn7tyJCNH_uuzM3l9EM0nVg&s=10" alt="" />
</div>
<div className='col-md-3'>
<img className='img-fluid p-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5nVLS7ubsVKZ7LN0_Gp6gn7tyJCNH_uuzM3l9EM0nVg&s=10" alt="" />
</div>
<div className='col-md-3'>
<img className='img-fluid p-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5nVLS7ubsVKZ7LN0_Gp6gn7tyJCNH_uuzM3l9EM0nVg&s=10" alt="" />
</div>
<div className='col-md-3'>
<img className='img-fluid p-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5nVLS7ubsVKZ7LN0_Gp6gn7tyJCNH_uuzM3l9EM0nVg&s=10" alt="" />
</div>
<div className='col-md-3'>
<img className='img-fluid p-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5nVLS7ubsVKZ7LN0_Gp6gn7tyJCNH_uuzM3l9EM0nVg&s=10" alt="" />
</div>
  </div>
</div>
  </div>
   </div>
  
    </>
  )
}

export default Home
