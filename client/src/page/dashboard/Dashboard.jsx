import React, { useState } from "react";
import Header from "../../components/Header";
import { earningData } from "../../data(c)/MockData";
import "./Dashboard.css";
import { FaCalendarAlt } from "react-icons/fa";
import { IoIosMore } from 'react-icons/io';
import Button from "react-bootstrap/esm/Button";

import { Box } from "@mui/material";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
import { lineCustomSeries, lineCustomSeries2 } from '../../data(c)/MockData';

const Dashboard = () => {
  const { currentColor, currentMode } = useState("Blue");

  const [selectedChartData, setSelectedChartData] = useState(lineCustomSeries);
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
 
  return (
    <>
    <main className='content'>  
      <Box m = "0 30px 10px 30px">
                    <Header title="Tổng quan" subtitle="Tổng quan doanh thu"/> 
      </Box>
      <div className="flex-container">
          <div className="earnings-container">
            <div className="earnings-header">
              <p className="dashboard-txt">Tổng quan</p>
              <p className="dashboard-num">Tháng {currentMonth}</p>
            </div>
            <button
              type="button"
              style={{ backgroundColor: currentColor }}
              className="currency-button"
            >
              <FaCalendarAlt />
            </button>
          </div>
          <div className="earnings-details">
            {earningData.map((item) => (
              <div key={item.title} className="earning-item">
                <button
                  type="button"
                  style={{
                    color: item.iconColor,
                    backgroundColor: item.iconBg,
                  }}
                  className="earning-icon"
                >
                  {item.icon}
                </button>
                <p className="amount-percentage">
                  <span className="amount">{item.amount}</span>
                  <span className="percentage-text">
                    {item.percentage}
                  </span>
                </p>
                <p className="title text-gray-400">{item.title}</p>
              </div>
            ))}
          </div>
        </div> 
      <div className="revenue-container">
          <div className="revenue-text-conainer">
              <p className="revenue-text">Tổng quan</p>
            </div>
            <div className="revenue-chart">
            <LineChart initialData={selectedChartData} />
            </div>
        </div>

        <div className="statistic-container">
        <div className="statistic-text-conainer">
              <p className="statistic-text">Tổng quan sản phẩm</p>
          </div>
          <div className="statistic-chart">
        <Box  mt="-20px" className="stacked-chart">
              <BarChart isDashboard={true} />
            </Box>
          </div>
          </div>
   </main> 
    </>
  );
};

export default Dashboard;
