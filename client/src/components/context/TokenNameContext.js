import { createContext, useState } from "react";


export const TokenNameContext = createContext();

export const TokenNameProvider =(props)=>{
    
    const [tokenName, setTokenName] = useState(null);
    return(
        <TokenNameContext.Provider value={[tokenName, setTokenName]}>
            {props.children}
        </TokenNameContext.Provider>
    );

}