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
    hasToCalculate: (value?: string) => void,

    handleSetCurrentCalc: (value: string) => void,
}

const CalcContext = createContext<CalcContextType | undefined>(void 0);

interface CalcProvider {
    children: ReactNode,
}

export function CalcProvider({ children, }: CalcProvider) {
    const [currentCalc, setCurrentCalc] = useState<string>("0");
    const [currentResult, setCurrentResult] = useState<string>(currentCalc);
    const [calcHistoricList, setCalcHistoricList] = useState<calcHistoricListInterface[]>([]);


    function hasToCalculate(value = "") {
        let firstNumber = "";
        let operator;
        let lastNumber = "";
        for (let i = 0; i < currentCalc.length; i++) {
            const calcItem = currentCalc[i];

            if (stringIsNotANumber(calcItem) && calcItem != ".") {
                operator = calcItem;
            } else if (operator) {
                lastNumber += calcItem;
            } else {
                firstNumber += calcItem;
            }
        }

        if (operator) {
            if (stringIsNotANumber(value) && value != ".") {
                if (stringIsNotANumber(currentCalc[currentCalc.length - 1]) && value != ".") {
                    //change last item for new value
                } else {
                    calculate(firstNumber, operator, lastNumber);
                }
            }


        }
    }

    function stringIsNotANumber(value: string) {
        const valueAsNumber = Number.parseFloat(value);
        return isNaN(valueAsNumber);
    }

    function clearDisplay({ isToClearHistoric }: { isToClearHistoric: boolean }) {
        handleSetCurrentCalc("");
        handleSetCurrentResult("");

        if (isToClearHistoric) {
            handleSetCalcHistoricList([]);
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

        hasToCalculate(value);

        if (value == "") {
            setCurrentCalc("0");
        } else if (currentCalc == "0") {
            setCurrentCalc(value);
        } else {
            setCurrentCalc(currentCalc + value);

        }
    }

    function handleSetCurrentResult(value: typeof currentResult) {
        if (value == "") {
            setCurrentCalc("0");
        } else if (value) {
            setCurrentCalc(currentCalc + value);
        }
    }

    function handleSetCalcHistoricList(list: typeof calcHistoricList) {
        setCalcHistoricList(list);
    }

    function calculate(firstNumber: string, operator: string, lastNumber: string) {
        const firstNumberAsFloat = Number.parseFloat(firstNumber);
        const lastNumberAsFloat = Number.parseFloat(lastNumber);
        let result;

        switch (operator) {
            case '+':
                result = firstNumberAsFloat + lastNumberAsFloat;
                break;
            case '':
                result = firstNumberAsFloat + lastNumberAsFloat;
                break;
        }


        console.log("result:", result);
    }

    function negateCurrentCalc() {

    }

    useEffect(() => {

        if (currentCalc.length < 1) {
            setCurrentCalc("0");
        }

        if (currentResult.length < 1) {
            setCurrentResult("0");
        }

    }, [currentCalc, currentResult]);

    const values = {
        currentCalc, currentResult, calcHistoricList,
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