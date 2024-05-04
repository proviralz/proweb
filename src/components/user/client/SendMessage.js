import { userRequest } from '@/requestMethods';
import Image from 'next/image';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';

const SendMessage = ({showForm, setShowForm, clientData}) => {

    const [msg, setMsg] = useState("")

    const popUpClassName = `pop-up ${showForm ? 'show' : ''}`;
    const user = useSelector(state=> state.user.info)

    const handleSendMessage = async ()=> {
        if(msg.length>0) {
            try {
                const res = await userRequest.post(`messages/addmsg`, {
                    from: user?._id,
                    to: clientData?._id,
                    message: msg
                })

                alert(res.data?.msg)
                setMsg("")
                setShowForm(false)

                
            } catch (error) {
                console.log(error)
            }
        } else {
            alert("Message cannot be empty")
        }
    }
  return (
    <div onClick={(e)=> {setShowForm(false); e.stopPropagation()}} 
        className={popUpClassName}>
        <div onClick={(e)=> e.stopPropagation()} 
            className='overflow-y-scroll w-4/5 h-5/6 bg-white rounded-xl'
        >

            <div className=' p-5  space-y-3'>
                <div className=' flex flex-col items-center gap-2'>
                    <div className=' h-20 w-20 rounded-full overflow-hidden'>
                        <Image src={clientData?.profilePic} alt='' width={100} height={100} className=' w-full h-full object-cover' />
                    </div>
                    <div>
                        <p>
                            {clientData?.fullName}
                        </p>
                    </div>
                </div>
                <div>
                    <div className='post-form'>
                        <label htmlFor="message">your message</label>
                        <textarea value={msg} onChange={(e)=> setMsg(e.target.value)} name="message" id="message" cols="30" rows="10" className='border p-3 w-full border-neutral-400 h-40 rounded-md outline-none text-neutral-600'  ></textarea>
                    </div>
                </div>
                <div>
                    <div>
                        <p onClick={handleSendMessage} className='purple-btn-long text-xs'>
                            send message
                        </p>
                    </div>
                </div>
            </div>
           
            
        </div>
    </div>
  )
}

export default SendMessage