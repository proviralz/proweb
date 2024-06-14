'use client'
import React, { useEffect, useState } from 'react'
import Header from './Header'
import { IoCloudUploadOutline } from 'react-icons/io5'
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage'
import { app } from '../../../lib/firebase'
import { publicRequest } from '@/requestMethods'

const StepThree = ({prevPage, nextPage, userId}) => {

    const [idType, setIdType] = useState("")
    const [file, setFile] = useState(null)
    const [previewId, setPreviewId] = useState(null)
    const [fileProgress, setFileProgress] = useState(null)


    useEffect(() => {
        if (file) handleUploadVideo();
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

    const handleSubmit = async() => {

        if (!idType) {
            alert('Please select an ID type.');
            return;
        }
    
        if (!previewId) {
            alert('Please upload an ID document.');
            return;
        }
        try {
            const res = await publicRequest.put(`users/${userId}`, {
                identityCard: {
                    cardType: idType,
                    cardImage: previewId
                }
            })

            if (res.status === 200) {
                nextPage()
            }
        } catch (error) {
            console.log(error)
        }
    }


    console.log(previewId)


  return (
    <div>
        <div className='p-5 md:p-10'>
            <Header /> 
        </div>
        <div className={`  bg-white w-full flex justify-center`}>
            <div className=' p-5 border rounded-md'>

                
                <div className=' mt-10 text-neutral-600 flex flex-col gap-2 login-form'>
                    <p className=' font-semibold text-lg'>
                        Upload ID
                    </p>

                    {/* <div> */}
                        <select onChange={(e)=> setIdType(e.target.value)} name="" id="" className=''>
                            <option value="">Select ID Type</option>
                            <option value="national id card">National ID Card</option>
                            <option value="Voter's ard">Voter&apos;s card </option>
                            <option value="passport">Passport</option>
                            <option value="licence">Driver&apos;s licence</option>
                        </select>
                    {/* </div> */}

                    <div className=' w-96 mt-5'>
                        <div 
                            onDragOver={(e) => e.preventDefault()} 
                            onDrop={handleFileDrop} 
                            className=' h-48 border border-neutral-500  border-dashed p-5 rounded-md  flex flex-col gap-5 items-center justify-center'>
                            <div className=' flex items-center gap-3 text-xs'>
                                <IoCloudUploadOutline />
                                {file && file[0]?.name || <p>
                                    Drag and drop your files here
                                </p>}
                            </div>

                            <div className=''>
                                <label htmlFor="browse" className=' bg-neutral-100 px-5 py-2 text-neutral-600 text-sm'> Select Image</label>
                                <input type="file" onChange={handleFileSelect} className=' hidden' id='browse' />
                            </div>
                        </div>
                        {fileProgress && (
                            <div className="h-1 mt-1 rounded-full overflow-hidden">
                                <div className={` ${fileProgress < 100 ? 'bg-red-600' : 'bg-green-600'} h-full transition-all ease-in-out duration-500`} style={{width: `${fileProgress}%`}} />
                            </div>
                        )}
                    </div>
                    
                    
                </div>
                <div className=' flex gap-5 justify-end mt-5'>
                    <p onClick={prevPage} className='trans-purple-btn'>
                        Back
                    </p>
                    <p onClick={handleSubmit} className=' bg-[#31013f] p-4 text-white inline-block rounded-md w-48 text-center'>
                        Continue
                    </p>
                </div>
                <div className=' h-10'>

                </div>
            </div>
            
        </div>
    </div>
  )
}

export default StepThree