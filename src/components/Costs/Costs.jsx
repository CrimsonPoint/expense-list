import React from 'react'
import "./Costs.css"
import CostItem from '../costitem/CostItem';
import Card from '../Card/Card';

export default function Costs(props) {


    function painter(cost){
        const colors = {
            100: 'white',
            200: 'green',
            300: 'yellow',
        }
        let style_color = '';

        for(let key in colors){
            if(cost >= parseInt(key)) {style_color = colors[key]}
        }
        return style_color;
    }

    const itemsList = props.costs.map((item, index) => (
        <CostItem moneyStyle={painter(item.amount)} key={index} date={item.date} title={item.title} amount={item.amount}/>
      ));
  return (
    
    <Card className='costs'>
        {itemsList}
    </Card>
  )
}