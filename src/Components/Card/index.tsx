interface ICountry {
    name: string,
    population: number,
    region: string,
    capital: string,
    flags: string
}

const Card:React.FC<ICountry> = ({name, population, region, capital, flags}) => {
    return (
        <a href="/country">
            <div className="w-72 bg-light-gray flex justify-center flex-col gap-2 shadow-xl rounded-md mt-8">
                <img
                    src={flags}
                    alt=""
                    className=""
                />

                <div className="flex justify-center flex-col pl-6">
                    <span className="font-extrabold text-lg pt-3">{name}</span>

                    <ul className="flex justify-center flex-col pb-8">
                        <li className="font-semibold">Population: <span className="font-light">{population}</span></li>
                        <li className="font-semibold">Region: <span className="font-light">{region}</span></li>
                        <li className="font-semibold">Capital: <span className="font-light">{capital}</span></li>
                    </ul>
                </div>
            </div>
        </a>
    )
}

export default Card;