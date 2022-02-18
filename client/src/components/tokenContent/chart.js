import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios'
import {Line}  from "react-chartjs-2";
import Chart from 'chart.js/auto';
import { DataContext } from '../context/DataContext';
import { TokenNameContext } from '../context/TokenNameContext';

const LineChart = () => {   
    const [output, setOutput] = useContext(DataContext)
    const [tokenName, setTokenName] = useContext(TokenNameContext)
    const timeLabel = [];
    const priceData = [];
    timeLabel.push(...output[tokenName].price_timestamp);
    priceData.push(...output[tokenName].price)
    const plugin = {
        id: 'background',
        beforeDraw: (chart, args, opts) => {
          if (!opts.color) {
            return;
          }
      
          const {
            ctx,
            chartArea
          } = chart;
      
          ctx.fillStyle = opts.color;
          ctx.fillRect(chartArea.left, chartArea.top, chartArea.width, chartArea.height)
        }
      }
      
      Chart.register(plugin);
    const data = {
        labels: timeLabel,//['Monday', 'Tuesday', 'Wednessday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [
            {
                label: "24 Hour price Movement",
                data: priceData,//[4,2,1,4,5,6,5],
                borderColor: ['rgba(245, 140, 39, 0.8)'],
                backgroundcolor: ['rgba(245, 140, 39, 0.8)'],
                pointBackgroundcolor: ['rgba(65, 71, 221, 0.8)'],
                pointBorderColor: ['rgba(65, 71, 221, 0.8)']
            }
        ]
    }
    const options = {
        
            plugins: {
              background: {
                color: 'rgba(65, 71, 221, 0.8)'
              }
            }
         
    }
  return <div>
      <Line data={data} options={options}/>
  </div>;
};

export default LineChart;
