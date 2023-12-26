package com.project.petcare.service;

import java.time.YearMonth;

public interface DashboardService {
    double calculateMonthlyRevenue();
    public double calculateRevenueForMonth(YearMonth yearMonth);
    public double calculateRevenueForYear(int year);
    public int calculateTotalOrdersForMonth(YearMonth yearMonth);
    double calculateRevenue();
    int calculateTotalProductAvailability();
    public double calculateRevenuePercentageChange(YearMonth targetYearMonth);
    public double calculateOrderPercentageChange(YearMonth targetYearMonth);
    public int calculateAmountOfDogsInOrdersForMonth(YearMonth yearMonth);
    public int calculateAmountOfCatsInOrdersForMonth(YearMonth yearMonth);
    public int calculateTotalEmployeeForMonth(YearMonth yearMonth);
    public String findEffectivemployeeName(YearMonth yearMonth);
    public int findEffectivemployeeNum(YearMonth yearMonth);
    // Add other methods for dashboard functionalities
}
