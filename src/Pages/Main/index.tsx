import Nav from "../../Components/Nav";
import Search from "../../Components/Search";
import Menu from "../../Components/Menu";
import Card from "../../Components/Card";
import { CountriesContext } from "../../Provider/Countries";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Main = () => {
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
            <header>
                <Nav />
                <section className="flex justify-around items-center">
                    <Search />
                    <Menu />
                </section>
            </header>

            <section className="grid grid-cols-4 justify-items-center gap-1 mx-auto">
                {data?.map((el: any) => (
                    <Link to={`${el.name}`}>
                        <Card
                            key={el.name}
                            name={el.name}
                            population={el.population}
                            region={el.region}
                            capital={el.capital}
                            flag={el.flag}
                        />
                    </Link>
                ))}
            </section>
        </>
    );
};

export default Main;
