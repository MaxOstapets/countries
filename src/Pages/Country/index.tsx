import Nav from "../../Components/Nav";
import BackButton from "../../Components/BackButton";
import FlagImage from "../../Components/FlagImage";
import Description from "../../Components/Description";

const Country = () => {
    return (
        <>
            <Nav />
            <BackButton />
            
            <div className="flex justify-center items-center gap-40 mt-16">
                <FlagImage />
                <Description />
            </div>
        </>
    )
}

export default Country;