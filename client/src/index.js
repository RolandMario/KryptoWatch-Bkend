import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {DcProvider} from '../src/components/context/DComponents'
import {DataProvider} from '../src/components/context/DataContext'
import { TokenNameProvider } from './components/context/TokenNameContext';

ReactDOM.render(
  <React.StrictMode>
    <DcProvider>
      <DataProvider>
        <TokenNameProvider>
           <App /> 
        </TokenNameProvider>
       
      </DataProvider>
     
    </DcProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
