import React, { ReactNode } from 'react';

import '../styles/buttonInCalc.scss';

import {useCalcContext} from '../contexts/CalcContext';

interface buttonInCalcInterface{
    kindOfButton: 'action' | 'number' | 'calculate',
    valueOfButton: '/' | 'X' | '-' | '+' | '+/-' | 'AC' | 'C' | '<-' | '=' |
    '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '.',
}

export function ButtonInCalc({kindOfButton, valueOfButton }:buttonInCalcInterface){
    const {currentCalc, setCurrentCalc} = useCalcContext();

    function handleEnterNumber(){
        setCurrentCalc(currentCalc=="0"?(valueOfButton):(currentCalc+valueOfButton));
    }

    function handleEnterAction(){

    }

    function handleEnterCalculate(){

    }

    function handleOnClick(){
        switch(kindOfButton){
            case 'action':
                handleEnterAction();
                break;
            case 'number':
                handleEnterNumber();
                break;
            case 'calculate':
                handleEnterCalculate();
                break;
        }
    }

    return(
        <button className={`button-in-calc ${kindOfButton}`} onClick={handleOnClick}>
            {valueOfButton}
        </button>
    )
}