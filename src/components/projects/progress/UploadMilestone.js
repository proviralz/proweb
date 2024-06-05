import React, { useEffect, useState } from 'react'
import { IoCloudUploadOutline } from 'react-icons/io5'
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage'
// import { app } from '../../../lib/firebase';
import { publicRequest } from '@/requestMethods';
import { app } from '../../../../lib/firebase';
import Image from 'next/image';

const UploadMilestone = ({showForm, setShowForm, projectId}) => {


    const [files, setFiles] = useState(null)
    const [previewUrls, setPreviewUrls] = useState(null);
    const [fileProgress, setFileProgress] = useState(null)
    const [isClicked, setIsClicked] = useState(false)

    const popUpClassName = `pop-up ${showForm ? 'show' : ''}`;



    useEffect(() => {
        if (files?.length> 0) {
            handleUploadFiles();
        }
    }, [files]);


    const handleFileDrop = (e) => {
        e.preventDefault();
        const droppedFiles = Array.from(e.dataTransfer.files);
        // setFile(droppedFiles);
        setFiles(droppedFiles);
    };

    const handleFileSelect = (e) => {
        const selectedFiles = Array.from(e.target.files);
        setFiles(selectedFiles);
    };



    const handleUploadFiles =()=> {
        if (files.length === 0) {
            console.error('No file selected for upload');
            return;
        }
        const storage = getStorage(app)
        const uploadPromises = files.map(file => {

            const fileName = new Date().getTime() + file.name
            const storageRef = ref(storage, fileName)
            const uploadTask = uploadBytesResumable(storageRef, file)

            return new Promise((resolve, reject) => {
                uploadTask.on('state_changed',
                    (snapshot) => {
                        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        setFileProgress(progress);
                    },
                    (error) => reject(error),
                    () => {
                        getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
                            resolve(downloadURL);
                        });
                    }
                );
            });


        })

        Promise.all(uploadPromises)
            .then(urls => {
                setPreviewUrls(urls);
            })
            .catch(error => {
                console.error('Error uploading files:', error);
            });

    }



    const validateForm = () => {
        const errors = [];
        if (!previewUrls) errors.push("A project file must be uploaded.");
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

                if (!Array.isArray(previewUrls) || previewUrls.some(url => typeof url !== 'string')) {
                    throw new Error("Invalid file URLs");
                }

                
               const res = await publicRequest.put(`project/add-files/${projectId}`, {
                files: previewUrls
               }) 

               if(res.status === 200) {
                   console.log("Progress files submitted");
                   setIsClicked(false)
                   alert('Progress submitted')
                   setShowForm(false)
               }
            } catch (error) {
                console.log(error)
                setIsClicked(false)
            }
            // Reset form fields
            
        }
    };

    // console.log(previewUrls)

  return (
    <div onClick={(e)=> {setShowForm(false); e.stopPropagation()}} 
        className={popUpClassName}>
        <div onClick={(e)=> e.stopPropagation()} 
            className='overflow-y-scroll w-4/5 h-3/4 bg-white pb-10 rounded-xl'>
           
            <div className=' h-full flex flex-col items-center p-10 gap-5'>
                <div>
                    <p className=' text-2xl font-semibold'>
                        Upload milestone
                    </p>
                </div>
                


                {/* image upload */}
                <div className=' w-full'>
                    <div className=' w-full mt-5'>
                        <div 
                            onDragOver={(e) => e.preventDefault()} 
                            onDrop={handleFileDrop} 
                            className=' h-16 border border-neutral-400  border-dashed p-5 bg-neutral-100 rounded-md  flex  gap-5 items-center justify-center'>
                            <div className=' flex items-center text-neutral-600 gap-3 text-xs'>
                                <IoCloudUploadOutline />
                                { <p>
                                    Drag and drop progress files
                                </p>}
                            </div>

                            <div className=''>
                                <label htmlFor="browse" className=' bg-white px-5 py-2 text-neutral-600 text-sm'> Select Image</label>
                                <input type="file" multiple onChange={handleFileSelect} className=' hidden' id='browse' />
                            </div>
                        </div>
                        {fileProgress?.length > 0 && (
                            <div>
                                {fileProgress.map((progress, index) => (
                                    <div key={index}>
                                        {progress.fileName}: {progress.progress}%
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    
                </div>

                <div className=' w-full'>
                    <div className=' flex flex-wrap justify-between'>
                        {previewUrls?.map((img, i)=> (
                            <div key={i} className=' w-60 h-60 rounded-lg overflow-hidden '>
                                <Image src={img} alt='' width={100} height={100} className=' w-full h-full object-cover' />
                            </div>
                        ))}
                    </div>
                </div>
                <div className=' w-full'>
                    <div className=' w-full'>
                        {previewUrls && <div onClick={handleSubmit} className=' purple-btn-long text-sm'>
                            {isClicked? (
                                <div className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500" role="status" aria-label="loading">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            ):(
                                <p>
                                    Upload progress
                                </p>
                            ) }
                        </div>}
                    </div>
                </div>
                <div className=''>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default UploadMilestone