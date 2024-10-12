const Description = () => {
    return(
        <section className="flex justify-between h-auto flex-col w-auto gap-10">
            <span className="text-3xl font-bold">Belgium</span>
            <div className="flex justify-between gap-44">
                <ul>
                    <li className="font-semibold flex gap-2 text-xl">Native name: <span className="font-normal">Belgie</span></li>
                    <li className="font-semibold flex gap-2 text-xl">Population: <span className="font-normal">11,233,411</span></li>
                    <li className="font-semibold flex gap-2 text-xl">Region: <span className="font-normal">Europe</span></li>
                    <li className="font-semibold flex gap-2 text-xl">Sub region: <span className="font-normal">Western Europe</span></li>
                    <li className="font-semibold flex gap-2 text-xl">Capital: <span className="font-normal">Brussels</span></li>
                </ul>
                <ul>
                    <li className="font-semibold flex gap-2 text-xl">Top Level Domian: <span className="font-normal">.be</span></li>
                    <li className="font-semibold flex gap-2 text-xl">Currencies: <span className="font-normal">Euro</span></li>
                    <li className="font-semibold flex gap-2 text-xl">Languages: <span className="font-normal">Dutch, French, German</span></li>
                </ul>
            </div>
            <div className="flex gap-4">
                <p className="font-semibold flex gap-2 text-xl">Border Countries:</p>
                <ul className="flex justify-center items-center gap-2">
                    <li className="border-2 border-dark-blue p-1">France</li>
                    <li className="border-2 border-dark-blue p-1">Germany</li>
                    <li className="border-2 border-dark-blue p-1">Netherlands</li>
                </ul>
            </div>
        </section>
    )
}

export default Description;