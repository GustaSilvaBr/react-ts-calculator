import React, {createContext, ReactNode, useContext, useState} from 'react';

interface CalcContextType {
    currentCalc: string, 
    setCurrentCalc: (value:string)=> void,
}

const CalcContext = createContext<CalcContextType | undefined>(void 0);

interface CalcProvider{
    children: ReactNode,
}

export function CalcProvider({children, }:CalcProvider){
    const [currentCalc, setCurrentCalc] = useState<string>("0");

    const values = {
        currentCalc, setCurrentCalc
    }

    return(
        <CalcContext.Provider value={values}>
            {children}
        </CalcContext.Provider>
    )
}

export function useCalcContext(){
    const context = useContext(CalcContext) as CalcContextType;
    return context;
}