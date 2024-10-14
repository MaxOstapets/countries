import { useQuery } from "@tanstack/react-query";
import getCountries from "../../Utils/Countries";
import { createContext, ReactNode } from "react";

interface CountriesContextType {
    data: any;
    isLoading: boolean;
    error: any;
}

const CountriesContext = createContext<CountriesContextType | undefined>(undefined);

const CountriesProvider = ({ children }: { children: ReactNode }) => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['data'],
        queryFn: getCountries,
    });

    return (
        <CountriesContext.Provider value={{ data, isLoading, error }}>
            {children}
        </CountriesContext.Provider>
    );
}

export { CountriesContext, CountriesProvider };
