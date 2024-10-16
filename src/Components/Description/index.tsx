interface IDescription {
    name: string,
    nativeName: string,
    population: number,
    region: string,
    subRegion: string,
    capital: string,
    topLevelDomian: string,
    currencies: [{
        code: string,
        name: string,
        symbol: string
    }],
    languages: [{
        iso: string,
        iso2: string,
        name: string,
        nativeName: string
    }],
    borders: [string]
}

const Description: React.FC<IDescription> = ({ name, nativeName, population, region, subRegion, capital, topLevelDomian, currencies, languages, borders }) => {
    return (
        <section className="flex justify-between h-auto flex-col w-auto gap-10">
            <span className="text-3xl font-bold">{name}</span>
            <div className="flex justify-between gap-44">
                <ul>
                    <li className="font-semibold flex gap-2 text-xl">Native name: <span className="font-normal">{nativeName}</span></li>
                    <li className="font-semibold flex gap-2 text-xl">Population: <span className="font-normal">{population}</span></li>
                    <li className="font-semibold flex gap-2 text-xl">Region: <span className="font-normal">{region}</span></li>
                    <li className="font-semibold flex gap-2 text-xl">Sub region: <span className="font-normal">{subRegion}</span></li>
                    <li className="font-semibold flex gap-2 text-xl">Capital: <span className="font-normal">{capital}</span></li>
                </ul>
                <ul>
                    <li className="font-semibold flex gap-2 text-xl">Top Level Domain: <span className="font-normal">{topLevelDomian}</span></li>
                    <li className="font-semibold flex gap-2 text-xl">Currencies:
                        {currencies?.map((currency, index) => (
                            <span key={index} className="font-normal">{currency.name} ({currency.symbol})</span>
                        ))}
                    </li>
                    <li className="font-semibold flex gap-2 text-xl">Languages:
                        {languages?.map((language, index) => (
                            <span key={index} className="font-normal">{language.name}</span>
                        ))}
                    </li>
                </ul>
            </div>
            <div className="flex gap-4">
                <p className="font-semibold flex gap-2 text-xl">Border Countries:</p>
                <ul className="flex justify-center items-center gap-2">
                    {borders?.map((border, index) => (
                        <li key={index} className="border-2 border-dark-blue p-1">{border}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Description;
