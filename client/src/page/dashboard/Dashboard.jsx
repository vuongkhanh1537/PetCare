import React, { useState, useEffect,useRef } from "react";
import Header from "../../components/Header";
import "./Dashboard.css";
import { FaCalendarAlt } from "react-icons/fa";
import { Box, List } from "@mui/material";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
import { blue } from "@mui/material/colors";
import { getOrderMonth,getRevenueMonth, getProduct, getRevenueRate, getOrderRate, getRevenueYear, getTotalEmployee, getEffEmployee, getEffEmployeeNum, getDog, getCat} from "../../services/dashboard-axios";
import { FiBarChart } from "react-icons/fi";
import { BsBoxSeam } from "react-icons/bs";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { HiOutlineRefresh } from "react-icons/hi";
import { IoIosPeople } from "react-icons/io";
import { MdOutlineEmojiPeople } from "react-icons/md";
import StackedColumn from "./components/BarChart2";
import { useReactToPrint } from 'react-to-print';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

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
};
export const FetchDataForStack = async (currentMonth, currentYear) => {
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

  //handle for report
  const componentPDF = useRef(null);
  const [open, setOpen] = React.useState(false);
  const [selectedYear, setSelectedYear] = useState(2023);
  const [selectedMonth, setSelectedMonth] = useState(12);
  const [isPrint, setIsPrint] = useState(false);
  const [efficiencyRatio, setEfficiencyRatio] = useState(0);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setIsPrint(false);
    setOpen(false);
  };
  const handleClose2 = () => {
    window.location.reload();
  };
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
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await FetchData(selectedMonth, selectedYear);
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
    setEfficiencyRatio( (revenue * revenueP / 100)/(order * orderP / 100) );
    fetchData(); 
  }, [isPrint]);
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
      percentage: isOddMonth == true ? `${(((3/2) * (revenue / revenuePrev) - 1) * 100).toFixed(2)}%` : `${(((2 / 3) * (revenue / revenuePrev) - 1) * 100).toFixed(2)}%`,
      title: "Lợi nhuận",
      iconColor: "rgb(0, 194, 146)",
      iconBg: "rgb(235, 250, 242)",
      pcColor: "red-600",
    },
    ];
  

  const handlePrint = () => {
    
    if (selectedMonth > 12 || selectedMonth <0 ) {
      alert("Vui lòng chọn tháng bé hơn 12 và lớn hơn 0");
      return;
    }
    if (selectedYear>currentYear ) {
      alert("Vui lòng chọn năm bé hơn hoặc bằng năm hiện tại");
      return;
    }
    setIsPrint(true);
    setTimeout(() => {
      handleGenerateReport();
    }, 2000);
  }
  const handleGenerateReport = useReactToPrint({
    content: () => componentPDF.current,
    documentTitle: "Overview",
    onAfterPrint: () => handleClose2(),
  });
  return (
    <>
    <main className='content' >  
      <Box m = "0 30px 10px 30px">
          <Header title="Tổng quan" subtitle="Tổng quan doanh thu" /> 
          <Button
            variant="outlined"
            onClick={handleClickOpen}
            className="print-report-btn"
          >
            In báo cáo
          </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>In báo cáo</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Vui lòng chọn tháng và năm cần lập báo cáo tổng quan.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="year"
            label="Năm"
            type="number"
            fullWidth
            variant="standard"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="month"
            label="Tháng"
            type="number"  
            fullWidth
            variant="standard"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
          />
              
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Hủy</Button>
          <Button onClick={handlePrint}>Lập báo cáo</Button>
        </DialogActions>
      </Dialog>
        </Box>
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
 
    
      </main> 
      {isPrint && (
  <div className="report-section" ref={componentPDF}>
          <h1>Báo cáo tháng {selectedMonth}</h1>
  
  <div className="author-info">
    <h2>Tác giả</h2>
    <p>Tên: {effEmp}</p>
    <p>Chức vụ: Chuyên viên phân tích</p>
  </div>

  <h2>Tổng quan</h2>
  <table>
      <thead>
        <tr>
          <th></th>
          <th>Số lượng</th>
          <th>Phần trăm</th>
        </tr>
      </thead>
      <tbody>
        {earningData.map((item, index) => (
          <tr key={index}>
            <td>{item.title}</td>
            <td>{item.amount}</td>
            <td>{item.percentage}</td>
          </tr>
        ))}
      </tbody>
    </table>
  <h2>Số liệu chính</h2>
  <ul>
    <li>Doanh thu trong tháng tăng: {(revenue*revenueP/100).toFixed(2)} VND</li>
    <li>Số lượng khách hàng mới: {(order*orderP/100).toFixed(0)} người</li>
    <li>Lượng kinh tế chuyển đổi: {isFinite(efficiencyRatio) ? efficiencyRatio.toFixed(2) : "không có khách hàng mới"} {isFinite(efficiencyRatio) ? "VND/người" : ""}</li>
  </ul>

  <h2>Phân tích</h2>
    {!isFinite(efficiencyRatio) ? (<p><strong>Không có khách hàng mới:</strong> Giá trị tính toán đưa ra số khách hàng bằng 0, dẫn đến doanh thu trong tháng tăng thấp </p>
    ) : efficiencyRatio > 1000000 ? (
      <p><strong>Hiệu suất Cao:</strong> Giá trị tính toán cho thấy tỷ lệ hiệu suất cao, đề xuất rằng đơn đặt hàng đang chuyển đổi thành doanh thu rất hiệu quả.</p>
    ) : efficiencyRatio > 500000 ? (
      <p><strong>Hiệu suất Trung bình:</strong> Tỷ lệ hiệu suất trung bình, chỉ ra một tỷ lệ chuyển đổi đơn đặt hàng thành doanh thu hợp lý.</p>
    ) : (
      <p><strong>Hiệu suất Thấp:</strong> Giá trị tính toán cho thấy tỷ lệ hiệu suất thấp, và có thể có cơ hội để cải thiện quá trình chuyển đổi đơn đặt hàng thành doanh thu.</p>
    )}

    <h2>Đề xuất</h2>
    {!isFinite(efficiencyRatio) ? (<p><strong>Đề xuất:</strong> Đề xuất tăng quảng bá nhãn hiệu để tăng lượng khách hàng.</p>
    ) :efficiencyRatio > 1000000 ? (
      <p><strong>Đề xuất:</strong> Xem xét giữ các chiến lược hiện tại đang đóng góp vào việc chuyển đổi đơn đặt hàng hiệu quả.</p>
    ) : efficiencyRatio > 500000 ? (
      <p><strong>Đề xuất:</strong> Khám phá cơ hội để cải thiện quá trình chuyển đổi và tăng cường hiệu suất tổng thể.</p>
    ) : (
      <p><strong>Đề xuất:</strong> Thực hiện các chiến lược và chiến thuật mới để cải thiện quá trình chuyển đổi đơn đặt hàng thành doanh thu và tăng cường hiệu suất tổng thể.</p>
    )}

    <h2>Kết luận</h2>
    {!isFinite(efficiencyRatio) ? (<p>Kết luận phân tích, không có khách hàng mới, cần xem xét thu hút tăng lượng khách hàng.</p>
    ) :efficiencyRatio > 1000000 ? (
      <p>Kết luận phân tích, tỷ lệ hiệu suất cao phản ánh một quá trình chuyển đổi đơn đặt hàng thành công, đóng góp vào triển vọng tích cực cho những tháng tới.</p>
    ) : efficiencyRatio > 500000 ? (
      <p>Kết luận phân tích, có hiệu suất trung bình trong quá trình chuyển đổi đơn đặt hàng và có thể xem xét điều chỉnh chiến lược để cải thiện thêm.</p>
    ) : (
      <p>Kết luận phân tích, tỷ lệ hiệu suất thấp đề xuất sự cần thiết của các thay đổi lớn trong chiến lược để đạt được kết quả tốt hơn trong những tháng sắp tới.</p>
    )}
</div>
      )}    
      
    </>
  );
};

export default Dashboard;

