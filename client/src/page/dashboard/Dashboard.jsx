import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import "./Dashboard.css";
import { FaCalendarAlt } from "react-icons/fa";
import { Box, List } from "@mui/material";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
//import { lineCustomSeries, lineCustomSeries2 } from '../../data(c)/MockData';
import { blue } from "@mui/material/colors";
import { getOrderMonth,getRevenueMonth, getProduct, getRevenueRate, getOrderRate, getRevenueYear, getTotalEmployee, getEffEmployee, getEffEmployeeNum, getDog, getCat} from "../../services/dashboard-axios";
import { FiBarChart } from "react-icons/fi";
import { BsBoxSeam } from "react-icons/bs";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { HiOutlineRefresh } from "react-icons/hi";
import { IoIosPeople } from "react-icons/io";
import { MdOutlineEmojiPeople } from "react-icons/md";
import StackedColumn from "./components/BarChart2";
export const FetchData = async (currentMonth, currentYear) => {
  const order = await getOrderMonth(currentMonth, currentYear);
  const product = await getProduct();
  const revenue = await getRevenueMonth(currentMonth, currentYear);
  const revenueP = await getRevenueRate(currentMonth, currentYear);
  const orderP = await getOrderRate(currentMonth, currentYear);
  const revenuePrev = await getRevenueMonth(currentMonth - 1, currentYear);
  const revenueY = await getRevenueYear(currentYear);
  const revenueYP1 = await getRevenueYear(currentYear - 1);
  const revenueYP2 = await getRevenueYear(currentYear - 2);
  const revenueYP3 = await getRevenueYear(currentYear - 3); 
  const totalEmp = await getTotalEmployee(currentMonth, currentYear);
  const effEmp = await getEffEmployee(currentMonth, currentYear);
  const empNum = await getEffEmployeeNum(currentMonth, currentYear);
  // Handle for lineChart
  let prev1Month, prev2Month, prev3Month;
  if (currentMonth === 1) {
    prev1Month = 12;
    prev2Month = 11;
    prev3Month = 10;
  } else if (currentMonth === 2) {
    prev1Month = 1;
    prev2Month = 12;
    prev3Month = 11;
  } else if (currentMonth === 3) {
    prev1Month = 2;
    prev2Month = 1;
    prev3Month = 12;
  } else {
    prev1Month = currentMonth - 1;
    prev2Month = currentMonth - 2;
    prev3Month = currentMonth - 3;
  }

  const revenueP1 = await getRevenueMonth(prev1Month, currentYear);
  const revenueP2 = await getRevenueMonth(prev2Month, currentYear);
  const revenueP3 = await getRevenueMonth(prev3Month, currentYear);
  const isOddMonth = currentMonth % 2 !== 0;
  const lineChartData = [
    [
      { x: new Date(currentYear-3, 0, 1), y: revenueYP3 },
      { x: new Date(currentYear-2, 0, 1), y: revenueYP2 },
      { x: new Date(currentYear-1, 0, 1), y: revenueYP1 },
      { x: new Date(currentYear, 0, 1), y: revenueY },
    ],
    [
      {
        x: new Date(currentYear-3, 0, 1),
        y: revenueYP3* 0.3,
      },
      {
        x: new Date(currentYear-2, 0, 1),
        y: revenueYP2 * 0.2,
      },
      {
        x: new Date(currentYear-1, 0, 1),
        y: revenueYP2 * 0.2,
      },
      {
        x: new Date(currentYear, 0, 1),
        y: revenueYP2 * 0.3,
      },
    ],
  ];
  const lineChartData2 = [
    [
      { x: new Date(currentYear, prev3Month - 1, 1), y: revenueP3 },
      { x: new Date(currentYear, prev2Month - 1, 1), y: revenueP2 },
      { x: new Date(currentYear, prev1Month - 1, 1), y: revenueP1 },
      { x: new Date(currentYear, currentMonth - 1, 1), y: revenue },
    ],
    [
      {
        x: new Date(currentYear, prev3Month - 1, 1),
        y: !isOddMonth ? revenueP3 * 0.3 : revenueP3 * 0.2,
      },
      {
        x: new Date(currentYear, prev2Month - 1, 1),
        y: isOddMonth ? revenueP2 * 0.3 : revenueP2 * 0.2,
      },
      {
        x: new Date(currentYear, prev1Month - 1, 1),
        y: !isOddMonth ? revenueP1 * 0.3 : revenueP1 * 0.2,
      },
      {
        x: new Date(currentYear, currentMonth - 1, 1),
        y: isOddMonth ? revenue * 0.3 : revenue * 0.2,
      },
    ],
  ];

  
  return {
    order,
    product,
    revenue,
    revenueP,
    orderP,
    revenuePrev,
    revenueP1,
    revenueP2,
    revenueP3,
    revenueY,
    lineChartData,
    lineChartData2,
    totalEmp,
    effEmp,
    empNum,
  };
};export const FetchDataForStack = async (currentMonth, currentYear) => {
  let prev1Month, prev2Month, prev3Month;
  if (currentMonth === 1) {
    prev1Month = 12;
    prev2Month = 11;
    prev3Month = 10;
  } else if (currentMonth === 2) {
    prev1Month = 1;
    prev2Month = 12;
    prev3Month = 11;
  } else if (currentMonth === 3) {
    prev1Month = 2;
    prev2Month = 1;
    prev3Month = 12;
  } else {
    prev1Month = currentMonth - 1;
    prev2Month = currentMonth - 2;
    prev3Month = currentMonth - 3;
  }


  //handle for barChart
  const dogNum = await getDog(currentMonth, currentYear);
  const dogNumP1 = await getDog(prev1Month, currentYear);
  const dogNumP2 = await getDog(prev2Month, currentYear);
  const dogNumP3 = await getDog(prev3Month, currentYear);
  const catNum = await getCat(currentMonth, currentYear);
  const catNumP1 = await getCat(prev1Month, currentYear);
  const catNumP2 = await getCat(prev2Month, currentYear);
  const catNumP3 = await getCat(prev3Month, currentYear);
  
  const barChartData1 = [
    { x: prev3Month, y: dogNumP3 },
    { x: prev2Month, y: dogNumP2 },
    { x: prev1Month, y: dogNumP1 },
    { x: currentMonth, y: dogNum },    
  ]
  const barChartData2 = [
    { x: prev3Month, y: catNumP3 },
    { x: prev2Month, y: catNumP2 },
    { x: prev1Month, y: catNumP1 },
    { x: currentMonth, y: catNum },    
  ]
  
  return {
    barChartData1,
    barChartData2,
  };
};
const Dashboard = () => {
  const [isYear, setBool] = useState(true);
  const [order, setOrder] = useState(0);
  const [product, setProduct] = useState(0);
  const [revenue, setRevenue] = useState(0);
  const [revenueP, setRevenueP] = useState(0);
  const [revenuePrev, setRevenuePrev] = useState(0);
  const [orderP, setOrderP] = useState(0);
  const [emp, setEmp] = useState(0);
  const [effEmp, setEEmp] = useState(null);
  const [empNum,setEmpNum]= useState(0);
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();
  const isOddMonth = currentMonth % 2 !== 0;
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await FetchData(currentMonth, currentYear);
        setOrder(data.order);
        setProduct(data.product);
        setRevenue(data.revenue);
        setRevenueP(data.revenueP);
        setOrderP(data.orderP);
        setRevenuePrev(data.revenuePrev);
        setEmp(data.totalEmp);
        setEEmp(data.effEmp);
        setEmpNum(data.empNum);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData(); 
  }, [currentMonth]);
    const earningData = [ 
    {
      icon: <MdOutlineSupervisorAccount />,
      amount: order,
      percentage: orderP >= 0 ? `+${orderP.toFixed(2)}%` : `${orderP.toFixed(2)}%`,
      title: "Khách hàng",
      iconColor: "#03C9D7",
      iconBg: "#E5FAFB",
    },
    {
      icon: <BsBoxSeam />,
      amount: product,
      title: "Sản phẩm",
      iconColor: "rgb(255, 244, 229)",
      iconBg: "rgb(254, 201, 15)",
    },
    {
      icon: <FiBarChart />,
      amount: `${revenue.toLocaleString()} VND`,
      percentage: revenueP >= 0 ? `+${revenueP.toFixed(2)}%` : `${revenueP.toFixed(2)}%`,
      title: "Doanh số",
      iconColor: "rgb(228, 106, 118)",
      iconBg: "rgb(255, 244, 229)",
  
      pcColor: "green-600",
    },
    {
      icon: <HiOutlineRefresh />,
      amount: isOddMonth == true ? `${(revenue*0.3).toLocaleString()} VND`:`${(revenue*0.2).toLocaleString()} VND`,
      percentage: isOddMonth == true ? `${(((3/2)*((revenueP-revenuePrev)/revenuePrev))*100).toFixed(2)}%` : `${(((2/3)*((revenueP-revenuePrev)/revenuePrev))*100).toFixed(2)}%`,
      title: "Lợi nhuận",
      iconColor: "rgb(0, 194, 146)",
      iconBg: "rgb(235, 250, 242)",
      pcColor: "red-600",
    },
  ];
  return (
    <>
    <main className='content'>  
      <Box m = "0 30px 10px 30px">
        <Header title="Tổng quan" subtitle="Tổng quan doanh thu"/> 
      </Box>
      <List
        sx={{
          width: '100%',
          height: '80%',
          overflow: 'auto',
        }}
      >
      <div className="flex-container">
          <div className="earnings-container">
            <div className="earnings-header">
              <p className="dashboard-txt">Tổng quan</p>
              <p className="dashboard-num">Tháng {currentMonth}</p>
            </div>
            <button
              type="button"
              style={{ backgroundColor: blue }}
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
            <LineChart dropList={isYear} />
            </div>
        </div>

        <div className="statistic-container">
        {/* <div className="statistic-text-conainer">
              <p className="statistic-text">Tổng quan sản phẩm</p>
          </div> */}
          <div className="statistic-chart">
        <Box  mt="-20px" className="stacked-chart">
              <StackedColumn/>

            </Box>
          </div>
        </div> 
        <div className="employee-container">
  <div className="top-employee">
  <div className="employee-text-conainer">
              <p className="employee-text">Nhân viên năng suất</p>
              <p className="employee-text-2">{effEmp} : {empNum} đơn hàng</p>
              <div className="employee-icon"><IoIosPeople/></div>
            </div>
            
  </div>
  <div className="active-employee">
   <div className="employee-text-conainer">
              <p className="employee-text">Nhân viên hoạt động trong tháng</p>
              <p className="employee-text-2">{emp} nhân viên</p>
              <div className="employee-icon"><MdOutlineEmojiPeople/></div>
            </div>
  </div>
</div>
 
    </List>
  </main> 
    </>
  );
};

export default Dashboard;

