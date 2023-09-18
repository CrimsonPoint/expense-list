import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import React, {useState} from "react";



function App() {
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
      title: "title2",
      amount: 109.7
    },
  ];

  const [costs, setCosts] = useState(startDataCosts);


  const addCostHandler = (cost) =>{
    console.log(cost)
    setCosts(cost);

  }

  return (
    <div>
      <NewCost onAddCost= {addCostHandler}/>
     <Costs costs={costs}/>
     
    </div>
  );
}

export default App;
