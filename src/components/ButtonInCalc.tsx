import React, { ReactNode } from 'react';

import '../styles/buttonInCalc.scss';

import { useCalcContext } from '../contexts/CalcContext';

interface buttonInCalcInterface {
    kindOfButton: 'action' | 'number' | 'calculate',
    isNumberOrOperation?: boolean,
    valueOfButton: '/' | 'X' | '-' | '+' | '+/-' | 'AC' | 'C' | '<-' | '=' |
    '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '.',
}

export function ButtonInCalc({ kindOfButton, valueOfButton, isNumberOrOperation = true }: buttonInCalcInterface) {
    const { clearDisplay, hasToCalculate, backSpaceInCalc, handleSetCurrentCalc } = useCalcContext();


    function handleOnClick() {
        if (isNumberOrOperation) {
            handleSetCurrentCalc(valueOfButton);
        } else {
            switch (valueOfButton) {
                case 'AC':
                    clearDisplay({ isToClearHistoric: true });
                    break;
                case 'C':
                    clearDisplay({ isToClearHistoric: false });
                    break;
                case '<-':
                    backSpaceInCalc();
                    break;
                case '+/-':
                    break;
                case '=':
                    hasToCalculate();
                    break;
            }
        }
    }

    return (
        <button className={`button-in-calc ${kindOfButton}`} onClick={handleOnClick}>
            {valueOfButton}
        </button>
    )
}