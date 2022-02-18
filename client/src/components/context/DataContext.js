import { createContext, useState } from "react";


export const DataContext = createContext();

export const DataProvider =(props)=>{
    
    const [output, setOutput] = useState([]);
    return(
        <DataContext.Provider value={[output, setOutput]}>
            {props.children}
        </DataContext.Provider>
    );

}