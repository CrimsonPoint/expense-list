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
  const [costs2, setCosts2] = useState(costs);

  const addCostHandler = (cost) =>{
    setCosts(prevCost => {
      return [cost, ...prevCost];
    });
  }

  const filterYear = (year) => {
    const filteredCosts = costs.filter(cost => cost.date.getFullYear() === parseInt(year))
    //console.log(year);

    setCosts2(filteredCosts);
    //return costs.filter(cost => cost.date.getFullYear() === parseInt(year))
  } 

  return (
    <div>

      <NewCost onAddCost= {addCostHandler} />

      <Costs year={filterYear} costs={costs2}/>
     
    </div>
  );
}

export default App;
