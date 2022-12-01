import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';

interface calcHistoricListInterface {
    calc: string,
    result: string
}

interface CalcContextType {
    currentCalc: string,
    currentResult: string,
    calcHistoricList: calcHistoricListInterface[],

    clearDisplay: ({ isToClearHistoric }: { isToClearHistoric: boolean }) => void,
    backSpaceInCalc: () => void,

    handleSetCurrentCalc: (value: string) => void,
}

const CalcContext = createContext<CalcContextType | undefined>(void 0);

interface CalcProvider {
    children: ReactNode,
}

export function CalcProvider({ children, }: CalcProvider) {
    const [currentCalc, setCurrentCalc] = useState<string>("0");
    const [currentResult, setCurrentResult] = useState("0");
    const [calcHistoricList, setCalcHistoricList] = useState<calcHistoricListInterface[]>([]);


    function canCalculate(calcToVerify: string) {
        const operatorsArray = ['+', '-', 'X', '/'];
        const lastItemInCalc = calcToVerify[calcToVerify.length - 1];
        if (operatorsArray.includes(lastItemInCalc)) {
            return false
        }

        for (let i = 0; i < operatorsArray.length; i++) {
            const operator = operatorsArray[i];
            if (calcToVerify.split('').includes(operator)) {
                return true;
            };
        }
        console.log(calcToVerify.split(''));
        return false;
    }

    function isOperator(value: string) {
        return value == "/" || value == "X" || value == "+" || value == "-";
    }

    function clearDisplay({ isToClearHistoric }: { isToClearHistoric: boolean }) {
        setCurrentCalc("0");
        setCurrentResult("0");
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

    function handleSetCurrentCalc(newInput: string) {

        if(newInput == ""){
            setCurrentCalc("0");
            setCurrentResult("0");
        }else if(isOperator(newInput)){
            const currentCalcLastIndex = currentCalc.length - 1;
            if (isOperator(currentCalc[currentCalcLastIndex])) {
                let newCurrentCalc = currentCalc.split('').filter((item, index)=>index!=currentCalcLastIndex).join('');
                setCurrentCalc(newCurrentCalc + newInput);
            } else if (canCalculate(currentCalc)) {
                const result = getCalculateResult(currentCalc);
                setCurrentCalc(result + newInput);
            } else {
                setCurrentCalc(currentCalc + newInput);
            }
        }else{
            const calculateWithNewInput = currentCalc + newInput;
            if(canCalculate(calculateWithNewInput)){
                setCurrentCalc(calculateWithNewInput);
                const result = getCalculateResult(calculateWithNewInput);
                handleSetCurrentResult(result?.toString()!);
            }else{
                if(currentCalc == "0"){
                    setCurrentCalc(newInput);
                    handleSetCurrentResult(newInput);
                }else{
                    setCurrentCalc(currentCalc + newInput);
                    handleSetCurrentResult(currentCalc + newInput);
                }
            }
        }

    }

    function handleSetCurrentResult(newResult: string){
        setCurrentResult("= "+newResult);
    }

    function alreadyCalculated() {
        return currentCalc.includes("=");
    }

    function getCalculateResult(operationToCalc: string) {
        let firstNumber = "";
        let operator;
        let lastNumber = "";
        console.log(operationToCalc);
        for (let i = 0; i < operationToCalc.length; i++) {
            const calcItem = operationToCalc[i];

            if (isOperator(calcItem)) {
                operator = calcItem;
            } else if (operator) {
                lastNumber += calcItem;
            } else {
                firstNumber += calcItem;
            }
        }

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

        return result;
    }



    function negateCurrentCalc() {

    }


    const values = {
        currentCalc, currentResult, calcHistoricList,
        clearDisplay, backSpaceInCalc, handleSetCurrentCalc
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