import logo from './logo.svg';
import './App.css';
import TabContainer from './components/TabContainer';
import { useState } from 'react';
import ContentBox from './components/ContentBox';

function App() {
  const[currentTabNumber, setCurrentTabNumber] = useState(1);
  const[tabs, addTab] = useState([
    {
      tabNumber: 1,
      content: "Tab 1 Content",
      selected: true
    },
    {
      tabNumber: 2,
      content: "Tab 2 Content",
      selected: false
    },
    {
      tabNumber: 3,
      content: "Tab 3 Content",
      selected: false
    }
  ]);


  return (
    <div className="App">
        <TabContainer tabs={tabs} setCurrentTabNumber={setCurrentTabNumber}/>
        <ContentBox tabs={tabs}/>
      </div>
      
  );
}

export default App;
