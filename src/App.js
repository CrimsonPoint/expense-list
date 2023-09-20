import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import React, {useState} from "react";

const startDataCosts = [
  {
    id: 0,
    date: new Date(2021,2,12),
    title: "title",
    amount: 999.9
  },
  {
    id: 1,
    date: new Date(2021,2,11),
    title: "title1",
    amount: 933.9
  },
  {
    id: 2,
    date: new Date(2021,2,10),
    title: "title3",
    amount: 109.7
  },
  {
    id: 3,
    date: new Date(2020,2,10),
    title: "title4",
    amount: 109.7
  },
];

function App() {

  const [costs, setCosts] = useState(startDataCosts);
  const [addNewCostFlag, setAddNewCostFlag] = useState(false);

  const addCostHandler = (cost) =>{
    setCosts(prevCost => {
      return [cost, ...prevCost];
    });
  }

  

  return (
    <div>

      <NewCost onAddCost= {addCostHandler} />

      <Costs costs={costs}/>
     
    </div>
  );
}

export default App;
