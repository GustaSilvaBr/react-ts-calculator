import React, {createContext, ReactNode, useContext, useEffect, useState} from 'react';

interface calcHistoricListInterface{
    calc:string,
    result:string
}

interface CalcContextType {
    currentCalc: string, 
    currentResult: string,
    calcHistoricList: calcHistoricListInterface[],

    clearDisplay: ({isToClearHistoric}:{isToClearHistoric:boolean}) => void,
    backSpaceInCalc: ()=>void,  
    calculate: () => void, 

    handleSetCurrentCalc: (value: string)=> void,
}

const CalcContext = createContext<CalcContextType | undefined>(void 0);

interface CalcProvider{
    children: ReactNode,
}

export function CalcProvider({children, }:CalcProvider){
    const [currentCalc, setCurrentCalc] = useState<string>("0");
    const [currentResult, setCurrentResult] = useState<string>(currentCalc);
    const [calcHistoricList, setCalcHistoricList] = useState<calcHistoricListInterface[]>([]);


    function clearDisplay({isToClearHistoric}:{isToClearHistoric:boolean}){
        handleSetCurrentCalc("");
        handleSetCurrentResult("");

        if(isToClearHistoric){
            handleSetCalcHistoricList([]);
        }
    }

    function backSpaceInCalc(){
        const newCurrentCalc = currentCalc.slice(0, -1);
        if(newCurrentCalc==""){
            setCurrentCalc("0");
        }else{
            setCurrentCalc(newCurrentCalc);
        }
    }

    function handleSetCurrentCalc(value: string){
        if(value==""){
            setCurrentCalc("0");
        }else if(currentCalc=="0"){
            setCurrentCalc(value);
        } else{
            setCurrentCalc(currentCalc + value);
        }
    }

    function handleSetCurrentResult(value: typeof currentResult){
        if(value==""){
            setCurrentCalc("0");
        }else if(value){
            setCurrentCalc(currentCalc+value);
        }
    }

    function handleSetCalcHistoricList(list: typeof calcHistoricList){
        setCalcHistoricList(list);
    }

    function calculate(){
        console.log("CALC!", currentCalc);
    }

    function negateCurrentCalc(){

    }

    useEffect(()=>{

        if(currentCalc.length < 1){
            setCurrentCalc("0");
        }
        
        if(currentResult.length < 1){
            setCurrentResult("0");
        }

    },[currentCalc, currentResult ]);

    const values = {
        currentCalc, currentResult, calcHistoricList, 
        clearDisplay, backSpaceInCalc, calculate, handleSetCurrentCalc
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