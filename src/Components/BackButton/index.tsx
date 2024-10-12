import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const BackButton = () => {
    return (
        <button className="w-56 h-16 shadow-xl flex justify-center items-center text-lg gap-2">
            <Link to="/">
                <div>
                    <FaLongArrowAltLeft />Back
                </div>
            </Link>
        </button>
    )
}

export default BackButton;