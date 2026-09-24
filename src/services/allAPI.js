import apiService from "../api/apiService";

//saveResumeAPI: add resume details to JSON server
export const saveResumeAPI =async(resumeDetails)=>{
    return await apiService('POST',"/resume",resumeDetails)
}
//viewResumeAPI:called by view resume component whe  resume is added
export const viewResumeAPI = async(resumeId)=>{
    return await apiService('GET',`/resume/${resumeId}`,{})
}
//allResumesAPI:called by view resume component whe  resume is added
export const allResumesAPI = async()=>{
    return await apiService('GET',`/resume`,{})
}
////downloadResumeAPI:called by view resume component whe  resume is added
export const downloadResumeAPI = async(resumeDetails)=>{
    return await apiService('POST',`/downloads`,resumeDetails)
}
//getAllDownloadsResumeAPI:called by downloads component when resume get download
export const getAllDownloadsResumeAPI = async()=>{
    return await apiService('GET',`/downloads`,{})
}
//updateResumeAPI:called by edit component whe  resume got changes
export const updateResumeAPI= async(resumeId,resumeDetails)=>{
    return await apiService('PUT',`/resume/${resumeId}`,resumeDetails)
}
//deleteResumeAPI:called by all resume component when delete button clicked
export const deleteResumeAPI= async(resumeId)=>{
    return await apiService('DELETE',`/resume/${resumeId}`,{})
}
