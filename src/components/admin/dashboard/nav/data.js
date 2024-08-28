import { FaRegUser } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { PiChartLineUpLight } from "react-icons/pi";
import { SlLayers } from "react-icons/sl";
import { RxReader } from "react-icons/rx";

export const navData = [
    {
        title: "dashboard",
        icon: <IoHomeOutline />,
    },
    {
        title: "users",
        icon: <FaRegUser />,
        sub: [
            {
                title: "clients"
            },
            {
                title: "freelancers"
            }
        ]
    },
    {
        title: "projects",
        icon: <SlLayers />,
    },
    {
        title: "analytics",
        icon: <PiChartLineUpLight />,
    },
    {
        title: "blog",
        icon: <RxReader />,
    },
    
]