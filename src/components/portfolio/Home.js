'use client'
import React, { useEffect, useState } from 'react'
import HeaderTwo from '../header/HeaderTwo'
import Footer from '../footer/Footer'
import StepOne from './StepOne'
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage'
import { app } from '../../../lib/firebase'
import StepTwo from './StepTwo'
import { publicRequest } from '@/requestMethods'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { updateSuccess } from '@/redux/userSlice'

const Home = () => {

    const [currentStep, setCurrentStep] = useState(1)

    const [title, setTitle] = useState("")
    const [file, setFile] = useState(null)
    const [previewId, setPreviewId] = useState(null)
    const [fileProgress, setFileProgress] = useState(null)
    const user = useSelector(state => state.user.info)
    const dispatch = useDispatch()
    const router = useRouter()


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

    const handlePublish = async ()=> {
        if(previewId && title) {
            try {
                const res = await publicRequest.put(`users/portfolio/${user?._id}`, {
                    title, 
                    image: previewId
                })

                dispatch(updateSuccess(res.data))
                router.push('/profile')
            } catch (error) {
                console.log(error)
            }
        }
    }



  return (
    <div>
        <div>
            <HeaderTwo />
        </div>

        <div>
            {currentStep === 1 && (
                <StepOne 
                    handleFileDrop={handleFileDrop} 
                    handleFileSelect={handleFileSelect} 
                    file={file}
                    previewId={previewId} 
                    setCurrentStep={setCurrentStep}
                    fileProgress={fileProgress} />
            )}

            {currentStep === 2 &&  (
                <StepTwo 
                    previewId={previewId} 
                    setTitle={setTitle}
                    title={title}
                    handlePublish={handlePublish}
                    setCurrentStep={setCurrentStep} />
            )}
        </div>


        <div>
            <Footer />
        </div>
    </div>
  )
}

export default Home