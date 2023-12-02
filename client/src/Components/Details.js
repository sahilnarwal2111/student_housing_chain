import React, { useState, createContext, useEffect } from 'react';
const DetailsContext = createContext();
const DetailsProvider = ({ children }) => {
    const [details, setDetails] = useState("");
    useEffect(() => {
        if (details !== "") window.localStorage.setItem('user_credentials', JSON.stringify(details));
    }, [details])
    useEffect(() => {
        let data = window.localStorage.getItem('user_credentials');
        console.log("IN context api");
        data = JSON.parse(data);
        setDetails(data);
        console.log(data);

    }, [])

    
    return (
        <DetailsContext.Provider value={{ details, setDetails }}>
            {children}
        </DetailsContext.Provider>
    )

}

export default DetailsProvider;
export { DetailsContext };