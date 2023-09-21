import React from 'react'
import './Diagram.css'
import DiagramBar from './DiagramBar'


export default function Diagram(props) {

    const dataOfCostsAmount = props.dataSets.map(data => data.value);
    const maxCostInMonth = Math.max(...dataOfCostsAmount);

  return (
    <div className='diagram'>
        {
            props.dataSets.map(dataSet => <DiagramBar value={dataSet.value} maxValue = {maxCostInMonth} label={dataSet.label} key={dataSet.label}/>)
        }
    </div>
    
  )
}
