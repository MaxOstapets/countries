import Nav from "../../Components/Nav";
import BackButton from "../../Components/BackButton";
import FlagImage from "../../Components/FlagImage";
import Description from "../../Components/Description";
import { useContext } from "react";
import { CountriesContext } from "../../Provider/Countries";

const Country = () => {
    const context = useContext(CountriesContext);

    if (!context) {
        return <div>Error: Context is not available</div>;
    }

    const { data, isLoading, error } = context;

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }
    
    return (
        <>
            <Nav />
            <BackButton />

            <div className="flex justify-center items-center gap-40 mt-16" key={data.name}>
                <FlagImage flag={data.flag} />
                <Description
                    name={data.name}
                    nativeName={data.nativeName}
                    population={data.population}
                    region={data.region}
                    subRegion={data.subregion}
                    capital={data.capital}
                    topLevelDomian={data.topLevelDomain}
                    currencies={data.currencies}
                    languages={data.languages}
                    borders={data.borders}
                />
            </div>
        </>
    );
}

export default Country;
