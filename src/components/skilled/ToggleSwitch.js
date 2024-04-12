import { useState } from 'react';

const ToggleSwitch = () => {
  const [isOnline, setIsOnline] = useState(false);

  const toggleStatus = () => {
    setIsOnline(!isOnline);
  };

  return (
    <div className=' flex items-center border border-neutral-400 rounded-full overflow-hidden text-sm'>
        <div onClick={()=> setIsOnline(true)}  className={` ${isOnline? "bg-[#31013f] text-white": "bg-white text-[#31013f]"} transition-all duration-500 cursor-pointer px-6 py-2 rounded-full`}>
            <p>
                Online
            </p>
        </div>
        <div onClick={()=> setIsOnline(false)} className={` ${!isOnline? "bg-[#31013f] text-white": "bg-white text-[#31013f]"} px-6 py-2 rounded-full transition-all duration-500 cursor-pointer`}>
            <p>
                Offline
            </p>
        </div>
    </div>
  );
};

export default ToggleSwitch;