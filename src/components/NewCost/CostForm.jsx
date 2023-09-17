import React,{useState} from 'react'
import './CostForm.css'



export default function CostForm() {

    const [name, setName] = useState('');
    const [sum, setSum] = useState('');
    const [date, setDate] = useState('');

    const nameChangerHandler = (event) => {
        setName(event.target.value);
    }
    const sumChangerHandler = (event) => {
        setSum(event.target.value);
    }
    const dateChangerHandler = (event) => {
        setDate(event.target.value);
    }

    

  return (
    <form>
        <div className='new-cost__controls'>
            <div className='new-cost__control'>
                <label>
                    Название
                </label>
                <input type='text' onChange={nameChangerHandler}/>
            </div>
            <div className='new-cost__control'>
                <label>
                    Сумма
                </label>
                <input type='number' onChange={sumChangerHandler} min='0.01' step='0.01'/>
            </div>
            <div className='new-cost__control'>
                <label>
                    Дата
                </label>
                <input type='date' onChange={dateChangerHandler} min='2019-01-01' max='2023-12-12'/>
            </div>
            <div className='new-cost__actions'>
                <button type='submit'>
                    Добавить расход
                </button>
            </div>
        </div>
    </form>
  )
}
