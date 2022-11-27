import React from 'react';

import '../styles/calcButtons.scss';

import {ButtonInCalc} from './ButtonInCalc';

export function CalcButtons(){
    return (
        <div className="flex calc-buttons">
            <ButtonInCalc kindOfButton='action'>
                <span>AC</span>
            </ButtonInCalc>    
            <ButtonInCalc kindOfButton='action'>
                <span>C</span>
            </ButtonInCalc>    
            <ButtonInCalc kindOfButton='number'>
                <span> {`<-`} </span>
            </ButtonInCalc>    
            <ButtonInCalc kindOfButton='result'>
                <span>=</span>
            </ButtonInCalc>    

            <ButtonInCalc kindOfButton='number'>
                <span>7</span>
            </ButtonInCalc>    
            <ButtonInCalc kindOfButton='number'>
                <span>8</span>
            </ButtonInCalc>    
            <ButtonInCalc kindOfButton='number'>
                <span>9</span>
            </ButtonInCalc>    
            <ButtonInCalc kindOfButton='action'>
                <span>/</span>
            </ButtonInCalc>    

            <ButtonInCalc kindOfButton='number'>
                <span>4</span>
            </ButtonInCalc>    
            <ButtonInCalc kindOfButton='number'>
                <span>5</span>
            </ButtonInCalc>    
            <ButtonInCalc kindOfButton='number'>
                <span>6</span>
            </ButtonInCalc>    
            <ButtonInCalc kindOfButton='action'>
                <span>X</span>
            </ButtonInCalc>    

            <ButtonInCalc kindOfButton='number'>
                <span>1</span>
            </ButtonInCalc>    
            <ButtonInCalc kindOfButton='number'>
                <span>2</span>
            </ButtonInCalc>    
            <ButtonInCalc kindOfButton='number'>
                <span>3</span>
            </ButtonInCalc>    
            <ButtonInCalc kindOfButton='action'>
                <span>-</span>
            </ButtonInCalc>    

            <ButtonInCalc kindOfButton='action'>
                <span>{`+/-`}</span>
            </ButtonInCalc>    
            <ButtonInCalc kindOfButton='number'>
                <span>0</span>
            </ButtonInCalc>    
            <ButtonInCalc kindOfButton='number'>
                <span>.</span>
            </ButtonInCalc>    
            <ButtonInCalc kindOfButton='action'>
                <span>+</span>
            </ButtonInCalc>    

            
        </div>
    )
}

