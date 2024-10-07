import { IoSearch } from "react-icons/io5";

const Search = () => {
    return (
        <div className="bg-white flex justify-center items-center text-dark-blue text-xl gap-8 w-96 h-12 shadow-md mt-14">
            <IoSearch />
            <input className="bg-white w-96 h-12" placeholder="Search for a country" />
        </div>
    )
}

export default Search;