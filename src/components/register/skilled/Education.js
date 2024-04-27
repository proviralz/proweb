import React, { useState } from 'react'
import Header from '../Header'
import { publicRequest } from '@/requestMethods';
// import { experience } from '@/components/data/featured';

const Education = ({nextPage, prevPage,  id}) => {


    const [formData, setFormData] = useState({
        education: {
            school: '',
            degree: '',
            field: '',
            startDate: '',
            endDate: ''
        },
        experience: {
            years: '',
            title: '',
            company: '',
            startDate: '',
            endDate: ''
        }
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        const category = e.target.getAttribute('data-category');

        setFormData(prevState => ({
            ...prevState,
            [category]: {
                ...prevState[category],
                [name]: value
            }
        }));
    };


    const handleSubmit = async ()=> {
        // if(isselected)  {
            try {
                const res = await publicRequest.put(`users/${id}`, {
                    education: formData.education,
                    experience: formData.experience
                })

                console.log(res)

                if(res.status === 200)  {
                    nextPage()
                }
            } catch (error) {
                console.log(error)
            }
        // } else {
        //     console.log('select what you intend to use proviralz for')
        // }
    }
  return (
    <div>
        <div className='p-5 md:p-10'>
            <Header /> 
        </div>
        <div className={`  bg-white w-full flex justify-center`}>
            <div className=' p-5 border rounded-lg'>

                <div className='flex flex-col items-center'>
                    <div>
                        <p className='text-xl capitalize text-neutral-600'>
                            Add educational history
                        </p>
                    </div>

                    <div className=' login-form w-3/4 flex flex-col gap-2'>
                        <label htmlFor="school">School</label>
                        <input type="text" name="school" id="school" onChange={handleChange} placeholder='School' data-category="education" value={formData.education.school} />

                        <label htmlFor="degree">Degree</label>
                        <input type="text" name="degree" id="degree" onChange={handleChange} placeholder='Degree' data-category="education" value={formData.education.degree}  />

                        <label htmlFor="field">Field of study</label>
                        <input type="text" name="field" id="field"onChange={handleChange} placeholder='Field' data-category="education" value={formData.education.field}/>

                        {/* <label htmlFor="date">Dates Attended</label> */}
                        <div className=' flex gap-5 items-center mt-3'>
                            <div className='login-form space-y-2'>
                                <label htmlFor="start-date">Start Date</label>
                                <input type="date" name="startDate" id="start-date" data-category="education" value={formData.education.startDate} onChange={handleChange} />
                            </div>
                            <div className='login-form space-y-2'>
                                <label htmlFor="end-date">End Date</label>
                                <input type="date" id="end-date" data-category="education" name="endDate" value={formData.education.endDate} onChange={handleChange} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col items-center mt-8'>
                    <div>
                        <p className='text-xl capitalize text-neutral-600'>
                            Add experience
                        </p>
                    </div>

                    <div className=' login-form w-3/4 flex flex-col gap-2'>
                        <label htmlFor="experience">How many years of professional experience do you have</label>
                        <input type="number" id="experience" placeholder='How many?' data-category="experience" name="years" value={formData.experience.years} onChange={handleChange} />

                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" placeholder='Ex. Web developer' data-category="experience" name="title" value={formData.experience.title} onChange={handleChange} />

                        <label htmlFor="field">Company</label>
                        <input type="text"  id="company" placeholder='Ex. Amazon' data-category="experience" name="company" value={formData.experience.company} onChange={handleChange} />

                        {/* <label htmlFor="date">Dates Attended</label> */}
                        <div className=' flex gap-5 items-center mt-3'>
                            <div className='login-form space-y-2'>
                                <label htmlFor="start-date-exp">Start Date</label>
                                <input 
                                    type="date" 
                                    id="start-date-exp" 
                                    placeholder='From' 
                                    data-category="experience" 
                                    name="startDate" 
                                    value={formData.experience.startDate} 
                                    onChange={handleChange} />
                            </div>
                            <div className='login-form space-y-2'>
                                <label htmlFor="end-date-exp">End Date</label>
                                <input 
                                    type="date" 
                                    id="end-date-exp" 
                                    placeholder='To' 
                                    data-category="experience" 
                                    name="endDate" 
                                    value={formData.experience.endDate} 
                                    onChange={handleChange} />
                            </div>
                        </div>
                    </div>
                </div>

                
                
                <div className=' flex mt-5 justify-around items-center text-lg'>
                    <div>
                        <p onClick={prevPage} className='trans-purple-btn'>
                            Back
                        </p>
                    </div>
                    <div>
                        <p onClick={nextPage} className=' text-[#31013f]'>
                            Skip for Now
                        </p>
                    </div>
                    <div>
                        <p onClick={handleSubmit} className='purple-btn'>
                            Continue
                        </p>
                    </div>
                    
                </div>
                <div className=' h-10'>

                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Education