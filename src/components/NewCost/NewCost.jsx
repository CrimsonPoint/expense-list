import React from 'react'
import './NewCost.css'
import CostForm from './CostForm'

export default function NewCost(props) {

  const onSaveCostDateHandler = (inputcostData) =>{
    props.onAddCost(inputcostData);
  } 

  return (
    <div className='new-cost'>
       <CostForm onSaveCostDate = {onSaveCostDateHandler}/>
    </div>
  )
}
