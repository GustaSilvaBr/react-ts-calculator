import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';

interface calcHistoricListInterface {
    calc: string,
    result: string
}

interface CalcContextType {
    currentCalc: string,
    calcHistoricList: calcHistoricListInterface[],

    clearDisplay: ({ isToClearHistoric }: { isToClearHistoric: boolean }) => void,
    backSpaceInCalc: () => void,
    hasToCalculate: (value?: string) => void,

    handleSetCurrentCalc: (value: string) => void,
}

const CalcContext = createContext<CalcContextType | undefined>(void 0);

interface CalcProvider {
    children: ReactNode,
}

export function CalcProvider({ children, }: CalcProvider) {
    const [currentCalc, setCurrentCalc] = useState<string>("0");
    const [calcHistoricList, setCalcHistoricList] = useState<calcHistoricListInterface[]>([]);

    function hasToCalculate(value = "") {
        let firstNumber = "";
        let operator;
        let lastNumber = "";
        for (let i = 0; i < currentCalc.length; i++) {
            const calcItem = currentCalc[i];

            if (isOperator(calcItem)) {
                operator = calcItem;
            } else if (operator) {
                lastNumber += calcItem;
            } else {
                firstNumber += calcItem;
            }
        }

        if(operator && lastNumber != ""){
            calculate(firstNumber, operator, lastNumber);
        }
    }

    useEffect(()=>{
        console.log(currentCalc);
    },[currentCalc]);

    function isOperator(value: string) {
        return value=="/" || value=="X" || value == "+" || value == "-";       
    }

    function clearDisplay({ isToClearHistoric }: { isToClearHistoric: boolean }) {
        setCurrentCalc("0");
        console.log("cleaned");
        if (isToClearHistoric) {
            setCalcHistoricList([]);
        }
    }

    function backSpaceInCalc() {
        const newCurrentCalc = currentCalc.slice(0, -1);
        if (newCurrentCalc == "") {
            setCurrentCalc("0");
        } else {
            setCurrentCalc(newCurrentCalc);
        }
    }

    function handleSetCurrentCalc(value: string) {

        // hasToCalculate(value);

        if(alreadyCalculated()){
            setCurrentCalc(value);
        }else {
            if (value == "") {
                setCurrentCalc("0");
            } else if (currentCalc == "0") {
                setCurrentCalc(value);
            } else {
                setCurrentCalc(currentCalc + value);
            }
        }

       
    }

    function alreadyCalculated(){
        return currentCalc.includes("=");
    }

    function calculate(firstNumber: string, operator: string, lastNumber: string) {
        const firstNumberAsFloat = Number.parseFloat(firstNumber);
        const lastNumberAsFloat = Number.parseFloat(lastNumber);
        let result;

        switch (operator) {
            case '+':
                result = firstNumberAsFloat + lastNumberAsFloat;
                break;
            case '-':
                result = firstNumberAsFloat - lastNumberAsFloat;
                break;
            case 'X':
                result = firstNumberAsFloat * lastNumberAsFloat;
                break;
            case '/':
                result = firstNumberAsFloat / lastNumberAsFloat;
                break;
        }

        setCurrentCalc(currentCalc + " = " + result);
    }

    

    function negateCurrentCalc() {

    }


    const values = {
        currentCalc, calcHistoricList,
        clearDisplay, backSpaceInCalc, hasToCalculate, handleSetCurrentCalc
    }

    return (
        <CalcContext.Provider value={values}>
            {children}
        </CalcContext.Provider>
    )
}

export function useCalcContext() {
    const context = useContext(CalcContext) as CalcContextType;
    return context;
}