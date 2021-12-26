

import React from "react";
import DataTable from './components/DataTable'
import Input from './components/Input'
import FileInput from './components/FileInput'
import Calculator from './components/boilingWater/Calculator'
import WithoutContext from './components/Context/WithoutContext'
import FancyButton from "./components/RefDom/FancyButton";
import MyProvider from "./components/Context/MyProvider";
import LogFancyButton from "./components/RefDom/Log"
import ListOfTenThings from "./components/PropsChildren/PropsChildren";
import CounterButton from "./components/PropsChildren/CounterButton";
import AutoFocusTextInput from "./components/RefDom/CreateRef";
import './App.css';

const pepole = ['John', 'Jesse']
const ref = React.createRef();
function App() {
  return (
    <div className="App">
      <div id="modal-root"></div>
      <header className="App-header" id="app-root">
        <Calculator />
        <FileInput />
        <Input type="text" placeholder="Insert some text here..." callback={(val) => console.log(val)} />
        <DataTable data={pepole} />
        <WithoutContext />
        <MyProvider />
        <FancyButton ref={ref} >click me!</FancyButton>
        <LogFancyButton ref={ref} />
        <ListOfTenThings />
        <CounterButton />
        <AutoFocusTextInput />
      </header>
      
    </div>
  );
}

export default App;
