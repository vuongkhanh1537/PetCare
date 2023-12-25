import axios from "./customize-axios";

export const getRevenueMonth = async (month, year) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/api/dashboard/monthly-revenue?year=${year}&month=${month}`
    );

    return response;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
export const getOrderMonth = async (month, year) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/api/dashboard/total-orders?year=${year}&month=${month}`
    );

    return response;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
export const getProduct = async () => {
  try {
    const response = await axios.get(
      `http://localhost:8080/api/dashboard/product-availability`
    );
    return response;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
export const getRevenueRate = async (month, year) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/api/dashboard/revenue-percentage-change?year=${year}&month=${month}`
    );

    return response;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
export const getOrderRate = async (month, year) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/api/dashboard/order-percentage-change?year=${year}&month=${month}`
    );

    return response;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
export const getRevenueYear = async (year) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/api/dashboard/yearly-revenue?year=${year}`
    );

    return response;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
export const getTotalEmployee = async (month, year) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/api/dashboard/num-employee?year=${year}&month=${month}`
    );

    return response;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
export const getEffEmployee = async (month, year) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/api/dashboard/eff-employee?year=${year}&month=${month}`
    );

    return response;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
export const getEffEmployeeNum = async (month, year) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/api/dashboard/eff-employee-num?year=${year}&month=${month}`
    );

    return response;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
export const getDog = async (month, year) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/api/dashboard/amount-of-dogs-in-month?year=${year}&month=${month}`
    );

    return response;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
export const getCat = async (month, year) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/api/dashboard/amount-of-cats-in-month?year=${year}&month=${month}`
    );

    return response;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
