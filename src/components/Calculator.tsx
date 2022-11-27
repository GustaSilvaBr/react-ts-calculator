import React from 'react';

import '../styles/calculator.scss';

import {Display} from './Display';
import {CalcButtons} from './CalcButtons';

export function Calculator(){
    return (
        <div className="flex calculator">
            {/* <h1>Calculator</h1> */}
            <Display/>
            <CalcButtons/>
        </div>
    )
}

