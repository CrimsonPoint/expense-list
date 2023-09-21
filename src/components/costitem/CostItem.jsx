import React, {useState} from 'react'
import './CostItem.css'
import CostDate from '../CostDate/CostDate'
import Card from '../Card/Card'

export default function CostItem(props) {

  const [title, setTitle] = useState(props.title);

  const changeDescriptionHandler = () =>{
    setTitle(title + '1');
  };

  return (
    <Card className='cost-item'>
      <CostDate date={props.date}/>
      <div className='cost-item__description'>
            <h2>{title}</h2>
            <div style={{color: props.moneyStyle}} className='cost-item__price'>${props.amount}</div>
            <button  onClick={changeDescriptionHandler}>Изменить описание</button>
      </div>
    </Card>
  )
}
