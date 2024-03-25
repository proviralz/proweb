import Image from 'next/image'
import React, { useState } from 'react'
import Header from './Header'
import { location } from '../data/location';

const StepThree = () => {


    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [imagePreview, setImagePreview] = useState(null)
    const [showSelectSkilled, setShowSelectSkilled] = useState(false)

    const handleImageChange = (e)=> {
        const file = e.target.files[0]

        if(file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setImagePreview(reader.result)
            }
            reader.readAsDataURL(file)
        }
    }


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
                                <input onChange={handleImageChange} type="file" name="profile-picture" id="profile-picture" className=' hidden' />
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
                    <input type="text" name="" id="" placeholder='Username' />
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
                    <p className=' bg-[#31013f] p-4 text-white inline-block rounded-md w-48 text-center'>
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