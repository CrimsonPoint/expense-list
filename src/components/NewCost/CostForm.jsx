import React,{useState} from 'react'
import './CostForm.css'



export default function CostForm(props) {

    const [inputName, setInputName] = useState('');
    const [inputSum, setInputSum] = useState('');
    const [inputDate, setInputDate] = useState('');

    const nameChangerHandler = (event) => {
        setInputName(event.target.value);
    }
    const sumChangerHandler = (event) => {
        setInputSum(event.target.value);
    }
    const dateChangerHandler = (event) => {
        setInputDate(event.target.value);
    }

    // Дополнительный способ обновления с учетом старой версии состояния
    // const nameChangerHandler = (event) => {
    //     setName((previosState) => {
    //         return {
    //             ...previosState,
    //             name: event.target.value
    //         }
    //     })
    // }


    const submitHandler = (event) => {
        event.preventDefault();

        const costData = {
            title: inputName,
            amount:  inputSum,
            date: new Date(inputDate)
        }

        props.onSaveCostDate(costData);
        console.log(`cost data ${costData.name}`)
        setInputName('');
        setInputSum('');
        setInputDate('');

    }

  return (
    <form onSubmit={submitHandler}>
        <div className='new-cost__controls'>
            <div className='new-cost__control'>
                <label>
                    Название
                </label>
                <input value={inputName} type='text' onChange={nameChangerHandler}/>
            </div>
            <div className='new-cost__control'>
                <label>
                    Сумма
                </label>
                <input value={inputSum} type='number' onChange={sumChangerHandler} min='0.01' step='0.01'/>
            </div>
            <div className='new-cost__control'>
                <label>
                    Дата
                </label>
                <input value={inputDate} type='date' onChange={dateChangerHandler} min='2019-01-01' max='2023-12-12'/>
            </div>
            <div className='new-cost__actions'>
                <button  type='submit'>
                    Добавить расход
                </button>
            </div>
        </div>
    </form>
  )
}
