import React from 'react'
import 'DiagramBar.css'

export default function DiagramBar(props) {

    let barFillHeigth = '0%';

    if(props.maxValue > 0 )
    {
        barFillHeigth = Math.round(props.value / props.maxValue * 100) + '%';
    }

  return (
    <div className='diagram-bar'>
        <div className='diagram-bar__inner'>
            <div className='diagram-bar__fill' style={{height: barFillHeigth}}>
                {props.value}
            </div>    
        </div>
        <div className='diagram-bar__label'>
            {props.label}       
        </div>
    </div>
  )
}
