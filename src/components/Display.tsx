import React from 'react';

import '../styles/display.scss';

import {CalcHistoricLine} from '../components/CalcHistoricLine';

export function Display(){
    return(
        <div className="flex display">

            <div className="flex calc-historic">
                <CalcHistoricLine/>
                <CalcHistoricLine/>
                <CalcHistoricLine/>
            </div>

            <div className='flex latest-calcs'>
                <div className='flex last-calc'>
                    <span>32x2</span>
                   
                </div>
                <div className='flex current-calc'>
                    <span> =64 </span>
                </div>
            </div>
        </div>
    )
}