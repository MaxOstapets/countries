import { IoMoonOutline } from "react-icons/io5";

const Nav = ()=>{
    return(
        <nav className="bg-white shadow-md">
            <ul className="flex justify-between items-center px-24 py-5 dark:bg-dark-blue dark:text-white">
                <li className="text-2xl font-black">Where in the world?</li>
                <li className="text-lg flex items-center gap-2"><IoMoonOutline /> Dark Mode</li>
            </ul>
        </nav>
    )
}

export default Nav