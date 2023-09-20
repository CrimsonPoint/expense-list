import React, { useState } from 'react'
import "./Costs.css"
import CostItem from '../costitem/CostItem';
import Card from '../Card/Card';
import CostsFilter from '../CostFilter/CostFilter';

export default function Costs(props) {

    const [selectedYear, setSelectedYear] = useState('2022');

    const filterCosts = props.costs.filter(cost => cost.date.getFullYear().toString() === selectedYear)

    const itemsList = filterCosts.map((item, index) => (
        <CostItem moneyStyle={painter(item.amount)} id={index} key={index} date={item.date} title={item.title} amount={item.amount}/>
    ));

    const filterData = (data) => {
        setSelectedYear(data);
    }

    const ErrorMessageForEmptyArray = <p>Вы не вносили расходы в этом году</p>;

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

   
  return (
    
    <Card className='costs'>
        <CostsFilter year={selectedYear} onChangeYear = {filterData}/>
        {itemsList.length === 0 ? ErrorMessageForEmptyArray : itemsList}
    </Card>
  )
}
