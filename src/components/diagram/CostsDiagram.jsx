import React from 'react'
import Diagram from './Diagram'


export default function CostsDiagram(props) {

    function dataBluePrint(label,value){
        this.label = label;
        this.value = value;
    }

    const diagramData = []

    for (let i = 0; i < 12; i++) {
        diagramData.push(
            new dataBluePrint(new Date(2023,i,1).toLocaleString('en-EN',{month: "short"}) , 0)
        )
    }

    for (let cost of props.costs) {
        const costMonth = cost.date.getMonth();
        diagramData[costMonth].value += cost.amount;
    }



  return (
    <Diagram dataSets = {diagramData}/>
  )
}
