import React, { useEffect, useState } from 'react'
import { IoCloudUploadOutline } from 'react-icons/io5';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage'
import { app } from '../../../lib/firebase';
import { publicRequest } from '@/requestMethods';

const SubmitProposal = ({showForm, setShowForm, clientId, jobId, providerId}) => {


    const [file, setFile] = useState(null)
    const [previewId, setPreviewId] = useState(null)
    const [fileProgress, setFileProgress] = useState(null)
    const [coverLetter, setCoverLetter] = useState('')
    const [bidAmount, setBidAmount] = useState('')
    const [deliveryDate, setDeliveryDate] = useState('')
    const [isClicked, setIsClicked] = useState(false)

    const popUpClassName = `pop-up ${showForm ? 'show' : ''}`;



    useEffect(() => {
        if (file) {
            handleUploadVideo();
        }
    }, [file]);


    const handleFileDrop = (e) => {
        e.preventDefault();
        // const droppedFiles = Array.from(e.dataTransfer.files?.[0]);
        // setFile(droppedFiles);
        setFile(e.target.files?.[0]);
    };

    const handleFileSelect = (e) => {
        // const selectedFiles = Array.from(e.target.files?.[0]);
        setFile(e.target.files?.[0]);
    };



    const handleUploadVideo =()=> {
        if (!file) {
            console.error('No file selected for upload');
            return;
        }
        const fileName = new Date().getTime() + file.name
        const storage = getStorage(app)
        const storageRef = ref(storage, fileName)
        const uploadTask = uploadBytesResumable(storageRef, file)

        uploadTask.on('state_changed', 
            (snapshot) => {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                // console.log('Upload is ' + progress + '% done');
                setFileProgress(progress)
                switch (snapshot.state) {
                case 'paused':
                    // console.log('Upload is paused');
                    break;
                case 'running':
                    // console.log('Upload is running');
                    break;
                    default:
                }
            }, 
            (error) => {
                // Handle unsuccessful uploads
            }, 
            () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    // console.log(downloadURL)
                    setPreviewId(downloadURL)
                });
            }
        );
    }



    const validateForm = () => {
        const errors = [];
        if (!coverLetter.trim()) errors.push("Cover letter is required.");
        if (!bidAmount.trim()) errors.push("Bid amount is required.");
        if (!deliveryDate.trim()) errors.push("Delivery date is required.");
        if (!previewId) errors.push("A project file must be uploaded.");
        return errors;
    };

    const handleSubmit = async(event) => {
        setIsClicked(true)
        event.preventDefault();
        const errors = validateForm();
        if (errors.length > 0) {
            alert("Errors: " + errors.join(", "));
            setIsClicked(false)
        } else {
            // Proceed with form submission, such as sending data to a server
            try {
               const res = await publicRequest.post('proposal/new', {
                jobId,
                clientId,
                providerId,
                coverLetter,
                bidAmount,
                deliveryDate,
                attachment: previewId,
               }) 

               if(res.status === 201) {
                   console.log("Form submitted:", { coverLetter, bidAmount, deliveryDate, });
                   setIsClicked(false)
                   alert('Proposal submitted')
                   setShowForm(false)
               }
            } catch (error) {
                console.log(error)
                setIsClicked(false)
            }
            // Reset form fields
            
        }
    };



  return (
    <div onClick={(e)=> {setShowForm(false); e.stopPropagation()}} 
        className={popUpClassName}>
        <div onClick={(e)=> e.stopPropagation()} 
            className='overflow-y-scroll w-4/5 h-3/4 bg-white pb-10 rounded-xl'>
           
            <div className=' h-full flex flex-col items-center p-3 md:p-10 gap-5'>
                <div>
                    <p className=' text-2xl md:font-semibold'>
                        Submit a proposal
                    </p>
                </div>
                <div className=' post-form w-full'>
                    <label htmlFor="cover-letter">Cover Letter</label>
                    <textarea 
                        name="cover" 
                        onChange={(e)=> setCoverLetter(e.target.value)}
                        className='border p-3 w-full border-neutral-400 h-40 rounded-md outline-none text-neutral-600'
                        id="cover-letter" cols="30" rows="10"></textarea>
                </div>
                <div>
                    <div className=' flex gap-5 w-full post-form'>
                        <div className=' flex-1 space-y-2'>
                            <label htmlFor="bid">Bid Amount (&#8358;)</label>
                            <input type="Number" name="bid" id="bid" placeholder='Ex. N300' onChange={(e)=> setBidAmount(e.target.value)} />
                        </div>
                        <div className=' flex-1 space-y-2'>
                            <label htmlFor="deliveryDate">Project duration</label>
                            <input onChange={(e)=> setDeliveryDate(e.target.value)} type="date" name="deliveryDate" id="deliveryDate" />
                        </div>
                    </div>
                </div>


                {/* image upload */}
                <div className=' w-full'>
                    <div className=' w-full mt-5'>
                        <div 
                            onDragOver={(e) => e.preventDefault()} 
                            onDrop={handleFileDrop} 
                            className=' h-16 border border-neutral-400  border-dashed p-2 md:p-5 bg-neutral-100 rounded-md  flex  gap-5 items-center justify-center'>
                            <div className=' flex items-center text-neutral-600 gap-3 text-xs'>
                                <IoCloudUploadOutline />
                                {file && file[0]?.name || <p>
                                    Drag and drop project files
                                </p>}
                            </div>

                            <div className=''>
                                <label htmlFor="browse" className=' bg-white px-1 md:px-5 py-2 text-neutral-600 text-sm'> Select Image</label>
                                <input type="file" onChange={handleFileSelect} className=' hidden' id='browse' />
                            </div>
                        </div>
                        {fileProgress && (
                            <div className="h-1 mt-1 rounded-full overflow-hidden">
                                <div className={` ${fileProgress < 100 ? 'bg-red-600' : 'bg-green-600'} h-full transition-all ease-in-out duration-500`} style={{width: `${fileProgress}%`}} />
                            </div>
                        )}
                    </div>
                    <p className=' text-xs text-neutral-400 mt-2'>
                        Do not upload your resume, your proviralz profile is automatically forwarded to the client with your proposal
                    </p>
                </div>
                <div className=' w-full'>
                    <div className=' w-full'>
                        <div onClick={handleSubmit} className=' purple-btn-long text-sm'>
                            {isClicked? (
                                <div className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500" role="status" aria-label="loading">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            ):(
                                <p>
                                    Submit Proposal
                                </p>
                            ) }
                        </div>
                    </div>
                </div>
                <div className=''>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default SubmitProposal