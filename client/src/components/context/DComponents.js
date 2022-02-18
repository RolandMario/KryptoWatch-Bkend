import { createContext, useState } from "react";


export const DcContext = createContext();

export const DcProvider =(props)=>{
    
    const [dcData, setDcData] = useState('MainContent');
    return(
        <DcContext.Provider value={[dcData, setDcData]}>
            {props.children}
        </DcContext.Provider>
    );

}