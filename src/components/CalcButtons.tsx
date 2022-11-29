import React from 'react';

import '../styles/calcButtons.scss';

import {ButtonInCalc} from './ButtonInCalc';
import {useCalcContext} from '../contexts/CalcContext';


export function CalcButtons(){
    // const {currentCalc, setCurrentCalc} = useCalcContext();


    return (
        <div className="flex calc-buttons">
            <ButtonInCalc kindOfButton='action' valueOfButton='AC' isNumberOrOperation={false}/>
                    
            <ButtonInCalc kindOfButton='action' valueOfButton='C' isNumberOrOperation={false}/>
                 
            <ButtonInCalc kindOfButton='action' valueOfButton='<-' isNumberOrOperation={false}/>
                 
            <ButtonInCalc kindOfButton='calculate' valueOfButton='=' isNumberOrOperation={false}/>
                 

            <ButtonInCalc kindOfButton='number' valueOfButton='7'/>
                 
            <ButtonInCalc kindOfButton='number' valueOfButton='8'/>
                 
            <ButtonInCalc kindOfButton='number' valueOfButton='9'/>
                 
            <ButtonInCalc kindOfButton='action' valueOfButton='/'/>
                 

            <ButtonInCalc kindOfButton='number' valueOfButton='4'/>
                 
            <ButtonInCalc kindOfButton='number' valueOfButton='5'/>
                 
            <ButtonInCalc kindOfButton='number' valueOfButton='6'/>
                 
            <ButtonInCalc kindOfButton='action' valueOfButton='X' />
                 

            <ButtonInCalc kindOfButton='number' valueOfButton='1'/>
                 
            <ButtonInCalc kindOfButton='number' valueOfButton='2'/>
                 
            <ButtonInCalc kindOfButton='number' valueOfButton='3'/>
                 
            <ButtonInCalc kindOfButton='action' valueOfButton='-' />
                 

            <ButtonInCalc kindOfButton='action' valueOfButton='+/-' isNumberOrOperation={false}/>
                 
            <ButtonInCalc kindOfButton='number' valueOfButton='0'/>
                 
            <ButtonInCalc kindOfButton='number' valueOfButton='.'/>
                 
            <ButtonInCalc kindOfButton='action' valueOfButton='+'/>
                
            
        </div>
    )
}
