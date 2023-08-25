import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate';
import Card from './components/Card';

function App() {
  const response = [                                     // an array of 3 objects  
    {
      itemName : "Nirma",
      itemDate : "28",
      itemMonth : "August",
      itemYear : "2001"
    },
    {
      itemName : "Nirma2",
      itemDate : "282",
      itemMonth : "August2",
      itemYear : "20012"
    },
    {
      itemName : "Nirma3",
      itemDate : "283",
      itemMonth : "August3",
      itemYear : "20013"
    }
  ];
// ye (name,day, month, year)  wahi hai (props.name , props.day , props.month , props.year) 
  return (
    <div>
      <Card>
        <Item name={response[0].itemName}> Hello Jee i am your First Item </Item>             
        <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear}></ItemDate>

        <Item name={response[1].itemName}></Item>
        <ItemDate day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemYear}></ItemDate>

        <Item name={response[2].itemName}></Item>
        <ItemDate day={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemYear}></ItemDate>
        
        <div className="App">Hello Jee</div>
      </Card>
      
    </div>
  );
}

export default App;
