


import DataTable from './components/DataTable'
import Input from './components/Input'
import FileInput from './components/FileInput'
import Calculator from './components/boilingWater/Calculator'
import MouseTracker from './components/MouseTracker/MouseTracker'
import WithoutContext from './components/Context/WithoutContext'

import './App.css';

const pepole = ['John', 'Jesse']

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Calculator />
        <FileInput />
        <Input type="text" placeholder="Insert some text here..." callback={(val) => console.log(val)} />
        <DataTable data={pepole} />
        <MouseTracker />
        <WithoutContext />
        
      </header>
    </div>
  );
}

export default App;
