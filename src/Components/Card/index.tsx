const Card = () => {
    return (
        <a href="/country">
            <div className="w-72 bg-light-gray flex justify-center flex-col gap-2 shadow-xl rounded-md mt-8">
                <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAAElBMVEUAAAD/zgDdAADnAADaAAD/2AAtsSEoAAAA+ElEQVR4nO3QMQGAMAAEsYeCf8tIuI0pkZANAAAAAAAAAAAAAAAAAAAAgB8dwm6CoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKewh7CbsIipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUofMGTNC8HkSxoAAAAASUVORK5CYII="
                    alt=""
                    className=""
                />

                <div className="flex justify-center flex-col pl-6">
                    <span className="font-extrabold text-lg pt-3">Germany</span>

                    <ul className="flex justify-center flex-col pb-8">
                        <li className="font-semibold">Population: <span className="font-light">81.700.900</span></li>
                        <li className="font-semibold">Region: <span className="font-light">Europe</span></li>
                        <li className="font-semibold">Capital: <span className="font-light">Berlin</span></li>
                    </ul>
                </div>
            </div>
        </a>
    )
}

export default Card;