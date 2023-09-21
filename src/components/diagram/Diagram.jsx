import React from 'react'
import 'Diagram.css'
import DiagramBar from './DiagramBar'


export default function Diagram(props) {
  return (
    <div className='diagram'>
        {
            props.dataSets.map(dataSet => <DiagramBar value={dataSet.value} maxValue = {null} label={dataSet.label} key = {dataSet.id}/>)
        }
    </div>
    
  )
}
