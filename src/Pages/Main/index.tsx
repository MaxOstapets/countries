import Nav from "../../Components/Nav";
import Search from "../../Components/Search";
import Menu from "../../Components/Menu";
import Card from "../../Components/Card";

const Main = () => {
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
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </section>

        </>
    )
}

export default Main