'use client'
import React, { useEffect, useState } from 'react'
import Footer from '../footer/Footer'
import ClientHeader from '../client/ClientHeader'
import { FaPlus } from 'react-icons/fa6'
import { skilled } from '../data/featured'
import { FcCancel } from 'react-icons/fc'
import { IoMdClose } from 'react-icons/io'
import { IoCloudUploadOutline } from 'react-icons/io5'
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage'
import { location } from '../data/location'
import { RiCheckboxBlankFill, RiCheckboxBlankLine } from 'react-icons/ri'
import { app } from '../../../lib/firebase'
import { useSelector } from 'react-redux'
import { publicRequest, userRequest } from '@/requestMethods'
import { skilledInterest, unSkilledInterest } from '../data/interests'
import { useRouter } from 'next/navigation'


const Post = () => {

    const [skills, setSkills] = useState([]);
    const [newSkill, setNewSkill] = useState('');
    const [file, setFile] = useState(null)
    const [previewId, setPreviewId] = useState(null)
    const [fileProgress, setFileProgress] = useState(null)
    const [formData, setFormData] = useState({
        category: '',
        title: '',
        description: '',
        experience: '',
        paymentStructure: '',
        milestones: '',
        budget: '',
        deliveryDate: '',
        qualification: ''
    });
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [negotiable, setNegotiable] = useState(false)
    const user = useSelector(state => state.user.info)

    const [errors, setErrors] = useState({});
    const router = useRouter()


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };



    const handleStateChange = (e) => {
        setSelectedState(e.target.value);
        setSelectedCity('');
      };

    const handleCityChange = (e) => {
        setSelectedCity(e.target.value);
    };

    // console.log(formData)


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


    const addSkill = (skill) => {
        if (!skills.includes(skill)) {
            setSkills([...skills, skill]);
            setNewSkill('');
        }
    };


    const removeSkill = (skillToRemove) => {
        setSkills(skills.filter((skill) => skill !== skillToRemove));
    };

    const category = [...skilledInterest, ...unSkilledInterest]

    console.log(category)



    const handleSubmit = async() => {
        // Add validation logic here
        // For example, check if required fields are filled
        const newErrors = {};
        if (!formData.title.trim()) newErrors.title = 'Title is required';
        if (!formData.category.trim()) newErrors.category = 'Category is required';
        if (!formData.description.trim()) newErrors.description = 'Description is required';
        if (!formData.experience.trim()) newErrors.experience = 'Experience is required';
        if (!formData.paymentStructure.trim()) newErrors.paymentStructure = 'Payment structure is required';
        if (!formData.budget.trim()) newErrors.budget = 'Budget is required';
        if (!formData.deliveryDate.trim()) newErrors.deliveryDate = 'Delivery date is required';
        if (!formData.qualification.trim()) newErrors.qualification = 'Qualification is required';
        // if (!selectedState.trim()) newErrors.state = 'State is required';
        if (skills.length === 0) newErrors.skills = 'At least one skill is required';
        if (!file) newErrors.file = 'File is required';
        // Add more validation logic as needed

        if (Object.keys(newErrors).length === 0) {
            // Form is valid, submit the data
            console.log(formData);
            try {
                const res = await publicRequest.post('jobs/new', {
                    client: user?._id,
                    category: formData.category,
                    title: formData.title,
                    skills: skills,
                    description: formData.description,
                    document: previewId,
                    location: {
                        country: "Nigeria",
                        state: selectedState,
                        city: selectedCity,
                    },
                    experience: formData.experience,
                    qualification: formData.qualification,
                    paymentStructure: formData.paymentStructure,
                    milestones: formData.milestones,
                    budget: formData.budget,
                    deliveryDate: formData.deliveryDate,
                    negotiable: negotiable
                })

                console.log(res.data)
                alert('Job posted')
                router.push('/')
            } catch (error) {
                console.log(error)
            }
        } else {
            setErrors(newErrors);
        }
    };



  return (
    <div>
        <div>
            <ClientHeader />
        </div>

        <div className='bg-slate-100 h-48 relative overflow-hidden'>
            <div
                className='absolute scale-110 inset-0 bg-no-repeat bg-cover bg-center'
                style={{
                    backgroundImage: `url('/assets/extra/gradient.svg')`,
                }}
            />
            <div className='absolute inset-0 flex flex-col justify-center items-center'>
                <p className='text-white text-3xl md:text-5xl font-semibold text-center'>
                    Post a Project
                </p>
                <p className=' text-white md:text-xl text-center mt-3'>
                    Post a job, share your vision, and staart getting proposals within minutes
                </p>
            </div>
        </div>

        <div className=' bg-neutral-100 px-5 md:px-10 pb-10'>
            
            <div className=' bg-white p-5 space-y-5 post-form w-full md:w-3/4'>
                <div className=' space-y-2'>
                    <p>
                        Select category
                    </p>
                    <select 
                        name="category" 
                        id="" 
                        onChange={handleChange}>
                        <option value="">Choose one category</option>
                        {category.map((cat, i)=> (
                            <option key={i} value={cat.title}>
                                {cat.title}
                            </option>
                        ))}
                        {/* <option value="web design">Web design</option> */}
                    </select>
                    {errors.category && <p className="text-red-500">{errors.category}</p>}
                </div>
                <div className=' space-y-2'>
                    <p>
                        Project title
                    </p>
                    <input 
                        type="title" 
                        name="title" 
                        id="title" 
                        placeholder='Ex. Data entry job' 
                        onChange={handleChange} />
                    {errors.title && <p className="text-red-500">{errors.title}</p>}
                </div>
                <div className=' space-y-2'>
                    <p>
                        Skills
                    </p>
                    <p>
                        Choose up to 5 types of expertise provider should have.
                    </p>
                    <div>
                        <input 
                            type="text" 
                            name="skills" 
                            id="skills" 
                            value={newSkill}
                            onChange={(e) => setNewSkill(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    addSkill(newSkill.trim());
                                }
                            }}
                            placeholder='enter skill then click enter' />
                       
                        <div className=' flex gap-3 flex-wrap mt-5'>
                            {skills.map((skill, index) => (
                                <div key={index} className='flex items-center border border-gray-200 rounded-full text-xs px-2 py-1 m-1'>
                                    {skill}
                                    <IoMdClose
                                        onClick={() => removeSkill(skill)} 
                                        className='ml-2 text-sm text-red-500'
                                    />
                                </div>
                            ))}
                        </div>
                        {errors.skills && <p className="text-red-500">{errors.skills}</p>}

                        {/* <div className=' flex gap-3 flex-wrap mt-5 w-4/5'>
                            {skilled?.map((tag, i)=> (
                                <div 
                                    onClick={()=> addSkill(tag)} 
                                    key={i} 
                                    className=' flex items-center gap-2 capitalize bg-neutral-100 px-4 py-1 rounded-full text-neutral-500  text-sm'>
                                    <FaPlus /> {tag}
                                </div>
                            ))}
                        </div>    */}
                    </div>
                </div>

                {/* description */}
                <div>
                    <div className=' space-y-2'>
                        <p >Brief description of your project</p>
                        <textarea 
                            className='border p-3 w-full border-neutral-400 h-40 rounded-md outline-none text-neutral-600'  
                            name="description" 
                            placeholder=''
                            onChange={handleChange}
                            id="" />
                        {errors.description && <p className="text-red-500">{errors.description}</p>}

                        
                    </div>
                </div>

                {/* images */}
                <div>
                    <div className=' w-full mt-5'>
                        <div 
                            onDragOver={(e) => e.preventDefault()} 
                            onDrop={handleFileDrop} 
                            className=' h-20 border border-neutral-500  border-dashed p-2 md:p-5 rounded-md  flex  gap-5 items-center justify-center'>
                            <div className=' hidden md:flex items-center text-neutral-600 gap-3 text-xs'>
                                <IoCloudUploadOutline />
                                {file && file[0]?.name || <p className=' w-3/4'>
                                    Drag and drop any images that might be helpful in explaining your brief
                                </p>}
                            </div>

                            <div className=''>
                                <label htmlFor="browse" className=' w-full bg-neutral-100 px-5 py-2 text-neutral-600 text-sm'> Select Image</label>
                                <input type="file" onChange={handleFileSelect} className=' hidden' id='browse' />
                            </div>
                        </div>
                        {fileProgress && (
                            <div className="h-1 mt-1 rounded-full overflow-hidden">
                                <div className={` ${fileProgress < 100 ? 'bg-red-600' : 'bg-green-600'} h-full transition-all ease-in-out duration-500`} style={{width: `${fileProgress}%`}} />
                            </div>
                        )}
                    </div>
                    {errors.file && <p className="text-red-500">{errors.file}</p>}
                </div>

                {/* location */}
                <div className=' space-y-2'>
                    <p>
                        Location
                    </p>

                    <div className=' flex gap-5 w-full'>
                        <div className=' flex-1'>
                            <label htmlFor="state">State</label>
                            <select name="state" onChange={handleStateChange} id="">
                                <option value="">Select state</option>
                                {location[0].states.map((s,i)=> (
                                    <option value={s.name} key={i}>
                                        {s.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className=' flex-1'>
                            <label htmlFor="city">City (optional)</label>
                            <select name="city" id="city" onChange={handleCityChange}>
                                {selectedState &&
                                location[0].states
                                ?.find((state)=> state.name === selectedState)
                                ?.cities.map((city)=> (
                                    <option key={city.id} value={city.name}>
                                        {city.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        {/* {errors.state && <p className="text-red-500">{errors.state}</p>} */}
                    </div>
                </div>
                <div className=' space-y-2'>
                    <p>
                        Experience
                    </p>

                    <div className=' flex gap-5 w-full'>
                        <div className=' flex-1 space-y-2'>
                            <label htmlFor="experience">Years of experience</label>
                            <input type="number" name="experience" id="experience" placeholder='Ex. 3 years' onChange={handleChange} />
                        </div>
                        <div className=' flex-1 space-y-2'>
                            <label htmlFor="qualification">Required qualification</label>
                            <input type="text" name="qualification" id="qualification" placeholder='Ex. B.Sc' onChange={handleChange} />
                        </div>
                    </div>
                    {errors.experience && <p className="text-red-500">{errors.experience}</p>}
                </div>

                {/* payment structure */}
                <div className=' space-y-2'>
                    <p>
                        Payment Structure
                    </p>
                    <select name="paymentStructure" id="" onChange={handleChange}>
                        <option value="">Select Payment Structure</option>
                        <option value="milestone">Milestone Payment</option>
                        <option value="full">Full payment (when job is completed)</option>
                        <option value="upfront">Upfront payment (part)</option>
                    </select>
                    {errors.paymentStructure && <p className="text-red-500">{errors.paymentStructure}</p>}

                    { formData.paymentStructure === 'milestone' &&
                    <div className=' space-y-2'>
                        <p>
                            For milestone payment, input number of milestones
                        </p>
                        <input 
                            type="text" 
                            name="milestones" 
                            id="" 
                            onChange={handleChange}
                            placeholder='Ex. 4 milestones' />
                    </div>}
                    {/* <input type="title" name="title" id="title" placeholder='Ex. Data entry job' /> */}
                </div>

                {/* budget and deliveryDate */}
                <div className=''>
                    <div className=' flex gap-5 w-full'>
                        <div className=' flex-1 space-y-2'>
                            <label htmlFor="budget">Budget (Naira)</label>
                            <input type="Number" name="budget" id="" placeholder='Ex. N300'  onChange={handleChange}/>
                            {errors.budget && <p className="text-red-500">{errors.budget}</p>}
                        </div>
                        <div className=' flex-1 space-y-2'>
                            <label htmlFor="deliveryDate">Delivery date</label>
                            <input type="date" name="deliveryDate" id="deliveryDate" onChange={handleChange} />
                            {errors.deliveryDate && <p className="text-red-500">{errors.deliveryDate}</p>}
                        </div>
                    </div>
                    <div className=' mt-3'>
                        <div className=' flex items-center gap-3'>
                            <div onClick={()=> setNegotiable(!negotiable)}>
                                {negotiable? <RiCheckboxBlankFill color='#31013f' size={20} /> : <RiCheckboxBlankLine color='#31013f' size={20} />}
                            </div>
                            <p>
                                My budget is nogotiable
                            </p>
                        </div>
                    </div>
                </div>

                {/* submit button */}
                <div>
                    <div  onClick={handleSubmit}>
                        <p className=' purple-btn text-center'>
                            Submit and get matched
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* footer */}
        <div>
            <Footer />
        </div>
    </div>
  )
}

export default Post