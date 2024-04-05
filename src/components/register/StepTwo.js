import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Header from './Header'
import { location } from '../data/location';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage'
import { app } from '../../../lib/firebase';
import { publicRequest } from '@/requestMethods';

const StepTwo = ({nextPage, userId}) => {


    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedImage, setSelectedImage] = useState(null)
    const [imagePreview, setImagePreview] = useState(null)
    const [username, setUsername] = useState('')
    const [showSelectSkilled, setShowSelectSkilled] = useState(false)

    // const handleImageChange = (e)=> {
    //     const file = e.target.files[0]

    //     if(file) {
    //         const reader = new FileReader()
    //         reader.onloadend = () => {
    //             setImagePreview(reader.result)
    //         }
    //         reader.readAsDataURL(file)
    //     }
    // }


    useEffect(() => {
        if (selectedImage) handleUploadPicture();
    }, [selectedImage]);

    const handleImageSelect = (e) => {
        setSelectedImage(e.target.files?.[0]);
    };

    // console.log(imagePreview)




    const handleCountryChange = (e) => {
        setSelectedCountry(e.target.value);
        setSelectedState('');
        setSelectedCity('');
      };
    
      const handleStateChange = (e) => {
        setSelectedState(e.target.value);
        setSelectedCity('');
      };
    
      const handleCityChange = (e) => {
        setSelectedCity(e.target.value);
      };

      const handleUploadPicture =()=> {
        const fileName = new Date().getTime() + selectedImage?.name
        const storage = getStorage(app)
        const storageRef = ref(storage, fileName)
        const uploadTask = uploadBytesResumable(storageRef, selectedImage)

        uploadTask.on('state_changed', 
            (snapshot) => {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                // console.log('Upload is ' + progress + '% done');
                // setPosterProgress(progress)
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
                    setImagePreview(downloadURL)
                });
            }
        );
    }

    const handleSubmit = async() => {
        try {
            const res = await publicRequest.put(`users/${userId}`, {
                username,
                location: {
                    country: selectedCountry,
                    state: selectedState,
                    city: selectedCity
                },
                profilePic: imagePreview
            })

            if (res.status === 200) {
                nextPage()
            }
        } catch (error) {
            
        }
    }

  return (
    <div>
        <div className='p-5 md:p-10'>
            <Header /> 
        </div>
        <div className={`  bg-white w-full flex justify-center`}>
            <div className=' p-5'>

                <div className=' mt-10'>
                    <p className=' text-center text-2xl capitalize text-neutral-600'>
                        Welcome! Let&apos;s set up your profile
                    </p>
                </div>

                <div className=' mt-10'>
                    <p>
                        Add profile picture
                    </p>
                    <div className=' mt-5 flex justify-center'>
                        <div className=' flex flex-col items-center'>
                            <div className=' border p-3 border-neutral-500 w-40 flex justify-center items-center'>
                                <Image src={imagePreview || '/assets/onboard/user.svg'} alt='' width={100} height={100} />
                            </div>
                            <div className=' flex justify-center flex-col items-center mt-5'>
                                <label className=' border py-3 px-5 rounded-full border-neutral-500' htmlFor="profile-picture">Choose image</label>
                                <input accept='.jpg,.jpeg,.png' onChange={handleImageSelect} type="file" name="profile-picture" id="profile-picture" className=' hidden' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' mt-10 text-neutral-600 flex flex-col gap-2 login-form'>
                    <p className=' font-semibold text-lg'>
                        Enter Username
                    </p>
                    <p className=' font-light'>
                        This will be displayed beside your profile picture
                    </p>
                    <input onChange={(e)=> setUsername(e.target.value)} type="text" name="" id="" placeholder='Username' />
                    <p className=' mt-5 font-semibold text-lg'>
                        Add your location
                    </p>
                    <select value={selectedCountry} onChange={handleCountryChange} name="" id="">
                        <option value="">Select country</option>
                        {location.map((country)=> (
                            <option key={country.id} value={country.name}>
                                {country.name}
                            </option>
                        ))}
                    </select>
                    <select value={selectedState} onChange={handleStateChange} name="" id="">
                        <option value="">Select state</option>
                        {selectedCountry && 
                            location
                                .find((country)=> country.name === selectedCountry)
                                .states.map((state)=> (
                                    <option  key={state.id} value={state.name}>
                                        {state.name}
                                    </option>
                                ))}
                    </select>
                    <select value={selectedCity} onChange={handleCityChange} name="" id="">
                        <option value="">Select city</option>
                        {selectedState &&
                            location
                                .find((country)=> country.name === selectedCountry)
                                .states.find((state)=> state.name === selectedState)
                                .cities.map((city)=> (
                                    <option key={city.id} value={city.name}>
                                        {city.name}
                                    </option>
                                ))}
                    </select>
                </div>
                <div className=' flex justify-end mt-5'>
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

export default StepTwo