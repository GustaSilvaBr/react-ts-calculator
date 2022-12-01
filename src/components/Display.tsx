import React from 'react';

import '../styles/display.scss';

import { CalcHistoricLine } from '../components/CalcHistoricLine';
import { useCalcContext } from '../contexts/CalcContext';

export function Display() {
    const { currentCalc, calcHistoricList, currentResult } = useCalcContext();

    return (
        <div className="flex display">

            <div className="flex calc-historic">
                {
                    calcHistoricList.map((calcHistoricItem, index) => {
                        return (<CalcHistoricLine calcHistoric={calcHistoricItem.calc} calcResult={calcHistoricItem.result} key={index} />)
                    })
                }
            </div>

            <div className='flex current-calc'>
                <div className='flex calc'>
                    <span>{currentCalc}</span>
                   
                </div>
                <div className='flex result'>
                    <span> {currentResult} </span>
                </div>
            </div>
        </div>
    )
}