const getCountries = async () => {
    const response = await fetch('../../../public/info/data.json');
    
    if (!response.ok) {
        throw new Error('Failed to fetch countries');
    }

    const data = await response.json();
    console.log(data);
    return data;
};

export default getCountries;
