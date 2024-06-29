'use client'
import React, { useEffect, useRef, useState } from 'react'

import Footer from '../footer/Footer'
import { GoPlus } from 'react-icons/go'
import { FiSearch } from 'react-icons/fi'
import { me, message } from '../data/featured'
import Image from 'next/image'
import { FaRegTrashAlt } from 'react-icons/fa'
import { GrAttachment } from "react-icons/gr";
import { useSelector } from 'react-redux'
import { io } from 'socket.io-client'
import { host, userRequest } from '@/requestMethods'
import HeaderTwo from '../header/HeaderTwo'
import { AiOutlineMenu } from 'react-icons/ai'

const Message = () => {

    
    const [contacts, setContacts] = useState([])
    const [currentChat, setCurrentChat] = useState(null)
    const [currentUserName, setCurrentUserName] = useState(undefined);
    const [currentSelected, setCurrentSelected] = useState(undefined);
    const [showChatList, setShowChatList] = useState(true)


    const [messages, setMessages] = useState([])
    const [arrivalMessage, setArrivalMessage] = useState(null)
    const scrollRef = useRef()


    const [text, setText] = useState("")
  
    const socket = useRef()

    const loggedUser = useSelector((state)=> state.user.info)


    useEffect(()=> {
        if(loggedUser) {
            socket.current = io(host, {
                transports: ["websocket"],
                withCredentials: true
            })
            socket.current.emit("add-user", loggedUser?._id)
        }
        setCurrentUserName(loggedUser?.fullName)
        
    }, [loggedUser])


    // get all users and all messages
    useEffect(()=> {
        const getChatUsers = async()=> {
            try {
                if (loggedUser) {
                    const data = await userRequest.get(`users/allchat/${loggedUser?._id}`);
                    const res = await userRequest.post(`/messages/getmsg/`, {
                        from: loggedUser?._id,
                        to: currentChat?._id
                    });

                    setContacts(data.data);
                    setMessages(res.data);
                }
            } catch (error) {
                console.error("Error fetching chat users or messages:", error);
            }
        };
        
        getChatUsers()
    }, [loggedUser, currentChat])



    // function to save message
    const handleSendMsg = async (msg)=> {
        socket.current.emit("send-msg", {
            to: currentChat?._id,
            from: loggedUser?._id,
            msg
        })

        await userRequest.post(`messages/addmsg`, {
            from: loggedUser?._id,
            to: currentChat?._id,
            message: msg
        })

        const msgs = [...messages]
        msgs.push({fromSelf: true, message: msg})
        setMessages(msgs)
    }


    // function to check and send message
    const sendChat = (event) => {
        event.preventDefault();
        if (text.length > 0) {
          handleSendMsg(text);
          setText("");
        }
      };


    // receive message
    useEffect(() => {
        if (socket.current) {
          socket.current.on("msg-recieve", (msg) => {
            setArrivalMessage({ fromSelf: false, message: msg });
          });
        }
      }, []);
    
      useEffect(() => {
        arrivalMessage && setMessages((prev) => [...prev, arrivalMessage]);
      }, [arrivalMessage]);
    
      useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
      }, [messages]);




    const handleChatChange =(chat)=> {
        setCurrentChat(chat)
    }

    const changeCurrentChat = (index, contact) => {
        setCurrentSelected(index)
        handleChatChange(contact)
        setShowChatList(false)
        
    }

    
    // format received time
    function formatMessageTime(timestamp) {
        const messageDate = new Date(timestamp);
        const now = new Date();
        const oneDayInMs = 24 * 60 * 60 * 1000;
    
        // Check if the message was sent more than a day ago
        if (now - messageDate > oneDayInMs) {
            // Message is more than a day old, show day of month and month in short before showing time in 24-hour format
            return new Intl.DateTimeFormat('en-GB', {
                day: 'numeric',
                month: 'short',
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            }).format(messageDate);
        } else {
            // Message is less than a day old, only show time in 24-hour format
            return new Intl.DateTimeFormat('en-GB', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            }).format(messageDate);
        }
    }


  return (
    <div>
        <div>
            <HeaderTwo />
        </div>
        <div className=' p-5 md:p-10 bg-neutral-100 flex gap-[1px] '>

            {/* left side */}
            {showChatList &&
            (<div className=' inline-block md:w-2/5 lg:w-1/3 rounded-l-md bg-white shadow-md'>
                <div className=' border-b p-5 flex items-center justify-between'>
                    <div>
                        <p>
                            Messages
                        </p>
                    </div>
                    <div>
                        {/* <div className=' flex items-center px-2 py-1 border-[#31013f] text-[#31013f] gap-1 border rounded-full'>
                            <p className='border-[#31013f] border rounded-full'>
                                <GoPlus />
                            </p>
                            <p className=' text-xs font-light'>
                                Start conversation
                            </p>
                        </div> */}
                    </div>
                </div>
                <div className=' p-5'>
                    <div>
                        {/* <div>
                            <div className=' flex items-center border px-2 py-1  rounded-xl gap-3'>
                                <FiSearch />
                                <input type="text" name="" id="" className=' w-28 md:w-full outline-none  text-neutral-600 ' placeholder='Search messages' />
                            </div>
                        </div> */}
                        {/* <div></div> */}
                    </div>
                    <div className=' mt-2'>
                        <p className=' text-xs text-neutral-400'>
                            All messages
                        </p>
                    </div>
                    <div className=' mt-3 -mx-5 '>
                        { contacts && contacts?.map((c, i)=> (
                            <div 
                                key={c._id} 
                                onClick={()=> changeCurrentChat(i, c)}
                                className={` ${currentSelected === i? 'bg-[#31013f]/20': ''} p-2 cursor-pointer flex items-center justify-between`}>
                                <div className=' flex items-center gap-4'>
                                    <div className=' w-6 h-6 rounded-full overflow-hidden'>
                                        <Image src={c?.profilePic || "/assets/profile/user1.svg"} alt='' width={100} height={100} className=' h-full w-full object-cover' />
                                    </div>
                                    <div>
                                        <p className=' text-xs text-neutral-600'>
                                            {c.fullName || ""}
                                        </p>
                                        {/* <p className=' text-xs font-light text-neutral-600'>
                                            {m.msg}
                                        </p> */}
                                    </div>
                                </div>
                                <div>
                                    {/* <p className=' text-xs font-light'>
                                        {m.time}
                                    </p> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>)
            }

            {/* message box */}
            <div className=' bg-white flex-1 shadow-md rounded-r-md'>

                {/* info tab */}
                <div className=' border-b p-5 flex items-center justify-between'>
                    <div className=' flex gap-3 items-center'>
                        <div>
                            {/* {selectedChat && <Image src={selectedChat?.img} alt='' width={100} height={100} className=' h-6 w-6' />} */}
                        </div>
                        <div className=' text-2xl'>
                            <AiOutlineMenu onClick={() => setShowChatList(!showChatList)} />
                        </div>
                        <div>
                            <p>
                                {currentChat?.fullName || 'Select a chat to start'}
                            </p>
                        </div>
                    </div>
                    <div>
                        <p className=' text-red-600 font-light '>
                            <FaRegTrashAlt />
                        </p>
                    </div>
                </div>

                {/* message box */}
                <div className=' flex flex-col gap-5 border-b h-[400px] p-5 bg-neutral-50 overflow-y-auto'>
                    {messages.map((m, i)=> (
                        <div key={i} ref={scrollRef}>
                            <div className={` flex ${m.fromSelf? 'justify-end' :""}`}>
                                <div>
                                    <div className={`${m.fromSelf? " text-xs bg-[#31013f] text-white rounded-t-xl md:rounded-t-3xl rounded-l-xl md:rounded-l-3xl": " rounded-t-xl md:rounded-t-3xl rounded-r-xl md:rounded-r-3xl bg-neutral-200 text-neutral-600"} p-2 md:p-5`}>
                                        <p>
                                            {m.message}
                                        </p>
                                    </div>
                                    <div className={`mt-1 flex text-xs text-neutral-500 ${m.fromSelf? 'justify-end': ''}`}>
                                        <p>
                                            {/* {formatMessageTime(m.time)} */}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* text box */}
                <div className=' p-5'>
                    <div className=' flex gap-5 items-center'>
                        <div>
                            <GrAttachment />
                        </div>
                        <div className=' border flex-1 p-2 rounded-full text-neutral-500'>
                            <input value={text|| ""} onChange={(e)=> setText(e.target.value)} type="text" name="" id="" className=' w-full outline-none' />
                        </div>
                        <div>
                            <p onClick={sendChat} className=' text-xs bg-[#31013f] px-3 py-1 text-white rounded-full font-light'>
                                Send
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <Footer />
        </div>
    </div>
  )
}

export default Message