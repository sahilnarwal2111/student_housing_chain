import React,{useState,createContext} from 'react';

const DetailsContext= createContext();
const DetailsProvider = ({children}) => {
    const [details,setDetails]=useState(" ");
    return (
        <DetailsContext.Provider value={{details,setDetails}}>
            {children}
        </DetailsContext.Provider>
    )
} 

export default DetailsProvider;
export {DetailsContext};