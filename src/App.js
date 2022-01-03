

import React from "react";
import { Routes, Route } from 'react-router-dom'

import Home from "./Home/Home";


import SelfComponents from "./AppSelfComponents/SelfComponents";
import SelfComponent from "./AppSelfComponents/SelfComponent";


import Invoices from './AppInvoices/Invoices'
import Invoice from './AppInvoices/Invoice'

import './App.css';


function App() {
  return (
    <div className="App">
      <div id="modal-root"></div>
      {/* <header className="App-header" id="app-root">
        <h1>React Demo</h1>
      </header> */}
      <div>
        <div className="left-content"></div>
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="self-components" element={<SelfComponents />} >
              <Route index element={<main style={{ "padding": "1rem" }}><p>Select an component</p></main>} />
              <Route path=":componentName" element={<SelfComponent />} />
            </Route>
            <Route path="Invoices" element={<Invoices />} >
              <Route index element={<main style={{ "padding": "1rem" }}><p>Select an Invoice</p></main>} />
              <Route path=":invoiceId" element={<Invoice />} />
            </Route>
            <Route
              path="*"
              element={
                <main style={{ padding: '20px' }}>
                  <p>There is nothing here!</p>
                </main>
              }
            />
          </Routes>
        </div>
        <div className="right-content"></div>
      </div>
    </div >
  );
}

export default App;
