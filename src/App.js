import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";


function App() {

  const costs = [
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
 

  return (
    <div>
      <NewCost/>
     <Costs costs={costs}/>
     
    </div>
  );
}

export default App;
