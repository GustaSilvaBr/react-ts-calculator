import React from 'react';

interface CalcHistoricLineInterface{
    calcHistoric: string,
    calcResult: string
}

export function CalcHistoricLine({calcHistoric, calcResult}:CalcHistoricLineInterface) {
    return (
        <span className="calc-historic-line">
            {calcHistoric}={calcResult}
        </span>
    )
}

