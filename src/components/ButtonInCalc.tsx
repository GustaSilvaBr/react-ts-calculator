import React, { ReactNode } from 'react';

import '../styles/buttonInCalc.scss';

const kindsOfButton = {
    action: 0,
    number: 1,
    result: 2
}

interface buttonInCalc{
    kindOfButton: 'action' | 'number' | 'result',
    children:ReactNode,
}

export function ButtonInCalc({kindOfButton, children}:buttonInCalc){
    
    return(
        <div className={`flex button-in-calc ${kindOfButton}`}>
            {children}
        </div>
    )
}