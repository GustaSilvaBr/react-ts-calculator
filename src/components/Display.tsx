import React from 'react';

import '../styles/display.scss';

import {CalcHistoricLine} from '../components/CalcHistoricLine';
import { useCalcContext } from '../contexts/CalcContext';

export function Display(){
    const {currentCalc} = useCalcContext();


    return(
        <div className="flex display">

            <div className="flex calc-historic">
                <CalcHistoricLine/>
                <CalcHistoricLine/>
                <CalcHistoricLine/>
            </div>

            <div className='flex current-calc'>
                <div className='flex calc'>
                    <span>{currentCalc}</span>
                   
                </div>
                <div className='flex result'>
                    <span> {currentCalc} </span>
                </div>
            </div>
        </div>
    )
}